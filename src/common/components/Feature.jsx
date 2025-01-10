import PropTypes from 'prop-types';

function Feature({ feature }) {
  console.log(typeof feature.icon);
  return (
    <div className="features__item">
      <img
        src={feature.icon}
        alt={feature.alt}
        className="features__item--img"
      />
      <h3 className="features__item--title">{feature.title}</h3>
      <p className="features__item--text">{feature.text}</p>
    </div>
  );
}

Feature.propTypes = {
  feature: PropTypes.object.isRequired,
};

export default Feature;
