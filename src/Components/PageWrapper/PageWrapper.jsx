import React from 'react';
import "./Page-wrapper.css"

const PageWrapper = ({children}) => {
  return (
    <div className='page-wrapper'>
      {children}
    </div>
  )
}

export default PageWrapper
