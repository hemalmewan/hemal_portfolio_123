# Portfolio Website — Claude Code Prompt Template
# Author: Hemal Mewantha | Usage: Paste this entire prompt into Claude Code

---

## PROMPT START

Build me a complete, single-page professional portfolio website using HTML, CSS, and vanilla JavaScript.
This is for Hemal Mewantha — a final-year Data Science undergraduate and aspiring AI/ML Engineer.
The site must be production-ready, visually distinctive, and fully responsive.

---

## 1. DESIGN SYSTEM

### Color Theme
Use a deep navy and electric indigo theme with crisp off-white text — professional, modern, and
aligned with AI/ML engineering roles. Apply these exact CSS variables throughout:

```css
:root {
  --bg-primary:       #0A0E1A;   /* Deep navy — main background          */
  --bg-secondary:     #111827;   /* Slightly lighter navy — cards         */
  --bg-card:          #1A2235;   /* Card surfaces                         */
  --accent-primary:   #6366F1;   /* Electric indigo — primary CTA, links  */
  --accent-secondary: #10B981;   /* Emerald green — secondary highlights  */
  --accent-glow:      #6366F133; /* Indigo glow for hover effects         */
  --text-primary:     #F1F5F9;   /* Off-white — headings and body         */
  --text-secondary:   #94A3B8;   /* Muted slate — subtitles, meta         */
  --text-tertiary:    #475569;   /* Dimmer — labels, timestamps           */
  --border:           #1E2D45;   /* Subtle borders                        */
  --border-hover:     #6366F155; /* Border on hover                       */
  --gradient-hero:    linear-gradient(135deg, #6366F1 0%, #10B981 100%);
}
```

### Typography
- **Display / Hero headings**: `'Sora'` from Google Fonts — weight 700
- **Section headings**: `'Sora'` — weight 600
- **Body text**: `'DM Sans'` from Google Fonts — weight 400/500
- **Code / tech labels**: `'JetBrains Mono'` from Google Fonts — weight 400
- Import all three from Google Fonts at the top of the HTML.
- Base font size: 16px. Line height: 1.7.
- Never use Inter, Roboto, or Arial.

### Visual Details
- Subtle animated gradient mesh background on the hero section (CSS keyframe animation)
- Cards use `backdrop-filter: blur(12px)` with semi-transparent backgrounds
- Hover states: cards lift with `translateY(-4px)` + soft indigo glow box-shadow
- Section reveal animations: elements fade in + slide up on scroll (IntersectionObserver)
- Smooth scroll behaviour across the entire page
- Thin indigo left-border accent on project and experience cards
- Add a subtle dot-grid or noise texture overlay on the hero background using CSS
- Custom scrollbar styled to match the theme

---

## 2. PAGE STRUCTURE & NAVBAR

The page is a single HTML file. At the very top, render a fixed navbar with these items,
each linking to an anchor `id` on the page:

```
Hemal Mewantha [logo/name left-aligned]   About · Experience · Projects · Research · Skills · Education · Contact
```

- Navbar background: `--bg-primary` with `backdrop-filter: blur(16px)` and a bottom border
- Active section highlighting: use IntersectionObserver to add an `active` class to the
  current nav link as the user scrolls
- On mobile: collapse into a hamburger menu that opens a full-width dropdown
- Add a sticky "Back to top" floating button (bottom-right, visible after scrolling 300px)

Page sections in order (each with a matching `id`):
1. `#about`
2. `#experience`
3. `#projects`
4. `#research`
5. `#skills`
6. `#education`
7. `#contact`

---

## 3. SECTION CONTENT

### 3.1 — HERO / ABOUT (`#about`)

**Name:** Hemal Mewantha
**Tagline (animate with a typing effect, cycling through these three):**
- "AI/ML Engineer"
- "Data Science Researcher"
- "Agentic AI Developer"

**Status badge (pill, top-left of card):** 🟢 Open to Opportunities

**Bio (two paragraphs):**

