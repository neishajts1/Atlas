var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_CuencaRoGuey_1 = new ol.format.GeoJSON();
var features_CuencaRoGuey_1 = format_CuencaRoGuey_1.readFeatures(json_CuencaRoGuey_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuencaRoGuey_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuencaRoGuey_1.addFeatures(features_CuencaRoGuey_1);
var lyr_CuencaRoGuey_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CuencaRoGuey_1, 
                style: style_CuencaRoGuey_1,
                popuplayertitle: "Cuenca Río Guey",
                interactive: false,
                title: '<img src="styles/legend/CuencaRoGuey_1.png" /> Cuenca Río Guey'
            });
var format_ZonaAbrae_2 = new ol.format.GeoJSON();
var features_ZonaAbrae_2 = format_ZonaAbrae_2.readFeatures(json_ZonaAbrae_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaAbrae_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaAbrae_2.addFeatures(features_ZonaAbrae_2);
var lyr_ZonaAbrae_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaAbrae_2, 
                style: style_ZonaAbrae_2,
                popuplayertitle: "Zona Abrae",
                interactive: true,
    title: 'Zona Abrae<br />\
    <img src="styles/legend/ZonaAbrae_2_0.png" /> Henri Pittier<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_CuencaRoGuey_1.setVisible(true);lyr_ZonaAbrae_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CuencaRoGuey_1,lyr_ZonaAbrae_2];
lyr_CuencaRoGuey_1.set('fieldAliases', {'Id': 'Id', 'Area': 'Area', });
lyr_ZonaAbrae_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CAT_UICN': 'CAT_UICN', });
lyr_CuencaRoGuey_1.set('fieldImages', {'Id': 'Range', 'Area': 'TextEdit', });
lyr_ZonaAbrae_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'NOMBRE': 'TextEdit', 'TIPO': 'TextEdit', 'CAT_UICN': 'TextEdit', });
lyr_CuencaRoGuey_1.set('fieldLabels', {'Id': 'inline label - always visible', 'Area': 'inline label - visible with data', });
lyr_ZonaAbrae_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CAT_UICN': 'no label', });
lyr_ZonaAbrae_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});