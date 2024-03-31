let texto1=document.getElementById('frase1');
let texto2=document.getElementById('frase2');

function encriptar(){
  if (textOk()) {
    let datosE = {"a":"ai","e":"enter","i":"imea","o":"ober","u":"ufat"};
    let textoEncriptado = texto1.value.replace(/[aeiou]/g, function(match){
      return datosE[match]})
    texto2.value=textoEncriptado;
  }else{
    texto2.value='ERROR: El texto a encriptar no debe tener mayúsculas ni caracteres especiales.';
  }}

function desencriptar(){
  if (textOk()) {
    let tmpDat=["enter","imea","ai","ober","ufat"];
    let rgDese=new RegExp(tmpDat.join("|"),"g");
    let datosD={"ai":"a","enter":"e","imea":"i","ober":"o","ufat":"u"};
    let textoDesencriptado = texto1.value.replace(rgDese,function(match){
      return datosD[match]})
    texto2.value=textoDesencriptado;
  }else{
    texto2.value='ERROR: El texto a desencriptar no debe tener mayúsculas ni caracteres especiales.';
  }}

function textOk(){
  for (let i= 0; i< texto1.value.length; i++) {
    if(!(texto1.value[i] >= "a" && texto1.value[i] <= "z") && texto1.value[i] !== " "){
      return false;}}
  return true;}
  
function copiaTexto() {
  const textoACopiar = document.getElementById('frase2').value;
  navigator.clipboard.writeText(textoACopiar)
    .then(() => {
      console.log('Texto copiado al portapapeles: ', textoACopiar);
      texto1.value='';
      texto2.value='';
    })
    .catch(err => {
      console.error('Error al copiar el texto al portapapeles: ', err);});}

function pegaTexto() {
  navigator.clipboard.readText()
    .then(textoPegado => {
      texto1.value = textoPegado;
      console.log('Texto pegado desde el portapapeles: ', textoPegado);
    })
    .catch(err => {
      console.error('Error al pegar texto desde el portapapeles: ', err);
    });
}