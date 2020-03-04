// Ð”ÑÐ»Ð³ÑÑ†Ñ‚ÑÐ¹ Ð°Ð¶Ð¸Ð»Ð»Ð°Ñ… ÐºÐ¾Ð½Ñ‚Ñ€Ð¾Ð»Ð»ÐµÑ€
var uiController = (function() {
  var DOMstrings = {
    inputDirect: ".add__direct",
    inputUridchilgaa: ".add__uridchilgaa",
    inputSalary: ".add__salary",
    inputUndsen: ".add__undsentsag",
    inputIlvv: ".add__ilvvtsag",
    inputBayriin: ".add__bayriintsag",
    addNiit: ".budget__value",
    addtsalin: ".budget__gartolgoh--value",
    addNd: ".budget__nd--value",
    addHaoat: ".budget__haoat--value",
    addUridchilgaa: ".budget__uridchilgaa--value",
    addBtn: ".add__btn",
    dateLabel: ".budget__title--month",
    news: ".news_value",
    list: ".news_list"
  };

  var formatMoney = function(too) {
    too = "" + too;
    var x = too
      .split("")
      .reverse()
      .join("");
    var y = "";
    var count = 1;

    for (var i = 0; i < x.length; i++) {
      y = y + x[i];

      if (count % 3 === 0) y = y + ",";
      count++;
    }

    var z = y
      .split("")
      .reverse()
      .join("");

    if (z[0] === ",") z = z.substr(1, z.length - 1);
    return z;
    console.log(z);
  };

  return {
    medee: function(a, b, c, d, e) {
      this.a = a;
      console.log(a);
      this.b = b;
      this.c = c;
      this.d = d;
      this.e = e;
      console.log(a);
      document.querySelector(DOMstrings.addNiit).textContent = formatMoney(a);
      document.querySelector(DOMstrings.addtsalin).textContent = formatMoney(b);
      document.querySelector(DOMstrings.addNd).textContent =
        "- " + formatMoney(c);
      document.querySelector(DOMstrings.addHaoat).textContent =
        "- " + formatMoney(d);
      document.querySelector(DOMstrings.addUridchilgaa).textContent =
        "- " + formatMoney(e);
      if (b > 1500000) {
        document.querySelector(DOMstrings.news).textContent =
          "Анд бурзайжээ айн";
      } else {
        document.querySelector(DOMstrings.news).textContent =
          "Ийм цалингаар яаж амьдарна аа. Алив ахдаа дансаа";
      }
      document.querySelector(DOMstrings.list).textContent =
        "Нийт " +
        a +
        " цалин бодогдсон байна. Үүнээс нийгмийн даатгалд " +
        c +
        " төгрөг суутгаад, дараа нь ХАОАТ " +
        d +
        " төгрөг суутгаад урьдчилгаа " +
        e +
        " төгрөг суутгаад таны гарт " +
        b +
        " төгрөг дансанд чинь оржээ.";
    },

    //format

    displayDate: function() {
      var unuudur = new Date();

      document.querySelector(DOMstrings.dateLabel).textContent =
        unuudur.getFullYear() + " оны " + unuudur.getMonth() + " сарын ";
    },
    getInput: function() {
      return {
        indirect: document.querySelector(DOMstrings.inputDirect).value,
        uridchilgaa: document.querySelector(DOMstrings.inputUridchilgaa).value,
        salary: document.querySelector(DOMstrings.inputSalary).value,
        undsen: document.querySelector(DOMstrings.inputUndsen).value,
        ilvv: document.querySelector(DOMstrings.inputIlvv).value,
        bayriin: document.querySelector(DOMstrings.inputBayriin).value
      };
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

// tsalin tsootsooloh
var financeController = (function() {})();

// ÐŸÑ€Ð¾Ð³Ñ€Ð°Ð¼Ñ‹Ð½ Ñ…Ð¾Ð»Ð±Ð¾Ð³Ñ‡ ÐºÐ¾Ð½Ñ‚Ñ€Ð¾Ð»Ð»ÐµÑ€
var appController = (function(uiController, financeController) {
  var ctrlAddItem = function() {
    var niitTsalin = 0;
    var gartOlgoh = 0;
    var nd = 0;
    var haoat = 0;
    var uridchilgaa = 0;
    var a = uiController.getInput().undsen;
    var b = uiController.getInput().ilvv;
    var c = uiController.getInput().bayriin;

    var undsenTsalin = a * uiController.getInput().salary;
    var ilvvTsalin = b * (uiController.getInput().salary * 1.5);
    var huvi = (uiController.getInput().salary * 13) / 100;
    var heeriin = huvi * a;

    var heviin = (Number(a) + Number(b) + Number(c)) * huvi;
    //   huvi *

    var bayr =
      uiController.getInput().bayriin * (uiController.getInput().salary * 2);
    if (uiController.getInput().indirect === "direct") {
      niitTsalin = Math.ceil(
        undsenTsalin + ilvvTsalin + heeriin + heviin + bayr
      );
    } else {
      niitTsalin = Math.ceil(undsenTsalin + ilvvTsalin + heeriin + bayr);
    }
    if (niitTsalin > 5000000) {
      nd = 264000;
    } else {
      nd = Math.ceil((niitTsalin * 11.5) / 100);
    }
    haoat = Math.ceil(((niitTsalin - nd) * 10) / 100);
    if (uiController.getInput().uridchilgaa === "avsan") {
      uridchilgaa = 200000;
    } else {
      uridchilgaa = 0;
    }
    gartOlgoh = niitTsalin - nd - haoat - uridchilgaa;
    uiController.medee(niitTsalin, gartOlgoh, nd, haoat, uridchilgaa);
  };

  var setupEventListeners = function() {
    var DOM = uiController.getDOMstrings();

    document.querySelector(DOM.addBtn).addEventListener("click", function() {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  return {
    init: function() {
      uiController.displayDate();
      console.log("Application started...");
      setupEventListeners();
    }
  };
})(uiController, financeController);

appController.init();
