import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
  let appRoutingModule: AppRoutingModule;

  beforeEach(() => {
    appRoutingModule = new AppRoutingModule();
  });

  it('Rutas de Aplicacion funcionando Correctamente', () => {
    expect(appRoutingModule).toBeTruthy();
  });
});
