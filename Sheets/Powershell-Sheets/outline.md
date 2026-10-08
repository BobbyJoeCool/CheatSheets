# PowerShell Reference — Outline

Generated from `manifest.json`; keep the two in sync when sheets are added, renamed or reordered.

## Profile

- **Collection section:** Concepts & Tools
- **Status:** Complete
- **Sheets:** 40 across 15 groups
- **File prefix:** `ps` (`ps-##-[slug].html`)
- **Folder:** `Sheets/Powershell-Sheets/`
- **Coverage:** getting started (editions, cmdlets, profiles), output & comments, variables & types, strings, operators, control flow, the pipeline, error handling, functions, collections, .NET & classes, files & data (JSON, CSV, XML), modules, advanced topics (regex, dates, jobs, REST, debugging), system administration

---

## Group 1 — Getting Started (01–03)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `ps-01-introduction-editions.html` | Introduction &amp; Editions | pwsh · $PSVersionTable · winget / brew · Set-ExecutionPolicy · .ps1 · #Requires |
| 02 | `ps-02-cmdlet-syntax-discovery.html` | Cmdlet Syntax &amp; Discovery | Verb-Noun · Get-Command · Get-Help · Get-Member · Get-Alias · parameters |
| 03 | `ps-03-profiles-psreadline.html` | Profiles &amp; PSReadLine | $PROFILE · prompt · Set-PSReadLineOption · Set-PSReadLineKeyHandler · Get-History · Oh My Posh |

## Group 2 — Output & Comments (04–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 04 | `ps-04-output-streams.html` | Output &amp; Streams | Write-Output · Write-Host · Write-Verbose · streams 1–6 · 2>&amp;1 · Out-Null |
| 05 | `ps-05-comments-help.html` | Comments &amp; Comment-Based Help | # · &lt;# #> · .SYNOPSIS · .PARAMETER · .EXAMPLE · #region |

## Group 3 — Variables & Types (06–08)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `ps-06-variables-scope.html` | Variables &amp; Scope | $var · ${odd name} · New-Variable · $global: / $script: · $env: · Remove-Variable |
| 07 | `ps-07-automatic-preference-variables.html` | Automatic &amp; Preference Variables | $_ / $PSItem · $? · $LASTEXITCODE · $PSScriptRoot · $Matches · $ErrorActionPreference |
| 08 | `ps-08-types-casting.html` | Types &amp; Casting | [int] [string] [double] · type accelerators · -as / -is · .GetType() · [int]$x · 1kb / 0xFF |

## Group 4 — Strings (09–10)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 09 | `ps-09-string-basics-formatting.html` | String Basics &amp; Formatting | 'single' vs "double" · $() subexpression · `n `t escapes · @" "@ · -f operator · {0:N2} |
| 10 | `ps-10-string-methods-operators.html` | String Methods &amp; Operators | -split / .Split() · -join · -replace / .Replace() · .Trim() · .Substring() · IsNullOrWhiteSpace |

## Group 5 — Operators (11–13)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 11 | `ps-11-arithmetic-assignment-operators.html` | Arithmetic &amp; Assignment Operators | + - * / % · ++ / -- · += -= *= · [math]::Round() · -band / -bor / -shl · 1..10 |
| 12 | `ps-12-comparison-matching-operators.html` | Comparison &amp; Matching Operators | -eq -ne -gt -lt · -ceq · -like / -notlike · -match / -notmatch · -contains / -in · array filters |
| 13 | `ps-13-logical-null-special-operators.html` | Logical, Null &amp; Special Operators | -and / -or / -not · ?? / ??= · ?. / ?[] · ? : ternary · &amp;&amp; / \|\| · &amp; call / . dot-source |

## Group 6 — Control Flow (14–15)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 14 | `ps-14-if-switch.html` | if &amp; switch | if / elseif / else · switch · -Wildcard / -Regex · -File · break / continue · $_ in switch |
| 15 | `ps-15-loops.html` | Loops | foreach · for · while · do / while / until · break / continue · :label |

## Group 7 — The Pipeline (16–18)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 16 | `ps-16-pipeline-basics.html` | Pipeline Basics | Where-Object · ForEach-Object · Select-Object · Sort-Object · Group-Object · Measure-Object |
| 17 | `ps-17-custom-objects-calculated-properties.html` | Custom Objects &amp; Calculated Properties | [PSCustomObject]@{} · @{Name=; Expression=} · -ExcludeProperty · Add-Member · Compare-Object · Tee-Object |
| 18 | `ps-18-formatting-output.html` | Formatting Output | Format-Table · Format-List · Format-Wide · format-right rule · Out-String · Out-GridView |

