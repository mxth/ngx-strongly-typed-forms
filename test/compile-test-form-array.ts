import {AbstractControl, FormArray, FormControl} from '../model';
import {Bar} from './interfaces';

let barArray: FormArray<Bar> = new FormArray([new FormControl<Bar>({prop: ""}), new FormControl<Bar>(undefined)]);
let barsControll: AbstractControl<Bar[]> = barArray;
