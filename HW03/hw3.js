const el = document.getElementById('numSlider');
el.addEventListener('change', sliderListener);

function sliderListener(ev) {
    console.log('Slider value is ' + ev.target.value);


    const elOut = document.getElementById('usercount');
    elOut.innerText = ev.target.value;


    const ulParent = document.getElementById('mylist');
    const len = Number(ev.target.value); // convert string to number

    // const items = document.querySelectorAll('#mylist > li');
    // for (let z of items) {
    //     mylist.removeChild(z);
    // }

    // for (let k = 0; k < len; k++) {
    //     const liChild = document.createElement('li');
    //     const liText = document.createTextNode('Item#' + k);
    //     liChild.appendChild(liText);
    //     mylist.appendChild(liChild);
    // }


    fetch('https://randomuser.me/api?results='+len)
    .then(r => r.json()) // convert the response 'r' to a JSON object
    .then(d => {
        
        const items2 = document.querySelectorAll('#tbl tr');
        console.log(items2);
        for (let z of items2) {
            tbl.deleteRow(z);
            console.log(z.first);
        }

        var t = document.getElementById("tbl");

        for(let i = 0; i < len; i++){
            let first = d.results[i].name.first;
            let last = d.results[i].name.last;
            let uname = d.results[i].login.username;
            let cell = d.results[i].phone;
            let bday = d.results[i].dob.date;
            let pic = d.results[i].picture.thumbnail;
            

            var row = t.insertRow(i);

            var fname = row.insertCell(0);
            var lname = row.insertCell(1);
            var usr = row.insertCell(2);
            var cellp = row.insertCell(3);
            var dob = row.insertCell(4);
            var photo = row.insertCell(5);



            fname.innerHTML = first;
            lname.innerHTML = last;
            usr.innerHTML = uname;
            cellp.innerHTML = cell;
            dob.innerHTML = bday;
            photo.innerHTML = ("<img src=" + pic + ">");
        }

    });

}