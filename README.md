TimerPWA

TimerPWA es una aplicación web progresiva (PWA) que utiliza componentes web para proporcionar un temporizador con funcionalidad de sonido. Esta aplicación también utiliza Service Workers y un archivo manifest.json para proporcionar una experiencia de usuario offline y la capacidad de instalarse en el dispositivo del usuario como una aplicación nativa.

### Características
- Temporizador con botones de pausa, reproducción y reinicio.
- Reproducción de sonido al final del temporizador.
- Diseño responsivo que se adapta a diferentes tamaños de pantalla.
Tecnologías utilizadas
- Lit: Una biblioteca para construir componentes web rápidos y ligeros.
- @bubulazi/timer: Un componente de temporizador.
- @bubulazi/sound-player: Un componente de reproductor de sonido.
 ### Estructura del código
El código principal de la aplicación se encuentra en app.js. Aquí se define un componente App que utiliza los componentes timer-component y sound-component. Cuando el evento timer-end se dispara, el sonido se reproduce.



