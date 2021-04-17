const num = 151; //表示したい画像の数

// HTMLを動的に作成しmain部を表示する関数
async function callApi() {
    for (i = 1; i <= num; i++) {
        // APIでjsonを取得する
        var res = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + i + "/");
        var data = await res.json();

        // ID、名前、画像URLを取得する
        var pokeId = data['id']
        var pokeName = data['names'][0]['name']
        var pokemonUrl = data['varieties'][0]['pokemon']['url']


        res = await fetch(pokemonUrl)
        data = await res.json();

        var pokeImageUrl = data['sprites']['front_default']
        var pokeType = data['types'][0]['type']['name']


        // HTMLを生成していく
        // 1データのdivを生成
        var div = document.createElement('div');
        div.id = i;
        div.className = 'box';

        // 図鑑番号と名前用のpタグを作成し、divタグに挿入
        var p = document.createElement('p');
        div.appendChild(p); // p要素をdiv要素の子要素に追加

        // 図鑑番号を挿入
        var id = document.createElement('span');
        id.textContent = pokeId + '.';
        p.appendChild(id);

        // 名前を挿入
        var name = document.createElement('span');
        name.textContent = pokeName;
        p.appendChild(name);

        // 画像を挿入
        var img = document.createElement('img');
        img.src = pokeImageUrl; // 画像パスを追加
        div.appendChild(img);

        var p = document.createElement('p');
        div.appendChild(p); // p要素をdiv要素の子要素に追加

        // タイプを表示
        var type = document.createElement('p');
        type.textContent = pokeType;
        p.appendChild(type);


        // 生成したdiv要素を、wrapperに追加、表示する
        document.getElementById('main').appendChild(div);
    }
}


// details部（詳細データ）の表示関数
async function DetailsDisplay() {
    // APIでjsonを取得する
    var res = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + x);
    var data = await res.json();

    // ID、名前、属名、説明文を取得する。
    var pokeId = data['id']
    var pokeName = data['names'][0]['name']
    var pokeGenus = data['genera'][0]['genus']
    var pokeFlavorText = data['flavor_text_entries'][29]['flavor_text']

    // 画像、たかさ、おもさのデータを取得するためエンドポイントを変える。
    var pokemonUrl = data['varieties'][0]['pokemon']['url']
    res = await fetch(pokemonUrl)
    data = await res.json();

    // 画像を取得
    var pokeImage = data['sprites']['front_default']
    // 後ろからの画像は↓
    // pokeImage1 = data['sprites']['back_default']
    // 色違いの画像は↓
    // pokeImage1 = data['sprites']['front_shiny']

    // たかさ、おもさを取得
    var pokeHeight = data['height'] / 10;
    var pokeWeight = data['weight'] / 10;


    // HTMLを生成していく
    // 画像部を作成
    var div = document.createElement('div');
    div.className = 'img-box';

    // img要素を生成
    var img = document.createElement('img');
    img.src = pokeImage; // 画像パスを追加
    div.appendChild(img); // img要素をdiv要素の子要素に追加

    // Noを生成
    var no = document.createElement('p');
    no.textContent = "No." + pokeId;
    div.appendChild(no);

    // 画像部分（img-box）を表示
    document.getElementById('details').appendChild(div);



    // 詳細部を作成
    var div = document.createElement('div');
    div.className = 'details-box';

    var name = document.createElement('p');
    name.textContent = pokeName;
    div.appendChild(name);

    var genus = document.createElement('p');
    genus.textContent = pokeGenus;
    div.appendChild(genus);

    var height = document.createElement('p');
    height.textContent = "たかさ " + pokeHeight + "m";
    div.appendChild(height);

    var weight = document.createElement('p');
    weight.textContent = "おもさ " + pokeWeight + "kg";
    div.appendChild(weight);

    // 詳細部分を表示
    document.getElementById('details').appendChild(div);


    // 説明部を生成
    var div = document.createElement('div');
    div.className = 'flavor-text-box';

    var flavorText = document.createElement('p');
    flavorText.textContent = pokeFlavorText;
    div.appendChild(flavorText);

    // 説明部を表示
    document.getElementById('details').after(div);
}


// 表示関数を実行
callApi();


// クリックされた時の処理
$(document).on("click", ".box", function (event) {
    // クリックされた要素のidを取得
    x = $(this).attr('id');

    // details部の表示関数を実行。
    DetailsDisplay();

    // main部分を非表示。
    var main = document.getElementById("main");
    main.remove();
});
