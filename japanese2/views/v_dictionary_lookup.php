<table id="resultsTable" summary="Definitions">
	<thead>
		<tr>
			<div class="heavy"> 
				<?php 
					echo "$text"		
				?>
			</div><colgroup>
		</tr>
    <col span="3" style="width:150px;">
	<tr>
			<div id='closeBox'>close(閉)</div>
			<div class='move' id='next'>Next 10</div>
			<div class='move'>Previous 10</div>
			<div class='footer'></div>
			</tr>
				
	
		<tr>
			<th scope="col">Kanji</th>
			<th scope="col">Kana</th>
			<th scope="col">English</th>
		</tr>
		
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