# XML Reference Guide Outline (16 sheets)

## Metadata

- **Group it belongs to:** Markup & Notation
- **Folder Directory:** `Sheets/XML-Sheets/xml-##-[slug].html`
- **Groups:** 1
- **Sheets:** 16
- **Drafted Date:** 2026-10-01 (re-drafted after the sheets were live)
- **Verified-Finalized Date:** 2026-10-01
- **Expanded:** 2026-10-23 (new topic sheets added before the quick references; quick references renumbered)

## Basic Information

XML document structure, elements and attributes, text and special characters, namespaces, DTD and XSD validation, XPath, XSLT, parsers, and real-world formats.

## Differences in Layout from Basic Structure

Most sheets use the standard four-row layout (Description | Notes, Code | Explain, Tables, Mistakes | Tips | Summary).

New sheets 11–14 combine rows 1–2 to fit (left: Description → Notes → Explain; right: Code).

The set is small enough to be a single group.

## Groups

### Group 1: All Sheets (Sheets 01–16)

| # | Filename | Sheet Title | Key Topics |
|---|---|---|---|
| 01 | `xml-01-basics.html` | Basics & Document Structure | prolog · declaration · root element · well-formedness · parsers · file types |
| 02 | `xml-02-elements-attributes.html` | Elements & Attributes | element syntax · nesting · empty elements · attributes · element vs attribute |
| 03 | `xml-03-text-data.html` | Text, Data & Special Characters | CDATA · entities · character refs · whitespace · encoding · Unicode |
| 04 | `xml-04-namespaces.html` | Namespaces | xmlns · prefixes · default namespace · scope · XHTML · SOAP · SVG |
| 05 | `xml-05-dtd.html` | DTD — Document Type Definition | !ELEMENT · !ATTLIST · !ENTITY · content models · internal · external |
| 06 | `xml-06-xsd.html` | XML Schema (XSD) | schema structure · simple types · complex types · restrictions · xs:sequence |
| 07 | `xml-07-xpath.html` | XPath | axes · node selection · predicates · functions · absolute · relative paths |
| 08 | `xml-08-xslt.html` | XSLT | templates · apply-templates · for-each · if · choose · output methods |
| 09 | `xml-09-parsing.html` | Parsing XML | DOM · SAX · StAX · Python · JS · tree navigation · error handling |
| 10 | `xml-10-practical.html` | Practical XML | SOAP · REST · RSS · SVG · config files · Maven · Android · XML to JSON |
| 11 | `xml-11-security.html` | XML Security | XXE · billion laughs · external entities · disallow-doctype-decl · defusedxml · XPath injection |
| 12 | `xml-12-xslt-intermediate.html` | XSLT — Variables, Keys & Grouping | xsl:variable · xsl:param · xsl:key · key() · mode · xsl:for-each-group · Muenchian grouping |
| 13 | `xml-13-xpath3-xquery.html` | XPath 2.0 / 3.1 & XQuery Basics | sequences · if / then / else · for · let · ! · \|\| · => · maps & arrays · FLWOR |
| 14 | `xml-14-formats-in-the-wild.html` | XML Formats in the Wild | plist · .docx / .xlsx (OOXML) · sitemap.xml · Atom · .csproj · JUnit XML · GPX / KML |
| 15 | `xml-15-quick-reference-syntax-validation.html` | Quick Reference — Syntax & Validation | well-formedness · elements & attributes · entities & CDATA · namespaces · DTD · XSD types & structure |
| 16 | `xml-16-quick-reference-xpath-xslt-parsing.html` | Quick Reference — XPath, XSLT & Parsing | XPath axes & functions · XSLT templates & control · parsers by language · DOM vs SAX vs StAX · xmllint · security |
