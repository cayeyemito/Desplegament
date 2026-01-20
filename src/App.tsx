export default function App() {
  return (
    <main className="app">
      <header className="hero">
        <span className="badge">DEPLOY OK</span>
        <h1>Vite + React</h1>
        <p>
          Proyecto moderno con <strong>TypeScript</strong>, desplegado
          automáticamente en <strong>GitHub Pages</strong>.
        </p>

        <div className="actions">
          <button className="primary">Ver proyecto</button>
          <button className="secondary">Documentación</button>
        </div>
      </header>

      <section className="features">
        <div className="feature-card">
          <span>⚡</span>
          <h3>Vite</h3>
          <p>Build ultrarrápido y DX excelente.</p>
        </div>

        <div className="feature-card">
          <span>⚛️</span>
          <h3>React</h3>
          <p>Componentes modernos y reutilizables.</p>
        </div>

        <div className="feature-card">
          <span>🧠</span>
          <h3>TypeScript</h3>
          <p>Tipado fuerte y código mantenible.</p>
        </div>

        <div className="feature-card">
          <span>🚀</span>
          <h3>CI/CD</h3>
          <p>Deploy automático con GitHub Actions.</p>
        </div>
      </section>

      <footer className="footer">
        <span>Hecho con ❤️ · {new Date().getFullYear()}</span>
      </footer>
    </main>
  )
}
