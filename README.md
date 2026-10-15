# Alcor Docs

Source of [docs.alcor.exchange](https://docs.alcor.exchange): the user guides and the API reference.
Built with [Fumadocs](https://fumadocs.dev) as a static site for Cloudflare Pages.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

## Where things are

| Path | What |
| --- | --- |
| `content/docs/` | Pages, one `.mdx` per URL: `alcor-swap/pool-page.mdx` is `/alcor-swap/pool-page` |
| `content/docs/api/` | The API reference, at `/api` |
| `content/docs/**/meta.json` | Sidebar order and section titles |
| `public/images/` | Images used by the pages |
| `lib/shared.ts` | Site name, routes and the GitHub repo |

Pages are served from the site root, so the URLs of the old GitBook site still work.
The search index is at `/search.json`, which leaves `/api` to the reference.

## Writing a page

Add an `.mdx` file with a `title` (and optionally a `description`) in its frontmatter,
then list it in the folder's `meta.json`. Components available in every page:
`<Callout type="info|warn|error|success">`, `<Tabs items={[...]}>` with `<Tab value="...">`,
`<Cards>` and `<Card>`.

## Deploy

Cloudflare Pages, connected to this repository:

- Build command: `npm run build`
- Output directory: `out`
- Node version: 20 or newer
