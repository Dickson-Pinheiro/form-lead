import PocketBase from 'pocketbase'
import { useMemo } from 'react'

export function useConnectionPb(){
    const conn = useMemo(() => {
        return new PocketBase(import.meta.env.VITE_API_URL);
    }, [])

    return conn
}