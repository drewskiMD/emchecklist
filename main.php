a<?php

session_start();

if (!isset($_SESSION['uid']))

{header ("Location: ./ua.html");}

else {

	$con = mysqli_connect('localhost','root','', 'checklist');

	$uid = $_SESSION['uid'];

	$sid = $_SESSION['sid'];

	$sql = "select count(*) from patients where sid = $sid";

	$result = mysqli_query($con, $sql);

	$row = mysqli_fetch_array($result);

	$tpc = $row[0];

	$sql = "select count(*) from patients where sid = $sid and seen=0 and note=0 and dispo is null";

	$result = mysqli_query($con, $sql);

	$row = mysqli_fetch_array($result);

	$unsc = $row[0];

	$sql = "select count(*) from patients where sid = $sid and seen=1 and note=0 and dispo is null";

	$result = mysqli_query($con, $sql);

	$row = mysqli_fetch_array($result);

	$undc = $row[0];

	$sql = "select count(*) from patients where sid = $sid and seen=1 and note=1 and dispo is not null";

	$result = mysqli_query($con, $sql);

	$row = mysqli_fetch_array($result);

	$comc = $row[0];

	$sql = "select count(*) from patients where sid = $sid and seen=1 and note=0 and dispo is not null";

	$result = mysqli_query($con, $sql);

	$row = mysqli_fetch_array($result);

	$disc = $row[0];
	$sql = "select st from shifts where sid = $sid";
	$result = mysqli_query($con, $sql);
	$row = mysqli_fetch_array($result);
	$ts = strtotime($row['0']);$t = date("M d, Y", $ts);

	

	if (is_null($sid))

	{

		$sql = "insert into shifts (uid) values ($uid)";

		mysqli_query($con, $sql);

		$sql = "select LAST_INSERT_ID()";

		$result = mysqli_query($con, $sql);

		$row = mysqli_fetch_array($result);

		$sid = $row[0];

		$sql = "update users set shift = $sid where uid = $uid";

		mysqli_query($con, $sql); $_SESSION['sid'] = $sid;

		

	}

}

?>



<!doctype html>

<html>

<head>

<meta charset="utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1">

<title>EM Checklist</title>

