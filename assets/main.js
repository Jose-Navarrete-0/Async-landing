const API = 'https://tiktok-api23.p.rapidapi.com/api/user/posts?secUid=MS4wLjABAAAArS8VsxFnFJUX56aSJz25Fb60o9fYN0-VVZtpAypKVcvS8TKYAC_izsYfFDCw_hUM&count=9&cursor=0';
const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5fb005fa49msh5dab2679540a8e3p1f0dd8jsn91c11b0329dd',
		'x-rapidapi-host': 'tiktok-api23.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data
}

(async () => {
	try {
		const videos = await fetchData(API)
		console.log(videos)
		let view = `
		${videos.data.itemList.map(video => {
			const videoUrl = `https://www.tiktok.com/@${video.author.uniqueId}/video/${video.id}`;
			return `
			<a href="${videoUrl}" target="_blank" rel="noopener noreferrer"
				class="group relative p-2 block">
					<div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
						<img src="${video.video.cover}" alt="${video.desc}" class="w-full rounded-lg" />
					</div>
				<div class="mt-2 text-center">
					<h3 class="text-sm font-semibold text-gray-700">
						${video.desc || "Sin título"}
					</h3>
				</div>
			</a>
			`
		}).join('')}
		`

		content.innerHTML = view
	} catch (error){
		console.log(error);
		
	}
})();



