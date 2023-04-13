import {createClient} from '@supabase/supabase-js'

const URL = 'https://castplvyaxdxfzcegske.supabase.co' // URL of the Supabase server
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhc3RwbHZ5YXhkeGZ6Y2Vnc2tlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwOTAxMDcsImV4cCI6MTk5NjY2NjEwN30.tH1o8vghB39r3BMSlooxjZa9xx7vgqLUjBZoK0uBmu4' // API key of the Supabase server

export const supabase = createClient(URL, API_KEY)


