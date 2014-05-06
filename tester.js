(function(o){
 o.now=o.now||o.webkitNow||o.msNow||o.oNow||o.mozNow||function(){return new Date().getTime()};
})(window.performance||{});
//
(function(o,p){
 o[p]=o[p]||function(i){var s=this;return i>1?Array(parseInt(i)).join(s):s};
})(String.prototype,'repeat');

//‹
(function(o,ss,cr,g,h){
 if(!o.init){
	var $,S='\u0020',C='%c',z='',F=function(n,j,f,c,b,x){var i='inherit';return['font:',n+'00',S,j,'em/normal',S,f,';color:',c?c:i,';background:',b?b:i,x||z].join(z)};
	Object.defineProperty(o.timeStamp,'now',{
		get:function(){
			var p=window.performance,t=new Date(),f=function(n,k){k=k||1;n=t['get'+n]();return('0'.repeat(k)+n).slice(-k-1)},j=p.T1||0,l=p.T2||0,i=p.now(),T=[f('Hours'),f('Minutes'),f('Seconds'),f('Milliseconds',2)];
			p.T1=i;t=T.join('');p.T2=t;p='|\u0394';
			return T.join(':')+p+(l?t-l:0)+'\t\u2192'+i+p+(j?i-j:0)
		}
	 });
	 o.style={
		text:{
		 code:F(5,1,ss,'#444','#FCFFB2'),
		 title:F(7,1.1,ss,'#000'),
		 note:F(5,1,cr,'#555'),
		 data:F(5,1,cr,'#576394',';margin-left:.8em'),
		 id:F(6,.8,'verdana','#181A4C')
		}
	 };
	 F=Object.create;
	 o.test={
		start:function(x,m){o.time(x);var s=o.style.text,n=s.note;o.group(C+'test-id:'+C+x,n,s.title);o.group(C+'Cases:',n);m=m||o.test.cases;o.dir(m);o.groupEnd();return m},
		end:function(x){o.groupEnd();o.timeEnd(x)},
		run:function(id,fm,cm){
		 var s=o.style.text,n=s.note,p='length';
		 cm=o.test.start(id,cm);
		 for(var fn,i=0,fl=fm[p],out=[];i<fl;i++){
			fn=fm[i];
			o.group(C+o.timeStamp.now,s.data);
			o.count('test');
			o.group(C+'\u0192:'+C+(fn.name||'anonymous'),s,s.id);
			o.log(C+fn,s.code);
			o.groupEnd();
			for(var cs in cm){
				var cg=cm[cs];
				for(var r,L,e,j=0,cl=cg[p];j<cl;j++){
				 o.timeStamp(cs+j);
				 e=cg[j];
				 r=fn(e);
				 L={value:e&&e.toString?String(e):e,len:(e&&e[p]?e[p]:''),result:r,veri:'',falsi:'',veriBooleani:'',falsiBooleani:''}
				 L[(r?'veri':'falsi')+(r===true||r===false?'Booleani':'')]='\u2573';
				 out[cs+S+j]=L
				};
			};
			o.groupCollapsed(C+'Table:'+(i+1),s);
			o.table(out);
			o.groupEnd();
			o.groupEnd();
		 };
		o.test.end(id);
		},
		cases:F(null)
	 };
	 $=o.test.cases;
	 $.Nothing=[void(0),null];
	 z={a:1,b:2,c:3};
	 $.Object=[g,z,{a:1,b:z,c:3},F(null),F(null,g),F(null,{color:{writable:true,value:'red'}}),F(g),F(g,{color:{writable:false,value:'blue'}}),F(h),F(h,{color:{value:'green'}})];
	 z=[1,2,3];
	 $.Array=[new Array(),new Array('obj1D'),h,z,[[z]],[1,[21,z,23],3],{'a':1,'b':2,'c':3},F(h,{person:{value:'FabioVergani'}})];
	 F='\t',ss='\u200D',cr='abc';
	 $.StringBlank=[new String(),S,S+S,S+S+S,S+F,F,'\n\r','\u2009',ss,new String('txt'),'0','1','a','ab',cr,cr+ss+'d'];
	 $.Boolean=[new Boolean(),false,true,0,1];
	 $.Function=[function pippo(){var a=1},function(){}];
	 $.Native=[String,Array,Boolean,Object,Function,Math];
	//ֵ
	o.init=true;
 };
})(console,'sans-serif','courier',{},[]);


//‹
console.test.run('test-id',[
 function(o){return 1},
 function(o){return false},
 function(o){return 0}
])



//‹›
//console.log();
//console.log("‹end›");
//console.log();
