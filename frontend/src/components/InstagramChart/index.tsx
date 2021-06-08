import Chart from "react-apexcharts";

const InstagramChart = () => {
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
        data: [1933, 2247, 1694, 1262, 946, 562],
      },
      {
        name: "PicPay",
        data: [1237, 958, 315, 718, 271, 204],
      },
      {
        name: "PagSeguro",
        data: [309, 220, 204, 322, 215, 187],
      },
    ],
  };

  return (
    <Chart
      options={{
        xaxis: mockData.labels,
        yaxis: {
          title: {
            text: "Crescimento de Seguidores Instagram",
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

export default InstagramChart;
