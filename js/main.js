// cria referência para os elementos
const patientsName = document.querySelector('#patientName');
const addButton = document.querySelector('.addName');
const btUrgency = document.querySelector('.btUrgency');
const btAttendance = document.querySelector('.btAttendance');
const waitingPatientList = document.querySelector('.waitingPatientList');
const patientInAttendance = document.querySelector('.patientInAttendance');

const listToStorePatients = [];  // armazer a lista dos paciêntes

// cria um "ouvinte" de evento esperando o botão ser clicado
addButton.addEventListener('click', () => {
    const name = patientsName.value;
    
    if(name === '') {
        alert('O campo está em branco, digite um nome!');
        return;
    };

    listToStorePatients.push(name);  // adicionar os nomes dos paciêntes na lista
    
    let listNames = "";
    for(let i = 0; i < listToStorePatients.length; i++) {  // vai percorrer o vetor "listToStorePatients" 
        listNames += `${i + 1}. ${listToStorePatients[i]}\n` // vai atribuir o index e o nome na variável "listNames"
    } 

    waitingPatientList.innerText = listNames;  // imprimir a lista de paciêntes na espera
    patientsName.value = "";
    patientsName.focus();
})

btUrgency.addEventListener('click', () => {
    const name = patientsName.value;
    // se o campo nome do paciênte estiver em branco, um alert será acionado
    if(name === '') {
        alert('O campo está em branco, digite um nome!');
        return
    }

    let listNames = "";  // inicializar um string vazia
    listToStorePatients.unshift(name);  // nome do paciênte será o primeito da lista
    listToStorePatients.forEach((pacient, index) => {
        listNames += `${index + 1}. ${listToStorePatients[index]}\n`;
    })

    waitingPatientList.innerText = listNames;  // listar paciêntes em espera
    patientsName.value = "";  // limpar campo paciênte
    patientsName.focus();
})

btAttendance.addEventListener('click', () => {
    if(listToStorePatients == 0) {
        alert('Não há paciêntes na lista de espera!')
        return
    }

    const patientNameInAttendance = listToStorePatients.shift();
    patientInAttendance.innerText = patientNameInAttendance;

    let listNames = "";  

    listToStorePatients.forEach((pacient, index) => {
        listNames += `${index +1}. ${listToStorePatients[index]}\n`
    })    

    waitingPatientList.innerText = listNames;
    patientsName.value = "";  // limpar campo paciênte
    patientsName.focus();
})
