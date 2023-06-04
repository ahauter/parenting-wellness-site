import { faAppleWhole, faDumbbell } from "@fortawesome/free-solid-svg-icons";
const iconData = {
    "Proper Nutrition": faAppleWhole,
    "Engaging in Physical Movement & Getting Outside": faDumbbell,
};
export const icons = (categoryName) => {
    const icon = iconData[categoryName];
    return icon || faAppleWhole;
}