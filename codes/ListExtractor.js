removeHyperlink = function(data)
{
    for(var i = 0; i >= 0;)
    {
        i = data.indexOf("<", 0);
        if (i >= 0)
        {
            var j = data.indexOf(">", i);
            if(j >= 0)
            {
                j = j + 1;
                data = data.substring(0, i) + data.substring(j);
                i = j;
            }
        }
    }
    return data;
}

String.prototype.replaceAll = function(target, replacement)
{
    return this.split(target).join(replacement);
}

function skipText(data, skipUntilTag)
{
    if(skipUntilTag != '')
    {
        data.idx = data.text.indexOf(skipUntilTag); 
        if(data.idx >= 0) data.idx += skipUntilTag.length;
        else data.idx = 0;
    }
}

function getElementValue(data, begTag, endTag)
{
    if(data.idx < 0) return "";

    var result = "";
    if(begTag != "") data.idx = data.text.indexOf(begTag, data.idx);
    
    if(data.idx >= 0)
    {
        data.idx += begTag.length;
        var j = data.text.indexOf(endTag, data.idx);
        if(j >= data.idx)
        {
            result = removeHyperlink(data.text.substring(data.idx, j));
            data.idx = j + endTag.length;
        }
    }
    return result;
}

function getList(data, skipUntilTag, componentList)
{
    var result = [];
    var paket = {"text": data.replaceAll(' >', '>').replaceAll('= ', '=').replaceAll(' =', '=').replaceAll("\r", "").replaceAll("\n", ""), "idx":0};

    skipText(paket, skipUntilTag);

    for(;paket.idx >= 0;)
    {
        var validEntry = true;
        var gotValue = false;
        var entry = {};
        for(var i = 0; i < componentList.length; i++)
        {
            var value = getElementValue(paket, componentList[i].begTag, componentList[i].endTag);
            if(componentList[i].componentName != "")
            {
                entry[componentList[i].componentName] = value;
                validEntry = validEntry && ((!componentList[i].mandatory) || (value !== ""));
                gotValue = gotValue || (value !== "");
            }
        }
        if(validEntry && gotValue) result.push(entry);
    }
    return result;
};

exports.retrieve = function(isHttps, host, path, skipUntilTag, componentList)
{
    var http = require(isHttps ? 'https' : 'http');

    var promise = new Promise(function(resolve){
        var options = {
            host: host,
            path: path,
            rejectUnauthorized: false
        };
        var result = [];
        var request = http.request(options, function (res) {
                var data = '';
                res.on('data', function (chunk) {
                    data += chunk;
                });
                res.on('end', function () {
                    result = getList(data, skipUntilTag, componentList);
                    resolve(result);
            });
        });
        request.on('error', function (e) {
            console.log(e.message);
        });

        request.end();

        return result;


    });
    return promise;

};
