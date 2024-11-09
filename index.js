console.log("Hello world!");

const dateElement = document.getElementById('date');
console.log(dateElement);

//gets current date
let currentDate = new Date();
dateElement.innerHTML = currentDate;

let dataOptions = {year: "numeric", month: "long", day: "numeric"};
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dataOptions);

const url = "https://fakestoreapi.com/products"

const options = {
			};

// Request to get data from url, submitting also the values from options
fetch(url, options)
.then(res => res.json())
.then(data => {
	console.log(data);

	/*
		let products = [
			{
				title: "Lips Stick",
				price: 199.9,
				description: "rose red liptick",
				category: "beuaty product",
				image: null,
				rating:{
					rate: 5,
					count: 100
				}
			},
			{
				title: "Lips Stick 2",
				price: 199.9,
				description: "lush pink liptick",
				category: "beuaty product",
				image: null,
				rating:{
					rate: 4,
					count: 100
				}
			}
		];

		console.log(products);
		console.log(products[0].title);
		console.log(products[0].price);
		console.log(products[0].rating.rate);
	*/


	// Compiled all the title per object and store it to "titles" storage
	let titles = data.map(object => {
		// console.log(object);
		// console.log(object.title);
		return object.title; // add title per objects to the "titles" storage
	});

	console.log(titles);

	// Compiled all the rate per object and store it to "ratings" storage
	let ratings = data.map(object => {
		// console.log(object);
		// console.log(object.title);
		return object.rating.rate; // add rate inside the rating property per objects to the "ratings" storage
	});

	console.log(ratings);

	const myChart = document.getElementById("myChart");

	let barChart = new Chart(myChart, {
		type: 'bar',
		data:{
			labels: titles,
			datasets: [{
				label: 'Ratings of Tweets',
				// the basis of our bar levels will be based on compiled ratings from per object of the retrieved data from our fetch request.
				data: ratings,
				borderWidth: 2,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(255, 205, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(201, 203, 207, 0.2)'
				],
				borderColor: [
					'rgb(255, 99, 132)',
	    			'rgb(255, 159, 64)',
	    			'rgb(255, 205, 86)',
	    			'rgb(75, 192, 192)',
	    			'rgb(54, 162, 235)',
	    			'rgb(153, 102, 255)',
	    			'rgb(201, 203, 207)'
				],
				hoverBackgroundColor: [
					'rgb(255, 99, 132)',
	    			'rgb(255, 159, 64)',
	    			'rgb(255, 205, 86)',
	    			'rgb(75, 192, 192)',
	    			'rgb(54, 162, 235)',
	    			'rgb(153, 102, 255)',
	    			'rgb(201, 203, 207)'
				]
			}]
		},
		options: {
			indexAxis: 'y',
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	})






})

