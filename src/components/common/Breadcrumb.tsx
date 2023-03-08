import React from 'react';
import { Breadcrumb as BreadcrumComponent } from 'flowbite-react';

interface BreadcrumbContent {
  content: String
}

function Breadcrumb({content} : BreadcrumbContent) {

  return (
    <BreadcrumComponent aria-label="Solid background breadcrumb example"
    className="bg-cyan-50 py-3 px-5 dark:bg-gray-900">
      <BreadcrumComponent.Item
        href="#"
      >
        iCliniq
      </BreadcrumComponent.Item>
      <BreadcrumComponent.Item>
        {content}
      </BreadcrumComponent.Item>
    </BreadcrumComponent>
    
  )
}

export default Breadcrumb