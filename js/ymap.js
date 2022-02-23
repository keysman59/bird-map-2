ymaps.ready(init4);

function init4(){
    var myMap4 = new ymaps.Map("map4", {
        center: [42.36008897522217,69.64055811059396], 
        zoom: 15,
        controls: []
    });

    var zoomControl = new ymaps.control.ZoomControl({
            options: {
                position: {
                    right: '14px',
                    top: '215px' 
                }
            }
        });
    myMap4.controls.add(zoomControl);

    myMap4.behaviors.disable('scrollZoom'); 
    shimCollection = new ymaps.GeoObjectCollection(null, {
        preset: 'islands#yellowIcon',
        iconLayout: 'default#image',
        iconImageHref: 'images/icon/icon-star-gold.svg',
        iconImageSize: [52, 52],
    })


    shimCollection
        .add(new ymaps.Placemark([42.3602075743757,69.64010449999999], {
            hintContent: "ОП Star JD"
        }))
        ;

    myMap4.geoObjects.add(shimCollection);
}
