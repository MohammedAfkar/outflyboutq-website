var url = "https://wa.me/916238269962?text=";

var product1 = {
    Productlink: "https://www.instagram.com/p/CxdYEehPl3R/?igshid=MzRlODBiNWFlZA==",
    productname: "Flower Hair Clip",
    ActualPrice: "35Rs/pair",
    Offprice: "28Rs/pair"
};

var product2 = {
    Productlink: "https://www.instagram.com/p/CxchWyGPQKZ/?igshid=MzY1NDJmNzMyNQ==",
    productname: "Hair Bun",
    ActualPrice: "20Rs/pair",
    Offprice: "16Rs/pair"
};

var product3 = {
    Productlink: "https://www.instagram.com/p/Cx5jneCvOF_/?igshid=MzY1NDJmNzMyNQ==",
    productname: "Hair band - beads",
    ActualPrice: "50Rs/pair",
    Offprice: "40Rs/pair"
};

var product4 = {
    Productlink: "https://www.instagram.com/p/Cy-sUL6vUnT/?igshid=MzY1NDJmNzMyNQ==",
    productname: "Hair band - cloth",
    ActualPrice: "50Rs/pair",
    Offprice: "40Rs/pair"
};

var product5 = {
    Productlink: "https://www.instagram.com/p/Cx5RcpBv3DK/?igshid=MzY1NDJmNzMyNQ==",
    productname: "Hair comb pin",
    ActualPrice: "60Rs/pair",
    Offprice: "45Rs/pair"
};

var product6 = {
    Productlink: "https://www.instagram.com/p/CzTLMYmPXNp/?igshid=MzY1NDJmNzMyNQ==",
    productname: "Hair Bow",
    ActualPrice: "60Rs/pair",
    Offprice: "45Rs/pair"
};

function send(pno){
   var msg = url + 
   "*Product info:* " + pno.Productlink + "%0a" +
   "*product name:* "+ pno.productname + "%0a" +
   "*Price:* " + "~"+pno.ActualPrice+"~" + "%0a" +
   "*Offer Price:* "+ pno.Offprice;
  window.open(msg, '_blank').focus();
}