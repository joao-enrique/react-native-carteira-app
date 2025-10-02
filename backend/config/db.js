import { neon } from "@neondatabase/serverless"

import "dotenv/config"

//CREATE A SQL CONNECTION USING OUR DB URL
export const sql = neon(process.env.DATABASE_URL)