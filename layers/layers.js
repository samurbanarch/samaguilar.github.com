var wms_layers = [];


        var lyr_F4Map2D_0 = new ol.layer.Tile({
            'title': 'F4 Map - 2D',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile1.f4map.com/tiles/f4_2d/{z}/{x}/{y}.png'
            })
        });
var format_estacionesdeecobici_1 = new ol.format.GeoJSON();
var features_estacionesdeecobici_1 = format_estacionesdeecobici_1.readFeatures(json_estacionesdeecobici_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estacionesdeecobici_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estacionesdeecobici_1.addFeatures(features_estacionesdeecobici_1);
var lyr_estacionesdeecobici_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_estacionesdeecobici_1, 
                style: style_estacionesdeecobici_1,
                interactive: true,
                title: '<img src="styles/legend/estacionesdeecobici_1.png" /> estaciones-de-ecobici'
            });
var format_areadeoperaciondebicicletas_2 = new ol.format.GeoJSON();
var features_areadeoperaciondebicicletas_2 = format_areadeoperaciondebicicletas_2.readFeatures(json_areadeoperaciondebicicletas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areadeoperaciondebicicletas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areadeoperaciondebicicletas_2.addFeatures(features_areadeoperaciondebicicletas_2);
var lyr_areadeoperaciondebicicletas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_areadeoperaciondebicicletas_2, 
                style: style_areadeoperaciondebicicletas_2,
                interactive: true,
                title: '<img src="styles/legend/areadeoperaciondebicicletas_2.png" /> area-de-operacion-de-bicicletas'
            });
var format_CarrilBusbici_3 = new ol.format.GeoJSON();
var features_CarrilBusbici_3 = format_CarrilBusbici_3.readFeatures(json_CarrilBusbici_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CarrilBusbici_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarrilBusbici_3.addFeatures(features_CarrilBusbici_3);
var lyr_CarrilBusbici_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CarrilBusbici_3, 
                style: style_CarrilBusbici_3,
                interactive: true,
                title: '<img src="styles/legend/CarrilBusbici_3.png" /> Carril Bus bici'
            });
var format_Carrildeprioridadciclista_4 = new ol.format.GeoJSON();
var features_Carrildeprioridadciclista_4 = format_Carrildeprioridadciclista_4.readFeatures(json_Carrildeprioridadciclista_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carrildeprioridadciclista_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carrildeprioridadciclista_4.addFeatures(features_Carrildeprioridadciclista_4);
var lyr_Carrildeprioridadciclista_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Carrildeprioridadciclista_4, 
                style: style_Carrildeprioridadciclista_4,
                interactive: true,
                title: '<img src="styles/legend/Carrildeprioridadciclista_4.png" /> Carril de prioridad ciclista'
            });
var format_Ciclocarril_5 = new ol.format.GeoJSON();
var features_Ciclocarril_5 = format_Ciclocarril_5.readFeatures(json_Ciclocarril_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ciclocarril_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ciclocarril_5.addFeatures(features_Ciclocarril_5);
var lyr_Ciclocarril_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ciclocarril_5, 
                style: style_Ciclocarril_5,
                interactive: true,
                title: '<img src="styles/legend/Ciclocarril_5.png" /> Ciclocarril'
            });
var format_Cicloviarecreativa_6 = new ol.format.GeoJSON();
var features_Cicloviarecreativa_6 = format_Cicloviarecreativa_6.readFeatures(json_Cicloviarecreativa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cicloviarecreativa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cicloviarecreativa_6.addFeatures(features_Cicloviarecreativa_6);
var lyr_Cicloviarecreativa_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cicloviarecreativa_6, 
                style: style_Cicloviarecreativa_6,
                interactive: true,
                title: '<img src="styles/legend/Cicloviarecreativa_6.png" /> Ciclovia recreativa'
            });
var format_Ciclovia_7 = new ol.format.GeoJSON();
var features_Ciclovia_7 = format_Ciclovia_7.readFeatures(json_Ciclovia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ciclovia_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ciclovia_7.addFeatures(features_Ciclovia_7);
var lyr_Ciclovia_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ciclovia_7, 
                style: style_Ciclovia_7,
                interactive: true,
                title: '<img src="styles/legend/Ciclovia_7.png" /> Ciclovia'
            });
var format_senderocompartido_8 = new ol.format.GeoJSON();
var features_senderocompartido_8 = format_senderocompartido_8.readFeatures(json_senderocompartido_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_senderocompartido_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_senderocompartido_8.addFeatures(features_senderocompartido_8);
var lyr_senderocompartido_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_senderocompartido_8, 
                style: style_senderocompartido_8,
                interactive: true,
                title: '<img src="styles/legend/senderocompartido_8.png" /> sendero compartido'
            });

