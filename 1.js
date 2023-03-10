const celsus = Number.parseFloat(prompt('Введите температуру в градусах Цельсия: '));

function Transformation(c){
   let farengeit = (9 / 5) * c + 32;
   alert(`Цельсий: ${c} Фаренгейт: ${Math.round(farengeit*100)/100}`);
}

Transformation(celsus)
