import React from 'react';
import Helmet from 'react-helmet';

function AboutRoute() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Helmet>
        <title>About</title>
      </Helmet>

      <p>
        Produced with
        {'&nbsp;'}
        <span aria-label="heart" role="img">
          ❤️
        </span>
      </p>

      <p>
        View our contributors list on our
        {'&nbsp;'}
        <a href="https://github.com/ctrlplusb/react-universally">GitHub</a>
        {'&nbsp;'}
        page.
      </p>
    </div>
  );
}

export default AboutRoute;
