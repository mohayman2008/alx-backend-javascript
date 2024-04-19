/// <reference path="crud.d.ts" />
import {RowID, RowElement} from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = Object.create(row);
updatedRow.age = 23;

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
