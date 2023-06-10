import {
    faAppleWhole,
    faMoon,
    faClock,
    faPersonWalking,
    faPeopleGroup,
    faBrain
} from "@fortawesome/free-solid-svg-icons";
const iconData = {
    "Maintaining Balanced Nutrition": faAppleWhole,
    "Engaging in Physical Movement & Getting Outside": faPersonWalking,
    "Having Quality Sleep": faMoon,
    "Developing Time Management Techniques": faClock,
    "Practicing Mindfulness": faBrain,
    "Seeking Social Support": faPeopleGroup
};
export const icons = (categoryName) => {
    const icon = iconData[categoryName];
    return icon || faAppleWhole;
}