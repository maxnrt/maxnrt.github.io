let colors_css_files = ["/css/colors_dark.css", "/css/colors_light.css"]
let currIndex = 0;

function switchCSS() {
    const cssLink = document.getElementById("cssColors");

    if (cssLink) {
        currIndex == colors_css_files.length-1 ? currIndex = 0 : ++currIndex;
        cssLink.href = colors_css_files[currIndex];

    } else {
        console.warn('CSS file not found');
    }
}