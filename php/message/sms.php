<?php
include('way2sms-api.php');
header('Content-type: text/html; charset=UTF-8') ;
//if(isset($_POST['absentees']))
//{
  //$RFQ = $_POST['RFQ'];
  //$NumberRFQ = count($RFQ);
  //$company;

  //if ($NumberRFQ>0)
  //{
    //for ($i=0; $i<$NumberRFQ; $i++)
    //{
	  //if($mysqli->query("UPDATE registration_table set reference_id='".$_POST['refer_id']."' where mobile_number='".$RFQ[$i]."'"))
	  //{
       // if($mysqli->query("UPDATE registration_table set emp_current_status='INTERVIEW_CALL' where mobile_number='".$RFQ[$i]."'"))

			//$sql = $conn->query("SELECT cmp FROM vend where ref='$_POST['refer_id']'");
			//$cmp = $sql->fetch_assoc();
			$message = "Hi ! your kid is absent for the classes today (19th March 2016). Kindly Report the reason for absence in his school dairy ";
			$result = sendWay2SMS ( '9886731643' , 'GEETHA123' ,$_GET['absentee'] , $message);
			?>
		//  <script>alert('Reference Id updated successfully and the selected applicants are informed via SMS');</script>
		  <?php
	  //}
	//}
  //}
//}
?>