import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase";
import { calculateScores } from "@/lib/scoring";
import { determineType } from "@/lib/typeClassifier";
import { APPLICANT_QUESTIONS } from "@/data/applicantQuestions";
import { COMPANY_QUESTIONS } from "@/data/companyQuestions";
import { SaveDiagnosisRequest } from "@/types/database";

export async function POST(request: NextRequest) {
  try {
    const body: SaveDiagnosisRequest = await request.json();

    // Validate type
    if (body.type !== "applicant" && body.type !== "company") {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    // Validate email (required)
    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    // Validate answers
    const questions =
      body.type === "company" ? COMPANY_QUESTIONS : APPLICANT_QUESTIONS;
    const answerKeys = Object.keys(body.answers);
    if (answerKeys.length !== questions.length) {
      return NextResponse.json(
        { error: "Incomplete answers" },
        { status: 400 }
      );
    }

    // Recalculate scores server-side (don't trust client)
    const scores = calculateScores(body.answers, questions);
    const { main, sub } = determineType(scores);

    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase
      .from("diagnoses")
      .insert({
        type: body.type,
        email: body.email,
        answers: body.answers,
        answer_details: body.answer_details || null,
        scores: scores,
        main_type: main.key,
        sub_type: sub.key,
      })
      .select("id")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Failed to save" }, { status: 500 });
    }

    return NextResponse.json({ id: data.id });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
