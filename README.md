# paranormal-sighting-webapp

The online home of paranormal sightings — a full-stack web app built with **vanilla Node.js** and **vanilla JavaScript**, no frameworks.

Users can read submitted ghost sightings, upload their own, and follow a live "spooky news" feed powered by server-sent events.

## Features

- **Browse sightings** — cards rendered from a JSON data store, with expand/collapse "read in full" behaviour.
- **Upload sightings** — a form that POSTs to the API; input is validated client-side and sanitized server-side.
- **Live news feed** — a server-sent events (SSE) stream pushes a random news headline every few seconds.
- **Event-driven alerts** — adding a sighting emits an event that triggers an alert handler (e.g. notify a "ghost hunter" in that location).
- **Custom static file server** — serves HTML/CSS/JS/images with correct content types and a custom 404 page.
- **HTML sanitization** — submitted text is cleaned with `sanitize-html`, allowing only `<b>` tags.

## Tech Stack

- **Runtime:** Node.js (ES modules — `"type": "module"`)
- **Server:** Node's built-in `http` module (no Express)
- **Data:** flat-file JSON (`data/data.json`)
- **Realtime:** Server-Sent Events via `EventSource`
- **Events:** Node's built-in `events` (`EventEmitter`)
- **Frontend:** HTML, CSS, vanilla JS (fonts via Google Fonts)
- **Dependency:** [`sanitize-html`](https://www.npmjs.com/package/sanitize-html)

## API

| Method | Endpoint     | Description                                  |
|--------|--------------|----------------------------------------------|
| GET    | `/api`       | Returns all sightings as JSON.               |
| POST   | `/api`       | Submits a new sighting (JSON body).          |
| GET    | `/api/news`  | Server-sent events stream of news headlines. |

**POST `/api` body shape:**

```json
{
  "title": "A ghostly encounter",
  "text": "I was trying to get to sleep when...",
  "timeStamp": "11 June 2026 at 15:25",
  "location": "London, UK"
}
```

## Getting Started

### Prerequisites
- Node.js v20 or newer

### Install

```bash
git clone https://github.com/<your-username>/from-the-other-side.git
cd from-the-other-side
npm install
```

### Run

```bash
node server.js
```

Then open **http://localhost:8000** in your browser.
