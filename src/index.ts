import { Hono } from "hono";

const app = new Hono();

app.get("/api", (c) => {
  return c.text("Hello Lele!");
});

app.get("/api/bye", (c) => {
  return c.text("Bye Lele!");
});

export default app;
