import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={150}
    viewBox="0 0 400 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="15" y="34" rx="3" ry="3" width="99" height="100" />
    <rect x="48" y="79" rx="0" ry="0" width="2" height="7" />
    <rect x="132" y="39" rx="0" ry="0" width="151" height="18" />
    <rect x="132" y="73" rx="0" ry="0" width="194" height="21" />
  </ContentLoader>
);

export default Skeleton;
