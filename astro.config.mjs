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
				{
					label: "Release Notes",
					translations: {
						'ar': 'ملاحظات الإصدار',
						'de': 'Versionshinweise',
						'es': 'Notas de la versión',
						'fa': 'یادداشت‌های انتشار',
						'fr': 'Notes de version',
						'id': 'Catatan Rilis',
						'it': 'Note sulla versione',
						'ja': 'リリースノート',
						'ko': '릴리스 노트',
						'pt': 'Notas de versão',
						'ru': 'Примечания к выпуску',
						'tr': 'Sürüm Notları',
						'zh': '发布说明',
					},
					autogenerate: { directory: 'releases' },
				},
				{
					label: "News",
					translations: {
						'ar': 'أخبار',
						'de': 'Nachrichten',
						'es': 'Noticias',
						'fa': 'اخبار',
						'fr': 'Actualités',
						'id': 'Berita',
						'it': 'Notizie',
						'ja': 'ニュース',
						'ko': '뉴스',
						'pt': 'Notícias',
						'ru': 'Новости',
						'tr': 'Haberler',
						'zh': '新闻',
					},
					autogenerate: { directory: 'news' },
				}
			],
		}),
	],
});
