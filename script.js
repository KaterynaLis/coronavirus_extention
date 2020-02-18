replaceVirus(document.body);

function replaceVirus(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceVirus);
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/coronavirus/gi)) {
      element.parentElement.style.color = "black";
      element.parentElement.style.backgroundColor = "black";
    }
    // element.textContent = element.textContent.replace(
    //   /coronavirus/gi,
    //   "XXXXXXXXX"
    // );
  }
}