> I'm a final-year Data Science undergraduate at the University of Colombo, Faculty of Science,
> specialising in building intelligent, production-ready AI systems. My work spans the full AI
> lifecycle — from data pipelines and model development through to deployment, evaluation, and
> monitoring in real-world environments.

> I've built AI-powered applications including multi-agent recommendation systems, financial LLM
> assistants, RAG pipelines with measurable latency improvements, and NL2SQL medical analytics
> platforms. I'm actively applying for AI/ML engineering roles where I can build systems that
> work beyond the notebook — in production, at scale.

**Tech stack badges (render as pill badges in indigo):**
Python · Machine Learning · Deep Learning · LLMs · RAG · Agentic AI · LangGraph · GCP · AWS · Airflow · Terraform · Docker · FastAPI

**Links (icon + label, side by side):**
- GitHub: https://github.com/hemalmewan
- LinkedIn: https://www.linkedin.com/in/hemalmewantha
- Email: mewanmuna2000@gmail.com
- Resume: [Download PDF] — button styled in accent indigo

**Layout:** Two-column on desktop (text left, animated visual right). The right side should
show an animated abstract — floating glowing nodes connected by thin lines (canvas or CSS),
representing a neural network / AI graph. On mobile, stack vertically.

---

### 3.2 — EXPERIENCE (`#experience`)

Render as a vertical timeline with a glowing indigo line on the left.

**Entry 1 — Most Recent:**

> **Data Science Research Intern** · Full-time · On-site
> International Water Management Institute (IWMI)
> Oct 2025 – Apr 2026 · Battaramulla, Western Province, Sri Lanka

Bullet points:
- Analysed geospatial climate data using raster and NetCDF formats to support global climate trend studies
- Developed an R package for computing ETCCDI climate indices and performing Mann-Kendall trend analysis
- Built an interactive R Shiny dashboard to visualise climate trends and precipitation indices across multiple regions
- Applied statistical modelling and hypothesis testing for hydrological and climate data analysis
- Contributed to the Hydrology Climate Trend Analysis Project with data-driven insights

Tech Stack badges: Geospatial Analysis · R Programming · R Package Development · R Shiny · Statistical Modelling · NetCDF · Raster Data

GitHub: https://github.com/hemalmewan/Climate-Trend-R-package

---

### 3.3 — PROJECTS (`#projects`)

Add a filter tab bar at the top of this section with these tabs:
`All` · `AI & LLM` · `Machine Learning` · `Data Engineering`

Clicking a tab filters visible project cards with a smooth CSS transition.
Default: show All.

Render each project as a card with:
- Category label (top-right pill badge)
- Project title (bold)
- Date range (muted)
- 3–5 bullet points (description)
- Key metrics box (if available) — highlighted in emerald green
- Tech stack badges
- GitHub button

---

**PROJECT 1 — AI & LLM**
**Prime Land AI Assistant — RAG-Based Intelligent QA System**
*Feb 2026 – Mar 2026*

- Built an end-to-end AI-powered real estate assistant using advanced Retrieval-Augmented Generation (RAG) techniques with a scalable web crawling and semantic chunking pipeline
- Implemented a hybrid retrieval architecture combining Semantic Caching (CAG) and Corrective RAG (CRAG) to improve response accuracy and efficiency
- Integrated confidence scoring and dynamic retrieval expansion with re-ranking to handle low-confidence queries
- Designed a modular, scalable LLM pipeline validated across 100 test queries

**Key Metrics box:**
| Metric | Value |
|---|---|
| Cache Hit Rate | 21% |
| Latency Improvement | 82.85% (cache hits) |
| Avg RAG Latency | 9.556s → 1.639s |
| Cost Saved | $0.0252 per run |

Tech: RAG · CAG · CRAG · Qdrant Vector DB · Playwright · Python
GitHub: https://github.com/hemalmewan/Prime-Land-AI-Assistant

---

**PROJECT 2 — AI & LLM**
**Kapruka Gift Recommendation Assistant — Multi-Agent System**
*Mar 2026 – Apr 2026*

