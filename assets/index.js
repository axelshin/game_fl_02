document.addEventListener('DOMContentLoaded', function(){

    const path = './dist';
    let counter = 0;

    function copy (select){
        const spans = document.querySelectorAll( select );
        let href = document.location.href;
        href = href.replace('https','http');

        spans.forEach(span => {
            span.onclick = function() {
                document.execCommand("copy");
            }
            let text = span.getAttribute("data-copy") || false;
            text = text.replace('./','');
            text = href + text;
            
            span.addEventListener("copy", function(event) {
                event.preventDefault();
                console.log(text)
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
        let img = params.img || false;

        // variables for function
        let list = '';

        arr.forEach( (element, index) => {
            let btnCopyAudio = audio ? `<span class="copy" data-copy="${path}/${dir}/${element}.${audio}">Copy audio</span>` : '';
            let btnOpenAudio = audio ? `<a href="${path}/${dir}/${element}.${audio}" target="_blank">Open audio</a>` : '';

            let btnCopyVideo = video ? `<span class="copy" data-copy="${path}/${dir}/${element}.${video}">Copy video</span>` : '';
            let btnOpenVideo = video ? `<a href="${path}/${dir}/${element}.${video}" target="_blank">Open video</a>` : '';

            let btnCopyImg = img ? `<span class="copy" data-copy="${path}/${dir}/${element}.${format}">Copy img</span>` : '';
            let imgItem = img ? `<img src="${path}/${dir}/${element}.${format}" class="img copy" data-copy="${path}/${dir}/${element}.${format}" />` : '';

            list += `
                    <li data-index="${index+1})">
                        <a href="${path}/${dir}/${element}.${format}" class="first" target="_blank">${element}</a>
                        ${btnCopyAudio}
                        ${btnOpenAudio}
                        ${btnCopyVideo}
                        ${btnOpenVideo}

                        ${imgItem}
                        ${btnCopyImg}
                    </li>
                    `;

            counter++;
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
    let name_01 = "1. Каверы от Лепса";
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

    let name_02 = "2. Реплики";
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

    let name_03 = "3. Нейросеть";
    let dir_03 = "03_network";
    let format_03 = "jpg";
    let arr_03 = [
        'morda_kirpichom',
        'alenushka_i_bratec_ivanushka',
        'lepit_gorbatogo',
        'sup_s_kotom',
        'ni_ryba_ni_myaso',
        'ceny_kusayutsya',
        'bezhat_vperedi_parovoza',

        'i_hochetsya_i_koletsya',
        'vynos_mozga',
        'volshebnik_v_golubom_vertolete',
        'les_ruk',
        'ofisnyj_plankton',
        'glaza_razbegayutsya',
        'moloko_ubezhalo',

        'podlozhit_svinyu',
        'brovki_domikom',
        'stroit_glazki',
        'carica_skazka_o_care_saltane',
        'kak_belka_v_kolese',
        'zolotye_ruki',
        'zhaba_dushit',
    ]

    let name_04 = "4. Игры";
    let dir_04 = "04_games";
    let format_04 = "mp3";
    let arr_04 = [
        'mario',
        'tetris',
        'skyrim',
        'aladdin',
        'robocop',
        'prekrasnoe_dalyoko',
        'ori',
    ]

    let list01 = { name: name_01, dir: dir_01, format: format_01, arr: arr_01, audio: 'mp3', }
    list(list01);

    let list02 = { name: name_02, dir: dir_02, format: format_02, arr: arr_02, audio: 'mp3', video: format_02, }
    list(list02);

    let list03 = { name: name_03, dir: dir_03, format: format_03, arr: arr_03, img: 'jpg',}
    list(list03);

    let list04 = { name: name_04, dir: dir_04, format: format_04, arr: arr_04, audio: 'mp3', }
    list(list04);

    copy('.copy');

    document.body.insertAdjacentHTML("afterbegin", `<h1>${counter}</h1>`);
    document.body.insertAdjacentHTML("beforeend", `<h1>${counter}</h1>`);

});