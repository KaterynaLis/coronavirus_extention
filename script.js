replaceVirus(document.body);

function replaceVirus(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceVirus);
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/coronavirus/gi)) {
      element.parentElement.remove();
    }
  }
}
