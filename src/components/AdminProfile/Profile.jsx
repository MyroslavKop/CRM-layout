import CustomersTable from './CustomersTable/CustomersTable';
import CustomersPagination from './CustomersPagination/CustomersPagination';
import search from '../../assets/icons/search.svg';

import '../../scss/sections/profile.scss';

const Profile = () => (
  <main className="profile">
    <section className="profile__container">
      <h2 className="profile__greetings">Hello Evano 👋🏼</h2>
      <div className="profile__customers">
        <div className="profile__customers-info">
          <div>
            <h3 className="profile__customers-title">All Customers</h3>
            <span className="profile__customers-status">Active Members</span>
          </div>
          <div className="profile__customers-search">
            <button className="profile__customers-search-btn">
              <img className="profile__customers-search-img" src={search} alt="search" />
            </button>
            <input className="profile__customers-search-txt" type="text" placeholder="Search" />
          </div>
        </div>
        <CustomersTable />
        <CustomersPagination />
      </div>
    </section>
  </main>
);

export default Profile;
