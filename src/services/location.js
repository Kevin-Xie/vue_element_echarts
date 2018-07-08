import {baiduMap} from '../../config/api'


// export const getAddress = () => {
// 	return new Promise((resolve, reject) => {
// 		fetch(baiduMap.location.url)
//       	.then(response => response.json())
//       	.then(data => resolve(data))
//       	.catch(err => reject(err))
// 	})
// }


/**
 * get address by IP
 */
export const getAddress = async() => {
	try {
		let response = await fetch(baiduMap.location.url);
		let responseJson = await response.json();
		return responseJson;
	}
	catch(err) {
		throw new Error(err);
	}
}