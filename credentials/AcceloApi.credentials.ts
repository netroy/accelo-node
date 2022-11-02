import {
		IAuthenticateGeneric,
		ICredentialType,
		INodeProperties,
} from 'n8n-workflow';

export class AcceloApi implements ICredentialType {
    name = 'acceloApi';
    displayName = 'Accelo Api Service Application Credentials';
    documentationUrl = 'https://github.com/redanthrax/accelo-node';
    properties: INodeProperties[] = [
            {
                    displayName: 'Deployment "deployment".accelo.com',
                    name: 'deployment',
                    type: 'string',
                    default: '',
                    placeholder: 'deployment',
            },
            {
                    displayName: 'Cient ID',
                    name: 'clientId',
                    type: 'string',
                    default: '',
            },
            {
                    displayName: 'Client Secret',
                    name: 'clientSecret',
                    type: 'string',
                    typeOptions: {
                            password: true,
                    },
                    default: '',
            },
    ];

    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            headers: {
                Authorization: `Basic: ${Buffer.from(`{credentials.clientId}:{credentials.clientSecret}`).toString('base64')}`
            },
        },
    };
}