lyr_F4Map2D_0.setVisible(true);lyr_estacionesdeecobici_1.setVisible(true);lyr_areadeoperaciondebicicletas_2.setVisible(true);lyr_CarrilBusbici_3.setVisible(true);lyr_Carrildeprioridadciclista_4.setVisible(true);lyr_Ciclocarril_5.setVisible(true);lyr_Cicloviarecreativa_6.setVisible(true);lyr_Ciclovia_7.setVisible(true);lyr_senderocompartido_8.setVisible(true);
var layersList = [lyr_F4Map2D_0,lyr_estacionesdeecobici_1,lyr_areadeoperaciondebicicletas_2,lyr_CarrilBusbici_3,lyr_Carrildeprioridadciclista_4,lyr_Ciclocarril_5,lyr_Cicloviarecreativa_6,lyr_Ciclovia_7,lyr_senderocompartido_8];
lyr_estacionesdeecobici_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'address': 'address', 'addressnumb': 'addressnumb', 'zipcode': 'zipcode', 'districtcod': 'districtcod', 'districtnam': 'districtnam', 'altitude': 'altitude', 'nearbystati': 'nearbystati', 'location_la': 'location_la', 'location_lo': 'location_lo', 'stationtype': 'stationtype', 'nearbystati_1': 'nearbystati_1', 'nearbystati_2': 'nearbystati_2', 'nearbystati_3': 'nearbystati_3', 'nearbystati_4': 'nearbystati_4', 'nearbystati_5': 'nearbystati_5', });
lyr_areadeoperaciondebicicletas_2.set('fieldAliases', {'oid': 'oid', 'name': 'name', 'symbolid': 'symbolid', 'altmode': 'altmode', 'base': 'base', 'clamped': 'clamped', 'extruded': 'extruded', 'snippet': 'snippet', 'popupinfo': 'popupinfo', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_CarrilBusbici_3.set('fieldAliases', {'estado': 'estado', 'nombre': 'nombre', 'vialidad': 'vialidad', 'tipo_ic': 'tipo_ic', 'tipo_via': 'tipo_via', 'instancia': 'instancia', 'ano': 'ano', 'longitud': 'longitud', });
lyr_Carrildeprioridadciclista_4.set('fieldAliases', {'estado': 'estado', 'nombre': 'nombre', 'vialidad': 'vialidad', 'tipo_ic': 'tipo_ic', 'tipo_via': 'tipo_via', 'instancia': 'instancia', 'ano': 'ano', 'longitud': 'longitud', });
lyr_Ciclocarril_5.set('fieldAliases', {'estado': 'estado', 'nombre': 'nombre', 'vialidad': 'vialidad', 'tipo_ic': 'tipo_ic', 'tipo_via': 'tipo_via', 'instancia': 'instancia', 'ano': 'ano', 'longitud': 'longitud', });
lyr_Cicloviarecreativa_6.set('fieldAliases', {'estado': 'estado', 'nombre': 'nombre', 'vialidad': 'vialidad', 'tipo_ic': 'tipo_ic', 'tipo_via': 'tipo_via', 'instancia': 'instancia', 'ano': 'ano', 'longitud': 'longitud', });
lyr_Ciclovia_7.set('fieldAliases', {'estado': 'estado', 'nombre': 'nombre', 'vialidad': 'vialidad', 'tipo_ic': 'tipo_ic', 'tipo_via': 'tipo_via', 'instancia': 'instancia', 'ano': 'ano', 'longitud': 'longitud', });
lyr_senderocompartido_8.set('fieldAliases', {'estado': 'estado', 'nombre': 'nombre', 'vialidad': 'vialidad', 'tipo_ic': 'tipo_ic', 'tipo_via': 'tipo_via', 'instancia': 'instancia', 'ano': 'ano', 'longitud': 'longitud', });
lyr_estacionesdeecobici_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'address': 'TextEdit', 'addressnumb': 'TextEdit', 'zipcode': 'TextEdit', 'districtcod': 'TextEdit', 'districtnam': 'TextEdit', 'altitude': 'TextEdit', 'nearbystati': 'TextEdit', 'location_la': 'TextEdit', 'location_lo': 'TextEdit', 'stationtype': 'TextEdit', 'nearbystati_1': 'TextEdit', 'nearbystati_2': 'TextEdit', 'nearbystati_3': 'TextEdit', 'nearbystati_4': 'TextEdit', 'nearbystati_5': 'TextEdit', });
lyr_areadeoperaciondebicicletas_2.set('fieldImages', {'oid': 'TextEdit', 'name': 'TextEdit', 'symbolid': 'TextEdit', 'altmode': 'TextEdit', 'base': 'TextEdit', 'clamped': 'TextEdit', 'extruded': 'TextEdit', 'snippet': 'TextEdit', 'popupinfo': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_CarrilBusbici_3.set('fieldImages', {'estado': 'TextEdit', 'nombre': 'TextEdit', 'vialidad': 'TextEdit', 'tipo_ic': 'TextEdit', 'tipo_via': 'TextEdit', 'instancia': 'TextEdit', 'ano': 'TextEdit', 'longitud': 'TextEdit', });
lyr_Carrildeprioridadciclista_4.set('fieldImages', {'estado': 'TextEdit', 'nombre': 'TextEdit', 'vialidad': 'TextEdit', 'tipo_ic': 'TextEdit', 'tipo_via': 'TextEdit', 'instancia': 'TextEdit', 'ano': 'TextEdit', 'longitud': 'TextEdit', });
lyr_Ciclocarril_5.set('fieldImages', {'estado': 'TextEdit', 'nombre': 'TextEdit', 'vialidad': 'TextEdit', 'tipo_ic': 'TextEdit', 'tipo_via': 'TextEdit', 'instancia': 'TextEdit', 'ano': 'TextEdit', 'longitud': 'TextEdit', });
lyr_Cicloviarecreativa_6.set('fieldImages', {'estado': 'TextEdit', 'nombre': 'TextEdit', 'vialidad': 'TextEdit', 'tipo_ic': 'TextEdit', 'tipo_via': 'TextEdit', 'instancia': 'TextEdit', 'ano': 'TextEdit', 'longitud': 'TextEdit', });
lyr_Ciclovia_7.set('fieldImages', {'estado': 'TextEdit', 'nombre': 'TextEdit', 'vialidad': 'TextEdit', 'tipo_ic': 'TextEdit', 'tipo_via': 'TextEdit', 'instancia': 'TextEdit', 'ano': 'TextEdit', 'longitud': 'TextEdit', });
lyr_senderocompartido_8.set('fieldImages', {'estado': 'TextEdit', 'nombre': 'TextEdit', 'vialidad': 'TextEdit', 'tipo_ic': 'TextEdit', 'tipo_via': 'TextEdit', 'instancia': 'TextEdit', 'ano': 'TextEdit', 'longitud': 'TextEdit', });
lyr_estacionesdeecobici_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'address': 'no label', 'addressnumb': 'no label', 'zipcode': 'no label', 'districtcod': 'no label', 'districtnam': 'no label', 'altitude': 'no label', 'nearbystati': 'no label', 'location_la': 'no label', 'location_lo': 'no label', 'stationtype': 'no label', 'nearbystati_1': 'no label', 'nearbystati_2': 'no label', 'nearbystati_3': 'no label', 'nearbystati_4': 'no label', 'nearbystati_5': 'no label', });
lyr_areadeoperaciondebicicletas_2.set('fieldLabels', {'oid': 'no label', 'name': 'no label', 'symbolid': 'no label', 'altmode': 'no label', 'base': 'no label', 'clamped': 'no label', 'extruded': 'no label', 'snippet': 'no label', 'popupinfo': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_CarrilBusbici_3.set('fieldLabels', {'estado': 'no label', 'nombre': 'no label', 'vialidad': 'no label', 'tipo_ic': 'no label', 'tipo_via': 'no label', 'instancia': 'no label', 'ano': 'no label', 'longitud': 'no label', });
lyr_Carrildeprioridadciclista_4.set('fieldLabels', {'estado': 'no label', 'nombre': 'no label', 'vialidad': 'no label', 'tipo_ic': 'no label', 'tipo_via': 'no label', 'instancia': 'no label', 'ano': 'no label', 'longitud': 'no label', });
lyr_Ciclocarril_5.set('fieldLabels', {'estado': 'no label', 'nombre': 'no label', 'vialidad': 'no label', 'tipo_ic': 'no label', 'tipo_via': 'no label', 'instancia': 'no label', 'ano': 'no label', 'longitud': 'no label', });
lyr_Cicloviarecreativa_6.set('fieldLabels', {'estado': 'no label', 'nombre': 'no label', 'vialidad': 'no label', 'tipo_ic': 'no label', 'tipo_via': 'no label', 'instancia': 'no label', 'ano': 'no label', 'longitud': 'no label', });
lyr_Ciclovia_7.set('fieldLabels', {'estado': 'no label', 'nombre': 'no label', 'vialidad': 'no label', 'tipo_ic': 'no label', 'tipo_via': 'no label', 'instancia': 'no label', 'ano': 'no label', 'longitud': 'no label', });
lyr_senderocompartido_8.set('fieldLabels', {'estado': 'no label', 'nombre': 'no label', 'vialidad': 'no label', 'tipo_ic': 'no label', 'tipo_via': 'no label', 'instancia': 'no label', 'ano': 'no label', 'longitud': 'no label', });
lyr_senderocompartido_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});