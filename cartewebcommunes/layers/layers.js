var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.516000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_MapzenGlobalTerrain_1 = new ol.layer.Tile({
            'title': 'Mapzen Global Terrain',
            'opacity': 0.467000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'
            })
        });
var format_communes_2 = new ol.format.GeoJSON();
var features_communes_2 = format_communes_2.readFeatures(json_communes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_communes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communes_2.addFeatures(features_communes_2);
var lyr_communes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_communes_2, 
                style: style_communes_2,
                popuplayertitle: 'communes',
                interactive: true,
                title: '<img src="styles/legend/communes_2.png" /> communes'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MapzenGlobalTerrain_1.setVisible(true);lyr_communes_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MapzenGlobalTerrain_1,lyr_communes_2];
lyr_communes_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'ID_CH_LIEU': 'ID_CH_LIEU', 'CODE_SIREN': 'CODE_SIREN', });
lyr_communes_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'CODE_SIREN': 'TextEdit', });
lyr_communes_2.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'header label - always visible', 'SURFACE_HA': 'header label - always visible', 'CODE_POST': 'header label - always visible', 'NOM': 'header label - always visible', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'CODE_SIREN': 'hidden field', });
lyr_communes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});