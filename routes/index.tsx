import define from "$utils/fresh.ts";

export const handler = define.handlers({
  GET: (ctx) => {
    return new Response("", {
      status: 307,
      headers: { location: `/accordion/with-nested-accordion` },
    });
  },
});