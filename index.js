var fs = require('fs'),
  path = require('path'),
  _ = require('underscore');

var filePath = path.join(__dirname, 'youku-template.ejs');

function youkuMaps(args)
{
  var template = fs.readFileSync(filePath).toString();

  // Output into 
  return _.template(template)({
    id: args[0],
    class: (args[1] || 'youku') + 'video-container'
  });
}


hexo.extend.tag.register('youku', youkuMaps, {
  async: true,
  ends: false
});