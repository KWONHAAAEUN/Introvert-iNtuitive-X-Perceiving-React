import Badge from 'designMaterials/Badge';
import { useState } from 'react';

function ApplicationsBooks({ application }) {
  const [color] = useState(() => {
    if (application.state === 'P') {
      return 'yellow';
    } else if (application.state === 'D') {
      return 'red';
    } else {
      return 'green';
    }
  });

  return (
    <div>
      {application.title}

      <Badge color={color}>{application.state}</Badge>
    </div>
  );
}
export default ApplicationsBooks;