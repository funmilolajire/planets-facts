
interface PlanetData extends BottomData {
    name: string,
    overview: {
        content: string
        source: string
    },
    structure: {
        content: string
        source: string
    },
    geology: {
        content: string
        source: string
    },
    images: ImagesData
}

interface BottomData {
    rotation: string
    revolution: string
    radius: string
    temperature: string
}

interface ImagesData {
    planet: string
    internal: string
    geology: string
}

interface ButtonsKeys {
    overview: string
    structure: string
    geology: string
}

interface ButtonsData {
    name: string
    button: keyof ButtonsKeys
    setButton: Dispatch<SetStateAction<string>>
}

interface PlanetImageData extends ImagesData {
    name: string
    button: keyof ButtonsKeys
}

interface TextData extends PlanetData {
    button: keyof ButtonsKeys
    setButton: Dispatch<SetStateAction<string>>
}

interface NavbarTransitionState {
    entering: string,
    entered: string,
    exiting: string,
    exited: string,
}

interface NavbarTransition {
    entering: {
        [key]: string | number | boolean
    },
    entered: {
        [key]: string | number | boolean
    },
    exiting: {
        [key]: string | number | boolean
    },
    exited: {
        [key]: string | number | boolean
    }
}
