(function(){

    var fetchedData = {};
    var d3 = window.d3version3;
    console.log(d3.version);
    d3.csv('multiline_data.csv', function(error, data) {
        data.forEach(function (d) {
            d.Month = transformMonth(d.Month);
            d.Corn = +d.Corn;
            d.Canola = +d.Canola;
            d.Wheat = +d.Wheat;
            d.Oats = +d.Oats;
            d.Soybeans = +d.Soybeans;
            console.log(d);
        });
        fetchedData = data;
        var chart = makeLineChart(data, 'Month', {
            'Corn': {column: 'Corn'},
            'Canola': {column: 'Canola'},
            'Wheat': {column: 'Wheat'},
            'Oats': {column: 'Oats'},
            'Soybeans': {column: 'Soybeans'}
        }, {xAxis: 'Month', yAxis: 'Amount'});
        chart.bind("#chart-line1");
        chart.render();

    });
    var transformMonth = function(month) {
        switch (month) {
            case 'Apr': 
                return 1;
            case 'May': 
                return 2;
            case 'Jun': 
                return 3;
            case 'Jul': 
                return 4;
            case 'Aug': 
                return 5;
            case 'Sep': 
                return 6;
            case 'Oct': 
                return 7;
            case 'Nov': 
                return 8;
            case 'Dec': 
                return 9;
            case 'Jan': 
                return 10;
            case 'Feb': 
                return 11;
            case 'Mar': 
                return 12;
            default:
                return 0;
        }
    }
    console.log('hackyhacky');
})();