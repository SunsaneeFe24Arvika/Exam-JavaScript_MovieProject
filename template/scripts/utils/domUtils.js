
export function getElement(selectoer) {
    return document.querySelector(selectoer);    


export function getElementById(selectoer) {
    return document.getElementById(selectoer);    

}

export function querySelectorAll(selectoer) {
    return document.querySelectorAll(selectoer);
}

export function createElement(tagname) {
    return document.createElement(tagname);
}

export function appendChild(parent, child) {
    return parent.appendChild(child);
}

export function removeElement(element) {
    return element.remove();
}

export function addClass(element, className) {
    return element.classList.add(className);
}

export function removeClass(element, className) {
    return element.classList.remove(className);
}

export function getDataSrc(element) {
    return element.dataset.src;
}

export function setDataSrc(element, src) {
    element.dataset.src = src;
}

