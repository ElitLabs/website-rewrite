import { NextRequest, NextResponse } from 'next/server';
// import { getToken } from 'next-auth/jwt';

export const config = {
	matcher: [
		/*
		 * Match all paths except for:
		 * 1. /api routes
		 * 2. /_next (Next.js internals)
		 * 3. /_static (inside /public)
		 * 4. all root files inside /public (e.g. /favicon.ico)
		 */
		'/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)',
	],
};

export default async function middleware(req: NextRequest) {
	const url = req.nextUrl;
	// Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
	let hostname = req.headers.get('host')!;

	const searchParams = req.nextUrl.searchParams.toString();

	// Get the pathname of the request (e.g. /, /about, /blog/first-post)
	const path = `${url.pathname}${
		searchParams.length > 0 ? `?${searchParams}` : ''
	}`;

	// rewrite root application to `/home` folder
	if (
		hostname === 'localhost:3000' ||
		hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN
	) {
		return NextResponse.rewrite(
			new URL(`/home${path === '/' ? '' : path}`, req.url),
		);
	}

	// console.log(
	// 	`Redirecting ${req.headers.get('host')} >>> /${hostname.replace('.' + process.env.NEXT_PUBLIC_ROOT_DOMAIN, '')}${path} || ${hostname} -> ${hostname.replace('.' + process.env.NEXT_PUBLIC_ROOT_DOMAIN, '')}`,
	// );

	// rewrite everything else to `/[domain]/[slug] dynamic route
	return NextResponse.rewrite(
		new URL(
			`/${hostname.replace('.' + process.env.NEXT_PUBLIC_ROOT_DOMAIN, '')}${path}`,
			req.url,
		),
	);
}
