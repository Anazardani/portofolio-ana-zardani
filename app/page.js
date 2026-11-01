import {
  profile, projects, about, facts, languages, frameworks, skills, experience, education,
} from "@/data/profile";
import Icon from "./icons";
import Portrait from "./portrait";
import Reveal from "./reveal";

function waLink(num) {
  const text = encodeURIComponent(`Halo ${profile.name.split(" ")[0]}, saya melihat portofolio Anda.`);
  return `https://wa.me/${num}?text=${text}`;
}

function ProjectLink({ project, variant = "btn" }) {
  const url = project.demo || project.repo;
  if (!url) return null;
  return (
    <a className={variant === "btn" ? "btn btn-ghost btn-sm" : "text-link"} href={url} target="_blank" rel="noopener noreferrer">
      {project.demo ? "Buka proyek" : "Lihat kode"}
    </a>
  );
}

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <Reveal />
      <div className="backdrop" aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="orb orb-c" />
      </div>
      <div className="progress" aria-hidden="true" />

      <a className="skip" href="#konten">Lewati ke konten</a>

      {/* NAV */}
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#beranda" className="logo" aria-label="Beranda">{profile.initials}</a>
          <nav aria-label="Navigasi utama">
            <ul className="nav-links">
              <li><a href="#tentang">Tentang</a></li>
              <li><a href="#bahasa">Keahlian</a></li>
              <li><a href="#proyek">Proyek</a></li>
              <li><a href="#pengalaman">Pengalaman</a></li>
              <li><a href="#kontak">Kontak</a></li>
            </ul>
          </nav>
          <a className="btn btn-outline btn-sm" href="#kontak">Hubungi saya</a>
        </div>
      </header>

      <main id="konten">
        {/* HERO */}
        <section className="hero" id="beranda">
          <div className="wrap hero-grid">
            <div className="hero-text">
              <h1 className="hero-title load" style={{ "--i": 0 }}>{profile.headline}</h1>
              <p className="hero-intro load" style={{ "--i": 1 }}>{profile.intro}</p>
              <div className="hero-actions load" style={{ "--i": 2 }}>
                <a className="btn btn-accent" href="#proyek">Lihat proyek</a>
                <a className="btn btn-outline" href={profile.cvFile} download>
                  <Icon name="download" size={18} /> Unduh CV
                </a>
              </div>
              <p className="hero-loc load" style={{ "--i": 3 }}><Icon name="pin" size={16} /> {profile.location}</p>
            </div>

            <div className="hero-visual load" style={{ "--i": 2 }}>
              <span className="hero-ring" aria-hidden="true" />
              <span className="hero-ring hero-ring-2" aria-hidden="true" />
              <Portrait photo={profile.photo} name={profile.name} initials={profile.initials} />
            </div>
          </div>
        </section>

        {/* TENTANG SAYA */}
        <section className="section" id="tentang" aria-labelledby="judul-tentang">
          <div className="wrap">
            <header className="section-head center" data-reveal>
              <h2 id="judul-tentang">Tentang saya</h2>
              <p>Siapa saya dan apa yang saya kerjakan</p>
            </header>
            <div className="about">
              <div className="panel about-body" data-reveal>
                {about.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <dl className="facts">
                {facts.map((f, i) => (
                  <div key={f.label} data-reveal style={{ "--i": i + 1 }}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* BAHASA PEMROGRAMAN */}
        <section className="section section-tight" id="bahasa" aria-labelledby="judul-bahasa">
          <div className="wrap">
            <header className="section-head center" data-reveal>
              <h2 id="judul-bahasa">Bahasa dan framework</h2>
              <p>Yang saya pakai dalam proyek kuliah dan magang</p>
            </header>
            <h3 className="group-title" data-reveal>Bahasa pemrograman</h3>
            <ul className="langs">
              {languages.map((l, i) => (
                <li className="lang" key={l.name} data-reveal style={{ "--i": i }}>
                  <span className={`lang-badge ${l.icon ? "has-icon" : ""}`} style={{ "--lang": l.color }}>
                    {l.icon ? <img src={l.icon} alt="" width="30" height="30" /> : l.abbr}
                  </span>
                  <h3>{l.name}</h3>
                  <p>{l.use}</p>
                  {l.tools.length > 0 ? (
                    <ul className="stack">
                      {l.tools.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                  ) : (
                    <p className="lang-empty">Dipakai di semua proyek web</p>
                  )}
                </li>
              ))}
            </ul>

            <h3 className="group-title" data-reveal>Framework</h3>
            <ul className="langs">
              {frameworks.map((f, i) => (
                <li className="lang" key={f.name} data-reveal style={{ "--i": i }}>
                  <span className={`lang-badge ${f.icon ? "has-icon" : ""}`} style={{ "--lang": f.color }}>
                    {f.icon ? <img src={f.icon} alt="" width="30" height="30" /> : f.abbr}
                  </span>
                  <h3>{f.name}</h3>
                  <p>{f.use}</p>
                  <ul className="stack">
                    {f.tools.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROYEK UNGGULAN */}
        <section className="section" id="proyek" aria-labelledby="judul-unggulan">
          <div className="wrap">
            <header className="section-head center" data-reveal>
              <h2 id="judul-unggulan">Proyek unggulan</h2>
              <p>Dua proyek yang paling mewakili kemampuan saya</p>
            </header>

            <div className="featured">
              {featured.map((p, i) => (
                <article className="card card-featured" key={p.title} data-reveal style={{ "--i": i }}>
                  <div className="card-body">
                    <p className="card-cat">{p.category}</p>
                    <h3>{i + 1}. {p.title}</h3>
                    <p className="card-text">{p.summary}</p>
                    {p.points && (
                      <ul className="points">
                        {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                      </ul>
                    )}
                    <div className="card-foot">
                      {p.role && <p className="card-role"><span>Peran</span>{p.role}</p>}
                      <ul className="stack">
                        {p.stack.map((s) => <li key={s}>{s}</li>)}
                      </ul>
                      <ProjectLink project={p} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROYEK LAINNYA */}
        <section className="section section-tight" aria-labelledby="judul-lainnya">
          <div className="wrap">
            <header className="section-head center" data-reveal>
              <h2 id="judul-lainnya">Proyek lainnya</h2>
              <p>Dari kuliah dan magang</p>
            </header>
            <div className="grid-projects">
              {others.map((p, i) => (
                <article className="card card-small" key={p.title} data-reveal style={{ "--i": i }}>
                  <div className="card-body">
                    <p className="card-cat">{p.category}</p>
                    <h3>{p.title}</h3>
                    <p className="card-text">{p.summary}</p>
                    <p className="card-stack">{p.stack.join(", ")}</p>
                    <ProjectLink project={p} variant="link" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PENGALAMAN, PENDIDIKAN, KEAHLIAN */}
        <section className="section section-tight" id="pengalaman" aria-labelledby="judul-pengalaman">
          <div className="wrap">
            <header className="section-head center" data-reveal>
              <h2 id="judul-pengalaman">Pengalaman dan pendidikan</h2>
              <p>Perjalanan belajar dan bekerja saya</p>
            </header>

            <h3 className="group-title" data-reveal>Pengalaman kerja</h3>
            <ol className="grid-2">
              {experience.map((e, i) => (
                <li className="panel info-card" key={e.company} data-reveal style={{ "--i": i }}>
                  <div className="tl-head">
                    <strong>{e.company}</strong>
                    {e.period && <small>{e.period}</small>}
                  </div>
                  <span className="log-role">{e.role}{e.place ? `, ${e.place}` : ""}</span>
                  <ul className="points">
                    {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                </li>
              ))}
            </ol>

            <h3 className="group-title" data-reveal>Pendidikan</h3>
            <ul className="grid-2">
              {education.map((e, i) => (
                <li className="panel info-card" key={e.school} data-reveal style={{ "--i": i }}>
                  <div className="tl-head">
                    <strong>{e.school}</strong>
                    <small>{e.period}</small>
                  </div>
                  <span className="log-role">{e.program}</span>
                </li>
              ))}
            </ul>

            <h3 className="group-title" data-reveal>Keahlian lain</h3>
            <ul className="grid-3">
              {skills.map((sk, i) => (
                <li key={sk.title} className={`panel skill-card ${sk.icon === "learn" ? "is-learning" : ""}`} data-reveal style={{ "--i": i }}>
                  <span className="skill-icon"><Icon name={sk.icon} /></span>
                  <span>
                    <strong>{sk.title}</strong>
                    <small>{sk.detail}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* KONTAK / FOOTER */}
      <footer className="footer" id="kontak">
        <div className="wrap">
          <div className="cta" data-reveal>
            <h2>Sedang mencari tenaga IT atau web developer?</h2>
            <p>Kirim email atau chat WhatsApp. Saya siap berdiskusi soal posisi yang Anda buka.</p>
            <div className="cta-actions">
              <a className="btn btn-accent" href={`mailto:${profile.email}`}>
                <Icon name="mail" size={18} /> Kirim email
              </a>
              {profile.whatsapp && (
                <a className="btn btn-outline" href={waLink(profile.whatsapp)} target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" size={18} /> Chat WhatsApp
                </a>
              )}
            </div>
          </div>

          <div className="footer-row" data-reveal>
            <ul className="footer-links">
              <li><a href="#tentang">Tentang</a></li>
              <li><a href="#bahasa">Keahlian</a></li>
              <li><a href="#proyek">Proyek</a></li>
              <li><a href="#pengalaman">Pengalaman</a></li>
            </ul>
            <div className="socials">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" size={18} /></a>
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
              )}
              {profile.whatsapp && (
                <a href={waLink(profile.whatsapp)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Icon name="whatsapp" size={18} /></a>
              )}
              <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" size={18} /></a>
            </div>
            <a className="footer-mail" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>

          <div className="footer-bottom">
            <span className="motto">{profile.motto}</span>
            <small>© {new Date().getFullYear()} {profile.name}</small>
          </div>
        </div>
      </footer>
    </>
  );
}
