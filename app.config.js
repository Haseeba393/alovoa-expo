// const EAS_PROJECT_ID = process.env.EAS_PROJECT_ID;
// const EXPO_OWNER = process.env.EXPO_OWNER;

module.exports = {
  expo: {
    name: "SweetLove KR – Trial",
    slug: "alovoa-expo",
    version: "2.2.4",
    scheme: "alovoa",
    orientation: "portrait",
    userInterfaceStyle: "automatic",
    icon: "./assets/icon.png",
    newArchEnabled: true,
    plugins: [
      [
        "expo-image-picker",
        {
          photosPermission:
            "The app accesses your photos to let you share them with other users.",
        },
      ],
      "./plugins/setClearTextTrafficFalse",
      "expo-localization",
      [
        "expo-build-properties",
        {
          android: {
            compileSdkVersion: 35,
            targetSdkVersion: 35,
            buildToolsVersion: "35.0.0",
          },
          ios: {
            deploymentTarget: "15.1",
          },
        },
      ],
    ],
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ec407a",
      dark: {
        image: "./assets/splash.png",
        backgroundColor: "#121212",
      },
    },
    updates: {
      enabled: false,
      checkAutomatically: "ON_ERROR_RECOVERY",
      url: "b47d9878-a5fe-44c5-9c1d-af44b9e6f8f2",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      usesAppleSignIn: true,
      bundleIdentifier: "com.alovoa.expo",
      associatedDomains: ["applinks:alovoa.com"],
      infoPlist: {
        LSApplicationQueriesSchemes: ["alovoa"],
        ITSAppUsesNonExemptEncryption: false,
        NSLocationWhenInUseUsageDescription:
          "This app uses the location to list other users in close proximity",
        NSDocumentsFolderUsageDescription:
          "This app uses the Documents folder to store the requested user data",
        NSMicrophoneUsageDescription:
          "This app uses the microphone to record the users voice for other users",
      },
      buildNumber: "37",
    },
    android: {
      icon: "./assets/icon-round.png",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        monochromeImage: "./assets/monochrome-icon.png",
        backgroundColor: "#ec407a",
      },
      intentFilters: [
        {
          action: "VIEW",
          data: [
            {
              scheme: "alovoa",
            },
          ],
          category: ["BROWSABLE", "DEFAULT"],
        },
      ],
      package: "com.alovoa.expo",
      permissions: [
        "android.permission.ACCESS_COARSE_LOCATION",
        "android.permission.ACCESS_FINE_LOCATION",
        "android.permission.RECORD_AUDIO",
      ],
      versionCode: 42,
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "b47d9878-a5fe-44c5-9c1d-af44b9e6f8f2",
      },
    },
    runtimeVersion: {
      policy: "appVersion",
    },
  },
};
