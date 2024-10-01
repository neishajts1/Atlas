var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_CuencadelRoGey_1 = new ol.format.GeoJSON();
var features_CuencadelRoGey_1 = format_CuencadelRoGey_1.readFeatures(json_CuencadelRoGey_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuencadelRoGey_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuencadelRoGey_1.addFeatures(features_CuencadelRoGey_1);
var lyr_CuencadelRoGey_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CuencadelRoGey_1, 
                style: style_CuencadelRoGey_1,
                interactive: true,
                title: '<img src="styles/legend/CuencadelRoGey_1.png" /> Cuenca del Río Güey'
            });
var format_EstacionesHidroClimaticas_2 = new ol.format.GeoJSON();
var features_EstacionesHidroClimaticas_2 = format_EstacionesHidroClimaticas_2.readFeatures(json_EstacionesHidroClimaticas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstacionesHidroClimaticas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacionesHidroClimaticas_2.addFeatures(features_EstacionesHidroClimaticas_2);
var lyr_EstacionesHidroClimaticas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EstacionesHidroClimaticas_2, 
                style: style_EstacionesHidroClimaticas_2,
                interactive: true,
                title: '<img src="styles/legend/EstacionesHidroClimaticas_2.png" /> Estaciones HidroClimaticas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_CuencadelRoGey_1.setVisible(true);lyr_EstacionesHidroClimaticas_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CuencadelRoGey_1,lyr_EstacionesHidroClimaticas_2];
lyr_CuencadelRoGey_1.set('fieldAliases', {'Id': 'Id', });
lyr_EstacionesHidroClimaticas_2.set('fieldAliases', {'Serial': 'Serial', 'Nombre': 'Nombre', 'Parametro': 'Parametro', 'Altitud': 'Altitud', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Norte': 'Norte', 'Este': 'Este', });
lyr_CuencadelRoGey_1.set('fieldImages', {'Id': 'Hidden', });
lyr_EstacionesHidroClimaticas_2.set('fieldImages', {'Serial': 'Range', 'Nombre': 'TextEdit', 'Parametro': 'TextEdit', 'Altitud': 'Range', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Norte': 'TextEdit', 'Este': 'TextEdit', });
lyr_CuencadelRoGey_1.set('fieldLabels', {});
lyr_EstacionesHidroClimaticas_2.set('fieldLabels', {'Serial': 'inline label', 'Nombre': 'inline label', 'Parametro': 'inline label', 'Altitud': 'inline label', 'Latitud': 'inline label', 'Longitud': 'inline label', 'Norte': 'inline label', 'Este': 'inline label', });
lyr_EstacionesHidroClimaticas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});