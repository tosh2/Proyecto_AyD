import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
  let appRoutingModule: AppRoutingModule;

  beforeEach(() => {
  });

  it('Rutas de Aplicacion funcionando Correctamente', () => {
    appRoutingModule = new AppRoutingModule();

    expect(appRoutingModule).toBeTruthy();
  });
});
