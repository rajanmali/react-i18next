const InformationCard = ({ number_of_days, translateFunction }) => {
  return (
    <div className="d-flex flex-column align-items-start">
      <h1 className="font-weight-normal mb-3">
        {translateFunction('welcome_message')}
      </h1>
      <p>{translateFunction('days_since_eaten', { number_of_days })}</p>
    </div>
  );
};

export default InformationCard;
