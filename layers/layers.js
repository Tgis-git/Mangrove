ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32642").setExtent([617876.301572, 2545262.850328, 683039.530283, 2577516.241570]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Positron_2 = new ol.layer.Tile({
            'title': 'Positron',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var lyr_FCC_2023_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "FCC_2023",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FCC_2023_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7820601.440638, 2648497.973709, 7872017.129251, 2660082.724548]
                            })
                        });
var lyr_FCC_2022_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "FCC_2022",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FCC_2022_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7820601.440638, 2648497.973709, 7872017.129251, 2660082.724548]
                            })
                        });
var lyr_FCC_2021_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "FCC_2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FCC_2021_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7820601.440638, 2648497.973709, 7872017.129251, 2660082.724548]
                            })
                        });
var lyr_FCC_2020_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "FCC_2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FCC_2020_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7820601.440638, 2648497.973709, 7872017.129251, 2660082.724548]
                            })
                        });
var lyr_FCC_2019_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "FCC_2019",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FCC_2019_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7820601.440638, 2648497.973709, 7872017.129251, 2660082.724548]
                            })
                        });
var lyr_FCC_2018_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "FCC_2018",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FCC_2018_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7820601.440638, 2648497.973709, 7872017.129251, 2660082.724548]
                            })
                        });
var lyr_FCC_2015_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "FCC_2015",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FCC_2015_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7820601.440638, 2648497.973709, 7872017.129251, 2660082.724548]
                            })
                        });
var lyr_FCC_2010_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "FCC_2010",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FCC_2010_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7820601.440638, 2648497.973709, 7872017.129251, 2660082.724548]
                            })
                        });
var lyr_FCC_2005_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "FCC_2005",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FCC_2005_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7820601.440638, 2648497.973709, 7872017.129251, 2660082.724548]
                            })
                        });
var lyr_2023Classification_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "2023Classification",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2023Classification_12.png",
    attributions: ' ',
                                projection: 'EPSG:32642',
                                alwaysInRange: true,
                                imageExtent: [628333.377700, 2559158.187000, 675585.314300, 2570177.794800]
                            })
                        });
var lyr_2022Classification_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "2022Classification",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2022Classification_13.png",
    attributions: ' ',
                                projection: 'EPSG:32642',
                                alwaysInRange: true,
                                imageExtent: [628340.791600, 2559144.920800, 675584.252700, 2570176.668900]
                            })
                        });
var lyr_2021Classification_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "2021Classification",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2021Classification_14.png",
    attributions: ' ',
                                projection: 'EPSG:32642',
                                alwaysInRange: true,
                                imageExtent: [628340.791600, 2559144.920800, 675584.252700, 2570176.668900]
                            })
                        });
var lyr_2020Classification_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "2020Classification",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2020Classification_15.png",
    attributions: ' ',
                                projection: 'EPSG:32642',
                                alwaysInRange: true,
                                imageExtent: [628340.791600, 2559144.920800, 675584.252700, 2570176.668900]
                            })
                        });
var lyr_2019Classification_16 = new ol.layer.Image({
                            opacity: 1,
                            title: "2019Classification",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2019Classification_16.png",
    attributions: ' ',
                                projection: 'EPSG:32642',
                                alwaysInRange: true,
                                imageExtent: [628340.791600, 2559144.920800, 675584.252700, 2570176.668900]
                            })
                        });
var lyr_2018Classification_17 = new ol.layer.Image({
                            opacity: 1,
                            title: "2018Classification",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2018Classification_17.png",
    attributions: ' ',
                                projection: 'EPSG:32642',
                                alwaysInRange: true,
                                imageExtent: [628340.791600, 2559144.920800, 675584.252700, 2570176.668900]
                            })
                        });
var lyr_2015Classification_18 = new ol.layer.Image({
                            opacity: 1,
                            title: "2015Classification",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2015Classification_18.png",
    attributions: ' ',
                                projection: 'EPSG:32642',
                                alwaysInRange: true,
                                imageExtent: [628340.791600, 2559144.920800, 675584.252700, 2570176.668900]
                            })
                        });
var lyr_2010Classification_19 = new ol.layer.Image({
                            opacity: 1,
                            title: "2010Classification",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2010Classification_19.png",
    attributions: ' ',
                                projection: 'EPSG:32642',
                                alwaysInRange: true,
                                imageExtent: [628340.791600, 2559144.920800, 675584.252700, 2570176.668900]
                            })
                        });
var lyr_2005Classification_20 = new ol.layer.Image({
                            opacity: 1,
                            title: "2005Classification",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/2005Classification_20.png",
    attributions: ' ',
                                projection: 'EPSG:32642',
                                alwaysInRange: true,
                                imageExtent: [628373.720500, 2559164.722100, 675562.023000, 2570141.311400]
                            })
                        });
var format_VillageBoundary_21 = new ol.format.GeoJSON();
var features_VillageBoundary_21 = format_VillageBoundary_21.readFeatures(json_VillageBoundary_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32642'});
var jsonSource_VillageBoundary_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillageBoundary_21.addFeatures(features_VillageBoundary_21);
var lyr_VillageBoundary_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillageBoundary_21, 
                style: style_VillageBoundary_21,
                popuplayertitle: "Village Boundary",
                interactive: true,
                title: '<img src="styles/legend/VillageBoundary_21.png" /> Village Boundary'
            });
