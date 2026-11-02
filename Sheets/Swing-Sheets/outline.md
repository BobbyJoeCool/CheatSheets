# Swing Reference Guide Outline (62 sheets)

## Metadata

- **Group it belongs to:** Java
- **Folder Directory:** `Sheets/Swing-Sheets/swing-##-[slug].html`
- **Groups:** 14
- **Sheets:** 62
- **Drafted Date:** 2026-10-28
- **Verified-Finalized Date:**

## Basic Information

A reference for building desktop apps with Swing (`javax.swing`), the Java UI toolkit that ships with the JDK in the `java.desktop` module. It assumes the reader knows Java (classes, interfaces, lambdas, generics, collections) and starts at Swing's own concepts. Aimed at intermediate developers who want to build or maintain a real desktop app, including the large amount of existing Swing code in business and IDE tooling.

Code-first: every sheet leads with runnable Swing code. Examples that build a full window start on the EDT with `SwingUtilities.invokeLater` and end with `pack()` / `setVisible(true)`, so the reader can paste them into a single file and run them. The baseline is **Java 21 LTS** (works on 25), so examples use lambdas, `var`, records for models and text blocks for HTML labels. FlatLaf is taught as the modern look and feel; Metal and Nimbus are covered so readers can recognize them in older code.

Scope limits: AWT is covered only where Swing sits on it (events, `Graphics2D`, `Desktop`, `Robot`). Applets and Java Web Start are out of scope. GUI builders are covered in one sheet as tools, not as a workflow. JavaFX gets one interop sheet; the JavaFX sheets in the Java set (126–134) cover it in depth. Java sheets 123–125 stay as the three-page Swing primer inside the Java set and point here for depth.

## Differences in Layout from Basic Structure

- **Extra boxes:** **JavaFX Equivalent** (`id="fx"`) and **Prefer / Avoid** (`id="idiom"`) on 01–60 · **EDT Check** (`id="edt"`) in Row 1 on 23 selected sheets. None on the quick references (61–62). Details and table below.
- The standard language group template (Groups 2–13 of Outline_guide.md) does not apply. Groups follow how a Swing app is built: setup → threading → components → layout → events → menus and dialogs → data views → styling → painting → integration → architecture and shipping.
- Threading comes second, before any components, because every later example depends on the EDT rule.
- **Java set links:** sheets that lean on a language feature (lambdas, anonymous classes, generics, records, `PropertyChangeSupport`) end their Notes with a "Java set:" line linking to the Java sheet that teaches it (`../Java-Sheets/java-NNN-….html`).
- Three extra boxes, modeled on the Java set and described below: **JavaFX Equivalent** and **Prefer / Avoid** on every sheet (01–60), and **EDT Check** in Row 1 on the sheets listed in the table.
- **Quick Reference (Group 14)** is exactly 2 dense table sheets at the end: no Row 1, no code, and none of the three boxes. Each row points to the full sheet number.
- `swing-cheatsheet.css` adds `.section-fx`, `.section-idiom` and `.section-edt` styles with their own accent colors, so none of them reads as part of Code Explained.

### JavaFX Equivalent box (every sheet, 01–60)

- `<section class="section-fx" id="fx">`, title **JavaFX Equivalent**.
- 2–4 `note-item` lines, each mapping something on this sheet to its JavaFX form, Swing first: `JFrame` → `Stage` + `Scene` · `invokeLater` → `Platform.runLater` · `TableModel` → `ObservableList` + `TableView`.
- End with a pointer to the matching Java-set JavaFX sheet (`See Java 128`): 126 basics, 127 layouts, 128 controls, 129 events & threading, 130 binding, 131–132 FXML, 133 CSS, 134 charts & media.
- When JavaFX has no direct equivalent (`JInternalFrame`, `GroupLayout`), say so in one line and name the nearest approach.
- Inline `<code>` only. This box is a translation table, not a second lesson.

### Prefer / Avoid box (every sheet, 01–60)

- `<section class="section-idiom" id="idiom">`, title **Prefer / Avoid**.
- 2–4 `note-item` lines in `avoid` → `prefer` form, same spirit as the Java set's box.
- Every pair must be a real Swing idiom for this sheet's topic (`frame.setSize` + absolute positions → a layout manager + `pack()` · `KeyListener` → key bindings · overriding `paint` → `paintComponent` · `Thread.sleep` in a listener → `Timer` or `SwingWorker`), never a restatement of the main code block or a Common Mistakes item.

