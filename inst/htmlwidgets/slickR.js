HTMLWidgets.widget({

  name: 'slickR',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {
            function buildDiv(images,opts,cl,width){
              var len = images.length,i = 0;
							var mainDiv = document.createElement("div");
              mainDiv.className = cl;
              if(opts){
                mainDiv.setAttribute('data-slick',opts);  
              }
              
              document.body.appendChild(mainDiv);
               
               
              for(i=0; i < len; i++ ){
                var img = document.createElement("img");
                img.src = images[i];
                img.style.width=width;
                var divEl = document.createElement("div");
                divEl.appendChild(img);
                mainDiv.appendChild(divEl);
              }
              return mainDiv;
}

        if(x[0].images){
                for(j=0;j<x.length;j++){
                  var subx=x[j];
                  buildDiv(subx.images,subx.slickOpts,subx.divName,100/x.length+'%');
                  $("."+subx.divName).slick();
                }
            }
          },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});