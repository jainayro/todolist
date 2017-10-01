import { Injectable } from '@angular/core';
import { Item } from './Item';
import { LISTCONTENT } from './mock-list';

@Injectable()
export class ListService {


  addList(): void {}

  getList(): Item[] {
    return LISTCONTENT;
  } // stub

}
