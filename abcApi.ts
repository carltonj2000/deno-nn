import {
  Application,
  Context,
} from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";

const app = new Application();

app.static("/", "./public");

app
  .get("/", async (ctx: Context) => {
    console.log("request made");
    await ctx.file("./public/index.html");
  })
  .get("/hello", (c) => {
    return "Hello, Abc!";
  })
  .start({ port: 8080 });
