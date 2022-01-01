$.ajax({
    url         : "https://jsonplaceholder.typicode.com/users",
    type        : "GET",
    dataType    : "json",
    data        : {get_param : 'value'},
    success     : function(data){

        jmlData = data.length;
        
        buatTabel = "";
        
        for(a = 0; a < jmlData; a++){
            
            buatTabel += "<tr>"
            
                        + "<td>" + (a+1) + "</td>"
                        + "<td>" + data[a]["name"] + "</td>"
                        + "<td>" + data[a]["username"] + "</td>"
                        + "<td>" + data[a]["email"] + "</td>"
                        + "<td>" + data[a]["phone"] + "</td>"
                        + "<td>" + data[a]["website"] + "</td>"
                        + "<td>" + data[a]["street"] + "</td>"
                        + "<td>" + data[a]["suite"] + "</td>"
                        + "<td>" + data[a]["city"] + "</td>"
                        + "<td>" + data[a]["zipcode"] + "</td>"
                + "<tr/>";
        }
        document.getElementsByTagName('textarea')[0].value = jmlData;
        document.getElementsByTagName("table")[0].innerHTML += buatTabel;
    }
});