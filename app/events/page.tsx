import style from './events.module.css';
import Navbar from '../../components/Navbar';

export default function events() {
  return (
    <>
      <div className={style.sectionBorder}>
        <div className={style.contentWrapper}>
          <h1 id='page-title' className={style.title}>Events</h1>
        </div>
      </div>
      <div className={style.contentWrapper}>
        <h2>
            Our events are created to be informative and educational while being fun and engaging. We categorise our events into three types; recurring events, minor events, and major events.
        </h2>
        <div className={style.contentSubtext}>
            Recurring Events: These are the events which we regularly run, the most notable being our crash courses. These crash courses are aimed to upskill our members with their various financial needs by deconstructing the concepts into easily digestible information.
        </div>
      </div>
    </>
  )
}