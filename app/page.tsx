import React from 'react';

export default function Page() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#0070f3' }}>Dr. Serhat Erol</h1>
      <p style={{ fontSize: '20px' }}>Aile Hekimi & Medikal Estetik Uzmanı</p>
      <hr style={{ width: '50%', margin: '20px auto' }} />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '200px' }}>
          <h3>Aile Hekimliği</h3>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '200px' }}>
          <h3>İş Yeri Hekimliği</h3>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '200px' }}>
          <h3>Medikal Estetik</h3>
        </div>
      </div>
      <p style={{ marginTop: '50px', color: 'gray' }}>Çok yakında tam içerik ile buradayız.</p>
    </div>
  );
}
