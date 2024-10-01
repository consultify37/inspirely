import React from 'react'

type Props = {
  text: string
  className: string
}

const FormatText2 = ({ text, className }: Props) => {
  return (
    <>
      {
        text.split('\n').map((item, index) => (
            <p className={className} key={index}>{
              item.split('*').map((item1, index) => (
                <span key={item1+index}>
                    { index == 1 ? 
                      <span className="font-bold">
                        {
                          item1.split('/').map((item2, index) => (
                            <span key={item2+index}>
                                {index == 1 ? <span className="italic">{item2}</span> : <span>{item2}</span>}
                            </span>
                          ))
                        }
                      </span> : 
                      <span>
                        {
                          item1.split('/').map((item2, index) => (
                            <span key={item2+index}>
                                {index == 1 ? <span className="italic">{item2}</span> : <span>{item2}</span>}
                            </span>
                          ))
                        }
                      </span>}
                </span>
            ))
            }</p>
        )) 
      }
    </>
  )
}

export default FormatText2