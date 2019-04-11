import { category } from './category.model';

export class categoriesDetail{
  constructor
  ( public category: category,
    public question1:string,
    public question2:string,
    public question3:string,
    public id: number
  ) { }

}
