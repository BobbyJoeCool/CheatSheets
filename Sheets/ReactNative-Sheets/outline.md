# React Native Reference Guide Outline (70 sheets)

## Metadata

- **Group it belongs to:** JavaScript / TypeScript
- **Folder Directory:** `Sheets/ReactNative-Sheets/rn-##-[slug].html`
- **Groups:** 16
- **Sheets:** 70
- **Drafted Date:** 2026-10-10
- **Verified-Finalized Date:** 

## Basic Information

React Native for intermediate developers who already know JavaScript/TypeScript and basic React. React gets only a 4-sheet refresher (Group 2). The shared React Native groups (components, styling, navigation, data, animation, native code, testing, release) come first, then one group per target OS: Apple iOS, other Apple platforms (iPadOS, macOS, tvOS, visionOS), Android, Windows, and Web & other out-of-tree platforms.

Targets React Native 0.87 (0.88 due Oct 12, 2026), React 19.2, New Architecture only, Hermes V1, Expo SDK 57 (RN 0.86) with SDK 58 in beta (RN 0.88). Expo is the default setup path; bare Community CLI is covered where it differs. Out-of-tree versions as of Oct 2026: RN macOS 0.83, RN Windows 0.84, RN visionOS 0.79, react-native-tvos 0.87. Gesture Handler content uses the v3 hook API (v2 builder noted as deprecated).

At 70 sheets it is above the guide's 25–50 framework range because each OS group is close to a mini-set of its own (toolchain, permissions, signing, store release).

## Differences in Layout from Basic Structure

- Sheets with two code examples stack them as two full-width Code rows instead of Code | Explain (sheets 36, 38, 40, 42, 53, 55, 64, 68).
- Code languages vary by platform group: TSX/TypeScript for app code, Swift (iOS/visionOS), Kotlin and Groovy (Android), C++ (Windows), XML, JSON, YAML (Maestro), Bash.
- Row-2 explain columns are kept at ≥ 30% of the row width when fitting, so notes don't collapse into a sliver beside long code.

## Groups

### Group 1: Introduction & Setup (Sheets 01–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `rn-01-introduction.html` | Introduction & Architecture | native views · New Architecture · Fabric · TurboModules · JSI · Hermes · platforms |
| 02 | `rn-02-creating-a-project.html` | Creating a Project | npx create-expo-app · templates · @react-native-community/cli init · Expo vs bare · Node.js 22.13+ · environment setup |
| 03 | `rn-03-project-structure.html` | Project Structure | app/ · ios/ · android/ · app.json · package.json · metro.config · babel.config · index.js entry |
| 04 | `rn-04-running-dev-workflow.html` | Running & Dev Workflow | Metro bundler · Fast Refresh · Expo Go · development builds · dev menu · npx expo start · run:ios / run:android |
| 05 | `rn-05-typescript-setup.html` | TypeScript in React Native | tsconfig · @react-native/typescript-config · strict API (0.87) · ViewInstance / TextInputInstance refs · *Props types · deep-import removal |

### Group 2: React Refresher (Sheets 06–09)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `rn-06-components-jsx-props.html` | Components, JSX & Props | function components · JSX rules · props · children · conditional rendering · lists & key · fragments |
| 07 | `rn-07-state-effect-hooks.html` | State & Effect Hooks | useState · useEffect · cleanup · dependency arrays · useRef · useMemo · useCallback |
| 08 | `rn-08-context-reducers-custom-hooks.html` | Context, Reducers & Custom Hooks | createContext · useContext · providers · useReducer · custom hooks · rules of hooks |
| 09 | `rn-09-react-19-features.html` | React 19 Features | use() · &lt;Suspense> · Actions · useActionState · useOptimistic · ref as prop · React Compiler |

