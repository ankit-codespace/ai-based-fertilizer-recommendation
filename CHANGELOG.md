# 🌾 AgroPulse AI — Product Changelog & Architecture Evolution

All notable changes, architectural pivots, UX refinements, and hardware integrations are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and adheres to clean semantic release milestones.

---

## [Unreleased] - 2026-09-17

### 🎯 Planned: Optical Viewfinder Precision Alignment (In Review)
- **Problem**: In mobile web views, the camera container collapsed to intrinsic 16:9 aspect ratio inside a min-h flexbox parent, causing the 4 focus corner brackets to float detached in empty white space above and below the camera.
- **Top 1% SaaS Solution**: Enforce full-bleed bsolute inset-0 camera framing with guaranteed viewport height (h-[340px]), placing high-precision reticle corners directly inside the live camera feed with an optical vignette drop-shadow.

---

## [1.3.0] - 2026-09-17

### ⚡ Camera Optics & Lighting Enhancement
- **Added**: Low-light 1-tap brightness booster (☀️ Bright ON / +22% Brightness) using hardware-accelerated CSS and Canvas filters (rightness(1.22) contrast(1.08) saturate(1.1)) so leaves photographed in dim indoor classrooms or dorms are crisp and vivid for the AI vision model.
- **Removed**: Redundant mirror flip toggle based on user review, standardizing the camera on natural unmirrored perspective.
- **Refined**: Snapshot pipeline guarantees what is seen on screen is identically baked into the captured canvas JPEG for Gemini 1.5 Flash analysis.

---

## [1.2.0] - 2026-09-17

### 🌿 Equal 50/50 Dual-Engine Architecture & Plain English Overhaul
- **Architecture**: Redesigned the primary diagnostic engine from a leaf-centric flow to an honest, co-equal **50/50 Dual-Engine System** (Visual Leaf Symptoms + Real-time Soil Sensor Telemetry).
  - Screen split: lg:col-span-6 for optical leaf inspection, lg:col-span-6 for soil telemetry.
  - Dual-Engine CTA: Master action buttons explicitly state both inputs (e.g. *"Mix Soil (26.5%) + Leaf to Make Fertilizer Recipe"*).
- **Honest 3-State Soil Hardware Status**:
  - AMBER (Manual Slider): Displayed when ESP32 probe is offline, guiding users to set moisture manually.
  - BLUE (Sample Data): Displayed when demo soil values are loaded from field tests.
  - GREEN (Live Sensor): Displayed when live ESP32-CAM telemetry is actively streaming over WiFi.
- **4th-Grade Plain English Copywriting**:
  - Removed confusing technical terms: purged "foliar spray", "soil drench", "spore germination", and "necrotic blister galls".
  - Replaced with everyday words: *"Spray on leaves"*, *"Pour into soil"*, *"Yellow dry spots"*, *"Blight spots"*.
- **Removed**: Removed the arbitrary *"Read time: ~10 sec"* badge from prescription headers.

---

## [1.1.0] - 2026-09-16

### 🎨 Visual Identity & Industrial UI Polish
- **Blueprint Grid Aesthetic**: Integrated subtle engineering grid patterns and optical laser sweep animations for high-tech presentation impact.
- **Export & Telemetry**: Added instant PDF prescription download and live sensor telemetry HUD.
- **Sample Leaf Library**: Curated pre-validated diseased crop samples (Tomato Early Blight, Corn Common Rust, Apple Scab, Grape Black Rot) for zero-risk live presentations.

---

## [1.0.0] - 2026-09-15

### 🚀 Initial Working Prototype (Proof of Concept)
- **Two-Stage Decoupled AI Pipeline**:
  - Stage 1: Gemini 1.5 Flash parses visual symptoms into a structured symptom matrix.
  - Stage 2: DeepSeek V4 Flash reasons through crop deficiency math, calculating exact N-P-K chemical ratios and organic compost recipes.
- **ESP32-CAM Firmware**: Deployed irmware/ with capacitive soil moisture sensor and DHT11 ambient monitoring.
- **Vercel Deployment**: Configured CI/CD pipeline triggering automated production builds on push to main.
