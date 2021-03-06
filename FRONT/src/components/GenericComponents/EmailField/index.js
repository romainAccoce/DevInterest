// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './email-field.scss';

// == Composant
const EmailField = ({
  value,
  name,
  placeholder,
  handleChange,
  required,
  autoComplete,
  className,
}) => {
  const inputId = `email-field-${name}`;

  return (
    <div className={value.length > 0 ? 'email-field email-field--has-content' : 'email-field'}>
      <input
        autoComplete={autoComplete}
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type="email"
        className={className}
        placeholder={placeholder}
        name={name}
        required={required}
      />

      <label
        htmlFor={inputId}
        className="email-field__label"
      >
        {placeholder}
      </label>
    </div>
  );
};

EmailField.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  className: PropTypes.string,
};

// Valeurs par défaut pour les props
EmailField.defaultProps = {
  value: '',
  required: false,
  autoComplete: 'off',
  className: 'email-field__input',
};

// == Export
export default EmailField;
