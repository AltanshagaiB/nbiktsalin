// Ð”ÑÐ»Ð³ÑÑ†Ñ‚ÑÐ¹ Ð°Ð¶Ð¸Ð»Ð»Ð°Ñ… ÐºÐ¾Ð½Ñ‚Ñ€Ð¾Ð»Ð»ÐµÑ€
var uiController = (function () {
  var DOMstrings = {
    inputDirect: ".add__direct",
    inputUridchilgaa: ".add__uridchilgaa",
    inputSalary: ".add__salary",
    inputNemeltTsalin: ".add__nemeltsalary",
    inputUndsen: ".add__undsentsag",
    inputIlvv: ".add__ilvvtsag",
    inputNight: ".add__nighttsag",
    inputBayriin: ".add__bayriintsag",
    addNiit: ".budget__value",
    addtsalin: ".budget__gartolgoh--value",
    addNd: ".budget__nd--value",
    addHaoat: ".budget__haoat--value",
    addUridchilgaa: ".budget__uridchilgaa--value",
    addBtn: ".add__btn",
    dateLabel: ".budget__title--month",
    news: ".news_value",
    list: ".news_list",
    addEmd: ".budget__emd--value",
  };

  var formatMoney = function (too) {
    too = "" + too;
    var x = too.split("").reverse().join("");
    var y = "";
    var count = 1;

    for (var i = 0; i < x.length; i++) {
      y = y + x[i];

      if (count % 3 === 0) y = y + ",";
      count++;
    }

    var z = y.split("").reverse().join("");

    if (z[0] === ",") z = z.substr(1, z.length - 1);
    // var h = z.length - 1;
    // if (z[h] === ",") z = z.substr(1, h - 1);
    return z;
    console.log(z);
  };

  return {
    medee: function (a, b, c, d, e, f, und, ilv, hee, hev, bay, emd, nem) {
      // a niit tsalin, b gart olgoh, c Niigmiin daatgal, d HAOAT, e uridchilgaa, f shoniin nemegdel, emd eruul mendiin daatgal
      this.a = a;
      console.log(a);
      this.b = b;
      this.c = c;
      this.d = d;
      this.e = e;
      this.und = und;
      this.ilv = ilv;
      this.hee = hee;
      this.hev = hev;
      this.bay = bay;
      this.emd = emd;
      this.nem = nem;
      this.f = f;
      console.log(a);
      document.querySelector(DOMstrings.addNd).textContent =
        "- " + formatMoney(c);
      document.querySelector(DOMstrings.addHaoat).textContent =
        "- " + formatMoney(d);
      document.querySelector(DOMstrings.addNiit).textContent = formatMoney(a);
      document.querySelector(DOMstrings.addtsalin).textContent = formatMoney(b);
      // document.querySelector(DOMstrings.addNd).textContent =
      //   "- " + formatMoney(c);
      // document.querySelector(DOMstrings.addHaoat).textContent =
      //   "- " + formatMoney(d);
      document.querySelector(DOMstrings.addUridchilgaa).textContent =
        "- " + formatMoney(e);
      if (b > 1500000) {
        document.querySelector(DOMstrings.news).textContent =
          "Энд гарсан мөнгөн дүн нь яг ийм цалин авна гэсэн баримт биш болно. Үнэхээр эргэлзээтэй байвал санхүүгийн албатай холбогдоно уу";
      } else {
        document.querySelector(DOMstrings.news).textContent =
          "Энд гарсан мөнгөн дүн нь яг ийм цалин авна гэсэн баримт биш болно. Үнэхээр эргэлзээтэй байвал санхүүгийн албатай холбогдоно уу";
      }
      document.querySelector(DOMstrings.list).textContent =
        "Энгийн цаг " +
        formatMoney(und) +
        " , Илүү цаг " +
        formatMoney(ilv) +
        " , Шөнийн нэмэгдэл " +
        formatMoney(f) +
        " , Баярын цаг " +
        formatMoney(bay) +
        " , Хээрийн нэмэгдэл " +
        formatMoney(hee) +
        " , Хэвийн бус " +
        formatMoney(hev) +
        " , Нэмэлт цалин " +
        formatMoney(nem) +
        " нийт " +
        formatMoney(a) +
        " цалин бодогдсон байна. Үүнээс Нийгмийн даатгал болон Эрүүл мэндийн даатгал нийлээд 12.5% буюу " +
        formatMoney(c) +
        " төгрөг суутгаад, Хүн амын орлогын албан татварт 10% буюу " +
        formatMoney(d) +
        // " төгрөг суутгаад, дараа нь ХАОАТ " +
        // formatMoney(d) +
        " төгрөг суутгаад, урьдчилгаа " +
        formatMoney(e) +
        " төгрөг суутгаад таны гарт " +
        formatMoney(b) +
        " төгрөг шилжихээр байна.";
    },

    //format

    displayDate: function () {
      var unuudur = new Date();

      document.querySelector(DOMstrings.dateLabel).textContent = "";
    },
    getInput: function () {
      return {
        indirect: document.querySelector(DOMstrings.inputDirect).value,
        uridchilgaa: document.querySelector(DOMstrings.inputUridchilgaa).value,
        salary: document.querySelector(DOMstrings.inputSalary).value,
        nemelt: document.querySelector(DOMstrings.inputNemeltTsalin).value,
        undsen: document.querySelector(DOMstrings.inputUndsen).value,
        ilvv: document.querySelector(DOMstrings.inputIlvv).value,
        night: document.querySelector(DOMstrings.inputNight).value,
        bayriin: document.querySelector(DOMstrings.inputBayriin).value,
      };
    },

    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

// tsalin tsootsooloh
var financeController = (function () {})();

// tsalin bodoh
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    var niitTsalin = 0;
    var gartOlgoh = 0;
    var nd = 0;
    var haoat = 0;
    var uridchilgaa = 0;
    var emd = 0;
    var a = uiController.getInput().undsen;
    var b = uiController.getInput().ilvv;
    var c = uiController.getInput().bayriin;
    var f = uiController.getInput().night;
    var nem = Math.ceil(uiController.getInput().nemelt);
    var undsenTsalin = Math.ceil(a * uiController.getInput().salary);
    console.log(undsenTsalin, nem);
    var ilvvTsalin = Number(b) * (uiController.getInput().salary * 1.5);
    var huvi = (uiController.getInput().salary * 13) / 100;
    var heeriin = Math.ceil(huvi * (Number(a) + Number(f)));

    var heviin = Math.ceil(
      (Number(a) + Number(b) + Number(c) + Number(f)) * huvi
    );
    //   huvi *
    var shono = Math.ceil(f * (uiController.getInput().salary * 1.15));
    var bayr = Math.ceil(
      uiController.getInput().bayriin * (uiController.getInput().salary * 2)
    );
    if (uiController.getInput().indirect === "direct") {
      niitTsalin = Math.ceil(
        undsenTsalin + ilvvTsalin + heeriin + heviin + shono + bayr + nem
      );
      console.log(undsenTsalin, ilvvTsalin, heeriin, heviin, shono, bayr, nem);
    } else {
      niitTsalin = Math.ceil(
        undsenTsalin + ilvvTsalin + heeriin + shono + bayr + nem
      );
      console.log(undsenTsalin, ilvvTsalin, heeriin, shono, bayr, nem);
      heviin = 0;
    }
    if (niitTsalin > 50000000) {
      nd = 264000;
    } else {
      nd = Math.ceil((niitTsalin * 10.5) / 100);
    }
    haoat = Math.ceil(((niitTsalin - nd) * 10) / 100);
    if (uiController.getInput().uridchilgaa === "avsan") {
      uridchilgaa = 200000;
    } else {
      uridchilgaa = 0;
    }
    emd = Math.ceil(((niitTsalin - nd) * 2) / 100);
    gartOlgoh = niitTsalin - nd - haoat - uridchilgaa;
    // gartOlgoh = niitTsalin - nd - haoat - uridchilgaa;
    uiController.medee(
      niitTsalin,
      gartOlgoh,
      nd,
      haoat,
      uridchilgaa,
      shono,
      undsenTsalin,
      ilvvTsalin,
      heeriin,
      heviin,
      bayr,
      emd,
      nem
    );
  };

  var setupEventListeners = function () {
    var DOM = uiController.getDOMstrings();

    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  return {
    init: function () {
      uiController.displayDate();
      console.log("Application started...");
      setupEventListeners();
    },
  };
})(uiController, financeController);

appController.init();
