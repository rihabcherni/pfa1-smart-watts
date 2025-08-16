import React, { useState, useEffect } from 'react'
import { Card, Container} from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import{StyledTypography} from '../../../Global/style'
ChartJS.register(ArcElement, Tooltip, Legend);
const Piechart = () => {
    const data = {
        labels: ['Matin', 'Aprés-midi', 'Nuit', 'Soir'],
        datasets: [
          {
            label: 'Consommation',
            data: [300, 600, 400, 200],
            backgroundColor: [
              'rgb(255, 99, 132)', // couleur pour la tranche "Matin"
              'rgb(54, 162, 235)', // couleur pour la tranche "Jour"
              'rgb(255, 205, 86)', // couleur pour la tranche "Nuit"
              'rgb(75, 192, 192)', // couleur pour la tranche "Soir"
            ],
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Consommation par tranche horaire',
          },
        },
      };
      const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const date = `${year}-${month}-${day}`;
    return (
        <div style={{ padding: "5px" }}>
            <Card>
                <Container> <StyledTypography>{date}</StyledTypography></Container>
                <Pie data={data} options={options} />

            </Card>
        </div>
    );
}
export default Piechart;
