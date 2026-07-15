// Vercel Edge Middleware
// grandfusion-lp.vercel.app（Vercel生URL）への直接アクセスを 404 で非公開
// Cloudflare Worker 経由（X-GF-Proxy ヘッダー付き）は通す

export const config = {
  matcher: '/((?!_next/|_static/|favicon.ico|robots.txt).*)',
};

export default function middleware(request) {
  const host = request.headers.get('host') || '';
  const proxyMark = request.headers.get('x-gf-proxy');

  // Vercel生URL への直接アクセスで、正規プロキシ経由でない場合は 404
  if (host === 'grandfusion-lp.vercel.app' && !proxyMark) {
    return new Response('Not Found', {
      status: 404,
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    });
  }
  // それ以外は通常通り通す（return しない = next()）
}
