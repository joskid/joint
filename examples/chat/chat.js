var pass=require("pass"),x;for(x in pass)global[x]=pass[x];var server={arrive:function(b){this.conn.onMsg=b},broadcast:function(b){for(var c=conns(),a=0,d=c.length;a<d;a++)console.log(c[a]),c[a].onMsg(b)}};module.exports=server;
