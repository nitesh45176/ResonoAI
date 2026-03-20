import { voicesSearchParamsCache } from "@/features/voices/lib/params"
import { VoicesView } from "@/features/voices/views/voices-view"
import { HydrateClient, prefetch, trpc } from "@/trpc/server"
import { Metadata } from "next"
import { SearchParams } from "nuqs/server"
import { title } from "process"


export const metadata: Metadata = {title: "Voices"}


export default async function VoicesPage({
    searchParams
}: {
    searchParams: Promise<SearchParams>
}){
    const {query} = await voicesSearchParamsCache.parse(searchParams)
    

    prefetch(trpc.voices.getAll.queryOptions({ query}))
    return(
        <HydrateClient>
           <VoicesView/>
        </HydrateClient>
    )
}