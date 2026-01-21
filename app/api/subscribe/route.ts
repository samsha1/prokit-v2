
import { supabase } from "app/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            return NextResponse.json({ error: "Invalid email request" }, { status: 400 });
        }

        // Check if email already exists
        const { data: existingSubscriber } = await supabase
            .from("subscribers")
            .select("email")
            .eq("email", email)
            .single();

        if (existingSubscriber) {
            return NextResponse.json({ error: "You have already subscribed!" }, { status: 400 });
        }

        const { error } = await supabase.from("subscribers").insert({ email });

        if (error) {
            console.error("Supabase error:", error);
            return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
        }

        return NextResponse.json({ message: "Subscribed successfully!" });
    } catch (error) {
        console.error("Unexpected error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
