import asciiArt from "./asciiArt.ts";

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const body = asciiArt('Bun!');
    return new Response(body);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
