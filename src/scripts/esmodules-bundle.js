// Using ESModules
import { select } from 'd3-selection';
import { bar } from 'britecharts';

// ES Modules Page
const isESModules = select('.es-modules-bundle').size() === 1;

if (isESModules) {
    console.log('isESModules Bundle', bar);
    const container = select('.bar-container');
    const barChart = bar();
    const barData = [
        { name: 'Luminous', value: 2 },
        { name: 'Glittering', value: 5 },
        { name: 'Intense', value: 4 },
        { name: 'Radiant', value: 3 },
    ];

    barChart.margin({ left: 100 }).isHorizontal(true).height(400).width(600);

    container.datum(barData).call(barChart);
}

if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}
