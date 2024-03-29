(function () {

    var $panel = document.getElementById("pnlSurvey");
    var questions = [
        { "id": 1, "text": "İnsanlar benden etkilenirler.", type: "significance" },
        { "id": 2, "text": "\"Ait olma\" hissi benim için önemlidir.", type: "connection" },
        { "id": 3, "text": "Ayaklarımın yere bastığını hissetmem gerek.", type: "certainty" },
        { "id": 4, "text": "Risk almaktan çekinmem.", type: "variety" },
        { "id": 5, "text": "Değişimden korkmam.", type: "variety" },
        { "id": 6, "text": "Başarısızlık, denemeye devam edilirse başarısızlık değildir.", type: "growth" },
        { "id": 7, "text": "Karşılıksız vermeye inanırım.", type: "contribution" },
        { "id": 8, "text": "İnsanlarla ilgilenme konusunda iyiyimdir.", type: "connection" },
        { "id": 9, "text": "Nadir olarak insanların hakkımda söyledikleri konusunda endişelenirim.", type: "significance" },
        { "id": 10, "text": "Hayatımda olabildiğince denge ve istikrar olmasını severim.", type: "certainty" },
        { "id": 11, "text": "Topluma katkıda bulunmak önemlidir.", type: "contribution" },
        { "id": 12, "text": "Yeni projeler ve fikirler geliştirmeyi severim.", type: "variety" },
        { "id": 13, "text": "Bilincimde güvendeyim.", type: "certainty" },
        { "id": 14, "text": "Başkalarına örnek olmayı severim.", type: "contribution" },
        { "id": 15, "text": "Rekabetçi ve hırslıyımdır.", type: "significance" },
        { "id": 16, "text": "Sıkılmaktan nefret ederim.", type: "variety" },
        { "id": 17, "text": "İnsanlarla nasıl iletişim kurulacağını bilirim.", type: "connection" },
        { "id": 18, "text": "Gelişmeyi sık sık arzularım.", type: "growth" },
        { "id": 19, "text": "Tehlike benim için hiçbir zaman heyecan verici değildir.", type: "certainty" },
        { "id": 20, "text": "Birçok yakın ilişkimde ben çoğunlukla vericiyimdir.", type: "connection" },
        { "id": 21, "text": "Her zaman yeni öğrenilecek bir şey vardır.", type: "growth" },
        { "id": 22, "text": "Tamamlanmış, başarılmış hissetmeyi severim.", type: "contribution" },
        { "id": 23, "text": "Sıklıkla kendimi değerlendirir, takdir ederim.", type: "significance" },
        { "id": 24, "text": "Bir şeylerin önceden tahmin edilebilir, öngörülebilir olmasını severim.", type: "certainty" },
        { "id": 25, "text": "Birçok insandan daha sevecenimdir", type: "connection" },
        { "id": 26, "text": "Tanınma/Kabul edilme benim için çok önemlidir", type: "significance" },
        { "id": 27, "text": "Gayret sarf etme hissini severim.", type: "variety" },
        { "id": 28, "text": "Fazla para harcamamak konusunda çok dikkatliyimdir.", type: "certainty" },
        { "id": 29, "text": "Eğitim benim için önemlidir.", type: "growth" },
        { "id": 30, "text": "Ben bir liderim.", type: "contribution" },
        { "id": 31, "text": "Her zaman yeni deneyimler ararım.", type: "variety" },
        { "id": 32, "text": "Bazen insanlara yardım etme konusunda kendimi aşarım.", type: "connection" },
        { "id": 33, "text": "Rutinim ve alışkanlıklarım benim için önemlidir", type: "certainty" },
        { "id": 34, "text": "Kim olduğumdan gurur duyarım.", type: "significance" },
        { "id": 35, "text": "Yeni bir şey öğrenmenin perspektifimi değiştirmesini seviyorum.", type: "growth" },
        { "id": 36, "text": "Bazen en önemli iş hayatımızı sürdürmemizi sağlayan (bize ödeme yapılan) iştir. ", type: "contribution" },
        { "id": 37, "text": "Maceracı bir insan değilimdir.", type: "certainty" },
        { "id": 38, "text": "Kimse aptal olduğumu söyleyemez.", type: "connection" },
        { "id": 39, "text": "Limitlerimin üzerinde harcamaya teşebbüs ederim.", type: "variety" },
        { "id": 40, "text": "Önemli hissetmeyi severim.", type: "significance" },
        { "id": 41, "text": "Her başarısızlık bir öğrenme deneyimidir.", type: "growth" },
        { "id": 42, "text": "Öğrenmeyi öğrendiklerimi öğretmek için severim.", type: "contribution" },
        { "id": 43, "text": "İlişkilerimde birlik ve uyum vardır.", type: "connection" },
        { "id": 44, "text": "Farklılık yapmayı severim.", type: "contribution" },
        { "id": 45, "text": "Eylemlerimin tüm neticelerinden emin değilsem eyleme geçmekten sakınırım. ", type: "certainty" },
        { "id": 46, "text": "Engellenmiş hissettiğimde acı çekerim.", type: "growth" },
        { "id": 47, "text": "Belirsizlik, erteleme, endişeden zevk alırım.", type: "variety" },
        { "id": 48, "text": "Prestij benim için çok önemlidir", type: "significance" },
        { "id": 49, "text": "Romantiğimdir", type: "connection" },
        { "id": 50, "text": "Sürekli olarak öğrenirim.", type: "growth" },
        { "id": 51, "text": "Benim için vermek almaktan daha önemlidir.", type: "connection" },
        { "id": 52, "text": "Bir numara olmayı severim.", type: "significance" },
        { "id": 53, "text": "Her çeşit risk almaktan nefret ederim.", type: "certainty" },
        { "id": 54, "text": "Devamlı olarak kendimi geliştirmeyi severim.", type: "growth" },
        { "id": 55, "text": "İyi sebepler için enerjimi ve zamanımı vermeyi severim.", type: "contribution" },
        { "id": 56, "text": "Başkaları tarafından takdir edilmeyi severim.", type: "significance" },
        { "id": 57, "text": "Yeni şeyler öğrenebilme kabiliyetimle gurur duyuyorum.", type: "growth" },
        { "id": 58, "text": "Dünyayı daha iyi bir yer haline getirmek için buradayız.", type: "contribution" },
        { "id": 59, "text": "Farklı alanlarda gelişmeyi ve yetişmeyi severim.", type: "growth" },
        { "id": 60, "text": "Hayatımdaki en önemli şey insanlar arasındaki kişisel ilişkilerdir", type: "connection" },
        { "id": 61, "text": "Bazen göz korkutucu olabiliyorum.", type: "significance" },
        { "id": 62, "text": "Nadir olarak yeni eğlence biçimi ararım.", type: "variety" },
        { "id": 63, "text": "Riskli olabilecek her şey için endişe duyarım.", type: "certainty" },
        { "id": 64, "text": "İşinde başarılı olmak takdir edilmekten daha önemlidir.", type: "contribution" },
        { "id": 65, "text": "Becerilerimi geliştirmek için çabalarım.", type: "growth" },
        { "id": 66, "text": "Para, zaman ve enerjide cömert olan insanlara yakınlık duyuyorum.", type: "connection" },
        { "id": 67, "text": "Harekete geçmeden önce dikkatlice düşünmeyi severim.", type: "certainty" },
        { "id": 68, "text": "Bazen korku deneyiminin heyecanını duymayı severim.", type: "variety" },
        { "id": 69, "text": "Saygı duyulan olmayı hissetmeye ihtiyaç duyarım.", type: "significance" },
        { "id": 70, "text": "Gelişmemiz durduğu zaman biz ölürüz.", type: "growth" },
        { "id": 71, "text": "Birliktelik, beraberlik hissi benim için önemlidir", type: "connection" },
        { "id": 72, "text": "Yaşamın anlamı olması için dünyada yer etmelisin.", type: "contribution" },
        { "id": 73, "text": "Her zaman rahat hissetmek benim için önemlidir.", type: "certainty" },
        { "id": 74, "text": "Birçok farklı aktivitede yer almaktan zevk alırım.", type: "variety" },
        { "id": 75, "text": "Kendimi her zaman başarıyla ilgili konularda başkalarıyla karşılaştırırım.", type: "significance" },
        { "id": 76, "text": "İlişkimde tutku olmasına ihtiyaç duyarım.", type: "connection" },
        { "id": 77, "text": "Eğer diğer insanlara katkıda bulunamazsam hayatım anlamsız olur.", type: "contribution" },
        { "id": 78, "text": "Bir şeye karar verirken, sıklıkla hangisi daha eğlenceli olabilir diye düşünürüm. ", type: "variety" },
        { "id": 79, "text": "Durgun, ruhsuz, tembel hissetmeye dayanamam.", type: "growth" },
        { "id": 80, "text": "Her zaman olabildiğince güvende hissetmeyi severim.", type: "certainty" },
        { "id": 81, "text": "Eğer bir şeye söz verir/teslim olursam, ön me daha iyi bir şeyin çıkabileceğinden ve onu kaçırabileceğimden endişe duyarım. ", type: "variety" },
        { "id": 82, "text": "Hiçbir zaman kaybeden olarak görülmeyi sevmem.", type: "significance" },
        { "id": 83, "text": "Hayatımda fazla istikrar ve denge olmasını çok da takmam.", type: "variety" },
        { "id": 84, "text": "Benim bir misyonum var.", type: "contribution" }
    ];
    var data = null;
    var result = {};

    var _shuffle = function (data) {
        for (var i = data.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }

        return data.map(function (x) { return x });
    };

    var _render = function () {
        if (!data) {
            data = _shuffle(questions);
        }

        var question = data.shift();
        if (question) {
            var $_questionPanel = _createQuestionPanel(question);
            $panel.innerHTML = "";
            $panel.appendChild($_questionPanel);
        }
        else {
            var $_resultPanel = _renderResultPanel(result);
            $panel.innerHTML = "";
            $panel.appendChild($_resultPanel);
        }
    };

    var _reset = function () {
        data = null;
        result = {};
        _render();
    };

    var _createQuestionPanel = function (question) {
        var $_question = document.createElement("div");
        $_question.classList.add("question");
        $_question.classList.add("btn-group");

        var $_questionText = document.createElement("p");
        $_questionText.innerHTML = question["text"];
        $_question.appendChild($_questionText);

        var $_buttonGroup = document.createElement("div");
        $_buttonGroup.setAttribute("data-id", question["id"]);
        $_buttonGroup.setAttribute("data-type", question["type"]);

        var $_buttonLeft = document.createElement("button");
        $_buttonLeft.classList.add("left");
        $_buttonLeft.innerHTML = "Evet";
        $_buttonLeft.setAttribute("data-value", 1);
        $_buttonGroup.appendChild($_buttonLeft);

        var $_buttonMiddle = document.createElement("button");
        $_buttonMiddle.innerHTML = "Kısmen";
        $_buttonMiddle.setAttribute("data-value", 5);
        $_buttonGroup.appendChild($_buttonMiddle);

        var $_buttonRight = document.createElement("button");
        $_buttonRight.classList.add("right");
        $_buttonRight.innerHTML = "Hayır";
        $_buttonRight.setAttribute("data-value", 0);
        $_buttonGroup.appendChild($_buttonRight);

        $_question.appendChild($_buttonGroup);

        $_buttonLeft.addEventListener("click", _clickHandler);
        $_buttonMiddle.addEventListener("click", _clickHandler);
        $_buttonRight.addEventListener("click", _clickHandler);

        return $_question;
    };

    var _clickHandler = function () {
        var $_parent = this.parentElement;
        var type = $_parent.getAttribute("data-type");
        var value = parseInt(this.getAttribute("data-value"));

        if (!result[type]) {
            result[type] = 0;
        }

        result[type] += value;

        _render();
    };

    var _renderResultPanel = function (result) {

        var scores = [];
        for (var type in result) {
            scores.push({ type: type, value: result[type] });
        }

        scores = scores.sort(function (a, b) {
            return b["value"] - a["value"];
        });

        var $_question = document.createElement("div");
        $_question.classList.add("question");
        $_question.classList.add("btn-group");

        for (var i = 0; i < scores.length; i++) {
            var item = scores[i];

            var $_resultText = document.createElement("p");
            $_resultText.innerHTML = Types[item["type"]] + " : " + item["value"];

            if (i === 0) {
                $_resultText.classList.add("first");
            }
            else if (i === 1) {
                $_resultText.classList.add("second");
            }
            else {
                $_resultText.classList.add("others");
            }

            $_question.appendChild($_resultText);
        }

        var $_buttonGroup = document.createElement("div");

        var $_buttonReset = document.createElement("button");
        $_buttonReset.innerHTML = "Anketi Tekrarla";
        $_buttonReset.style.width = "100%";
        $_buttonGroup.appendChild($_buttonReset);

        $_buttonReset.addEventListener("click", _reset);
        $_question.appendChild($_buttonGroup);

        return $_question;
    };

    var Types = Object.freeze({
        "certainty": "Kesinlik",
        "variety": "Çeşitlilik",
        "significance": "Önem / Saygınlık",
        "connection": "Sevgi / Bağlantı",
        "growth": "Gelişme",
        "contribution": "Katkı / Yardım"
    });

    _render();
}());
