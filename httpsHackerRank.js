const https = require("https");

function paginated_fetch(url, page = 1, previousResponse = []) {
  return get(`${url}&page=${page}`).then((newResponse) => {
    const response = [...previousResponse, ...newResponse]; // Combine the two arrays

    if (newResponse.length !== 0) {
      page++;

      return paginated_fetch(url, page, response);
    }

    return response;
  });
}

const get = (url) => {
  new Promise((resolve, reject) => {
    https
      .get(url, (resp) => {
        let data = "";
        resp.setEncoding("utf-8");
        // A chunk of data has been recieved.
        resp.on("data", (chunk) => {
          data += chunk;
        });
        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          if (data.length !== 0) {
            resolve(data);
          }
        });
      })
      .on("error", (err) => {
        reject("Error: " + err.message);
      });
  });
};

async function getRelevantFoodOutlets(city) {
  const apiUrl = "https://jsonmock.hackerrank.com/api/food_outlets?";
  let url = apiUrl + `&city=${city}`;
  const finalData = paginated_fetch(url);
  console.log(finalData.length);
}

getRelevantFoodOutlets("Denver");
