const COLORS = {
    borderColor: [
                'rgba(116, 72, 194, 1)',
                'rgba(33, 192, 215, 1)',
                'rgba(217, 158, 43, 1)',
                'rgba(205, 58, 129, 1)',
                'rgba(156, 153, 204, 1)',
                'rgba(225, 78, 202, 1)'],
    backgroundColor: [
                'rgba(116, 72, 194, 0.4)',
                'rgba(33, 192, 215, 0.4)',
                'rgba(217, 158, 43, 0.4)',
                'rgba(205, 58, 129, 0.4)',
                'rgba(156, 153, 204, 0.4)',
                'rgba(225, 78, 202, 0.4)']
}

const COLORS2 = {
    borderColor: [
                'rgba(116, 72, 194, 1)',
                'rgba(33, 192, 215, 1)',
                'rgba(217, 158, 43, 1)', 
                'rgba(205, 58, 129, 1)',
                'rgba(156, 153, 204, 1)',
                'rgba(225, 78, 202, 1)',
                'rgba(20, 72, 194, 1)',
                'rgba(40, 132, 80, 1)',
                'rgba(40, 32, 30, 1)',
                'rgba(240, 32, 50, 1)'],
    backgroundColor: [
                'rgba(116, 72, 194, 0.4)',
                'rgba(33, 192, 215, 0.4)',
                'rgba(217, 158, 43, 0.4)',
                'rgba(205, 58, 129, 0.4)',
                'rgba(156, 153, 204, 0.4)',
                'rgba(225, 78, 202, 0.4)',
                'rgba(20, 72, 194, 0.4)',
                'rgba(40, 132, 80, 0.4)',
                'rgba(40, 32, 30, 0.4)',
                'rgba(240, 32, 50, 0.4)'
    ]
}

const OPTIONS = {
    speed: {
        plugins: {
            legend: {
                display: false
            }
        }
    },
    length: {
        plugins: {
            legend: {
                position: 'left'
            }
        }
    },
    height: {
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
    },
    inversions: {
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
    },
    mixed: {
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
    },
}
