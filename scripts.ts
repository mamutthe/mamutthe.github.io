const projectsList = [
  {
    name: "Youtube Stats",
    img: "youtube-stats",
    description:
      "• Restrospectiva do histórico pessoal do YouTube em formato de storys.",
    link: "https://youtube-retrospective.vercel.app/",
  },
  {
    name: "React Whatever",
    img: "react-whatever",
    description: "• Coletânea de estudos em React.",
    link: "https://react-whatever.vercel.app/",
  },
  {
    name: "Just Another Party Game",
    img: "party-game",
    description:
      "• Um party game simples para mobile que usa o sensor de movimento do dispositivo.",
    link: "https://justanotherpartygame.vercel.app/",
  },
];

let currentProject: number = 0;

const prevButton = document.querySelector(
  ".prev-slide-button"
) as HTMLButtonElement;
const nextButton = document.querySelector(
  ".next-slide-button"
) as HTMLButtonElement;

const projectName = document.querySelector(
  ".project-name"
) as HTMLHeadingElement;
const projectImg = document.querySelector(".project-img") as HTMLImageElement;
const projectDescription = document.querySelector(
  ".project-description"
) as HTMLParagraphElement;
const projectLink = document.getElementById(
  "project-link"
) as HTMLAnchorElement;

const nextProject = () => {
  currentProject =
    currentProject === projectsList.length - 1 ? 0 : currentProject + 1;
  setProject();
};

const prevProject = () => {
  currentProject =
    currentProject === 0 ? projectsList.length - 1 : currentProject - 1;
  setProject();
};

const deviceWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const setProject = () => {
  projectName.innerText = projectsList[currentProject].name;
  //check if it's a mobile device
  if (deviceWidth <= 450) {
    projectImg.src = `media/projects/${projectsList[currentProject].img}-mobile.png`;
  } else {
    projectImg.src = `media/projects/${projectsList[currentProject].img}.png`;
  }
  projectDescription.innerText = projectsList[currentProject].description;
  projectLink.href = projectsList[currentProject].link;
};

prevButton.addEventListener("click", prevProject);
nextButton.addEventListener("click", nextProject);

setProject();
