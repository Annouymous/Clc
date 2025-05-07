// components/Tabs/Tabs.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import DiabetesTab from './DiabetesTab';
import HeartFailureTab from './HeartFailureTab';
import CKDTab from './CKDTab';
import { useTranslation } from 'react-i18next';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab-2');
  const { t } = useTranslation();

  const tabData = [
    {
      id: 'tab-2',
      image: 'src/assets/images/heart-failure.png',
      alt: 'Heart Failure',
      label: t('heartFailure'),
      component: <HeartFailureTab active={activeTab === 'tab-2'} />
    },
    {
      id: 'tab-3',
      image: 'src/assets/images/ckd.png',
      alt: 'CKD',
      label: t('ckdLabel'),
      component: <CKDTab active={activeTab === 'tab-3'} />
    },
    {
      id: 'tab-1',
      image: 'src/assets/images/diabetes.png',
      alt: 'Diabetes',
      label: t('diabetesLabel'),
      component: <DiabetesTab active={activeTab === 'tab-1'} />
    }
  ];

  return (
    <div className="rs_diabetes py-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="rs_view_tab text-center">
              <ul className="nav nav-pills justify-content-center border rounded-4 shadow-sm p-3 bg-white">
                {tabData.map((tab) => (
                  <li className="nav-item" key={tab.id}>
                    <button 
                      className={`nav-link border-0 rounded-4 px-4 py-3 ${activeTab === tab.id ? 'active bg-light border-primary' : ''}`} 
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <div className="skd_fe text-center">
                        <img src={tab.image} alt={tab.alt} className="img-fluid mb-2" />
                        <span className="fw-bold">{tab.label}</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rs_tab_details mt-4">
        {tabData.map((tab) => (
          <React.Fragment key={tab.id}>
            {activeTab === tab.id && tab.component}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Tabs;