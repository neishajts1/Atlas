var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var lyr_N10W068_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "N10W068",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/N10W068_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7569740.834983, 1118874.275309, -7458390.422109, 1232122.552320]
                            })
                        });
var format_PoligonoCuencaUCV_2 = new ol.format.GeoJSON();
var features_PoligonoCuencaUCV_2 = format_PoligonoCuencaUCV_2.readFeatures(json_PoligonoCuencaUCV_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoligonoCuencaUCV_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonoCuencaUCV_2.addFeatures(features_PoligonoCuencaUCV_2);
var lyr_PoligonoCuencaUCV_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoligonoCuencaUCV_2, 
                style: style_PoligonoCuencaUCV_2,
                interactive: true,
                title: '<img src="styles/legend/PoligonoCuencaUCV_2.png" /> Poligono Cuenca UCV'
            });
var format_EstacionesClimaUCV_3 = new ol.format.GeoJSON();
var features_EstacionesClimaUCV_3 = format_EstacionesClimaUCV_3.readFeatures(json_EstacionesClimaUCV_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstacionesClimaUCV_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacionesClimaUCV_3.addFeatures(features_EstacionesClimaUCV_3);
var lyr_EstacionesClimaUCV_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EstacionesClimaUCV_3, 
                style: style_EstacionesClimaUCV_3,
                interactive: true,
    title: 'EstacionesClimaUCV<br />\
    <img src="styles/legend/EstacionesClimaUCV_3_0.png" /> CASTANO-CABECERA<br />\
    <img src="styles/legend/EstacionesClimaUCV_3_1.png" /> MARACAY-AGRONOMIA<br />\
    <img src="styles/legend/EstacionesClimaUCV_3_2.png" /> MARACAY-C.E.N.I.A.P.<br />\
    <img src="styles/legend/EstacionesClimaUCV_3_3.png" /> MARACAY-LA TRINIDAD<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_N10W068_1.setVisible(true);lyr_PoligonoCuencaUCV_2.setVisible(true);lyr_EstacionesClimaUCV_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_N10W068_1,lyr_PoligonoCuencaUCV_2,lyr_EstacionesClimaUCV_3];
lyr_PoligonoCuencaUCV_2.set('fieldAliases', {'Id': 'Id', });
lyr_EstacionesClimaUCV_3.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Norte': 'Norte', 'Este': 'Este', 'imagen': 'imagen', });
lyr_PoligonoCuencaUCV_2.set('fieldImages', {'Id': 'Hidden', });
lyr_EstacionesClimaUCV_3.set('fieldImages', {'Id': 'Hidden', 'Nombre': 'TextEdit', 'Norte': 'TextEdit', 'Este': 'TextEdit', 'imagen': 'ExternalResource', });
lyr_PoligonoCuencaUCV_2.set('fieldLabels', {});
lyr_EstacionesClimaUCV_3.set('fieldLabels', {'Nombre': 'inline label', 'Norte': 'inline label', 'Este': 'inline label', 'imagen': 'inline label', });
lyr_EstacionesClimaUCV_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});