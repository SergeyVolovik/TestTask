"use stick"

var arrCompanies = [],
    compArr,
    nameComp,
    partners,
    companyId,
    partArr,
    partName,
    partVal;

$.getJSON('http://codeit.pro/codeitCandidates/serverFrontendTest/company/getList',
    function(data) {

        if (data.status === "OK") {
            $.each(data, function(key, val) {
                arrCompanies.push({
                    key: val
                });
            });

            compArr = arrCompanies[0]['key'];
            nameComp = compArr.map(item => item.name);
            $("#numCompanies").empty().append(nameComp.length).addClass('text-center h2 p-5'); //show number of companies 
            $(".loader").hide();

            $.each(nameComp, function(key, val) {
                arrCompanies.push(`<a href="#" data-id="${key}"><li>${val}</li></a>`);
                $("#listCompanies").html(arrCompanies).addClass("styleList p-3 text-info");
            });

            //focus for li
            $('#listCompanies a').on("click", function() {
                $('#listCompanies a li').removeClass('active');
                $(this).find('li').addClass('active');

                partners = compArr.map(item => item.partners);

                companyId = $(this).data('id');
                partArr = partners[companyId];
                partName = partArr.map(item => item.name);
                partVal = partArr.map(item => item.value)

                console.log(partName);
                console.log(partVal);
                $("#test").html(partName).addClass("styleList p-3 text-info");
                $("#hideContainer").show(500); //show Company partners (speed .5s)
            });

            var densityCanvas = document.getElementById("densityChart");

            Chart.defaults.global.defaultFontFamily = "Lato";
            Chart.defaults.global.defaultFontSize = 18;

            var densityData = {
                label: 'Partners',
                data: partVal
            };

            var barChart = new Chart(densityCanvas, {
                type: 'bar',
                data: {
                    labels: partName,
                    datasets: partVal
                }
            });
        }
    });