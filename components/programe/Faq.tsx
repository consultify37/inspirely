import React, { useState } from 'react'
import Image from 'next/image';
import { Faq } from '../../types';

type Props = {
    faqs: Faq[]
}

const Faq = ({ faqs }: Props) => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const handleSelectQuestion = (id: number) => {
      if (id === selectedQuestion) {
        setSelectedQuestion(null); // Close the selected question if it's clicked again
      } else {
        setSelectedQuestion(id); // Open the clicked question
      }
  };

  return(
      <section id='faq' className='mt-12 md:mt-24 w-full flex flex-col items-center gap-2 lg:px-20'>
          <h2 className='text-2xl xl:text-4xl text-secondary font-bold max-w-[80%] md:max-w-[60%] mb-6 md:mb-12'>Întrebări frecvente:</h2>
          {
              faqs.map((faq, index) => (
                  <article key={index} className='w-full rounded-[8px] bg-admin-card'>
                      <div className='flex justify-between p-4 px-6 cursor-pointer w-full z-50' onClick={() => handleSelectQuestion(index)}>
                          <h3 className='text-[14px] md:text-lg text-secondary font-bold'>{faq.question}</h3>
                          <Image
                              className={`md:w-[20px] w-[14px] md:min-w-[20px] min-w-[14px] right-[10px] top-[23px]
                              ${
                              index === selectedQuestion
                                  ? "rotate-180 transition-all"
                                  : "transition-all"
                              }
                              `}
                              src="/images/arrow-qa.svg"
                              width={20}
                              height={20}
                              alt="arrow-qa"
                          />
                      </div>
                      {index === selectedQuestion && (
                          <p className='p-4 px-6 text-secondary text-[14px] md:text-base'>
                              {faq.answear}
                          </p>
                      )}
                  </article>
              ))
          }
      </section>
  )
}

export default Faq