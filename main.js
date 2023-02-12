function getCity(){

    let iata_peru = ['Arequipa', 'Andahuaylas', 'Anta (Huaraz)', 'Ayacucho', 'Cajamarca', 'Chimbote', 'Cuzco', 'Chachapoyas', 'Chiclayo', 'Huanuco', 'Ilo', 'Iquitos', 'Juanjui', 'Juliaca', 'Lima', 'Moyobamba', 'Pisco', 'Piura', 'Pucallpa', 'Puerto Maldonado', 'Rioja', 'Tacna', 'Talara', 'Tarapoto', 'Tingo Maria', 'Trujillo', 'Tumbes', 'Yurimaguas'];
    
    let options = '';
    
    for (let i = 0; i < iata_peru.length; i++){
        options += `<option value="${iata_peru[i]}">${iata_peru[i]}</option>\n`;
    }
    // console.log(options);
    document.getElementById('origin').innerHTML = options;
    document.getElementById('destination').innerHTML = options;
}

function getAirline(){
    let airlines = ["Latam", "Sky", "Viva", "JetSmart", "Star Perú", "Aeroméxico", "Volaris"];

    let options = "";

    for (let i = 0; i < airlines.length; i++){
        options += `<option value="${airlines[i]}">${airlines[i]}</option>\n`;
    }

    document.getElementById('airline').innerHTML = options;
}

getCity()
getAirline()