const success = (data) => {
	console.log('Ответ от сервера:', data);
	console.log('Едем в отпуск! :)');
}

const failed = (data) => {
	console.log('Ответ от сервера:', data);
	console.log('Не едем в отпуск... :(');
}

function checkData () {
	return new Promise ((resolve, reject) => {
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
	});
}

const checkTickets = (data) => {
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
}

checkData().then(checkTickets).then(success).catch(failed);