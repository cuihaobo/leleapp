import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/bye', (c) => {
  return c.text('Bye Hono!')
})

export default app