- Designed an AI-driven gift recommendation system using multi-agent architecture and RAG, delivering personalised product suggestions from 10,000+ scraped product records
- Built a multi-agent orchestration framework: Catalog Agent (RAG retrieval), Logistics Agent (delivery validation across Sri Lanka), Reflection Agent (Draft → Critique → Revise loop)
- Implemented multi-layer memory: short-term conversation context, semantic user preferences, and long-term RAG product knowledge
- Engineered an intelligent routing engine classifying user intent (product search, delivery check, preference update) and extracting key entities for accurate agent activation
- Used Judge LLM to aggregate multi-agent outputs into a single coherent response

Tech: Python · OpenAI GPT & Embeddings · Qdrant Cloud · Playwright · Tavily · RAG · Multi-agent Systems
GitHub: https://github.com/hemalmewan/Gift-AI-Assistant

---

**PROJECT 3 — AI & LLM**
**AI-Powered Research Assistant — RAG, ReAct & Reflection Agents**
*Mar 2026 – Mar 2026*

- Developed an end-to-end AI research assistant combining RAG, ReAct reasoning, and a reflection-based improvement loop for accurate, structured responses
- Integrated internal knowledge retrieval (Qdrant) with real-time web search (Tavily API) for both static and dynamic information needs
- A reflection agent iteratively critiques and refines ReAct agent responses; an LLM-based evaluation framework measures completeness, accuracy, clarity, actionability, and safety
- Deployed via FastAPI (backend) and Streamlit (frontend) with performance metrics dashboards (latency, token usage, cost, quality scores)

Tech: Python · RAG · Agentic AI · LLMs · Prompt Engineering · LLM-as-a-Judge · FastAPI · Qdrant · Streamlit
GitHub: https://github.com/hemalmewan/Research-AI-Agent

---

**PROJECT 4 — AI & LLM**
**Financial AI Assistant — Domain-Adapted LLM**
*Jan 2026 – Feb 2026*

- Fine-tuned LLaMA 3 8B Instruct on Uber's financial and regulatory disclosures for domain-adapted financial question answering
- Integrated a Hybrid RAG pipeline combining semantic vector retrieval with document-grounded generation to reduce hallucination on numerical data
- Conducted a structured hallucination audit revealing common failure modes in numeric reasoning and demonstrating how retrieval grounding improves precision
- Evaluated using ROUGE-L, LLM-as-a-Judge scoring, and latency benchmarking for production feasibility assessment

Tech: LLaMA 3 8B · Fine-tuning (QLoRA, PEFT) · RAG · Prompt Engineering · ROUGE-L · LLM-as-a-Judge · Python
GitHub: https://github.com/hemalmewan/AI-Assistant-For-Financial

---

**PROJECT 5 — AI & LLM**
**Medicore — AI-Powered Medical Analytics (NL2SQL)**
*Apr 2026 – Apr 2026*

- Built an AI-driven medical analytics platform enabling doctors and analysts to query healthcare data using natural language instead of SQL
- NL2SQL engine automatically converts questions like "Show revenue trends" or "Top doctors by patients" into SQL queries with intelligent chart-type selection (bar, line, pie, table)
- Includes monitoring: total runs, token cost, average latency, query history tracking via Langfuse observability
- Built-in security: guardrails protection, ambiguity handling with refinement prompts, three-attempt query refinement limit

Tech: Python · OOP · Supabase · PostgreSQL · Langfuse · FastAPI · Prompt Engineering · Guardrails & AI Safety
GitHub: https://github.com/hemalmewan/Multi-Agent-NL2SQL-Platform

---

**PROJECT 6 — Machine Learning**
**ML-Based Diagnostic Classifier for ME/CFS and Depression**
*Jul 2025 – Aug 2025*

