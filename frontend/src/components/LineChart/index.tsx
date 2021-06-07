import Chart from "react-apexcharts";

const LineChart = () => {
  const mockData = {
    labels: {
      categories: [
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
        "Domingo",
      ],
    },
    series: [
      {
        name: "Nubank",
        data: [6987.0, 472.0, 202.0, 94.0, 316.0, 154.0, 12],
      },
      {
        name: "PicPay",
        data: [206.0, 103.0, 71.0, 41.0, 72.0, 92.0, 12],
      },
      {
        name: "PagSeguro",
        data: [51.0, 18.0, 15.0, 12.0, 9.0, 11.0, 12],
      },
    ],
  };

  return (
    <Chart
      options={{ xaxis: mockData.labels }}
      series={mockData.series}
      type='line'
      height='360'
    />
  );
};

export default LineChart;
