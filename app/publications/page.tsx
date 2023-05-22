import styles from './pubs.module.css';
import holidayBudgeting from '../../assets/pubsImage2.png'
import headerPubs from '../../assets/pubsImage.png'

export default function publications() {
    return (
        <>
            <div className='section-border'>
                <div className='content-wrapper'>
                <h1 id='page-title'>Publications</h1>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.column}>    
                    <div className={styles.articleHeading}>
                        Week 1 Introduction to Saving
                            <div className={styles.articleContent}>
                            This week we are covering some budgeting tips 
                            and ways to reduce unnecessary spending. 
                            </div>
                            <a href="../../assets/pubsWk1.pdf" download className={styles.articleLink}>Read more</a>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.articleHeading}>
                        Week 2 Introduction to Investing
                            <div className={styles.articleContent}>
                            Welcome to the first official UNSW PFC article post of 2021. We will be writing and producing content 
                            to bring new insights into your own personal finances. Also, keep an eye out as subcommittee recruitment 
                            applications will be out soon!
                            </div>
                            <a href="../../assets/pubsWk2.pdf" download className={styles.articleLink}>Read more</a>
                    </div>
                </div>      
            </div>

            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.articleHeading}>
                        <img src={holidayBudgeting.src} alt="holidayBudgeting" />
                        <br /> Holiday Budgeting
                            <div className={styles.articleContent}>
                            Been spending more than you should recently? Want to learn some tips on saving money with your purchases?
                            
                            Amidst the holiday season, it&apos;s often difficult to not add things to your cart with the overwhelming sales everywhere we go. 
                            In collaboration with UNSW Finance and Banking Society, we have prepared some helpful tips to protect 
                            our wallets and meet our financial goals!
                            </div>
                            <a href="../../assets/pubsBudgeting.pdf" download className={styles.articleLink}>Read more</a>
                    </div>
                </div>
            </div>

        </>
    );
  }