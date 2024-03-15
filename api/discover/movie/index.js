var tmdbUrl = "https://api.themoviedb.org"
const axios = require('axios');
const url = require('url');
const querystring = require('querystring');
const common = require('../../../utility/common.js')

// const apiKey = process.env.TMDB_API_KEY;

module.exports = async (req, res) => {
  const { url: requestUrl, body } = req;
  const parsedUrl = url.parse(requestUrl);
  const query = querystring.parse(parsedUrl.query);
  if(!isObjectEmpty(body))
  {
      tmdbUrl = `https://api.themoviedb.org/3/discover/movie\
?include_adult=${body.include_adult}\
&language=${body.language}\
&page=${body.page}\
&sort_by=${body.sort_by}\
&api_key=${common.apiKey}`;
  }else if(!isObjectEmpty(query)){
      tmdbUrl = `https://api.themoviedb.org/3/discover/movie\
?include_adult=${query.include_adult}\
&language=${query.language}\
&page=${query.page}\
&sort_by=${query.sort_by}\
&api_key=${common.apiKey}`;
  }else{
      tmdbUrl=`https://api.themoviedb.org/3/discover/movie?api_key=${common.apiKey}`
  }
  try {
    const response = await axios.get(tmdbUrl);
    res.send(response.data);
  } catch (error) {
    res.status(500).send(`Error fetching data from TMDb API
      tmdbUrl:${tmdbUrl}
      body:${body}
      query:${query}
      is Body empty:${common.isObjectEmpty(body)}
      is query empty:${common.isObjectEmpty(query)}
      `);
  }
};


