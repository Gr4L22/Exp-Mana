var bonusName = document.getElementById('full_name');
function nameBonus(e) {
    document.getElementById('bonus').innerHTML = `<h2> Hello : ${e.target.value}</h2>`;
    console.log(e.target.value);
}
bonusName.addEventListener('keyup',nameBonus);