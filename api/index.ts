import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const app = new Hono();

const userSchema = z.object({
  id: z.string().uuid().optional(),
  email: z.string().email(),
  name: z.string().min(2).max(100),
});

type User = z.infer<typeof userSchema>;

const users: User[] = [];

app.get("/api", (c) => {
  return c.text("Hello Lele!");
});

app.get("/api/bye", (c) => {
  return c.text("Bye Lele!");
});
app.post("/api/users", zValidator("json", userSchema), async (c) => {
  const body = await c.req.json();
  users.push(body);
  return c.json({ message: "User created!", data: body });
});

app.get("/api/users", (c) => {
  return c.json({ message: "Users retrieved!", data: users });
});
export default app;
