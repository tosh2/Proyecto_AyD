import { Timestamp } from "rxjs";
import * as firebase from 'firebase';

export interface TemaFavorito {
    id?: string; 
    $id_tema: string;
    $id_usuario: string;
    bandera: boolean;
}