ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32619").setExtent([643216.353256, 1133911.747318, 666262.122106, 1145936.268197]);
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
var lyr_Precipitacin2003_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitación 2003",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacin2003_2.png",
    attributions: ' ',
                                projection: 'EPSG:32619',
                                alwaysInRange: true,
                                imageExtent: [651410.000000, 1134190.000000, 654710.000000, 1143090.000000]
                            })
                        });
var lyr_Precipitacin2002_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitación 2002",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacin2002_3.png",
    attributions: ' ',
                                projection: 'EPSG:32619',
                                alwaysInRange: true,
                                imageExtent: [651410.000000, 1134190.000000, 654710.000000, 1143090.000000]
                            })
                        });
var lyr_Precipitacin2001_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitación 2001",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacin2001_4.png",
    attributions: ' ',
                                projection: 'EPSG:32619',
                                alwaysInRange: true,
                                imageExtent: [651410.000000, 1134190.000000, 654710.000000, 1143090.000000]
                            })
                        });
var lyr_Precipitacin2000_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitación 2000",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacin2000_5.png",
    attributions: ' ',
                                projection: 'EPSG:32619',
                                alwaysInRange: true,
                                imageExtent: [651410.000000, 1134190.000000, 654710.000000, 1143090.000000]
                            })
                        });
var lyr_Precipitacin1999_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitación 1999",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacin1999_6.png",
    attributions: ' ',
                                projection: 'EPSG:32619',
                                alwaysInRange: true,
                                imageExtent: [651410.000000, 1134190.000000, 654710.000000, 1143090.000000]
                            })
                        });
var lyr_Precipitacin1998_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitación 1998",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacin1998_7.png",
    attributions: ' ',
                                projection: 'EPSG:32619',
                                alwaysInRange: true,
                                imageExtent: [651410.000000, 1134190.000000, 654710.000000, 1143090.000000]
                            })
                        });
var lyr_Precipitacin1997_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitación 1997",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacin1997_8.png",
    attributions: ' ',
                                projection: 'EPSG:32619',
                                alwaysInRange: true,
                                imageExtent: [651410.000000, 1134190.000000, 654710.000000, 1143090.000000]
                            })
                        });
var lyr_Precipitacin1996_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitación 1996",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacin1996_9.png",
    attributions: ' ',
                                projection: 'EPSG:32619',
                                alwaysInRange: true,
                                imageExtent: [651410.000000, 1134190.000000, 654710.000000, 1143090.000000]
                            })
                        });
var lyr_Precipitacin1995_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitación 1995",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacin1995_10.png",
    attributions: ' ',
                                projection: 'EPSG:32619',
                                alwaysInRange: true,
                                imageExtent: [651410.000000, 1134190.000000, 654710.000000, 1143090.000000]
                            })
                        });
var lyr_Precipitacin1994_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitación 1994",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacin1994_11.png",
    attributions: ' ',
                                projection: 'EPSG:32619',
                                alwaysInRange: true,
                                imageExtent: [651410.000000, 1134190.000000, 654710.000000, 1143090.000000]
                            })
                        });
var lyr_Precipitacin1993_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitación 1993",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacin1993_12.png",
    attributions: ' ',
                                projection: 'EPSG:32619',
                                alwaysInRange: true,
                                imageExtent: [651410.000000, 1134190.000000, 654710.000000, 1143090.000000]
                            })
                        });
var lyr_Precipitacin1992_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitación 1992",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacin1992_13.png",
    attributions: ' ',
                                projection: 'EPSG:32619',
                                alwaysInRange: true,
                                imageExtent: [651410.000000, 1134190.000000, 654710.000000, 1143090.000000]
                            })
                        });
var lyr_Precipitacin1991_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitación 1991",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacin1991_14.png",
    attributions: ' ',
                                projection: 'EPSG:32619',
                                alwaysInRange: true,
                                imageExtent: [651410.000000, 1134190.000000, 654710.000000, 1143090.000000]
                            })
                        });
var lyr_Precipitacin1990_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitación 1990",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacin1990_15.png",
    attributions: ' ',
                                projection: 'EPSG:32619',
                                alwaysInRange: true,
                                imageExtent: [651410.000000, 1134190.000000, 654710.000000, 1143090.000000]
                            })
                        });
var lyr_Precipitacin1989_16 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitación 1989",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacin1989_16.png",
    attributions: ' ',
                                projection: 'EPSG:32619',
                                alwaysInRange: true,
                                imageExtent: [651410.000000, 1134190.000000, 654710.000000, 1143090.000000]
                            })
                        });
