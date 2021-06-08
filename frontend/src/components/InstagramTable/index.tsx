const InstagramTable = () => {
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
            <td>2.029.421</td>
            <td>2.031.354</td>
            <td>2.033.601</td>
            <td>2.035.295</td>
            <td>2.036.557</td>
            <td>2.037.503</td>
            <td>2.038.065</td>
          </tr>
          {/* PicPay */}
          <tr>
            <th>PicPay</th>
            <td>334.102</td>
            <td>335.339</td>
            <td>336.297</td>
            <td>336.612</td>
            <td>337.330</td>
            <td>337.601</td>
            <td>337.805</td>
          </tr>
          {/* PagSeguro */}
          <tr>
            <th>PagSeguro</th>
            <td>472.178</td>
            <td>472.487</td>
            <td>472.707</td>
            <td>472.911</td>
            <td>473.233</td>
            <td>473.448</td>
            <td>473.635</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InstagramTable;
