<?php

$link = mysqli_connect ("localhost","username","password","dataBaseName");

$sql = ("SELECT * FROM results_skzi_table;");
$result = mysqli_query($link,$sql);

echo "<table class='sort' align='center'>
<thead>
<tr>
<th data-order='1' class='sorted' width='45px' title='Нажмите для изменения сортировки'>№</th>
<th width='193.717px' title='Нажмите для изменения сортировки'>ФИО</th>
<th width='241.083px' title='Нажмите для изменения сортировки'>Организация</th>
<th width='80px' title='Нажмите для изменения сортировки'>Время</th>
<th width='120px' title='Нажмите для изменения сортировки'>Дата сдачи</th>
<th width='70px' title='Нажмите для изменения сортировки'>Балы</th>
</tr>
</thead>
<tbody>";

while ($column = mysqli_fetch_array($result)){
	echo "<tr>";
	echo "<td>{$column['test_id']}</td>";
	echo "<td>{$column['fio']}</td>";
	echo "<td>{$column['organization']}</td>";
	echo "<td>{$column['time_resolve']}</td>";
	echo "<td>{$column['date_test']}</td>";
	echo "<td>{$column['result']}</td>";
	echo "</tr>";
};

echo "</tbody></table>";
echo "<div>{$column}</div>";

?>