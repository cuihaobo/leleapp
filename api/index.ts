import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const app = new Hono();

const userSchema = z.object({
  id: z.string().uuid().optional(),
  email: z.string().email(),
  name: z.string().min(2).max(100),
});

app.get("/api", (c) => {
  return c.text("Hello Lele!");
});

app.get("/api/bye", (c) => {
  return c.text("Bye Lele!");
});
app.post("/api/users", zValidator("json", userSchema), async (c) => {
  const body = await c.req.json();
  // console.log("Received request body:", body);
  // const userData = userSchema.safeParse(body);
  // if (!userData.success) {
  //   return c.json({ error: "Invalid user data", details: userData.error }, 400);
  // }
  // console.log("Received user data:", userData.data);
  return c.json({ message: "User created!" });
});

export default app;
