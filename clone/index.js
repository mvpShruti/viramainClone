function gotoLink(link){
    console.log(link.value);
    location.href="./contact.html";
};
function gotoNews(link){
    console.log(link.value);
    location.href="https://www.archdaily.com/architecture-news";
};
function gotoAbout(link){
    console.log(link.value);
    location.href="https://www.thearchitecturestudio.net/pages/studio";
};
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function(e){
//         e.preventDefault();
//         document.querySelector(this.getAttribute("href")).scrollIntoView({
//             behavior: "smooth"
//         });
//     });
// });

function scrollToProject() {
    const projectSection = document.getElementById("project");
    const offsetTop = projectSection.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  }