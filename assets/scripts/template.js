class Template {
    static generate(id, params = {}) {
        let template = document.getElementById(id).innerHTML;

        Object.keys(params).map(key => {
            const regexp = new RegExp(`{${key}}`, 'g');
            template = template.replace(regexp, params[key]);
        })

        return template;
    }
}
