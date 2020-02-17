const waffle = d3.select('.waffle');

const numbers = d3.range(100);

waffle
	.selectAll('.block')
	.data(numbers)
	.enter()
	.append('div')
	.attr('class', 'block')
	.style('background-color', d => d < 24 ? 'red' : 'grey')