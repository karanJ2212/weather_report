import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CgArrowRightO } from 'react-icons/cg';
import PropTypes from 'prop-types';
import './Statecard.css';

export default function Statecard({ name, code }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/weather', { state: { name } })}
      onKeyDown={() => navigate('/weather', { state: { name } })}
      className="state"
      tabIndex="0"
      role="button"
      aria-pressed="false"
    >
      <div>
        <h2 className="stateName">
          {name}
        </h2>
        <p className="stateCode">
          {code}
        </p>
      </div>
      <div>
        <CgArrowRightO className="stateIcon" />
      </div>
    </div>
  );
}
Statecard.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};
