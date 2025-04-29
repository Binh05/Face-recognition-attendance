function tangso() {
    if ('AbsolutePressureSensor' in window) {
        const sensor = new AbsolutePressureSensor()
    
        sensor.addEventListener('reading', () => {
            document.getElementById('number').textContent = sensor.pressure
        });
        sensor.start();
    }
    else 
    {
        document.getElementById('number').textContent = "Khong ho tro cam bien"
    }
}



