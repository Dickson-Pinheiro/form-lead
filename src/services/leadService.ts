import { useConnectionPb } from "./api"

export interface CreateOrUpdateLeadProps {
    name: string,
    apelido?: string,
    email: string,
    telefone: string,
    marketing_range?: number,
    cargo?: string,
    principal_renda?: string,
    renda_pessoal?: string,
}

export function leadService() {
    const conn = useConnectionPb()
    const service = {
        async createOrUpdateLead(data: CreateOrUpdateLeadProps) {
            const id = localStorage.getItem('id')
            if (!id) {
                return await conn.collection('lead').create({
                    ...data
                })
            }

            return await conn.collection('lead').update(id)

        }
    }
    return service
}