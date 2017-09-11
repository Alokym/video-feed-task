export default class AppService {
	constructor($http) {
		this.http = $http
	}

    fetchVideoFeed() {
        return this.http.get('https://cdn.playbuzz.com/content/feed/items')
	    	.then(res => res.data.items);
    }
}