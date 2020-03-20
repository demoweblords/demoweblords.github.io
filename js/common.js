const TabItemSelector = '.pageNav__tabItem';
const ContentItemSelector = '.pageNav__contentItem';

class TabsManager {
	constructor(navNode){
		this.tabs = [];
		this.activeTab = null;

		this.initFromHtml(navNode);
		this.activateTab(this.tabs[0]);
	}

	initFromHtml (navNode) {
		const headers  = navNode.querySelectorAll(TabItemSelector);
		const contents = navNode.querySelectorAll(ContentItemSelector);

		for (var i = 0; i < headers.length; i++) {
				this.registerTab(headers[i], contents[i]);
		}
	}

	registerTab (header, content) {
		const tab = new TabItem(header, content);
		tab.onActivate(() => this.activateTab(tab));
		this.tabs.push(tab);
	}
	
	activateTab (tabItem) {
		if (this.activeTab) {
				this.activeTab.setActive(false);
		}

		this.activeTab = tabItem;
		this.activeTab.setActive(true);
	}
	
}

const ActiveTabHeaderClass = 'pageNav__tabItem--active';
const ActiveTabContentClass = 'pageNav__contentItem--active';

class TabItem {
		constructor (header, content) {
				this.header  = header;
				this.content = content;
		}
		onActivate (action) {
				this.header.addEventListener('click', () => action(this));
		}
		setActive(value) {
				this.header.classList.toggle(ActiveTabHeaderClass, value);
				this.content.classList.toggle(ActiveTabContentClass, value);
		}
}

document.addEventListener('DOMContentLoaded', ()=>{
	let tabs = new TabsManager(document.querySelector('.pageNav'));
	let tabs2 = new TabsManager(document.querySelector('.seo-tabs'));
})

$(function() {

	$('.project-slider').slick({
		dots: true,
		arrows: false
	});

	$('.header-top').after('<div class="mobile-navigation d-xl-none">');
	$('.header-top .navigation').clone().appendTo('.mobile-navigation');
	$('.header-top .phone').clone().appendTo('.mobile-navigation');
	$('.hamburger').click(function() {
		$(this).toggleClass('is-active');
		$('.mobile-navigation').toggleClass('active');
		$('.overlay').toggleClass('active');
	});

	$('.navigation a, .footer-menu a, .services-list__item a, .btn-callback').on('click', function(event) {
		if (this.hash !== '') {
			event.preventDefault();
	
			const hash = this.hash;
	
			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top - 100
				},
				800
			);
		}
	});

});
