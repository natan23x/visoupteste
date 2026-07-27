const codigoPix =
"00020101021126330014br.gov.bcb.pix01115560995487852040000530398654045.005802BR5915NATAN P PEREIRA6006OSASCO62070503***6304BFB6";

function copiarPix(){

navigator.clipboard.writeText(codigoPix);

alert("Código PIX copiado!");

}