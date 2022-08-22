const carpets = [
  {
    "id": 101,
    "d1": 110,
    "d2": 195,
    "d3": 110,
    "area": 2.15,
    "type": "Rug",
    "type2": "rug",
    "district": "Niğde",
    "model": "Madalyon",
    "age": 50
  },
  {
    "id": 102,
    "d1": 126,
    "d2": 200,
    "d3": 126,
    "area": 2.52,
    "type": "Rug",
    "type2": "rug",
    "district": "Niğde Demirci",
    "model": "Madalyon",
    "age": 70
  },
  {
    "id": 103,
    "d1": 95,
    "d2": 180,
    "d3": 95,
    "area": 1.71,
    "type": "Rug",
    "type2": "rug",
    "district": "Ege Sındırgı",
    "model": "Göbekli",
    "age": 60
  },
  {
    "id": 104,
    "d1": 102,
    "d2": 181,
    "d3": 102,
    "area": 1.85,
    "type": "Kilim",
    "type2": "kilim",
    "district": "Iran",
    "model": "Cicim, Eli Belinde",
    "age": 70
  },
  {
    "id": 106,
    "d1": 88,
    "d2": 315,
    "d3": 88,
    "area": 2.77,
    "type": "Other",
    "type2": "other",
    "district": "Niğde",
    "model": "",
    "age": 70
  },
  {
    "id": 107,
    "d1": 115,
    "d2": 150,
    "d3": 115,
    "area": 1.73,
    "type": "Kilim",
    "type2": "kilim",
    "district": "Sivas",
    "model": "Eli Belinde",
    "age": 70
  },
  {
    "id": 109,
    "d1": 101,
    "d2": 200,
    "d3": 101,
    "area": 2.02,
    "type": "Rug",
    "type2": "rug",
    "district": "Aksaray Taşpınar",
    "model": "",
    "age": 80
  },
  {
    "id": 110,
    "d1": 90,
    "d2": 130,
    "d3": 90,
    "area": 1.17,
    "type": "Rug",
    "type2": "rug",
    "district": "Aksaray Taşpınar Arısama",
    "model": "",
    "age": 50
  },
  {
    "id": 111,
    "d1": 115,
    "d2": 205,
    "d3": 115,
    "area": 2.36,
    "type": "Rug",
    "type2": "rug",
    "district": "Balıkesir",
    "model": "Toplu",
    "age": 70
  },
  {
    "id": 112,
    "d1": 110,
    "d2": 177,
    "d3": 110,
    "area": 1.95,
    "type": "Kilim",
    "type2": "kilim",
    "district": "Uşak",
    "model": "Eli Belinde",
    "age": 30
  },
  {
    "id": 113,
    "d1": 122,
    "d2": 170,
    "d3": 122,
    "area": 2.07,
    "type": "Rug",
    "type2": "rug",
    "district": "Konya",
    "model": "",
    "age": 80
  },
  {
    "id": 114,
    "d1": 124,
    "d2": 185,
    "d3": 124,
    "area": 2.29,
    "type": "Rug",
    "type2": "rug",
    "district": "Ege Sındırgı",
    "model": "Göbekli",
    "age": 40
  },
  {
    "id": 115,
    "d1": 75,
    "d2": 115,
    "d3": 75,
    "area": 0.86,
    "type": "Rug",
    "type2": "rug",
    "district": "Aksaray",
    "model": "",
    "age": 70
  },
  {
    "id": 116,
    "d1": 106,
    "d2": 165,
    "d3": 106,
    "area": 1.75,
    "type": "Rug",
    "type2": "rug",
    "district": "Kırşehir",
    "model": "Mihraplı",
    "age": 100
  },
  {
    "id": 117,
    "d1": 90,
    "d2": 370,
    "d3": 90,
    "area": 3.33,
    "type": "Kilim",
    "type2": "kilim",
    "district": "Sivas",
    "model": "Selçuklu",
    "age": "80-100"
  },
  {
    "id": 118,
    "d1": 122,
    "d2": 185,
    "d3": 122,
    "area": 2.26,
    "type": "Rug",
    "type2": "rug",
    "district": "Niğde Demirci",
    "model": "Madalyon",
    "age": 60
  },
  {
    "id": 120,
    "d1": 100,
    "d2": 120,
    "d3": 100,
    "area": 1.2,
    "type": "Rug",
    "type2": "rug",
    "district": "Niğde",
    "model": "Mihraplı",
    "age": 100
  },
  {
    "id": 121,
    "d1": 106,
    "d2": 190,
    "d3": 106,
    "area": 2.01,
    "type": "Rug",
    "type2": "rug",
    "district": "Konya Taşpınar Arısama",
    "model": "Madalyon",
    "age": 60
  },
  {
    "id": 122,
    "d1": 136,
    "d2": 228,
    "d3": 136,
    "area": 3.1,
    "type": "Rug",
    "type2": "rug",
    "district": "Konya Taşpınar",
    "model": "Sinekli",
    "age": 70
  },
  {
    "id": 123,
    "d1": 164,
    "d2": 265,
    "d3": 164,
    "area": 4.35,
    "type": "Kilim",
    "type2": "kilim",
    "district": "Konya",
    "model": "Cicim, Eli Belinde",
    "age": 50
  },
  {
    "id": 124,
    "d1": 164,
    "d2": 292,
    "d3": 164,
    "area": 4.79,
    "type": "Other",
    "type2": "other",
    "district": "Tekirdağ Şarköy",
    "model": "",
    "age": 100
  },
  {
    "id": 125,
    "d1": 148,
    "d2": 217,
    "d3": 148,
    "area": 3.21,
    "type": "Rug",
    "type2": "rug",
    "district": "Afgan",
    "model": "Toplu",
    "age": 70
  },
  {
    "id": 126,
    "d1": 151,
    "d2": 238,
    "d3": 151,
    "area": 3.59,
    "type": "Rug",
    "type2": "rug",
    "district": "Türkmen",
    "model": "Karpuzlu",
    "age": 80
  },
  {
    "id": 127,
    "d1": 133,
    "d2": 204,
    "d3": 133,
    "area": 2.71,
    "type": "Rug",
    "type2": "rug",
    "district": "Iran Tebriz",
    "model": "",
    "age": 70
  },
  {
    "id": 128,
    "d1": 116,
    "d2": 214,
    "d3": 116,
    "area": 2.48,
    "type": "Rug",
    "type2": "rug",
    "district": "Isparta",
    "model": "Zeki Müren",
    "age": 60
  },
  {
    "id": 129,
    "d1": 147,
    "d2": 248,
    "d3": 147,
    "area": 3.65,
    "type": "Rug",
    "type2": "rug",
    "district": "Isparta",
    "model": "Anonim",
    "age": 60
  },
  {
    "id": 130,
    "d1": 126,
    "d2": 205,
    "d3": 126,
    "area": 2.58,
    "type": "Rug",
    "type2": "rug",
    "district": "Niğde Demirci",
    "model": "Madalyon",
    "age": 70
  },
  {
    "id": 131,
    "d1": 132,
    "d2": 202,
    "d3": 132,
    "area": 2.67,
    "type": "Rug",
    "type2": "rug",
    "district": "Konya Taşpınar",
    "model": "Madalyon Sinekli",
    "age": 50
  },
  {
    "id": 132,
    "d1": 128,
    "d2": 210,
    "d3": 128,
    "area": 2.69,
    "type": "Rug",
    "type2": "rug",
    "district": "Konya Taşpınar",
    "model": "Madalyon Sinekli",
    "age": "50-60"
  },
  {
    "id": 133,
    "d1": 124,
    "d2": 180,
    "d3": 124,
    "area": 2.23,
    "type": "Rug",
    "type2": "rug",
    "district": "Niğde Bor",
    "model": "Madalyon",
    "age": 70
  },
  {
    "id": 134,
    "d1": 116,
    "d2": 217,
    "d3": 116,
    "area": 2.52,
    "type": "Rug",
    "type2": "rug",
    "district": "Isparta",
    "model": "Zeki Müren",
    "age": 60
  },
  {
    "id": 135,
    "d1": 134,
    "d2": 248,
    "d3": 134,
    "area": 3.32,
    "type": "Rug",
    "type2": "rug",
    "district": "Konya Taşpınar",
    "model": "Arısaman",
    "age": 50
  },
  {
    "id": 136,
    "d1": 131,
    "d2": 280,
    "d3": 131,
    "area": 3.67,
    "type": "Rug",
    "type2": "rug",
    "district": "Kayseri Yahyalı",
    "model": "Zincirli",
    "age": 40
  },
  {
    "id": 141,
    "d1": 106,
    "d2": 332,
    "d3": 106,
    "area": 3.52,
    "type": "Rug",
    "type2": "rug",
    "district": "Kırşehir",
    "model": "Eli Belinde",
    "age": 70
  },
  {
    "id": 142,
    "d1": 152,
    "d2": 402,
    "d3": 152,
    "area": 6.11,
    "type": "Rug",
    "type2": "rug",
    "district": "Isparta",
    "model": "Silsile",
    "age": 60
  },
  {
    "id": 144,
    "d1": 212,
    "d2": 392,
    "d3": 212,
    "area": 8.31,
    "type": "Other",
    "type2": "other",
    "district": "Sivas",
    "model": "",
    "age": 70
  },
  {
    "id": 145,
    "d1": 156,
    "d2": 373,
    "d3": 156,
    "area": 5.82,
    "type": "Kilim",
    "type2": "kilim",
    "district": "Kayseri",
    "model": "Eli Belinde",
    "age": 100
  },
  {
    "id": 146,
    "d1": 161,
    "d2": 314,
    "d3": 161,
    "area": 5.06,
    "type": "Kilim",
    "type2": "kilim",
    "district": "Denizli",
    "model": "Eli Belinde",
    "age": 40
  },
  {
    "id": 147,
    "d1": 154,
    "d2": 375,
    "d3": 154,
    "area": 5.78,
    "type": "Other",
    "type2": "other",
    "district": "Denizli",
    "model": "",
    "age": 60
  },
  {
    "id": 148,
    "d1": 152,
    "d2": 350,
    "d3": 152,
    "area": 5.32,
    "type": "Kilim",
    "type2": "kilim",
    "district": "Denizli",
    "model": "Eli Belinde",
    "age": 60
  },
  {
    "id": 149,
    "d1": 50,
    "d2": 90,
    "d3": 50,
    "area": 0.45,
    "type": "Other",
    "type2": "other",
    "district": "Malatya",
    "model": "Eli Belinde",
    "age": 80
  },
  {
    "id": 150,
    "d1": 65,
    "d2": 102,
    "d3": 65,
    "area": 0.66,
    "type": "Kilim",
    "type2": "kilim",
    "district": "Konya",
    "model": "Cicim",
    "age": 70
  },
  {
    "id": 151,
    "d1": 67,
    "d2": 245,
    "d3": 67,
    "area": 1.64,
    "type": "Other",
    "type2": "other",
    "district": "Konya",
    "model": "",
    "age": 70
  },
  {
    "id": 152,
    "d1": 69,
    "d2": 138,
    "d3": 69,
    "area": 0.95,
    "type": "Kilim",
    "type2": "kilim",
    "district": "Konya",
    "model": "",
    "age": 70
  },
  {
    "id": 153,
    "d1": 296,
    "d2": 450,
    "d3": 296,
    "area": 13.32,
    "type": "Rug",
    "type2": "rug",
    "district": "Isparta",
    "model": "Madalyon",
    "age": 60
  },
  {
    "id": 154,
    "d1": 237,
    "d2": 330,
    "d3": 237,
    "area": 7.82,
    "type": "Rug",
    "type2": "rug",
    "district": "Isparta",
    "model": "Madalyon",
    "age": 60
  },
  {
    "id": 155,
    "d1": 261,
    "d2": 367,
    "d3": 261,
    "area": 9.58,
    "type": "Rug",
    "type2": "rug",
    "district": "Konya Ladik",
    "model": "Madalyon",
    "age": 50
  },
  {
    "id": 156,
    "d1": 161,
    "d2": 257,
    "d3": 161,
    "area": 4.14,
    "type": "Rug",
    "type2": "rug",
    "district": "Uşak",
    "model": "Selçuklu",
    "age": 100
  },
  {
    "id": 157,
    "d1": 160,
    "d2": 260,
    "d3": 160,
    "area": 4.16,
    "type": "Rug",
    "type2": "rug",
    "district": "Kayseri Bünyan",
    "model": "Sozsuzluk",
    "age": 50
  },
  {
    "id": 158,
    "d1": 227,
    "d2": 374,
    "d3": 227,
    "area": 8.49,
    "type": "Kilim",
    "type2": "kilim",
    "district": "Sivas",
    "model": "Tırnaklı",
    "age": 80
  },
  {
    "id": 159,
    "d1": 240,
    "d2": 330,
    "d3": 240,
    "area": 7.92,
    "type": "Rug",
    "type2": "rug",
    "district": "Isparta",
    "model": "Serpme Çiçek",
    "age": 60
  },
  {
    "id": 160,
    "d1": 246,
    "d2": 350,
    "d3": 246,
    "area": 8.61,
    "type": "Rug",
    "type2": "rug",
    "district": "Afyon Sandıklı",
    "model": "",
    "age": 60
  },
  {
    "id": 161,
    "d1": 226,
    "d2": 300,
    "d3": 226,
    "area": 6.78,
    "type": "Rug",
    "type2": "rug",
    "district": "Isparta",
    "model": "Madalyon",
    "age": 70
  },
  {
    "id": 162,
    "d1": 247,
    "d2": 396,
    "d3": 247,
    "area": 9.78,
    "type": "Rug",
    "type2": "rug",
    "district": "Hereke",
    "model": "Yedi Dağın Çiçeği",
    "age": 30
  },
  {
    "id": 163,
    "d1": 250,
    "d2": 361,
    "d3": 250,
    "area": 9.03,
    "type": "Rug",
    "type2": "rug",
    "district": "Kars Şahseven",
    "model": "Göbekli",
    "age": 60
  },
  {
    "id": 164,
    "d1": 198,
    "d2": 298,
    "d3": 198,
    "area": 5.9,
    "type": "Rug",
    "type2": "rug",
    "district": "Kayseri Bünyan",
    "model": "",
    "age": "40-50"
  },
  {
    "id": 165,
    "d1": 228,
    "d2": 312,
    "d3": 228,
    "area": 7.11,
    "type": "Rug",
    "type2": "rug",
    "district": "Isparta",
    "model": "Göbekli",
    "age": 70
  },
  {
    "id": 166,
    "d1": 198,
    "d2": 298,
    "d3": 198,
    "area": 5.9,
    "type": "Rug",
    "type2": "rug",
    "district": "Kayseri Bünyan",
    "model": "Serpme Çiçek",
    "age": 50
  },
  {
    "id": 167,
    "d1": 214,
    "d2": 332,
    "d3": 214,
    "area": 7.1,
    "type": "Rug",
    "type2": "rug",
    "district": "Malatya",
    "model": "Toplu",
    "age": 70
  },
  {
    "id": 168,
    "d1": 186,
    "d2": 283,
    "d3": 186,
    "area": 5.26,
    "type": "Rug",
    "type2": "rug",
    "district": "Isparta",
    "model": "Yedi Dağın Çiçeği",
    "age": 60
  },
  {
    "id": 169,
    "d1": 209,
    "d2": 290,
    "d3": 209,
    "area": 6.06,
    "type": "Rug",
    "type2": "rug",
    "district": "Malatya",
    "model": "Toplu",
    "age": 70
  },
  {
    "id": 170,
    "d1": 200,
    "d2": 295,
    "d3": 200,
    "area": 5.9,
    "type": "Rug",
    "type2": "rug",
    "district": "Kayseri Bünyan",
    "model": "Binbir Gece",
    "age": 60
  },
  {
    "id": 171,
    "d1": 203,
    "d2": 303,
    "d3": 203,
    "area": 6.15,
    "type": "Rug",
    "type2": "rug",
    "district": "Kayseri Bünyan",
    "model": "Madalyon",
    "age": 50
  },
  {
    "id": 172,
    "d1": 195,
    "d2": 303,
    "d3": 195,
    "area": 5.91,
    "type": "Rug",
    "type2": "rug",
    "district": "Iran Tebriz",
    "model": "Madalyon",
    "age": 50
  },
  {
    "id": 173,
    "d1": 263,
    "d2": 375,
    "d3": 263,
    "area": 9.86,
    "type": "Rug",
    "type2": "rug",
    "district": "Isparta",
    "model": "Serpme Çiçek",
    "age": 60
  },
  {
    "id": 174,
    "d1": 205,
    "d2": 295,
    "d3": 205,
    "area": 6.05,
    "type": "Rug",
    "type2": "rug",
    "district": "Çin",
    "model": "Madalyon Toplu Kabartma",
    "age": 30
  }
];


