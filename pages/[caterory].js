import { useRouter } from "next/router"

export default function Caterory() {
    const router = useRouter()
    console.log(router)
    return (
        <div>[caterory]</div>
    )
}
