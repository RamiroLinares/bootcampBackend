const turn="day";
let systemModule='';

if(turn==="day"){
systemModule=await import('./healthSystems/SanPedro.mjs')
}else{
systemModule=await import('./healthSystems/LosOlivos.mjs')
}

const system= new systemModule.default()
console.log(system.getAvailableDoctors())


