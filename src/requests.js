const key = process.env.REACT_APP_API_KEY;
const requests = {
  vedios: `videos?part=snippet&part=player&chart=mostPopular&key=${key}&maxResults=20`,
  search: `search?part=snippet&order=viewCount&q=amazon%20clone&key=${key}&maxResults=20`,
};

export default requests;
