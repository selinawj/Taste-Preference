// Load Highcharts
var Highcharts = require('highcharts');

// Load a module
require('highcharts/modules/funnel')(Highcharts);
require('highcharts/modules/drilldown')(Highcharts);

$(function () {
    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Taste Preferences of Mains by Customers (October 2016)'
        },
        subtitle: {
            text: 'Click the slices to view contributions of individual mains to taste preferences.'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        series: [{
            name: 'Taste Preferences',
            colorByPoint: true,
            data: [{
                name: 'Salty_low',
                y: 18.98,
                drilldown: 'Salty_low'
            }, {
                name: 'Salty_normal',
                y: 16.52,
                drilldown: 'Salty_normal'
            }, {
                name: 'Salty_high',
                y: 3.96,
                drilldown: 'Salty_high'
            }, {
                name: 'Oil_low',
                y: 21.63,
                drilldown: 'Oil_low'
            }, {
                name: 'Oil_normal',
                y: 18.04,
                drilldown: 'Oil_normal'
            }, {
                name: 'Oil_high',
                y: 2.28,
                drilldown: 'Oil_high'
            }, {
            	name: 'Nothing_selected',
            	y: 18.59,
            	drilldown: 'Nothing_selected'
            }]
        }],
        drilldown: {
            series: [{
                name: 'Salty_low',
                id: 'Salty_low',
                data: [
                    ['Baked Rice Chicken Chop', 8.14],
                    ['Luncheon N Egg Dry Noodles', 13.60],
                    ['Sambal Seafood Fried Rice', 25.62],
                    ['Signature Fried Rice', 44.13],
                    ['Baked Pork Chop Spaghetti', 8.51]
                ]
            }, {
                name: 'Salty_normal',
                id: 'Salty_normal',
                data: [
                    ['Baked Rice Chicken Chop', 8.70],
                    ['Luncheon N Egg Dry Noodles', 33.42],
                    ['Sambal Seafood Fried Rice', 23.01],
                    ['Signature Fried Rice', 6.61],
                    ['Baked Pork Chop Spaghetti', 28.26]
                ]
            }, {
                name: 'Salty_high',
                id: 'Salty_high',
                data: [
                    ['Baked Rice Chicken Chop', 12.37],
                    ['Luncheon N Egg Dry Noodles', 28.49],
                    ['Sambal Seafood Fried Rice', 13.98],
                    ['Signature Fried Rice', 10.22],
                    ['Baked Pork Chop Spaghetti', 34.95]
                ]
            }, {
                name: 'Oil_low',
                id: 'Oil_low',
                data: [
                    ['Baked Rice Chicken Chop', 10.29],
                    ['Luncheon N Egg Dry Noodles', 17.53],
                    ['Sambal Seafood Fried Rice', 25.90],
                    ['Signature Fried Rice', 19.23],
                    ['Baked Pork Chop Spaghetti', 27.04]
                ]
            }, {
                name: 'Oil_normal',
                id: 'Oil_normal',
                data: [
                    ['Baked Rice Chicken Chop', 26.92],
                    ['Luncheon N Egg Dry Noodles', 25.66],
                    ['Sambal Seafood Fried Rice', 25.66],
                    ['Signature Fried Rice', 8.05],
                    ['Baked Pork Chop Spaghetti', 13.71]
                ]
            }, {
            	name: 'Oil_high',
            	id: 'Oil_high',
            	data: [
                    ['Baked Rice Chicken Chop', 36.28],
                    ['Luncheon N Egg Dry Noodles', 15.04],
                    ['Sambal Seafood Fried Rice', 40.71],
                    ['Signature Fried Rice', 1.77],
                    ['Baked Pork Chop Spaghetti', 6.19]
                ]
            }, {
            	name: 'Nothing_selected',
            	id: 'Nothing_selected',
            	data: [
                    ['Baked Rice Chicken Chop', 32.43],
                    ['Luncheon N Egg Dry Noodles', 16.01],
                    ['Sambal Seafood Fried Rice', 17.10],
                    ['Signature Fried Rice', 5.97],
                    ['Baked Pork Chop Spaghetti', 28.49]
                ]
            }]
        }
    });
});