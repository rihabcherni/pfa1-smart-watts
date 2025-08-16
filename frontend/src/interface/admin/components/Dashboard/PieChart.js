import React, { useState, useEffect } from 'react'
import { Card, Container} from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {StyledTypography} from "../../../Global/style"
ChartJS.register(ArcElement, Tooltip, Legend);
const Piechart = () => {
    const [zones, setZones] = useState([])
    useEffect(() => {
        ;(async function getStatus() {
        const response = await fetch(`http://127.0.0.1:8000/api/zone-travail`)
        const json = await response.json()
        setTimeout(getStatus, 60000)
        setZones(json.data)
        })()
    }, [])
    const regions = zones.map((x) => x.region )
    const data = {
        labels: regions,
        datasets: [ {
            label: '# of Votes',  data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [ 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
            borderColor: [ 'rgba(255, 99, 132, 1)',  'rgba(54, 162, 235, 1)',  'rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)'],
            borderWidth: 1,
         },
        ],
    };
    return (
        <div>
            {/* <Card>
                <Container> 
                    <StyledTypography>Quantitées collectées totales par mois/année</StyledTypography></Container>
                  <Pie data={data} 
                    options={{ 
                        responsive: true, plugins: { legend: { position: 'left', display: true}},
                    }}
                />
            </Card> */}
        </div>
    );
}
export default Piechart;