### Group 3: Core Components (Sheets 10–15)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 10 | `rn-10-view-text-image.html` | View, Text & Image | &lt;View> · &lt;Text> · nesting rules · numberOfLines · &lt;Image> · source / require() · resizeMode · expo-image |
| 11 | `rn-11-textinput-keyboard.html` | TextInput & Keyboard | &lt;TextInput> · value / onChangeText · keyboardType · secureTextEntry · KeyboardAvoidingView · Keyboard.dismiss() · returnKeyType |
| 12 | `rn-12-pressable-buttons.html` | Pressable & Buttons | &lt;Pressable> · onPress / onLongPress · pressed state style · hitSlop · &lt;Button> · Touchable* legacy · android_ripple |
| 13 | `rn-13-scrollview.html` | ScrollView | &lt;ScrollView> · horizontal · contentContainerStyle · keyboardShouldPersistTaps · pagingEnabled · RefreshControl · scrollTo() |
| 14 | `rn-14-flatlist-sectionlist.html` | FlatList & SectionList | data / renderItem · keyExtractor · ListEmptyComponent · onEndReached · getItemLayout · SectionList · FlashList |
| 15 | `rn-15-modal-feedback-components.html` | Modal & Feedback Components | &lt;Modal> · presentationStyle · onRequestClose · ActivityIndicator · Switch · Alert.alert() · StatusBar |

### Group 4: Styling & Layout (Sheets 16–19)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 16 | `rn-16-stylesheet-basics.html` | StyleSheet Basics | StyleSheet.create() · style arrays · unitless numbers · no cascade · Text style inheritance · boxShadow / filter |
| 17 | `rn-17-flexbox-layout.html` | Flexbox in React Native | column default · flex: 1 · justifyContent · alignItems · gap · position: absolute · Yoga differences from web |
| 18 | `rn-18-dimensions-safe-area.html` | Dimensions, Safe Areas & Responsive Layout | useWindowDimensions · PixelRatio · react-native-safe-area-context · SafeAreaView · useSafeAreaInsets · orientation |
| 19 | `rn-19-theming-dark-mode.html` | Theming & Dark Mode | useColorScheme · Appearance · PlatformColor · theme context · NativeWind · Unistyles |

### Group 5: Navigation (Sheets 20–23)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 20 | `rn-20-expo-router-basics.html` | Expo Router Basics | app/ file routes · index · [id] dynamic routes · &lt;Link> · router.push() · useLocalSearchParams · +not-found |
| 21 | `rn-21-expo-router-layouts.html` | Expo Router Layouts | _layout.tsx · &lt;Stack> · &lt;Tabs> · (group) folders · modal presentation · Stack.Screen options · protected routes |
| 22 | `rn-22-react-navigation.html` | React Navigation | NavigationContainer · createNativeStackNavigator · bottom tabs · drawer · navigation.navigate() · route.params · static config |
| 23 | `rn-23-deep-linking.html` | Deep Linking & Universal Links | scheme · Linking.openURL() · Linking.getInitialURL() · universal links · Android App Links · expo-linking |

### Group 6: Platform-Specific Code & Config (Sheets 24–26)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 24 | `rn-24-platform-module-extensions.html` | Platform Module & File Extensions | Platform.OS · Platform.select() · Platform.Version · .ios.tsx / .android.tsx / .native.tsx / .web.tsx · Platform.isPad / isTV |
| 25 | `rn-25-app-config-plugins.html` | App Config & Config Plugins | app.json · app.config.ts · Continuous Native Generation · npx expo prebuild · config plugins · expo-build-properties |
| 26 | `rn-26-device-apis.html` | Cross-Platform Device APIs | expo-camera · expo-location · expo-notifications · expo-haptics · expo-sensors · requestPermissionsAsync() · Linking.openSettings() |

### Group 7: Data, State & Storage (Sheets 27–30)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 27 | `rn-27-networking.html` | Networking & Data Fetching | fetch() · expo/fetch · AbortController · WebSocket · TanStack Query · NetInfo · cleartext / ATS rules |
| 28 | `rn-28-state-management.html` | State Management Libraries | Zustand · Redux Toolkit · Jotai · Legend State · persisting state · when context is enough |
| 29 | `rn-29-local-storage.html` | Key-Value & Secure Storage | AsyncStorage · react-native-mmkv · expo-secure-store · Keychain / Keystore · expo-file-system · what not to store |
| 30 | `rn-30-local-databases.html` | Local Databases & Offline | expo-sqlite · op-sqlite · Drizzle · WatermelonDB · sync strategies · migrations |

