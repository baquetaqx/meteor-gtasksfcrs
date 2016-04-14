Template.addTarefa.events({
  'submit #addTarefa, click #addBtn':function(e){
    e.preventDefault()
    Tarefas.insert({
      nome:$('#tarefa').val(),
      status:false
    })
    //e.target.tarefa.value =''
    Materialize.toast("Adicionado!", 3000,'green');
    $('#tarefa').val('')
  }
})
