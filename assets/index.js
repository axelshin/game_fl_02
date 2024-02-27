document.addEventListener('DOMContentLoaded', function(){

    const path = './dist/'

    let name_01 = "Каверы от Лепса";
    let dir_01 = "01_covers_from_leps";
    let format01 = "mp3";
    let arr01 = [
        'aeroporti_presnyakov_agutin',
        'bi2',
        'kapitan_arktika_velvet',
        'kirkorov',
        'kolshik_krug',
        'koni_priveredlivie_visotskiy',
        'malikov',
        'na_zare_gazmanov',
        'ne_molchi_bilan',
        'parallelnie_meladze',
        'pugacheva',
        'rotaru',
        'serov',
        'talkov',
    ]

    function list( name, dir, format, arr ){

        let list = '';

        arr.forEach( (element) => {
            list += `
                    <li>
                        <a href="${path}/${dir}/${element}.${format}" target="_blank">${element}</a>
                        <span class="copy">copy</span>
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
    
    list(name_01, dir_01, format01, arr01);

});