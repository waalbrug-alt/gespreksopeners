---
name: contrarian-equity-research
description: Research public companies through source-checked fundamental analysis, peer-relative valuation, news and catalyst assessment, downside risks, and optional technical timing. Use when asked to analyze, compare, screen, or monitor listed shares; produce an educational research memo, not personalized investment advice.
---

# Contrarian Equity Research

## Purpose and integrity

Use this skill to produce disciplined, evidence-based public-equity research. The workflow is **inspired by publicly described practices associated with Geert Schaaij and Beursgenoten**: fundamental analysis as the basis for selecting companies, daily attention to company news and changing facts, comparison with peers to identify relative undervaluation, openness to unpopular or temporarily impaired situations, diversification, and technical analysis only as optional timing context.

Do not claim that this is Geert Schaaij's private, official, complete, or verbatim method. Public descriptions do not disclose a complete proprietary checklist, fixed scoring model, specific software, or universal valuation thresholds. The scorecards and procedures below are an explicit operational design for an AI tool, not attributed quotations or endorsements. Do not imply affiliation with Schaaij, Beursgenoten, Quote, or any other source.

## Operating principles

1. Separate **company quality**, **share valuation**, **catalysts**, and **portfolio suitability**. A good company is not automatically a good investment at any price.
2. Explain the investment case with verifiable facts and dated sources. Label estimates, assumptions, interpretation, and uncertainty separately.
3. Do not manufacture missing data, precise fair values, analyst consensus, future returns, or certainty. If essential inputs are unavailable, state what is unknown and reduce confidence.
4. Use the latest available primary disclosures first. Treat media, broker commentary, and AI summaries as secondary evidence.
5. Use contrarian sentiment as a research prompt, never as evidence that price must recover. A falling price can signal permanent impairment.
6. Do not translate an analysis score into an automatic buy/sell instruction. Present scenarios, conditions that would invalidate the thesis, and risks.
7. Do not personalize a recommendation unless the user supplies a mandate and the system is authorized to handle it. Even then, distinguish general research from regulated advice.

## Workflow

### 1. Define the task and instrument

Resolve the company name, ticker, listing venue, share class, currency, fiscal year, and analysis date. Confirm whether the request concerns common equity, a holding company, ADR, preferred share, fund, or another instrument. Check for ticker ambiguity, dual listings, recent symbol changes, delisting risk, and corporate actions.

Ask a concise clarification only when ambiguity would materially change the result. Otherwise state the assumed instrument and proceed. Establish the requested scope: single-company memo, peer comparison, screen, update after news/earnings, or watchlist review. Ask for a time horizon only if it changes the analysis; otherwise show near-term catalysts separately from long-term thesis.

### 2. Gather and rank evidence

Collect current data and record the source, publication/report date, period covered, currency, units, and access date for every material input.

Preferred source order:
- Regulatory filings and exchange announcements: annual/interim reports, audited accounts, earnings releases, material-event disclosures, prospectuses, and official presentations.
- Company sources: investor-relations materials, earnings-call transcript or recording, guidance, and official dividend/buyback information. Treat management claims as claims, not independent verification.
- Official market/regulatory data for prices, shares, ownership, and corporate actions.
- Reputable financial-data providers for standardized statements, ratios, estimates, and peer data. Verify key metrics against filings because vendor definitions can differ.
- Reputable independent news sources for developments and context.
- Broker research, forums, social media, and promotional content only as leads to verify, never as the sole basis for a material claim.

For material facts, triangulate at least two sources where practical, including one primary source. Distinguish reported, adjusted, and non-GAAP values. Note restatements, accounting changes, acquisitions, disposals, seasonality, and unusual one-offs. Do not combine figures from inconsistent periods or currencies without explicitly normalizing them.

If browsing/data tools are unavailable, disclose that the report is not current-data verified. Never present a remembered quote or ratio as live.

### 3. Understand the business and industry

Describe in plain language what the company sells, who pays, where revenue/profit comes from, and what drives demand. Identify major segments and geographic exposures if material. Explain the business model, pricing power, customer/supplier concentration, cyclicality, regulation, capital intensity, and competitive position.

Map the industry cycle and structural shifts. Identify two to five genuine peers with comparable economics, geography, size, and accounting where possible. Explain peer selection and any limitations. Do not benchmark a conglomerate against a single-sector company without segment-level adjustments.

### 4. Fundamental quality review

