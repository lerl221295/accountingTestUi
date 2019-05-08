import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

/**
 * Componente stateless que renderiza una
 * alerta de notificación
 *
 * @param {String} [color='info'] el color de acuerdo al tipo de notificación ('danger', 'info', 'success' y 'warning')
 * @param {String|Component} [headText] Texto de cabecera opcional
 *                                      puede ser el texto o un componente que renderize un texto
 * @param {String|Component} message Mensaje a notificar, puede ser un text o un componente que renderize un texto
 * @returns {NotificationAlert} Componente
 */
const NotificationAlert = ({ color, headText, message, onDismiss }) => {
  let iconClass;

  switch (color) {
    case 'danger':
      iconClass = 'fa-exclamation-triangle';
      break;
    case 'info':
      iconClass = 'fa-info-circle';
      break;
    case 'success':
      iconClass = 'fa-check-circle';
      break;
    case 'warning':
      iconClass = 'fa-exclamation-circle';
      break;
    default:
      iconClass = 'fa-info-circle';
  }

  const props = {
    color,
    transition: {
      in: true,
      timeout: 150
    }
  };

  if (onDismiss) {
    props.toggle = onDismiss;
  }

  return (
      <Alert {...props}>
      { headText
        && (<div>
          <h4 className="alert-heading">
            <i className={`fa ${iconClass}`} />
            &nbsp;
{headText}
          </h4>
          <hr />
            </div>)
      }
        <p className="mb-0">
        {message}
        </p>
      </Alert>
  );
};

NotificationAlert.defaultProps = {
  color: 'info',
  headText: null,
  onDismiss: null
};

NotificationAlert.propTypes = {
  color: PropTypes.oneOf([
    'danger',
    'info',
    'success',
    'warning'
  ]),
  headText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]).isRequired,
  onDismiss: PropTypes.func
};

export default NotificationAlert;
