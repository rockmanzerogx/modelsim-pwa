window.ModelSimTutorial = {
    /**
     * Crea y devuelve una instancia configurada de driver.js
     * Requiere que la librería driver.js esté cargada previamente.
     */
    createDriver: function() {
        // Verificar que la librería esté cargada
        if (!window.driver || !window.driver.js) {
            console.error('Driver.js no está cargado. Asegúrate de incluir el CDN o archivo local de driver.js');
            return null;
        }

        const driver = window.driver.js.driver;

        // Definición de los pasos del tutorial
        const steps = [
            { 
                popover: { 
                    title: 'Bienvenido a ModelSim', 
                    description: 'Esta es una herramienta para crear y simular modelos de Dinámica de Sistemas de forma visual. Te guiaremos por las funciones principales.' 
                } 
            },
            { 
                element: '#toolsPanel', 
                popover: { 
                    title: 'Barra de Herramientas', 
                    description: 'Aquí seleccionas los elementos para construir tu modelo: Stocks (niveles), Flujos, Variables y Conectores.' 
                } 
            },
            { 
                element: '#canvasWrapper', 
                popover: { 
                    title: 'Lienzo de Modelado', 
                    description: 'Dibuja aquí tu diagrama. Haz clic para colocar elementos. Usa la rueda del ratón para hacer Zoom y arrastra para moverte.' 
                } 
            },
            { 
                element: '#propertiesPanel', 
                popover: { 
                    title: 'Editor de Propiedades', 
                    description: 'Al seleccionar un elemento, aquí podrás cambiar su nombre, valor inicial o escribir su ecuación matemática.' 
                } 
            },
            { 
                element: '#simControls', 
                popover: { 
                    title: 'Parámetros de Simulación', 
                    description: 'Define el tiempo inical, final y el paso de tiempo (DT) antes de ejecutar el modelo.' 
                } 
            },
            { 
                element: '#runSimBtn', 
                popover: { 
                    title: 'Ejecutar Simulación', 
                    description: 'Haz clic aquí para calcular el modelo y ver las gráficas y tablas de resultados.' 
                } 
            }
        ];

        // Configuración general del driver
        return driver({
            showProgress: true,
            animate: true,
            allowClose: true,
            nextBtnText: 'Siguiente',
            prevBtnText: 'Anterior',
            doneBtnText: 'Finalizar',
            steps: steps
        });
    }
};