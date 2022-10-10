# Escola-Processo-Seletivo

Esse é o projeto para o processo seletivo conforme pedido. um front-end em angular 6+ (14), e um back-end em c#.

# Avisos Angular:

* Apesar da extenção no prazo de entrega que me permitiu trabalhar no projeto por um total de 6 dias. Esse tendo sido meu primeiro contato com o framework Angular me permitiu chegar apenas até esse ponto do front-end nesse tempo.
* A parte para turmas não foram totalmente implementadas, pois nos processos de criação de funcionalidades e teste de falhas, com o tempo e nível de habilidade que eu tinnha disponíveis, eu só consegui implementar de forma funcional até esse ponto de cada uma.
* Aa partes de professores e de Alunos foram as primeiras a ser criada tanto no back-end como no front-end de forma completa e funcional.
* As partes de notas e matérias não tiveram sua implementação iniciada no front-end devido as dificuldades encontradas na implementação das funcionalidades requeridas em turmas, que me tomaram a maior parte do tempo de projeto para implementar com sucesso.
* A aplicação apresenta um erro de CORS na hora de se comunicar com o back-end se for aberta no navegador normalmente. Para contornar o pronblema, como todos os artigos que eu pude ler não me ajudaram a solucionar o problema de fato, eu passei a usar o seguinte comando através do Executar do Windows (Atalho "Win+R" no teclado) "chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security".

# Avisos DotNet:

* Algumas vezes tive problemas com a estrutura da url em métodos PUT que já haviam sido verificados como funcionais préviamente. A única solução que encontrei nesses casos foi, parar o servidor, aplicar o comendo "dotnet clean" pelo terminal na pasta do projeto e reiniciar o servidor com o comando "dotnet run". Caso isso também falhasse, eu apenas alterava a forma de separar parâmetros passados pela url novamente.
* A ordem de criação de entradas prevista no fluxo de aplicação é Professor, Matéria (Requer um id de professor válido!), Turma, Aluno (Requer um id de turma válido!) e, por fim, Notas (Requer um id de aluno e um id de matéria válidos!).
* Originalmente eu havia planejado que o ato de alterar a turma de um aluno, ou o ato de desativar o mesmo, tivesse um efeito em cascata sobre a turma, reduzindo o valor apontado como seu total de alunos, bem como, aumentando o inidacador de alunos na nova turma caso o aluno fosse transferido. Porém o código não funcionava como desejado e foi apenas parcialmente implementado através da função "updateTurma()" no front-end.

# Classes:

* Professores: Id (Int), Nome (String), Ativo (Boolean)
* Matérias: Id (Int), Nome (String), Peso1, Peso2, Peso3 (Double)
* Turmas: Id, Volume (Int)
* Alunos: Id (Int), Nome (String), Ativo, Aprovado (Boolean)
* Notas: Id, IdAluno, IdTurma (Int), Av1, Av2, Av3, Avf (Double), Aprovado, Final (Boolean)

# Funcionalidades Back-End:

* Em aluno, existe uma funcionalidade que deve coletar os dados de provas e pesos e retornar um estado de verdadeiro ou falso para a aprovação do aluno.
* Alunos, turmas e professores iniciam com o estado de ativo em verdadeiro. Alunos começam com o estado de aprovação em falso.
* Notas recebem a pontuação das avaliações e apenas através da tentativa de inserção de uma nota para avaliação final, executada a verificação de elegibilidade para provas finais bem como a verificação de aprovação do aluno na matéria.
* Um teste de aprovação da classe alunos apenas verifica os valores de aprovação presentes em notas do aluno e verifica se há um mínimo de 60% de aprovação.
* O teste de aprovação presente em notas recorre aos pesos definidos na matéria com id correspondente a propriedade idmateria presente em notas para realizar a média ponderada e retornar aprovação ou reprovação do aluno.
* A inserção de uma nota para avaliação final só será computada caso o status de elegibilidade para avaliação final seja positivo e o status de aprovação ainda seja falso.

# Funcionalidades Front-End:

* Professores, Alunos e turmas aceitam as funções Criar, Alterar, Desativar e Excluir.
* Para alterar qualquer das classes acima, é necessário Preencher os campos de criação corretamente antes de clicar no botão de alteração.
* Devido a não implementação da funcionalidade de notas, nem de matérias, a funcionalidade boletin, presente na tabela apontada pela funcionalidade de exibição de turma, retorna apenas uma camada em branco, e, a funcionalidade aprovação não realiza qualquer ação.

# Execução do Projeto:

* 1- Abra dois terminais dentro da pasta em que esse arquivo está localizado.
* 2- Em um dos terminiais digite o comando "cd back" e aperte a tecla enter.
* 3- Nesse mesmo terminal digite o comando "dotnet clean" e aperte a tecla enter. (Certifique-se de que você possui o dotnet core instalado na versão 5.0 para rodar o projeto!)
* 4- Agora digite o comando "dotnet run" e aperte a tecla enter.
* 5- O serivdor deve ter sido inicializado em "http://localhost:5001".
* 6- Em seu navegador digite na barra de endereço "http://localhost:5001/swagger/index.html" e aperte a tecla enter para verificar as funcionalidades do servidor.
* 7- No segundo terminal digite o comando "cd front" e aperte a tecla enter.
* 8- Em seguida, digite o comando "ng serve" e aperte a tecla enter. (tenha certeza de ter o NodeJs e o Angular instalados nas versões estáveis mais recentes para executar o projeto corretamente!)
* 9- O Aplicativo deve ficar disponível em "http://localhost:4200".
* 10- Use o atalho "Win+R" para abrir a ferramenta de execução do windows.
* 11- Digite o seguinte comando no espaço de input da ferramenta "chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security" e pressione "Ok" para executar.
* 12- Na barra de navegação do navegador que acaba de abrir digite "http://localhost:4200" e pressione enter para acessar a aplicação.
* 13- Use os botões laterais para navegar entre as partes da aplicação.

# Esse foi o meu projeto. Espero que gostem.
