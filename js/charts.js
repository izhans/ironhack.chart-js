Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'

fetch('https://coasters-api.herokuapp.com/country/Spain')
  .then((response) => response.json())

function printCoastersCharts(coasters) {}

function printSpeedChart(redForce, dragonKhan, shambala, tarantula, tornado) {

    const data = {
        labels: [],
        datasets: [{
            data: [],
            label: 'km/h',
            borderWidth: 2,
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)']
        }]
    }

    let options = {
        plugins: {
            legend: {
                display: false
            }
        }
    }

    new Chart('chart1', { type: 'bar', data, options })
}

function printLengthChart(selectedCoasters) {

    const options = {
        plugins: {
            legend: {
                position: 'left'
            }
        }
    }
}

function printHeightChart(selectedCoasters) {

    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            r: {
                ticks: { display: false }
            }
        }
    }
}

function printInversionsChart(selectedCoasters) {
    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            r: {
                ticks: { display: false }
            }
        }
    }
}

function printMixedChart(selectedCoasters) {

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            line: {
                tension: 0.4
            }
        }
    }
}