### Group 8: Animation & Gestures (Sheets 31–33)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 31 | `rn-31-animated-api.html` | Animated API | Animated.Value · Animated.timing() · spring() · interpolate() · useNativeDriver · LayoutAnimation |
| 32 | `rn-32-reanimated.html` | Reanimated | useSharedValue · useAnimatedStyle · withTiming / withSpring · worklets · entering / exiting layout animations · CSS animations |
| 33 | `rn-33-gesture-handler.html` | Gesture Handler | GestureHandlerRootView · GestureDetector · usePanGesture · useTapGesture · usePinchGesture · useSimultaneousGestures · Reanimated integration |

### Group 9: Native Code & the New Architecture (Sheets 34–36)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 34 | `rn-34-turbo-native-modules.html` | Turbo Native Modules | TypeScript spec · Codegen · TurboModuleRegistry · codegenConfig · Swift / Obj-C++ · Kotlin implementation |
| 35 | `rn-35-fabric-native-components.html` | Fabric Native Components | codegenNativeComponent · props spec · native view managers · events · commands · interop layer |
| 36 | `rn-36-expo-modules-api.html` | Expo Modules API | create-expo-module · Module definition DSL · Function / AsyncFunction · Events · View · Swift & Kotlin |

### Group 10: Testing & Debugging (Sheets 37–39)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 37 | `rn-37-unit-component-testing.html` | Unit & Component Testing | Jest · jest-expo preset · React Native Testing Library · render / screen · fireEvent / userEvent · mocking native modules |
| 38 | `rn-38-e2e-testing.html` | End-to-End Testing | Maestro flows · Detox · testID · EAS Workflows · device farms · flaky test tips |
| 39 | `rn-39-debugging-performance.html` | Debugging & Performance | React Native DevTools · console & breakpoints · Performance panel · Hermes profiling · LogBox · re-render tips |

### Group 11: Build, Release & Updates (Sheets 40–43)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 40 | `rn-40-eas-build.html` | EAS Build | eas.json · build profiles · development / preview / production · eas build --platform · local builds · environment variables |
| 41 | `rn-41-eas-submit-versioning.html` | EAS Submit & Versioning | eas submit · version vs buildNumber / versionCode · autoIncrement · appVersionSource · release channels |
| 42 | `rn-42-ota-updates.html` | Over-the-Air Updates | expo-updates · EAS Update · channels & branches · runtimeVersion · rollouts · store policy limits |
| 43 | `rn-43-upgrading.html` | Upgrading React Native & Expo | release cadence · Upgrade Helper · npx expo install --fix · expo-doctor · breaking-change checklist |

### Group 12: Apple: iOS (Sheets 44–51)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 44 | `rn-44-ios-project-anatomy.html` | iOS Project Anatomy | ios/ folder · AppDelegate.swift · Info.plist · Podfile · pod install · .xcworkspace · SwiftPM (experimental) |
| 45 | `rn-45-xcode-simulators.html` | Xcode & Simulators | Xcode version · schemes & configurations · xcrun simctl · run:ios --device · Debug vs Release · Xcode build errors |
| 46 | `rn-46-ios-permissions-entitlements.html` | iOS Permissions & Entitlements | NS*UsageDescription keys · permission prompts · entitlements · capabilities · Background Modes · App Transport Security |
| 47 | `rn-47-ios-ui-conventions.html` | iOS UI Conventions & APIs | ActionSheetIOS · DynamicColorIOS · SF Symbols · haptics · large titles · Liquid Glass (expo-glass-effect) · Expo UI SwiftUI |
| 48 | `rn-48-ios-push-notifications.html` | iOS Push Notifications | APNs · push key (.p8) · expo-notifications · device tokens · provisional authorization · notification service extension |
| 49 | `rn-49-ios-signing-provisioning.html` | iOS Code Signing & Provisioning | Apple Developer account · bundle identifier · certificates · provisioning profiles · automatic signing · EAS credentials |
| 50 | `rn-50-ios-app-store-release.html` | App Store & TestFlight Release | archive · App Store Connect · TestFlight · PrivacyInfo.xcprivacy · App Review guidelines · phased release |
| 51 | `rn-51-ios-extensions-widgets.html` | iOS Extensions, Widgets & Live Activities | app extensions · WidgetKit · Live Activities · App Groups · App Clips · expo-widgets |

