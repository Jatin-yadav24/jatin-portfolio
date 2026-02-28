import React, { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    // Initialize Vanilla Tilt for 3D effect on cards
    if (window.VanillaTilt) {
      window.VanillaTilt.init(document.querySelectorAll(".project-card"), {
        max: 5,
        speed: 400,
      });
    }
  }, []);

  const projectsData = [
    {
      id: 1,
      title: "Image Gallery Web App",
      image: "./projects/gallery.png",
      icon: "fa-image",
      isRegular: true,
      desc: "A responsive image gallery application featuring dynamic image filtering and a full-screen preview mode.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      link: "https://jatin-yadav24.github.io/codealpha_tasks1/",
      github: "https://github.com/jatin-yadav24/codealpha_tasks1",
      bg: "linear-gradient(135deg, #1e293b, var(--primary))",
    },
    {
      id: 2,
      title: "Calculator Web App",
      image: "./projects/calc.png",
      icon: "fa-calculator",
      isRegular: true,
      desc: "A real-time arithmetic calculator built using JavaScript for fast and accurate browser-based calculations.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      link: "https://jatin-yadav24.github.io/codealpha_tasks2/",
      github: "https://github.com/jatin-yadav24/codealpha_tasks2",
      bg: "linear-gradient(135deg, #ff9a9e, #fecfef)",
    },
    {
      id: 3,
      title: "Amazon UI Clone",
      image: "./projects/amazon.png",
      icon: "fa-cart-shopping",
      isRegular: true,
      desc: "A pixel-perfect UI clone of the Amazon homepage. Built to demonstrate proficiency in complex CSS layouts, Flexbox, and responsive web design.",
      tags: ["HTML5", "CSS3", "Flexbox"],
      link: "https://jatin-yadav24.github.io/Amazon-clone/",
      github: "https://github.com/Jatin-yadav24/Amazon-clone",
      bg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    },
    {
      id: 4,
      title: "BookLift - Premium Bookstore",
      image: "./projects/book.png",
      icon: "fa-book-open",
      isRegular: true,
      desc: "A premium, fully responsive online bookstore UI. Features a pure CSS dark mode toggle, live category filtering, and modern 3D hover effects.",
      tags: ["HTML5", "CSS3", "Advanced CSS"],
      link: "https://jatin-yadav24.github.io/BookStrore/",
      github: "https://github.com/jatin-yadav24/BookStrore",
      bg: "linear-gradient(135deg, #0f172a 0%, #14b8a6 100%)",
    },
    {
      id: 5,
      title: "Live Weather App",
      image: "", // अगर इमेज है तो यहाँ डालें, वरना आइकॉन दिखेगा
      icon: "fa-cloud-sun-rain",
      isRegular: false,
      desc: "A dynamic weather application that fetches real-time climate data from OpenWeather API based on user search.",
      tags: ["React.js", "REST API", "Axios"],
      link: "#", // अपना लाइव लिंक यहाँ डालें
      github: "#", // अपना गिटहब लिंक यहाँ डालें
      bg: "linear-gradient(135deg, #84fab0, #8fd3f4)",
    },
    {
      id: 6,
      title: "Netflix UI Clone",
      image: "", // इसकी इमेज बनाकर डालना बहुत अच्छा लगेगा
      icon: "fa-film",
      isRegular: false,
      desc: "A high-fidelity Netflix homepage clone featuring a responsive movie grid layout and trailer preview functionality.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      link: "#",
      github: "#",
      bg: "linear-gradient(135deg, #e50914 0%, #000000 100%)", // Netflix Red theme
    },
  ];

  return (
    <section id="projects">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card glass-card">
            {/* Project Image/Icon area */}
            <div
              className="project-img"
              style={{ background: project.bg, padding: 0, overflow: "hidden" }}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              ) : (
                <i
                  className={`${project.isRegular ? "fa-regular" : "fa-solid"} ${project.icon}`}
                ></i>
              )}
            </div>

            {/* Project Details */}
            <div
              className="project-info"
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                padding: "2rem",
              }}
            >
              <h3 style={{ marginBottom: "0.8rem", fontSize: "1.4rem" }}>
                {project.title}
              </h3>
              <p
                style={{
                  color: "var(--text-gray)",
                  fontSize: "1rem",
                  marginBottom: "1rem",
                  flexGrow: 1,
                }}
              >
                {project.desc}
              </p>

              {/* Tech Stack Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "1.5rem",
                }}
              >
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "0.8rem",
                      padding: "4px 10px",
                      backgroundColor: "rgba(37, 99, 235, 0.1)",
                      color: "var(--primary)",
                      borderRadius: "20px",
                      fontWeight: "600",
                      border: "1px solid rgba(37, 99, 235, 0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links (Live + GitHub) */}
              <div
                className="project-links"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "var(--primary)",
                    fontWeight: "600",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  Live Demo{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "var(--text-color)",
                    fontSize: "1.2rem",
                    transition: "0.3s",
                  }}
                  title="View Source Code"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
