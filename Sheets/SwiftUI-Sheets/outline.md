# SwiftUI Reference Guide Outline (59 sheets)

## Metadata

- **Group it belongs to:** Languages
- **Folder Directory:** `Sheets/SwiftUI-Sheets/swiftui-##-[slug].html`
- **Groups:** 16
- **Sheets:** 59
- **Drafted Date:** 2026-10-26
- **Verified-Finalized Date:**

## Basic Information

A reference for building apps with SwiftUI, Apple's declarative UI framework. It is the companion to the Swift set: it assumes the reader knows the language (structs, closures, protocols, `some View`, property wrappers, async/await) and starts at SwiftUI's own concepts. Aimed at intermediate developers building iPhone and iPad apps, with notes for macOS, watchOS and visionOS where they differ.

Code-first: every sheet leads with real SwiftUI code. Examples that define a complete view end with a short `#Preview` so the reader can paste them into Xcode and see the result. The baseline is **iOS 17 / macOS 14**, so `@Observable` is the default for model state and SwiftData is the default for persistence. Newer APIs (iOS 18, iOS 26 Liquid Glass) are taught where they are now the normal way, with the Minimum OS box giving the fallback. Older patterns (`ObservableObject`, `NavigationView`, `PreviewProvider`) get one legacy sheet or a side note so readers can recognize them in existing code.

Scope limits: WidgetKit, App Intents, RealityKit and App Store submission are out of scope. UIKit is covered only where it meets SwiftUI (Group 13). Language features are linked back to the Swift set rather than re-taught.

## Differences in Layout from Basic Structure

- **"Minimum OS" box** on every sheet (except 58–59), placed under Code Explained. Lists the iOS / macOS versions each API on the sheet needs, and the older fallback when one exists (for example, `@Observable` needs iOS 17; before that, `ObservableObject`).
- **"UIKit / React Equivalent" box** on every sheet (except 58–59), placed under Code Explained. Shows what the SwiftUI code replaces in UIKit and how the same thing is done in React Native (or web React where it differs). Parallels the Gradle Equivalent box in the Maven set and points readers to the React Native set.
- **"Accessibility" box** on selected sheets, placed under Code Explained. VoiceOver labels, traits, Dynamic Type and Reduce Motion behavior for the views on that sheet. Sheets that get the box: 06, 07, 08, 20, 21, 22, 23, 25, 26, 27, 36, 43, 46, 48, 50.
- **`#Preview` block** closes code examples that define a complete view. Examples that only show modifiers or fragments leave it out, since a preview wouldn't compile there.
- **Liquid Glass (sheet 49)** covers the iOS 26 design language and is marked as iOS 26+ throughout.
- **Quick Reference (Group 16)** is exactly 2 dense table sheets at the end: no Row 1, no code, and no set boxes. Rows of 2–3 tables, then the footer trio.
- **Swift set links:** sheets that lean on a language feature (closures, result builders, property wrappers, macros, actors, key paths) end their Notes with a "Swift set:" line linking to the Swift sheets that teach it (`../Swift-Sheets/swift-NNN-….html`). Sheets that get the line: 03, 04, 14, 15, 16, 17, 18, 20, 22, 26, 30, 31, 37, 38, 40, 41, 42, 47, 54, 56, 57.

## Groups

### Group 1: Introduction & Setup (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `swiftui-01-introduction.html` | Introduction to SwiftUI | declarative UI · 2019 · views as structs · state-driven updates · SwiftUI vs UIKit · platforms |
| 02 | `swiftui-02-app-structure.html` | App Structure | @main · App · Scene · WindowGroup · Settings · project templates |
| 03 | `swiftui-03-views-and-body.html` | Views & body | View protocol · var body · some View · composition · extracting subviews · @ViewBuilder |
| 04 | `swiftui-04-previews.html` | Previews | #Preview · traits · @Previewable · preview data · canvas modes · device variants |

### Group 2: Views & Modifiers (Sheets 05–08)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `swiftui-05-modifiers.html` | Modifiers & Order | modifier chains · order matters · .padding · .background · .frame · conditional modifiers |
| 06 | `swiftui-06-text-and-labels.html` | Text & Labels | Text · .font · .fontWeight · Label · AttributedString · Markdown in Text · lineLimit |
| 07 | `swiftui-07-images-and-symbols.html` | Images & SF Symbols | Image · resizable · scaledToFit · Image(systemName:) · symbolRenderingMode · symbolEffect · AsyncImage |
| 08 | `swiftui-08-colors-and-materials.html` | Colors, Gradients & Materials | Color · foregroundStyle · tint · LinearGradient · .ultraThinMaterial · asset catalog colors |

