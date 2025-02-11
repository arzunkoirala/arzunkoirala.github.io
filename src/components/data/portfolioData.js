export const portfolioData = [
	{
		imgSrc:
			'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png',
		title: 'Restaurant',
		skills: ['React', 'StyledComponents'],
		descripcion:
			'I used React and Styled Components to create this website. It is a responsive website that looks great on all devices. The website is also SEO optimized and has a fast load time.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc:
			'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/299377097/original/7eb7dcebe244fcf5ad75d92b0969fc116946bd57/create-professional-amd-responsive-wordpress-website.jpg',
		title: 'E-commerce',
		skills: ['JavaScript', 'Bootstrap'],
		descripcion:
			'I used JavaScript and Bootstrap to create this website. It is a responsive website that looks great on all devices. The website is also SEO optimized and has a fast load time.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc:
			'https://i0.wp.com/themes.svn.wordpress.org/cafe-cafeteria/1.5.3/screenshot.png',
		title: 'Coffe Store',
		skills: ['React', 'CSS'],
		descripcion:
			'I used React and CSS to create this website. It is a responsive website that looks great on all devices. The website is also SEO optimized and has a fast load time.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc:
			'https://www.corse.mx/cdn/shop/files/tienda_lenceria-lenceria-hot_sale-ofertas-mexico-lenceria_seyx-encaje-corse_mx-corse_lenceria_1200_x_560_px_13.png?v=1712270274&width=1500',
		title: 'Coffe Store',
		skills: ['React', 'CSS'],
		descripcion:
			'I used React and CSS to create this website. It is a responsive website that looks great on all devices. The website is also SEO optimized and has a fast load time.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc:
			'https://i0.wp.com/themes.svn.wordpress.org/cafe-cafeteria/1.5.3/screenshot.png',
		title: 'Coffe Store',
		skills: ['React', 'CSS'],
		descripcion:
			'I used React and CSS to create this website. It is a responsive website that looks great on all devices. The website is also SEO optimized and has a fast load time.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc:
			'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png',
		title: 'Restaurant',
		skills: ['React', 'StyledComponents'],
		descripcion:
			'I used React and Styled Components to create this website. It is a responsive website that looks great on all devices. The website is also SEO optimized and has a fast load time.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

export const getPortfolioData = portfolioData.map((item) => {
	return {
		...item,
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
