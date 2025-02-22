export function addEventListenersToElements(elements, eventType, callback) {
    elements.forEach(element => {
        if (element) {
            element.addEventListener(eventType, callback);
        }
    });
}




export function removeEventListenersFromElements(elements, eventType, callback) {
    if (elements) {
        elements.removeEventListenersFromElements(eventType, callback);
        return () => elements.removeEventListenersFromElements(eventType, callback);
    }
}