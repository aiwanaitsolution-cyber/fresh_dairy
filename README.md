# FreshDay Commerce Platform

FreshDay is organized as a production-oriented monorepo:

```text
fresh_dairy/
├── website/   # Next.js marketing site + web customer/admin previews
├── app/       # React Native / Expo customer mobile app
├── backend/   # FastAPI + SQLAlchemy + MySQL API
└── .github/   # CI workflows
```

## Local development

### Website

```bash
cd website
npm ci
npm run dev
```

### Mobile app

```bash
cd app
npm ci
npx expo start
```

### Backend

```bash
cd backend
docker compose up -d db
python -m venv .venv
./.venv/Scripts/pip install -r requirements.txt
./.venv/Scripts/python seed.py
./.venv/Scripts/uvicorn app.main:app --reload
```

## Android APK

```powershell
cd app
$env:ANDROID_HOME="C:\Users\<you>\AppData\Local\Android\Sdk"
$env:ANDROID_SDK_ROOT=$env:ANDROID_HOME
npm run apk:debug
```

The debug APK is created at `app/android/app/build/outputs/apk/debug/app-debug.apk`.
