export interface IAppBasic {
  appName: string
  appType: 'Quick Online Courses' | 'Face to Face Discussions' | 'Full Intro Training'
}

export type TAppFramework = 'HTML5' | 'ReactJS' | 'Angular' | 'Vue'

export interface IAppDatabase {
  databaseName: string
  databaseSolution: 'MySQL' | 'Firebase' | 'DynamoDB'
}

export type TAppStorage = 'Basic Server' | 'AWS' | 'Google'

export interface ICreateAppData {
  appBasic: IAppBasic
  appFramework: TAppFramework
  appDatabase: IAppDatabase
  appStorage: TAppStorage
}

export const defaultCreateAppData: ICreateAppData = {
  appBasic: {appName: '', appType: 'Quick Online Courses'},
  appFramework: 'HTML5',
  appDatabase: {databaseName: 'db_name', databaseSolution: 'MySQL'},
  appStorage: 'Basic Server',
}

export type StepProps = {
  data: ICreateAppData
  updateData: (fieldsToUpdate: Partial<ICreateAppData>) => void
  hasError: boolean
}

// customer

export interface ICustomerBasicInfo {
  fullName: string;
  code?: string; // Optional field

}

export type TState = 'Andhra Pradesh' | 'Delhi' | 'Maharashtra' | 'Kerala' | 'Tamil Nadu';

export interface ICustomerContact {
  email:string;
  mobile: string;
  mobile2?: string; // Optional field

}

export interface ICustomerCompany {
  companyName?: string; // Optional field
  route?: string; // Optional field
  salesPersonAssigned?: string; // Optional field
}

export interface ICustomerLocation {
  address: string;
  address2?: string; // Optional field
  state: string;
  gmap?: string; // Optional field
}

export interface ICreateCustomerData {
  basicInfo: ICustomerBasicInfo;
  contact: ICustomerContact;
  company: ICustomerCompany;
  location: ICustomerLocation;
}

export const defaultCreateCustomerData: ICreateCustomerData = {
  basicInfo: { fullName: '', code: '' },
  contact: {email: '', mobile: '',  mobile2: '', },
  location: { address: '' ,address2: '' ,state: 'Andhra Pradesh', gmap: '' },
  company: { companyName: '', route: '', salesPersonAssigned: '' },
}

export type CustomerFormProps = {
  data: ICreateCustomerData;
  updateData: (fieldsToUpdate: Partial<ICreateCustomerData>) => void;
  hasError: boolean;
};

