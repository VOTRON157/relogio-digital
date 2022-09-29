window.onload = function() {
    setInterval(() => {
        atualizarHora()
    }, 1000);
    function atualizarHora(){
        let data = new Date();
        let hora = data.getHours() < 10 ? "0" + data.getHours() : data.getHours()
        let min = data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes()
        let seg = data.getSeconds() < 10 ? "0" + data.getSeconds() : data.getSeconds()
        document.getElementById("hora").innerHTML = `${hora}:${min}:${seg}`
    }
}