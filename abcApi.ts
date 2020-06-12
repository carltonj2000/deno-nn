import {
  Application,
  Context,
} from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";

import {
  get_all_books,
  get_book,
  create_book,
  delete_book,
} from "./controllers/bookController.ts";

const app = new Application();

app.static("/", "./public");

app
  .get("/", async (ctx) => await ctx.file("./public/index.html"))
  .get("/books", get_all_books)
  .get("/books/:id", get_book)
  .post("/books", create_book)
  .delete("/books/:id", delete_book)
  .start({ port: 8080 });
