
const config = {
    style: "mapbox://styles/mapbox/light-v10",
    accessToken: "pk.eyJ1IjoibWlsbGUxdml6IiwiYSI6InpOVDgzYncifQ.X4JRirBXISF2yKWYTKzsNg",
    CSV: "./medias.csv",
    center: [-1.4736207684414764, 47.1793171591922], //Lng, Lat
    zoom: 7, //Default zoom
    title: "Les rédactions locales en France",
    description: "Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.",
    sideBarInfo: ["Header", "Info 1", "Info 2"],
    popupInfo: ["Popup Information"],
    filters: [
        {
            type: "dropdown",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: [
                'filter one',
                'filter two',
                'filter three',
                'filter four',
                'filter five',
                'filter six',
                'filter seven'
            ]
        },
        {
            type: "checkbox",
            title: "Catégorie : ",
            columnHeader: "Support historique",
            listItems: ["Presse", "Pure-player", "Radio", "Télé"]
        },
        {
            type: "dropdown",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: [
                'filter one',
                'filter two',
                'filter three',
                'filter four',
                'filter five',
                'filter six',
                'filter seven'
            ]
        }
    ]

};
