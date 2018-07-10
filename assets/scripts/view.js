class View {
    static render(html, container) {
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }

        const div = document.createElement('div');
        div.innerHTML = html.trim();

        return container.appendChild(div.firstChild);
    }
}
