const userData = {
    name: "Syahrial Ramadhan",
    headline: "Mahasiswa Teknik Informatika | UI/UX Designer & Web Developer",
    about: "Halo! Saya Syahrial Ramadhan, mahasiswa semester 4 yang sangat antusias dalam dunia web development. Saya senang membangun solusi digital yang tidak hanya fungsional tapi juga menarik secara visual.",

    skills: ["JavaScript", "React.js", "UI/UX Design", "PHP", "MySQL", "Git & GitHub"],

    skillBars: [
        { name: "UI/UX Design (Figma)", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 75 },
        { name: "Git & GitHub", level: 78 },
        { name: "PHP & MySQL", level: 70 },
    ],

    experience: [
        {
            title: "Intern Web Developer",
            company: "PT. Maju Mundur",
            year: "2024 — 2025 · 1 thn",
            desc: "Membantu pengembangan modul front-end aplikasi inventaris.",
            icon: "fas fa-building"
        },
        {
            title: "Staff Publikasi",
            company: "Himpunan Mahasiswa",
            year: "2024 — 2025 · 1 thn",
            desc: "Mengelola konten media sosial dan desain poster kegiatan.",
            icon: "fas fa-users"
        }
    ],

    education: [
        {
            school: "Universitas Jabal Ghafur",
            degree: "S1 Teknik Informatika",
            year: "2024 — Sekarang",
            desc: "Konsentrasi pada Rekayasa Perangkat Lunak dan Database.",
            icon: "fas fa-university"
        }
    ],

    projects: [
        {
            name: "Profil Desa Sangget",
            tech: "HTML · CSS · JavaScript",
            desc: "Website resmi Desa Sangget, Kec. Glumpang Baro, Pidie — menampilkan profil desa, potensi, statistik penduduk, galeri, berita, dan informasi pemerintahan desa.",
            icon: "fas fa-map-marked-alt",
            link: "https://syahrial755.github.io/profiledesa/",
            preview: "profiledesa"
        },
        {
            name: "Kopi Kita ☕",
            tech: "HTML · CSS · JavaScript",
            desc: "Website toko kopi online berbasis di Sigli — dilengkapi fitur keranjang belanja, checkout via WhatsApp, dan integrasi Google Maps untuk lokasi toko.",
            icon: "fas fa-coffee",
            link: "https://syahrial755.github.io/kopi-kita/",
            preview: "kopikita"
        }, // <-- Tanda koma ini yang sebelumnya hilang
        {
            name: "UMKM",
            tech: "HTML · CSS · JavaScript",
            desc: "Dukung Produk Lokal, Kualitas Maksimal!",
            icon: "fas fa-store",
            link: "https://syahrial755.github.io/umkm/",
            preview: "umkm"
        }
    ],

    certificates: [
        { name: "The Complete 2024 Web Development Bootcamp", issuer: "Udemy", date: "Feb 2025" },
        { name: "Responsive Web Design Certification", issuer: "freeCodeCamp", date: "Des 2025" }
    ],

    wa: "https://wa.me/6282337355051"
};

function renderAll() {
    document.getElementById('user-name').textContent = userData.name;
    document.getElementById('user-headline').textContent = userData.headline;
    document.getElementById('about-text').textContent = userData.about;

    // Skill tags
    const skillBox = document.getElementById('skills-list');
    skillBox.innerHTML = ''; // Clear loading
    userData.skills.forEach(s => {
        skillBox.innerHTML += `<span class="tag">${s}</span>`;
    });

    // Skill bars
    const barBox = document.getElementById('skill-bars');
    barBox.innerHTML = '';
    userData.skillBars.forEach(s => {
        barBox.innerHTML += `
            <div class="skill-item">
                <div class="skill-meta">
                    <span class="skill-name">${s.name}</span>
                    <span class="skill-pct">${s.level}%</span>
                </div>
                <div class="skill-track">
                    <div class="skill-fill" data-level="${s.level}"></div>
                </div>
            </div>`;
    });

    // Experience
    const expBox = document.getElementById('experience-list');
    expBox.innerHTML = '';
    userData.experience.forEach(e => {
        expBox.innerHTML += `
            <div class="timeline-item">
                <div class="tl-logo"><i class="${e.icon}"></i></div>
                <div class="tl-body">
                    <div class="tl-title">${e.title}</div>
                    <div class="tl-company">${e.company}</div>
                    <div class="tl-year">${e.year}</div>
                    <div class="tl-desc">${e.desc}</div>
                </div>
            </div>`;
    });

    // Education
    const eduBox = document.getElementById('education-list');
    eduBox.innerHTML = '';
    userData.education.forEach(ed => {
        eduBox.innerHTML += `
            <div class="timeline-item">
                <div class="tl-logo"><i class="${ed.icon}"></i></div>
                <div class="tl-body">
                    <div class="tl-title">${ed.school}</div>
                    <div class="tl-company">${ed.degree}</div>
                    <div class="tl-year">${ed.year}</div>
                    <div class="tl-desc">${ed.desc}</div>
                </div>
            </div>`;
    });

    // Projects
    const projBox = document.getElementById('projects-grid');
    projBox.innerHTML = '';
    userData.projects.forEach(p => {
        projBox.innerHTML += `
            <div class="project-box" onclick="window.open('${p.link}','_blank')">
                <div class="project-preview project-preview--${p.preview}">
                    <div class="preview-overlay">
                        <span class="preview-label"><i class="fas fa-external-link-alt"></i> Buka Website</span>
                    </div>
                </div>
                <div class="proj-content">
                    <div class="proj-header">
                        <div class="proj-icon"><i class="${p.icon}"></i></div>
                        <span class="proj-tech">${p.tech}</span>
                    </div>
                    <div class="proj-name">${p.name}</div>
                    <div class="proj-desc">${p.desc}</div>
                    <a href="${p.link}" target="_blank" class="proj-link" onclick="event.stopPropagation()">
                        <i class="fas fa-globe"></i> Lihat Live Demo
                    </a>
                </div>
            </div>`;
    });

    // Certificates
    const certBox = document.getElementById('certificates-list');
    certBox.innerHTML = '';
    userData.certificates.forEach(c => {
        certBox.innerHTML += `
            <div class="cert-item">
                <div class="cert-medal"><i class="fas fa-medal"></i></div>
                <div class="cert-info">
                    <div class="cert-name">${c.name}</div>
                    <div class="cert-meta">${c.issuer}</div>
                </div>
                <span class="cert-date">${c.date}</span>
            </div>`;
    });
}

// Scroll reveal
function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 60);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Skill bar animation
function initSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.skill-fill').forEach(bar => {
                    bar.style.width = bar.dataset.level + '%';
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    const barSection = document.getElementById('skill-bars');
    if (barSection) observer.observe(barSection.parentElement);
}

document.addEventListener('DOMContentLoaded', () => {
    renderAll();
    setTimeout(() => {
        initReveal();
        initSkillBars();
    }, 100);
});