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
	'an instant',
	'totally free, app-driven',
	'b2b',
	'user-generated',
	'personal',
	'analytics-driven',
	'beautiful',
	'hand-curated',
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
	'chat-based',
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
	'immigration',
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

/* TODO */
function makeCompoundThing(arr, ct) {
    var len = items.length;
    var seq = new Array();
    var i = 0;
    var rval = rand(len);
    while (!seq[rval] && ct > 0) {
	seq[rval] = true;
	rval = rand(len);
	ct--;
    }
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
