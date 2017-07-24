function ImageProcessor() {
	this.loadImage = function(imgData,filename, ratio, quality) {
		//debugger;
		imgData.img = new Image();
		imgData.img.src = window.URL.createObjectURL(imgData.filename);
		return (new Promise(function(resolve, reject){
			//debugger;
			imgData.img.onload = function () {
				//debugger;
				resolve(imgData);
			};
			imgData.img.onerror=function(err) {
				reject(imgData.filename.name + ' is not an image');
			};
		}));
	}
	
	this.resize = function(imgData) {
		//debugger;
		return this.loadImage(imgData)
			.then(function(imgData){
				//debugger;
				var resizer = pica({
					features: ['js', 'wasm', 'ww'],
				});
				imgData.canvas = document.createElement('canvas');
				//debugger;
				imgData.canvas.width  = imgData.img.width * imgData.ratio;
				imgData.canvas.height = imgData.img.height * imgData.ratio;

				return resizer.resize(imgData.img, imgData.canvas, {
					quality:3,
					alpha: true,
					unsharpAmount: 80,
					unsharpRadius: 0.6,
					unsharpThreshold: 2,
					//transferable: true
				}).then(function(canvas){
					//debugger;
					return new Promise(function(resolve){
						//debugger;
						imgData.canvas = canvas;
						resolve (imgData);
					});
				});
			})
			.catch(function(err) {
				return new Promise(function (resolve, reject) {
					reject(err)
				});
			});
	}
	
	this.toBlob = function(imgData) {
		//debugger;
		return this.resize(imgData)
			.then(function(imgData){
				//debugger;
				return new Promise(function(resolve){
					imgData.canvas.toBlob(function(blob) {
						//debugger;
						imgData.blob = blob;
						resolve(imgData);
					},"image/jpeg", imgData.quality);
				});
			})
			.catch(function(err){
				return new Promise(function(resolve,reject){reject(err);})
		});
	}
	
	this.toJpegBlob = function(filename, ratio, quality) {
		debugger;
		var imgData = new Object({filename:filename, ratio:ratio || 1, quality:quality || 0.3});
		return this.toBlob(imgData,filename, ratio, quality);
	}
}