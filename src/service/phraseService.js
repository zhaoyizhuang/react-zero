import axios from "axios";

const BASE_URL = "https://flaskzzy.herokuapp.com";
const PHRASE_API = `${BASE_URL}/create_phrase`;

export const createTuit = (form) =>
    axios.post(PHRASE_API, form)
        .then(response => response.data);