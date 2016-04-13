Template.addTarefa.events({
  'submit #addTarefa':function(e){
    e.preventDefault()
    Tarefas.insert({
      nome:e.target.tarefa.value,
      status:false
    })
    alert('Adicionado')
    nome:e.target.tarefa.value =''
  }
})
