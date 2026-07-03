console.log("map.js loaded");

const mapDiv = document.getElementById("map");
console.log("mapDiv:", mapDiv);

if (mapDiv) {
    console.log("Dataset:", mapDiv.dataset);

    const coordinates = JSON.parse(mapDiv.dataset.coordinates);
    console.log("Coordinates:", coordinates);

    const location = mapDiv.dataset.location;

    const map = L.map("map").setView(
        [coordinates[1], coordinates[0]],
        13
    );

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([coordinates[1], coordinates[0]])
        .addTo(map)
        .bindPopup(location)
        .openPopup();
};