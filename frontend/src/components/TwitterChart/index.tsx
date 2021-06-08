import Chart from "react-apexcharts";

const TwitterChart = () => {
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
        data: [472, 202, 94, 316, 154, 136],
      },
      {
        name: "PicPay",
        data: [103, 71, 41, 72, 92, 84],
      },
      {
        name: "PagSeguro",
        data: [18, 15, 12, 9, 11, 12],
      },
    ],
  };

  return (
    <Chart
      options={{
        xaxis: mockData.labels,
        yaxis: {
          title: {
            text: "Crescimento de Seguidores Twitter",
          },
        },
        colors: ["#8605b8", "#20bc5b", "#00b694"],
      }}
      series={mockData.series}
      type='line'
      height='360'
    />
  );
};

export default TwitterChart;
