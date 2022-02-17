import axios from 'axios';

import { sendRefreshAlert } from '../utils/sendAlertUtil';

const top = 50;
const apiURL = `https://rss.applemarketingtools.com/api/v2/us/music/most-played/${top}/albums.json`;

function getAlbuns(setAlbuns) {
  axios(apiURL)
    .then((resp) => setAlbuns(resp.data))
    .catch((err) => sendRefreshAlert());
}

export {
  getAlbuns,
}
