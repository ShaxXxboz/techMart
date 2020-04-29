import axios from "axios";

export default class ApiService {
  getResponse = async (url) => {
    const res = await axios.get(`${url}`);

    return await res;
  };

  sendRequest = async (body) => {
    /*  
   Send post request with data to the server

   let res = await axios.post(`${url}`, {
      body: body,
    }); */

    //Assume we got positive response
    let res = "yes";
    return res;
  };

  getModelData = async (model) => {
    switch (model) {
      case "categories": {
        const res = await this.getResponse(
          `https://5ea845bf35f3720016608ca4.mockapi.io/api/categories`
        );
        return res.data;
      }
      case "products": {
        const res = await this.getResponse(
          `https://5ea845bf35f3720016608ca4.mockapi.io/api/products`
        );
        return res.data;
      }
      default: {
        return new Error("Model required");
      }
    }
  };
}
