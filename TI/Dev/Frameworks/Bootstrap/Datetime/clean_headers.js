// Bootstrap CSS
document.querySelectorAll('link,script').forEach(function (el) {
    const v=el.href || el.src || '';
    const arr=[
        'https://cdn.jsdelivr.net/npm/',
        // 'https://fonts.googleapis.com/',
        // 'https://cdnjs.cloudflare.com/',
        // 'https://evoice/easyData/js/fontawesome',
        'https://evoice/easyData/js/Md2HTML',
        'https://evoice/easyData/skin/default/css/Mermaid',
        'https://evoice/easyData/skin/default/css/Md2HTML',
    ];
    if (arr.some(url => v.startsWith(url))) {
        console.log(`Removed: ${v}`);
        el.remove();
    } // else console.log(v);
});
