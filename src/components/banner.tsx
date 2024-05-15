import Image from "next/image"

export default function Banner() {
    return (
        <div className="">
            <Image src="/banner_landing.jpg" alt="" width={1920} height={600}></Image>
        </div>
    )
}