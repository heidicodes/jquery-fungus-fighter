$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHPMeter = 100;
let attackAPMeter = 100;
const arcaneSceptre = {name:'arcane-sceptre', damage: 14, cost: 12}
const entangle = {name:'entangle', damage: 9, cost: 23};
const dragon = {name:'dragon-blade', damage: 47, cost: 38};
const starFire = {name:'star-fire', damage: 25, cost: 33};

function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
 // EVENT
    // Handle the attack button click event
 
 $('.attack-btn.arcane-sceptre').on('click', attackBtnArcaneOnClick); 
 $('.attack-btn.entangle').on('click', attackBtnEntangleOnClick);
 $('.attack-btn.dragon-blade').on('click', attackBtnDragonOnClick);
 $('.attack-btn.star-fire').on('click', attackBtnStarFireOnClick);

}
 // STATE
    // update the state variables
    // Freaky Fungus needs to lose HP pts
function attackBtnArcaneOnClick() {
    console.log('results:', attackAPMeter - arcaneSceptre.cost, fungusHPMeter - arcaneSceptre.damage);
    if (attackAPMeter > arcaneSceptre.cost) {
        fungusHPMeter = fungusHPMeter - arcaneSceptre.damage
        attackAPMeter = attackAPMeter - arcaneSceptre.cost;
    }
    render();
} 
function attackBtnEntangleOnClick() {
    console.log('results:' );
    if (attackAPMeter > entangle.cost) {
    fungusHPMeter = fungusHPMeter - entangle.damage;
    attackAPMeter = attackAPMeter - entangle.cost;
    }
    render();
}
function attackBtnDragonOnClick() {
    console.log('results:');
    if (attackAPMeter > dragon.cost) {
    fungusHPMeter = fungusHPMeter - dragon.damage;
    attackAPMeter = attackAPMeter - dragon.cost;
    }
    render();
}
function attackBtnStarFireOnClick() {
    console.log('results:');
    if (attackAPMeter > starFire.cost) {
    fungusHPMeter = fungusHPMeter - starFire.damage;
    attackAPMeter = attackAPMeter - starFire.cost;
    }
    render();
}
 // RENDER 
    // rendering to the DOM
function render() {
    $('#ap-meter').val(attackAPMeter);
    $('#hp-meter').val(fungusHPMeter);
    $('.ap-text').text(attackAPMeter + ' AP');
    $('.hp-text').text(fungusHPMeter + ' HP');

    if (fungusHPMeter <= 0) {
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('dead');
    }
    if (attackAPMeter <= 0) {
        $('.freaky-fungus').addClass('jump');
        $('.freaky-fungus').removeClass('walk');
    }

    let canCastSceptre = attackAPMeter >= arcaneSceptre.cost
    let canEntangle = attackAPMeter >= entangle.cost
    let canDragon = attackAPMeter >= dragon.cost
    let canStarFire = attackAPMeter >= starFire.cost

    if (!canCastSceptre) {
        $('.attack-btn.arcane-sceptre').prop('disabled', true);
    }
    if (!canEntangle) {
        $('.attack-btn.entangle').prop('disabled', true);
    }
    if (!canDragon) {
        $('.attack-btn.dragon-blade').prop('disabled', true);
    }
    if (!canStarFire) {
        $('.attack-btn.star-fire').prop('disabled', true);
    }
}

  // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