### Group 3: Layout (Sheets 09–13)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 09 | `swiftui-09-stacks.html` | Stacks | VStack · HStack · ZStack · alignment · spacing · Spacer · Divider |
| 10 | `swiftui-10-padding-frames-alignment.html` | Padding, Frames & Alignment | .padding · .frame(maxWidth: .infinity) · alignmentGuide · fixedSize · layoutPriority |
| 11 | `swiftui-11-overlays-backgrounds-safe-area.html` | Overlays, Backgrounds & Safe Area | .overlay · .background · ignoresSafeArea · safeAreaInset · safeAreaPadding · zIndex |
| 12 | `swiftui-12-grids.html` | Grids | Grid · GridRow · LazyVGrid · LazyHGrid · GridItem · .adaptive · .flexible |
| 13 | `swiftui-13-adaptive-layout.html` | Adaptive Layout | GeometryReader · ViewThatFits · containerRelativeFrame · horizontalSizeClass · Layout protocol · AnyLayout |

### Group 4: State & Data Flow (Sheets 14–19)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 14 | `swiftui-14-state.html` | @State | @State · private · source of truth · value types · view identity · state reset |
| 15 | `swiftui-15-binding.html` | @Binding | @Binding · $ projection · .constant · passing down · Binding(get:set:) |
| 16 | `swiftui-16-observable-models.html` | @Observable Models | @Observable · Observation · @State with a class · @ObservationIgnored · fine-grained updates |
| 17 | `swiftui-17-bindable-sharing-models.html` | @Bindable & Sharing Models | @Bindable · $model.name · passing models · ownership · let vs @State |
| 18 | `swiftui-18-environment.html` | Environment | @Environment · .environment() · @Entry · dismiss · openURL · colorScheme |
| 19 | `swiftui-19-observableobject-legacy.html` | ObservableObject (Legacy) | ObservableObject · @Published · @StateObject · @ObservedObject · @EnvironmentObject · migration |

### Group 5: Controls & Input (Sheets 20–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 20 | `swiftui-20-buttons.html` | Buttons | Button · role: · buttonStyle · .bordered · .borderedProminent · .disabled · Button(action:label:) |
| 21 | `swiftui-21-toggles-sliders-steppers.html` | Toggle, Slider & Stepper | Toggle · toggleStyle · Slider · in: step: · Stepper · onEditingChanged |
| 22 | `swiftui-22-pickers.html` | Pickers | Picker · pickerStyle · .segmented · .menu · DatePicker · ColorPicker · .tag |
| 23 | `swiftui-23-text-input-focus.html` | Text Input & Focus | TextField · SecureField · TextEditor · @FocusState · onSubmit · keyboardType · textContentType |
| 24 | `swiftui-24-forms.html` | Forms | Form · Section · LabeledContent · validation · .disabled · formStyle |
| 25 | `swiftui-25-gestures.html` | Gestures | onTapGesture · DragGesture · LongPressGesture · MagnifyGesture · RotateGesture · @GestureState · simultaneousGesture |

### Group 6: Lists & Scrolling (Sheets 26–29)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 26 | `swiftui-26-lists.html` | Lists | List · ForEach · Identifiable · id: · listStyle · Section · row content |
| 27 | `swiftui-27-list-editing-selection.html` | List Editing & Selection | onDelete · onMove · EditButton · swipeActions · selection · contextMenu |
| 28 | `swiftui-28-scrollview-lazy-stacks.html` | ScrollView & Lazy Stacks | ScrollView · LazyVStack · LazyHStack · scrollTargetBehavior · scrollPosition · ScrollViewReader |
| 29 | `swiftui-29-search-refresh.html` | Search & Refresh | searchable · searchScopes · searchSuggestions · refreshable · ContentUnavailableView |

### Group 7: Navigation (Sheets 30–33)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 30 | `swiftui-30-navigationstack.html` | NavigationStack | NavigationStack · NavigationLink · navigationDestination · navigationTitle · navigationBarTitleDisplayMode |
| 31 | `swiftui-31-programmatic-navigation.html` | Programmatic Navigation | NavigationPath · path binding · push / pop · router · deep links · Hashable routes |
| 32 | `swiftui-32-tabview.html` | TabView | TabView · Tab · selection · badge · tabViewStyle · .page · sidebarAdaptable |
| 33 | `swiftui-33-navigationsplitview.html` | NavigationSplitView | NavigationSplitView · sidebar · content · detail · columnVisibility · iPad and Mac |

### Group 8: Presentation (Sheets 34–36)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 34 | `swiftui-34-sheets-full-screen.html` | Sheets & Full-Screen Covers | .sheet(isPresented:) · .sheet(item:) · fullScreenCover · presentationDetents · dismiss · interactiveDismissDisabled |
| 35 | `swiftui-35-alerts-dialogs.html` | Alerts & Dialogs | .alert · actions · message · .confirmationDialog · button roles · error alerts |
| 36 | `swiftui-36-toolbars-menus-popovers.html` | Toolbars, Menus & Popovers | .toolbar · ToolbarItem · placement · Menu · .contextMenu · .popover · .inspector |

