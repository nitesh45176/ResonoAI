"use client"

import { useTRPC } from "@/trpc/client"
import { useSuspenseQueries, useSuspenseQuery } from "@tanstack/react-query"



export function HealthCheck(){
    const trpc= useTRPC()
    const { data } = useSuspenseQuery(trpc.health.queryOptions())
    return(
        <div>
            <p>trpc status</p>
            <p>{data.status}</p>
        </div>
    )
}