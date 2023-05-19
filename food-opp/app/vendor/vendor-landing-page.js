import Image from "next/image"

export const VendorLandingPage = () => {
    return (
        <div>
            <MapComponent/>
            <DescriptionComponent/>
        </div>
    )
}

export const MapComponent = () => {
    return (
        <>
            <Image
              src="/map_image_1.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />

        </>
    )
}

export const DescriptionComponent = () => {
    return (
        <>
        <h1>Currently clicked name</h1>
                <p>Address</p>
                <p>Request type</p>
                <p>People count</p>
                <p>Expiry</p>
                <button>Button</button>
        </>
    )
}