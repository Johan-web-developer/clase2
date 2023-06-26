<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
header('Content-Type:application/json');

require_once("conectar.php");
require_once("models.php");

$alquilar = new Alquilartemis();
$body= json_decode(file_get_contents("php://input"),true);

switch($_GET["op"]){
    case "getAll":
        $datos = $alquilar->get_clientes();
        echo json_encode($datos);
        break;
    case "insert":
        $data=$alquilar->insert_clientes($body('id_constructora'),$body('nombre_constructora'),$body('nit_constructora'),$body('nombre_representante'),$body('email_contacto'),$body('telefono_contacto'));
        echo json_encode("los datos se ingresaron correctamente");
        break;    
}

?>