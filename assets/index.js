document.addEventListener('DOMContentLoaded', function(){

    const path = './dist'

    function copy (select){
        const spans = document.querySelectorAll( select );
        const href = document.location.href;

        spans.forEach(span => {
            span.onclick = function() {
                document.execCommand("copy");
            }
            let text = span.getAttribute("data-copy") || false;
            text = text.replace('./','');
            text = href + text;
            
            span.addEventListener("copy", function(event) {
                event.preventDefault();
                if( text!='' && text ){
                    if (event.clipboardData) {
                        event.clipboardData.setData("text/plain", text);
                    }
                }
            });
        });
    };

    function list( params ){

        // params of function
        let arr = params.arr || false;
        let dir = params.dir || false;
        let format = params.format || false;
        let name = params.name || false;
        let audio = params.audio || false;
        let video = params.video || false;

        // variables for function
        let list = '';

        arr.forEach( (element, index) => {
            let btnCopyAudio = audio ? `<span class="copy" data-copy="${path}/${dir}/${element}.${audio}">Copy audio</span>` : '';
            let btnOpenAudio = audio ? `<a href="${path}/${dir}/${element}.${audio}" target="_blank">Open audio</a>` : '';

            let btnCopyVideo = video ? `<span class="copy" data-copy="${path}/${dir}/${element}.${video}">Copy video</span>` : '';
            let btnOpenVideo = video ? `<a href="${path}/${dir}/${element}.${video}" target="_blank">Open video</a>` : '';

            list += `
                    <li data-index="${index+1})">
                        <a href="${path}/${dir}/${element}.${format}" target="_blank">${element}</a>
                        ${btnCopyAudio}
                        ${btnOpenAudio}
                        ${btnCopyVideo}
                        ${btnOpenVideo}                        
                    </li>
                    `;
        });
        let html = `
                    <div class="item">
                        <h2>${name}</h2>
                        <ol>${list}</ol>
                    </div>
                    `
        document.body.insertAdjacentHTML("beforeend", html);
    }

    /*  */
    let name_01 = "Каверы от Лепса";
    let dir_01 = "01_covers_from_leps";
    let format_01 = "mp3";
    let arr_01 = [
        'pugacheva',
        'kirkorov',
        'parallelnie_meladze',
        'kolshik_krug',
        'na_zare_gazmanov',
        'talkov',
        'koni_priveredlivie_visotskiy',
        'kapitan_arktika_velvet',
        'malikov',
        'bi2',
        'serov',
        'aeroporti_presnyakov_agutin',        
        'rotaru',
        'ne_molchi_bilan',
    ]

    let name_02 = "Реплики";
    let dir_02 = "02_repliki";
    let format_02 = "mp4";
    let arr_02 = [
        'aeroplan',
        'zelenaya_kniga',
        'temniy_ricar',
        'ochen_strashnoe_kino',
        'vremya',
        'doroga_peremen',
        'tor3',

        'jentelmeni',
        'leon',
        'dyavol_nosit_prada',
        'shoushenka',
        'besslavnie_ublyudki',
        'zaponoposlushniy_grajdanin',
        'mi_milleri',
        
        'krokodil_dandi',
        'matrica',
        'prividenie',
        'ukroshenie_stroptivogo',
        'kriminalnoe_chtivo',
        'orujeyniy_baron',
        'krasnaya_jara',
    ]

    let list01 = { name: name_01, dir: dir_01, format: format_01, arr: arr_01, audio: 'mp3', }
    list(list01);

    let list02 = { name: name_02, dir: dir_02, format: format_02, arr: arr_02, audio: 'mp3', video: format_02, }
    list(list02);

    copy('span.copy')
});