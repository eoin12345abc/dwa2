<table id="resultsTable" summary="Definitions">
	<thead>
		<tr>
			<?php 
					echo "$text  <div id='closeBox'>close(X)</div>";  
			?>
			
		</tr>
		<tr>
			<th scope="col">Kanji</th>
			<th scope="col">Kana</th>
			<th scope="col">English</th>
		</tr>
		<colgroup>
    <col span="3" style="width:150px;">
  </colgroup>
	</thead>
	
	<tbody>
	
		<?php
			foreach($definition as $value) { 
				if($value['kanji']==""){$value['kanji']="--";}
				if($value['kana']==""){$value['kana']="--";}
				echo(
				"<tr>".
					"<td>".$value['kanji']."</td>".
					"<td>".$value['kana']."</td>".
					"<td>".$value['english']."</td>".
				"</tr>");
			}
		?>
		
	</tbody>
</table>