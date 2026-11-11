# FreshDay FastAPI backend

## Run locally

1. Copy `.env.example` to `.env`.
2. Start MySQL: `docker compose up -d mysql`.
3. Create an environment and install packages: `py -m venv .venv`, then `.venv\Scripts\pip install -r requirements.txt`.
4. Start the API from this folder: `.venv\Scripts\uvicorn app.main:app --reload --port 8000`.

API docs are available at `http://127.0.0.1:8000/docs`.

The frontend starts in offline demo mode so the Android build is testable without an API server. Set the mobile API base URL to `http://10.0.2.2:8000` for an Android emulator or to the development machine LAN IP for a physical device.

