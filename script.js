replaceVirus(document.body);

function replaceVirus(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceVirus);
  } else if (element.nodeType === Text.TEXT_NODE) {
    element.textContent = element.textContent.replace(
      /coronavirus/gi,
      "XXXXXXXXX"
    );
  }
}
