# Installing HeyYumi in Cline

HeyYumi is a **remote, hosted MCP server** that speaks Streamable HTTP. There is
**nothing to clone, build, install, or run locally** — Cline just connects to the
hosted endpoint. No npm package, no environment variables, no local process.

## 1. Add the remote server

Add HeyYumi to Cline's MCP settings (`cline_mcp_settings.json`, or use
**Cline → MCP Servers → Configure MCP Servers**):

```json
{
  "mcpServers": {
    "heyyumi": {
      "type": "streamableHttp",
      "url": "https://mcp.heyyumi.ai/mcp"
    }
  }
}
```

With this (OAuth) setup, Cline prompts you to sign in with Google on first use.

## 2. Or connect with an API key (no OAuth prompt)

Get a free key at <https://heyyumi.ai/mcp> and pass it as a bearer header:

```json
{
  "mcpServers": {
    "heyyumi": {
      "type": "streamableHttp",
      "url": "https://mcp.heyyumi.ai/mcp",
      "headers": { "Authorization": "Bearer YOUR_HMP_KEY" }
    }
  }
}
```

## 3. Verify it works

After saving, Cline's **MCP Servers** panel should show **heyyumi** connected with
**15 tools**:

`search_places` · `nearby_places` · `get_place` · `show_place_photos` ·
`resolve_regions` · `list_categories` · `get_stats` · `request_reservation` ·
`get_reservation` · `wait_for_reservation` · `search_live_status` ·
`request_live_status` · `wait_for_live_status` · `get_live_status` ·
`restaurant_reservation`

Then try a prompt such as:

- `Find a quiet cafe near Hongdae with wifi and power outlets for working.`
- `Recommend a Korean BBQ place in Gangnam that takes reservations, and book a table for 4 tonight.`

That's it — no local setup, no secrets in code, no build step.
