var app =angular.module("MyApp",[]);
app.controller("MyController", function($scope){
	$scope.nombre = "Fer";
	$scope.newComen = {};
	$scope.comentarios = [
			{
				comentario: "Good Job ",
				username: "Elon M."
			},
			{
				comentario: "Wow, this is awesome",
				username: "Bill G."
			}
	];

	$scope.addComentario = function(){
		$scope.comentarios.push($scope.newComen);
		$scope.newComen = {};
	}
});
