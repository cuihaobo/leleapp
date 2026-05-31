import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Lele!");
});

app.get("/bye", (c) => {
  return c.text("Bye Lele!");
});

export default app;
