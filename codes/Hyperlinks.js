exports.removeHyperlink = function(data)
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
