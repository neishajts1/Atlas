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
var lyr_Vegetacion_Guey_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Vegetacion_Guey",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Vegetacion_Guey_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7528203.799005, 1147418.096368, -7522639.011522, 1158030.389132]
                            })
                        });
var lyr_PendientesRioGueyMDE30m_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Pendientes Rio Guey MDE 30 m",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PendientesRioGueyMDE30m_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7534428.325225, 1140650.566908, -7517168.547724, 1160139.057389]
                            })
                        });
var format_poligono_cuenca_3 = new ol.format.GeoJSON();
var features_poligono_cuenca_3 = format_poligono_cuenca_3.readFeatures(json_poligono_cuenca_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligono_cuenca_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligono_cuenca_3.addFeatures(features_poligono_cuenca_3);
var lyr_poligono_cuenca_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poligono_cuenca_3, 
                style: style_poligono_cuenca_3,
                interactive: true,
                title: '<img src="styles/legend/poligono_cuenca_3.png" /> poligono_cuenca'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Vegetacion_Guey_1.setVisible(true);lyr_PendientesRioGueyMDE30m_2.setVisible(true);lyr_poligono_cuenca_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Vegetacion_Guey_1,lyr_PendientesRioGueyMDE30m_2,lyr_poligono_cuenca_3];
lyr_poligono_cuenca_3.set('fieldAliases', {'Id': 'Id', });
lyr_poligono_cuenca_3.set('fieldImages', {'Id': 'Hidden', });
lyr_poligono_cuenca_3.set('fieldLabels', {});
lyr_poligono_cuenca_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});