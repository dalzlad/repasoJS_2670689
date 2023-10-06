function listarDatos(){
    let resultado = ''
    fetch('https://www.datos.gov.co/resource/pi36-fdpk.json')
    .then(response => response.json())
    .then(data => 
        {
            for(let i of data){
                resultado = resultado + '<tr><td>'+i.c_digo_municipio+'</td>'+
                '<td>'+i.nombre_municipio+'</td>'+
                '</tr>';
        }
         document.getElementById('contenido').innerHTML = resultado
    })
};