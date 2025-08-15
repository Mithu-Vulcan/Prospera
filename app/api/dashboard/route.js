import { supabase } from "@/lib/supabaseClient";

export async function GET(req) {
    const userId = req.headers.get('user_id')
}