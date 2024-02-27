import { fetchRootData, fetchDirOrFile } from "./api/index.js";
import {
  createEl,
  createElWidthClass,
  createDirNode,
} from "./utils/createNode.js";

const $app = document.querySelector(".app");
let pathDepth = [{ id: 0, name: "root" }];

const cleanApp = () => {
  while ($app.firstChild) {
    $app.removeChild($app.lastChild);
  }
};

const createNav = () => {
  const $nav = createElWidthClass("nav", "Breadcrumb");
  pathDepth.forEach((path) => {
    const $path = createEl("div");
    $path.textContent = path.name;
    $nav.appendChild($path);
  });
  $app.appendChild($nav);
};

const createDirPage = async (id) => {
  const dirOrFileData = await fetchDirOrFile(id);
  createNav();
  const $nodes = createElWidthClass("div", "Nodes");
  const $prev = createDirNode("PREV");
  $prev.addEventListener("click", () => {
    cleanApp();
    pathDepth = pathDepth.slice(0, -1);
    console.log(dirOrFileData[0].parent.id);
    if (pathDepth.length < 2) createRootPage();
    else createDirPage(pathDepth[pathDepth.length - 2].id);
  });
  $nodes.appendChild($prev);
  dirOrFileData.forEach((data) => {
    const $node = createDirNode(data.type, data.name);
    $nodes.appendChild($node);
    $node.addEventListener("click", () => {
      switch (data.type) {
        case "DIRECTORY":
          cleanApp();
          pathDepth = [...pathDepth, { id: data.id, name: data.name }];
          console.log(data.id);
          createDirPage(data.id);
          break;
        case "FILE":
          console.log(data.filePath);
          break;
        default:
          return;
      }
    });
  });
  $app.appendChild($nodes);
};

const createRootPage = async () => {
  createNav();
  const $nodes = createElWidthClass("div", "Nodes");
  const rootData = await fetchRootData();
  rootData.forEach((data) => {
    const $node = createDirNode(data.type, data.name);
    $nodes.appendChild($node);
    $node.addEventListener("click", () => {
      cleanApp();
      pathDepth = [...pathDepth, data.name];
      createDirPage(data.id);
    });
  });
  $app.appendChild($nodes);
};

document.addEventListener("DOMContentLoaded", createRootPage);