- Developed an advanced ML system classifying patients with ME/CFS, Depression, or both using clinical and psychological data
- Conducted in-depth EDA with multicollinearity checks, FAMD, clustering, and Fisher Discriminant Analysis (FDA) to explore decision boundaries
- Selected SVC as best-performing classifier; applied SHAP (Shapley Additive Explanations) for model interpretability in a healthcare context
- Identified Depression Score and Post-Exertional Malaise as key predictors of ME/CFS and Depression overlap
- Deployed as a complete ML product: Streamlit + FastAPI, containerised with Docker, CI/CD automated via Jenkins

Tech: Python · Streamlit · FastAPI · Docker · Jenkins · SHAP · SVC · ANN
GitHub: https://github.com/hemalmewan/Data-Analysis-Project

---

**PROJECT 7 — Data Engineering**
**Sentiment Analysis on News Headlines & Stock Market Data**
*Aug 2025 – Sep 2025*

- Built a real-time data pipeline ingesting stock prices and news headlines for 10 global companies via Finnhub API, automated with n8n
- Performed sentiment analysis on news headlines using Vertex AI; loaded results and stock details into BigQuery for structured analysis
- Orchestrated data pipelines and scheduled jobs using Apache Airflow (Cloud Composer)
- Designed interactive dashboards in Looker Studio for real-time insight visualisation
- Provisioned all cloud infrastructure (GCS, BigQuery, Cloud Composer) using Terraform as Infrastructure as Code

Tech: GCP · Vertex AI · n8n · BigQuery · Apache Airflow · Terraform · NLP · Looker Studio
GitHub: https://github.com/hemalmewan/Group-D-Big-Data-Project

---

### 3.4 — RESEARCH (`#research`)

Render as a standalone feature card (wider than a normal project card) with an academic feel —
left indigo accent border, research badge in the top-right corner.

**Multimodal Emotion Recognition System**
*Undergraduate Research Project · University of Colombo*

**Core Technologies:** Deep Learning · Multimodal AI · Active Learning (UBAL) · Model Quantization (Edge AI) · Computer Vision · Audio Processing · Grad-CAM

- Developed a dual-branch neural network combining facial features (MTCNN) and audio features (Log-Mel Spectrograms) for emotion recognition on a Sinhala video dataset
- Integrated Grad-CAM interpretability to analyse and visualise visual vs. audio feature contributions, improving model transparency and prediction understanding
- Investigated model quantization strategies for Edge AI deployment, targeting inference optimisation on resource-constrained devices
- Explores Active Learning (UBAL) to improve data efficiency in low-resource multimodal settings

---

### 3.5 — SKILLS (`#skills`)

Render as a 2×2 grid of skill group cards on desktop, stacked on mobile.
Each card has a group icon, group title, and tech badges inside.

**Group 1 — 🤖 AI / Machine Learning**
Machine Learning · Deep Learning · NLP · LLM Fine-tuning · RAG Pipelines · Agentic AI · Multi-agent Systems · Prompt Engineering · Computer Vision · LLM Evaluation

**Group 2 — 🧰 Frameworks & Libraries**
LangGraph · LangChain · HuggingFace · PyTorch · TensorFlow · Scikit-learn · FastAPI · Streamlit · Pandas · NumPy · SHAP · Playwright

**Group 3 — ☁️ Cloud & MLOps**
GCP · AWS · Apache Airflow · Terraform · Docker · Docker Compose · Jenkins · Langfuse · MLflow · CI/CD · Vertex AI · BigQuery · Cloud Composer

**Group 4 — 💻 Languages & Data**
Python · R · SQL · JavaScript · Bash · REST APIs · PostgreSQL · Supabase · Qdrant · Vector Databases · NetCDF · Raster Data

---

### 3.6 — EDUCATION (`#education`)

Render as a clean card with the university logo placeholder on the left.

**B.Sc. (Hons) in Data Science**
Department of Statistics, Faculty of Science — University of Colombo, Sri Lanka
*2021 – Present*

**GPA: 3.82 / 4.00** (styled in emerald green accent — this is First Class level)

**Key Modules:** Machine Learning · Statistical Modelling · Deep Learning · NLP · Data Engineering · Probability & Statistics · Research Methods

