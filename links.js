const initNavLinks = () => {
  const links = document.querySelectorAll(".nav-links a");
  const home = document.querySelector("#nav-logo");

  home.addEventListener("click", () => {
    const targetId = document.getElementById("hero");

    if (targetId) {
      targetId.scrollIntoView({ behavior: "smooth" });
    }
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.dataset.target;
      const section = document.getElementById(targetId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
};

const initSocialLinks = () => {
    const githubLink = document.getElementById('github');
    const linkedInLink = document.getElementById('linked-in');

    githubLink.addEventListener('click', () => {
        window.open("https://github.com/Third-img")
    });
    linkedInLink.addEventListener('click', () => {
        window.open("https://www.linkedin.com/in/querubin-pascual-119a06332/")
    });
}

document.addEventListener("DOMContentLoaded", initNavLinks);
document.addEventListener("DOMContentLoaded", initSocialLinks);
