
import './App.css'
import {
  ArrowDown,
  ArrowUpRight,
  Terminal,
  Cpu,
  Rocket,
  BriefcaseBusiness,
  GraduationCap,
  Award,
  Mail,
  Phone,
  Code2,
  BrainCircuit,
  Layers3,
} from 'lucide-react'



const skillGroups = [
  {
    icon: Code2,
    title: 'PROGRAMMING',
    skills: ['Python', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    icon: Terminal,
    title: 'BACKEND ENGINEERING',
    skills: ['FastAPI', 'REST APIs', 'Pydantic', 'JWT', 'RBAC'],
  },
  {
    icon: Layers3,
    title: 'DATA & INFRASTRUCTURE',
    skills: [
      'MySQL',
      'SQLAlchemy ORM',
      'Database Design',
      'Redis',
      'WebSockets',
      'Webhooks'
    ],
  },
  {
    icon: BrainCircuit,
    title: 'AI & INTEGRATIONS',
    skills: [
      'Gemini API',
      'LLM Integration',
      'Razorpay API',
      'LiveKit',
      'WebRTC',
      'Silero VAD', 'STT', 'TTS', 'Audio Streaming'
    ],
  },
  {
    icon: Rocket,
    title: 'PRODUCT DEVELOPMENT',
    skills: [
      'MVP Development',
      'Requirement Analysis',
      'User Workflows',
      'Feature Development',
      'Product Problem Solving',
    ],
  },
  {
    icon: Terminal,
    title: 'DEVELOPER TOOLS',
    skills: ['Git', 'GitHub', 'Swagger / OpenAPI', 'Postman'],
  },
]

const projects = [
  {
    number: '01',
    category: 'REAL-TIME AI · COLLABORATION',
    title: 'Bug Tracking and Management System',
    description:
      'A role-based platform designed to make bug reporting, assignment, testing, and resolution more organized across product teams.',
    highlights: [
      'Built 20+ RESTful APIs for authentication, projects, bug assignment, comments, search, and filtering.',
      'Implemented role-based access for Project Managers, Testers, and Developers with dedicated workflows.',
      'Integrated Redis, WebSockets, and Gemini API for real-time notifications and AI-assisted bug analysis.',
    ],
    workflow:
      'NEW → ASSIGNED → IN PROGRESS → FIXED → RETESTING → CLOSED',
    technologies: [
      'React',
      'JavaScript',
      'Python',
      'FastAPI',
      'MySQL',
      'SQLAlchemy',
      'JWT / RBAC',
      'Redis',
      'WebSockets',
      'Gemini API',
    ],
  },
  {
    number: '02',
    category: 'FULL-STACK · E-COMMERCE',
    title: 'E-Commerce Web Application',
    description:
      'A full-stack shopping application with separate Admin and User experiences, secure access control, and payment workflows.',
    highlights: [
      'Built 15+ FastAPI endpoints for authentication, products, carts, orders, and checkout.',
      'Designed 8+ normalized MySQL tables with foreign-key relationships and data integrity.',
      'Integrated Razorpay test-mode order creation and server-side payment verification.',
      'Added input validation, error handling, and a modular application structure.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'MySQL',
      'SQLAlchemy',
      'JWT / RBAC',
      'Razorpay',
      'HTML',
      'CSS',
      'JavaScript',
      'Git',
    ],
  },
  {
    number: '03',
    category: 'BACKEND ENGINEERING · SAAS',
    title: 'SaaS Subscription Management System',
    description:
      'A subscription backend that manages plan access, upgrades, and payment-based switching for different customer tiers.',
    highlights: [
      'Designed Free, Pro, and Enterprise plans with dynamic feature enforcement.',
      'Implemented JWT authentication and protected REST APIs.',
      'Built workflows for plan assignment, upgrades, and payment-based plan switching.',
      'Integrated Razorpay order creation and server-side payment verification.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'MySQL',
      'SQLAlchemy ORM',
      'JWT',
      'Razorpay',
      'REST APIs',
      'Git',
    ],
  },
]

const education = [
  {
    period: '2022 — 2026',
    qualification: 'Bachelor of Technology',
    subject: 'Artificial Intelligence & Machine Learning',
    institution: 'Malla Reddy University',
    location: 'Hyderabad, Telangana',
    result: 'CGPA 7.84 / 10',
  },
  {
    period: '2020 - 2022',
    qualification: 'Intermediate',
    subject: 'Higher Secondary Education',
    institution: 'Yuvatarang Junior College',
    location: 'Hyderabad, Telangana',
    result: '80.05%',
  },
  {
    period: '2020',
    qualification: 'Secondary School Certificate',
    subject: 'SSC',
    institution: 'Krishnaveni Talent School',
    location: 'Kamareddy, Telangana',
    result: '100%',
  },
]

const certifications = [
  {
    title: 'Introduction to Python Programming',
    provider: 'University of Pennsylvania · Coursera',
    date: 'JUN 2023',
  },
  {
    title: 'AI Workflow: Business Priorities and Data Ingestion',
    provider: 'IBM · Coursera',
    date: 'MAR 2024',
  },
]

function App() {
  return (
    <main className="portfolio">
      {/* NAVIGATION */}
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">
            REVANTH<span className="brand-apostrophe">'S</span>
          </span>
          <span className="brand-subtitle">TECH WORLD</span>
        </a>

        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="availability" href="#contact">
          <span className="status-dot" /> OPEN TO BUILD WITH STARTUPS
        </a>
      </header>

      {/* HERO — PROFESSIONAL INTRODUCTION + PHOTO */}
      <section className="hero hero-personal" id="home">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            PRODUCT ENGINEER
          </div>

          <h1 className="hero-heading">
            I BUILD <span>INTELLIGENCE</span> INTO REALITY
          </h1>

          <p className="hero-description">
            I’m Revanth — a product-focused engineer designing AI-powered
            applications, backend systems, and technology products that
            solve real-world problems.
          </p>

          {/* PROFESSIONAL IDENTITY PANEL */}
          <div className="hero-identity">
            <div className="identity-topline">
              <span className="status-dot" />
              ENGINEERING PROFILE
              <span className="identity-code">RVN / 001</span>
            </div>

            <div className="identity-item">
              <div className="identity-icon">
                <Cpu size={21} />
              </div>
              <div className="identity-copy">
                <span className="identity-label">CORE CAPABILITY</span>
                <strong>System Design & AI Engineering</strong>
                <span className="identity-detail">
                  APIs · Backend Architecture · Real-Time AI
                </span>
              </div>
            </div>

            <div className="identity-separator" />

            <div className="identity-item">
              <div className="identity-icon education-icon">
                <GraduationCap size={22} />
              </div>
              <div className="identity-copy">
                <span className="identity-label">NEXT CHAPTER</span>
                <strong>
                  Master’s in International Business Management
                </strong>
                <span className="identity-detail">
                  Incoming student · Austria
                </span>
              </div>
              <span className="identity-orbit">↗</span>
            </div>

            <div className="identity-footer">
              <span>TECHNOLOGY</span>
              <span className="identity-cross">×</span>
              <span>BUSINESS</span>
              <span className="identity-cross">×</span>
              <span>INNOVATION</span>
            </div>
          </div>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a className="secondary-button" href="#contact">
              Let’s build together
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <span className="status-dot" /> BUILDING AI PRODUCTS
            </span>
            <span className="meta-divider" />
            <span>ENGINEERING × PRODUCT × STARTUPS</span>
          </div>
        </div>

        {/* YOUR PROFESSIONAL PHOTO */}
        <div className="hero-photo-column">
          <div className="hero-photo-frame">
            <div className="photo-corner photo-corner-tl" />
            <div className="photo-corner photo-corner-tr" />
            <div className="photo-corner photo-corner-bl" />
            <div className="photo-corner photo-corner-br" />

           <img
              className="hero-professional-photo"
              src="\images\revanth.jpeg"
              alt="Revanth - Full-stack AI Developer"
            /> 

            <div className="photo-overlay">
              <span className="photo-status">
                <span className="status-dot" />
                PRODUCT BUILDER
              </span>
              <span className="photo-id">IDENTITY / RVN-001</span>
            </div>
          </div>

          <div className="photo-caption">
            <span>TECHNOLOGY</span>
            <span className="identity-cross">×</span>
            <span>INTELLIGENCE</span>
            <span className="identity-cross">×</span>
            <span>IMPACT</span>
          </div>

          <div className="photo-coordinate">
            <span>PROFILE_001</span>
            <span>AI × ENGINEERING</span>
          </div>
        </div>

        <a className="scroll-indicator" href="#skills">
          <ArrowDown size={15} /> SCROLL TO EXPLORE
        </a>

        <div className="hero-index">01 / INTRODUCTION</div>
      </section>

      {/* SKILLS */}
      <section className="projects-section" id="skills">
        <div className="section-heading">
          <span className="section-number">02</span>
          <span className="eyebrow">TECHNICAL TOOLKIT</span>
        </div>

        <h2>
          THE TOOLS TO <span>BUILD WITH.</span>
        </h2>

        <p className="section-description">
          A practical toolkit spanning backend development, AI integrations,
          data systems, and product execution.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-top">
                  <Icon size={21} className="skill-icon" />
                  <span>MODULE / 0{index + 1}</span>
                </div>

                <h3>{group.title}</h3>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="projects-section" id="experience">
        <div className="section-heading">
          <span className="section-number">03</span>
          <span className="eyebrow">PROFESSIONAL EXPERIENCE</span>
        </div>

        <h2>
          BUILDING <span>IN REAL TIME.</span>
        </h2>

        <div className="experience-card">
          <div className="experience-timeline">
            <div className="experience-timeline-dot" />
            <span>SEP 2026 — PRESENT</span>
          </div>

          <div className="experience-main">
            <div className="experience-heading-row">
              <div>
                <span className="experience-label">
                  <BriefcaseBusiness size={14} /> ON-SITE
                </span>
                <h3>Full Stack AI Intern</h3>
                <p className="experience-company">Manuscripts</p>
              </div>
              <span className="experience-index">EXP / 001</span>
            </div>

            <p>
              Working on real-time AI voice experiences, focusing on
              low-latency conversational pipelines and reliable audio
              interactions.
            </p>

            <ul className="detail-list">
              <li>
                Optimized a real-time AI voice assistant using LiveKit,
                WebRTC, Silero VAD, and custom AI services.
              </li>
              <li>
                Engineered voice interaction pipelines for speech detection,
                turn-taking, interruption handling, and real-time audio
                streaming.
              </li>
              <li>
                Monitored and optimized voice pipeline performance using
                VAD, latency, jitter, packet loss, and real-time audio metrics.
              </li>
            </ul>

            <div className="skill-tags">
              {[
                'LiveKit',
                'WebRTC',
                'Silero VAD',
                'Voice AI',
                'Audio Streaming',
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-section" id="projects">
        <div className="section-heading">
          <span className="section-number">04</span>
          <span className="eyebrow">SELECTED ENGINEERING WORK</span>
        </div>

        <h2>
          FROM CONCEPT <span>TO SYSTEM.</span>
        </h2>

        <p className="section-description">
          Backend systems and AI-powered applications built around real
          workflows, secure APIs, and practical product requirements.
        </p>

        <div className="project-list">
          {projects.map((project) => (
            <article
              className="project-row project-detail-row"
              key={project.number}
            >
              <span className="project-number">{project.number}</span>

              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <ul className="detail-list">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                {project.workflow && (
                  <div className="workflow-block">
                    <span>BUG LIFECYCLE</span>
                    <p>{project.workflow}</p>
                  </div>
                )}

                <div className="skill-tags project-tech-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <span className="project-arrow project-arrow-static">
                <ArrowUpRight size={22} />
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="projects-section" id="education">
        <div className="section-heading">
          <span className="section-number">05</span>
          <span className="eyebrow">EDUCATION & LEARNING</span>
        </div>

        <h2>
          ENGINEERING <span>MY FOUNDATION.</span>
        </h2>

        <div className="education-list">
          {education.map((item, index) => (
            <article className="education-card" key={item.qualification}>
              <div className="education-icon-wrap">
                <GraduationCap size={22} />
              </div>

              <div className="education-content">
                <span className="education-period">{item.period}</span>
                <h3>{item.qualification}</h3>
                <p>{item.subject}</p>
                <strong>{item.institution}</strong>
                <span className="education-location">{item.location}</span>
              </div>

              <div className="education-result">
                <span>RESULT</span>
                <strong>{item.result}</strong>
                <small>EDUCATION / 0{index + 1}</small>
              </div>
            </article>
          ))}
        </div>

        <div className="future-education">
          <div className="education-icon-wrap">
            <BrainCircuit size={22} />
          </div>
          <div>
            <span className="experience-label">NEXT ACADEMIC CHAPTER</span>
            <h3>Master’s in International Business Management</h3>
            <p>
              Upcoming master’s student in Austria, combining technology,
              product thinking, and business management.
            </p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & ACHIEVEMENT */}
      <section className="projects-section" id="credentials">
        <div className="section-heading">
          <span className="section-number">06</span>
          <span className="eyebrow">CREDENTIALS & ACHIEVEMENTS</span>
        </div>

        <h2>
          ALWAYS <span>LEVELING UP.</span>
        </h2>

        <div className="credentials-grid">
          <div className="credentials-column">
            <h3 className="subsection-title">
              <Award size={19} /> CERTIFICATIONS
            </h3>

            {certifications.map((certification) => (
              <article className="credential-card" key={certification.title}>
                <span className="credential-date">{certification.date}</span>
                <h4>{certification.title}</h4>
                <p>{certification.provider}</p>
              </article>
            ))}
          </div>

          <div className="credentials-column">
            <h3 className="subsection-title">
              <Award size={19} /> LEADERSHIP
            </h3>

            <article className="credential-card achievement-card">
              <span className="credential-date">2019 · TEAM ACHIEVEMENT</span>
              <h4>Mandal-Level Volleyball Championship</h4>
              <p>
                Led the team to victory, demonstrating leadership,
                teamwork, and communication.
              </p>
              <span className="achievement-mark">TEAMWORK / LEADERSHIP</span>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="section-heading">
          <span className="section-number">07</span>
          <span className="eyebrow">NEXT CONNECTION</span>
        </div>

        <h2>
          HAVE AN IDEA<span>?</span>
        </h2>

        <p>
          Looking for a technical collaborator or building something
          ambitious? Let’s turn a meaningful problem into a product people
          can use.
        </p>

        <a
          className="primary-button"
          href="mailto:revanth8897@gmail.com"
        >
          Start a conversation <ArrowUpRight size={17} />
        </a>


        <div className="social-links">

          <a href="mailto:revanth8897@gmail.com">
            <Mail size={17} />
            revanth8897@gmail.com
          </a>

          <a href="tel:+918897812718">
            <Phone size={17} />
            +91 88978 12718
          </a>

          <a
            href="https://github.com/Revanth8897"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={14} />
          </a>

          <a
            href="https://www.linkedin.com/in/revanth-b4373237b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={14} />
          </a>

          <a
            href="https://www.instagram.com/revanth__777/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            Instagram <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      <footer className="footer">
        <span>REVANTH'S TECH WORLD © 2026</span>
        <span>DESIGNED TO BUILD WHAT'S NEXT.</span>
      </footer>
    </main>
  )
}

export default App
