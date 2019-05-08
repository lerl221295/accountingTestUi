import React from 'react';
import PropTypes from 'prop-types';

const RequestPageErrorMessage = ({ message, onlyMessage }) => (
  <div className="page-error-message">
    {
      !onlyMessage
        ? (<div className="error-page">
          <div className="title">
400
          </div>
          <h4 className="message">
{message}
          </h4>
           </div>)
      : (<h2>
{message}
         </h2>)
    }
  </div>
);

RequestPageErrorMessage.defaultProps = {
  onlyMessage: false
};

RequestPageErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onlyMessage: PropTypes.bool
};

export default RequestPageErrorMessage;
