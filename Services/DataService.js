import axios from "axios";

export function postData(data) {
  const config = {
    method: "post",
    url: "http://127.0.0.1:8000/api/data",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  console.log("config", config);
  axios(config)
    .then(function (response) {
      console.log("ir ok ", JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log("nav ok ");
      console.log(error);
    });
}
