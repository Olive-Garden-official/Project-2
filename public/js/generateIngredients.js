function checkLocalStorage() {
    var test = 'localStorageTestAvailability';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
};

$(document).ready(function () {
    $("button").click(function () {
        //Using 'recipe' as a placeholder for value needed from local storage
        window.localStorage.getItem('receipe');
        console.log('receipe');
        JSON.parse(window.localStorage.getItem('receipe'));
        var receipe = localStorage.getItem('receipe')

        app.get('/customers', function (req, res) {
            sql.connect(sqlConfig, function () {
                var request = new sql.Request();
                request.query('select * from Receipe.ingredients', function (err, recordset) {
                    if (err) console.log(err);
                    res.end(JSON.stringify(recordset)); // Result in JSON format
                });
            });
        })
    });
});


