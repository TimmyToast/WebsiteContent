  $.getJSON("https://travels.toa.st/siteForms/commentsJSON/",function(data){
   var topStories=[];
   //console.log(data)
   $.each(data,function(key,val){
   if(val[3]==""){
   //console.log(val.hubComment)
   topStories.push("<liid='"+val[0]+"'>"+val[2]+"</li>");
   }
  });
   
   $("<ul/>",{ "class":"my-new-list",
   html:topStories.join("")
   }).appendTo(".comments");
  
   var storyComments=[];

   $.each(data,function(key,val){
   if(val[3]!=""){
   console.log("inside")
   $("#"+val[3]).append("<br>-"+val[2])
   }
   });

 
   });