import React from 'react';
import MediaCard from './imgCard';

const ApiCollection: React.FC = () => {
    return (
        <div>
            <h1>API Collection</h1>
            <p>This is the API collection component.</p>
            <MediaCard title="APi1 " description="Api1 some description" />
            <MediaCard title="APi2 " description="Api2 some description" />
        </div>
    );
};

export default ApiCollection;