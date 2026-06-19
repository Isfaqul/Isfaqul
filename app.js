// ── Theme toggle ──
const btn = document.getElementById('themeToggle')
const html = document.documentElement

function setTheme(t) {
  html.setAttribute('data-theme', t)
  btn.textContent = t === 'dark' ? '[ light ]' : '[ dark ]'
  try {
    localStorage.setItem('theme', t)
  } catch (e) {}
}

btn.addEventListener('click', () => {
  setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')
})

// Restore saved theme
try {
  const saved = localStorage.getItem('theme')
  if (saved) setTheme(saved)
} catch (e) {}

// ── Skills badge data ──
const skills = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'React Router',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'Prisma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
  },
  {
    name: 'SQLite',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  },
  {
    name: 'Supabase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
  },
  {
    name: 'Rust',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg',
  },
  {
    name: 'Tauri',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tauri/tauri-original.svg',
  },
  {
    name: 'React Native',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'TailwindCSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Vite',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    name: 'Cloudflare',
    icon: 'https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg',
  },
]

const grid = document.getElementById('skillsGrid')

skills.forEach((s) => {
  const badge = document.createElement('div')
  badge.className = 'skill-badge'
  badge.title = s.name

  const img = document.createElement('img')
  img.src = s.icon
  img.alt = s.name
  img.loading = 'lazy'
  img.width = 18
  img.height = 18

  // Invert dark-on-transparent icons in dark mode
  if (s.name === 'GitHub' || s.name === 'Express') {
    img.style.filter = 'var(--dark-icon-fix)'
  }

  const label = document.createElement('span')
  label.textContent = s.name

  badge.appendChild(img)
  badge.appendChild(label)
  grid.appendChild(badge)
})

// Invert dark icons in light theme
function applyIconInvert() {
  const isDark = html.getAttribute('data-theme') === 'dark'
  document.documentElement.style.setProperty(
    '--icon-invert',
    isDark ? 'invert(1)' : 'none',
  )
}

// applyIconInvert()

const observer = new MutationObserver(applyIconInvert)
observer.observe(html, {
  attributes: true,
  attributeFilter: ['data-theme'],
})
