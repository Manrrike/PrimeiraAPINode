void main() {
  Aluno aluno1 = Aluno('Gabriel', 5, 5);

  aluno1.apresentar();
}

class Aluno {
  String nome;
  double n1;
  double n2;
  Aluno(this.nome, this.n1, this.n2);

  apresentar() {
    print(
      ' Anulo: ' +
          nome +
          ' nota: ' +
          calcularMedia().toString() +
          ' Situação: ' +
          verificarSituacao(),
    );
  }

  double calcularMedia() {
    return (n1 + n2) / 2;
  }

  String verificarSituacao() {
    return calcularMedia() >= 7 ? "Aprovado" : "Reprovado";
  }
}
