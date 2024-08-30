import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { useAuth } from './AuthProvider';
import ProtectedRoute from './ProtectedRoute';

function ProtectedContent() {
  const params = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tab1'); // Declare and initialize the 'activeTab' variable
  const { authToken, currentUser } = useAuth();

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
        <p>
          {' '}
          Your email is {currentUser?.email}. This is protected content with id{' '}
          {params.id} Your token is {authToken}
        </p>
        <button onClick={handleGoHome}>Go Home</button>
      </div>
      <div>
        <Tabs>
          <TabList className="mx-auto flex w-1/2 border-b border-gray-300">
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

          <div className="mx-auto flex w-1/2">
            <TabPanel>
              <p>
                Content for Tab 1 Content for Tab 1 Content for Tab 1 Content
                for Tab 1 Content for Tab 1 Content for Tab 1
              </p>
            </TabPanel>
            <TabPanel>
              <p>Content for Tab 2</p>
            </TabPanel>
            <TabPanel>
              <p>Content for Tab 3</p>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </ProtectedRoute>
  );
}

export default ProtectedContent;
