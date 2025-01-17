import bankComData from './bankComData';

// style
import '../../style/features/bankCom/bankCom.scss';

function BankCom() {
  const renderedFeatures = bankComData.map((feat) => (
    <div className="features__item" key={feat.id}>
      <img src={feat.icon} alt={feat.alt} className="features__item--img" />
      <h3 className="features__item--title">{feat.title}</h3>
      <p className="features__item--text">{feat.text}</p>
    </div>
  ));

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {renderedFeatures}
    </section>
  );
}

export default BankCom;
