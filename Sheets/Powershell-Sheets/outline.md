# PowerShell Reference Guide Outline (40 sheets)

## Metadata

- **Group it belongs to:** Command Line Interface
- **Folder Directory:** `Sheets/Powershell-Sheets/ps-##-[slug].html`
- **Groups:** 15
- **Sheets:** 40
- **Drafted Date:** 2026-10-06
- **Verified-Finalized Date:** 2026-10-07

## Basic Information

PowerShell as a shell and a .NET-based scripting language, for intermediate users who are comfortable at a terminal and may know bash or another language. Covers interactive use, scripting and common admin tasks. Targets PowerShell 7.4+ (`pwsh`), with Windows PowerShell 5.1 differences flagged in notes.

The set was capped at 40 sheets, so sheets are consolidated and dense. Standard groups that shrink: Data Structures (2), OOP (2, as .NET & Classes), and External Libraries (folded into Pester on Sheet 37).

## Differences in Layout from Basic Structure

- The pipeline is PowerShell's defining feature, so it gets its own group placed right after Control Flow instead of at the end.

## Groups

### Group 1: Getting Started (Sheets 01–03)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `ps-01-introduction-editions.html` | Introduction & Editions | pwsh · $PSVersionTable · winget / brew · Set-ExecutionPolicy · .ps1 · #Requires |
| 02 | `ps-02-cmdlet-syntax-discovery.html` | Cmdlet Syntax & Discovery | Verb-Noun · Get-Command · Get-Help · Get-Member · Get-Alias · parameters |
| 03 | `ps-03-profiles-psreadline.html` | Profiles & PSReadLine | $PROFILE · prompt · Set-PSReadLineOption · Set-PSReadLineKeyHandler · Get-History · Oh My Posh |

### Group 2: Output & Comments (Sheets 04–05)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 04 | `ps-04-output-streams.html` | Output & Streams | Write-Output · Write-Host · Write-Verbose · streams 1–6 · 2>&1 · Out-Null |
| 05 | `ps-05-comments-help.html` | Comments & Comment-Based Help | # · &lt;# #> · .SYNOPSIS · .PARAMETER · .EXAMPLE · #region |

### Group 3: Variables & Types (Sheets 06–08)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 06 | `ps-06-variables-scope.html` | Variables & Scope | $var · ${odd name} · New-Variable · $global: / $script: · $env: · Remove-Variable |
| 07 | `ps-07-automatic-preference-variables.html` | Automatic & Preference Variables | $_ / $PSItem · $? · $LASTEXITCODE · $PSScriptRoot · $Matches · $ErrorActionPreference |
| 08 | `ps-08-types-casting.html` | Types & Casting | [int] [string] [double] · type accelerators · -as / -is · .GetType() · [int]$x · 1kb / 0xFF |

### Group 4: Strings (Sheets 09–10)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 09 | `ps-09-string-basics-formatting.html` | String Basics & Formatting | 'single' vs "double" · $() subexpression · `n `t escapes · @" "@ · -f operator · {0:N2} |
| 10 | `ps-10-string-methods-operators.html` | String Methods & Operators | -split / .Split() · -join · -replace / .Replace() · .Trim() · .Substring() · IsNullOrWhiteSpace |

### Group 5: Operators (Sheets 11–13)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 11 | `ps-11-arithmetic-assignment-operators.html` | Arithmetic & Assignment Operators | + - * / % · ++ / -- · += -= *= · [math]::Round() · -band / -bor / -shl · 1..10 |
| 12 | `ps-12-comparison-matching-operators.html` | Comparison & Matching Operators | -eq -ne -gt -lt · -ceq · -like / -notlike · -match / -notmatch · -contains / -in · array filters |
| 13 | `ps-13-logical-null-special-operators.html` | Logical, Null & Special Operators | -and / -or / -not · ?? / ??= · ?. / ?[] · ? : ternary · && / \|\| · & call / . dot-source |

### Group 6: Control Flow (Sheets 14–15)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 14 | `ps-14-if-switch.html` | if & switch | if / elseif / else · switch · -Wildcard / -Regex · -File · break / continue · $_ in switch |
| 15 | `ps-15-loops.html` | Loops | foreach · for · while · do / while / until · break / continue · :label |

### Group 7: The Pipeline (Sheets 16–18)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 16 | `ps-16-pipeline-basics.html` | Pipeline Basics | Where-Object · ForEach-Object · Select-Object · Sort-Object · Group-Object · Measure-Object |
| 17 | `ps-17-custom-objects-calculated-properties.html` | Custom Objects & Calculated Properties | [PSCustomObject]@{} · @{Name=; Expression=} · -ExcludeProperty · Add-Member · Compare-Object · Tee-Object |
| 18 | `ps-18-formatting-output.html` | Formatting Output | Format-Table · Format-List · Format-Wide · format-right rule · Out-String · Out-GridView |