<?php include("./i.php"); ?>

  <script type="text/javascript">	   

	  function newpt(fn,ln,rm,cc)
	  { 
		   $("#fn").val("");
		   $("#ln").val("");
		   $("#rm").val("");
		   $("#cc").val("");
		$.post("./addPt.php",{fn:fn,ln:ln,rm:rm,cc:cc}, 

			   function(data,status)

			   { 

					if (status == "success")

						{

							$("#pts").html(data);

						}

					else

						{

							$("#pts").html("<strong>Something went wrong...</strong>");

						}

				}

			  );	  

	  }

	  function seen(v,c)

	  {

			$.post("./seen.php",{v:v,c:c}, 

			   function(data,status)

			   { 

					if (status == "success")

						{

							$("#"+v).removeClass('table-danger');

							$("#"+v).removeClass('table-warning');

							$("#"+v).addClass(data);

							

						}

					else

						{

							$("#pts").html("<strong>Something went wrong...</strong>");

						}

				}

			  );

	  }

	  function cDispo(v) //vid dispo

	  {

		  $("#viddispo").val(v);

	  }

	  function dispo(v) //vid dispo

	  {

		  $.post("./dispo.php",{v:v, d:$('input:radio[name=dispor]:checked').val()}, 

			   function(data,status)

			   { 

			  		

					if (status == "success")

						{

							$("#"+v).removeClass('table-danger');

							$("#"+v).removeClass('table-warning');

							$("#"+v).addClass(data);

						}

					else

						{

							$("#pts").html("<strong>Something went wrong...</strong>");

						}

				}

			  );

	  }

	  function dispoP()

	  {

		  if ($('input:radio[name=dispor]:checked').val()=="icu")

			  {

				  $("#dispoS").html("Don't forget to bill critical care!");

			  }

		  else

			  {

				  $("#dispoS").html("");

			  }

	  }

	  function note(v,c)

	  {

			$.post("./note.php",{v:v,c:c}, 

			   function(data,status)

			   { 

					if (status == "success")

						{

							$("#"+v).removeClass('table-danger');

							$("#"+v).removeClass('table-warning');

							$("#"+v).removeClass('table-success');

							$("#"+v).addClass(data);

							

						}

					else

						{

							$("#pts").html("<strong>Something went wrong...</strong>");

						}

				}

			  );

	  }

	  function newShift()

	  {

		  $.post("./newShift.php",{u:""}, 

			   function(data,status)

			   { 

					if (status == "success")

						{

							$("#pts").html(data);

						}

					else

						{

							$("#pts").html("<strong>Something went wrong...</strong>");

						}

				}

			  );	  

	  }

	  

	  //display functions

	  function unseen()

	  {

		  $(".table-warning").hide();

		  $(".table-primary").hide();

		  $(".table-success").hide();

		  $(".table-danger").show();

		  

	  }

	  function undispod()

	  {

		  $(".table-danger").hide();

		  $(".table-primary").hide();

		  $(".table-success").hide();

		  $(".table-warning").show();

	  }

	  function dispod()

	  {

		  $(".table-danger").hide();

		  $(".table-primary").hide();

		  $(".table-warning").hide();

		  $(".table-success").show();

	  }

	  function complete()

	  {

		  $(".table-danger").hide();

		  $(".table-warning").hide();

		  $(".table-success").hide();

		  $(".table-primary").show();

	  }

	  function showall()

	  {

		  $(".table-danger").show();

		  $(".table-warning").show();

		  $(".table-success").show();

		  $(".table-primary").show();

	  }

	  

	  //differential functions

	  function genddx(v,cc)

	  {

		   $("#vidddx").val(v);

		   $("#ccddx").val(cc);

		   $("#ccddxt").html(cc +" differential");

		   $("#textddx").html("<input class=\"form-control ddx\" type=\"text\" />");

		  $.post("./getddx.php",{cc:cc}, 
			   function(data,status)
			   { 
				if (status == "success")
				{
					$("#sddx").html(data);
						}

					else

						{

							$("#pts").html("<strong>Something went wrong...</strong>");

						}

				}

			  );

		  

	  }

	  function newftddx()

	  {

		  $("#textddx").append("<input checked class=\"form-control ddx\" type=\"text\" />");

	  }

	  function ddx(v,cc)

	  {

		  ddxs = $(".ddx").map(function () {

        	if ($(this).val() != "" || $(this).val() != " ") {return $(this).val();}

    		}).get().join(';');

		  $.post("./ddx.php",{v:v, cc:cc, ddx:ddxs}, 

			   function(data,status)

			   { 

					if (status == "success")

						{

							$(v+"ddx").html(data);

						}

					else

						{

							$("#pts").html("<strong>Something went wrong...</strong>");

						}

				}

			  );

	  }

	  //diagnosis fucntions

	  function dx(v,cc)

	  {

		  if ( $('input:radio[name=dxr]:checked').val() == undefined && ( $(".dx").val() == "" || $(".dx").val() == " ") ) { alert("No diagnosis entered"); }

		  else if ($('input:radio[name=dxr]:checked').val() != undefined) { diag = $('input:radio[name=dxr]:checked').val(); }

		  else { diag = $(".dx").val(); }

		  $.post("./dx.php",{v:v, cc:cc, dx:diag}, 

			   function(data,status)

			   { 

					if (status == "success")
						{

							$(v+"dx").html(data);

						}

					else

						{

							$("#pts").html("<strong>Something went wrong...</strong>");

						}

				}

			  );

	  }

	  function gendx(v,cc)

	  {

		   $("#viddx").val(v);

		   $("#ccdx").val(cc);

		   $("#ccdxt").html(cc +" diagnosis");

		   $("#textdx").html("<input class=\"form-control dx\" type=\"text\" />");

		  $.post("./getdx.php",{cc:cc}, 

			   function(data,status)

			   { 

					if (status == "success")

						{

							$("#sdx").html(data);

						}

					else

						{

							$("#pts").html("<strong>Something went wrong...</strong>");

						}

				}

			  );

		  

	  }

	  function dxP(d)
	  {
		  $.post("./icd.php",{dx:d}, 
			   function(data,status)
			   { 
					if (status == "success")
						{
							$("#icd").html(data);
						}
					else
						{

							$("#pts").html("<strong>Something went wrong...</strong>");
						}

				}

			  );
	  }

	  function tx(v,c)

	  {

		  $.post("./tx.php",{v:v,c:c}, 

			   function(data,status)

			   { 

					if (status == "success")

						{

							

						}

					else

						{

							$("#pts").html("<strong>Something went wrong...</strong>");

						}

				}

			  );

	  }

	  

    </script>

</head>



