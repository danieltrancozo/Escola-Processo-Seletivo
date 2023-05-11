# Escola-Processo-Seletivo

Esse é o projeto para o processo seletivo conforme pedido. um front-end em angular 6+ (15.2.6), e um back-end em c#(dotnet 7.0).

# Avisos Angular:

* Todas as partes foram implementadas.
* O volume das turmas ainda não é atualizado dinamicamente na aplicação de acordo com as mudanças feitas na parte dos alunos.
* Criar uma turma com volume maior do que um aluno ainda resulta na criação de um único aluno. Mas, eu ainda não tenho certeza se isso se da por um erro no código, ou porque o meu computador tem dificuldade em processar a execução da api, da aplicação, de dois terminais, (pelo menos) um IDE e o navegador.
* Ao criar notas, é possível lançar todas as notas de todas as provas de uma única vez, assim como é possivel criar as notas sem nenhuma nota de prova.
* Ao atualizar notas o mais recomendado é lançar uma prova por vez em ordem para que, ao lançar a nota da terceira prova, seja atualizada a média e situação do aluno naquela matéria.
* A função de simular testa se o aluno tem aprovação em mais da metade das matérias em que ele tem notas registradas.

# Avisos DotNet:

* A ordem de criação de entradas prevista no fluxo de aplicação é Professor, Matéria (Requer um id de professor válido!), Turma, Aluno (Requer um id de turma válido!) e, por fim, Notas (Requer um id de aluno e um id de matéria válidos!).
* Qualquer mudança na tabela de alunos que altere o status de ativo ou a turma de um aluno, tambem altera o volume da turma associada ao aluno.
* A criação de alunos para preencher uma turma recem criada ainda apresenta o problema de criar um único aluno independentemente do valor de volume da turma.

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
* 3- Nesse mesmo terminal digite o comando "dotnet clean" e aperte a tecla enter. (Certifique-se de que você possui o dotnet core instalado na versão 7.0 para rodar o projeto!)
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

# Alerta!

* A execução só flui desse jeito caso você já possua a versão mais recente do Node que seja compatível com a versão do angular usada no projeto e a instalação do front já tenha ocorrido com sucesso. Caso contrário, isntale o NodeJS(v18.15.0) no seu computador e, após o passo 7 use a sequência de comandos "npm install", "npm update" e "npm audit fix" para instalar o projeto corretamente. depois siga o restante dos passos.
* Originalmente, a ideia seria adicionar um método de controle para garantir que um mesmo aluno não tivesse dois registros de notas de uma mesma matéria, mas, eu optei por me dedicar a tornar outro projeto operacional por agora.

# Esse foi o meu projeto. Espero que gostem.
