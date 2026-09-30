# Firebase setup — Color Clash

Color Clash uses the existing Firebase project `couple-battleship`.

## Realtime Database path

`colorClashRooms/<room-code>`

## Required Firebase setup

1. Anonymous Authentication must stay enabled.
2. Merge the contents of `firebase-rules-fragment.json` inside the existing top-level `"rules"` object.
3. Do **not** replace or delete existing rules for `rooms`, `familyBankRooms`, `millionaireRooms`, or `kitchenHomes`.

### Privacy model

- Room metadata, turn state, player names and hand counts are visible to authenticated players.
- `hands/<uid>` is readable only by that same Firebase anonymous user.
- The host can write hands only to deal the initial cards.
- Draw-pile cards are readable only by the player whose turn it is, and only at the current draw slot.