### EDT Check box (selected sheets, Row 1)

- `<section class="section-edt" id="edt">`, title **EDT Check**.
- 2–4 items on which calls on this sheet must run on the Event Dispatch Thread, which are safe from any thread, and what breaks when the rule is ignored (frozen UI, half-painted components, `IllegalStateException` from a document mutated inside its own listener).
- If a sheet doesn't fit on one page, cut EDT Check to 2 items first, then Prefer / Avoid, then JavaFX Equivalent, before touching the main content.

### Placement

| Sheet has | Row 1 | col-2-2 (beside the code) |
|---|---|---|
| No EDT Check box | Description · Notes | Code Explained, then JavaFX Equivalent, then Prefer / Avoid |
| EDT Check box | Description · Notes · EDT Check (`col-1-3`) | Code Explained, then JavaFX Equivalent, then Prefer / Avoid |

### Sheets with an EDT Check box (23)

| # | EDT Check content |
|---|---|
| 02 | build and show the frame inside `invokeLater` · `main` runs on the main thread, not the EDT |
| 05 | Swing is not thread-safe · `invokeAndWait` deadlocks if called from the EDT · `repaint` is the one safe call |
| 06 | `doInBackground` runs off the EDT · `process` and `done` run on it · `get()` on the EDT blocks the UI |
| 07 | Swing `Timer` fires on the EDT · `java.util.Timer` doesn't, so its tasks must hop back |
| 14 | `setValue` on a progress bar from a worker thread · use `setProgress` / `publish` instead |
| 15 | `revalidate` and `repaint` queue work · adding components off the EDT corrupts layout |
| 23 | listeners run on the EDT · long work inside one freezes every window |
| 27 | a `DocumentListener` can't change its own document (`IllegalStateException`) · defer with `invokeLater` |
| 30 | modal dialogs block the caller but keep the EDT pumping events · never show one from a worker thread |
| 31 | `setVisible(true)` on a modal `JDialog` returns only after it closes · read the result after that line |
| 33 | `DefaultListModel` changes must happen on the EDT · bulk-load into a new model and swap it in |
| 35 | `DefaultTableModel.addRow` from a worker thread races the painter · publish rows instead |
| 36 | `fireTable…` must run on the EDT · fire the narrowest event for big tables |
| 38 | tree model events on the EDT · lazy-load children with a `SwingWorker` in `treeWillExpand` |
| 42 | `StyledDocument` writes are locked, but listeners and caret updates still need the EDT |
| 44 | set the look and feel before any component exists · switching later needs `updateComponentTreeUI` on the EDT |
| 48 | `paintComponent` runs on the EDT · keep it fast and allocation-free · never call it directly |
| 51 | drive animation with a Swing `Timer`, not a `while` loop on the EDT · game threads must hand state over safely |
| 53 | `Desktop.browse` / `open` can block · call off the EDT; `TrayIcon` listeners run on the EDT |
| 54 | two UI threads: Swing EDT and the JavaFX Application Thread · hop with `Platform.runLater` / `invokeLater` |
| 55 | models fire `PropertyChangeEvent`s on whatever thread changed them · views must re-dispatch to the EDT |
| 58 | find EDT violations with a checking `RepaintManager` · thread dumps show what blocked the EDT |
| 59 | fixtures and `GuiActionRunner.execute` run actions on the EDT · `Robot` events queue behind the EDT |

## Groups

### Group 1: Introduction & Setup (Sheets 01–04)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `swing-01-introduction.html` | Introduction to Swing | AWT vs Swing · lightweight components · javax.swing · java.desktop module · pluggable look and feel · Swing vs JavaFX |
| 02 | `swing-02-first-window.html` | Your First Window | main · SwingUtilities.invokeLater · JFrame · setDefaultCloseOperation · pack · setLocationRelativeTo · setVisible |
| 03 | `swing-03-component-hierarchy.html` | Component Hierarchy & Containers | Component · Container · JComponent · top-level containers · JRootPane · content pane · add / remove |
| 04 | `swing-04-project-setup-tools.html` | Project Setup & GUI Builders | requires java.desktop · Maven / Gradle layout · resources folder · IntelliJ GUI Designer · NetBeans Matisse · Eclipse WindowBuilder |

