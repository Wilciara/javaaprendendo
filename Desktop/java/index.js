{console.log('** DINDIN ACADEMY **');
// comentários
let cursos = [{
    id: 1,
    titulo: 'Investimentos para Iniciantes',
    descricao: 'Esse curso é para quem não manja de investimento mas quer ficar rico',
    professor: 'Jane Doe',
    listaAulas: []
}, {
    id: 2,
    titulo: 'Renda Extra',
    descricao: 'Renda extra sem sair de casa',
    professor: 'Seu Madruga',
    listaAulas: []
}];

// console.log(cursos[1]);

function listarCursos() {
    let htmlCursos = "";
    //criando lista de cursos em HTML
    for (let index = 0; index < cursos.length; index++) {
        // console.log("Titulo: " + cursos[index].titulo);
        // Template String
        console.log(`
        Titulo: ${cursos[index].titulo}
        Descrição: ${cursos[index].descricao}
        Professor: ${cursos[index].professor}
        N. de Aulas: ${cursos[index].listaAulas.length}
        `);
        // = atribuir novo valor 
        // += acrescentar novo valor
        htmlCursos += `
            <article class="card">
                <h2>${cursos[index].titulo}</h2>
                <p>${cursos[index].descricao}</p>
                <p>Professor: ${cursos[index].professor}</p>
            </article>
        `;
    }
}

// listarCursos();

// function adicionarAula(idCurso, linkAula) {
//     // Find Index retorna posição do array do curso encontrado.
//     let cursoEncontrado = cursos.findIndex((curso) => {
//       return curso.id == idCurso;
//     });
//     console.log(cursos[cursoEncontrado]);
//   }
//   adicionarAula(2, "http://google.com");
    // selecionando elemento que vai englobar a lista
    let painelCursos = document.querySelector(".painel-cursos");
    // inserindo lista de cursos no html
    painelCursos.innerHTML = htmlCursos;}

function adicionarAula(idCurso, linkAula) {
    // encontrando posição do curso
    let indexCurso = null;
    for (let i = 0; i < cursos.length; i++) {
        if (cursos[i].id == idCurso) {
            indexCurso = i;
        }
    }
    // adicionando nova aula ao curso selecionado
    if (indexCurso != null) {
        cursos[indexCurso].listaAulas.push(linkAula);
        console.log(`Aula adcionada ao curso ${cursos[indexCurso].titulo}!`)
        console.log(`Aula adicionada ao curso ${cursos[indexCurso].titulo}!`)

    } else {
        console.log('Curso não encontrado.')
    }
}

adicionarAula(2,'https://youtube.com');
listarCursos();

let btnenviar = 

btnEnviar.onclick = function (evento) {
    evento.preventDefault();

    let titulo_input = docuemnto.querySelector('#titulo');
    let descricao_input = document.querySelector('#descricao');
    let professor_input = document.querySelector("#professor");
    listaAulas: []
};
//adicionando novo curso na lista
cursos.push(novoCurso);
//atualizar lista de  cursos no HTML
listarCursos();