## Group 8 — Error Handling (19–20)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 19 | `ps-19-errors-erroraction.html` | Errors &amp; ErrorAction | non-terminating · -ErrorAction Stop · $ErrorActionPreference · $Error[0] · -ErrorVariable · Get-Error |
| 20 | `ps-20-try-catch-throw.html` | try / catch / finally &amp; throw | try / catch / finally · catch [Type] · $_.Exception.Message · throw · rethrow · trap |

## Group 9 — Functions (21–23)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 21 | `ps-21-functions-script-blocks.html` | Functions &amp; Script Blocks | function Verb-Noun · param() · return · [switch] · splatting @params · { } script blocks |
| 22 | `ps-22-advanced-functions-validation.html` | Advanced Functions &amp; Parameter Validation | [CmdletBinding()] · [Parameter(Mandatory)] · ParameterSetName · [ValidateSet()] · [ValidateScript()] · -Verbose |
| 23 | `ps-23-pipeline-input-shouldprocess.html` | Pipeline Input &amp; ShouldProcess | ValueFromPipeline · ByPropertyName · begin / process / end · clean · SupportsShouldProcess · -WhatIf / -Confirm |

## Group 10 — Collections (24–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 24 | `ps-24-arrays-lists.html` | Arrays &amp; Lists | @() / , · $a[-1] · $a[0..2] · += copies · List[object] · array unrolling |
| 25 | `ps-25-hashtables-dictionaries.html` | Hashtables &amp; Dictionaries | @{} · [ordered]@{} · .ContainsKey() · .GetEnumerator() · Dictionary[string,int] · HashSet[T] |

## Group 11 — .NET & Classes (26–27)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 26 | `ps-26-working-with-dotnet.html` | Working with .NET | [Class]::Method() · ::new() · New-Object · using namespace · Get-Member -Static · Add-Type |
| 27 | `ps-27-classes-enums.html` | Classes &amp; Enums | class · constructors · $this · static / hidden · inheritance : Base · enum / [Flags()] |

## Group 12 — Files & Data (28–30)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 28 | `ps-28-file-system-items.html` | File System &amp; Items | Get-ChildItem · Test-Path · New-Item · Copy- / Move- / Remove-Item · Join-Path / Split-Path · PSDrives |
| 29 | `ps-29-reading-writing-files.html` | Reading &amp; Writing Files | Get-Content · -Raw / -Tail / -Wait · Set-Content / Add-Content · Out-File · -Encoding · Select-String |
| 30 | `ps-30-json-csv-xml.html` | JSON, CSV &amp; XML | ConvertTo-Json -Depth · ConvertFrom-Json · Import-Csv / Export-Csv · [xml] · Select-Xml · Export-Clixml |

## Group 13 — Modules (31–32)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 31 | `ps-31-using-modules-gallery.html` | Using Modules &amp; the PowerShell Gallery | Import-Module · Get-Module -ListAvailable · $env:PSModulePath · Install-PSResource · Install-Module · #Requires -Modules |
| 32 | `ps-32-writing-modules.html` | Writing Modules | .psm1 · Export-ModuleMember · New-ModuleManifest · FunctionsToExport · Public / Private · Publish-PSResource |

## Group 14 — Advanced Topics (33–37)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 33 | `ps-33-regular-expressions.html` | Regular Expressions | -match &amp; $Matches · (?&lt;name>) · -replace $1 · Select-String · [regex]::Matches() · switch -Regex |
| 34 | `ps-34-dates-times.html` | Dates &amp; Times | Get-Date -Format · [datetime]::ParseExact() · .AddDays() · New-TimeSpan · Measure-Command · Start-Sleep |
| 35 | `ps-35-jobs-parallelism.html` | Jobs &amp; Parallelism | Start-Job · Receive-Job · Start-ThreadJob · ForEach-Object -Parallel · -ThrottleLimit · $using: |
| 36 | `ps-36-web-requests-rest.html` | Web Requests &amp; REST APIs | Invoke-RestMethod · Invoke-WebRequest · -Method / -Headers / -Body · ConvertTo-Json body · -Authentication Bearer · -OutFile |
| 37 | `ps-37-debugging-testing.html` | Debugging &amp; Testing | Set-StrictMode · Set-PSBreakpoint · Wait-Debugger · Invoke-ScriptAnalyzer · Pester Describe / It · Should / Mock |

## Group 15 — System Administration (38–40)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 38 | `ps-38-processes-services-native.html` | Processes, Services &amp; Native Commands | Get-Process / Stop-Process · Start-Process · Get-Service · Restart-Service · --% / $LASTEXITCODE · native args |
| 39 | `ps-39-remoting-credentials.html` | Remoting &amp; Credentials | Enter-PSSession · Invoke-Command · New-PSSession · SSH -HostName · Get-Credential · SecretManagement |
| 40 | `ps-40-windows-management.html` | Windows Management | HKLM: / HKCU: · Get-ItemProperty · Get-CimInstance · Get-WinEvent · Register-ScheduledTask · Get-LocalUser |
