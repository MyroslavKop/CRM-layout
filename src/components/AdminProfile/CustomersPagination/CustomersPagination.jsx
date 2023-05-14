import { Fragment } from 'react';

import paginationData from './paginationData';

const CustomersPagination = () => (
  <div className="profile__customers-pagination">
    <span className="profile__customers-pagination-info">Showing data 1 to 8 of 256K entries</span>
    <div className="profile__customers-pagination-page">
      <button className="profile__customers-pagination-button" type="button">
        {'<'}
      </button>
      {paginationData.map(({ id, value, isNumber }) => {
        return (
          <Fragment key={id}>
            {isNumber ? (
              <button className="profile__customers-pagination-button" type="button">
                {value}
              </button>
            ) : (
              <div className="profile__customers-pagination-dots">{value}</div>
            )}
          </Fragment>
        );
      })}
      <button className="profile__customers-pagination-button" type="button">
        {'>'}
      </button>
    </div>
  </div>
);

export default CustomersPagination;
