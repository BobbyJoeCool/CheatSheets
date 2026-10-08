# Tkinter Reference — Outline

Drafted from the Outline Guide (`CheatSheets/Outline_guide.md` in Google Drive). Keep this file and `manifest.json` in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Languages (Python GUI framework)
- **Status:** Planned (outline only)
- **Sheets:** 62 across 12 groups
- **File prefix:** `tk` (`tk-##-[slug].html`)
- **Folder:** `Sheets/Tkinter-Sheets/`
- **Target version:** Python 3.10+ with Tk 8.6; Tk 9.0 differences are marked on the sheet where they matter
- **Language type:** framework/library; beginner-to-intermediate audience that already knows Python basics
- **Coverage:** introduction & setup, windows, classic widgets, layout managers, variables & events, menus & dialogs, ttk themed widgets, Canvas, colors, fonts & images, application patterns, external libraries, quick reference

### Sizing note

The guide's target for a framework is 25–50 sheets, and this outline comes to 62. Tkinter is really three toolkits in one (classic Tk widgets, the ttk themed set, and the Canvas drawing system), and each one passes the guide's Step 3 test on its own. The overage is mostly ttk (9 sheets) and the application-patterns group (8 sheets), which covers what the Python set's 7 Tkinter sheets (`py-90` to `py-96`) leave out: threading, validation, scrollable frames, DPI and packaging. If the set needs to come down to 50, the first merges to try are 05+06, 13+14, 30+31, 38+39, 47+48 and 58+59+60.

As a framework set, it skips the standard language groups (variables, strings, operators, control flow and so on) and starts at Tkinter's own concepts, per Step 1 of the guide.

### Deep areas

- **Widgets** — the classic widget set has a lot of per-widget API, and Text alone needs two sheets (9 sheets).
- **ttk** — themes, the Style API, element layouts and Treeview are a separate system from classic Tk (9 sheets).
- **Events** — sequences, the event object, bindtags and virtual events are where most Tkinter bugs live (6 sheets).
- **Application patterns** — the things a real app needs that the widget docs never mention (8 sheets).

---

## Group 1 — Introduction & Setup (01–03)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `tk-01-introduction-history.html` | Tkinter Introduction &amp; History | Tcl/Tk · tkinter vs tkinter.ttk · Tk 8.6 vs 9.0 · tix removed 3.13 · alternatives (PyQt, wxPython, Kivy) |
| 02 | `tk-02-installation-setup.html` | Installation &amp; Setup | python -m tkinter · tk.TkVersion · python3-tk (apt) · python-tk (Homebrew) · import tkinter as tk · from tkinter import ttk |
| 03 | `tk-03-first-app-structure.html` | First App &amp; Program Structure | tk.Tk() · mainloop() · root · class App(tk.Tk) · Frame subclass · if __name__ == "__main__" |

## Group 2 — Windows (04–06)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 04 | `tk-04-root-window.html` | Root Window Setup | title() · geometry("WxH+X+Y") · minsize() · maxsize() · resizable() · iconphoto() · attributes("-topmost") |
| 05 | `tk-05-toplevel-lifecycle.html` | Toplevel Windows &amp; Lifecycle | Toplevel · transient() · protocol("WM_DELETE_WINDOW") · destroy() · quit() · winfo_exists() |
| 06 | `tk-06-window-state-position.html` | Window State &amp; Positioning | winfo_screenwidth() · centering · state("zoomed") · iconify() · withdraw() · deiconify() · overrideredirect() · attributes("-alpha") |

## Group 3 — Classic Widgets (07–15)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 07 | `tk-07-widget-options.html` | Widget Options &amp; Configuration | configure() · cget() · widget["text"] · keys() · option_add() · winfo_class() · standard options |
| 08 | `tk-08-label-button.html` | Label &amp; Button | Label · text · textvariable · wraplength · Button · command · state · invoke() |
| 09 | `tk-09-entry.html` | Entry | Entry · get() · insert() · delete(0, END) · show="*" · icursor() · selection_range() · state="readonly" |
| 10 | `tk-10-text-basics.html` | Text Widget — Basics | Text · "1.0" indices · END · insert() · get() · delete() · wrap · undo=True |
| 11 | `tk-11-text-tags-marks.html` | Text Widget — Tags, Marks &amp; Search | tag_configure() · tag_add() · tag_bind() · mark_set() · INSERT · see() · search() · window_create() |
| 12 | `tk-12-checkbutton-radiobutton.html` | Checkbutton &amp; Radiobutton | Checkbutton · onvalue · offvalue · BooleanVar · Radiobutton · value · shared variable · indicatoron |
| 13 | `tk-13-listbox-scrollbar.html` | Listbox &amp; Scrollbar | Listbox · selectmode · curselection() · insert() · Scrollbar · yscrollcommand · command=yview · set() |
| 14 | `tk-14-scale-spinbox-optionmenu.html` | Scale, Spinbox &amp; OptionMenu | Scale · from_ · to · resolution · Spinbox · values · increment · OptionMenu |
| 15 | `tk-15-frame-labelframe-panedwindow.html` | Frame, LabelFrame &amp; PanedWindow | Frame · LabelFrame · relief · borderwidth · PanedWindow · add() · sashpos · orient |

