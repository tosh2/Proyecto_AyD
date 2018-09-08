import { Timestamp } from "rxjs";
import * as firebase from 'firebase';

export interface Like {
    id?: string; 
    $id_comentario: string;
    $id_usuario: string;
}