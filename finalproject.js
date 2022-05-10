var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Refugees Admitted', 'Affirmative Refugees', 'Defensive Refugees'],
        datasets: [{
            label: 'Africa',
            data: [141860, 33879, 21147],
            backgroundColor: [
                '#4d0000'
            ]
        },
        {
            label: 'Asia',
            data: [417624, 59716, 58164],
            backgroundColor: [
                '#800000'
            ],
        },
    
        {
            label: 'Europe',
            data: [24165, 7773, 9361],
            backgroundColor: [
                '#b30000'
            ],
        },

        {
            label: 'North America',
            data: [34578, 22241, 8397],
            backgroundColor: [
                '#ff0000'
            ],
        },

        {
            label: 'Central America',
            data: [0, 168, 221],
            backgroundColor: [
                '#ff3333'
            ],
        },

        {
            label: 'South America',
            data: [1639, 14993, 5635],
            backgroundColor: [
                '#ff8080'
            ],
        },
    ]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'The State of Refugees During an American Immigration Wave',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Here we see the trends of decreases and increases of continents where refugees were admitted and able to stay.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                stacked: true
            },
            x: {
                stacked: true
            }
        },
    },
});