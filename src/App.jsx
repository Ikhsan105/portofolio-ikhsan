import "./index.css";

function App() {
  const projects = [
  {
    title: "Bendungan Otomatis IoT",
    tech: "ESP32, Ultrasonic, Servo, Blynk",
    image: "/bendungan.jpg",
    desc: "Bendungan otomatis yang dapat terbuka sendiri dan memberi notifikasi ketika air mencapai ketinggian tertentu.",
    github: "https://github.com/Ikhsan105",
  },
  {
    title: "Aplikasi Data Mahasiswa",
    tech: "React, Go, PostgreSQL",
    image: "/mahasiswa.jpg",
    desc: "Aplikasi CRUD untuk mengelola data mahasiswa, jurusan, dan informasi akademik dengan database PostgreSQL.",
    github: "https://github.com/Ikhsan105",
  },
  {
    title: "Sistem Manajemen Toko Kopi",
    tech: "Laravel, MySQL, Bootstrap",
    image: "/tokopi.jpg",
    desc: "Sistem manajemen toko kopi untuk mengelola data produk, transaksi penjualan, stok barang, dan laporan sederhana.",
    github: "https://github.com/Ikhsan105",
  },
  {
    title: "Aplikasi Cloud Penyimpanan Foto",
    tech: "Flutter, Supabase, Cloud Storage",
    image: "/cloud.jpg",
    desc: "Aplikasi cloud untuk menyimpan, melihat, dan mengelola foto secara online dengan konsep penyimpanan digital.",
    github: "https://github.com/Ikhsan105",
  },
  {
    title: "Python Game Ular",
    tech: "Python, Pygame",
    image: "/ular.jpg",
    desc: "Game ular sederhana menggunakan Python dengan fitur kontrol arah, skor, dan logika permainan dasar.",
    github: "https://github.com/Ikhsan105",
  },
];

const experiences = [
    "Membuat aplikasi web CRUD untuk pengelolaan data mahasiswa.",
    "Membuat sistem manajemen toko kopi menggunakan Laravel dan database MySQL.",
    "Mengembangkan project IoT menggunakan ESP32, sensor, servo, dan Blynk.",
    "Membuat aplikasi cloud sederhana untuk penyimpanan dan pengelolaan foto.",
    "Mengerjakan project Python sederhana berbasis game menggunakan Pygame.",
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Pesan Portofolio dari ${name}`);
    const body = encodeURIComponent(
      `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`
    );

    window.location.href = `mailto:ikhsannurpurwanto33@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="page">
      <nav className="navbar">
        <h2 className="logo">Ikhsan.dev</h2>
        <div className="nav-links">
          <a href="#about">Tentang</a>
          <a href="#education">Pendidikan</a>
          <a href="#skills">Skill</a>
          <a href="#experience">Pengalaman</a>
          <a href="#projects">Project</a>
          <a href="#contact">Kontak</a>
        </div>
      </nav>

      <section className="hero fade-in">
        <div className="hero-text">
          <p className="badge">Mahasiswa Teknik Informatika</p>
          <h1>
            Halo, saya <span>Ikhsan Nur Purwanto</span>
          </h1>
          <p className="description">
            Saya tertarik pada pengembangan website, Front End,
            database, dan machine learning. Portofolio ini berisi project dan
            pengalaman saya di bidang teknologi.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              Lihat Project
            </a>
            <a href="/CV-Ikhsan.pdf" download className="btn secondary">
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-card">
          <img
            src="/profile.jpg"
            alt="Foto Profil Ikhsan"
            className="profile-photo"
          />
          <h3>Web Developer</h3>
          <p>Full Stack • React • Database</p>
        </div>
      </section>

      <section id="about" className="section fade-in">
        <h2>Tentang Saya</h2>
        <p>
          Saya adalah mahasiswa S1 Teknik Informatika yang sedang mengembangkan
          kemampuan dalam pembuatan aplikasi web, Front End, pengolahan data,
          dan perancangan sistem berbasis teknologi modern.
        </p>
      </section>

      <section id="education" className="section fade-in">
        <h2>Pendidikan</h2>
        <div className="education-card">
          <h3>Universitas Duta Bangsa Surakarta</h3>
          <p>S1 Teknik Informatika</p>
          <span>2023 - Sekarang</span>
        </div>
      </section>

      <section id="skills" className="section fade-in">
        <h2>Skill</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>Laravel</span>
          <span>PHP</span>
          <span>Python</span>
          <span>GitHub</span>
          <span>MySQL</span>
          <span>PostgreSQL</span>
          <span>ESP32</span>
          <span>Arduino IDE</span>
        </div>
      </section>

      <section id="experience" className="section fade-in">
        <h2>Pengalaman</h2>
        <div className="experience-list">
          {experiences.map((item, index) => (
            <div className="experience-card" key={index}>
              <span>{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section fade-in">
        <h2>Project</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="tech">{project.tech}</p>
                <p>{project.desc}</p>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section fade-in">
        <div className="cv-box">
          <h2>Download CV</h2>
          <p>
            Unduh CV saya untuk melihat informasi lengkap mengenai pendidikan,
            kemampuan, pengalaman, dan project yang pernah saya kerjakan.
          </p>
          <a href="/CV-Ikhsan.pdf" download className="btn primary">
            Download CV
          </a>
        </div>
      </section>

      <section id="contact" className="section contact fade-in">
        <h2>Kontak</h2>
        <p>
          Silakan hubungi saya melalui form berikut untuk kerja sama, diskusi
          project, atau kebutuhan lainnya.
        </p>

        <form className="contact-form" onSubmit={handleContactSubmit}>
          <input type="text" name="name" placeholder="Nama Anda" required />
          <input type="email" name="email" placeholder="Email Anda" required />
          <textarea
            name="message"
            placeholder="Tulis pesan Anda"
            rows="5"
            required
          ></textarea>
          <button type="submit">Kirim Pesan</button>
        </form>

        <div className="contact-info">
          <p>Email: ikhsannurpurwanto33@gmail.com</p>
          <p>GitHub: Ikhsan105</p>
        </div>
      </section>

      <footer>
        <p>© 2026 Ikhsan Nur Purwanto. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;