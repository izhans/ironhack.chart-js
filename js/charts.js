fetch('https://coasters-api.herokuapp.com/country/Spain')
  .then((response) => response.json())
  .then((coasters) => {
    printCoastersCharts(coasters)
  })
  .catch((e) => console.error(e))

function printCoastersCharts(coasters) {
    // console.table(coasters)

    const [redForce, dragonKhan, shambala, tarantula, abismo, tornado] = coasters
    const selectedCoasters = [redForce, dragonKhan, shambala, tarantula, abismo, tornado]
    // printSpeedChart(redForce, dragonKhan, shambala, tarantula, abismo, tornado)
    printSpeedChart1(coasters)

    // printLengthChart(selectedCoasters)
    printLengthChart1(coasters)

    printHeightChart(selectedCoasters)
    printInversionsChart(coasters)
    printMixedChart(coasters)
}

function printSpeedChart(redForce, dragonKhan, shambala, tarantula, abismo, tornado) {

    const data = {
        labels: [redForce.name, dragonKhan.name, shambala.name, tarantula.name, abismo.name, tornado.name],
        datasets: [{
            data: [redForce.speed, dragonKhan.speed, shambala.speed, tarantula.speed, abismo.speed, tornado.speed],
            label: 'km/h',
            borderWidth: 2,
            borderColor: COLORS.borderColor,
            backgroundColor: COLORS.backgroundColor
        }]
    }

    let options = OPTIONS.speed

    new Chart('chart1', { type: 'bar', data, options })
}

function printSpeedChart1(coasters) {

    const data = {
        labels: coasters.map(c => c.name),
        datasets: [{
            data: coasters.map(c => c.speed),
            label: 'km/h',
            borderWidth: 2,
            borderColor: COLORS2.borderColor,
            backgroundColor: COLORS2.backgroundColor
        }]
    }

    let options = OPTIONS.speed

    new Chart('chart1', { type: 'bar', data, options })
}

function printLengthChart(selectedCoasters) {
    
    const data = {
        labels: selectedCoasters.map((c) => c.name),
        datasets: [{
            data: selectedCoasters.map(c => c.length),
            label: 'm',
            borderWidth: 2,
            borderColor: COLORS.borderColor,
            backgroundColor: COLORS.backgroundColor
        }]
    }

    const options = OPTIONS.length

    new Chart('chart2', { type: 'doughnut', data, options })
}

function printLengthChart1(coasters) {
    
    const data = {
        labels: coasters.map((c) => c.name),
        datasets: [{
            data: coasters.map(c => c.length),
            label: 'm',
            borderWidth: 2,
            borderColor: COLORS2.borderColor,
            backgroundColor: COLORS2.backgroundColor
        }]
    }

    const options = OPTIONS.length

    new Chart('chart2', { type: 'doughnut', data, options })
}

function printHeightChart(selectedCoasters) {
    
    const data = {
        labels: selectedCoasters.map((c) => c.name),
        datasets: [{
            data: selectedCoasters.map(c => c.height),
            label: 'm',
            borderWidth: 2,
            borderColor: COLORS.borderColor,
            backgroundColor: '#3A177240'
        }]
    }

    const options = OPTIONS.height

    new Chart('chart3', { type: 'radar', data, options })
}

function printInversionsChart(selectedCoasters) {
    const data = {
        labels: selectedCoasters.map((c) => c.name),
        datasets: [{
            data: selectedCoasters.map(c => c.inversions),
            label: '€',
            borderWidth: 2,
            borderColor: COLORS2.borderColor,
            backgroundColor: COLORS2.backgroundColor
        }]
    }

    const options = OPTIONS.inversions
    
    new Chart('chart4', { type: 'polarArea', data, options })
}

function printMixedChart(selectedCoasters) {
    const data = {
        labels: selectedCoasters.map((c) => c.name),
        datasets: [{
            data: selectedCoasters.map(c => c.height),
            label: 'm',
            borderWidth: 2,
            borderColor: COLORS2.borderColor,
            backgroundColor: COLORS2.backgroundColor
        },
        {
            data: selectedCoasters.map(c => c.speed),
            label: 'km/h',
            borderWidth: 2,
            borderColor: 'rgba(101, 101, 101, 1)',
            backgroundColor: 'rgb(101, 101, 101, .4)',
            type: 'bar',
            barPercentage: 0.5
        }]
    }

    const options = OPTIONS.mixed

    new Chart('chart5', { type: 'line', data, options })
}