## Group 4 — Layout Managers (16–20)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 16 | `tk-16-pack.html` | pack() | side · fill · expand · anchor · padx/pady · ipadx/ipady · pack_forget() · packing order |
| 17 | `tk-17-grid-basics.html` | grid() — Basics | row · column · sticky · columnspan · rowspan · padx/pady · grid_forget() · grid_remove() |
| 18 | `tk-18-grid-resizing.html` | grid() — Resizing &amp; Weights | columnconfigure() · rowconfigure() · weight · minsize · uniform · grid_slaves() · grid_info() |
| 19 | `tk-19-place.html` | place() | x · y · relx · rely · relwidth · relheight · anchor · place_forget() |
| 20 | `tk-20-layout-patterns.html` | Layout Patterns &amp; Pitfalls | nested Frames · never mix pack and grid · pack_propagate(False) · grid_propagate() · form layout · toolbar + status bar |

## Group 5 — Variables & Events (21–26)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 21 | `tk-21-control-variables.html` | Control Variables | StringVar · IntVar · DoubleVar · BooleanVar · get() · set() · trace_add() · trace_remove() |
| 22 | `tk-22-command-callbacks.html` | Command Callbacks | command= · lambda · functools.partial · late binding in loops · default-arg capture · bound methods |
| 23 | `tk-23-bind-event-sequences.html` | bind() &amp; Event Sequences | bind() · &lt;Button-1&gt; · &lt;Double-Button-1&gt; · &lt;Key&gt; · &lt;Return&gt; · &lt;Control-s&gt; · &lt;Configure&gt; · unbind() |
| 24 | `tk-24-event-object.html` | The Event Object | event.widget · event.x/y · x_root/y_root · keysym · char · delta · state · width/height |
| 25 | `tk-25-binding-levels-virtual-events.html` | Binding Levels &amp; Virtual Events | bind_all() · bind_class() · bindtags() · return "break" · event_add() · event_generate() · &lt;&lt;Custom&gt;&gt; |
| 26 | `tk-26-focus-keyboard.html` | Focus &amp; Keyboard Navigation | focus_set() · focus_get() · takefocus · tk_focusNext() · &lt;FocusIn&gt; · &lt;FocusOut&gt; · accelerators |

## Group 6 — Menus & Dialogs (27–32)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 27 | `tk-27-menubar.html` | Menu Bars | Menu · config(menu=) · add_cascade() · add_command() · tearoff=0 · accelerator · underline · macOS app menu |
| 28 | `tk-28-menu-items-context-menus.html` | Menu Items &amp; Context Menus | add_checkbutton() · add_radiobutton() · add_separator() · entryconfigure() · postcommand · tk_popup() · &lt;Button-3&gt; |
| 29 | `tk-29-messagebox.html` | messagebox | showinfo() · showwarning() · showerror() · askyesno() · askokcancel() · askyesnocancel() · parent= · icon |
| 30 | `tk-30-filedialog.html` | filedialog | askopenfilename() · asksaveasfilename() · askdirectory() · askopenfilenames() · filetypes · initialdir · defaultextension |
| 31 | `tk-31-simpledialog-colorchooser.html` | simpledialog &amp; colorchooser | askstring() · askinteger() · askfloat() · minvalue · askcolor() · Dialog subclass |
| 32 | `tk-32-custom-modal-dialogs.html` | Custom Modal Dialogs | Toplevel · transient() · grab_set() · wait_window() · returning a result · &lt;Escape&gt; to cancel · centering on parent |

## Group 7 — ttk Themed Widgets (33–41)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 33 | `tk-33-ttk-introduction-themes.html` | ttk Introduction &amp; Themes | tkinter.ttk · tk vs ttk options · theme_names() · theme_use() · clam · vista · aqua |
| 34 | `tk-34-ttk-style.html` | ttk.Style — configure &amp; map | ttk.Style() · configure() · map() · lookup() · "Accent.TButton" · state specs · !disabled |
| 35 | `tk-35-ttk-layouts-elements.html` | ttk Layouts &amp; Elements | layout() · element_names() · element_options() · element_create() · theme_create() · theme_settings() |
| 36 | `tk-36-ttk-core-widgets.html` | ttk Core Widgets &amp; State | ttk.Button · ttk.Label · ttk.Entry · ttk.Checkbutton · state() · instate() · style= |
| 37 | `tk-37-ttk-combobox-spinbox.html` | Combobox &amp; ttk.Spinbox | ttk.Combobox · values · current() · state="readonly" · &lt;&lt;ComboboxSelected&gt;&gt; · ttk.Spinbox · ttk.Scale |
| 38 | `tk-38-ttk-notebook-panedwindow.html` | Notebook &amp; ttk.Panedwindow | ttk.Notebook · add() · select() · tab() · &lt;&lt;NotebookTabChanged&gt;&gt; · enable_traversal() · ttk.Panedwindow |
| 39 | `tk-39-ttk-progressbar-separator.html` | Progressbar, Separator &amp; Sizegrip | ttk.Progressbar · determinate · indeterminate · start() · step() · ttk.Separator · ttk.Sizegrip |
| 40 | `tk-40-treeview-basics.html` | Treeview — Basics | ttk.Treeview · columns · heading() · column() · show="headings" · insert() · item() · delete() |
| 41 | `tk-41-treeview-advanced.html` | Treeview — Selection, Tags &amp; Sorting | selection() · &lt;&lt;TreeviewSelect&gt;&gt; · tag_configure() · parent/child items · sort on heading click · see() · move() |

