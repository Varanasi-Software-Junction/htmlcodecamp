
     function champaksWorldPrintDiv(divid, dtitle) {

         var divToPrint = document.getElementById(divid);

         var newWin = window.open('', 'Print-Window');

         newWin.document.open();

         newWin.document.write('<html><head>' + dtitle + '</head><body>' + divToPrint.innerHTML + '</body></html>');

         newWin.document.close();
         newWin.print();
         newWin.close();

         //setTimeout(function () { newWin.close(); }, 10);

     }
 
 function champaksWorldSetTableSearch(divid,tableid)
 {
	var data="  <div class=\"row\">\n";
  data+="<div class=\"col-md-12\">\n";
  data+="<p>Search by any data.</p>\n";
  data+="<input class=\"w3-input w3-border w3-padding\" type=\"text\" placeholder=\"Search by any data\" id=\"champaksWorldMyInput\"  onclick=\"champaksWorldsDoTableSearch('champaksWorldMyInput','" + tableid+ "','champaksWorldTxtNoOfRecords')\"    onkeyup=\"champaksWorldsDoTableSearch('champaksWorldMyInput','" + tableid+ "','champaksWorldTxtNoOfRecords')\"/>\n";
    data+=" </div>\n";
data+="</div>\n";


data+="<br />\n";
data+="<div class=\"row\">\n";
data+="  <div class=\"col-md-12\">\n";
 data+=" <p>No of records</p>\n";
  data+="<input readonly class=\"w3-input w3-border w3-padding\" type=\"text\" placeholder=\"No of Records\" id=\"champaksWorldTxtNoOfRecords\" />\n";
    data+=" </div>\n";
data+="</div>\n";


var div=document.getElementById(divid);
div.innerHTML=data;
document.getElementById('champaksWorldMyInput').click();
 }
 
 
        
		
		
		function champaksWorldShowFilePreview(fileUploadId, imageUploadId) {

            var fl = document.getElementById(fileUploadId);
            var filescollection = fl.files;

            var nooffiles = filescollection.length;

            var file = filescollection[0];
            var filetype = (file['type']);
            if (filetype.includes("image")) {
                var modalbox = document.getElementById('modalId');
                modalbox.style.display = 'block';
                document.getElementById("modalheader").innerHTML = file['name'];
                var src = URL.createObjectURL(file);
                document.getElementById("modalmiddle").innerHTML = "<center><img class='w3-card w3-image' style='width:300px;display: block;  margin-left: auto;  margin-right: auto;' src='" + src + "'/></center>";
            }
            if (/*filetype.includes("pdf")*/true) {
                var modalbox = document.getElementById('modalId');
                modalbox.style.display = 'block';
                document.getElementById("modalheader").innerHTML = file['name'];
                var src = URL.createObjectURL(file);
                document.getElementById("modalmiddle").innerHTML = "<center><iframe class='w3-card w3-image' style='width:100%;' src='" + src + "'></iframe></center>";
            }
            document.getElementById(imageUploadId).src = src;


        }

        function champaksWorldsCloseModal()
		{
			document.getElementById('modalId').style.display = 'none'; document.getElementById("modalmiddle").innerHTML = ""; }



    function champaksWorldsDoTableSearch(textboxid, tableid, recordcounttext) {
        var input, filter, table, tr, td, i;
        input = document.getElementById(textboxid);
        filter = input.value.toUpperCase();



        table = document.getElementById(tableid);
        tr = table.getElementsByTagName("tr");
        var noofrows = tr.length;
        var count = 0;
        for (i = 1; i <= noofrows - 1; i++) {
            var noofcols = tr[i].getElementsByTagName("td").length;
            var textdata = "";
            for (j = 0; j <= noofcols - 1; j++) {
                currenttd = tr[i].getElementsByTagName("td")[j];
                if (currenttd) {
                    textdata += currenttd.textContent || currenttd.innerText
                }
            }
            //  alert(textdata);

            if (textdata.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                count++;
            } else {
                tr[i].style.display = "none";
            }
        }
        document.getElementById(recordcounttext).value = count;
    }
    


