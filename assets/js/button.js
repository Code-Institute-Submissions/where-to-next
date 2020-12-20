$(".cityshow").click(function(event) {
       showdiv = '#'+$(event.target).attr('data-link');
       markers = $(event.target).attr('data-marker-array');
       if (markers=="colmarMarkers") {
           selectedMarkers = colmarMarkers;
           selectedOptions = colmarMarkersOptions;
       }
        if (markers=="athensMarkers") {
           selectedMarkers = athensMarkers;
           selectedOptions = athensMarkersOptions;
       }
        if (markers=="tbilisiMarkers") {
           selectedMarkers = tbilisiMarkers;
           selectedOptions = tbilisiMarkersOptions;
       }
        if (markers=="viennaMarkers") {
           selectedMarkers = viennaMarkers;
           selectedOptions = viennaMarkersOptions;
       }
        if (markers=="cascaisMarkers") {
           selectedMarkers = cascaisMarkers;
           selectedOptions = cascaisMarkersOptions;
       }
        if (markers=="sibiuMarkers") {
           selectedMarkers = sibiuMarkers;
           selectedOptions = sibiuMarkersOptions;
       }
        if (markers=="namurMarkers") {
           selectedMarkers = namurMarkers;
           selectedOptions = namurMarkersOptions;
       }
        if (markers=="rijekaMarkers") {
           selectedMarkers = rijekaMarkers;
           selectedOptions = rijekaMarkersOptions;
       }
        if (markers=="parisMarkers") {
           selectedMarkers = parisMarkers;
           selectedOptions = parisMarkersOptions;
       }
        if (markers=="bydgoszczMarkers") {
           selectedMarkers = bydgoszczMarkers;
           selectedOptions = bydgoszczMarkersOptions;
       }
       console.log("marker", markers);
       console.log("selected marker", selectedMarkers);
       $(".infodiv").addClass('hideme');
       $(".mainpic").addClass('hideme');
       $(showdiv).removeClass('hideme');
       initMap(selectedMarkers, selectedOptions);
    });

