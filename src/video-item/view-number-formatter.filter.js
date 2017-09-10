const ViewsFilter = () => {
	return (input) => {
		const numOfViews = Number(input);
		let formattedNumOfViews;

		if (isNaN(numOfViews) || numOfViews < 0) {
			return 'Unknown number of views'
		} 

		if (numOfViews > 1000000) {
			formattedNumOfViews = (numOfViews / 1000000).toFixed(1) + 'M'
		} else if (numOfViews > 1000) {
			formattedNumOfViews = (numOfViews / 1000).toFixed(1) + 'K'
		} else {
			formattedNumOfViews = String(numOfViews)
		}

		return `${formattedNumOfViews} views`;
	}
}

export default ViewsFilter;