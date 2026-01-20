export const onRequestGet = async () => {
  return new Response(
    JSON.stringify({
      mensaje: 'Hola desde Cloudflare Workers',
      plataforma: 'Cloudflare Pages',
      tipo: 'Function API'
    }),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}
