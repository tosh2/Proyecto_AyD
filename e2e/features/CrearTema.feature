Feature: Crear tema
    Scenario: Crear tema con tag
        Given la aplicacion me dirija a la pagina de crear tema
        When la aplicacion tenga un campo para el nombre del tema
        and tenga como nombre "Tema prueba"
        and la aplicacion tenga un campo para la descripcion del tema 
        and tenga como descripcion "Aplicacion Angular"
        and la aplicacion tenga un campo para los tags de los temas
        and tenga como tag "#analisis1"
        and tenga un boton para crear el tema nuevo
        Then se le dara click al boton de crear tema
        and los campos de aplicacion se limpiaran
        and me aparecera un mensaje "Tema Creado Exitosamente"