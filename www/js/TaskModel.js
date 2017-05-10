function getTasks() {
  this.tasks = [
    {
      description: 'Aprender Vuejs',
      done: false
    },
    {
      description: 'Aprender Ruby on Rails',
      done: false
    },
    {
      description: 'Aprender Banco de Dados NoSQL',
      done: false
    },
    {
      description: 'Começar a trabalhar em uma empresa bacana',
      done: false
    },
    {
      description: 'Aprender a desenvolver aplicações mobile',
      done: false
    },
    {
      description: 'Fazer parte de uma comunidade',
      done: false
    },
    {
      description: 'Começar a palestrar em eventos',
      done: false
    },
    {
      description: 'Criar projetos open-source',
      done: false
    },
  ];

  this.add = function(task) {
    this.tasks.push(task);
  };

  this.remove = function(task) {
    var pos = this.tasks.indexOf(task);
    this.tasks.splice(pos, 1);
  };
}