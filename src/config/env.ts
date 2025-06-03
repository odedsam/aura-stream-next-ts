import { z } from "zod";

const envSchema = z.object({
  IMDB_API_KEY: z.string().nonempty(),
  IMDB_ACCESS_TOKEN: z.string().nonempty(),
  NEXT_PUBLIC_TMDB_IMAGE_BASE: z.string().url(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("❌ Invalid environment variables:", _env.error.format());
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
