# FreshDay React Native app

This is the standalone Expo/React Native customer app demo. It runs offline with seeded demo catalogue, cart, 30-day plan, order tracking, profile and support flows.

## Run locally

```bash
npm install
npx expo start
```

## Build Android APK

```powershell
$env:ANDROID_HOME="C:\Users\<you>\AppData\Local\Android\Sdk"
$env:ANDROID_SDK_ROOT=$env:ANDROID_HOME
npm run apk:debug
```

The APK is emitted at `android/app/build/outputs/apk/debug/app-debug.apk`.

For this workspace the Android bundle exports successfully, but the local C: drive must have several GB free for the React Native and Hermes Gradle artifacts before native APK compilation can finish.
