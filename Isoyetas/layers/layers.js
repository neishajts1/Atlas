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
var format_Cuenca_1 = new ol.format.GeoJSON();
var features_Cuenca_1 = format_Cuenca_1.readFeatures(json_Cuenca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuenca_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuenca_1.addFeatures(features_Cuenca_1);
var lyr_Cuenca_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuenca_1, 
                style: style_Cuenca_1,
                interactive: true,
                title: '<img src="styles/legend/Cuenca_1.png" /> Cuenca '
            });
var format_IsoyetasRioGuey_2 = new ol.format.GeoJSON();
var features_IsoyetasRioGuey_2 = format_IsoyetasRioGuey_2.readFeatures(json_IsoyetasRioGuey_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IsoyetasRioGuey_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IsoyetasRioGuey_2.addFeatures(features_IsoyetasRioGuey_2);
var lyr_IsoyetasRioGuey_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IsoyetasRioGuey_2, 
                style: style_IsoyetasRioGuey_2,
                interactive: true,
                title: '<img src="styles/legend/IsoyetasRioGuey_2.png" /> Isoyetas Rio Guey'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Cuenca_1.setVisible(true);lyr_IsoyetasRioGuey_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Cuenca_1,lyr_IsoyetasRioGuey_2];
lyr_Cuenca_1.set('fieldAliases', {'Id': 'Id', });
lyr_IsoyetasRioGuey_2.set('fieldAliases', {'P_anual_mm': 'P_anual_mm', });
lyr_Cuenca_1.set('fieldImages', {'Id': 'Range', });
lyr_IsoyetasRioGuey_2.set('fieldImages', {'P_anual_mm': 'TextEdit', });
lyr_Cuenca_1.set('fieldLabels', {'Id': 'no label', });
lyr_IsoyetasRioGuey_2.set('fieldLabels', {'P_anual_mm': 'inline label', });
lyr_IsoyetasRioGuey_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});