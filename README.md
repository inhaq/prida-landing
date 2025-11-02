# PrIDA - Landing Page

![PrIDA Logo](https://via.placeholder.com/150x50?text=PrIDA)

**Landing page for PrIDA - Privacy-First AI Browser Extension**

**Stop Retyping, Start Living** - PrIDA uses on-device AI to fill forms, rewrite text, and proofread instantly—all without ever sending your data online.

[![Download Extension](https://img.shields.io/badge/Download-Extension-blue?style=for-the-badge&logo=google-chrome)](https://github.com/prida/prida-extension/releases)

## 🌟 Overview

This is the landing page for **PrIDA**, a browser extension that leverages Chrome's on-device AI capabilities to provide intelligent assistance while maintaining complete privacy. Unlike traditional AI tools that send your data to the cloud, PrIDA processes everything locally on your device, ensuring your personal information never leaves your computer.

This repository contains the React-based landing page that showcases PrIDA's features and provides download links for the browser extension.

## ✨ Key Features

### 🔒 **100% Privacy-First**

- All processing happens locally via Chrome's on-device AI
- No cloud storage, no data leaks, ever
- Your data stays on your device

### ⚡ **AI-Powered Auto-Fill**

- Recognizes input labels and page context
- Suggests accurate answers based on your selected profile
- Works with every input field including modern rich text editors

### ✍️ **Smart Text Rewriting**

- Improves writing clarity and tone
- Uses Gemini Nano Rewriter API locally
- Context-aware suggestions

### ✅ **Instant Proofreading**

- Fixes grammar, punctuation, and spelling mistakes
- Completely offline and private
- Real-time corrections

### 👤 **Profile Management**

- Create separate profiles (Job, Health, Social)
- Stay organized with context-specific information
- Easy switching between different personas

### 🌐 **Universal Compatibility**

- Works on LinkedIn, Gmail, and all major platforms
- Compatible with rich text editors
- Seamless integration with existing workflows

## 🚀 Getting Started

### Prerequisites

- Google Chrome browser (latest version)
- Chrome's on-device AI features enabled

### Installation

Since PrIDA is not yet available on the Chrome Web Store, you'll need to install it manually:

1. Download the PrIDA extension package (`.zip` or `.crx` file) from our [releases page](https://github.com/prida/prida-extension/releases)
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Drag and drop the downloaded extension file onto the extensions page, or click "Load unpacked" and select the extracted folder
5. The extension will be installed and appear in your extensions list

### First Use

1. Click the PrIDA icon in your browser toolbar
2. Create your first profile
3. Start using AI assistance on any website

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **AI Engine**: Chrome's on-device AI (Gemini Nano)

## 📁 Landing page code structure

```
src/
├── components/
│   ├── Hero.tsx          # Landing page hero section
│   ├── Features.tsx      # Feature showcase
│   ├── HowItWorks.tsx    # Usage instructions
│   ├── Comparison.tsx    # Comparison with competitors
│   ├── UseCases.tsx      # Real-world use cases
│   ├── CTA.tsx          # Call-to-action section
│   └── Footer.tsx       # Site footer
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
├── index.css           # Global styles
└── vite-env.d.ts       # Vite type definitions

public/
└── Gemini_Generated_Image_cduqdkcduqdkcduq_(1).png  # Hero background

Configuration files:
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── eslint.config.js
└── package.json
```

## 🏃‍♂️ Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd project

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Type checking
npm run typecheck
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

### Development Setup

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 🔒 Privacy & Security

PrIDA is committed to user privacy:

- **Zero Data Collection**: No personal data is collected or stored
- **Local Processing**: All AI processing happens on-device
- **Open Source**: Core functionality is open source and auditable
- **No Tracking**: No analytics or tracking of user behavior

---

**Made with ❤️ for privacy-conscious users everywhere**
