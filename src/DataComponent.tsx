import React, { useState, useEffect } from 'react';

const DataComponent: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Hacer la llamada a la API usando fetch
    fetch('https://jos5web.000webhostapp.com/indexx.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Transformar la respuesta a JSON directamente
      })
      .then(data => {
        console.log(data); // Imprimir la respuesta en la consola para verificar
        setData(data); // Establecer los datos en el estado del componente
      })
      .catch(error => console.error('Error:', error));
  }, []); // El segundo argumento del useEffect es un array vacío, lo que significa que se ejecutará una vez después del montaje.

  return (
    <div className="response-container">
      <h2>Respuesta de la API:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataComponent;
