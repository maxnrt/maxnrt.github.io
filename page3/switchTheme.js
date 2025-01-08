let colors_css_files = ["/css/colors_dark.css", "/css/colors_light.css"]

function switchCSS() {
    const cssLink = document.getElementById("cssColors");

    if (cssLink) {
        cssLink.href == colors_css_files[0] ? cssLink.href = colors_css_files[1] : colors_css_files[0];
    } else {
        console.warn('CSS file not found');
    }
}