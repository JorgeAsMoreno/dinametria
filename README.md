This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Descripción General:
- Construye un dashboard interactivo que visualice datos de una API pública de tu elección. El dashboard debe incluir gráficos, filtros y diseño responsivo. Esta tarea evaluará tu habilidad para manejar datos, crear visualizaciones dinámicas y diseñar una interfaz de usuario responsiva.

## Stack utilizado
- React
- TypeScript
- Next
- Styled-components
- Axios
- Chart.JS/React-chart

## Instalacion
- Se qequiere una version de node =>18
- Es importante agregar las variables de entorno que se necesitan para que el proyecto funcione, las cuales las puedes consultar [aqui](https://github.com/JorgeAsMoreno/dinametria/wiki/Environments-Variables#variables)
  
Para comenzar, Sigue los siguientes pasos:

```bash
# clone repo
https://github.com/JorgeAsMoreno/dinametria.git
# instalar dependencias
npm install
# Iniciar la app
npm run dev
```

Abrir la aplicacion en: [http://localhost:3000](http://localhost:3000).


## Requisitos
1. **Visualización de Datos:**
  - Elegi la API de CoinGecko pero despues tuve que cambiarla ya que la API tenia problemas ya que era unaversion free y estaba muy limitada, la cambie utilizando [CoinRanking](https://developers.coinranking.com/api/documentation) lo que me redujo mucho el tiempo ya que tuve que ajustar rapido a lo que esta API me ofrecia, se ajusto de igual manera pero pude cumplir con lo solicitado con la version free.
     
2.  **Graficos:**
  - Se realizo una grafica utilizando `Chart.Js` y `React-chart` donde refleja el precio historico de la crypto seleccionada
  - Estos mismos van apoyados con tooltips con informacion sobre la grafica

3. **Filtros e Interactividad:**
 - Aplique tres filtros diferentes usando diferentes enfoques y aplicaciones de ordenamiento busqueda e interactividad:
   - El primero esta en el header y realiza la busqueda por sugerencia de crypto
   - La segunda es una busqueda dentro del array de resultados utilizando el hook `useMemo` para mejor performance
   - El tercero es filtro por precio, volumen, marketCap etc

4. **Responsivo:**
   - Utilize Flexbox para hacer el sitio responsivo aplicando `MobileFirst` como patron
   - Se creo un `customHook` para manejar si el sitio estaba mobile o no y mostrar/ocultar informacion
   - Se utilizaron `media queries` para manejar tambien los diferentes tipos de tama;os

5. **Calidad del Código:**
   - Se utilizo NextJs para al manejar datos sensibles como un `API_TOKEN` no exponerlo desde el front y crear dos capas de seguridad al mismo `Clients` y `Services` los cuales se consumen dentro de un `api` que se crea en `Next` de esta manera nos aseguramos de la seguridad, modularidad y performance de la aplicacion al hacer consultas
   - Asi tambien se crearon helpers para evitar consultas inseguras desde el lado del front teniendo un mejor manejo de errores y validaciones de peticiones
   - Se crearon archivos para manejar de manera independiente responsabilidades, como `types`, `utils`, `helpers` y componentes con responsabilidad unica haciendo que sea todo reutilizable y modular
    
6. **Rendimiento y manejo de errores:**
   - Se tomo en cuenta el rendimiento a la hora de hacer las peticiones al backend teniendo timeouts, se crearon estados de carga para el manejo de graficas y tablas asi como herramientas de next por ejemplo: `Link`, `Image` que ayudan al rendimiento de la misma
   - Asi tambien se cuido el uso y manejo de peticiones para no hacer solicitudes inecesarias cuando no se necesitan o no se interactuan
   - Se crearon validaciones por parte de la peticion con el status para validar que la respuesta si sea la esperada asi tambien como capas entre el frontend y el backend para poder tener un manejo de errores y asi tambien en un futuro poder debuggear el codigo de manera mas facil
  
7. **Accesibilidad y pruebas**
   - Se cuido la parte de la accesibilidad usando `aria` en componentes interactivos asi como `alts` relevantes en imagenes y graficos

## Resumen

Aunque el imprevisto de la API me quito mucho tiempo ya que tenia un par de dias con eso, pude tener los requisitos y features donde se demuestran diferentes aplicaciones de las mismas, cuidando detalles entre navegadores, performance, seguridad y sobre todo escalabilidad entre componentes y paginas
