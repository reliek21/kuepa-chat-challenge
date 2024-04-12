/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ['ts', 'tsx'],
	experimental: {
		scrollRestoration: true,
		webVitalsAttribution: ['CLS', 'LCP']
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'domain.vercel.com'
			}
		]
	}
};

export default nextConfig;
