import style from './home.module.css';

export default function Home() {
  return (
    <>
      <div className={style.page}>
        <div className={style.banner}>
          <img src='/pfcTeam.jpeg' alt="pfc team" className={style.bannerImg} />
          <div className={style.title}>
            <div className={style.titleTop}>
              Personal Finance
            </div>
            <div className={style.titleBottom}>
              Starts With You
            </div>
          </div>
        </div>
        
        <div className={style.content}>
          UNSW Personal Finance Club (PFC) is a student run non-constituent society, with the primary goal of upskilling our members in the area of financial management. We aim to educate young people of all backgrounds to take responsibility for themselves and make sound financial decisions.
        </div>
      </div>
    </>
  )
}
