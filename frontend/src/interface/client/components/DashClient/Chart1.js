import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, Container} from '@mui/material';
import{StyledTypography} from '../../../Global/style'


      export default function Chart1() {
        const data = {
            labels: ['01/05', '02/05', '03/05', '04/05', '05/05', '06/05', '07/05', '08/05'],
            datasets: [
              {
                label: 'Tranche Matin',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgb(255, 99, 132)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
                data: [500, 400, 450, 550, 600, 550, 500, 450, 550, 600, 550, 500, 400, 450, 550, 600, 550, 500, 450, 550, 600, 550, 500, 400, 450, 550, 600, 550, 500, 450, 550],
              },
              {
                label: 'Tranche aprés midi',
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
                hoverBorderColor: 'rgba(54, 162, 235, 1)',
                data: [800, 900, 950, 1000, 1050, 1000, 900, 950, 1000, 1050, 1000, 900, 800, 950, 1000, 1050, 1000, 900, 950, 1000, 1050, 1000, 900, 800, 950, 1000, 1050, 1000, 900, 950, 1000],
              }, {
                label: 'Tranche Soir',
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgb(255, 205, 86)',
                hoverBorderColor: 'rgba(255, 206, 86, 1)',
                data: [ 400, 450, 500, 450, 400, 450, 500, 450, 400, 350, 300, 400, 450, 500, 450, 400, 450, 500],
              },
              {
                  label: 'Tranche Nuit',
                  backgroundColor: 'rgb(255, 205, 86)',
                  borderColor: 'rgba(255, 206, 86, 1)',
                  borderWidth: 1,
                  hoverBackgroundColor: 'rgba(255, 206, 86, 0.4)',
                  hoverBorderColor: 'rgba(255, 206, 86, 1)',
                  data: [300, 350, 400, 450, 500, 450, 400, 450, 500, 450, 400, 350, 300, 400, 450, 500, 450, 400, 450, 500, 450, 400, 350, 300, 400, 450, 500, 450, 400, 450, 500],
                }]};
        return (

            <div style={{ padding: "5px" }}>
            <Card>
                <Container> <StyledTypography>Consommation Mois</StyledTypography></Container>
            <Bar
              data={data}
              width={100}
              height={50}
              options={{
                maintainAspectRatio: true,
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }]
                }
              }}
            />
      </Card>
        </div>        );
      }