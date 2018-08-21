import { Timestamp } from "rxjs";
import * as firebase from 'firebase';

export interface Comentario {
    $id_tema: string;
    contenido?: string;
    fecha?: Date;
}