Use at least five fiscal years of annual history when available, plus the latest interim period and current company guidance. Use a shorter horizon only for young, transformed, or newly listed companies, and explain why. Assess trends rather than relying on one-year snapshots.

**Growth and durability:** revenue, organic growth, volumes/prices/mix, recurring versus transactional income, customer retention, backlog, market share, and growth by segment. Separate acquired growth from organic growth. Check whether growth is profitable and cash-generative.

**Profitability:** gross, operating, and net margins; EBITDA only with context; EPS and diluted share count; return on equity (ROE), return on invested capital (ROIC), and margin direction. Explain material margin changes. Adjust for one-offs only with a reconciliation to reported figures.

**Cash generation:** operating cash flow, capital expenditure, free cash flow (state the definition), cash conversion, working-capital movements, stock-based compensation where material, and dividend/buyback funding. Compare net income with cash generation over several years. Flag persistent earnings-to-cash divergence.

**Balance sheet and resilience:** cash, gross and net debt, lease liabilities where relevant, maturity schedule, interest expense and coverage, liquidity, covenants if disclosed, pension obligations, contingent liabilities, and refinancing needs. Interpret debt in context of stable cash flows and industry norms; do not use a single debt/equity cutoff across industries.

**Capital allocation and governance:** acquisitions, divestitures, buybacks, dividends, reinvestment, leverage decisions, dilution, related-party transactions, insider ownership, board independence, and management's record of meeting guidance. Separate facts from judgment. Review whether incentives reward durable per-share value creation.

**Business durability:** competitive advantages and their evidence, including switching costs, network effects, cost advantage, brand, scarce assets, licenses, or scale. Assess whether the advantage is strengthening, stable, or eroding. Treat “moat” as a thesis requiring evidence, not a label.

### 5. Read recent news as potential thesis changes

Review material company news and filings since the latest reporting date, and a broader relevant news window appropriate to the company. Include dates and original links. Categorize developments as:
- Fundamental change: demand, pricing, costs, competition, regulation, litigation, management, financing, major contracts, product issues, or capital allocation.
- Estimate/expectation change: guidance, consensus revisions, earnings warnings, analyst forecast revisions. Identify who made the estimate and when.
- Market/technical event: price gap, liquidity, index inclusion, short squeeze, or flow. Do not mistake this for business improvement.

For each item, explain the likely channel of impact on revenue, margins, cash flow, balance sheet, or valuation. Check whether the market may already have incorporated it; do not assert this without evidence. Where reports conflict, show both versions and prefer the primary disclosure.

### 6. Value the share

Use at least two valuation lenses where data permit, one absolute and one relative. Select methods appropriate to the business; do not force a DCF for a financial firm or a cyclical firm at peak earnings.

**Relative valuation:** compare trailing and forward P/E, EV/EBITDA, EV/EBIT, price/sales, price/book, dividend yield, or other sector-relevant measures with selected peers and the company's own history. Use consistent dates, accounting bases, and growth assumptions. Explain why a discount or premium may be deserved; “cheaper than peers” does not alone mean undervalued.

**Cash-flow/intrinsic value:** for businesses with sufficiently forecastable cash flows, build a transparent DCF or other suitable model. Show forecast horizon, revenue/margin/reinvestment assumptions, tax, discount rate, terminal value method, share count, net debt, and per-share result. Provide sensitivity analysis for key drivers and avoid false precision. If input uncertainty is high, use ranges or omit the point estimate.

**Asset- or sector-specific methods:** use NAV for asset-heavy firms, price/book or excess-return methods for banks/insurers, FFO/AFFO for REITs, commodity-cycle normalized earnings for producers, and other methods only when appropriate. State limitations and cross-check against an alternative.

**Margin of safety:** compare current price with a conservative value range. Define the calculation and assumptions; do not apply an unsupported universal discount threshold. If there is no defensible intrinsic value estimate, use relative valuation and state that valuation confidence is low.

Report the current/selected market price, date, currency, share count basis, enterprise-value bridge, and source. Include bear/base/bull cases with assumptions and conditions, not just price targets. Do not present scenario values as guaranteed future prices.

### 7. Look for contrarian opportunities without falling into a value trap

A large price decline, low multiple, negative headlines, or neglect can justify deeper investigation. It does not establish mispricing. For every apparently cheap or unpopular stock, answer:
- What concrete event or expectation caused the discount?
- Is the issue temporary, cyclical, structural, governance-related, or existential?
- What evidence supports normalization or recovery? What evidence contradicts it?
- Is liquidity, debt, dilution, or a refinancing wall likely to force value destruction before recovery?
- What observable catalyst could narrow the gap, and on what plausible timeline?
- What would prove the thesis wrong? What is the permanent-loss scenario?
- Is the apparent discount explained by business quality, country, governance, currency, tax, or liquidity risk?

