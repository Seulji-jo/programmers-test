export const createEl = (el) => {
  const element = document.createElement(el);
  return element;
};
export const createElWidthClass = (el, className) => {
  const element = document.createElement(el);
  element.className = className;
  return element;
};

export const createDirNode = (type, dirName) => {
  const $node = createElWidthClass("div", "Node");
  const $dirImg = createEl("img");
  switch (type) {
    case "DIRECTORY":
      $dirImg.src = "./assets/directory.png";
      break;
    case "FILE":
      $dirImg.src = "./assets/file.png";
      break;
    case "PREV":
      $dirImg.src = "./assets/prev.png";
      break;
    default:
      break;
  }
  $node.appendChild($dirImg);

  if (dirName) {
    const $dirName = createEl("div");
    $dirName.textContent = dirName;
    $node.appendChild($dirName);
  }

  return $node;
};
