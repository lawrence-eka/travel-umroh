var Hyperlinks = require("../codes/Hyperlinks");

var http = require('http');

exports.getList = function(data)
{
    var result = [];
    var begTag = '<td class="border1">';
    var endTag = '</td>';

    var airport = "";
    var country = "";
    var code = "";
    
    for(var i = 0; i < data.length && i >= 0;)
    {
        var j=0;
        i = data.indexOf(begTag, i);
        if(i >= 0)
        {
            i = i + begTag.length;
            j = data.indexOf(endTag, i);
            if(j > i)
            {
                airport = Hyperlinks.removeHyperlink(data.substring(i, j));
                i = j + endTag.length;
            }
        }

        i = data.indexOf(begTag, i);
        if(i >= 0)
        {
            i = i + begTag.length;
            j = data.indexOf(endTag, i);
            if(j > i)
            {
                country = Hyperlinks.removeHyperlink(data.substring(i, j));
                i = j + endTag.length;
            }
        }

        i = data.indexOf(begTag, i);
        if(i >= 0)
        {
            i = i + begTag.length;
            j = data.indexOf(endTag, i);
            if(j > i)
            {
                code = data.substring(i, j);
                i = j + endTag.length;
                result.push({"airport": airport, "country": country, "code":code})
            }
        }
        
    }
    return result;
};

exports.retrieve()
{

    var options = {
        host: 'www.nationsonline.org',
        path: '/oneworld/IATA_Codes/airport_code_list.htm'
    };
    var result = [];
    var request = http.request(options, function (res) {
        var data = '';
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on('end', function () {
            //console.log(data);
            result = getList(data));
        });
    });
    request.on('error', function (e) {
        console.log(e.message);
    });

    request.end();

    return result;
};
