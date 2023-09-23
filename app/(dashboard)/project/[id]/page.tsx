import React from 'react';

export default function ProjectDetails({
  params,
}: {
  params: {
    [key: string]: string[] | string;
  };
}) {
  const projectId = params.id as string;
  return <div>ProjectDetails - {projectId}</div>;
}
