1: Can you use the Hello component more than once in the App component? What happens if you do?


2: Can you render the Message component directly within the App component? What happens if you do?


--1: Si posso usare il componente Hello più di una volta dentro il componente App, questo comporterà il fatto di visualizzare più volte il contenuto di Hello su schermo in base al suo posizionamento.


--2: Se con render intendiamo di impostare la root di Message (ReactDOM.render) direttamente dentro il file App, è possibile farlo, ma otterremo un messaggio di errore, oltre il fatto che verrà mostrata in Pag solamente il contenuto di Message. La root si può impostare solamente su di un componente, e generalmente dentro il file index.jsx strettamente collegato al file index.html