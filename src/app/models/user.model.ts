import { Assessment } from './assessment.model';

export class User {
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public assessment: Assessment[]
  ){}
}
