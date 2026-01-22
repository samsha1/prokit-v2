
import { supabase } from "app/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
        return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("slug", slug)
        .order("created_at", { ascending: true }); // Oldest first for chronological conversation

    if (error) {
        console.error("Error fetching comments:", error);
        return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });
    }

    return NextResponse.json(data);
}

export async function POST(request: Request) {
    try {
        const { slug, content, name, email, parent_id, admin_secret } = await request.json();

        // Validate required fields
        if (!slug || !content) {
            return NextResponse.json({ error: "Slug and content are required" }, { status: 400 });
        }

        let finalName = name;
        let finalEmail = email;
        let isAdmin = false;

        // Admin Verification Logic
        if (admin_secret && admin_secret === process.env.ADMIN_SECRET) {
            isAdmin = true;
            finalName = "Samrat Shakya";
            finalEmail = "samratshakya5@gmail.com";
        }

        // Require Name/Email if not Admin
        if (!isAdmin && (!finalName || !finalEmail)) {
            return NextResponse.json({ error: "Name and Email are required" }, { status: 400 });
        }

        const { data, error } = await supabase
            .from("comments")
            .insert({
                slug,
                content,
                name: finalName,
                email: finalEmail,
                parent_id: parent_id || null,
                is_admin: isAdmin,
            })
            .select()
            .single();

        if (error) {
            console.error("Error posting comment:", error);
            return NextResponse.json({ error: "Failed to post comment" }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("Unexpected error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
