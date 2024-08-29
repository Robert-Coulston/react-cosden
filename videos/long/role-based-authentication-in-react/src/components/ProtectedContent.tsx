import { Link, useNavigate,useParams } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

function ProtectedContent() {
    const params = useParams();
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    console.log(params);

    return (
        <ProtectedRoute allowedRoles={['admin', 'viewer']}>
            <div>
                <h1>Protected Content</h1>
                <p>This is protected content with id {params.id}</p>
                <button onClick={handleGoHome}>Go Home</button>
            </div>
        </ProtectedRoute>
    );
}

export default ProtectedContent;