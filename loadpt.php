<?php 

	$sql = "select * from patients where sid = $sid";

	$result = mysqli_query($con, $sql);

	echo "<tr><th>Pt</th><th>Rm</th><th>Tm</th><th>CC</th><th class=\"align-content-center\">Seen?</th><th>ddx?</th><th>tx?</th><th>dx?</th><th>dispo?</th><th>note?</th></tr>";

	while($row = mysqli_fetch_array($result))

	{
		
	/*$n = "...";*/$n = $row['name']; $r = $row['rm']; $ts = strtotime($row['ts']);$t = date("H:i:s", $ts); $cc = $row['cc']; $vid = $row['vid']; $nc = ""; $tx = "";

		//logic for setting the colors of the rows

		if (is_null($row['dispo'])) {$dispo = "?";} else {$dispo = $row['dispo'];}

		if (is_null($row['ddx'])) {$ddx = "?";} else {$ddx = $row['ddx'];}

		if (is_null($row['dx'])) {$dx = "?";} else {$dx = $row['dx'];}

		if ($row['tx']) {$tx = "checked";}

		if ($row['seen'] == 0) { $c = "table-danger"; $sc = ""; }

		else if ($row['seen'] == 1) { $c = "table-warning"; $sc = "checked"; }

		if (!is_null($row['dispo']) && $row['seen'] == 1) { $c = "table-success"; }

		if (!is_null($row['dispo']) && $row['seen'] == 1 && $row['note'] == 1) { $c = "table-primary"; $nc="checked"; }

		echo "<tr id=\"$vid\" class=\"$c\"><td>$n</td><td>$r</td><td>$t</td><td>$cc</td><td><input $sc type=\"checkbox\" class=\"form-control form-control-sm\" onChange=\"seen($vid,this.checked)\" /></td><td><button id=\"ddx$vid\" type=\"button\" class=\"btn\" data-toggle=\"modal\" data-target=\"#ddx\" onClick=\"genddx($vid,'$cc')\">$ddx</button></td><td><input $tx type=\"checkbox\" class=\"form-control form-control-sm\" onChange=\"tx($vid,this.checked)\" /></td><td><button id=\"dx$vid\" type=\"button\" class=\"btn\" data-toggle=\"modal\" data-target=\"#dx\" onClick=\"gendx($vid,'$cc')\">$dx</button></td><td><button onClick=\"cDispo($vid)\" type=\"button\" class=\"btn\" data-toggle=\"modal\" data-target=\"#dispo\">$dispo</button></td><td><input $nc type=\"checkbox\" class=\"form-control form-control-sm\" onChange=\"note($vid,this.checked)\" /></td></tr>";

	}

?>





