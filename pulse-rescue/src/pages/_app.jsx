// src/pages/_app.jsx or pages/_app.jsx
import { useState } from 'react';
import 'antd/dist/reset.css';
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <main style={{ padding: '1rem' }}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
