import Chart from "react-apexcharts";

const LineChart = () => {
  const mockData = {
    labels: {
      categories: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
    },
    series: [
      {
        name: "PicPay",
        data: [43.6, 67.1, 67.7, 34.2, 55.7],
      },
      {
        name: "Nubank",
        data: [67.7, 34.2, 55.7, 12.2, 93.2],
      },
      {
        name: "PagSeguro",
        data: [105.2, 65.9, 55.9, 13.4, 98.5],
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
