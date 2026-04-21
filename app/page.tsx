import React from 'react';

export default function DrSerhatErolSite() {
  return (
    <div style={{ fontFamily: 'sans-serif', color: '#333', lineHeight: '1.6' }}>
      {/* Header / Üst Bilgi */}
      <header style={{ backgroundColor: '#f8f9fa', padding: '40px 20px', textAlign: 'center', borderBottom: '2px solid #0070f3' }}>
        <h1 style={{ margin: 0, color: '#0070f3' }}>Dr. Serhat Erol</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>Aile Hekimliği Uzmanı | İş Yeri Hekimi | Medikal Estetik</p>
      </header>

      {/* Ana Bölüm */}
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
        
        {/* Tanıtım Yazısı */}
        <section style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h2>Hoş Geldiniz</h2>
          <p>Sağlığınız ve estetik görünümünüzle ilgili bilimsel temelli, güvenilir bilgilendirme ve danışmanlık platformu.</p>
        </section>

        {/* Branşlar / Kartlar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          
          <div style={cardStyle}>
            <h3>🏠 Aile Hekimliği</h3>
            <p>Koruyucu sağlık hizmetleri, hastalık takibi ve genel sağlık danışmanlığı.</p>
          </div>

          <div style={cardStyle}>
            <h3>🏢 İş Yeri Hekimliği</h3>
            <p>Çalışan sağlığı, iş güvenliği protokolleri ve kurumsal sağlık çözümleri.</p>
          </div>

          <div style={cardStyle}>
            <h3>✨ Medikal Estetik</h3>
            <p>Ameliyatsız estetik uygulamaları ve yaş alma yönetimi hakkında profesyonel bilgiler.</p>
          </div>

        </div>

        {/* Danışmanlık Bölümü */}
        <section style={{ marginTop: '50px', padding: '30px', backgroundColor: '#eef6ff', borderRadius: '10px', textAlign: 'center' }}>
          <h2>Soru & Danışmanlık</h2>
          <p>Sağlık konularındaki sorularınızı iletebilir, uzman görüşü alabilirsiniz.</p>
          <button style={{ backgroundColor: '#0070f3', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem' }}>
            Soru Sorun
          </button>
        </section>
      </main>

      {/* Footer / Alt Bilgi */}
      <footer style={{ textAlign: 'center', padding: '20px', marginTop: '40px', fontSize: '0.9rem', color: '#888' }}>
        © 2026 Dr. Serhat Erol - İstanbul. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}

// Kart Tasarımı İçin Stil
const cardStyle = {
  border: '1px solid #ddd',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  backgroundColor: '#fff'
}; 
