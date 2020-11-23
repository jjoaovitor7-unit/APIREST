class Cliente {
    constructor(id, nome, endereco, email, dataDeCadastro){
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.email = email;
        this.dataDeCadastro = dataDeCadastro;
    }
}

module.exports = Cliente;