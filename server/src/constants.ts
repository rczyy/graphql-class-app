import "dotenv/config";

export const prod = process.env.NODE_ENV === "production";
export const port = process.env.PORT!;
export const mongoUri = process.env.MONGO_URI!;
export const sessionSecret = process.env.SESSION_SECRET!;
