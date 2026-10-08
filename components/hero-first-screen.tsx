export default function HeroFirstScreen() {
  return (
    <>
      <section className="m7kq-hero" aria-label="Главный экран Monro Casino">
        <img
          className="m7kq-hero-img"
          src="/images/hero-banner.jpg"
          alt="Monro Casino: фирменные слоты, маскот казино и ставки на спорт"
          width={1600}
          height={686}
          fetchPriority="high"
        />
        <div className="m7kq-bubble">
          <span>Куда ты применишь</span>
          <b>+ 150%</b>
          <span>на депозит</span>
        </div>
        <div className="m7kq-table">
          <div className="m7kq-table-rim">
            <a className="m7kq-cta m7kq-cta-red" href="#monro-kazino-igrat">
              Начать в казино
            </a>
            <a className="m7kq-cta m7kq-cta-blue" href="#monro-kazino-onlajn">
              Начать в спорте
            </a>
          </div>
        </div>
      </section>
      <div className="m7kq-pay" role="list" aria-label="Способы оплаты Monro Casino">
        <span className="m7kq-pay-item" role="listitem">
          <span className="m7kq-chip m7kq-chip-gold">СБП</span>
          Система быстрых платежей
        </span>
        <span className="m7kq-pay-item" role="listitem">
          <span className="m7kq-chip m7kq-chip-green">G Pay</span>
          Google Pay
        </span>
        <span className="m7kq-pay-item" role="listitem">
          <span className="m7kq-chip m7kq-chip-light">VISA</span>
          <span className="m7kq-chip m7kq-chip-green">МИР</span>
          Перевод с карты на карту
        </span>
        <span className="m7kq-pay-item" role="listitem">
          <span className="m7kq-chip m7kq-chip-blue">C</span>
          Crypto currency
        </span>
      </div>
    </>
  )
}
