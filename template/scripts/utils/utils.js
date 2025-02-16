export function getElement(selector) {
  return document.querySelector(selector);    
}

export function getElements(selector) {
  return document.querySelectorAll(selector);
}

export function createElements(tagName) {
  return document.createElement(tagName);
}

export function addClass(element, className) {
  element.classList.add(className);
}

export function removeClass(element, className) {
  element.classList.remove(className);
}

export function appendElement(parent, child) {
  parent.appendChild(child);
}

export function getDataSrc(element) {
  return element.dataset.src;
}

export function setDataSrc(element, src) {
  element.dataset.src = src;
}