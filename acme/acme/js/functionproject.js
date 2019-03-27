

/*************************JSON************************************* */
 
function tabs(){
//define URL


fetch(URL)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Response not OK.');
    })
    .then(function (data){
        // See what we got back
        console.log('Json object from tabs function: ', data);

        //store in variables
        var anvils = data.anvils.name;
        console.log('name anvils: ', anvils);

    })
}