import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';



function calc(f){
    let L = 300;
    let D = 60;
    let Db = 70;
    let C = 343;

    let tanP = Math.PI * L * f / 500 / C;
    let logP = 1 + 0.25 * Db * Db / D / D * Math.tan(tanP) * Math.tan(tanP);
    let TL = 10 * Math.log10(logP)

    if(f === 300){
        console.log('tanP: ', tanP);
        console.log('logP: ', logP)
        console.log('TL: ', TL);
    }

    return TL;
}



class FormularCanvas extends React.Component{
    componentDidMount(){
        let ctx = document.getElementById('canvas');

        const step = 100;
        const from = 0;
        const to = 1000;

        
        let xData = [];
        for(let i=from; i<=to; i=i+step){
            xData.push(i);
        }

        let labels = xData.map(x=>x.toString());
        let yData = xData.map(x=>calc(x));

        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels,
                datasets: [{
                    label: 'Transmission Loss - Quarter Wave Tube',
                    data: yData,
                    fill: false,
                    borderColor: "rgb(54, 162, 235)",
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Frequency[Hz]'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Transmission Loss[dB]'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }



    render(){
        return (
            <canvas id='canvas' width="400" height="400"/>
        )
    }
}



  
export default FormularCanvas;