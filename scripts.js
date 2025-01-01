const projects = [
    { name: "Managing-Corona-patients", link: "https://github.com/EtiGotliv/Managing-Corona-patients" }
];

const projectsList = document.getElementById("projects-list");

projects.forEach(project => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = project.link;
    link.textContent = project.name;
    listItem.appendChild(link);
    projectsList.appendChild(listItem);
});
