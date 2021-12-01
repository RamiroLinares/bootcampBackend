export async function universityComunication() {

    const hour = new Date().getHours();
    let turn = '';
    if (hour > 8 && hour < 22) {
        turn = 'day'
    } else { turn = 'night' }
    let systemModule = '';

    if (turn === "day") {
        systemModule = await import('./healthSystems/SanPedro.mjs')
    } else {
        systemModule = await import('./healthSystems/LosOlivos.mjs')
    }

    const system = new systemModule.default()

    return system.getAvailableDoctors();
}

universityComunication()