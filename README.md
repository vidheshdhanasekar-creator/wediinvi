# 💍 Engagement Invitation App

A luxurious, cinematic engagement invitation web app built with React + Tailwind CSS + Framer Motion and a simple Express backend.

## Quick Start

### 1. Install & run the backend
```bash
cd server
npm install
npm run dev
# Runs on http://localhost:5000
```

### 2. Install & run the frontend
```bash
cd client
npm install
npm start
# Runs on http://localhost:3000
```

## Customize

All content (names, dates, venue, story) is in one place:

**`client/src/App.jsx`** — edit `COUPLE_DATA`, `STORY_ITEMS`, `EVENT_DATA`, and `GALLERY_IMAGES` at the top of the file.

## Add Background Music

Drop an MP3 file at `client/public/music.mp3` — the music toggle button will play it automatically.

## Add Real Photos

In `App.jsx`, update `GALLERY_IMAGES`:
```js
const GALLERY_IMAGES = [
  { src: '/photos/photo1.jpg', alt: 'Our first date' },
  { src: '/photos/photo2.jpg', alt: 'Family gathering' },
];
```
Place images in `client/public/photos/`.

## API

| Method | Endpoint      | Description          |
|--------|---------------|----------------------|
| POST   | `/rsvp`       | Submit RSVP          |
| GET    | `/responses`  | View all RSVPs (admin) |

## Tech Stack

- React 18 + Tailwind CSS
- Framer Motion (animations)
- tsParticles (sparkle background)
- Express + better-sqlite3 (backend)
- react-confetti (RSVP celebration)
