import React from 'react';
import { Carousel } from 'flowbite-react';

interface BreadcrumbContent {
  content: String
}

function Breadcrumb({content} : BreadcrumbContent) {
  return (
    <div className='breadcrumb'>
       <span>iCliniq / </span> 
       <span>{content} </span> 
    </div>
    
  )
}

export default Breadcrumb