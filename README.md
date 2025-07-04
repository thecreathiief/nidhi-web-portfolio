# Nidhi's Web Portfolio

A modern, responsive personal portfolio website built with Next.js and TypeScript.

## 🚀 Tech Stack

### Core Technologies

- **Framework**: [Next.js 15.2.4](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - For type-safe code
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Runtime**: [Node.js 20.x](https://nodejs.org/) - JavaScript runtime

### UI Components & Libraries

- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- **Icons**:
  - [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
  - [React Icons](https://react-icons.github.io/react-icons/) - Popular icon libraries
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready animations
- **Charts**: [Recharts](https://recharts.org/) - Composable charting library
- **Forms**:
  - [React Hook Form](https://react-hook-form.com/) - Form validation
  - [Zod](https://zod.dev/) - TypeScript-first schema validation

### Development Tools

- **Package Manager**: npm
- **Linting**: ESLint
- **PostCSS**: For CSS processing
- **TypeScript**: For type checking

## 🛠️ Project Structure

```
├── app/                 # Next.js app directory (App Router)
├── components/         # Reusable UI components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and shared code
├── public/            # Static assets
├── styles/            # Additional styling files
└── ...config files    # Configuration files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or later
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nidhi-web-portfolio.git
cd nidhi-web-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Features

- Modern and responsive design
- Type-safe development with TypeScript
- Accessible UI components
- Smooth animations and transitions
- Dark/Light theme support
- Optimized performance
- SEO friendly

## 🎨 Customization

### Adding Your Resume

1.  Place your resume file (e.g., `resume.pdf`) inside the `public/` directory.
2.  Update the download links in `app/page.tsx` and `components/floating-nav.tsx` to point to your file:

    ```tsx
    <Link href="/your-resume-filename.pdf" ...>
    ```

## 📦 Build Process

The project uses Next.js's built-in build system:

1. **Development**: Uses Next.js development server with hot reloading
2. **Production Build**:
   - TypeScript compilation
   - Tailwind CSS processing
   - Static and server-side rendering
   - Code optimization and minification
   - Asset optimization

## 🚀 Deployment

The project is configured for deployment on Vercel with the following features:

- Automatic deployments
- Edge network distribution
- Serverless functions
- Environment variable management

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Contact

Feel free to reach out for any questions or collaborations!

---

Built with ❤️ using Next.js and TypeScript
