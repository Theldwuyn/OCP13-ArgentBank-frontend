// style
import '../../style/common/hero.scss';

function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="hero__content--title">No fees.</p>
        <p className="hero__content--title">No minimum deposit.</p>
        <p className="hero__content--title">High interest rates.</p>
        <p className="hero__content--text">
          Open a savings account with Argent Bank today !
        </p>
      </div>
    </div>
  );
}

export default Hero;
