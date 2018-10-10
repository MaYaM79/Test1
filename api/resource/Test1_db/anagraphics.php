<?php
	require_once './db/dbTest1_dbManager.php';
	
/*
 * SCHEMA DB anagraphics
 * 
	{
		name: {
			type: 'String'
		},
		surname: {
			type: 'String'
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/anagraphics',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'name'	=> isset($body->name)?$body->name:'',
		'surname'	=> isset($body->surname)?$body->surname:'',
			);

	$obj = makeQuery("INSERT INTO anagraphics (_id, name, surname )  VALUES ( null, :name, :surname   )", $params, false);

	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/anagraphics/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM anagraphics WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/anagraphics/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM anagraphics WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/anagraphics',	function () use ($app){
	makeQuery("SELECT * FROM anagraphics");
});


//CRUD - EDIT

$app->post('/anagraphics/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'name'	    => isset($body->name)?$body->name:'',
		'surname'	    => isset($body->surname)?$body->surname:''	);

	$obj = makeQuery("UPDATE anagraphics SET  name = :name,  surname = :surname   WHERE _id = :id LIMIT 1", $params, false);

	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>