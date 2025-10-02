import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SaveService {
  saveCompleted = new Subject<string>();

  constructor(private localStorageService: LocalStorageService) {}

  // Tipagem para os dados dos componentes: o valor é genérico (pode ser qualquer tipo), mas é tipado como T.
  saveAll<T>(componentsData: { [key: string]: T }): void {
    for (const key in componentsData) {
      if (Object.prototype.hasOwnProperty.call(componentsData, key)) {
        this.saveComponentData(key, componentsData[key]);
      }
    }
    this.saveCompleted.next('Dados salvos com sucesso!');
  }

  // Tipagem do método saveComponentData como genérica (T representa o tipo dos dados)
  private saveComponentData<T>(key: string, data: T): void {
    try {
      this.localStorageService.guardarDados<T>(key, data);
      console.log(`Data for ${key} saved successfully.`);
    } catch (error) {
      console.error(`Error saving data for ${key}:`, error);
      this.saveCompleted.next(`Erro ao salvar dados para ${key}`);
    }
  }
}