<body>

	<div class="container-fluid">

		<nav class="navbar navbar-dark navbar-expand-sm justify-content-end bg-dark">

			<ul class="navbar-nav">

				<li class="nav-item">

					<a class="nav-link" href="logout.php"> Logout</a>

				</li>

			</ul>

		</nav>

	<div class="row">

		<div class="col">

		<button type="button" class="btn btn-dark" onClick="newShift()"><span class="badge badge-light"><?php echo $t; ?></span> + new shift </button>

		</div>	

	</div>

	<div class="row">

		<div class="col">

			

		</div>

		<div class="col">

			<button type="button" class="btn btn-light" onClick="showall()"><span class="badge badge-light"><?php echo $tpc; ?></span> Show all</button>

			<button type="button" class="btn btn-danger" onClick="unseen()"><span class="badge badge-light"><?php echo $unsc; ?></span> Not Seen</button>

			<button type="button" class="btn btn-warning" onClick="undispod()"><span class="badge badge-light"><?php echo $undc; ?></span> Not Dispo'd</button>

			<button type="button" class="btn btn-success" onClick="dispod()"><span class="badge badge-light"><?php echo $disc; ?></span> Dispo'd</button>

			<button type="button" class="btn btn-primary" onClick="complete()"><span class="badge badge-light"><?php echo $comc; ?></span> Complete</button>

		</div>

		<div class="col">

			

		</div>

	</div>

	<div class="row">

		<div class="col">

				<table class="table" id="pts">

				<?php include("./loadpt.php") ?>

				</table>

		</div>

	</div>

	<div class="row">

		<div class="col">

			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#npt">

				+ patient 

			</button>

		</div>

	</div>

	<div class="modal" id="npt">

		<div class="modal-dialog">

			<div class="modal-content">

				<div class="modal-header">

					<h4 class="modal-title">Enter New Patient</h4>

					<button type="button" class="close" data-dismiss="modal">&times;</button>

				</div>

				<div class="modal-body">

					<form id="nptf" class="form-group">

						<label for="fn">First:</label><input class="form-control" id="fn" type="text" />

						<label for="ln">Last:</label><input class="form-control" id="ln" type="text" />

						<label for="rm">Room:</label><input class="form-control" id="rm" type="text" />

						<label for="cc">CC:</label><input class="form-control" id="cc" type="text" />

					</form>

				</div>

				<div class="modal-body">

					suggestions

				</div>

				<div class="modal-footer">

					<input type="button" class="btn btn-primary" value="+ new pt" data-dismiss="modal" onClick="newpt(fn.value,ln.value,rm.value,cc.value)" />

				</div>

				</div>

			</div>

		</div>

		<div class="modal" id="dx">

		<div class="modal-dialog">

			<div class="modal-content">

				<div class="modal-header">

					<h4 class="modal-title" id="ccdxt"></h4>

					<button type="button" class="close" data-dismiss="modal">&times;</button>

				</div>

				<div class="modal-body">

				<div class="row">

					<div class="col-5">

							<input type="hidden" id="viddx" /><input type="hidden" id="ccdx" />

							<div id="textdx"><input checked class="form-control dx" type="text" /></div>

						</div>

						<div class="col-7">

							Suggestions Based on CC: <br />

							<div id="sdx">

								<form id="dxf" class="form-group">

									

								</form>

							</div>

						</div>

					</div>

				</div>

				<div class="modal-body" id="icd">

					

				</div>

				<div class="modal-footer">

					<input type="button" class="btn btn-primary" value="select" data-dismiss="modal" onClick="dx(viddx.value,ccdx.value)" />

				</div>

				</div>

			</div>

		</div>

		<div class="modal" id="dispo">

		<div class="modal-dialog">

			<div class="modal-content">

				<div class="modal-header">

					<h4 class="modal-title">Enter A Disposition:</h4>

					<button type="button" class="close" data-dismiss="modal">&times;</button>

				</div>

				<div class="modal-body">

					<form id="dispof" class="form-group">

						<input type="hidden" id="viddispo" />

						<label for="h">Home</label><input class="form-control" id="h" value="home" name="dispor" onChange="dispoP()" type="radio" />

						<label for="o">ED Obs</label><input class="form-control" id="o" value="obs" name="dispor" onChange="dispoP()" type="radio" />

						<label for="a">Admit</label><input class="form-control" id="a" value="admit" name="dispor" onChange="dispoP()" type="radio" />

						<label for="i">ICU</label><input class="form-control" id="i" value="icu" name="dispor" onChange="dispoP()" type="radio" />
						
						<label for="i">LWBS</label><input class="form-control" id="l" value="lwbs" name="dispor" onChange="dispoP()" type="radio" />
						
						<label for="i">AMA</label><input class="form-control" id="a" value="ama" name="dispor" onChange="dispoP()" type="radio" />

						<label for="t">Transfer</label><input class="form-control" id="t" value="transfer" name="dispor" onChange="dispoP()" type="radio" />

					</form>

				</div>

				<div id="dispoS" class="modal-body">

					

				</div>

				<div class="modal-footer">

					<input type="button" class="btn btn-primary" value="select" data-dismiss="modal" onClick="dispo(viddispo.value)" />

				</div>

				</div>

			</div>

		</div>

		<div class="modal" id="ddx">

		<div class="modal-dialog">

			<div class="modal-content">

				<div class="modal-header">

					<h4 class="modal-title" id="ccddxt"></h4>

					<button type="button" class="close" data-dismiss="modal">&times;</button>

				</div>

				<div class="modal-body">

					<div class="row">

						<div class="col-5">

							<input type="hidden" id="vidddx" /><input type="hidden" id="ccddx" />

							<div id="textddx"><input checked class="form-control ddx" type="text" /></div>

							<button class="btn-primary" onClick="newftddx()" >+</button>

						</div>

						<div class="col-7">

							Suggestions Based on CC: <br />

							<div id="sddx"></div>

						</div>

					<form id="ddxf" class="form-group">

						

					</form>

				</div>

				<div class="modal-body">

					

				</div>

				<div class="modal-footer">

					<input type="button" class="btn btn-primary" value="select" data-dismiss="modal" onClick="ddx(vidddx.value,ccddx.value)" />

				</div>

				</div>

			</div>

		</div>

	</div>

	

	

	

	

	

</body>

</html>