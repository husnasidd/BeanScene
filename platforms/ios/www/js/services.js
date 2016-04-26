angular.module('starter.services', ['starter'])

.factory('Shops', function() {
  // Might use a resource here that returns a JSON array
        // var shops = [];
         
         console.log(list.length);
         
         shops = list;
//         for(i = 0; i < list.length; i++){
//         shops[i] = list[i];
//         }
//         
//
//
//         for(i=0;i<globalShops.length;i++)
//         {
//             var request ={
//             reference:globalShops[i].reference
//             };
//             service.getDetails(request,function(details,status){
//                                
//                                shops.push({id: i, name: details.name, address: details.formatted_address, phoneNumber: details.formatted_phone_number, website: details.website, priceLevel: details.priceLevel, rating: details.rating})
//    
//                    });
//         
//         }
         

// Coffee shop data
//  var shops = [{
//    id: 0,
//    name: 'Black Tap',
//    lastText: '70.5 Beaufain St',
//    face: 'img/blacktap.png',
//    website: 'http://www.blacktapcoffee.com/',
//    hoursOfOperation: 'Monday - Friday: 7am - 7pm and Saturday + Sunday: 8am - 6pm'
//               
//  }, {
//    id: 1,
//    name: 'Browns Court',
//    lastText: '199 St Philip St,',
//    face: 'img/brownscourt.png'
//  }, {
//    id: 2,
//    name: 'Cafe Paradiso',
//    lastText: '51 S Market St',
//    face: 'img/paradiso.png'
//  }, {
//    id: 3,
//    name: 'City Lights Coffee',
//    lastText: '141 Market St,',
//    face: 'img/citylights.png'
//  }, {
//    id: 4,
//    name: 'Kudu Coffee and Craft Beer',
//    lastText: '4 Vanderhorst St',
//    face: 'img/kudu.png'
//  }, {
//    id: 5,
//    name: 'Mercantile and Mash',
//    lastText: '701 E Bay St',
//    face: 'img/merc.png'
//  }, {
//    id: 6,
//    name: 'RISE Coffee',
//    lastText: '77 Wentworth St',
//    face: 'img/rise.png'
//  }, {
//    id: 7,
//    name: 'Starbucks',
//    lastText: '239 King Street (multiple locations)',
//    face: 'img/starbucks.png'
//  }, {
//    id: 8,
//    name: 'Tricera Coffee',
//    lastText: '41 George St',
//    face: 'img/Tricera.png'
//  }];
//         
         
  return {
    all: function() {
      return shops;
    },
    remove: function(shop) {
      shops.splice(shops.indexOf(shop), 1);
    },
    get: function(shopId) {
      for (var i = 0; i < shops.length; i++) {
        if (shops[i].id === parseInt(shopId)) {
          return shops[i];
        }
      }
      return null;
    }
  };
        
});



