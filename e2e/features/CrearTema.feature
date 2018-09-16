Feature: Crear tema
    Scenario: Crear tema con tag
        Given la aplicacion me dirija a la pagina de crear tema
        And la pagina tenga un campo para el nombre del tema y tenga como valor "Tema prueba"
        And la pagina tenga un campo para la descripcion del tema y tenga como valor "Descripcion de prueba"
        And la pagina tenga un campo para el tag del tema y tenga como valor "#tagprueba"
        When se presione el boton de CrearTema
        Then recargue la pagina de crear tema
    Scenario: Crear tema sin tag
        Given la aplicacion me dirija a la pagina de crear tema
        And la pagina tenga un campo para el nombre del tema y tenga como valor "Tema prueba"
        And la pagina tenga un campo para la descripcion del tema y tenga como valor "Descripcion de prueba"
        When se presione el boton de CrearTema
        Then recargue la pagina de crear tema