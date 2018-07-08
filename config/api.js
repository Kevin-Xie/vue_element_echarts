const douban  = {
	movie: {
		in_theaters: {
			description: '正在上映',
			url: '/douban/movie/in_theaters?city=zhuhai&count=20'
		},
		top250: {
			description: 'Top 250',
			url: '/douban/movie/top250',
		},
		coming_soon: {
			description: '即将上映',
			url: '/douban/movie/coming_soon',
		}
	}
}

const ele = {

}

const AppKey = 'AEa9a349339b1f99c3f37fd531ab8c8b'
const baiduMap = {
	location: {
		description: 'city level location',
		url: `/baidumap/location/ip?ak=${AppKey}`,
	}
}

export {
	douban,
	ele,
	baiduMap
}