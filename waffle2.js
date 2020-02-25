

const makeDataArray = (data) => {
	const newData = [];
	console.log(Object.entries(data))
	for (let [key, vals] of Object.entries(data)) {
	    curCols = new Array(vals.percentage).fill(vals.color)
	    newData.push(...curCols)
	};
	return newData;
}

const addYearHeader = (year) => {
	d3.select(`.year${year}`).append("h3")
				.text(`Year: ${year}`)
				.lower()
				.style('text-align', 'center')
				.style('margin', '1px') // vertical distance
}


const addYear = (year,) => {
	// create 12x1 grid for entire year
	const yearDiv = d3.select('#container')
		.append('div')
		.attr('class', `year${year}`)
			.append('div')
			.attr('class', 'outer-grid')

	// add year title to grid
	addYearHeader(year);

	// initialize figures in grid
	for (let i=1;i < 13; i++) {
		yearDiv.append('figure')
			.attr('class', `year${i}`)
			.style('width', '0px')
			.style('margin-botom', '0px')
			.style('margin-top', '0px')
			// .style('flex-basis', '0px')
			// .style('flex-grow', '1')
	}
}



const waffleChart = (year, selection, data) => {

	// grab selection
  const sel = d3.select(`.year${year}`).select(selection)
  let newClass = `block${selection.slice(1,)}`
  // create wrapper container
  sel
  	.style('display', 'grid')
  	.style('max-width', '100%')
  	.style('max-height', '100%')
  	.style("grid-template-rows", "1fr")
  	.style('grid-template-columns', "repeat(10, 1fr)")
  	.style('border', '1px solid transparent')

  // create each of the 100 divs
	sel
		.selectAll('.block')
		.data(data)
		.enter()
		.append('div')
		.attr('class', newClass)
		.style('width', '6px')
		.style('height', '6px')
		.style('margin', '1px')
		.style('background-color', d => eval(d))
		.style('opacity', 1)
		.style('padding', '0px')
		.style('border-radius', '0px')

	// Interactivity
	d3.selectAll(selection)
		.on('mouseover', function(d) {
			d3.select(this).selectAll(`.${newClass}`)
				.style('opacity', 1)
				.style('transform', 'scale(4,4)')
				.style('transition', 'all 0.2s')
		})
		.on('mouseout', function(d) {
			d3.select(this).selectAll(`.${newClass}`)
				.style('opacity', 0.8)
				.style('transform', 'scale(1, 1)')
				.style('transition', 'all 0.2s')
		});
}



