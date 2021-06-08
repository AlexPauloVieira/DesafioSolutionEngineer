const TwitterTable = () => {
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
            <td>471.850</td>
            <td>472.322</td>
            <td>472.524</td>
            <td>472.618</td>
            <td>472.934</td>
            <td>473.088</td>
            <td>473.224</td>
          </tr>
          {/* PicPay */}
          <tr>
            <th>PicPay</th>
            <td>83.776</td>
            <td>83.879</td>
            <td>83.950</td>
            <td>83.991</td>
            <td>84.063</td>
            <td>84.155</td>
            <td>84.239</td>
          </tr>
          {/* PagSeguro */}
          <tr>
            <th>PagSeguro</th>
            <td>35.860</td>
            <td>35.878</td>
            <td>35.893</td>
            <td>35.905</td>
            <td>35.914</td>
            <td>35.925</td>
            <td>35.937</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TwitterTable;
