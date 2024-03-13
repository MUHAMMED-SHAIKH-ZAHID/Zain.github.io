
// Imports for your components
import { useState } from "react";
import { PageTitle } from "../../_metronic/layout/core";

import Products from "./datamanage/products/Products";
import { StatisticsWidget1 } from "../../_metronic/partials/widgets";
import { KTIcon } from "../../_metronic/helpers";
import Category from "./datamanage/category/Category";
import Brand from "./datamanage/brand/Brand";

const Header = () => {
  const [activeTab, setActiveTab] = useState('category');

  return (
    <div>
        
      {activeTab === 'category' && (
        <div className='tab-pane fade show active'>
     <StatisticsWidget1
            className='card-xl-stretch mb-xl-8'
            image='abstract-2.svg'
            title='Category'
            time='.'
            description='Navigate through our extensive range of categories to find exactly '
          />
        </div>
      )}

      {activeTab === 'brand' && (
        <div className='tab-pane fade show active'>
       <StatisticsWidget1
            className='card-xl-stretch mb-xl-8'
            image='abstract-1.svg'
            title='Brands'
            time='.'
            description='Explore our selection of brands that combine quality, value, and flavor'
          />
        </div>
      )}

      {activeTab === 'product' && (
        <div className='tab-pane fade show active'>
      
      <StatisticsWidget1
            className='card-xl-stretch mb-xl-8'
            image='abstract-4.svg'
            title='Products'
            time='.'
            description='Create a headline that is informative<br/>and will capture readers'
          />
        </div>
      )}

      <div className='card-header border-0 pt-1'>
        <div className="card-toolbar">
          <ul className='nav'>
            <li className='nav-item'>
              <button
                className={`nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4 me-1 ${activeTab === 'category' ? 'active' : ''}`}
                onClick={() => setActiveTab('category')}
              >
                Category
              </button>
            </li>
            <li className='nav-item'>
              <button
                className={`nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4 me-1 ${activeTab === 'brand' ? 'active' : ''}`}
                onClick={() => setActiveTab('brand')}
              >
                Brand
              </button>
            </li>
            <li className='nav-item'>
              <button
                className={`nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4 ${activeTab === 'product' ? 'active' : ''}`}
                onClick={() => setActiveTab('product')}
              >
                Product
              </button>
            </li>
          </ul>
        </div>
      </div>

      {activeTab === 'category' && (
        <div className='tab-pane fade show active'>
     <div className="row">

<div className="col-lg-12">

<Category />
</div>

</div>
        </div>
      )}

      {activeTab === 'brand' && (
        <div className='tab-pane fade show active'>
      <div className="row">

<div className="col-lg-12">

<Brand />
</div>

</div>
        </div>
      )}

      {activeTab === 'product' && (
        <div className='tab-pane fade show active'>
            <div className="row">

            <div className="col-lg-12">

          <Products />
            </div>
         
            </div>
       
        </div>
      )}
    </div>
  );
};

const DataManage = () => {
  return (
    <div>
      <PageTitle>Data Management</PageTitle>
      <Header />
    </div>
  );
};

export default DataManage;
