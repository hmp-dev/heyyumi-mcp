# HeyYumi MCP

Ground your AI in verified Korean venue data: search, filter and book real restaurants, cafes and bars across Seoul, Gyeonggi, Busan and Jeju — with in-chat reservations at partner venues.

This is a **remote, hosted MCP server**. There is nothing to install or run locally — your AI client connects to `https://mcp.heyyumi.ai/mcp` over Streamable HTTP and signs in with OAuth (or an API key).

> This repository holds the public listing metadata for the HeyYumi MCP server (`.mcp.json` for directory auto-detection). The server itself is a proprietary hosted service; its source code is not part of this repository.

## What it does

Instead of hallucinating restaurants, your agent calls tools to work with real, cross-verified venues:

- **Search & filter** by neighborhood/station/landmark, cuisine, price, atmosphere, and 40+ attributes (wifi, parking, group-friendly, private room, vegan options, English-speaking staff, open-now, and more).
- **Find nearby** venues by coordinates.
- **Read honestly** — confidence scores, freshness, closure risk, and reputation basis so answers stay grounded, not guessed.
- **Reserve in-chat** — at Yumi Partner venues, request and confirm a real table reservation without leaving the conversation.

Data is reconciled and confidence-scored across sources, so agents reach the right answer in fewer calls. The same data is available over MCP and REST, with OAuth sign-in for Claude and ChatGPT or an API key for other clients.

## Tools

- **Read**: `search_places` · `nearby_places` · `get_place` · `show_place_photos` · `resolve_regions` · `list_categories` · `get_stats`
- **Reservations**: `request_reservation` · `get_reservation` · `wait_for_reservation`

## Connect

Add this to your client's MCP config (e.g. `~/.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "heyyumi": {
      "url": "https://mcp.heyyumi.ai/mcp"
    }
  }
}
```

Your client will prompt you to sign in (OAuth). Then try prompts like:

- `Find a quiet cafe near Hongdae with wifi and power outlets for working.`
- `Recommend a Korean BBQ place in Gangnam that takes reservations, and book a table for 4 tonight.`
- `I'm near Aewol in Jeju — show highly rated seafood restaurants that are open now.`

## Links

- Website & docs: https://heyyumi.ai/mcp
- Developer guide: https://heyyumi.ai/developers
- Official MCP Registry: `ai.heyyumi/heyyumi`
