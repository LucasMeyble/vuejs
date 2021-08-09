let app = new Vue({
	el:'#app',
	data:{
		titulo: 'titulo',
		subtitle: 'este é o <strong> subtitle </strong>da pagina',
		copyRight: 'Todos os direitos reservados',
		nome: 'lucas',
		carregado: true
	}
});

var app2 = new Vue({
	el: '#app-2',
	data: {
		aviso: true,
		div_id: 'teste',
		link: 'https://www.adasi.com.br/',
		id: 14
	},
	methods: {
		clicou: () => {
			alert('Evento de click')
		},
		enviou: () => {
			alert('ENVIOU!! 😁')
		}
	}
})