import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url("DATABASE_URL must be a valid PostgreSQL connection string"),
  SUPABASE_URL: z.string().url("SUPABASE_URL must be a valid URL"),
  SUPABASE_ANON_KEY: z.string().min(1, "SUPABASE_ANON_KEY is required"),
  GOOGLE_CLIENT_ID: z.string().min(1, "GOOGLE_CLIENT_ID is required"),
  GOOGLE_CLIENT_SECRET: z.string().min(1, "GOOGLE_CLIENT_SECRET is required"),
  TMDB_API_KEY: z.string().min(1, "TMDB_API_KEY is required"),
  TMDB_ACCESS_TOKEN: z.string().min(1, "TMDB_ACCESS_TOKEN is required"),
  NEXT_PUBLIC_TMDB_IMAGE_BASE: z.string().url("NEXT_PUBLIC_TMDB_IMAGE_BASE must be a valid URL"),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url("NEXT_PUBLIC_SUPABASE_URL must be a valid URL").optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1, "NEXT_PUBLIC_SUPABASE_ANON_KEY is required").optional(),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("❌ Invalid environment variables:");
  console.error(_env.error.format());
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
export type Env = z.infer<typeof envSchema>;
export const isDev = env.NODE_ENV === "development";
export const isProd = env.NODE_ENV === "production";

export const clientEnv = Object.fromEntries(
  Object.entries(env).filter(([key]) => key.startsWith("NEXT_PUBLIC_"))
) as Pick<Env, keyof Env & `NEXT_PUBLIC_${string}`>;
