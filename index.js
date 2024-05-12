/*

Automated Teller Machine - ATM 

1-Balans' ı Göstərmə
2-Pul Çəkmə 
3-Pul Yatırma
4-Çıxış

*/


let yeniSətir = "\r\n";
let balans = 1000;


let mətn = "1-Balans' ı Göstərmə " + yeniSətir
    + "2-Pul Çəkmə" + yeniSətir
    + "3-Pul Yatırma" + yeniSətir
    + "4-Çıxış" + yeniSətir
    + "Zəhmət olmasa bir dəyər seçin";

// alert(mətn);

let seçim = prompt(mətn);

switch (seçim) {

    case "1":
        alert("Balansınız : " + balans + " AZN ");
        console.log("Balansınız : " + balans + " AZN ");
        break;

    case "2":
        let çəkiləcəkMəbləğ = Number(prompt("Çəkmək istədiyiniz məbləği yazın :"));

        if (çəkiləcəkMəbləğ < balans) {

            //Uğurludur
            balans = balans - çəkiləcəkMəbləğ;

            alert("Qalan balans : " + balans + " AZN ");
            console.log("Qalan balans : " + balans + " AZN ");
        }
        else {
            alert("Balansınızdan artığ pul çəkə bilməzsiniz!" + yeniSətir
                + "Balansınız : " + balans + " " + " AZN - " + "Çəkmək istədiyiniz məbləğ : " + çəkiləcəkMəbləğ + " AZN ");

            console.log("Balansınızdan artığ pul çəkə bilməzsiniz!" + yeniSətir
                + "Balansınız : " + balans + " " + " AZN - " + "Çəkmək istədiyiniz məbləğ : " + çəkiləcəkMəbləğ + " AZN ");
        }
        break;

    case "3":
        let yatırılacağMəbləğ = Number(prompt("Yatırılacağ məbləği yazın :"));

        balans = balans + yatırılacağMəbləğ;
        alert("Hazırkı balansınız : " + balans + " AZN ");
        console.log("Hazırkı balansınız : " + balans + " AZN ");
        break;

    case "4":
        alert("Sistemden çıxış edilmişdir...");
        console.log("Sistemden çıxış edilmişdir...");
        break;

    default:
        alert("Zəhmət olmasa 1 ilə 4 arasında dəyər daxil edin !");
        console.log("Zəhmət olmasa 1 ilə 4 arasında dəyər daxil edin !");
        break;
}