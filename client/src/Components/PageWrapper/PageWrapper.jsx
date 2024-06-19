import React from 'react';
import "./Page-wrapper.css"

const PageWrapper = ({children}) => {
  return (
    <main>

    
    <div className='page-wrapper'>
      {children}
    </div>
    </main>
  )
}

export default PageWrapper