## Group 8 — Canvas (42–46)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 42 | `tk-42-canvas-basics.html` | Canvas Basics &amp; Shapes | Canvas · create_line() · create_rectangle() · create_oval() · create_polygon() · create_arc() · fill · outline |
| 43 | `tk-43-canvas-items-tags.html` | Canvas Items &amp; Tags | item IDs · tags= · itemconfigure() · coords() · move() · delete() · find_withtag() · tag_raise() |
| 44 | `tk-44-canvas-text-images-windows.html` | Canvas Text, Images &amp; Windows | create_text() · create_image() · create_window() · anchor · bbox() · itemcget() |
| 45 | `tk-45-canvas-events-drag.html` | Canvas Events &amp; Dragging | tag_bind() · find_closest() · find_overlapping() · canvasx() · canvasy() · drag-and-drop pattern |
| 46 | `tk-46-canvas-scrolling-animation.html` | Canvas Scrolling &amp; Animation | scrollregion · xview_moveto() · scale() · after() loop · frame timing · delete("all") |

## Group 9 — Colors, Fonts & Images (47–49)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 47 | `tk-47-colors-reliefs.html` | Colors, Reliefs &amp; Borders | color names · "#RRGGBB" · winfo_rgb() · relief · borderwidth · highlightthickness · activebackground |
| 48 | `tk-48-fonts.html` | Fonts | tkinter.font · Font() · families() · measure() · metrics() · nametofont() · TkDefaultFont · font tuples |
| 49 | `tk-49-images.html` | Images — PhotoImage &amp; Pillow | PhotoImage · PNG/GIF · subsample() · zoom() · keep a reference · PIL.ImageTk · Image.resize() · compound |

## Group 10 — Application Patterns (50–57)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 50 | `tk-50-after-timers.html` | after() &amp; Timers | after() · after_cancel() · after_idle() · update_idletasks() · update() pitfalls · repeating timers |
| 51 | `tk-51-threading-responsiveness.html` | Threading &amp; Responsive UIs | threading.Thread · queue.Queue · after() polling · not thread-safe · daemon threads · concurrent.futures |
| 52 | `tk-52-input-validation.html` | Input Validation | validate="key" · validatecommand · register() · %P · %S · invalidcommand · focusout validation |
| 53 | `tk-53-scrollable-frame.html` | Scrollable Frames | Canvas + Frame · create_window() · &lt;Configure&gt; · scrollregion · bbox("all") · &lt;MouseWheel&gt; · Button-4/5 on X11 |
| 54 | `tk-54-app-architecture.html` | Application Architecture | App class · page frames · tkraise() · controller · MVC separation · shared state |
| 55 | `tk-55-dpi-cross-platform.html` | DPI &amp; Cross-Platform Differences | tk scaling · SetProcessDpiAwareness · windowingsystem · aqua vs win32 vs x11 · Button-2/3 swap · native look |
| 56 | `tk-56-testing-debugging.html` | Testing &amp; Debugging | unittest · update() in tests · event_generate() · winfo_children() · report_callback_exception · tk.call() |
| 57 | `tk-57-packaging.html` | Packaging &amp; Distribution | PyInstaller · --windowed · --onefile · --add-data · Nuitka · cx_Freeze · .pyw |

## Group 11 — External Libraries (58–60)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 58 | `tk-58-modern-themes.html` | Modern Themes — sv-ttk &amp; ttkbootstrap | sv_ttk.set_theme() · ttkbootstrap.Window · bootstyle · themename · Meter · DateEntry |
| 59 | `tk-59-customtkinter.html` | CustomTkinter | CTk · CTkButton · CTkEntry · set_appearance_mode() · set_default_color_theme() · CTkFrame · scaling |
| 60 | `tk-60-matplotlib-addons.html` | Embedding Matplotlib &amp; Add-ons | FigureCanvasTkAgg · NavigationToolbar2Tk · draw() · tkcalendar · tkinterdnd2 · Pillow |

## Group 12 — Quick Reference (61–62)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 61 | `tk-61-quick-reference-widgets.html` | Quick Reference — Widgets &amp; Options | widget list · tk vs ttk · common options · layout managers · constants |
| 62 | `tk-62-quick-reference-events.html` | Quick Reference — Events &amp; Methods | event sequences · event attributes · winfo_* · after() · dialogs · control variables |
