import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

function LastUpdatedComponent() {
  const [dateTime, setDateTime] = useState(null);

  useEffect(() => {
    if (typeof document !== 'undefined') { // Crucial check for document
      const now = new Date();

      const istFormat = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
      });

      const cstFormat = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Chicago',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
      });

      setDateTime({
        ist: istFormat.format(now),
        cst: cstFormat.format(now),
      });
    }
  }, []); // Empty dependency array is important

  if (!dateTime) {
    return null; // Important: Prevents hydration mismatch
  }

  return (
    <p>
      Last updated:<br />
      CST | {dateTime.cst}<br />
      IST | {dateTime.ist}
    </p>
  );
}

export default function LastUpdated() {
  return (
    <BrowserOnly>
      {() => <LastUpdatedComponent />}
    </BrowserOnly>
  );
}
