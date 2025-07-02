
# Personal Portfolio Website

Welcome to my professional **Personal Portfolio Website**, crafted with **React**, **Tailwind CSS**, and **Framer Motion**. This responsive and animated website showcases my technical skills, recent projects, resume, and contact details in a modern, clean UI.

##Live Demo

[View Live Website](https://shiva-matcha.github.io/shiva_portfolio/)

---

## Features

-  Animated Hero Section using Framer Motion
-  About Me section with clean design
-  Skills with animated progress indicators
-  Projects with hover previews and GitHub redirection
-  Resume section with direct PDF download
-  Blog & Tips section to share insights
-  Contact form powered by EmailJS
-  Responsive and mobile-friendly layout
-  Tailwind + Framer Motion for clean styling & animations

---

##  Tech Stack

| Technology     | Usage                                 |
|----------------|---------------------------------------|
| React          | Frontend Framework                    |
| Tailwind CSS   | Utility-First Styling Framework       |
| Framer Motion  | React Animation Library               |
| Vite           | Lightning-fast Build Tool             |
| EmailJS        | Form-to-email integration             |
| GitHub Pages   | Static Hosting Platform               |

---

#  Folder Structure

```
portfolio-website/
├── public/
│   ├── images/                  # Preview and project images
│   └── Siva_Sunil_Kumar_Software_Engineer.pdf
├── src/
│   ├── components/              # Reusable UI components
│   ├── App.jsx                  # Main App structure
│   └── index.css                # Tailwind and global styles
├── vite.config.js               # Vite base path config
├── package.json                 # Scripts & dependencies
└── README.md
```

---

##  Getting Started Locally

Clone the project and run it on your local machine:

```bash
git clone https://shiva-matcha.github.io/shiva_portfolio.git
cd your-repo-name
npm install
npm run dev
```

---

##  Deployment (GitHub Pages)

Build and deploy the app with:

```bash
npm run build
npm run deploy
```

Make sure your `vite.config.js` includes:
```js
export default defineConfig({
  base: '/shiva_portfolio/',
  plugins: [react()],
})
```

And add this to `package.json`:
```json
"homepage": "https://shiva-matcha.github.io/shiva_portfolio/",
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

---

## Contact

Feel free to connect or reach out if you're interested in working together!

-  Email: shivamacha24@gmail.com  
-  LinkedIn: [linkedin.com/in/shiva-matcha](www.linkedin.com/in/siva-sunil-kumar-macha)

---

##  Screenshot

> ![Preview](shiva_portfolio/Portfolio_website.png)

---

##  License

This project is open-source and available under the [MIT License](LICENSE).

---

##  Acknowledgments

Developed with passion, coffee, and a desire to showcase creativity.
