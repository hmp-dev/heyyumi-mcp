---
name: heyyumi-setup
description: How to connect and sign in to the HeyYumi MCP server so its tools become available.
---

# Connecting HeyYumi

HeyYumi is a **remote, hosted MCP server**. There is nothing to install or run locally — this plugin
just points your client at `https://mcp.heyyumi.ai/mcp` (see `.mcp.json`). When the plugin is enabled,
your client connects over Streamable HTTP and the HeyYumi tools (`search_places`, `nearby_places`,
`get_place`, `request_reservation`, and more) appear.

## Signing in

The server requires authentication before it returns data. It supports two ways in:

1. **OAuth sign-in (recommended for Claude / ChatGPT).** The server advertises OAuth 2.1 with dynamic
   client registration, so on first use your client will open a browser for you to authorize HeyYumi.
   No key to copy or paste. If you are not prompted, trigger any HeyYumi tool once and approve the
   authorization when it appears.

2. **API key (for clients without OAuth).** Get a key at https://heyyumi.ai/mcp (it looks like
   `hmp_…`) and send it as a bearer token: `Authorization: Bearer hmp_…`. Keep the key private.

## Verifying it works

Ask for something simple, for example: "Find a quiet cafe near Hongdae that's open now." If the tools
are connected, the answer will come from real venues (with confidence and freshness signals) rather
than a guess. If you get an authorization error, complete the OAuth sign-in above or check your API key.

## Notes

- Coverage is strongest in Seoul, Gyeonggi, Busan, and Jeju, and is expanding nationwide. If an area
  is out of coverage, HeyYumi says so rather than guessing.
- In-chat reservations work only at Yumi Partner venues (`yumiReservable: true`). A reservation starts
  as *pending* and is confirmed by the venue owner — it is a request, not a held seat.
