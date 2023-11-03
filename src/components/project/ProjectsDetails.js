import React from 'react';

const ProjectDetails = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default ProjectDetails;