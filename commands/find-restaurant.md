---
description: Find (and optionally book) a Korean restaurant, cafe, or bar with HeyYumi — real, cross-verified venues with in-chat reservations at partner venues.
argument-hint: [what you're looking for, e.g. "quiet date-night place near Gangnam Station that takes reservations"]
---

You have the HeyYumi MCP tools connected (`search_places`, `nearby_places`, `get_place`,
`show_place_photos`, `resolve_regions`, `request_reservation`, `wait_for_reservation`, and more).
Use them to answer the user's request for a Korean restaurant, cafe, or bar. Do not invent venues —
every place you name must come from a tool result.

The user is looking for: $ARGUMENTS

Follow this flow:

1. **Pin the place.** If the request names a neighborhood, subway station, or landmark (e.g. 강남역,
   성수동, 홍대, 제주공항), pass it straight to `search_places` as `region_name` — it accepts Korean or
   romanized names. Only call `resolve_regions` first when the name is ambiguous (e.g. 강서구 exists in
   both Seoul and Busan) or you need coordinates for `nearby_places`.

2. **Turn the ask into filters, not keywords.** Map intent to structured filters — cuisine/`subtype`,
   `atmosphere` (quiet, cozy, lively), `recommended_for` (date, group_dining, family), `open_at`
   (a time or meal window like "dinner"), `reservation_channel`, price, parking, vegan/dietary, and so on.
   Send a dish or venue name as `keyword`, not the mood words around it.

3. **Read the data honestly.** Respect confidence, freshness, and `possiblyClosed`. If a match is only
   a side dish or address hit (see `matchReason` / `keywordMatch`), say so instead of presenting it as a
   specialist. Report review counts as plain numbers — never attribute them to a specific map platform,
   and never make up a star rating.

4. **Offer the reservation when it's real.** If a shortlisted venue is a Yumi Partner
   (`yumiReservable: true`), tell the user up front they can book right here in the chat, and offer to
   send a request with `request_reservation` (it starts as *pending* and the owner confirms — it is a
   request, not a guaranteed-held seat). Then poll `wait_for_reservation` and report the outcome.

Present a short shortlist (2–5 places) with the one detail that answers the user's ask, and end by
offering to pull photos (`show_place_photos`) or send a reservation.
