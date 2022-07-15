const checkRooms = new Promise ((resolve, reject) => {
	setTimeout(() => {
		console.log('Проверяем номера в отеле...');

		const availableRooms = true;

		if (availableRooms) {
			let message = 'Номера в отеле имеются!';
			resolve(message);
		} else {
			let message = 'Номера в отеле отсутствуют...';
			reject(message);
		}
	}, 1500);
}).then((data) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('----- then 1 -----');

			console.log('Ответ:', data);

			console.log('Проверяем авиабилеты...');

			const availableTickets = true;
	
			if (availableTickets) {
				let message = 'Билеты имеются!';
				resolve(message);
			} else {
				let message = 'Билеты отсутствуют...';
				reject(message);
			}
		}, 1500);
	});
}).then((data) => {
	setTimeout(() => {
		console.log('----- then 2 -----');

		console.log('Ответ:', data);

		console.log('Едем в отпуск! :)');
	}, 2000);
}).catch((data) => {
	setTimeout(() => {
		console.log('---- catch ----');

		console.log('Ответ:', data);

		console.log('Не едем в отпуск... :(');
	}, 2000);
});