### Group 2: Threading & the EDT (Sheets 05–07)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 05 | `swing-05-event-dispatch-thread.html` | The Event Dispatch Thread | EDT · single-thread rule · invokeLater · invokeAndWait · isEventDispatchThread · frozen UI |
| 06 | `swing-06-swingworker.html` | SwingWorker | doInBackground · done · get · publish / process · setProgress · PropertyChangeListener · cancel |
| 07 | `swing-07-timers.html` | Swing Timers | javax.swing.Timer · setRepeats · setInitialDelay · start / stop · vs java.util.Timer · ScheduledExecutorService |

### Group 3: Basic Components (Sheets 08–14)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 08 | `swing-08-labels-icons.html` | Labels & Icons | JLabel · ImageIcon · setIcon · HTML in labels · setHorizontalAlignment · setLabelFor · setDisplayedMnemonic |
| 09 | `swing-09-buttons.html` | Buttons | JButton · addActionListener · setMnemonic · setToolTipText · setEnabled · setDefaultButton · JToggleButton |
| 10 | `swing-10-checkboxes-radio.html` | Check Boxes & Radio Buttons | JCheckBox · JRadioButton · ButtonGroup · isSelected · setSelected · ItemListener · clearSelection |
| 11 | `swing-11-text-fields.html` | Text Fields | JTextField · setColumns · getText · JPasswordField · getPassword · JFormattedTextField · MaskFormatter |
| 12 | `swing-12-text-areas.html` | Text Areas | JTextArea · setLineWrap · setWrapStyleWord · append · setRows · setCaretPosition · JScrollPane wrap |
| 13 | `swing-13-combo-spinners.html` | Combo Boxes & Spinners | JComboBox&lt;E> · DefaultComboBoxModel · setEditable · getSelectedItem · JSpinner · SpinnerNumberModel · SpinnerDateModel |
| 14 | `swing-14-sliders-progress.html` | Sliders & Progress Bars | JSlider · setMajorTickSpacing · setPaintLabels · ChangeListener · JProgressBar · setIndeterminate · ProgressMonitor |

### Group 4: Layout Managers (Sheets 15–21)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 15 | `swing-15-layout-basics.html` | How Layout Works | LayoutManager · setLayout · preferred / min / max size · pack · revalidate · repaint · null layout (avoid) |
| 16 | `swing-16-flow-border.html` | FlowLayout & BorderLayout | FlowLayout · alignment · hgap / vgap · BorderLayout · NORTH / CENTER / SOUTH · PAGE_START · default for content pane |
| 17 | `swing-17-grid-box.html` | GridLayout & BoxLayout | GridLayout · rows / cols · BoxLayout · Box.createHorizontalGlue · createRigidArea · createVerticalStrut · setAlignmentX |
| 18 | `swing-18-gridbaglayout.html` | GridBagLayout | GridBagConstraints · gridx / gridy · gridwidth · weightx / weighty · fill · anchor · insets |
| 19 | `swing-19-cardlayout.html` | CardLayout | CardLayout · show · next / previous · named cards · wizard pattern · swapping panels |
| 20 | `swing-20-grouplayout-springlayout.html` | GroupLayout & SpringLayout | GroupLayout · SequentialGroup · ParallelGroup · setAutoCreateGaps · linkSize · SpringLayout · putConstraint |
| 21 | `swing-21-miglayout-nesting.html` | MigLayout & Nesting Panels | MigLayout · constraint strings · wrap · grow / push · nested JPanels · form layout patterns |

### Group 5: Events & Listeners (Sheets 22–27)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 22 | `swing-22-event-model.html` | The Event Model | event source · listener interface · EventObject · adapter classes · lambdas · anonymous classes · removeXxxListener |
| 23 | `swing-23-actions.html` | Action Events & Actions | ActionListener · ActionEvent · getActionCommand · AbstractAction · Action.NAME · putValue · shared setEnabled |
| 24 | `swing-24-mouse-events.html` | Mouse Events | MouseListener · MouseAdapter · MouseMotionListener · MouseWheelListener · getPoint · getClickCount · isPopupTrigger |
| 25 | `swing-25-key-bindings.html` | Key Bindings | InputMap · ActionMap · KeyStroke.getKeyStroke · WHEN_FOCUSED · WHEN_IN_FOCUSED_WINDOW · KeyListener pitfalls · accelerators |
| 26 | `swing-26-focus-window-events.html` | Focus, Window & Component Events | FocusListener · requestFocusInWindow · FocusTraversalPolicy · WindowListener · windowClosing · DO_NOTHING_ON_CLOSE · ComponentListener |
| 27 | `swing-27-document-change-listeners.html` | Document, Change & Property Listeners | DocumentListener · insertUpdate / removeUpdate · DocumentFilter · ChangeListener · PropertyChangeListener · ItemListener |