### Group 8: Error Handling (Sheets 19–20)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 19 | `ps-19-errors-erroraction.html` | Errors & ErrorAction | non-terminating · -ErrorAction Stop · $ErrorActionPreference · $Error[0] · -ErrorVariable · Get-Error |
| 20 | `ps-20-try-catch-throw.html` | try / catch / finally & throw | try / catch / finally · catch [Type] · $_.Exception.Message · throw · rethrow · trap |

### Group 9: Functions (Sheets 21–23)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 21 | `ps-21-functions-script-blocks.html` | Functions & Script Blocks | function Verb-Noun · param() · return · [switch] · splatting @params · { } script blocks |
| 22 | `ps-22-advanced-functions-validation.html` | Advanced Functions & Parameter Validation | [CmdletBinding()] · [Parameter(Mandatory)] · ParameterSetName · [ValidateSet()] · [ValidateScript()] · -Verbose |
| 23 | `ps-23-pipeline-input-shouldprocess.html` | Pipeline Input & ShouldProcess | ValueFromPipeline · ByPropertyName · begin / process / end · clean · SupportsShouldProcess · -WhatIf / -Confirm |

### Group 10: Collections (Sheets 24–25)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 24 | `ps-24-arrays-lists.html` | Arrays & Lists | @() / , · $a[-1] · $a[0..2] · += copies · List[object] · array unrolling |
| 25 | `ps-25-hashtables-dictionaries.html` | Hashtables & Dictionaries | @{} · [ordered]@{} · .ContainsKey() · .GetEnumerator() · Dictionary[string,int] · HashSet[T] |

### Group 11: .NET & Classes (Sheets 26–27)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 26 | `ps-26-working-with-dotnet.html` | Working with .NET | [Class]::Method() · ::new() · New-Object · using namespace · Get-Member -Static · Add-Type |
| 27 | `ps-27-classes-enums.html` | Classes & Enums | class · constructors · $this · static / hidden · inheritance : Base · enum / [Flags()] |

### Group 12: Files & Data (Sheets 28–30)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 28 | `ps-28-file-system-items.html` | File System & Items | Get-ChildItem · Test-Path · New-Item · Copy- / Move- / Remove-Item · Join-Path / Split-Path · PSDrives |
| 29 | `ps-29-reading-writing-files.html` | Reading & Writing Files | Get-Content · -Raw / -Tail / -Wait · Set-Content / Add-Content · Out-File · -Encoding · Select-String |
| 30 | `ps-30-json-csv-xml.html` | JSON, CSV & XML | ConvertTo-Json -Depth · ConvertFrom-Json · Import-Csv / Export-Csv · [xml] · Select-Xml · Export-Clixml |

### Group 13: Modules (Sheets 31–32)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 31 | `ps-31-using-modules-gallery.html` | Using Modules & the PowerShell Gallery | Import-Module · Get-Module -ListAvailable · $env:PSModulePath · Install-PSResource · Install-Module · #Requires -Modules |
| 32 | `ps-32-writing-modules.html` | Writing Modules | .psm1 · Export-ModuleMember · New-ModuleManifest · FunctionsToExport · Public / Private · Publish-PSResource |

### Group 14: Advanced Topics (Sheets 33–37)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 33 | `ps-33-regular-expressions.html` | Regular Expressions | -match & $Matches · (?&lt;name>) · -replace $1 · Select-String · [regex]::Matches() · switch -Regex |
| 34 | `ps-34-dates-times.html` | Dates & Times | Get-Date -Format · [datetime]::ParseExact() · .AddDays() · New-TimeSpan · Measure-Command · Start-Sleep |
| 35 | `ps-35-jobs-parallelism.html` | Jobs & Parallelism | Start-Job · Receive-Job · Start-ThreadJob · ForEach-Object -Parallel · -ThrottleLimit · $using: |
| 36 | `ps-36-web-requests-rest.html` | Web Requests & REST APIs | Invoke-RestMethod · Invoke-WebRequest · -Method / -Headers / -Body · ConvertTo-Json body · -Authentication Bearer · -OutFile |
| 37 | `ps-37-debugging-testing.html` | Debugging & Testing | Set-StrictMode · Set-PSBreakpoint · Wait-Debugger · Invoke-ScriptAnalyzer · Pester Describe / It · Should / Mock |

### Group 15: System Administration (Sheets 38–40)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 38 | `ps-38-processes-services-native.html` | Processes, Services & Native Commands | Get-Process / Stop-Process · Start-Process · Get-Service · Restart-Service · --% / $LASTEXITCODE · native args |
| 39 | `ps-39-remoting-credentials.html` | Remoting & Credentials | Enter-PSSession · Invoke-Command · New-PSSession · SSH -HostName · Get-Credential · SecretManagement |
| 40 | `ps-40-windows-management.html` | Windows Management | HKLM: / HKCU: · Get-ItemProperty · Get-CimInstance · Get-WinEvent · Register-ScheduledTask · Get-LocalUser |
