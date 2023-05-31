import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
const iconData = {
    "Proper Nutrition": faAppleWhole,
};
export const icons = (categoryName) => {
    const icon = iconData[categoryName];
    return icon || faAppleWhole;
}