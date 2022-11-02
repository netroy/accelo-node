import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type AcceloMap = {
    company: 'getAll';
};

export type Accelo = AllEntities<AcceloMap>;

export type AcceloCompany = Entity<AcceloMap, 'company'>;

export type CompanyProperties = PropertiesOf<AcceloCompany>;