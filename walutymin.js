$(document).ready(function() {
    function t() {
        $.ajax({
            url: n + s + "?format=json",
            method: "GET",
            success: a
        })
    }

    function a(t) {
        o = $("#kwotadoprzeliczenia").val();
        var a = t.rates[0].mid,
            c = o / a,
            l = t.rates[0].effectiveDate,
            e = t.currency,
            i = t.code,
            s = ' \t\t\t        <div class="row"> \t\t\t        \t<div class="col-lg-12"> \t\t\t                <p> Waluta: ' + e + ' </p> \t\t\t            </div> \t\t\t            <div class="col-lg-12"> \t\t\t                <p> Kwota: ' + c.toFixed(2) + " " + i + ' </p> \t\t\t            </div> \t\t\t            <div class="col-lg-12"> \t\t\t                <p>Kurs: ' + a + '</p> \t\t\t            </div> \t\t\t            <div class="col-lg-12"> \t\t\t                <p>Kurs z dnia: ' + l + "</p> \t\t\t            </div> \t\t\t            \t\t\t        </div>";
        $("#calcvalate-result").append(s)
    }

    function c() {
        $.ajax({
            url: "http://api.nbp.pl/api/exchangerates/tables/a/?format=json",
            method: "GET",
            success: l
        })
    }

    function l(t) {
        o = $("#kwotadoprzeliczenia").val();
        var a = t[0].rates,
            c = t[0].effectiveDate,
            l = a.filter(function(t) {
                return t.code === d
            })[0],
            e = a.filter(function(t) {
                return t.code === s
            })[0],
            i = l.mid / e.mid * o,
            n = ' \t\t\t        <div class="row"> \t\t\t        \t<div class="col-lg-12"> \t\t\t                <p> Waluta: ' + e.currency + ' </p> \t\t\t            </div> \t\t\t            <div class="col-lg-12"> \t\t\t                <p> Kwota: ' + i.toFixed(2) + " " + e.code + ' </p> \t\t\t            </div> \t\t\t            \t\t\t            <div class="col-lg-12"> \t\t\t                <p>Kurs z dnia: ' + c + "</p> \t\t\t            </div> \t\t\t            \t\t\t        </div>";
        $("#calcvalate-result").append(n)
    }

    function e() {
        $.ajax({
            url: n + d + "?format=json",
            method: "GET",
            success: i
        })
    }

    function i(t) {
        o = $("#kwotadoprzeliczenia").val();
        var a = t.rates[0].mid,
            c = o * a,
            l = t.rates[0].effectiveDate,
            e = ' \t\t\t        <div class="row"> \t\t\t        \t<div class="col-lg-12"> \t\t\t                <p> Waluta: polski zĹoty </p> \t\t\t            </div> \t\t\t            <div class="col-lg-12"> \t\t\t                <p> Kwota: ' + c.toFixed(2) + ' PLN </p> \t\t\t            </div> \t\t\t            <div class="col-lg-12"> \t\t\t                <p>Kurs: ' + a + '</p> \t\t\t            </div> \t\t\t            <div class="col-lg-12"> \t\t\t                <p>Kurs z dnia: ' + l + "</p> \t\t\t            </div> \t\t\t            \t\t\t        </div>";
        $("#calcvalate-result").append(e)
    }
    var o, s, d, n = "http://api.nbp.pl/api/exchangerates/rates/a/";
    $("#calcvalue").on("click", function(a) {
        s = $("#convert-to").val(), "pln" === (d = $("#convert-from").val()) ? t() : "pln" === s ? e() : c()
    }), $("#calcvalue-claer").on("click", function(t) {
        $("#calcvalate-result").empty()
    })
});