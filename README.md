# Kyran Natalie Runtukahu - Portfolio Website

A modern, elegant portfolio website built with React, TypeScript, Vite, and TailwindCSS featuring a beautiful green theme.

## Features

- 🎨 Elegant green-themed design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Vite
- 🎭 Smooth animations using Framer Motion
- 🗂️ Modular component structure
- 📊 JSON Server for data management
- 🎯 SEO optimized

## Pages

- **Home**: Hero section with animated introduction
- **About**: Personal introduction and professional highlights
- **Education**: Academic background and qualifications
- **Skills**: Technical skills with animated progress bars
- **Experience**: Professional work history with timeline
- **Contact**: Contact form and social media links

## Tech Stack

- React 18
- TypeScript
- Vite
- TailwindCSS
- Framer Motion
- Axios
- React Router DOM
- Shadcn UI Components

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kyran-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. In a separate terminal, start JSON Server:
```bash
npx json-server --watch db.json --port 3001
```

The application will be available at `http://localhost:8080`
JSON Server API will be available at `http://localhost:3001`

## JSON Server Endpoints

- `GET /profile` - Profile information
- `GET /education` - Education data
- `GET /skills` - Skills data
- `GET /experience` - Work experience data
- `GET /contact` - Contact information

## Project Structure

```
src/
├── components/
│   ├── ui/           # Shadcn UI components
│   ├── Navbar.tsx    # Navigation component
│   └── Footer.tsx    # Footer component
├── pages/
│   ├── Home.tsx      # Home page
│   ├── About.tsx     # About page
│   ├── Education.tsx # Education page
│   ├── Skills.tsx    # Skills page
│   ├── Experience.tsx# Experience page
│   └── Contact.tsx   # Contact page
├── lib/
│   └── utils.ts      # Utility functions
└── App.tsx           # Main app component
```

## Customization

### Colors

The green theme colors can be customized in `src/index.css`:
- Primary green: `--primary`
- Light green: `--green-light`
- Dark green: `--green-dark`

### Data

Update the `db.json` file to modify:
- Personal information
- Education history
- Skills and proficiency levels
- Work experience
- Contact details

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## License

MIT License - feel free to use this project for your own portfolio!

---

Made with ❤️ using React & TailwindCSS
