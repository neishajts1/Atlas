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
var format_PoligonoCuencaUCV_1 = new ol.format.GeoJSON();
var features_PoligonoCuencaUCV_1 = format_PoligonoCuencaUCV_1.readFeatures(json_PoligonoCuencaUCV_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoligonoCuencaUCV_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonoCuencaUCV_1.addFeatures(features_PoligonoCuencaUCV_1);
var lyr_PoligonoCuencaUCV_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoligonoCuencaUCV_1, 
                style: style_PoligonoCuencaUCV_1,
                interactive: true,
                title: '<img src="styles/legend/PoligonoCuencaUCV_1.png" /> Poligono Cuenca UCV'
            });
var format_EstacionesClimaUCV_2 = new ol.format.GeoJSON();
var features_EstacionesClimaUCV_2 = format_EstacionesClimaUCV_2.readFeatures(json_EstacionesClimaUCV_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstacionesClimaUCV_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacionesClimaUCV_2.addFeatures(features_EstacionesClimaUCV_2);
var lyr_EstacionesClimaUCV_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EstacionesClimaUCV_2, 
                style: style_EstacionesClimaUCV_2,
                interactive: true,
                title: '<img src="styles/legend/EstacionesClimaUCV_2.png" /> EstacionesClimaUCV'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PoligonoCuencaUCV_1.setVisible(true);lyr_EstacionesClimaUCV_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PoligonoCuencaUCV_1,lyr_EstacionesClimaUCV_2];
lyr_PoligonoCuencaUCV_1.set('fieldAliases', {'Id': 'Id', });
lyr_EstacionesClimaUCV_2.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Norte': 'Norte', 'Este': 'Este', });
lyr_PoligonoCuencaUCV_1.set('fieldImages', {'Id': 'Hidden', });
lyr_EstacionesClimaUCV_2.set('fieldImages', {'Id': 'Hidden', 'Nombre': 'TextEdit', 'Norte': 'TextEdit', 'Este': 'TextEdit', });
lyr_PoligonoCuencaUCV_1.set('fieldLabels', {});
lyr_EstacionesClimaUCV_2.set('fieldLabels', {'Nombre': 'inline label', 'Norte': 'inline label', 'Este': 'inline label', });
lyr_EstacionesClimaUCV_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});