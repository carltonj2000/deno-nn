const raw = await Deno.readFile("test_file.txt");
const decoder = new TextDecoder("utf-8");
const data = decoder.decode(raw);
console.log(data);

const data2 = await Deno.readTextFile("test_file.txt");
console.log(data);

const encoder = new TextEncoder();
const newData = data + "new data";
const newRaw = encoder.encode(newData);
await Deno.writeFile("newFile.txt", newRaw);

await Deno.copyFile("newFile.txt", "copyFile.txt");
await Deno.copyFile("newFile.txt", "renameMe.txt");

await Deno.rename("copyFile.txt", "renamedFile.txt");
await Deno.rename("renameMe.txt", "deleteMe.txt");

await Deno.remove("deleteMe.txt");
