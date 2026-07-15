// Vercel Edge Middleware
// grandfusion-lp.vercel.app（Vercel生URL）への直接アクセスを WordPress TOP に301リダイレクト
// Cloudflare Worker 経由（X-GF-Proxy ヘッダー付き）は通す

export const config = {
  matcher: '/((?!_next/|_static/|favicon.ico|robots.txt).*)',
};

export default function middleware(request) {
  const host = request.headers.get('host') || '';
  const proxyMark = request.headers.get('x-gf-proxy');

  // Vercel生URL への直接アクセスで、正規プロキシ経由でない場合は WordPress TOP に301
  if (host === 'grandfusion-lp.vercel.app' && !proxyMark) {
    return Response.redirect('https://grandfusion-official.site/', 301);
  }
  // それ以外は通常通り
}
