import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";
import { serve } from "https://deno.land/std/http/server.ts";
import {
  camelCase,
  paramCase,
  pascalCase,
  snakeCase,
} from "https://deno.land/x/case/mod.ts";

const uid = v4.generate();

console.log(uid);

const data = await readJson("cj.json");
console.log(data);

const books = [
  { title: "a", author: "a auth" },
  { title: "b", author: "b auth" },
];

await writeJson("books.json", books, { spaces: 2 });

const text = "hello again ninjas";
const camel = camelCase(text);
const param = paramCase(text);
const snake = snakeCase(text);
const pascal = pascalCase(text);
console.log(camel, param, snake, pascal);

const server = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of server) {
  console.log("request made");
  const url = req.url;
  req.respond({ body: `Hello Dude! Your visited from ${url}\n` });
}