Only call a catalyst plausible if there is a stated mechanism and evidence. Treat geopolitical normalization, asset sales, activist involvement, management change, or commodity recovery as scenarios unless there is verifiable progress.

### 8. Optional technical timing layer

Use technical indicators only when recent, reliable price and volume data are available and the user requests timing, or when it is useful as a clearly separate context section. Technical analysis does not determine business quality or intrinsic value.

May review trend versus relevant moving averages, support/resistance areas, price gaps, relative performance, traded volume, and volatility. If calculating indicators such as RSI, state lookback and data interval. Explain that levels are interpretive, can fail, and are not standalone signals. Do not describe a pattern as predictive certainty. Keep technical evidence separate from the fundamental thesis and do not allow it to reverse a fundamental conclusion without a reasoned update.

### 9. Risk and portfolio context

List company-specific, financial, valuation, execution, industry, regulatory, currency, geopolitical, governance, liquidity, and data-quality risks as applicable. Rank by severity and describe the potential pathway to loss. Include at least one thesis-invalidating event and a monitoring indicator for each major risk.

If discussing portfolio construction, emphasize concentration and diversification across genuinely different risk drivers/sectors. Do not prescribe a personalized allocation, position size, or suitability judgment without the user's financial circumstances and the relevant authorization. A speculative turnaround or “special situation” should be explicitly labeled as higher risk, not merely called a “hidden gem.”

### 10. Synthesize with a transparent scorecard

Use `references/scorecard.md` only as a structured thinking aid. Scores are ordinal judgments, not statistical probabilities, expected returns, or universal thresholds. For every score, give the key evidence, confidence, and data gaps. If evidence is missing, mark “not assessed”; do not silently award a neutral score.

Present separate conclusions for:
- Business/fundamental quality.
- Balance-sheet resilience.
- Valuation versus peers and estimated value range.
- Catalysts and time sensitivity.
- Downside risk and thesis fragility.
- Evidence quality and confidence.

Never collapse these into a single unconditional BUY/SELL result. A useful conclusion may be “interesting but needs verification,” “good business but price leaves little margin,” “cheap for explainable structural reasons,” “potential turnaround with substantial downside,” or “insufficient evidence.” Explain what evidence would change the conclusion.

## Output format

Unless the user requests another format, produce a concise but substantive research memo with:

1. **Company and date** — ticker, venue, currency, price date, and scope.
2. **Bottom line** — one paragraph separating business quality, valuation, and uncertainty.
3. **Thesis in brief** — why the share might outperform or disappoint; time horizon if known.
4. **Business and sector** — key revenue/profit drivers and peer set.
5. **Fundamentals** — multi-year trend, cash generation, financial position, and governance.
6. **News and catalysts** — dated developments and their mechanisms.
7. **Valuation** — methods, assumptions, peer context, scenario ranges, and sensitivity.
8. **Risks and thesis breakers** — ranked and tied to indicators.
9. **Optional technical context** — clearly segregated.
10. **What to monitor next** — a short set of observable updates, such as earnings, guidance, debt maturities, regulatory decisions, or segment KPIs.
11. **Sources and limitations** — links near claims or a source list; include data freshness and caveats.

Use a balanced tone. Describe opposing evidence before concluding. Clearly label “reported fact,” “company guidance,” “third-party estimate,” “model assumption,” and “analyst interpretation” whenever those could be confused. Avoid hype, guaranteed language, and unsupported precision. Include a brief educational-purpose disclaimer; do not let a disclaimer substitute for sound analysis.

## Suggested reference sources for the design

The process is informed by publicly accessible descriptions, not a claim to reproduce a proprietary system:
- Beursgenoten, “De technische analyse”: https://www.beursgenoten.nl/beleggen/aandelen/de-technische-analyse
- De Telegraaf interview/branded content with Geert Schaaij on diversification, following regular shares/news, and searching for underpriced shares: https://www.telegraaf.nl/brandedcontent/zo-ga-je-op-weg-naar-het-eerste-miljoen.../64577885.html
- Beursgenoten, illustrative stock-selection discussion (historical examples; do not reuse as current recommendations): https://www.beursgenoten.nl/beleggen/aandelen/welke-aandelen-moet-u-nu-kopen
