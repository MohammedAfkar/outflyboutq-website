var url = "https://wa.me/916238269962?text=";

var product1 = {
    Productlink: "https://www.instagram.com/p/CxdYEehPl3R/?igshid=MzRlODBiNWFlZA==",
    productname: "Flower Hair Clip",
    ActualPrice: "35Rs/pair",
    Offprice: "28Rs/pair"
};

var product2 = {
    Productlink: "https://www.instagram.com/p/CxdYEehPl3R/?igshid=MzRlODBiNWFlZA==",
    productname: "Flower Hair Clip",
    ActualPrice: "35Rs/pair",
    Offprice: "28Rs/pair"
};

var product3 = {
    Productlink: "https://www.instagram.com/p/CxdYEehPl3R/?igshid=MzRlODBiNWFlZA==",
    productname: "Flower Hair Clip",
    ActualPrice: "35Rs/pair",
    Offprice: "28Rs/pair"
};

var product4 = {
    Productlink: "https://www.instagram.com/p/CxdYEehPl3R/?igshid=MzRlODBiNWFlZA==",
    productname: "Flower Hair Clip",
    ActualPrice: "35Rs/pair",
    Offprice: "28Rs/pair"
};

var product5 = {
    Productlink: "https://www.instagram.com/p/CxdYEehPl3R/?igshid=MzRlODBiNWFlZA==",
    productname: "Flower Hair Clip",
    ActualPrice: "35Rs/pair",
    Offprice: "28Rs/pair"
};

var product6 = {
    Productlink: "https://www.instagram.com/p/CxdYEehPl3R/?igshid=MzRlODBiNWFlZA==",
    productname: "Flower Hair Clip",
    ActualPrice: "35Rs/pair",
    Offprice: "28Rs/pair"
};

function send(pno){
   var msg = url + 
   "*Product info:* " + pno.Productlink + "%0a" +
   "*product name:* "+ pno.productname + "%0a" +
   "*Price:* " + "~"+pno.ActualPrice+"~" + "%0a" +
   "*Offer Price:* "+ pno.Offprice;
  window.open(msg, '_blank').focus();
}