//5.8
let idade = Number(prompt("Digitar sua idade:"));

console. log(idade); // teste

if(idade == 15) {
    alert("vc não pode votar!");
}
if(idade == 16 || idade == 17){
    alert("vc pode votar, mas n é obrigatorio");
}
if(idade >= 16 && idade <=17){
    alert("vc pode votar, mas n é obrigatorio")
}
if(idade >=18 && idade <= 65){
    alert("vc é obrigado a votar")
}
if(idade >= 65){
    alert("seu voto é facultativo")
}