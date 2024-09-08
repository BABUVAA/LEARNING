import styles from "./TournamentRow.module.css";

const TournamentRow = ({ gameLogo, logo, tags, count, prize, entry }) => {
  return (
    <a href='#' className={styles.tournamentRow} data-testid='tournament-row'>
      <div className={styles.tournamentImg}>
        <img src={gameLogo} alt='COC' />
      </div>

      <div className={styles.tournamentDetails}>
        <img
          src={logo}
          alt='Brand logo of Weekly Cash Trophy Grind'
          width='40px'
          height='40px'
        />
        <div>
          <p>Weekly Cash Trophy Grind</p>

          <div className={styles.tagsContainer}>
            {tags.map((tag) => (
              <div className={styles.tag}>
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.tournamentInfo}>
        <div className={styles.topPlayers}>
          <div>Top {count} Players</div>
          <span className={styles.status}>
            <span className={styles.statusDot}></span>Started
          </span>
        </div>

        <div>Receive prizing</div>
      </div>

      <div className={styles.prizeInfo}>
        <div className={styles.prizeAmount}>{prize}</div>
        <div>Prize Pool</div>
      </div>

      <div className={styles.entryInfo} align='right'>
        <div>{entry}</div>
        <div className={styles.closingInfo}>
          <span>Closes in 4 days</span>
        </div>
        <div className={styles.joinNow}>
          <p>
            Join Now <i className='fas fa-caret-right'></i>
          </p>
        </div>
      </div>
    </a>
  );
};

export default TournamentRow;