var lyr_Precipitacin1988_17 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitación 1988",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacin1988_17.png",
    attributions: ' ',
                                projection: 'EPSG:32619',
                                alwaysInRange: true,
                                imageExtent: [651410.000000, 1134190.000000, 654710.000000, 1143090.000000]
                            })
                        });
var format_EstacionesClimaUCV_18 = new ol.format.GeoJSON();
var features_EstacionesClimaUCV_18 = format_EstacionesClimaUCV_18.readFeatures(json_EstacionesClimaUCV_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_EstacionesClimaUCV_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacionesClimaUCV_18.addFeatures(features_EstacionesClimaUCV_18);
var lyr_EstacionesClimaUCV_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EstacionesClimaUCV_18, 
                style: style_EstacionesClimaUCV_18,
                interactive: true,
    title: 'EstacionesClimaUCV<br />\
    <img src="styles/legend/EstacionesClimaUCV_18_0.png" /> CASTANO-CABECERA<br />\
    <img src="styles/legend/EstacionesClimaUCV_18_1.png" /> MARACAY-AGRONOMIA<br />\
    <img src="styles/legend/EstacionesClimaUCV_18_2.png" /> MARACAY-C.E.N.I.A.P.<br />\
    <img src="styles/legend/EstacionesClimaUCV_18_3.png" /> MARACAY-LA TRINIDAD<br />'
        });
var format_poligono_cuenca_19 = new ol.format.GeoJSON();
var features_poligono_cuenca_19 = format_poligono_cuenca_19.readFeatures(json_poligono_cuenca_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_poligono_cuenca_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligono_cuenca_19.addFeatures(features_poligono_cuenca_19);
var lyr_poligono_cuenca_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poligono_cuenca_19, 
                style: style_poligono_cuenca_19,
                interactive: true,
                title: '<img src="styles/legend/poligono_cuenca_19.png" /> poligono_cuenca'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_N10W068_1.setVisible(true);lyr_Precipitacin2003_2.setVisible(false);lyr_Precipitacin2002_3.setVisible(false);lyr_Precipitacin2001_4.setVisible(false);lyr_Precipitacin2000_5.setVisible(false);lyr_Precipitacin1999_6.setVisible(false);lyr_Precipitacin1998_7.setVisible(false);lyr_Precipitacin1997_8.setVisible(false);lyr_Precipitacin1996_9.setVisible(false);lyr_Precipitacin1995_10.setVisible(false);lyr_Precipitacin1994_11.setVisible(false);lyr_Precipitacin1993_12.setVisible(false);lyr_Precipitacin1992_13.setVisible(false);lyr_Precipitacin1991_14.setVisible(false);lyr_Precipitacin1990_15.setVisible(false);lyr_Precipitacin1989_16.setVisible(false);lyr_Precipitacin1988_17.setVisible(true);lyr_EstacionesClimaUCV_18.setVisible(true);lyr_poligono_cuenca_19.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_N10W068_1,lyr_Precipitacin2003_2,lyr_Precipitacin2002_3,lyr_Precipitacin2001_4,lyr_Precipitacin2000_5,lyr_Precipitacin1999_6,lyr_Precipitacin1998_7,lyr_Precipitacin1997_8,lyr_Precipitacin1996_9,lyr_Precipitacin1995_10,lyr_Precipitacin1994_11,lyr_Precipitacin1993_12,lyr_Precipitacin1992_13,lyr_Precipitacin1991_14,lyr_Precipitacin1990_15,lyr_Precipitacin1989_16,lyr_Precipitacin1988_17,lyr_EstacionesClimaUCV_18,lyr_poligono_cuenca_19];
lyr_EstacionesClimaUCV_18.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Norte': 'Norte', 'Este': 'Este', 'imagen': 'imagen', });
lyr_poligono_cuenca_19.set('fieldAliases', {'Id': 'Id', });
lyr_EstacionesClimaUCV_18.set('fieldImages', {'Id': 'Hidden', 'Nombre': 'TextEdit', 'Norte': 'TextEdit', 'Este': 'TextEdit', 'imagen': 'Hidden', });
lyr_poligono_cuenca_19.set('fieldImages', {'Id': 'Hidden', });
lyr_EstacionesClimaUCV_18.set('fieldLabels', {'Nombre': 'inline label', 'Norte': 'header label', 'Este': 'inline label', });
lyr_poligono_cuenca_19.set('fieldLabels', {});
lyr_poligono_cuenca_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});