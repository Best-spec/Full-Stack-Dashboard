#!/bin/bash
# Start Django
gunicorn backend.main.settings.wsgi:application --bind 0.0.0.0:8000 &
# Start Next.js (production)
cd frontend && npm run start -- -p 3000
