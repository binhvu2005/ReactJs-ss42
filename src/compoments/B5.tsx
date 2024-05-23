import Alert from 'react-bootstrap/Alert';

function BasicExample() {
  return (
    <>
      {[
        'primary',
        'danger',
        'warning',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}

export default BasicExample;