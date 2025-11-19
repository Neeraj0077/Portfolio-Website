document.getElementById("skillsBtn").addEventListener("click", function () {
    document.getElementById("scrollToSkill").scrollIntoView({
      behavior: "smooth"
    });
  });

document.getElementById("projectsBtn").addEventListener("click", function () {
    document.getElementById("scrollToProject").scrollIntoView({
      behavior: "smooth"
    });
  });

document.getElementById("quotesBtn").addEventListener("click", function () {
    document.getElementById("scrollToProject").scrollIntoView({
      behavior: "smooth"
    });
  });

document.getElementById("aboutBtn").addEventListener("click", function () {
    document.getElementById("scrollToAbout").scrollIntoView({
      behavior: "smooth"
    });
  });

//Animating Navbar with gsap

var tl = gsap.timeline();



  