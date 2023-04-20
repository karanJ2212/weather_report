import React from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import './Countrycard.css';

export default function Countrycard({
  name, states, iso3,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate('/Statelist', { state: { name } })}
      onKeyDown={() => navigate('/Statelist', { state: { name } })}
      tabIndex="0"
      role="button"
      aria-pressed="false"
    >
      <h3 className="card-title">
        {name}
      </h3>
      <div>
        <p className="card-text">
          Iso:
          {' '}
          {iso3}
        </p>
        <p className="card-text">
          States:
          {states.length}
        </p>
      </div>
    </div>
  );
}
Countrycard.propTypes = {
  name: PropTypes.string.isRequired,
  states: PropTypes.arrayOf(PropTypes.string).isRequired,
  iso3: PropTypes.string.isRequired,
};
