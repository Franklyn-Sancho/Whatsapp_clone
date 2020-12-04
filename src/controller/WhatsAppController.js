class WhatsAppController {

	constructor(){
		console.log('WhatsAppController Ok')

		this.elementsPrototype();
		this.loadElements();
		this.iniEvents();
	}

	loadElements(){

		this.el = {};

		document.querySelectorAll('[id]').forEach(element =>{
			this.el[Format.getCamelCase(element.id)] = element;
		});
	}

	elementsPrototype(){

		Element.prototype.hide = function(){
			this.style.display = 'none';

		}

		Element.prototype.show = function() {
			this.style.display = 'block';
			return this
		}

		Element.prototype.toggle = function () {
			this.style.display = (this.style.display === 'none') ? 'block' : 'none'
		}

		Element.prototype.on = function (events, fn) {
			events.split(" ").forEach(event=>{
				this.addEventListener(event, fn);
			});
		}

		Element.prototype.css = function(styles){
			for (let name in styles) {
				this.style[name] = styles[name];
			}
		}


		Element.prototype.addClass = function(name){
			this.classList.add(name);
			return this;
		}


		Element.prototype.removeClass = function(name){
			this.classList.remove(name);
			return this;
		}

		Element.prototype.toggleClass = function(name) {
			this.classList.toggle(name);
			return this;
		}

		Element.prototype.hasClass = function (name) {
			return this.classList.contains(name)
		}

		HTMLFormElement.prototype.getForm = function () {

			return new FormData(this);
		}


		HTMLFormElement.prototype.toJSON = function () {

			let json = {};

			this.getForm().forEach((value, key)=>{

				json[key] = value;
			});

			return json;
		}


	}

	initEvents(){

	this.el.myPhoto.on('click', e=>{

		this.closeAllLeftPanel();
		this.el.panelAddContact.show();
		setTimeout(()=>{
			this.el.panelEditProfile.addClass('open');
		}, 300);
		

	});

	this.el.bntNewContact.on('click', e=>{


		this.closeAllLeftPanel();
		this.el.panelAddContact.show();
		setTimeout(()=>{
			this.el.panelAddContact.addClass('open');
		}, 300);
		

	});

	this.el.btnclosePanelEditProfile.on('click', e=>{

		this.el.panelEditProfile.removeClass('open');
	});

	this.el.btnclosePanelAddContact.on('click', e=>{

		this.el.panelAddContact.removeClass('open');

	});

	this.el.photoContainerEditProfile.on('click', e=>{

		this.el.inputProfilePhoto.click();

	});

	this.el.inputNamePanelEditProfile.on('keypress', e=> { 

		if (e.key === 'enter'); {

			e.prevenDefault();
			this.el.btnSavePanelEditProfile.click();

		}
	});

	this.el.btnSavePanelEditProfile.on('click', e=> {

		console.log(this.el.inputNamePanelEditProfile.innetHTML)
	});

	this.el.formPanelAddContact.on('submit', e=> {

		e.prevenDefault();

		let FormData = new FormData(this.formPanelAddContact);
	});


	closeAllLeftPanel(); {

		this.el.panelAddContact.hide();
		this.el.panelEditProfile.hide();

	}

}}