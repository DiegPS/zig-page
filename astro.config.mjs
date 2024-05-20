import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			favicon: '/favicon.png',
			title: 'Zig Programming Language',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				ar: {
					label: 'العربية',
					lang: 'ar',
				},
				de: {
					label: 'Deutsch',
					lang: 'de',
				},
				es: {
					label: 'Español',
					lang: 'es',
				},
				fa: {
					label: 'فارسی',
					lang: 'fa',
				},
				fr: {
					label: 'Français',
					lang: 'fr',
				},
				id: {
					label: 'Bahasa Indonesia',
					lang: 'id',
				},
				it: {
					label: 'Italiano',
					lang: 'it',
				},
				ja: {
					label: '日本語',
					lang: 'ja',
				},
				ko: {
					label: '한국어',
					lang: 'ko',
				},
				pt: {
					label: 'Português',
					lang: 'pt',
				},
				ru: {
					label: 'Русский',
					lang: 'ru',
				},
				tr: {
					label: 'Türkçe',
					lang: 'tr',
				},
				zh: {
					label: '中文',
					lang: 'zh',
				},
			},
			social: {
				github: 'https://github.com/diegps/zig-page',
			},
			logo: {
				light: './src/assets/light-logo.svg',
				dark: './src/assets/dark-logo.svg',
				replacesTitle: true,
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Zig Software Foundation',
					autogenerate: { directory: 'zsf' },
				},
				{
					label: 'Downloads',
					translations: {
						'ar': 'تحميل',
						'de': 'Download',
						'es': 'Descargas',
						'fa': 'دانلود',
						'fr': 'Téléchargements',
						'id': 'Unduh',
						'it': 'Download',
						'ja': 'ダウンロード',
						'ko': '다운로드',
						'pt': 'Baixar',
						'ru': 'Загрузки',
						'tr': 'İndir',
						'zh': '下载',
					},
					autogenerate: { directory: 'download' },
				},
			],
		}),
	],
});
