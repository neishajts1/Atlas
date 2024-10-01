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
var format_poligono_cuenca_1 = new ol.format.GeoJSON();
var features_poligono_cuenca_1 = format_poligono_cuenca_1.readFeatures(json_poligono_cuenca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligono_cuenca_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligono_cuenca_1.addFeatures(features_poligono_cuenca_1);
var lyr_poligono_cuenca_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poligono_cuenca_1, 
                style: style_poligono_cuenca_1,
                interactive: false,
                title: '<img src="styles/legend/poligono_cuenca_1.png" /> poligono_cuenca'
            });
var format_Hidrografa_2 = new ol.format.GeoJSON();
var features_Hidrografa_2 = format_Hidrografa_2.readFeatures(json_Hidrografa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hidrografa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrografa_2.addFeatures(features_Hidrografa_2);
var lyr_Hidrografa_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hidrografa_2, 
                style: style_Hidrografa_2,
                interactive: true,
    title: 'Hidrografía<br />\
    <img src="styles/legend/Hidrografa_2_0.png" /> Cuenca Rio Guey<br />\
    <img src="styles/legend/Hidrografa_2_1.png" /> Quebrada<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_poligono_cuenca_1.setVisible(true);lyr_Hidrografa_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_poligono_cuenca_1,lyr_Hidrografa_2];
lyr_poligono_cuenca_1.set('fieldAliases', {'Id': 'Id', });
lyr_Hidrografa_2.set('fieldAliases', {'ID': 'ID', 'TIPO': 'TIPO', });
lyr_poligono_cuenca_1.set('fieldImages', {'Id': 'Hidden', });
lyr_Hidrografa_2.set('fieldImages', {'ID': 'Hidden', 'TIPO': 'TextEdit', });
lyr_poligono_cuenca_1.set('fieldLabels', {});
lyr_Hidrografa_2.set('fieldLabels', {'TIPO': 'inline label', });
lyr_Hidrografa_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});