const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const paths = {
  code: <><path d="M8 7l-5 5 5 5" /><path d="M16 7l5 5-5 5" /><path d="M13.5 4l-3 16" /></>,
  php: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M7 9h2.5a1.5 1.5 0 0 1 0 3H7v3" /><path d="M13 9v6" /><path d="M13 12h3" /><path d="M16 9v6" /><path d="M8 21h8" /></>,
  next: <><circle cx="12" cy="12" r="9" /><path d="M9 16V8l7 9" /><path d="M15 8v5" /></>,
  db: <><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></>,
  server: <><rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="13" width="18" height="7" rx="2" /><path d="M7 7.5h.01M7 16.5h.01" /><path d="M11 7.5h6M11 16.5h6" /></>,
  learn: <><path d="M3 8l9-4 9 4-9 4-9-4z" /><path d="M7 10v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5" /><path d="M21 8v6" /></>,
  github: <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" /></>,
  whatsapp: <><path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.6L3 21z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.2-2-1-1 .8a4 4 0 0 1-2.3-2.3l.8-1-1-2L9 9.5z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  download: <><path d="M12 4v11" /><path d="M7 10l5 5 5-5" /><path d="M5 20h14" /></>,
  pin: <><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  git: <><circle cx="6" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><circle cx="18" cy="8" r="2.5" /><path d="M6 8.5v7" /><path d="M18 10.5c0 4-6 3-11 6" /></>,
  arrow: <><path d="M7 17L17 7" /><path d="M8 7h9v9" /></>,
};

export default function Icon({ name, size = 22 }) {
  return (
    <svg {...base} width={size} height={size}>
      {paths[name] || paths.code}
    </svg>
  );
}
