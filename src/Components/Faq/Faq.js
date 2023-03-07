import { useState } from 'react';
import './Faq.css';
import faq from "./faq.png";

function Faq() {
  const[selected, setSelected] = useState(null)

  const toggle = i =>{
      if(selected === i){
          return setSelected(null)
      }

      setSelected(i)
  }

  return (
    <div className="faq" id="faq">
    <div className="wrapper">
    <header className="page-header">
        <div className="center">
          <div className="page-title">
            
            <h2 in-view="fade-right" className="in-view">
            Faqs
            </h2>
          </div>
        </div>
      </header>
    
    <div className="faq__right">
     <div className='accordianA'>
       {data.map((item, i) => (
         <div className='item'>
          <div className='title' onClick={() => toggle(i)}>
            <h3>{item.question}</h3>
            <span className='plus'>{selected === i? '-':'+'}</span>
          </div>
          <div className={selected === i? 'content show ':'content'}>{item.Answer}</div>
         </div>
       ))}
       </div> 
       </div>

       {/* <div className='accordianB'>
         <span>hello</span>
         {data.map((item, i) => (
           <div className='item'>
           <div className='title' onClick={() => toggle(i)}>
           <h3>{item.question}</h3>
           <span>{selected === i? '-':'+'}</span>
           </div>
           <div className={selected === i? 'content show ':'content'}>{item.Answer}</div>
           </div>
           ))}
          </div>  */}

    </div>
          <h3 className='help'>Couldn’t find your question? Hit us up at any below social handles and we will get back to as soon as possible.</h3>
    </div>
  );
}

const data = [
  {
    question: 'What is JSCOP?',
    Answer:
          'It is the annual flagship event of JIIT OPTICA which includes a plethora of events ranging from programming competitions to fun ideathons, trivia quizzes, webinars and a lot more. It also includes mentoring sessions that gives students a wide platform to interact, connect and innovate.'
  },
  {
    question: 'How to Register?',
    Answer:
          'The registration can be done on the official JSCOP website'
  },
  {
    question: 'What is the Eligibility Criteria?',
    Answer:
          'Anyone can register. We welcome everyone on the ride to multiverse packed with fun quizzes, cp events, ideathons and webinars.'
  },
  {
    question: 'Will the Event Be Virtual, Offline or Hybrid Mode?',
    Answer:
          'It will be in hybrid mode. Some of the events will be conducted in  virtual mode and some events in the offline mode at our college .'
  },
  {
    question: 'What is the Event Venue?',
    Answer:
          'The offline events of JSCOP 4.0 will be conducted at our college Jaypee Institute of Information Technology.'
  },


]

export default Faq;
