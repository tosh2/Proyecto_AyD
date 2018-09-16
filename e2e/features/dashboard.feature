Feature: Dashboard
    Scenario: Cargar el menu de crear tema
        Given entre a la aplicacion
        When en el navegador se carga la pagina principal
        Then ver un primer menu que se llame "CREAR TEMA"
    Scenario: Carga el menu de Listar temas
        Given entre a la aplicacion
        When en el navegador se carga la pagina principal
        Then ver un segundo menu que se llame "LISTAR TEMAS"
    Scenario: Cargar el menu de temas
        Given entre a la aplicacion
        When en el navegador se carga la pagina principal
        Then ver un tercer menu que se llame "TEMAS"
    Scenario: Cargar todos los menus del panel principal
        Given entre a la aplicacion
        When en el navegador se carga la pagina principal
        Then ver un primer menu que se llame "CREAR TEMA"
        And ver un segundo menu que se llame "LISTAR TEMAS"
        And ver un tercer menu que se llame "TEMAS"

