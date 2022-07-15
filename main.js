const success = (data) => {
	console.log('Ответ от сервера:', data);
	console.log('Едем в отпуск! :)');
}

const failed = (data) => {
	console.log('Ответ от сервера:', data);
	console.log('Не едем в отпуск... :(');
}

function checkRooms () {
	return new Promise ((resolve, reject) => {
		console.log('Ассинхронная проверка данных Promise');
		console.log('--- Проверка номеров в отеле ---');

		setTimeout(() => {
			const response = true;

			if (response) resolve('Номера в отеле имеются!');
			else reject('Номера в отеле отсутствуют...');
		}, 1000);
	});
}

const checkTickets = (data) => {
	console.log('Ответ от сервера:', data);
	console.log('--- Проверка авиабилетов ---');
	
	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			const response = true;

			if (response) resolve('Авиабилеты имеются!');
			else reject('Авиабилеты отсутствуют...');
		}, 2000);
	});
}

checkRooms()
	.then(checkTickets)
	.then(success)
	.catch(failed);