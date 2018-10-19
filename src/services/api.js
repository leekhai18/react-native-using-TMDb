let searchURL = 'https://api.themoviedb.org/3/search/movie?api_key=17f6831d45ca4b247f70bacc000e2d7a';
let movieDetailURLpre = 'https://api.themoviedb.org/3/movie/';
let movieDetailURLpost = '?api_key=17f6831d45ca4b247f70bacc000e2d7a&language=en-US';
exports.imageURL = 'https://image.tmdb.org/t/p/w500';

exports.search = function (query) {
    if (query == '')
        query = '2018';

    let url = `${searchURL}&query=${query}`;

    return fetch(url)
        .then((resp) => {
            return resp.json();
        })
        .then((json) => {
            return json.results;
        });
}

exports.getDetailMovie = function (id) {
    let url = `${movieDetailURLpre}${id}${movieDetailURLpost}`;
    return fetch(url)
        .then((resp) => {
            return resp.json();
        })
        .then((json) => {
            return json;
        });
}