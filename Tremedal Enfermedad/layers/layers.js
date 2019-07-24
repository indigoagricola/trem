var wms_layers = [];
var lyr_SurfaceModel_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Surface Model",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SurfaceModel_0.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9421704.851104, 1214306.480234, -9421179.208970, 1214943.473568]
                            })
                        });var lyr_GNDVI_Index_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "GNDVI_Index",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GNDVI_Index_1.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9421704.851104, 1214306.480234, -9421179.208970, 1214943.473568]
                            })
                        });var lyr_NRE2GR_Index_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "NRE2GR_Index",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NRE2GR_Index_2.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9421704.851104, 1214306.480234, -9421179.208970, 1214943.473568]
                            })
                        });var format_NRE2GR_Rate_3 = new ol.format.GeoJSON();
var features_NRE2GR_Rate_3 = format_NRE2GR_Rate_3.readFeatures(json_NRE2GR_Rate_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NRE2GR_Rate_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NRE2GR_Rate_3.addFeatures(features_NRE2GR_Rate_3);var lyr_NRE2GR_Rate_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NRE2GR_Rate_3, 
                style: style_NRE2GR_Rate_3,
    title: 'NRE2GR_Rate<br />\
    <img src="styles/legend/NRE2GR_Rate_3_0.png" /> 1<br />\
    <img src="styles/legend/NRE2GR_Rate_3_1.png" /> 2<br />\
    <img src="styles/legend/NRE2GR_Rate_3_2.png" /> 3<br />\
    <img src="styles/legend/NRE2GR_Rate_3_3.png" /> 4<br />\
    <img src="styles/legend/NRE2GR_Rate_3_4.png" /> 5<br />\
    <img src="styles/legend/NRE2GR_Rate_3_5.png" /> 6<br />\
    <img src="styles/legend/NRE2GR_Rate_3_6.png" /> 7<br />'
        });var format_GNDVI_Rate_4 = new ol.format.GeoJSON();
var features_GNDVI_Rate_4 = format_GNDVI_Rate_4.readFeatures(json_GNDVI_Rate_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GNDVI_Rate_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_GNDVI_Rate_4.addFeatures(features_GNDVI_Rate_4);var lyr_GNDVI_Rate_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GNDVI_Rate_4, 
                style: style_GNDVI_Rate_4,
    title: 'GNDVI_Rate<br />\
    <img src="styles/legend/GNDVI_Rate_4_0.png" /> 1<br />\
    <img src="styles/legend/GNDVI_Rate_4_1.png" /> 2<br />\
    <img src="styles/legend/GNDVI_Rate_4_2.png" /> 3<br />\
    <img src="styles/legend/GNDVI_Rate_4_3.png" /> 4<br />\
    <img src="styles/legend/GNDVI_Rate_4_4.png" /> 5<br />\
    <img src="styles/legend/GNDVI_Rate_4_5.png" /> 6<br />\
    <img src="styles/legend/GNDVI_Rate_4_6.png" /> 7<br />'
        });var lyr_RGBMosaic_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "RGB Mosaic",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RGBMosaic_5.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9421704.851104, 1214306.480234, -9421179.208970, 1214943.473568]
                            })
                        });var format_GNDVI_Enfermedad_6 = new ol.format.GeoJSON();
var features_GNDVI_Enfermedad_6 = format_GNDVI_Enfermedad_6.readFeatures(json_GNDVI_Enfermedad_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GNDVI_Enfermedad_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_GNDVI_Enfermedad_6.addFeatures(features_GNDVI_Enfermedad_6);var lyr_GNDVI_Enfermedad_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GNDVI_Enfermedad_6, 
                style: style_GNDVI_Enfermedad_6,
    title: 'GNDVI_Enfermedad<br />\
    <img src="styles/legend/GNDVI_Enfermedad_6_0.png" /> 1<br />\
    <img src="styles/legend/GNDVI_Enfermedad_6_1.png" /> 2<br />\
    <img src="styles/legend/GNDVI_Enfermedad_6_2.png" /> 3<br />\
    <img src="styles/legend/GNDVI_Enfermedad_6_3.png" /> 4<br />\
    <img src="styles/legend/GNDVI_Enfermedad_6_4.png" /> 5<br />\
    <img src="styles/legend/GNDVI_Enfermedad_6_5.png" /> 6<br />\
    <img src="styles/legend/GNDVI_Enfermedad_6_6.png" /> 7<br />'
        });var format_NRE2GR_Enfermedad_7 = new ol.format.GeoJSON();