### Group 9: Async Work & Lifecycle (Sheets 37–39)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 37 | `swiftui-37-task-onappear-onchange.html` | .task, onAppear & onChange | .task · .task(id:) · onAppear · onDisappear · onChange(of:) · automatic cancellation |
| 38 | `swiftui-38-loading-error-states.html` | Loading & Error States | state enum · ProgressView · ContentUnavailableView · .redacted(reason:) · retry · @MainActor |
| 39 | `swiftui-39-app-lifecycle-scenes.html` | App Lifecycle & Scenes | scenePhase · onOpenURL · openWindow · UIApplicationDelegateAdaptor · backgroundTask |

### Group 10: Persistence (Sheets 40–42)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 40 | `swiftui-40-appstorage-scenestorage.html` | @AppStorage & @SceneStorage | @AppStorage · @SceneStorage · UserDefaults · RawRepresentable values · state restoration |
| 41 | `swiftui-41-swiftdata-models.html` | SwiftData Models | @Model · .modelContainer · @Attribute(.unique) · @Relationship · ModelContainer · schema |
| 42 | `swiftui-42-swiftdata-queries.html` | SwiftData Queries & Changes | @Query · #Predicate · SortDescriptor · modelContext · insert · delete · save |

### Group 11: Animation & Graphics (Sheets 43–46)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 43 | `swiftui-43-animations.html` | Animations | withAnimation · .animation(_:value:) · spring · easeInOut · Animation · contentTransition |
| 44 | `swiftui-44-transitions-matched-geometry.html` | Transitions & Matched Geometry | .transition · .move · .opacity · .asymmetric · matchedGeometryEffect · @Namespace · zoom navigation transition |
| 45 | `swiftui-45-phase-keyframe-animators.html` | Phase & Keyframe Animators | PhaseAnimator · phaseAnimator · KeyframeAnimator · keyframes · symbolEffect |
| 46 | `swiftui-46-shapes-paths-canvas.html` | Shapes, Paths & Canvas | Shape · Path · Circle · RoundedRectangle · stroke · fill · Canvas · TimelineView |

### Group 12: Styling & Customization (Sheets 47–49)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 47 | `swiftui-47-custom-modifiers-styles.html` | Custom Modifiers & Styles | ViewModifier · .modifier() · view extensions · ButtonStyle · LabelStyle · style configuration |
| 48 | `swiftui-48-dark-mode-dynamic-type.html` | Dark Mode, Dynamic Type & Theming | colorScheme · preferredColorScheme · dynamicTypeSize · @ScaledMetric · custom fonts · theme via environment |
| 49 | `swiftui-49-liquid-glass.html` | Liquid Glass | glassEffect · GlassEffectContainer · glassEffectID · .buttonStyle(.glass) · backgroundExtensionEffect · iOS 26 design |

### Group 13: UIKit & Other Platforms (Sheets 50–52)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 50 | `swiftui-50-uikit-in-swiftui.html` | UIKit in SwiftUI | UIViewRepresentable · UIViewControllerRepresentable · makeUIView · updateUIView · Coordinator |
| 51 | `swiftui-51-swiftui-in-uikit.html` | SwiftUI in UIKit | UIHostingController · UIHostingConfiguration · sizingOptions · child view controllers · passing data |
| 52 | `swiftui-52-multiplatform.html` | Multiplatform SwiftUI | #if os() · macOS · watchOS · visionOS · platform-only modifiers · Settings scene |

### Group 14: Quality (Sheets 53–55)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 53 | `swiftui-53-accessibility.html` | Accessibility | accessibilityLabel · accessibilityHint · accessibilityAddTraits · accessibilityElement(children:) · VoiceOver · Accessibility Inspector |
| 54 | `swiftui-54-localization.html` | Localization | String Catalogs · LocalizedStringKey · String(localized:) · plurals · \.locale · right-to-left |
| 55 | `swiftui-55-performance-debugging.html` | Performance & Debugging | view identity · Self._printChanges() · Equatable views · lazy containers · .id() · Instruments SwiftUI template |

Sheet 53 is the full Accessibility reference; the Accessibility boxes on other sheets point back to it.

### Group 15: Architecture & Testing (Sheets 56–57)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 56 | `swiftui-56-app-architecture.html` | App Architecture | @Observable view models · MVVM · dependency injection · environment injection · feature modules |
| 57 | `swiftui-57-testing.html` | Testing SwiftUI Apps | testing view models · Swift Testing · XCUITest · accessibilityIdentifier · preview-driven checks · snapshot testing |

### Group 16: Quick Reference (Sheets 58–59)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 58 | `swiftui-58-quick-reference-views-layout.html` | Quick Reference — Views & Layout | views · modifiers · stacks · frames · grids · lists · controls |
| 59 | `swiftui-59-quick-reference-state-navigation.html` | Quick Reference — State & Navigation | property wrappers · data flow · navigation · presentation · .task · animation |

Dense tables, no explanations. Each row points to the full sheet number.