### Group 6: Menus, Toolbars & Dialogs (Sheets 28–32)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 28 | `swing-28-menus.html` | Menus | JMenuBar · JMenu · JMenuItem · setAccelerator · JCheckBoxMenuItem · JRadioButtonMenuItem · addSeparator · apple.laf.useScreenMenuBar |
| 29 | `swing-29-popup-toolbars.html` | Popup Menus & Toolbars | JPopupMenu · setComponentPopupMenu · JToolBar · setFloatable · addSeparator · Actions in toolbars |
| 30 | `swing-30-joptionpane.html` | JOptionPane | showMessageDialog · showConfirmDialog · showInputDialog · showOptionDialog · message types · return values |
| 31 | `swing-31-custom-dialogs.html` | Custom Dialogs | JDialog · owner · ModalityType · getRootPane().setDefaultButton · returning a result · dispose · Escape to close |
| 32 | `swing-32-file-color-choosers.html` | File & Color Choosers | JFileChooser · showOpenDialog · showSaveDialog · FileNameExtensionFilter · setMultiSelectionEnabled · JColorChooser · FileDialog |

### Group 7: Lists, Tables & Trees (Sheets 33–38)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 33 | `swing-33-jlist.html` | JList | JList&lt;E> · DefaultListModel · selection modes · getSelectedValuesList · ListSelectionListener · getValueIsAdjusting · setVisibleRowCount |
| 34 | `swing-34-cell-renderers.html` | Cell Renderers | ListCellRenderer · DefaultListCellRenderer · TableCellRenderer · DefaultTableCellRenderer · rubber-stamp pattern · isSelected styling |
| 35 | `swing-35-jtable-basics.html` | JTable Basics | JTable · DefaultTableModel · column names · setAutoCreateRowSorter · setFillsViewportHeight · getSelectedRow · table header |
| 36 | `swing-36-table-models.html` | Custom Table Models | AbstractTableModel · getRowCount · getValueAt · getColumnClass · isCellEditable · setValueAt · fireTableRowsInserted |
| 37 | `swing-37-table-sort-filter-edit.html` | Sorting, Filtering & Editing Tables | TableRowSorter · RowFilter.regexFilter · convertRowIndexToModel · DefaultCellEditor · TableColumnModel · setPreferredWidth |
| 38 | `swing-38-jtree.html` | JTree | DefaultMutableTreeNode · DefaultTreeModel · TreePath · TreeSelectionListener · expandPath · TreeCellRenderer · TreeWillExpandListener |

### Group 8: Containers & Rich Text (Sheets 39–43)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 39 | `swing-39-tabbed-panes.html` | Tabbed Panes | JTabbedPane · addTab · setTabPlacement · SCROLL_TAB_LAYOUT · setTabComponentAt · closeable tabs · ChangeListener |
| 40 | `swing-40-split-scroll-panes.html` | Split Panes & Scroll Panes | JSplitPane · setDividerLocation · setResizeWeight · setOneTouchExpandable · JViewport · setRowHeaderView · scrollRectToVisible |
| 41 | `swing-41-layered-internal-frames.html` | Layered Panes, Internal Frames & JLayer | JLayeredPane · layer constants · glass pane · JDesktopPane · JInternalFrame · JLayer · LayerUI |
| 42 | `swing-42-styled-text.html` | Styled Text & HTML | JTextPane · StyledDocument · SimpleAttributeSet · StyleConstants · insertString · JEditorPane · HyperlinkListener |
| 43 | `swing-43-undo-text-actions.html` | Undo, Redo & Text Actions | UndoManager · UndoableEditListener · DefaultEditorKit · cut / copy / paste actions · Highlighter · Caret |

