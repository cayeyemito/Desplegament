import { useEffect, useState } from 'react'

type ApiResponse = {
  mensaje: string
  plataforma: string
  tipo: string
}

export default function App() {
  const [apiData, setApiData] = useState<ApiResponse | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/hola')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error en la API')
        }
        return res.json()
      })
      .then((data) => setApiData(data))
      .catch(() => setError(true))
  }, [])

  return (
    <main className="app">
      <header className="hero">
        <span className="badge">DEPLOY OK</span>
        <h1>Vite + React</h1>
        <p>
          Proyecto moderno con <strong>TypeScript</strong>, desplegado
          automáticamente usando <strong>CI/CD</strong>.
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

      <section className="api">
        <h2>API con Cloudflare Workers</h2>
        <p>
          Esta aplicación incluye una función backend accesible desde la ruta{' '}
          <code>/api/hola</code>. Dicha función se ejecuta en Cloudflare Workers
          y devuelve datos en formato JSON sin necesidad de un servidor propio.
        </p>

        {error && <p className="error">No se pudo conectar con la API.</p>}

        {apiData ? (
          <div className="api-response">
            <p><strong>Mensaje:</strong> {apiData.mensaje}</p>
            <p><strong>Plataforma:</strong> {apiData.plataforma}</p>
            <p><strong>Tipo:</strong> {apiData.tipo}</p>
          </div>
        ) : (
          !error && <p>Cargando respuesta de la API...</p>
        )}
      </section>

      <footer className="footer">
        <span>Hecho con ❤️ · {new Date().getFullYear()}</span>
      </footer>
    </main>
  )
}
