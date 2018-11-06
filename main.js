
// POST "https://api-us.faceplusplus.com/facepp/v3/detect" -F "api_key=lYJn2ec5zAnhgiO01Q5cMILRDs9laP4I" \
// -F "api_secret=9NCT_mXUokztZLOwk5hUqyLwB5aOLYI-" \
// -F "image_file=@image_file.jpg" \
// -F "return_landmark=1" \
// -F "return_attributes=gender,age"


var QueryURL = "https://api-us.faceplusplus.com/facepp/v3/detect";
    // generates the igfs based on the url 
    $.ajax({
        url: QueryURL,
        type: 'GET',
    }).then(function (response) {
    console.log(response)
    })

