var startupThings =
    [
	'mobile-powered',
	'app-driven',
	'fully native, always-available',
	'cross-platform',
	'easily extensible',
	'API-driven',
	'kickstarter for',
	'gofundme for',
	'a centralized platform for',
	'a peer-to-peer information platform for',
	'crowd-funded',
	'crowd-sourced',
	'curated',
	'real-time',
	'an SDK for',
	'a python framework for',
	'programmer-friendly',
	'totally open, web-powered',
	'fully functional',
	'pop-up online',
	'infinite, digital',
	'powerful, web-driven',
	'an instantly available tool for',
	'totally free, app-driven',
	'SaaS approach to'
	'b2b',
	'user-generated community for',
	'completely personal',
	'absolutely private',
	'analytics-driven',
	'a beautifully-designed, modular system for',
	'hand-curated approach to',
	'a remix tool for',
	'totally free',
	'kickstarter for',
	'an app-powered redefinition of',
	'email-powered',
	'contemporary',
	'completely reinvented',
	'an inbox for',
	'a decentralized labor market for',
	'a way to hire anyone to help with',
	'uber for',
	'facebook for',
	'xiaomi for',
	'a social network for',
	'twitter for',
	'palantir for',
	'snapchat for',
	'instacart for',
	'instagram for',
	'spacex for',
	'pinterest for',
	'dropbox for',
	'wework for',
	'spotify for',
	'airbnb for',
	'square for',
	'twitter-DM-powered tools for managing',
	'an incredibly agile approach to',
	'chat-based access to',
];

var postThings = [];

var politicsThings =
    [
	'abortions',
	'late-term abortions',
	'access to birth control',
	'long-term birth control',
	'sexual freedom',
	'sexual harassment awareness training',
	'migroaggression tracking',
	'gun registration',
	'rape prevention',
	'abortion clinics',
	'economic reform',
	'refugee rights education programs',
	'pharmaceutical company reform',
	'single-payer health care',
	'women\'s health',
	'immigration',
	'immigration reform',
	'gun control',
	'military spending cuts',
	'immigrant resources',
	'paid maternity leave',
	'depression awareness',
	'welfare',
	'feminism',
	'sex workers',
	'marginalized workers',
	'the unemployed',
	'people with serious mental health issues',
	'kyriarchy',
	'smashing the patriarchy',
	'questioning authority',
	'direct democracy',
	'social welfare',
	'socialism',
	'workplace safety',
	'transgender rights',
	'solar power',
	'sexual assault awareness',
	'women\'s health',
	'homeless outreach',
	'caregiver support',
	'teen moms',
	'basic kindness',
	'universal income',
	'maternity leave',
	'income equality',
	'non-neurotypical people',
	'job placement',
	'HIV awareness',
	'sexually-transmitted disease prevention',
	'after-school programs',
	'public libraries',
	'universal pre-k',
	'free continuing education',
	'sustainable energy',
	'preventive care',
	'welfare',
	'job-training programs',
	'living wage advocates',
	'community centers',
	'senior centers',
	'social security',
	'health care',
	'paid vacation',
	'maternity leave',
	'equal rights',
	'tax relief',
    ];

function rand(num) {
    return Math.floor(Math.random()*num);
}

function randArr(items) {
    /* Return random item from items */
    return items[rand(items.length)]
}

function makeThing() {
    return '<p>it\'s basically <span class="startup">'
	+ randArr(startupThings)
	+ '</span> <span class="politics">'
	+ randArr(politicsThings)
	+ '</span></p>';
}

$(document).ready(
    function() {
	var els = [];
	for (var i=0;i<1;i++) {
	    els.push(makeThing());
	}
	$('#things').append(els.join(''));
    });
