import customersData from './customersData';

const CustomersTable = () => (
  <table className="profile__customers-table">
    <thead>
      <tr className="profile__customers-table-header">
        <th>Customer Name</th>
        <th>Company</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>Country</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {customersData.map(({ id, name, company, phone, email, country, isActive }) => {
        return (
          <tr key={id} className="profile__customers-table-text">
            <td>{name}</td>
            <td>{company}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{country}</td>
            <td>
              <div className={`profile__customers-table-status ${isActive ? 'active' : 'inactive'}`}>
                {isActive ? 'Active' : 'Inactive'}
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default CustomersTable;