document.getElementById("masonry-grid").innerHTML = tmpl("tmpl-demo", carpets);

function count_grid() {
  var count = $('.grid-item:visible').length;
  if (count == 0) {
    $('#item_count').text('Nothing found!')
    return;
  } else if (count == 1) {
    $('#item_count').text('Listing ' + count + ' item...');
  } else {
    $('#item_count').text('Listing ' + count + ' items...');
  }
  
}

function ms() {
    $("#masonry-grid").masonry({
        columnWidth: 300,
        itemSelector: ".grid-item",
        isFitWidth: true
    });
    count_grid();
}

$("#masonry-grid").imagesLoaded(function() {
    ms();
});

document.addEventListener("DOMContentLoaded", function() {
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                ms();
            }
        });
    });
    const arr = document.querySelectorAll("img.lozad");
    arr.forEach(v => {
        imageObserver.observe(v);
    });
});

$("#grid-filter li").click(function() {
    var group = $(this).data("category");
    var group_class = "." + group;
    if (group == "*") {
        $(".grid-item").show();
        $("#masonry-grid").masonry("layout");
    } else if (group != "") {
        $(".grid-item").hide();
        $(group_class).show();
        $("#masonry-grid").masonry("layout");
    } else {
        $(".grid-item").show();
        $("#masonry-grid").masonry("layout");
    }
    count_grid();
});



