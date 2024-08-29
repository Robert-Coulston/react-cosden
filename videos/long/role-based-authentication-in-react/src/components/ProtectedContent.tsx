import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

function ProtectedContent() {
  const params = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tab1'); // Declare and initialize the 'activeTab' variable

  const handleGoHome = () => {
    navigate('/');
  };


  const handleTabClick = (tab: string) => {
    console.log(`Clicked on ${tab}`);
    setActiveTab(tab);
  };

  console.log(params);

  return (
    <ProtectedRoute allowedRoles={['admin', 'viewer']}>
      <div>
        <h1>Protected Content</h1>
        <p>This is protected content with id {params.id}</p>
        <button onClick={handleGoHome}>Go Home</button>
      </div>
      <div>
        <Tabs>
          <TabList className="flex border-b border-gray-300">
            <Tab
              className="cursor-pointer rounded-t-lg border border-transparent px-4 py-2 hover:bg-gray-200"
              selectedClassName="bg-gray-300 border-gray-300"
              onClick={() => handleTabClick('Tab 1')}
            >
              Tab 1
            </Tab>
            <Tab
              className="cursor-pointer rounded-t-lg border border-transparent px-4 py-2 hover:bg-gray-200"
              selectedClassName="bg-gray-300 border-gray-300"
              onClick={() => handleTabClick('Tab 2')}
            >
              Tab 2
            </Tab>
            <Tab
              className="cursor-pointer rounded-t-lg border border-transparent px-4 py-2 hover:bg-gray-200"
              selectedClassName="bg-gray-300 border-gray-300"
              onClick={() => handleTabClick('Tab 3')}
            >
              Tab 3
            </Tab>
          </TabList>

          <TabPanel>
            <p>Content for Tab 1</p>
          </TabPanel>
          <TabPanel>
            <p>Content for Tab 2</p>
          </TabPanel>
          <TabPanel>
            <p>Content for Tab 3</p>
          </TabPanel>
        </Tabs>
      </div>
    </ProtectedRoute>
  );
}

export default ProtectedContent;
