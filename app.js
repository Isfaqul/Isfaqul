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

try {
  const saved = localStorage.getItem('theme')
  if (saved) setTheme(saved)
} catch (e) {}

// ── Arrow SVG ──
const ARROW = `<svg class="link-arrow" width="11" height="11" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><polygon points="10 6 10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6"/></svg>`

// ── Renderers ──
function renderProjects(projects) {
  document.getElementById('projects-list').innerHTML = projects
    .map(
      (project) => `
    <div class="entry">
      <div class="entry-meta">
        <span class="entry-title">${project.title}</span>
      </div>
      <div class="entry-sub">${project.stack}</div>
      <p class="entry-desc">${project.description}</p>
      <div class="entry-links">
        ${project.links
          .map(
            (link) => `
          <a class="entry-link${link.primary ? ' entry-link--primary' : ''}" href="${link.url}" target="_blank" rel="noopener">
            ${link.label} ${ARROW}
          </a>
        `,
          )
          .join('')}
      </div>
    </div>
  `,
    )
    .join('<hr class="entry-divider">')
}

function renderCertifications(certifications) {
  document.getElementById('certifications-list').innerHTML = certifications
    .map(
      (c, i) => `
    <div ${i > 0 ? 'style="margin-top:20px;padding-top:20px;border-top:1px solid var(--border)"' : ''}>
      <div class="edu-row">
        <span class="edu-degree">${c.title}</span>
        <span class="edu-year">${c.year}</span>
      </div>
      <div class="flex">
        <p class="edu-inst">${c.issuer}</p>
        <a class="entry-link entry-link-certificate" href="${c.url}" target="_blank" rel="noopener">
          view credentials ${ARROW}
        </a>
      </div>
    </div>
  `,
    )
    .join('')
}

// ── Fetch data ──
fetch('data.json')
  .then((r) => r.json())
  .then((data) => {
    renderProjects(data.projects)
    renderCertifications(data.certifications)
  })

// ── Skills ──
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
    name: 'Hono',
    icon: 'https://devicons.io/devicons/icons/hono.svg',
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
  const badgeWrapper = document.createElement('div')
  badgeWrapper.className = 'skill-badge-wrapper'

  const badge = document.createElement('div')
  badge.className = 'skill-badge'
  badge.title = s.name

  const img = document.createElement('img')
  img.src = s.icon
  img.alt = s.name
  img.loading = 'lazy'
  img.width = 18
  img.height = 18

  if (s.name === 'GitHub' || s.name === 'Express') {
    img.style.filter = 'var(--dark-icon-fix)'
  }

  const label = document.createElement('span')
  label.textContent = s.name

  badge.appendChild(img)
  badge.appendChild(label)
  badgeWrapper.appendChild(badge)
  grid.appendChild(badgeWrapper)
})
