(function ($) {
    "use strict";

    /*Sale statistics Chart*/
    if ($('#myChart').length) {
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
            
            // The data for our dataset
            data: {
                labels: ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'],
                datasets: [{
                        label: 'فروش',
                        tension: 0.3,
                        fill: true,
                        backgroundColor: 'rgba(44, 120, 220, 0.2)',
                        borderColor: 'rgba(44, 120, 220)',
                        data: [18, 17, 4, 3, 2, 20, 25, 31, 25, 22, 20, 9]
                    },
                    {
                        label: 'بازدیدکنندگان',
                        tension: 0.3,
                        fill: true,
                        backgroundColor: 'rgba(4, 209, 130, 0.2)',
                        borderColor: 'rgb(4, 209, 130)',
                        data: [40, 20, 17, 9, 23, 35, 39, 30, 34, 25, 27, 17]
                    },
                    {
                        label: 'محصولات',
                        tension: 0.3,
                        fill: true,
                        backgroundColor: 'rgba(380, 200, 230, 0.2)',
                        borderColor: 'rgb(380, 200, 230)',
                        data: [30, 10, 27, 19, 33, 15, 19, 20, 24, 15, 37, 6]
                    }

                ]
            },
            options: {
                plugins: {
                legend: {
                    labels: {
                    usePointStyle: true,
                    },
                }
                }
            }
        });
    } //End if

    /*Sale statistics Chart*/
    if ($('#myChart2').length) {
        var ctx = document.getElementById("myChart2");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
            labels: ["900", "1200", "1400", "1600"],
            datasets: [
                {
                    label: "آمریکا",
                    backgroundColor: "#5897fb",
                    barThickness:10,
                    data: [233,321,783,900]
                }, 
                {
                    label: "اروپا",
                    backgroundColor: "#7bcf86",
                    barThickness:10,
                    data: [408,547,675,734]
                },
                {
                    label: "آسیا",
                    backgroundColor: "#ff9076",
                    barThickness:10,
                    data: [208,447,575,634]
                },
                {
                    label: "آفریقا",
                    backgroundColor: "#d595e5",
                    barThickness:10,
                    data: [123,345,122,302]
                },
            ]
            },
            options: {
                plugins: {
                    legend: {
                        labels: {
                        usePointStyle: true,
                        },
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } //end if
    
})(jQuery);