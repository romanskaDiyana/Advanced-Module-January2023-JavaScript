function printSquare(sizeOfSquare = 5) {

	const row = "* ".repeat(sizeOfSquare).trim();

	for (let i = 0; i < sizeOfSquare; i++) {
		console.log(row);
	}
}