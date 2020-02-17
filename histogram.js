const locationn = [
	{ name: 'Matt', state: 'NY' },
	{ name: 'Ilia', state: 'NY' },
	{ name: 'Jan', state: 'NY' },
	{ name: 'Caitlyn', state: 'NY' },
	{ name: 'Russell', state: 'MA' },
	{ name: 'Amber', state: 'WA' }
];

const nested_data = d3.nest()
	.key(d => d.state)
	.entries(locationn)

console.log(nested_data)
const hist = d3.select('.hist')

const group = hist
	.selectAll('.group')
	.data(nested_data)
	.enter()
	.append('div')
	.attr('class', 'group');

group
	.selectAll('.block')
	.data(d => d.values)
	.enter()
	.append('div')
	.attr('class', 'block');

group.append('text').text(d => d.key);

	