### Group 9: Look, Feel & Styling (Sheets 44–47)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 44 | `swing-44-look-and-feel.html` | Look and Feel | UIManager.setLookAndFeel · getSystemLookAndFeelClassName · Metal · Nimbus · updateComponentTreeUI · UIManager.put defaults |
| 45 | `swing-45-flatlaf.html` | FlatLaf & Modern Themes | FlatLightLaf.setup · FlatDarkLaf · FlatMacLightLaf · IntelliJ themes · .properties theming · client properties · placeholder text |
| 46 | `swing-46-borders-fonts-colors.html` | Borders, Fonts & Colors | BorderFactory · EmptyBorder · TitledBorder · CompoundBorder · deriveFont · setBackground · setOpaque |
| 47 | `swing-47-images-hidpi.html` | Images, Icons & HiDPI | getResource · ImageIO.read · getScaledInstance · BaseMultiResolutionImage · sun.java2d.uiScale · FlatSVGIcon · app icons |

### Group 10: Custom Painting & Graphics (Sheets 48–51)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 48 | `swing-48-custom-painting.html` | Custom Painting | paintComponent · super.paintComponent · repaint · Graphics · getWidth / getHeight · getPreferredSize · paint vs paintComponent |
| 49 | `swing-49-java2d-shapes.html` | Java 2D Shapes & Strokes | Graphics2D · RenderingHints · Rectangle2D · Ellipse2D · Path2D · BasicStroke · GradientPaint · AffineTransform |
| 50 | `swing-50-text-images-drawing.html` | Drawing Text & Images | drawString · FontMetrics · TextLayout · drawImage · BufferedImage · AlphaComposite · Graphics2D.create / dispose |
| 51 | `swing-51-animation.html` | Animation & Game Loops | Timer-driven animation · delta time · repaint(Rectangle) · double buffering · Toolkit.sync · key state for games |

### Group 11: Integration (Sheets 52–54)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 52 | `swing-52-drag-drop-clipboard.html` | Drag & Drop and Clipboard | TransferHandler · setDragEnabled · DropMode · importData · Transferable · DataFlavor · getSystemClipboard |
| 53 | `swing-53-desktop-integration.html` | Desktop Integration | Desktop.browse · Desktop.open · Taskbar · SystemTray · TrayIcon · setAboutHandler · SplashScreen |
| 54 | `swing-54-javafx-interop.html` | Swing & JavaFX Interop | JFXPanel · SwingNode · Platform.runLater vs invokeLater · two UI threads · gradual migration |

### Group 12: Architecture & Quality (Sheets 55–58)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 55 | `swing-55-mvc-architecture.html` | App Architecture (MVC & MVP) | Swing's model-delegate design · MVC · MVP · PropertyChangeSupport · keeping logic out of listeners · dependency injection |
| 56 | `swing-56-accessibility.html` | Accessibility | AccessibleContext · setAccessibleName · setAccessibleDescription · setLabelFor · mnemonics · keyboard-only use · screen readers |
| 57 | `swing-57-localization.html` | Localization | ResourceBundle · Locale · MessageFormat · ComponentOrientation · applyComponentOrientation · right-to-left · UIManager strings |
| 58 | `swing-58-performance-debugging.html` | Performance & Debugging | EDT violation checks · RepaintManager · setPrototypeCellValue · large table models · repaint storms · VisualVM · thread dumps |

### Group 13: Testing & Deployment (Sheets 59–60)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 59 | `swing-59-testing.html` | Testing Swing UIs | AssertJ Swing · FrameFixture · GuiActionRunner · java.awt.Robot · testing models without UI · java.awt.headless · Xvfb in CI |
| 60 | `swing-60-packaging.html` | Packaging & Distribution | executable JAR · Main-Class manifest · jlink · jpackage · .dmg / .msi / .deb · app icon & name · code signing |

### Group 14: Quick Reference (Sheets 61–62)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 61 | `swing-61-quick-reference-components-layout.html` | Quick Reference — Components & Layout | components · key methods · layout managers · GridBagConstraints · borders · look and feel |
| 62 | `swing-62-quick-reference-events-threading.html` | Quick Reference — Events, Threading & Dialogs | listeners · key bindings · EDT rules · SwingWorker · JOptionPane · menus · models |

Dense tables, no explanations. Each row points to the full sheet number.
