
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "StamenTonerLite_0": {
            "type": "raster",
            "tiles": ["http://a.tile.stamen.com/toner-lite/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "BaltimoreBlockGroupsMSA_1": {
            "type": "geojson",
            "data": json_BaltimoreBlockGroupsMSA_1
        }
                    ,
        "epa_coords_2": {
            "type": "geojson",
            "data": json_epa_coords_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_StamenTonerLite_0_0",
            "type": "raster",
            "source": "StamenTonerLite_0"
        },
        {
            "id": "lyr_BaltimoreBlockGroupsMSA_1_0",
            "type": "fill",
            "source": "BaltimoreBlockGroupsMSA_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'pct_bipoc'], 0.0], ['<=', ['get', 'pct_bipoc'], 0.2]], 0.5, ['all', ['>', ['get', 'pct_bipoc'], 0.2], ['<=', ['get', 'pct_bipoc'], 0.4]], 0.5, ['all', ['>', ['get', 'pct_bipoc'], 0.4], ['<=', ['get', 'pct_bipoc'], 0.6]], 0.5, ['all', ['>', ['get', 'pct_bipoc'], 0.6], ['<=', ['get', 'pct_bipoc'], 0.8]], 0.5, ['all', ['>', ['get', 'pct_bipoc'], 0.8], ['<=', ['get', 'pct_bipoc'], 1.0]], 0.5, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'pct_bipoc'], 0.0], ['<=', ['get', 'pct_bipoc'], 0.2]], '#f7fbff', ['all', ['>', ['get', 'pct_bipoc'], 0.2], ['<=', ['get', 'pct_bipoc'], 0.4]], '#c8dcf0', ['all', ['>', ['get', 'pct_bipoc'], 0.4], ['<=', ['get', 'pct_bipoc'], 0.6]], '#73b2d8', ['all', ['>', ['get', 'pct_bipoc'], 0.6], ['<=', ['get', 'pct_bipoc'], 0.8]], '#2979b9', ['all', ['>', ['get', 'pct_bipoc'], 0.8], ['<=', ['get', 'pct_bipoc'], 1.0]], '#08306b', '#ffffff']}
        }
,
        {
            "id": "lyr_epa_coords_2_0",
            "type": "circle",
            "source": "epa_coords_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 14.285714285714285, 2], 'circle-color': '#54b04a', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#3d8035'}
        }
],
}