var lyr_LegendNew_georeferenced_22 = new ol.layer.Image({
                            opacity: 1,
                            title: "LegendNew_georeferenced",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LegendNew_georeferenced_22.png",
    attributions: ' ',
                                projection: 'EPSG:32642',
                                alwaysInRange: true,
                                imageExtent: [663274.229249, 2550185.068216, 670392.301545, 2557815.359113]
                            })
                        });
var format_Area1_23 = new ol.format.GeoJSON();
var features_Area1_23 = format_Area1_23.readFeatures(json_Area1_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32642'});
var jsonSource_Area1_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area1_23.addFeatures(features_Area1_23);
var lyr_Area1_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area1_23, 
                style: style_Area1_23,
                popuplayertitle: "Area 1",
                interactive: false,
                title: '<img src="styles/legend/Area1_23.png" /> Area 1'
            });
var group_Mangroves = new ol.layer.Group({
                                layers: [lyr_2023Classification_12,lyr_2022Classification_13,lyr_2021Classification_14,lyr_2020Classification_15,lyr_2019Classification_16,lyr_2018Classification_17,lyr_2015Classification_18,lyr_2010Classification_19,lyr_2005Classification_20,],
                                fold: "open",
                                title: "Mangroves"});
var group_FCC = new ol.layer.Group({
                                layers: [lyr_FCC_2023_3,lyr_FCC_2022_4,lyr_FCC_2021_5,lyr_FCC_2020_6,lyr_FCC_2019_7,lyr_FCC_2018_8,lyr_FCC_2015_9,lyr_FCC_2010_10,lyr_FCC_2005_11,],
                                fold: "open",
                                title: "FCC"});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Positron_2.setVisible(true);lyr_FCC_2023_3.setVisible(true);lyr_FCC_2022_4.setVisible(true);lyr_FCC_2021_5.setVisible(true);lyr_FCC_2020_6.setVisible(true);lyr_FCC_2019_7.setVisible(true);lyr_FCC_2018_8.setVisible(true);lyr_FCC_2015_9.setVisible(true);lyr_FCC_2010_10.setVisible(true);lyr_FCC_2005_11.setVisible(true);lyr_2023Classification_12.setVisible(true);lyr_2022Classification_13.setVisible(true);lyr_2021Classification_14.setVisible(true);lyr_2020Classification_15.setVisible(true);lyr_2019Classification_16.setVisible(true);lyr_2018Classification_17.setVisible(true);lyr_2015Classification_18.setVisible(true);lyr_2010Classification_19.setVisible(true);lyr_2005Classification_20.setVisible(true);lyr_VillageBoundary_21.setVisible(true);lyr_LegendNew_georeferenced_22.setVisible(true);lyr_Area1_23.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_Positron_2,group_FCC,group_Mangroves,lyr_VillageBoundary_21,lyr_LegendNew_georeferenced_22,lyr_Area1_23];
lyr_VillageBoundary_21.set('fieldAliases', {'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Dist_Id': 'Dist_Id', 'Taluka_Id': 'Taluka_Id', 'Village_Id': 'Village_Id', 'S_Name': 'S_Name', 'Remark': 'Remark', 'GUJ_NAM': 'GUJ_NAM', 'GUJ_NAM2': 'GUJ_NAM2', 'GUJ_NAM_1': 'GUJ_NAM_1', 'Popu_2001': 'Popu_2001', 'Status': 'Status', 'BEAT': 'BEAT', 'ROUND': 'ROUND', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'VILL_TYPE': 'VILL_TYPE', 'FOREST_AR': 'FOREST_AR', });
lyr_Area1_23.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_VillageBoundary_21.set('fieldImages', {'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Dist_Id': 'TextEdit', 'Taluka_Id': 'TextEdit', 'Village_Id': 'TextEdit', 'S_Name': 'TextEdit', 'Remark': 'TextEdit', 'GUJ_NAM': 'TextEdit', 'GUJ_NAM2': 'TextEdit', 'GUJ_NAM_1': 'TextEdit', 'Popu_2001': 'TextEdit', 'Status': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'VILL_TYPE': 'TextEdit', 'FOREST_AR': 'TextEdit', });
lyr_Area1_23.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_VillageBoundary_21.set('fieldLabels', {'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Dist_Id': 'hidden field', 'Taluka_Id': 'hidden field', 'Village_Id': 'hidden field', 'S_Name': 'hidden field', 'Remark': 'hidden field', 'GUJ_NAM': 'hidden field', 'GUJ_NAM2': 'hidden field', 'GUJ_NAM_1': 'hidden field', 'Popu_2001': 'hidden field', 'Status': 'hidden field', 'BEAT': 'hidden field', 'ROUND': 'hidden field', 'RANGE': 'hidden field', 'DIVISION': 'hidden field', 'CIRCLE': 'hidden field', 'VILL_TYPE': 'hidden field', 'FOREST_AR': 'hidden field', });
lyr_Area1_23.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Area1_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});