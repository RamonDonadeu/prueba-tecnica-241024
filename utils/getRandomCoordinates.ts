export default function getRandomCoordinates(min: number, max: number) {
    return Math.random() * (max - min) + min;
}