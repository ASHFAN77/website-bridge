import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eaaudnhtxjufnyosfmqa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhYXVkbmh0eGp1Zm55b3NmbXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNjQxMDgsImV4cCI6MjA5Njk0MDEwOH0.twPjp2H7tRLcxyDrKMrmuwXgK8DOcNZKSUrQq2Eur90';

export const supabase = createClient(supabaseUrl, supabaseKey);
