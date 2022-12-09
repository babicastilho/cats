import catsImages from "../assets/images";
export default function catRandomImage() {
    const randomIndex = Math.floor(Math.random() * catsImages.length);
    return catsImages[randomIndex];
}
