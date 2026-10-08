const wins = [
  { game: 'Wild Bounty', img: '/images/game-wild.jpg', player: 'Ka***777', time: '23:20', sum: '4 998.2 ₽', x: 'x107.1' },
  { game: 'Legacy of Ra', img: '/images/game-legacy.jpg', player: 'Kr***er', time: '23:20', sum: '7 743 ₽', x: 'x65' },
  { game: 'Sweet Fiesta', img: '/images/game-sweet.jpg', player: 'S***h', time: '23:20', sum: '10 159 ₽', x: 'x106.6' },
  { game: 'Gates of Olympus', img: '/images/game-gates.jpg', player: 'Ostr****', time: '23:20', sum: '12 420 ₽', x: 'x99.36' },
]

export default function WinTicker() {
  return (
    <div className="m7kq-ticker" aria-label="Сейчас выигрывают в Monro Casino">
      <span className="m7kq-ticker-label">Сейчас выигрывают</span>
      <div className="m7kq-ticker-track">
        {wins.map((win) => (
          <div className="m7kq-win" key={win.game}>
            <img src={win.img} alt={`Слот ${win.game} в Monro Casino`} width={34} height={34} />
            <span className="m7kq-win-meta">
              <span className="m7kq-win-name">{win.game}</span>
              <span className="m7kq-win-sub">
                {win.player} {win.time}
              </span>
            </span>
            <span className="m7kq-win-sum">{win.sum}</span>
            <span className="m7kq-win-x">{win.x}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
