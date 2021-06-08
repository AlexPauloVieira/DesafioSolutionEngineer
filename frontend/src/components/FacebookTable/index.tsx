const FacebookTable = () => {
  return (
    <div className='table-responsive'>
      <table className='table table-striped table-sm'>
        <thead>
          <tr>
            <th>Fintech</th>
            <th>01/06</th>
            <th>02/06</th>
            <th>03/06</th>
            <th>04/06</th>
            <th>05/06</th>
            <th>06/06</th>
            <th>07/06</th>
          </tr>
        </thead>
        <tbody>
          {/* Nubank */}
          <tr>
            <th>Nubank</th>
            <td>2.212.113</td>
            <td>2.212.334</td>
            <td>2.212.425</td>
            <td>2.212.269</td>
            <td>2.212.290</td>
            <td>2.212.338</td>
            <td>2.212.497</td>
          </tr>
          {/* PicPay */}
          <tr>
            <th>PicPay</th>
            <td>285.288</td>
            <td>285.848</td>
            <td>286.297</td>
            <td>286.455</td>
            <td>286.747</td>
            <td>286.877</td>
            <td>286.984</td>
          </tr>
          {/* PagSeguro */}
          <tr>
            <th>PagSeguro</th>
            <td>1.470.342</td>
            <td>1.470.423</td>
            <td>1.470.490</td>
            <td>1.470.518</td>
            <td>1.470.551</td>
            <td>1.470.580</td>
            <td>1.470.661</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FacebookTable;
