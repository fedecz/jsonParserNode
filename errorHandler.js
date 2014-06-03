function handleError(err, req, res, next){
	console.log("Error: %j",err);
  if(err.status == 400){
  	res.json(400,{error:"Could not decode request: "+err.message})
  }else{
  	res.send(err.status, 'Something broke!');
  }
  console.error(err);
}

exports.handleError=handleError
