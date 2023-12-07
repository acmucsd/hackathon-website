import Faq from '../../components/Faq';
import faqData from './faq.jsx';
import s from './style.module.css';

const FAQ = () => {
  return (
    <div className={s.background} id="faq">
      <div className={s.faqContainer}>
        <h2 className={s.faqTitle}>FAaaQs</h2>
        <div className={s.faqBox}>
          <Faq data={faqData.students} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
