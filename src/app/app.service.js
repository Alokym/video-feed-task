//TOOD MP: make module name generic?
//TODO MP: add eslint
//TODO MP: revisit all code to make it ecmascript
//TODO MP: play around with services

export default class AppService {
	constructor($http) {
		this.http = $http
	}

    fetchVideoFeed() {
    	//TODO MP: can we write the function without return?
        return this.http.get('https://cdn.playbuzz.com/content/feed/items')
	    	.then(res => res.data.items);
    }
}