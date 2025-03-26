import React, {useState} from 'react';
import Footer from '../../components/Footer';
import styles from './FAQs.module.css';
import data from '../../components/data';
import List from '../../components/List';

const FAQs = () => {
  const [faqs, setfaqs] = useState(data);
  return (
    <>
    <div className={styles.title}> <h2>
    FAQs </h2> 
    <div className = {styles.underline}></div>
     </div>
    <nav>
      <div className={styles.container}>
      <ul>
        <>
        {faqs.map((faq) => {
          return (
            <List faq={faq}/>
          )
        })}
        </>
         {/* <li>
           <Link to='./How-to-use-MJRP?'> How to use MJRP?
         </Link>
         </li>
         <Link to="./is-MJRP-free-to-use?">
         <li> is MJRP free to use?</li>

         </Link>
         <Link to="./How-to-intrepret-MJRP-results?">
         <li> How to intrepret MJRP results?</li>

         </Link>
         <Link to="./How-accurate-is-MJRP">
         <li> How accurate is MJRP?</li> */}

         {/* </Link> */}
      </ul>
      </div>
    </nav>

     
    <Footer/>
    </>
  )
}

export default FAQs
