import Chart from "react-apexcharts";

const FacebookChart = () => {
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
        data: [221, 91, -156, 21, 48, 159],
      },
      {
        name: "PicPay",
        data: [560, 449, 158, 292, 130, 107],
      },
      {
        name: "PagSeguro",
        data: [81, 67, 28, 33, 29, 81],
      },
    ],
  };

  return (
    <Chart
      options={{
        xaxis: mockData.labels,
        yaxis: {
          title: {
            text: "Crescimento de Likes Facebook",
          },
        },
      }}
      series={mockData.series}
      type='line'
      height='360'
    />
  );
};

export default FacebookChart;
