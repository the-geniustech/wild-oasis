import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rasqmjesotrjwwjkjlwb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhc3FtamVzb3Ryand3amtqbHdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2NjQ2MjgsImV4cCI6MjAxNjI0MDYyOH0.2cRKqJfXkbV_3lrLHYpFLfwxlNy5JL2ThUMgVZP--EY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