var features_NRE2GR_Enfermedad_7 = format_NRE2GR_Enfermedad_7.readFeatures(json_NRE2GR_Enfermedad_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NRE2GR_Enfermedad_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NRE2GR_Enfermedad_7.addFeatures(features_NRE2GR_Enfermedad_7);var lyr_NRE2GR_Enfermedad_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NRE2GR_Enfermedad_7, 
                style: style_NRE2GR_Enfermedad_7,
    title: 'NRE2GR_Enfermedad<br />\
    <img src="styles/legend/NRE2GR_Enfermedad_7_0.png" /> 1<br />\
    <img src="styles/legend/NRE2GR_Enfermedad_7_1.png" /> 2<br />\
    <img src="styles/legend/NRE2GR_Enfermedad_7_2.png" /> 3<br />\
    <img src="styles/legend/NRE2GR_Enfermedad_7_3.png" /> 4<br />\
    <img src="styles/legend/NRE2GR_Enfermedad_7_4.png" /> 5<br />\
    <img src="styles/legend/NRE2GR_Enfermedad_7_5.png" /> 6<br />\
    <img src="styles/legend/NRE2GR_Enfermedad_7_6.png" /> 7<br />'
        });

lyr_SurfaceModel_0.setVisible(true);lyr_GNDVI_Index_1.setVisible(false);lyr_NRE2GR_Index_2.setVisible(false);lyr_NRE2GR_Rate_3.setVisible(true);lyr_GNDVI_Rate_4.setVisible(true);lyr_RGBMosaic_5.setVisible(true);lyr_GNDVI_Enfermedad_6.setVisible(true);lyr_NRE2GR_Enfermedad_7.setVisible(true);
var layersList = [lyr_SurfaceModel_0,lyr_GNDVI_Index_1,lyr_NRE2GR_Index_2,lyr_NRE2GR_Rate_3,lyr_GNDVI_Rate_4,lyr_RGBMosaic_5,lyr_GNDVI_Enfermedad_6,lyr_NRE2GR_Enfermedad_7];
lyr_NRE2GR_Rate_3.set('fieldAliases', {'amount': 'amount', 'area': 'area', 'avgValue': 'avgValue', 'rate': 'rate', });
lyr_GNDVI_Rate_4.set('fieldAliases', {'amount': 'amount', 'area': 'area', 'avgValue': 'avgValue', 'rate': 'rate', });
lyr_GNDVI_Enfermedad_6.set('fieldAliases', {'amount': 'amount', 'area': 'area', 'avgValue': 'avgValue', 'rate': 'rate', });
lyr_NRE2GR_Enfermedad_7.set('fieldAliases', {'amount': 'amount', 'area': 'area', 'avgValue': 'avgValue', 'rate': 'rate', });
lyr_NRE2GR_Rate_3.set('fieldImages', {'amount': 'TextEdit', 'area': 'TextEdit', 'avgValue': 'TextEdit', 'rate': 'TextEdit', });
lyr_GNDVI_Rate_4.set('fieldImages', {'amount': 'TextEdit', 'area': 'TextEdit', 'avgValue': 'TextEdit', 'rate': 'TextEdit', });
lyr_GNDVI_Enfermedad_6.set('fieldImages', {'amount': 'TextEdit', 'area': 'TextEdit', 'avgValue': 'TextEdit', 'rate': 'TextEdit', });
lyr_NRE2GR_Enfermedad_7.set('fieldImages', {'amount': 'TextEdit', 'area': 'TextEdit', 'avgValue': 'TextEdit', 'rate': 'TextEdit', });
lyr_NRE2GR_Rate_3.set('fieldLabels', {'amount': 'no label', 'area': 'no label', 'avgValue': 'no label', 'rate': 'inline label', });
lyr_GNDVI_Rate_4.set('fieldLabels', {'amount': 'no label', 'area': 'no label', 'avgValue': 'no label', 'rate': 'inline label', });
lyr_GNDVI_Enfermedad_6.set('fieldLabels', {'amount': 'no label', 'area': 'no label', 'avgValue': 'no label', 'rate': 'inline label', });
lyr_NRE2GR_Enfermedad_7.set('fieldLabels', {'amount': 'no label', 'area': 'no label', 'avgValue': 'no label', 'rate': 'inline label', });
lyr_NRE2GR_Enfermedad_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});