<?php
include 'PDFMerger.php';

$pdf = new PDFMerger;

$pdf->addPDF('cover.pdf', '1')
	->addPDF('impressions.pdf', '1')
	->addPDF('maps.pdf', '1')
	->merge('file', 'TEST2.pdf');
	
	//REPLACE 'file' WITH 'browser', 'download', 'string', or 'file' for output options
	//You do not need to give a file path for browser, string, or download - just the name.
	
	?>
