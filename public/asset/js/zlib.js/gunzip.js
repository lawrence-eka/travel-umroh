goog.provide("Zlib.Gunzip"),goog.require("USE_TYPEDARRAY"),goog.require("Zlib.CRC32"),goog.require("Zlib.Gzip"),goog.require("Zlib.RawInflate"),goog.require("Zlib.GunzipMember"),goog.scope(function(){Zlib.Gunzip=function(input){this.input=input,this.ip=0,this.member=[],this.decompressed=!1},Zlib.Gunzip.prototype.getMembers=function(){return this.decompressed||this.decompress(),this.member.slice()},Zlib.Gunzip.prototype.decompress=function(){for(var il=this.input.length;this.ip<il;)this.decodeMember();return this.decompressed=!0,this.concatMember()},Zlib.Gunzip.prototype.decodeMember=function(){var isize,rawinflate,inflated,inflen,c,ci,str,mtime,crc32,member=new Zlib.GunzipMember,input=this.input,ip=this.ip;if(member.id1=input[ip++],member.id2=input[ip++],31!==member.id1||139!==member.id2)throw new Error("invalid file signature:"+member.id1+","+member.id2);switch(member.cm=input[ip++],member.cm){case 8:break;default:throw new Error("unknown compression method: "+member.cm)}if(member.flg=input[ip++],mtime=input[ip++]|input[ip++]<<8|input[ip++]<<16|input[ip++]<<24,member.mtime=new Date(1e3*mtime),member.xfl=input[ip++],member.os=input[ip++],(member.flg&Zlib.Gzip.FlagsMask.FEXTRA)>0&&(member.xlen=input[ip++]|input[ip++]<<8,ip=this.decodeSubField(ip,member.xlen)),(member.flg&Zlib.Gzip.FlagsMask.FNAME)>0){for(str=[],ci=0;(c=input[ip++])>0;)str[ci++]=String.fromCharCode(c);member.name=str.join("")}if((member.flg&Zlib.Gzip.FlagsMask.FCOMMENT)>0){for(str=[],ci=0;(c=input[ip++])>0;)str[ci++]=String.fromCharCode(c);member.comment=str.join("")}if((member.flg&Zlib.Gzip.FlagsMask.FHCRC)>0&&(member.crc16=65535&Zlib.CRC32.calc(input,0,ip),member.crc16!==(input[ip++]|input[ip++]<<8)))throw new Error("invalid header crc16");if(isize=input[input.length-4]|input[input.length-3]<<8|input[input.length-2]<<16|input[input.length-1]<<24,input.length-ip-4-4<512*isize&&(inflen=isize),rawinflate=new Zlib.RawInflate(input,{index:ip,bufferSize:inflen}),member.data=inflated=rawinflate.decompress(),ip=rawinflate.ip,member.crc32=crc32=(input[ip++]|input[ip++]<<8|input[ip++]<<16|input[ip++]<<24)>>>0,Zlib.CRC32.calc(inflated)!==crc32)throw new Error("invalid CRC-32 checksum: 0x"+Zlib.CRC32.calc(inflated).toString(16)+" / 0x"+crc32.toString(16));if(member.isize=isize=(input[ip++]|input[ip++]<<8|input[ip++]<<16|input[ip++]<<24)>>>0,(4294967295&inflated.length)!==isize)throw new Error("invalid input size: "+(4294967295&inflated.length)+" / "+isize);this.member.push(member),this.ip=ip},Zlib.Gunzip.prototype.decodeSubField=function(ip,length){return ip+length},Zlib.Gunzip.prototype.concatMember=function(){var i,il,buffer,member=this.member,p=0,size=0;for(i=0,il=member.length;i<il;++i)size+=member[i].data.length;if(USE_TYPEDARRAY)for(buffer=new Uint8Array(size),i=0;i<il;++i)buffer.set(member[i].data,p),p+=member[i].data.length;else{for(buffer=[],i=0;i<il;++i)buffer[i]=member[i].data;buffer=Array.prototype.concat.apply([],buffer)}return buffer}});