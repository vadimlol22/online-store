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

  updateItem({ id, quanity }) {
    return mainApi.patch(`${this.#baseUrl}/item`, { id, quanity });
  }

  deleteItem(id) {
    return mainApi.delete(`${this.#baseUrl}/item/${id}`);
  }
}

export default CardService.instance;
