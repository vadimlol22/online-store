import { mainApi } from "../../../config/mainApi";

class CardService {
  static instance = new CardService();

  #baseUrl = "/cart";

  getItems() {
    return mainApi.get(this.#baseUrl);
  }

  addItem(item) {
    return mainApi.post(`${this.#baseUrl}/item`, item);
  }

  updateItem({ id, quantity }) {
    return mainApi.patch(`${this.#baseUrl}/item`, { id, quantity });
  }

  deleteItem(id) {
    return mainApi.delete(`${this.#baseUrl}/item/${id}`);
  }

  order({ customerId, totalPrice, itemsList }) {
    return mainApi.post("/order", { customerId, totalPrice, itemsList });
  }
}

export default CardService.instance;
