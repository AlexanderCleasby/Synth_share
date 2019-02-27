
//Initialize Synths
var voice1 = new Tone.Synth({
    oscillator: {
        type: document.getElementById("voice1_type_dropdown").value,
    },
    envelope: {
        attack: document.getElementById("voice1_attack_slider").value,
        decay: document.getElementById("voice1_decay_slider").value,
        sustain: document.getElementById("voice1_sustain_slider").value,
        release: document.getElementById("voice1_release_slider").value
    },
    detune:Number(document.getElementById("voice1_detune_slider").value)
    
}).toMaster()

var voice2 = new Tone.Synth({
    oscillator: {
        type: document.getElementById("voice2_type_dropdown").value,
        
    },
    envelope: {
        attack: document.getElementById("voice2_attack_slider").value,
        decay: document.getElementById("voice2_decay_slider").value,
        sustain: document.getElementById("voice2_sustain_slider").value,
        release: document.getElementById("voice2_release_slider").value
    }
}).toMaster()

var voice3 = new Tone.Synth({
    oscillator: {
        type: document.getElementById("voice3_type_dropdown").value,
        
    },
    envelope: {
        attack: document.getElementById("voice3_attack_slider").value,
        decay: document.getElementById("voice3_decay_slider").value,
        sustain: document.getElementById("voice3_sustain_slider").value,
        release: document.getElementById("voice3_release_slider").value
    }
}).toMaster()
console.log("meh")
voice1.set("detune", Number(document.getElementById("voice1_detune_slider").value))
voice2.set("detune", Number(document.getElementById("voice2_detune_slider").value))
voice3.set("detune", Number(document.getElementById("voice3_detune_slider").value))

//trigger attack on key press
document.querySelector('tone-keyboard').addEventListener('noteon', e => {
    voice1.triggerAttack(e.detail.name)
    voice2.triggerAttack(e.detail.name)
    voice3.triggerAttack(e.detail.name)
})

//trigger release on key release
document.querySelector('tone-keyboard').addEventListener('noteoff', e => {
    voice1.triggerRelease()
    voice2.triggerRelease()
    voice3.triggerRelease()
})

//REPATING SECTION THAT SHOULD PROBABLY BE A LOOP!!!!
//create event for hanfling sliders
var attrChange1 = (e)=>{
    let slidertype=e.target.id.split("_")[1]
    voice1.envelope[slidertype]=Number(e.target.value)
    if(slidertype=="detune"){
        console.log(e.target.value)
        voice1.set("detune",Number(e.target.value))
    }
}

//change voice type in response to selector
document.getElementById("voice1_type_dropdown").addEventListener("change", (e) => {
    voice1.oscillator.type = e.target.value
})

//change each attribute
document.getElementById("voice1_attack_slider").addEventListener("input", attrChange1)

document.getElementById("voice1_decay_slider").addEventListener("input", attrChange1)

document.getElementById("voice1_sustain_slider").addEventListener("input", attrChange1)

document.getElementById("voice1_release_slider").addEventListener("input", attrChange1)

document.getElementById("voice1_detune_slider").addEventListener("input", attrChange1)

//REPATING SECTION THAT SHOULD PROBABLY BE A LOOP!!!!
//create event for hanfling sliders
var attrChange2 = (e)=>{
    let slidertype=e.target.id.split("_")[1]
    voice2.envelope[slidertype]=Number(e.target.value)
    if(slidertype=="detune"){
        console.log(e.target.value)
        voice2.set("detune",Number(e.target.value))
    }
}

//change voice type in response to selector
document.getElementById("voice2_type_dropdown").addEventListener("change", (e) => {
    voice2.oscillator.type = e.target.value
    //voice2.set({oscillator:{type: e.target.value}
})

//change each attribute
document.getElementById("voice2_attack_slider").addEventListener("input", attrChange2)

document.getElementById("voice2_decay_slider").addEventListener("input", attrChange2)

document.getElementById("voice2_sustain_slider").addEventListener("input", attrChange2)

document.getElementById("voice2_release_slider").addEventListener("input", attrChange2)

document.getElementById("voice2_detune_slider").addEventListener("input", attrChange2)

//REPATING SECTION THAT SHOULD PROBABLY BE A LOOP!!!!
//create event for hanfling sliders
var attrChange3 = (e)=>{
    let slidertype=e.target.id.split("_")[1]
    voice3.envelope[slidertype]=Number(e.target.value)
    if(slidertype=="detune"){
        console.log(e.target.value)
        voice3.set("detune",Number(e.target.value))
    }
}

//change voice type in response to selector
document.getElementById("voice3_type_dropdown").addEventListener("change", (e) => {
    voice3.oscillator.type = e.target.value
})

//change each attribute
document.getElementById("voice3_attack_slider").addEventListener("input", attrChange3)

document.getElementById("voice3_decay_slider").addEventListener("input", attrChange3)

document.getElementById("voice3_sustain_slider").addEventListener("input", attrChange3)

document.getElementById("voice3_release_slider").addEventListener("input", attrChange3)

document.getElementById("voice3_detune_slider").addEventListener("input", attrChange3)