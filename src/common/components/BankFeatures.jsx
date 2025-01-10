import { useSelector } from 'react-redux';
import { selectBankFeatures } from '../selector';
import Feature from './Feature';

// style
import '../../style/common/bankFeatures.scss';

function BankFeatures() {
  const bankFeatures = useSelector(selectBankFeatures);
  console.log(bankFeatures);

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {bankFeatures.map((elem) => (
        <Feature feature={elem} key={elem.id} />
      ))}
    </section>
  );
}

export default BankFeatures;
