import { Mail, Phone, MapPin, Github, Gitlab, Linkedin, Instagram } from "lucide-react";

export default function Home() {
  return (
    <div>
      <nav>
        <div className="nav-container">
          <div className="logo"><a href="#home">SCN.</a></div>
          <input type="checkbox" id="nav-check" />
          <label htmlFor="nav-check" className="nav-btn">
            <img src="/asset/apps-svgrepo-com.svg" width={30} />
          </label>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#internships">Internships</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#certifications">Certs</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <section id="home">
        <div className="hero">
          <div className="hero-content">
            <span className="badge">MERN full stack DEVELOPER</span>
            <h1>Swaraj CN</h1>
            <p>21 year old developer passionate about full-stack web, cybersecurity, UI craft, and Linux internals.
              I build fast, human-centric apps with a defensive mindset.</p>
            <div className="hero-btns">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-outline">Contact me</a>
            </div>
            <div className="availability"><i className="fa-solid fa-hammer" /> Available for freelance · open to work
            </div>
            <a href="/asset/res.pdf" className="resume-btn" download><i className="fas fa-file-pdf" /> Download Resume
              (PDF)</a>
          </div>
          <div className="hero-image">
            <img src="/asset/WhatsApp Image 2026-03-06 at 1.05.30 PM (1).webp" className="image" />
          </div>
        </div>
      </section>
      <section>
        <div className="award-card">
          <div className="award-icon"><i className="fa-solid fa-trophy" style={{color: 'rgb(253, 197, 0)'}} /></div>
          <div className="award-text">
            <span className="award-badge">GRAND FINALE WINNER</span>
            <h3>Cyber Trail '24 — 1st Place</h3>
            <p>Capture The Flag at The O By Tamara , Coimbatore. Web exploitation, network security, and ethical
              hacking.</p>
            <a href="/asset/ctf.jpeg" className="cert-link" style={{float: 'right', marginTop: 8}}>View Credential</a>
          </div>
        </div>
      </section>
      <section id="internships">
        <div className="section-title">
          <h2>Professional Internships</h2>
          <p>Practical industry training and skill development.</p>
        </div>
        <div className="internships-grid">
          <div className="intern-card">
            <span className="card-meta">MERN DEVELOPER</span>
            <h3>Luminar Technolab</h3>
            <p>6 months offline internship in Kochi. Mastered full-stack application architecture and real-time data
              handling.</p>
          </div>
          <div className="intern-card">
            <span className="card-meta">SECURITY ANALYST</span>
            <h3>Offenso Hackers Academy</h3>
            <p>Intensive training in Ethical Hacking, Network Exploitation, and Advanced Reconnaissance.</p>
          </div>
          <div className="intern-card">
            <span className="card-meta">AI / ML</span>
            <h3>Livewire Kanhangad</h3>
            <p>3 months training on Python-based Machine Learning models and Sentiment Analysis.</p>
          </div>
        </div>
      </section>
      <section id="education">
        <div className="section-title">
          <h2>Academic Journey</h2>
          <p>BCA · Commerce with Computer Application</p>
        </div>
        <div className="edu-grid">
          <div className="edu-card">
            <div className="edu-header">
              <span className="edu-badge">GRADUATION</span>
              <span className="edu-year">2023 - 2026</span>
            </div>
            <h3>Bachelor of Computer Applications</h3>
            <div className="edu-sub">Kannur University</div>
            <div className="edu-tags">
              <span className="edu-tag">C</span>
              <span className="edu-tag">C ++</span>
              <span className="edu-tag">Java</span>
              <span className="edu-tag">Python</span>
              <span className="edu-tag">HTML/CSS</span>
              <span className="edu-tag">Networking</span>
              <span className="edu-tag">DBMS</span>
              <span className="edu-tag">Algorithms</span>
              <span className="edu-tag">Software Engineering</span>
            </div>
          </div>
          <div className="edu-card">
            <div className="edu-header">
              <span className="edu-badge">HIGHER SECONDARY</span>
              <span className="edu-year">2021 - 2023</span>
            </div>
            <h3>Commerce &amp; Computer Application</h3>
            <div className="edu-sub">GHSS Balanthode</div>
            <div className="edu-tags">
              <span className="edu-tag">C++</span>
              <span className="edu-tag">MySQL</span>
              <span className="edu-tag">HTML/CSS/JS</span>
              <span className="edu-tag">Network basics</span>
              <span className="edu-tag">Hardwares</span>
              <span className="edu-tag">Business</span>
              <span className="edu-tag">Accountancy</span>
              <span className="edu-tag">Economics</span>
            </div>
          </div>
        </div>
      </section>
      <section id="certifications">
        <div className="section-title">
          <h2>Certifications &amp; Achievements</h2>
          <p>Courses and recognitions</p>
        </div>
        <div className="cert-grid">
          <div className="cert-card">
            <div className="cert-icon"><i className="fas fa-hat-cowboy" /></div>
            <h4>Ethical Hacking Essentials</h4>
            <p>Offenco Hackers Academy · 2023</p>
            <a href="/asset/HACK.jpeg" className="cert-link">View Credential</a>
          </div>
          <div className="cert-card">
            <div className="cert-icon"><i className="fas fa-laptop-code" /></div>
            <h4>MERN Full Stack Development</h4>
            <p>Luminar Technolab · 2026</p>
            <a href="/asset/Lum.jpeg" className="cert-link">View Credential</a>
          </div>
          <div className="cert-card">
            <div className="cert-icon"><i className="fas  fa-brain" /></div>
            <h4>MACHINE LEARNING</h4>
            <p>Livewire Kanhangad · 2024</p>
            <a href="/asset/ML.jpeg" className="cert-link">View Credential</a>
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="section-title">
          <h2>technical arsenal</h2>
          <p>main · programming · tools · extra</p>
        </div>
        <div className="skills-grid">
          <div className="skill-card">
            <h3><i className="fas fa-code" /> main skills</h3>
            <div className="skill-tags">
              <span className="skill-tag"><i className="fab fa-html5" /> HTML</span>
              <span className="skill-tag"><i className="fab fa-css3-alt" /> CSS</span>
              <span className="skill-tag"><i className="fab fa-js" /> JavaScript</span>
              <span className="skill-tag"><i className="fab fa-react" /> React JS</span>
              <span className="skill-tag"><i className="fab fa-node" /> Node JS</span>
              <span className="skill-tag"><i className="fab fa-react" /> Next JS</span>
              <span className="skill-tag"><i className="fas fa-wind" /> Tailwind</span>
              <span className="skill-tag"><i className="fas fa-database" /> MongoDB</span>
              <span className="skill-tag"><i className="fas fa-layer-group" /> ODM</span>
            </div>
          </div>
          <div className="skill-card">
            <h3><i className="fas fa-terminal" /> programming &amp; tech</h3>
            <div className="skill-tags">
              <span className="skill-tag"><i className="fas fa-code" /> C++</span>
              <span className="skill-tag"><i className="fas fa-code" /> Perl</span>
              <span className="skill-tag"><i className="fas fa-gem" /> Ruby</span>
              <span className="skill-tag"><i className="fab fa-python" /> Python</span>
              <span className="skill-tag"><i className="fas fa-terminal" /> Bash</span>
              <span className="skill-tag"><i className="fas fa-database" /> MySQL</span>
              <span className="skill-tag"><i className="fas fa-database" /> MariaDB</span>
              <span className="skill-tag"><i className="fas fa-window-maximize" /> CustomTkinter</span>
              <span className="skill-tag"><i className="fas fa-microchip" /> Arduino</span>
            </div>
          </div>
          <div className="skill-card">
            <h3><i className="fas fa-tools" /> tools &amp; platform</h3>
            <div className="skill-tags">
              <span className="skill-tag"><i className="fas fa-envelope" /> Nodemailer</span>
              <span className="skill-tag"><i className="fas fa-credit-card" /> Payment gateway</span>
              <span className="skill-tag"><i className="fas fa-cloud" /> Vercel</span>
              <span className="skill-tag"><i className="fas fa-cloud" /> Render</span>
              <span className="skill-tag"><i className="fas fa-globe" /> Netlify</span>
              <span className="skill-tag"><i className="fas fa-server" /> Hostinger</span>
              <span className="skill-tag"><i className="fab fa-google" /> Google Indexing</span>
              <span className="skill-tag"><i className="fab fa-git-alt" /> Git</span>
              <span className="skill-tag"><i className="fab fa-gitlab" /> GitLab</span>
              <span className="skill-tag"><i className="fas fa-hard-drive" /> Linux hw maint</span>
              <span className="skill-tag"><i className="fas fa-cloud" /> Mongodb atlas</span>
            </div>
          </div>
          <div className="skill-card">
            <h3><i className="fas fa-paint-brush" /> additional</h3>
            <div className="skill-tags">
              <span className="skill-tag"><i className="fa-brands fa-windows" />Win/<i className="fa-brands fa-linux" />
                Linux dev</span>
              <span className="skill-tag"><i className="fas fa-image" /> Photoshop</span>
              <span className="skill-tag"><i className="fas fa-table" /> Excel</span>
              <span className="skill-tag"><i className="fas fa-file-word" /> Word</span>
              <span className="skill-tag"><i className="fas fa-paint-brush" /> Krita</span>
              <span className="skill-tag"><img src="/asset/gimp.svg" width="20px" /> GIMP</span>
              <span className="skill-tag"><i className="fa-brands fa-fly" /> CorelDRAW</span>
              <span className="skill-tag"><i className="fas fa-paint-roller" /> CSS drawing</span>
              <span className="skill-tag"><i className="fa-brands fa-buromobelexperte" /> Libreoffice</span>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="section-title">
          <h2>live projects &amp; security explorations</h2>
          <p>real-world apps &amp; early learning deep dive</p>
        </div>
        <div className="story-card">
          <div className="story-body">
            <h3><i className="fa-brands fa-usb" /> Auto USB — early cybersecurity exploration</h3>
            <p>Throwback to one of my early learning projects (2 years ago). A Python-based experimental tool
              developed in a controlled lab to understand USB data exfiltration &amp; background device detection.</p>
            <div className="feature-tags">
              <span className="feat-tag"><i className="fa-brands fa-python" /> Python</span>
              <span className="feat-tag"><i className="fa-regular fa-window-maximize" /> CustomTkinter UI</span>
              <span className="feat-tag"><i className="fa-solid fa-satellite-dish" /> device detection</span>
              <span className="feat-tag"><i className="fa-solid fa-bug" /> endpoint security</span>
            </div>
            <p style={{marginTop: '0.5rem'}}>🔹 <strong>Goal:</strong> learn attack patterns → build better defenses.
              This project sparked my deep interest in ethical hacking.</p>
            <div style={{marginTop: '1.2rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.8rem'}}>
              <span style={{background: '#e0ecfe', padding: '0.2rem 1.2rem', borderRadius: 40, fontSize: '0.85rem'}}><i className="fa-solid fa-arrow-up-right-from-square" /> &nbsp; mentioned on <a href="https://www.linkedin.com/posts/swaraj-cn-8668112b1_cybersecurity-ethicalhacking-python-activity-7429846832127668224-EeYD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEsMjI4B7M3ZLZBTwBXwgoAn7655pwKZC9E" target="_blank" style={{color: '#2563eb', fontWeight: 600}}>LinkedIn</a></span>
            </div>
          </div>
        </div>
        <div className="project-grid">
          <div className="project-card">
            <div className="project-body">
              <h3>Johns Rider CMS</h3>
              <p>Driving school management with license expiry alerts, Nodemailer, admin dashboard.</p>
              <div className="feature-tags">
                <span className="feat-tag"><i className="fa-brands fa-js" /> Next.js</span>
                <span className="feat-tag"><i className="fa-brands fa-react" /> MERN</span>
                <span className="feat-tag"><i className="fa-regular fa-envelope-open" /> Nodemailer</span>
                <span className="feat-tag"> <i className="fa-solid fa-user-tie" /> admin panel</span>
              </div>
              <a href="https://johnsrider.com/" target="_blank" className="project-link">live <i className="fa-brands fa-google" /></a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-body">
              <h3> Matrimony</h3>
              <p>Community matrimony · secure login , Admin Verification .</p>
              <div className="feature-tags">
                <span className="feat-tag"><i className="fa-brands fa-js" /> Next.js</span>
                <span className="feat-tag"><i className="fa-solid fa-key" /> Clerk API</span>
                <span className="feat-tag"><i className="fa-solid fa-user-tie" /> Admin Panel</span>
                <span className="feat-tag"><i className="fa-solid fa-key" /> Inngest</span>
              </div>
              <a href="https://mavila-matrimony.vercel.app/" target="_blank" className="project-link">live <i className="fa-brands fa-google" /></a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-body">
              <h3>Social + E-commerce</h3>
              <p>Hybrid platform with Ruby-script admin tools, session control, security first.</p>
              <div className="feature-tags">
                <span className="feat-tag"><i className="fa-brands fa-react" /> React</span>
                <span className="feat-tag"><i className="fa-solid fa-gem" /> Ruby</span>
                <span className="feat-tag"><i className="fa-solid fa-ban" /> Auto-ban</span>
                <span className="feat-tag"><i className="fa-solid fa-key" /> Clerk</span>
                <span className="feat-tag"><i className="fa-solid fa-hamsa" /> NSFW </span>
                <span className="feat-tag"><i className="fa-solid fa-fingerprint" /> 2FA Auth</span>
              </div>
              <a href="https://social-media-beta-sage.vercel.app/" target="_blank" className="project-link">live <i className="fa-brands fa-google" /></a>
            </div>
          </div>
        </div>
        <div className="repo-buttons">
          <a href="https://github.com/dirtyhacke" target="_blank" className="repo-btn"><i className="fab fa-github" />
            GitHub</a>
          <a href="https://gitlab.com/swarajcn774" target="_blank" className="repo-btn"><i className="fab fa-gitlab" />
            GitLab</a>
          <a href="https://gitea.com/dirtyhacke" target="_blank" className="repo-btn">
            <i className="fa-solid fa-mug-saucer" />
            Gitea</a>
          <span className="linkedin-note"><i className="fab fa-linkedin" /> more on <a href="https://www.linkedin.com/in/swaraj-cn-8668112b1" target="_blank" style={{color: '#2563eb', fontWeight: 600}}>LinkedIn</a></span>
        </div>
      </section>
      <section id="hobbies">
        <div className="section-title">
          <h2>outside the terminal</h2>
          <p>things i enjoy</p>
        </div>
        <div className="hobby-grid">
          <span className="hobby-item"><i className="fa-brands fa-steam" /> Gaming</span>
          <span className="hobby-item"><i className="fa-solid fa-palette" /> Drawing</span>
          <span className="hobby-item"><i className="fa-brands fa-raspberry-pi" /> Electronics projects</span>
          <span className="hobby-item"><i className="fa-solid fa-lightbulb" /> Sound system building</span>
          <span className="hobby-item"><i className="fa-solid fa-motorcycle" /> Solo Travelling</span>
          <span className="hobby-item"><i className="hgi hgi-stroke hgi-adobe-photoshop" /> Editing Photos</span>
          <span className="hobby-item"><i className="hgi hgi-stroke hgi-capcut" /> Editing Videos</span>
          <span className="hobby-item"><i className="fa-solid fa-camera" /> Shutterbug</span>
          <span className="hobby-item"><i className="fa-solid fa-mug-hot" /> Foodie</span>
          <span className="hobby-item"><i className="fa-brands fa-gofore" /> Digital Explorer</span>
        </div>
      </section>
      <section id="contact">
        <div className="contact-wrap">
          <div className="contact-left">
            <h3>let's connect</h3>
            <p style={{color: '#2e5375'}}>Kallar, Kasaragod · open for freelance / full-time</p>
            <a href="mailto:swarajcn774@gmail.com" className="contact-line"><Mail aria-hidden="true" size={20} strokeWidth={1.8} />
              swarajcn774@gmail.com</a>
            <a href="tel:+918590053568" className="contact-line"><Phone aria-hidden="true" size={20} strokeWidth={1.8} /> +91 8590053568</a>
            <div className="contact-line"><MapPin aria-hidden="true" size={20} strokeWidth={1.8} /> Kallar, Kasaragod, Kerala, India</div>
            <div className="social-row">
              <a href="https://github.com/dirtyhacke" target="_blank" className="social-icon" aria-label="GitHub"><Github aria-hidden="true" size={20} strokeWidth={1.8} /></a>
              <a href="https://gitlab.com/swarajcn774" target="_blank" className="social-icon" aria-label="GitLab"><Gitlab aria-hidden="true" size={20} strokeWidth={1.8} /></a>
              <a href="https://www.linkedin.com/in/swaraj-cn-8668112b1" target="_blank" className="social-icon" aria-label="LinkedIn"><Linkedin aria-hidden="true" size={20} strokeWidth={1.8} /></a>
              <a href="https://www.instagram.com/s.waraj_/" target="_blank" className="social-icon" aria-label="Instagram"><Instagram aria-hidden="true" size={20} strokeWidth={1.8} /></a>
            </div>
          </div>
          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20150.9759253811!2d75.25870796422156!3d12.432301409990734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba48a3773ad04b3%3A0xcb1e6e30b9eb325a!2sKallar%2C%20Kerala%20671532!5e1!3m2!1sen!2sin!4v1773571445599!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <form className="mail-send" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" defaultValue="24c4d710-cbc5-47db-a21b-2fb8d6238631" />
            <div className="two-input">
              <input type="text" name="name" required className="user-name" placeholder="Enter Your Name" />
              <input type="email" name="email" required className="user-email" placeholder="Enter Your Email Address" />
            </div>
            <textarea name="message" required className="user-message" placeholder="Type Your Message....." defaultValue={""} />
            <div className="btns">
              <button type="submit" className="user-subimt">Send Mail</button>
              <button type="reset" className="user-cancel">Cancel Mail</button>
            </div>
          </form></div>
      </section>
      <footer>
        <div className="footer-container">
          <div className="footer-col">
            <div className="footer-logo">SCN.</div>
            <p className="footer-desc">Building secure, human-centric web apps with a defensive mindset. MERN full-stack
              &amp; automation enthusiast.</p>
            <div className="footer-social">
              <a href="https://github.com/SWARAJ-CN" target="_blank" aria-label="GitHub"><Github aria-hidden="true" size={20} strokeWidth={1.8} /></a>
              <a href="https://gitlab.com/swarajcn774" target="_blank" aria-label="GitLab"><Gitlab aria-hidden="true" size={20} strokeWidth={1.8} /></a>
              <a href="https://www.linkedin.com/in/swaraj-cn-8668112b1" target="_blank" aria-label="LinkedIn"><Linkedin aria-hidden="true" size={20} strokeWidth={1.8} /></a>
              <a href="https://www.instagram.com/s.waraj_/" target="_blank" aria-label="Instagram"><Instagram aria-hidden="true" size={20} strokeWidth={1.8} /></a>
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-small-heading">Explore</div>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#internships">Internships</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-small-heading">Connect</div>
            <ul className="footer-links">
              <li><a href="https://github.com/SWARAJ-CN" target="_blank">GitHub</a></li>
              <li><a href="https://gitlab.com/swarajcn774" target="_blank">GitLab</a></li>
              <li><a href="https://www.linkedin.com/in/swaraj-cn-8668112b1" target="_blank">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/s.waraj_/" target="_blank">Instagram</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-small-heading">Reach out</div>
            <div className="footer-contact-item">
              <Mail aria-hidden="true" size={20} strokeWidth={1.8} /> swarajcn774@gmail.com
            </div>
            <div className="footer-contact-item">
              <Phone aria-hidden="true" size={20} strokeWidth={1.8} /> +91 8590053568
            </div>
            <div className="footer-contact-item">
              <MapPin aria-hidden="true" size={20} strokeWidth={1.8} /> Kallar, Kasaragod
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Swaraj CN — swarajcn774@gmail.com</span>
          <span><i className="fas fa-bolt" /> available for freelance · security · full-stack</span>
        </div>
      </footer>
    </div>
    
  );
}
