import { Timestamp } from "rxjs";
import * as firebase from 'firebase';

export interface Comentario {
    id?: string; 
    $id_tema: string;
    contenido?: string;
    fecha?: Date;
    like: number;
    id_usuario?: string;
    nombre_usuario?: string;
}