**Final-Year Project:**
Multimodal Emotion Recognition System — dual-branch neural network for Sinhala audio-visual dataset using MTCNN, Log-Mel Spectrograms, Grad-CAM, and Edge AI quantization.

---

### 3.7 — CONTACT (`#contact`)

Split layout: left side has contact details + social links, right side has a drop message form.

**Left — Contact Info:**
- 📧 mewanmuna2000@gmail.com
- 💼 linkedin.com/in/hemalmewantha
- 🐙 github.com/hemalmewan
- 📄 [Download Resume PDF] — button

Add a short CTA message above:
> "I'm actively looking for AI/ML engineering roles. If you're building something interesting —
> or just want to talk AI — feel free to drop a message."

**Right — Message Form (Drop a Message):**
Build a styled HTML form with these fields:
- Name (text input)
- Email (email input)
- Subject (text input)
- Message (textarea, min 4 rows)
- [Send Message] button — indigo background, full width

Form validation:
- All fields required
- Email format validation
- On submit: show a success toast notification ("Message sent! I'll get back to you soon 🚀")
- Use Formspree action URL placeholder: `https://formspree.io/f/YOUR_FORM_ID`
  (add a comment in the HTML instructing Hemal to replace this with his Formspree endpoint)
- Form should never actually submit on demo — preventDefault and show the success toast

---

## 4. ANIMATIONS & INTERACTIONS

- **Page load**: Hero content fades in with staggered animation-delay (name first, then tagline, then bio, then badges, then links)
- **Typing effect**: The three taglines cycle with a blinking cursor using JavaScript
- **Scroll reveal**: Each section's cards fade in + translateY(30px) → translateY(0) as they enter viewport (IntersectionObserver with threshold 0.15)
- **Project filter tabs**: Clicking a category tab shows/hides cards with opacity + scale CSS transition (no page reload)
- **Card hover**: `transform: translateY(-4px)` + `box-shadow: 0 8px 32px var(--accent-glow)`
- **Navbar active state**: Highlight the current section's nav link as user scrolls using IntersectionObserver
- **Back to top button**: Smooth scroll, appears after 300px scroll, fades in/out
- **Neural network animation** (hero right panel): Animate 8–12 floating nodes with connecting lines on a canvas element; nodes pulse gently; lines vary in opacity

---

## 5. RESPONSIVENESS

- Breakpoints: 1200px (desktop), 768px (tablet), 480px (mobile)
- Navbar collapses to hamburger at 768px
- Hero: 2-col → single col on mobile (canvas animation hides on small screens)
- Projects grid: 2-col → 1-col on mobile
- Skills grid: 2×2 → 1-col on mobile
- Contact: side-by-side → stacked on mobile
- All font sizes scale down proportionally on mobile using clamp()

---

## 6. TECHNICAL REQUIREMENTS

- Single HTML file — all CSS in `<style>` tags, all JS in `<script>` tags at bottom of body
- No frameworks (no React, no Vue) — vanilla HTML/CSS/JS only
- Google Fonts loaded via `<link>` in `<head>`: Sora, DM Sans, JetBrains Mono
- Use Font Awesome 6 CDN for social icons (GitHub, LinkedIn, Email, Download)
- All sections must have proper semantic HTML tags (`<section>`, `<nav>`, `<article>`, `<header>`, `<footer>`)
- Add `aria-label` attributes to all icon buttons for accessibility
- Meta tags in `<head>`: title, description, og:title, og:description, viewport
- Add a `<footer>` at the very bottom: "© 2026 Hemal Mewantha · Built with ❤️ and lots of Python"
- Code must be clean, well-commented, and production-ready

---

## 7. FILE OUTPUT

Output one complete file: `index.html`
The file should be immediately openable in a browser with no build step required.
After generating, confirm:
- [ ] All 7 nav links scroll to the correct section
- [ ] Project filter tabs work correctly
- [ ] Contact form shows success toast on submit
- [ ] Neural network canvas renders in hero
- [ ] Typing animation cycles through all three taglines
- [ ] Page is fully responsive at 480px width

---

## PROMPT END
