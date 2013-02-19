



<?php

 $host = "localhost";
 
 $mongo = new Mongo($host);
  

  
$db = $mongo->deepak;
$collection = new MongoCollection($db, 'deepak');
 

$cursor = $collection->find();


 if ($_POST){
	$sName = $_POST['title'];
	$sArtist = $_POST['artist'];
	$sAlbum = $_POST['album'];
	$sID = str_replace(" ", "_", $sName); //For this example, use the title as ID (converting spaces to '_')

	$sSend = array('title' => $sName, 'artist' => $sArtist, 'album' => $sAlbum, );
	
	//print_r($sSend );exit;
	$collection->insert($sSend);
 }
      
  
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title> :: MongoDB with PHP ::</title>
    </head>
    <body>
    <div width="100%" align="center">
    <h1>MongoDB Music List</h1>    
    <p>Song list:</p>
    
    <table cellpadding=4 cellspacing=0 border="1" bordercolor="black">
        <tr>
            <td>Title</td><td>Artist</td><td>Album</td><td>Action</td>
        </tr>
        <?php 
            //Complete the table with the database contents
            foreach ($cursor as $resp) {
                echo "<tr><td>" . $resp["title"] . "</td><td>" . $resp["artist"] . "</td><td>" . $resp["album"] . "</td><td><a href='test.php?" . $resp["_id"] . "'>Del</a></td></tr>";
            }
            //Drop the database table. Here for testing purposes.
            //$response = $db->drop();
  
        ?> 
    </table>
    <p><hr width=70%></p>
    <p>Enter new song:</p>
        <form name="add" method="post" action="<?php echo $_SERVER['PHP_SELF']; //$PHP_SELF;?>">
        <table cellpadding=4 cellspacing=0 border="1" bordercolor=black>
            <tr><td>Enter a song title: </td><td><input type="text" name="title" /></td></tr>
            <tr><td>Enter the artist: </td><td><input type="text" name="artist" /></td></tr>
            <tr><td>Enter the album: </td><td><input type="text" name="album" /></td></tr>
            <tr><td> ;</td><td><input type="submit" value="Add Song" /></td></tr>
        </table>
        </form>
    </div>
    </body>
</html>
