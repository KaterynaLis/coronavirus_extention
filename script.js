replaceVirus(document.body);

function replaceVirus(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceVirus);
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/coronavirus/gi)) {
      //   const newElement = document.createElement("span");
      //   newElement.innerHTML = element.textContent.replace(
      //     /(coronavirus)/gi,
      //     '<span style = "background-color: black; color: black;">$1<span>'
      //   );
      //   element.replaceWith(newElement);

      element.parentElement.remove();
    }
  }
}
