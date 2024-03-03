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
        let videoAnswer = params.videoAnswer || false;
        let img = params.img || false;

        // variables for function
        let list = '';

        arr.forEach( (element, index) => {

            let videoAns = "";

            if( videoAnswer ){
                videoAns = element.replace("_1", "_2");
            }

            let isVideo = element.indexOf("_video")!==-1 ? true: false ;

            let format2 = audio;

            if( isVideo ){
                format2 = 'mp4';
            }

            let btnCopyVideoAnswer = videoAnswer ? `<span class="copy" data-copy="${path}/${dir}/${videoAns}.${video}">Copy video</span>` : '';
            let btnOpenVideoAnswer = videoAnswer ? `<a href="${path}/${dir}/${videoAns}.${video}" target="_blank">Open video</a>` : '';

            let btnCopyAudio = audio ? `<span class="copy" data-copy="${path}/${dir}/${element}.${format2}">Copy audio</span>` : '';
            let btnOpenAudio = audio ? `<a href="${path}/${dir}/${element}.${format2}" target="_blank">Open audio</a>` : '';

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

                        ${btnCopyVideoAnswer}
                        ${btnOpenVideoAnswer}
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
        'nfs',
        'skyrim',
        'robocop',
        'prekrasnoe_dalyoko',
        'ori',
    ]

    let name_05 = "5. OST Фильмы/сериалы";
    let dir_05 = "05_ost";
    let format_05 = "mp3";
    let arr_05 = [
        'ameli',
        'matrica',
        'oblivion',
        'tvin_piks',
        'armageddon',
        'rokki',
        'generaly_peschanyh_karerov',

        'sverhestestvennoe',
        'velikij_getsbi',
        'zvezdnye_voiny',
        'igrushka',
        'ultimatum_borna',
        'komissar_reks',
        'lico_so_shramom',
        
        'sumerki',
        'missiya_nevypolnima',
        'telohranitel',
        '50_ottenkov_serogo',
        'ot_zakata_do_rassveta',
        'tancor_disko',
        'beovulf',
    ]

    let name_06 = "6. На каком языке отрывок";
    let dir_06 = "06_lang";
    let format_06 = "mp3";
    let arr_06 = [
        'boevoi_kontinent',
        'studzianki',
        'dudu',
        'myriam_fares',
        'boris_nonte',
        'smeloi',
        '7_seconds',
        
        'aisha',
        'gangnam_style',
        'la_isla_bonita',
        'u_morya_yaponskij',
        'agiel_pyiala',
        'gruzinskaya',
        'mrazish_video',
    ]

    let name_07 = "7. Музыкальный плагиат";
    let dir_07 = "07_plagiat";
    let format_07 = "mp4";
    let arr_07 = [
        'a_u_reki_1',
        'moscow_1',
        'malinki_1',
        'quest_pistols_1',
        'eros_1',
        'faded_1',
        'kuzmin_1',
    ]

    let name_08 = "8. Советское кино (м)";
    let dir_08 = "08_sovet";
    let format_08 = "mp3";
    let arr_08 = [
        'dolgaya-doroga-v-dyunah',
        'bolshoe-kosmicheskoe-puteshestvie',
        'ivan-vasilevich-menyaet-professiyu',
        'formula-lyubvi-uno-momento',
        '12-stulev-bileet-moj-parus',
        'sluzhebnyj-roman-utro',
        'est-tolko-mig-zemlya-sannikova',
        
        'sibiriada',
        'tot-samyj-myunhauzen',
        'moj-laskovyj-i-nezhnyj-zver',
        'svoj-sredi-chuzhih-chuzhoj-sredi-svoih',
        'gardemariny-vperyod-doroga',
        '17-mgnovenij-vesny',
        'kopejka-ya-lyublyu-tebya-do-slez',
        
        'usatyj-nyan',
        'tri-mushkitera-pesnya-grafa',
        'moskva-slezam-ne-verit',
        'priklyucheniya-ehlektronika',
        'vyshe-radugi-zurbagan',
        'yunona-i-avos',
        'shmel',
    ]

    let name_09 = "8.4. и 8.7.  Рандом";
    let dir_09 = "09_random";
    let format_09 = "mp3";
    let arr_09 = [
        'plohaya_devochka',
        'shkola7',
    ]

    let name_09_2 = "8.3.  Рандом";
    let dir_09_2 = "09_random";
    let format_09_2 = "jpg";
    let arr_09_2 = [
        'tyan',
        'dyuma',
    ]

    let list01 = { name: name_01, dir: dir_01, format: format_01, arr: arr_01, audio: 'mp3', }
    list(list01);

    let list02 = { name: name_02, dir: dir_02, format: format_02, arr: arr_02, audio: 'mp3', video: format_02, }
    list(list02);

    let list03 = { name: name_03, dir: dir_03, format: format_03, arr: arr_03, img: 'jpg',}
    list(list03);

    let list04 = { name: name_04, dir: dir_04, format: format_04, arr: arr_04, audio: 'mp3', }
    list(list04);

    let list05 = { name: name_05, dir: dir_05, format: format_05, arr: arr_05, audio: 'mp3', }
    list(list05);

    let list06 = { name: name_06, dir: dir_06, format: format_06, arr: arr_06, audio: 'mp3', }
    list(list06);

    let list07 = { name: name_07, dir: dir_07, format: format_07, arr: arr_07, video: format_07, videoAnswer : true,}
    list(list07);

    let list08 = { name: name_08, dir: dir_08, format: format_08, arr: arr_08, audio: 'mp3', }
    list(list08);

    let list09 = { name: name_09, dir: dir_09, format: format_09, arr: arr_09, audio: 'mp3', }
    list(list09);

    let list09_2 = { name: name_09_2, dir: dir_09_2, format: format_09_2, arr: arr_09_2, img: 'jpg',}
    list(list09_2);

    copy('.copy');

    document.body.insertAdjacentHTML("afterbegin", `<h1>${counter}</h1>`);
    document.body.insertAdjacentHTML("beforeend", `<h1>${counter}</h1>`);

});