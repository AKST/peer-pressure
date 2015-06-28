
Router.route('/', function (){
  this.render('home', {});
});

Router.route('/api/call', function () {
  this.response.end(
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
    "<Response>\n" +
    "  <Say>test</Say>\n" +
    "  <Pause length=\"1\"/>\n" +
    "</Response>\n"
  );
  this.response.end(JSON.stringify(this.params.query));
}, { where: 'server' });



