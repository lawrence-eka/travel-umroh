/**
 * Created by gal9569 on 5/22/2017.
 */
$export = {
    titleCase: function(str) {
        var retval = "";
        var s = str.split(" ");
        for(var i = 0; i < s.lenght; i++) {
            retval += s[i][0].toUpperCase() + s[i].substr(1).toLowerCase() + " ";
        }
        return retval.trim();
    }
}