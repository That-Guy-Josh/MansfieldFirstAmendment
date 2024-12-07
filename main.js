document.addEventListener("DOMContentLoaded", () => {
  // Reveal sections on click
  const navLinks = document.querySelectorAll("header nav a");
  const sections = document.querySelectorAll("section");

  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      sections.forEach(section => {
        if (section.id === targetId) {
          section.style.display = "block";
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          section.style.display = "none";
        }
      });
    });
  });

  // Initial display setup (only show Home)
  document.querySelector("#home").style.display = "block";

  console.log("Welcome to Mansfield First Amendment!");
});
