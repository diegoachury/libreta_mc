App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.resource('contactos');
  this.resource('contacto', { path: ':contacto_id'});
});

App.ContactosRoute = Ember.Route.extend({
	model: function(){
		return contactos;
	}
});
App.ContactoRoute = Ember.Route.extend({
	model: function(params){
		return contactos.findBy('id', params.contacto_id);
	}
});

App.ContactoController = Ember.ObjectController.extend({
	isEditing: false,
	actions: {
		edit: function () {
			this.set('isEditing', true);
		},
		doneEditing: function(){
			this.set('isEditing', false);
		}
	}

});


var contactos =[{
	id:'1',
	img: 'https://dl.dropboxusercontent.com/u/52872565/user.jpeg',
	name: 'Fernando #1',
	phone: '11111',
	email: 'a1@prueba.com.co'
},
{
	id:'2',
	img: 'https://dl.dropboxusercontent.com/u/52872565/user1.jpeg',
	name: 'Diego',
	phone: '1111111',
	email: 'a2@prueba.com.co'
},
{
	id:'3',
	img: 'https://dl.dropboxusercontent.com/u/52872565/user2.jpeg',
	name: 'Fernando #3',
	phone: '1111111',
	email: 'a3@prueba.com.co'
},
{
	id:'4',
	img: 'https://dl.dropboxusercontent.com/u/52872565/user3.jpeg',
	name: 'Fernando #4',
	phone: '1111111',
	email: 'a2@prueba.com.co'
},
{
	id:'5',
	img: 'https://dl.dropboxusercontent.com/u/52872565/user.jpeg',
	name: 'Fernando #5',
	phone: '1111111',
	email: 'a2@prueba.com.co'
},
{
	id:'6',
	img: 'https://dl.dropboxusercontent.com/u/52872565/user.jpeg',
	name: 'Fernando #6',
	phone: '1111111',
	email: 'a2@prueba.com.co'
},
{
	id:'7',
	img: 'https://dl.dropboxusercontent.com/u/52872565/user.jpeg',
	name: 'Fernando #7',
	phone: '1111111',
	email: 'a2@prueba.com.co'
},
{
	id:'8',
	img: 'https://dl.dropboxusercontent.com/u/52872565/user.jpeg',
	name: 'Fernando #8',
	phone: '1111111',
	email: 'a2@prueba.com.co'
},
{
	id:'9',
	img: 'https://dl.dropboxusercontent.com/u/52872565/user.jpeg',
	name: 'Fernando #9',
	phone: '1111111',
	email: 'a2@prueba.com.co'
}


]