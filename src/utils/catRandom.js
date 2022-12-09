const catsNames = [
    "Mittens",
    "Fluffy",
    "Patches",
    "Tiger",
    "Socks",
    "Shadow",
    "Oreo",
    "Whiskers",
    "Smokey",
    "Tigger",
    "Simba",
    "Oscar",
];
export default function catRandom() {
    const randomIndex = Math.floor(Math.random() * catsNames.length);
    return catsNames[randomIndex];
}
