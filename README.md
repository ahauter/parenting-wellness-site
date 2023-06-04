Master is has auto-deployment set up. If you want to make changes to the site, please create a new branch and create a pull request. 

Most of the site data can be edited in src/data.json
With the exception of the icons for each category. 

Instructions for changing icons: 
1. Go to https://fontawesome.com/search
2. Find desired icon, and click, bringing up popup
3. Click on the "react" tab in the sample code display
4. Click the "individual import" tab under the react selection
5. Copy the text inside the curly brackets 
    E.G. <FontAwesomeIcon icon={faHouse} /> => "faHouse" gets copied 
6. Open src/icons.js
7. On line 1, add the import as shown 
    import { faAppleWhole, faDumbbell, ..., faHouse } from "@fortawesome/free-solid-svg-icons";
8. Add an entry in iconData variable in this format: "CATEGORY NAME": faHouse (category name is the same name in src/data.json)
9. Make sure every entry in the curly braces of icon data has a comma after except the last entry 