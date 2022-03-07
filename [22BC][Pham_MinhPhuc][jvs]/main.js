document.getElementById("btnKQcanhhuyen").onclick = function() {
    var a = document.getElementById("txtCanh1").value * 1;
    var b = document.getElementById("txtCanh2").value * 1;
    var c = Math.sqrt(a * a + b * b);
    var d = ("ket qua la: ") + c;
    console.log(a, b, c, d);
    document.getElementById("KQCanhHuyen").innerHTML = (d);
};

document.getElementById("btn-3kyso").onclick = function() {
    var kyso = document.getElementById("txt-Number1").value * 1;
    a = Math.floor(kyso / 100);
    h = kyso % 100;
    b = Math.floor(h / 10);
    c = kyso % 10;
    d = ("tong ky so la: ") + (a + b + c);
    console.log(kyso, a, b, c, d);
    document.getElementById("KQ-3kyso").innerHTML = (d);
}