### Group 13: Apple: iPadOS, macOS, tvOS & visionOS (Sheets 52–55)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 52 | `rn-52-ipados.html` | iPadOS | supportsTablet · Platform.isPad · multitasking & Split View · orientation · pointer & hardware keyboard · adaptive layouts |
| 53 | `rn-53-macos.html` | macOS | react-native-macos (Microsoft) · macos/ target · AppKit differences · menus & windows · Mac Catalyst alternative · keyboard focus |
| 54 | `rn-54-tvos.html` | tvOS (Apple TV) | react-native-tvos · Platform.isTV · focus engine · TVFocusGuideView · useTVEventHandler · Siri Remote |
| 55 | `rn-55-visionos.html` | visionOS | react-native-visionos (Callstack) · windows · ornaments · immersive spaces · hover effects · visionOS simulator |

### Group 14: Android (Sheets 56–64)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 56 | `rn-56-android-project-anatomy.html` | Android Project Anatomy | android/ folder · MainActivity.kt · MainApplication.kt · AndroidManifest.xml · build.gradle · gradle.properties |
| 57 | `rn-57-android-studio-emulators.html` | Android Studio, Emulators & adb | SDK Manager · AVD emulators · adb devices · adb reverse · logcat · run:android --variant · Gradle sync errors |
| 58 | `rn-58-android-permissions.html` | Android Permissions | &lt;uses-permission> · PermissionsAndroid.request() · RESULTS · dangerous vs normal · POST_NOTIFICATIONS · shouldShowRequestPermissionRationale |
| 59 | `rn-59-android-ui-conventions.html` | Android UI Conventions & APIs | edge-to-edge · BackHandler · ToastAndroid · android_ripple · Material You colors · Expo UI Jetpack Compose |
| 60 | `rn-60-android-push-notifications.html` | Android Push Notifications | Firebase Cloud Messaging · google-services.json · notification channels · expo-notifications · data vs notification messages · Doze |
| 61 | `rn-61-android-build-config.html` | Build Types, Flavors & SDK Levels | minSdk / targetSdk / compileSdk · buildTypes · productFlavors · R8 / ProGuard · Kotlin & AGP versions · ABI splits |
| 62 | `rn-62-android-signing.html` | Android App Signing | upload keystore · keytool · signingConfigs · Play App Signing · SHA-1 / SHA-256 fingerprints · EAS credentials |
| 63 | `rn-63-google-play-release.html` | Google Play Release | .aab bundle · Play Console · internal / closed / open testing tracks · target SDK requirements · Data safety form · staged rollout |
| 64 | `rn-64-android-other-devices.html` | Android TV, Large Screens & Other Devices | react-native-tvos for Android TV · leanback · foldables · tablets · ChromeOS · resizable activities |

### Group 15: Windows (Sheets 65–67)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 65 | `rn-65-windows-setup.html` | React Native Windows Setup | react-native-windows (Microsoft) · init-windows · Visual Studio workloads · windows/ folder · run-windows · supported versions |
| 66 | `rn-66-windows-native-code.html` | Windows Native Modules & APIs | C++ / C# modules · WinRT APIs · WinAppSDK · Fabric on Windows · platform checks · Windows-only components |
| 67 | `rn-67-windows-packaging.html` | Packaging & Distributing on Windows | MSIX · Release builds · certificates · Microsoft Store · sideloading · deploy |

### Group 16: Web & Other Platforms (Sheets 68–70)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 68 | `rn-68-react-native-web.html` | React Native for Web | react-native-web · Expo web · npx expo start --web · .web.tsx files · unsupported APIs · static / server output |
| 69 | `rn-69-web-dom-components.html` | Web-Specific Patterns & DOM Components | 'use dom' DOM components · responsive breakpoints · hover & cursor · SEO / metadata · Expo Router web hosting |
| 70 | `rn-70-other-platforms.html` | Other Out-of-Tree Platforms | out-of-tree platform model · React Native OpenHarmony · React Native Skia (Linux) · community forks · picking a platform |
