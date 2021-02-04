const cheerio = require("cheerio");
const request = require("request-promise");

async function init() {
  const $ = await request({
    uri:
      "https://mx.frubana.com/cmx?utm_source=google&utm_medium=cpc&utm_campaign=frubana&utm_content=search",
    transform: (body) => cheerio.load(body),
  });

  const websiteproducts = $("h4");
  console.log(websiteproducts.html());

  const h4 = $(".product-title");
  console.log(h4.html());

  //const websiteproduct = $("product-title");
  //console.log(websiteproduct);
}

init();
