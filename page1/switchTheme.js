var colors_css_files = ["page1_dark.css", "page1_light.css"]
var currIndex = 0;

function switchCSS() {
    const cssLink = document.getElementById("cssColors");  // putting it here so that, I think, it doesn't try to find it before it gets loaded or sommething idk I hate web dev PLEASE HELP ME
    currIndex == colors_css_files.length-1 ? currIndex = 0 : ++currIndex;
    cssLink.href = colors_css_files[currIndex];
}