import React, { useEffect } from 'react';
import Chart from 'chart.js';

const BarChart = ({ location }) => {

    useEffect(() => {
        if (location) {
            let prepared = prepareData(location)
            createChart(prepared)
        }

    }, [location])

    const prepareData = (data) => {
        const chartData = {
            labels: [],
            datasets: [
                {
                    label: 'Avg high temps',
                    data: [],
                    backgroundColor: "rgba(254,216,177,0.4)",
                    borderColor: "rgba(254,216,177,1)"

                },
                {
                    label: "Avg low temps",
                    data: [],
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)"
                }
            ]
        }

        data.temperatures.forEach(temperature => {
            chartData.labels.push(temperature.id)
            chartData.datasets[0].data.push(temperature.average_high_f)
            chartData.datasets[1].data.push(temperature.average_low_f)
        })

        console.log('chartData', chartData)


        return chartData
    }

    const createChart = (data) => {
        console.log('createChart - data', data)
        const ctx = document.querySelector('#temperatures')
        new Chart(ctx, {
            type: 'line',
            data: data
        })
    }

    return (
        <>
            <h1>{`Temperatures in ${location ? location.name : '...loading'}`}</h1>
            <canvas id="temperatures" width="300" height="100"></canvas>
        </>
    )
}

export default BarChart