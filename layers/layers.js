ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([673704.858472, 5923124.101635, 674841.449442, 5924544.840346]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cordUTM_1 = new ol.format.GeoJSON();
var features_cordUTM_1 = format_cordUTM_1.readFeatures(json_cordUTM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_cordUTM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cordUTM_1.addFeatures(features_cordUTM_1);
cluster_cordUTM_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_cordUTM_1
});
var lyr_cordUTM_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_cordUTM_1, 
                style: style_cordUTM_1,
                popuplayertitle: 'cordUTM',
                interactive: true,
                title: '<img src="styles/legend/cordUTM_1.png" /> cordUTM'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_cordUTM_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_cordUTM_1];
lyr_cordUTM_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_Pregunt': 'T_Pregunt', 'N°_Preg_I': 'N°_Preg_I', 'N°_Preg_C': 'N°_Preg_C', 'Por_Corr': 'Por_Corr', 'Porc_Incor': 'Porc_Incor', 'Porc_Total': 'Porc_Total', 'Preg_incor': 'Preg_incor', 'Nombre': 'Nombre', 'Video': 'Video', });
lyr_cordUTM_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_Pregunt': 'Range', 'N°_Preg_I': 'Range', 'N°_Preg_C': 'Range', 'Por_Corr': 'Range', 'Porc_Incor': 'Range', 'Porc_Total': 'Range', 'Preg_incor': 'Range', 'Nombre': 'TextEdit', 'Video': 'TextEdit', });
lyr_cordUTM_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'T_Pregunt': 'inline label - always visible', 'N°_Preg_I': 'inline label - always visible', 'N°_Preg_C': 'inline label - always visible', 'Por_Corr': 'inline label - visible with data', 'Porc_Incor': 'inline label - always visible', 'Porc_Total': 'inline label - always visible', 'Preg_incor': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_cordUTM_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});