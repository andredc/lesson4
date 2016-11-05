# AngularJS Project

https://github.com/andredc/lesson4

L'applicativo è stato sviluppato partendo dall'esempio base lesson 4 e cercando di rispettare le Best Pratices esposte durante il corso.

#Modifiche Apportate

* Aggiunta dei Task
   * I task hanno attributi aggiuntivi rispetto alle note: Titolo, Descrizione, Priorità, Stato, Tag, Data
* Differenti metodi di visualizzazione dei Task
  *  I task possono essere visualizzati in 3 modi: List, Grid e Card.
    In tutte e 3 visualizzazioni è possibile modificare la Priorità e lo Stato del task cliccandovi opportunamente
* Possibilità di modifica dei Task
  *  Priorità e Stato dei task possono essere modificati direttamente dalla schermata di visualizzazione di questi ultimi.
    Per modifiche ad altri attributi è stata aggiunta una pagina di edit.
* Funzionalità di ordinamento e ricerca
  *  I task possono essere filtrati e ordinati per Titolo, Descrizione, Data, Priorità e Stato 
* Selezione multipla per modifica dello stato priorità e cancellazione dei task

#Struttura Applicazione


    
* app
 * components  
   * note.customList.directive.html  
   * task.customCard.directive.html  
   * task.customGrid.directive.html  
   * task.customList.directive.html  
 * edit
   * edit.html
   * edit.controller.js
 * form
   * form.html
   * form.controller.js
 * note  
   * note.html
   * note.module.js
   * note.controller.js
   * note.customList.directive.js
   * note.storage.service.js
 * task
   * task.html
   * task.controller.js
   * task.customCard.directive.js
   * task.customGrid.directive.js
   * task.customList.directive.js
   * task.module.js
   * task.storage.service.js
  * todoApp.module.js  
* style
 * style.css 
* index.html  
* README.md
