void main(){
    final numeros = [ 1, 2, 3, 4, 5, 6, 7];
    final dobrado = numeros.map((n) => n * 2).tolist();
    final pares = numeros.where((n) => n.isEven).tolist();
saudacao();
final media = calcularMedia(2,3);
print('media: ' + media + 'Situacao: ' + situacao(media));
}
void saudacao()
{
    print("Ola, turma");
}
double calcularMedia(double n1, double n2){
    return (n1 + n2 ) / 2;

}
String situacao(double media){
    return media >= 7 ? "Aprovado" : "Reprovado";

}X