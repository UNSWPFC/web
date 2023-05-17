import weMoneyImg from '../../assets/WeMoney.png'
import sponsorsStyle from './sponsors.module.css';

export default function sponsors() {
  return (
    <>
      <div className={sponsorsStyle.header}>
        <h1>Our Sponsors</h1>
      </div>
      <div className={sponsorsStyle.sponsorsContainer}>
        <div className={sponsorsStyle.sponsorImg}>
          <img src={weMoneyImg.src} alt="weMoney image" />
        </div>
        <div>
          <a href="https://www.wemoney.com.au/" className={sponsorsStyle.sponsorLink}>WeMoney</a>
        </div>
        <div className={sponsorsStyle.sponsorDescription} >
          WeMoney is a smart money management app that connects all your financial
          accounts in one place and tracks your overall financial health. They
          seek to empower Australians to take control of their personal finances.
          WeMoney represents one of the nation’s fastest growing financial
          communities. They help people pay down debt faster, track bills, bank
          accounts and remove unnecessary subscriptions. Their vision is to
          support a better financial health for Australians through their members.
        </div>
      </div>
    </>
  );
}
