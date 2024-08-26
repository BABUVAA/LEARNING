import styles from "./GameBar.module.css"
const GameBar = () =>{
  return <>
  <div className={styles.gameBarContainer}> 
    <div className={styles.gameDiv}><nav className="gameDiv1">PUBG</nav></div>
    <div className={styles.gameDiv}><nav className="gameDiv2">COC</nav></div>
    <div className={styles.gameDiv}><nav className="gameDiv3">FORTNITE</nav></div>
    <div className={styles.gameDiv}><nav className="gameDiv4">Free Fire</nav></div>
    <div className={styles.gameDiv}><nav className="gameDiv5">Brawl Stars</nav></div>
  </div>
  </>

}

export default GameBar