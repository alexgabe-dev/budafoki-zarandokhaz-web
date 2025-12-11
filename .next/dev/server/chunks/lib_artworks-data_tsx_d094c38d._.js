module.exports = [
"[project]/lib/artworks-data.tsx [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allArtworks",
    ()=>allArtworks,
    "getArtwork",
    ()=>getArtwork
]);
const allArtworks = [
    {
        id: 1,
        src: "/oil-painting-wine-bottle-still-life-dark-moody-art.jpg",
        title: "Mise után",
        artist: "Kovács Anna",
        medium: "Olaj, vászon",
        year: "2025",
        size: "80×60 cm"
    },
    {
        id: 2,
        src: "/watercolor-hungarian-landscape-vineyard-hills-suns.jpg",
        title: "Budafoki alkony",
        artist: "Molnár Péter",
        medium: "Akvarell, papír",
        year: "2023",
        size: "50×70 cm"
    },
    {
        id: 3,
        src: "/portrait-painting-woman-candlelight-baroque-style-.jpg",
        title: "A zarándok",
        artist: "Tóth Eszter",
        medium: "Olaj, vászon",
        year: "2025",
        size: "100×70 cm"
    },
    {
        id: 4,
        src: "/abstract-painting-gold-burgundy-modern-art-texture.jpg",
        title: "Arany és bor",
        artist: "Kiss László",
        medium: "Vegyes technika",
        year: "2025",
        size: "60×60 cm"
    },
    {
        id: 5,
        src: "/religious-iconography-modern-interpretation-painti.jpg",
        title: "Modern ikonfestés",
        artist: "Varga Mária",
        medium: "Tojástempera, fa",
        year: "2023",
        size: "40×50 cm"
    },
    {
        id: 6,
        src: "/wine-cellar-interior-painting-atmospheric-art.jpg",
        title: "A pince mélyén",
        artist: "Nagy Gábor",
        medium: "Olaj, vászon",
        year: "2025",
        size: "90×120 cm"
    }
];
function getArtwork(id) {
    return allArtworks.find((a)=>a.id === id);
}
}),
];

//# sourceMappingURL=lib_artworks-data_tsx_d094c38d._.js.map