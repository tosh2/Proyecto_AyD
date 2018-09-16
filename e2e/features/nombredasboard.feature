Feature: nombredashboard
    Scenario: cargar el nombre en el panel principal
        Given este logueado en la aplicacion
        When en panel me mostrara la pagina principal
        Then ver el nombre de usuario que se llame "USUARIODEPRUEBA"
