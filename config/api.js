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
			url: 'douban/movie/coming_soon',
		}
	}
}

const ele = {

}


export {
	douban,
	ele,
}