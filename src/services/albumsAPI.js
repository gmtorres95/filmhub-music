import axios from 'axios';

import { sendRefreshAlert } from '../utils/sendAlertUtil';
import { orderByGenre } from '../utils/orderByGenre';

const apiURL = `http://localhost:4000`;

function getAlbums(setAlbums, setGenres, top = 50) {
  axios.get(`${apiURL}/${top}`)
    .then((resp) => orderByGenre(resp.data.feed.results, setAlbums, setGenres))
    .catch((err) => sendRefreshAlert());
}

export {
  getAlbums,
}
