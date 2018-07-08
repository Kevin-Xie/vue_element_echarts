import {douban} from '../../config/api'


export const searchMovies = (text) => {
	return new Promise((resolve, reject) => {
		fetch(douban.movie.search.url + text)
		.then(response => response.json())
		.then(data => resolve(data))
		.catch(err => reject(err))
	})
}


export const suggest = (text) => {
	return new Promise((resolve, reject) => {
		fetch(douban.movie.suggest.url + text)
		.then(response => response.json())
		.then(data => resolve(data))
		.catch(err => reject(err))
	})
}