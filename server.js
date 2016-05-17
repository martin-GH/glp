var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: __dirname + '/public/'});
});

router.route('/data/:type')
  .get(function(req, res) {
    var data = {
      kpi: {
        name: 'sm',
        type: 'kpi'
      },
      grid: {
        name: 'sm',
        type: 'grid'
      }
    };

    console.log('PARAMS: ',req.params);

    res.json(data[req.params.type]);
  });

app.use('/api', router);

app.listen(3000, function () {
  console.log('Example app listening at 3000');
});
