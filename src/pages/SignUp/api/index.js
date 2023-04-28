import { mainApi } from "../../../config/mainApi";

export const signUp = (body) => mainApi.post("/auth/signup", body);
