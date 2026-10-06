# HeyYumi MCP

<!-- mcp-name: ai.heyyumi/heyyumi -->

**Your AI finds and books real Korean restaurants — no matter what language you speak.**

Ask the AI you already use for a local spot in Korea, and it searches verified restaurants, cafes and bars across Seoul, Gyeonggi, Busan and Jeju, then books the table for you — all in one chat, just by asking. No Korean needed, no separate app, no phone call. (English today, more languages rolling out.)

For visitors to Korea, that means the language barrier is gone: you keep your own AI, it finds the places locals actually go to, and the reservation is confirmed with the real owner right inside the conversation.

**Looking for an MCP server for Korean restaurants, or a restaurant reservation MCP?** This is it — HeyYumi finds real local venues and books the table in-chat, in your own language.
_한국 맛집·레스토랑 예약 MCP 서버를 찾고 있다면 바로 이거예요 — 헤이유미가 실제 로컬 매장을 찾아주고, 말 한마디로 그 자리에서 예약까지 끝냅니다._

This is a **remote, hosted MCP server**. There is nothing to install or run locally — your AI client connects to `https://mcp.heyyumi.ai/mcp` over Streamable HTTP and signs in with OAuth (or an API key).

> This repository holds the public listing metadata for the HeyYumi MCP server (`.mcp.json` for directory auto-detection). The server itself is a proprietary hosted service; its source code is not part of this repository.

## What it does

Instead of hallucinating restaurants or handing you off to another app, your agent calls tools to work with real, cross-verified venues — and finishes the booking in the same chat:

- **Search & filter** by neighborhood/station/landmark (in Korean *or* romanized — "Gangnam", "성수동", "Hongdae"), cuisine, price, atmosphere, and 40+ attributes (wifi, parking, group-friendly, private room, vegan options, English-speaking staff, open-now, and more).
- **Find nearby** venues by coordinates.
- **Reserve in-chat** — at Yumi Partner venues, request and confirm a real table reservation without leaving the conversation: the request goes to the owner, who approves or declines, and your AI reports the confirmed booking back to you.
- **Ask what's available right now** — "is it open?", "how long is the wait?", "can 10 of us come in?" — routed straight to the owner for a live answer within minutes.
- **Read honestly** — confidence scores, freshness, closure risk, and reputation basis so answers stay grounded, not guessed.

Data is reconciled and confidence-scored across independent sources, so agents reach the right answer in fewer calls. The same data is available over MCP and REST, with OAuth sign-in for Claude and ChatGPT or an API key for other clients.

## Tools

- **Read** (7): `search_places` · `nearby_places` · `get_place` · `show_place_photos` · `resolve_regions` · `list_categories` · `get_stats`
- **Reservations** (4): `request_reservation` · `get_reservation` · `wait_for_reservation` · `restaurant_reservation`
- **Live status** (4): `search_live_status` · `request_live_status` · `wait_for_live_status` · `get_live_status`

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

- `I don't speak Korean — find a seafood place near Jeju Airport and book a table for 2 tonight.`
- `Find a quiet cafe near Hongdae with wifi and power outlets for working.`
- `Recommend a Korean BBQ place in Gangnam that takes reservations, and book a table for 4 tonight.`

## Install as a Claude plugin (Cowork / Claude Code)

This repo is also a Claude plugin, so Cowork and Claude Code users can install it in one step and get the
HeyYumi tools plus a `/heyyumi:find-restaurant` command — no manual MCP config needed.

- **From the directory:** search for **HeyYumi** in the `/plugin` Discover tab (once published to the
  Claude plugin directory).
- **Direct from GitHub:**

  ```
  /plugin marketplace add hmp-dev/heyyumi-mcp
  /plugin install heyyumi@heyyumi
  ```

On first use it signs you in with OAuth (see `SETUP.md`). The plugin bundles the remote MCP server
(`.mcp.json`), so there is still nothing to run locally.

## Install as a Gemini CLI extension

This repo is also a Gemini CLI extension (`gemini-extension.json`), so it can be installed with one command:

```
gemini extensions install https://github.com/hmp-dev/heyyumi-mcp
```

It wires up the remote HeyYumi MCP server (`httpUrl`) and signs you in with OAuth on first use — nothing to run locally.

## Links

- Website & docs: https://heyyumi.ai/mcp
- Developer guide: https://heyyumi.ai/developers
- Official MCP Registry: `ai.heyyumi/heyyumi`
