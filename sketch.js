function setup() {
	canvas = createCanvas(800,400);
	video = createCapture(VIDEO);
	video.hide();
	//video.size(800,400);
    disVideo = video;
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

}

function modelLoaded() {
	console.log('Model Loaded!');
  }

  function gotPoses(results)
  {
	background("white");
	image(disVideo,0,0);
	if(results.length > 0)
	{
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	  fill("#0000");
	  strokeWeight(5);
	  stroke("blue");
	  rect(noseX-10, noseY-5, 25, 25);
      console.log(noseY);
	}
  }
