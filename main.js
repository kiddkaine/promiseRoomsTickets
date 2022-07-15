function successCheck (data) {

	console.log('Ответ от сервера:', data);

	console.log('Едем в отпуск! :)');

}

function failedCheck (data) {

	console.log('Ответ от сервера:', data);

	console.log('Не едем в отпуск... :(');

}

const checkData = new Promise ((resolve, reject) => {

	console.log('Ассинхронная проверка данных Promise');

	console.log('--- Проверка номеров в отеле ---');

	setTimeout(() => {
		const response = true;

		if (response) {
			let message = 'Номера в отеле имеются!';
			resolve(message);
		} else {
			let message = 'Номера в отеле отсутствуют...';
			reject(message);
		}
	}, 1000);

}).then((data) => {

	console.log('Ответ от сервера:', data);

	console.log('--- Проверка авиабилетов ---');

	return new Promise ((resolve, reject) => {

		setTimeout(() => {

			const response = true;

			if (response) {
				let message = 'Авиабилеты имеются!';
				resolve(message);
			} else {
				let message = 'Авиабилеты отсутствуют...';
				reject(message);
			}
		}, 2000);
		
	});

}).then(successCheck).catch(failedCheck);