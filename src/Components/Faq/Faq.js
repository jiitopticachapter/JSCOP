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
          'A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.'
  },
  {
    question: 'How to register?',
    Answer:
          'A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.'
  },
  {
    question: 'What is the eligibility criteria?',
    Answer:
          'A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.'
  },
  {
    question: 'What are the event dates?',
    Answer:
          'A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.'
  },
  {
    question: 'what is the event venue?',
    Answer:
          'A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.'
  },


]

export default Faq;
