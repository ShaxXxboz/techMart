import axios from "axios";

export default class ApiService {
  getResponse = async (url) => {
    const res = await axios.get(`${url}`);

    return await res;
  };

  getModelData = async (model) => {
    switch (model) {
      case "categories": {
        const res = await this.getResponse(
          `http://www.mocky.io/v2/5ea5f68a320000b75aac2873`
        );
        return res.data;
      }
      case "products": {
        const res = await this.getResponse(
          `http://www.mocky.io/v2/5ea5f07f3200005b00ac286a`
        );
        return res.data;
      }
      default: {
        return new Error("Model required");
      }
    }
  };
}