$('#searchbox').on('input',function(){
    var s = $(this).val();
    if (!s) {
        $(".grid-item").show();
        count_grid();
        return;
    }
    f = $('.grid-item').filter('[data-id^=' + $(this).val() + '], [data-district^=' + $(this).val() + '], [data-model^=' + $(this).val() + ']');
    $(".grid-item").hide();
    $(f).show()
    count_grid();
    $("#masonry-grid").masonry("layout");
});


$(".luxbar-item").click(function(event) {
    $("#luxbar-checkbox").prop("checked", false);
});

$(".grid-item").click(function() {
    const pic_urls = [];
    pic_urls[0] = $(this).find("img").attr("src").replace($(this).data("id") + ".jpg", $(this).data("id") + "-1.jpeg").replace("/400", "/1920");
    pic_urls[1] = pic_urls[0].replace("-1", "-2");
    pic_urls[2] = pic_urls[0].replace("-1", "-3");
    const dimensions = $(this).data("area") + " m<sup>2</sup> (" + parseInt($(this).data("d1")) + " x " + parseInt($(this).data("d2")) + ") cm";
    const subHtml = `<div class="lightGallery-captions">
                      <h3>` + $(this).data("district") + ($(this).data("model") ? `, ` + $(this).data("model") : '') + ' (~' + $(this).data("age") + `  years old)</h3>
                      <h4>` + dimensions + `</h4>
                      <small>pid: ` + $(this).data("id") + `</small>
                    </div>`;
    const dynamicGallery = lightGallery($(this), {
        dynamic: true,
        speed: 500,
        dynamicEl: [ {
            src: pic_urls[0],
            thumb: pic_urls[0].replace("/1920", "/thumb"),
            subHtml: subHtml
        }, {
            src: pic_urls[1],
            thumb: pic_urls[1].replace("/1920", "/thumb"),
            subHtml: subHtml
        }, {
            src: pic_urls[2],
            thumb: pic_urls[2].replace("/1920", "/thumb"),
            subHtml: subHtml
        } ]
    });
    dynamicGallery.openGallery();
});


