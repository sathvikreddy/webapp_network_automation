/* OSPF*/
/* OSPF ROUTERS */

$('#fakesubmit').click(function(){
	
	$('#security').hide();
	$('#topology').show();
	$('#ospf_dhcp_button').show();
	
});

$('#ospf_link').click(function(){

	$('#ospf_routers').show();
	$('#dhcp_routers').hide();

	$('#dhcp_link').hide();
	
	$('#R1_ospf_conf').hide();
	$('#R2_ospf_conf').hide();
	$('#R3_ospf_conf').hide();
	$('#R4_ospf_conf').hide();
	
	$('#R1_dhcp_conf').hide();
	$('#R2_dhcp_conf').hide();
	$('#R3_dhcp_conf').hide();
	$('#R4_dhcp_conf').hide();

	$('#main_menu').show();
});

	/* R1 Conf*/
	$('#R1_link_ospf').click(function(){

		$('#ospf_routers').hide();
		$('#dhcp_routers').hide();
		
		$('#ospf_link').show();
		$('#dhcp_link').hide();
		
		$('#R1_ospf_conf').show();
		$('#R2_ospf_conf').hide();
		$('#R3_ospf_conf').hide();
		$('#R4_ospf_conf').hide();
		
		$('#R1_dhcp_conf').hide();
		$('#R2_dhcp_conf').hide();
		$('#R3_dhcp_conf').hide();
		$('#R4_dhcp_conf').hide();
		
		$('#main_menu').show();
	});

	/* R2 Conf*/
	$('#R2_link_ospf').click(function(){
		
		$('#ospf_routers').hide();
		$('#dhcp_routers').hide();
		
		$('#ospf_link').show();
		$('#dhcp_link').hide();
		
		$('#R1_ospf_conf').hide();
		$('#R2_ospf_conf').show();
		$('#R3_ospf_conf').hide();
		$('#R4_ospf_conf').hide();
		
		$('#R1_dhcp_conf').hide();
		$('#R2_dhcp_conf').hide();
		$('#R3_dhcp_conf').hide();
		$('#R4_dhcp_conf').hide();

		$('#main_menu').show();
	});
	
			
	/* R3 Conf*/
	$('#R3_link_ospf').click(function(){
		
		$('#ospf_routers').hide();
		$('#dhcp_routers').hide();
		
		$('#ospf_link').show();
		$('#dhcp_link').hide();
		
		$('#R1_ospf_conf').hide();
		$('#R2_ospf_conf').hide();
		$('#R3_ospf_conf').show();
		$('#R4_ospf_conf').hide();
		
		$('#R1_dhcp_conf').hide();
		$('#R2_dhcp_conf').hide();
		$('#R3_dhcp_conf').hide();
		$('#R4_dhcp_conf').hide();

		$('#main_menu').show();
	});
	
	/* R4 Conf*/
	$('#R4_link_ospf').click(function(){
		
		$('#ospf_routers').hide();
		$('#dhcp_routers').hide();
		
		$('#ospf_link').show();
		$('#dhcp_link').hide();
		
		$('#R1_ospf_conf').hide();
		$('#R2_ospf_conf').hide();
		$('#R3_ospf_conf').hide();
		$('#R4_ospf_conf').show();
		
		$('#R1_dhcp_conf').hide();
		$('#R2_dhcp_conf').hide();
		$('#R3_dhcp_conf').hide();
		$('#R4_dhcp_conf').hide();

		$('#main_menu').show();
	});
	
/* DHCP*/
/* DHCP ROUTERS */
$('#dhcp_link').click(function(){
	
	$('#ospf_routers').hide();
	$('#dhcp_routers').show();
	
	$('#ospf_link').hide();
	
	$('#R1_ospf_conf').hide();		
	$('#R2_ospf_conf').hide();
	$('#R3_ospf_conf').hide();
	$('#R4_ospf_conf').hide();
  
	$('#R1_dhcp_conf').hide();
	$('#R2_dhcp_conf').hide();
	$('#R3_dhcp_conf').hide();
	$('#R4_dhcp_conf').hide();

	$('#main_menu').show();
});

/* R1 DHCP */

$('#R1_link_dhcp').click(function(){
	
	$('#ospf_link').hide();
	$('#dhcp_link').show();

	$('#ospf_routers').hide();
	$('#dhcp_routers').hide();

	$('#R1_ospf_conf').hide();
	$('#R2_ospf_conf').hide();
	$('#R3_ospf_conf').hide();
	$('#R4_ospf_conf').hide();
	
	$('#R1_dhcp_conf').show();
	$('#R1_server_conf').hide();
	$('#R1_client_conf').hide();
	
	$('#R2_dhcp_conf').hide();
	$('#R2_server_conf').hide();
	$('#R2_client_conf').hide();
	
	$('#R3_dhcp_conf').hide();
	$('#R3_server_conf').hide();
	$('#R3_client_conf').hide();
	
	$('#R4_dhcp_conf').hide();
	$('#R4_server_conf').hide();
	$('#R4_client_conf').hide();
	
	$('#main_menu').show();
});

	/* R1 Server*/
	$('#R1_server').click(function(){
		
		$('#ospf_link').hide();
		$('#ospf_routers').hide();

		$('#dhcp_link').show();
		$('#dhcp_routers').hide();

		$('#R1_ospf_conf').hide();
		$('#R1_ospf_conf').hide();
		$('#R2_ospf_conf').hide();
		$('#R3_ospf_conf').hide();
		$('#R4_ospf_conf').hide();
  
		$('#R1_server_conf').show();
		$('#R1_client_conf').hide();
		
		$('#R2_server_conf').hide();
		$('#R2_client_conf').hide();
		
		$('#R3_server_conf').hide();
		$('#R3_client_conf').hide();
		
		$('#R4_server_conf').hide();
		$('#R4_client_conf').hide();
		
		$('#main_menu').show();
	});
 
	/* R1 Client*/
	$('#R1_client').click(function(){
	
		$('#ospf_link').hide();
		$('#dhcp_link').show();

		$('#ospf_routers').hide();
		$('#dhcp_routers').hide();
		
		$('#R1_ospf_conf').hide();
		$('#R2_ospf_conf').hide();
		$('#R3_ospf_conf').hide();
		$('#R4_ospf_conf').hide();
  
		$('#R1_client_conf').show();
		$('#R1_server_conf').hide();
		
		$('#R2_server_conf').hide();
		$('#R2_client_conf').hide();
		
		$('#R3_server_conf').hide();
		$('#R3_client_conf').hide();
		
		$('#R4_server_conf').hide();
		$('#R4_client_conf').hide();
		
		$('#main_menu').show();
	});
	 
 /* R2 DHCP */

$('#R2_link_dhcp').click(function(){
	
	$('#ospf_link').hide();
	$('#dhcp_link').show();

	$('#ospf_routers').hide();
	$('#dhcp_routers').hide();

	$('#R1_ospf_conf').hide();
	$('#R2_ospf_conf').hide();
	$('#R3_ospf_conf').hide();
	$('#R4_ospf_conf').hide();
	
	$('#R1_dhcp_conf').hide();
	$('#R1_server_conf').hide();
	$('#R1_client_conf').hide();
	
	$('#R2_dhcp_conf').show();
	$('#R2_server_conf').hide();
	$('#R2_client_conf').hide();
	
	$('#R3_dhcp_conf').hide();
	$('#R3_server_conf').hide();
	$('#R3_client_conf').hide();
	
	$('#R4_dhcp_conf').hide();
	$('#R4_server_conf').hide();
	$('#R4_client_conf').hide();
	
	$('#main_menu').show();
});

	/* R2 Server*/
	$('#R2_server').click(function(){
		
		$('#ospf_link').hide();
		$('#ospf_routers').hide();

		$('#dhcp_link').show();
		$('#dhcp_routers').hide();

		$('#R1_ospf_conf').hide();
		$('#R1_ospf_conf').hide();
		$('#R2_ospf_conf').hide();
		$('#R3_ospf_conf').hide();
		$('#R4_ospf_conf').hide();
  
		$('#R1_server_conf').hide();
		$('#R1_client_conf').hide();
		
		$('#R2_server_conf').show();
		$('#R2_client_conf').hide();
		
		$('#R3_server_conf').hide();
		$('#R3_client_conf').hide();
		
		$('#R4_server_conf').hide();
		$('#R4_client_conf').hide();
		
		$('#main_menu').show();
	});
 
	/* R2 Client*/
	$('#R2_client').click(function(){
		
		$('#ospf_link').hide();
		$('#dhcp_link').show();

		$('#ospf_routers').hide();
		$('#dhcp_routers').hide();
		
		$('#R1_ospf_conf').hide();
		$('#R2_ospf_conf').hide();
		$('#R3_ospf_conf').hide();
		$('#R4_ospf_conf').hide();
  
		$('#R1_client_conf').hide();
		$('#R1_server_conf').hide();
		
		$('#R2_server_conf').hide();
		$('#R2_client_conf').show();
		
		$('#R3_server_conf').hide();
		$('#R3_client_conf').hide();
		
		$('#R4_server_conf').hide();
		$('#R4_client_conf').hide();
		
		$('#main_menu').show();
	});
	
 /* R3 DHCP */

$('#R3_link_dhcp').click(function(){
	
	$('#ospf_link').hide();
	$('#dhcp_link').show();

	$('#ospf_routers').hide();
	$('#dhcp_routers').hide();

	$('#R1_ospf_conf').hide();
	$('#R2_ospf_conf').hide();
	$('#R3_ospf_conf').hide();
	$('#R4_ospf_conf').hide();
	
	$('#R1_dhcp_conf').hide();
	$('#R1_server_conf').hide();
	$('#R1_client_conf').hide();
	
	$('#R2_dhcp_conf').hide();
	$('#R2_server_conf').hide();
	$('#R2_client_conf').hide();
	
	$('#R3_dhcp_conf').show();
	$('#R3_server_conf').hide();
	$('#R3_client_conf').hide();
	
	$('#R4_dhcp_conf').hide();
	$('#R4_server_conf').hide();
	$('#R4_client_conf').hide();
	
	$('#main_menu').show();
});

	/* R3 Server*/
	$('#R3_server').click(function(){
		
		$('#ospf_link').hide();
		$('#ospf_routers').hide();

		$('#dhcp_link').show();
		$('#dhcp_routers').hide();

		$('#R1_ospf_conf').hide();
		$('#R1_ospf_conf').hide();
		$('#R2_ospf_conf').hide();
		$('#R3_ospf_conf').hide();
		$('#R4_ospf_conf').hide();
  
		$('#R1_server_conf').hide();
		$('#R1_client_conf').hide();
		
		$('#R2_server_conf').hide();
		$('#R2_client_conf').hide();
		
		$('#R3_server_conf').show();
		$('#R3_client_conf').hide();
		
		$('#R4_server_conf').hide();
		$('#R4_client_conf').hide();
		
		$('#main_menu').show();
	});
 
	/* R3 Client*/
	$('#R3_client').click(function(){
		
		$('#ospf_link').hide();
		$('#dhcp_link').show();

		$('#ospf_routers').hide();
		$('#dhcp_routers').hide();
		
		$('#R1_ospf_conf').hide();
		$('#R2_ospf_conf').hide();
		$('#R3_ospf_conf').hide();
		$('#R4_ospf_conf').hide();
  
		$('#R1_client_conf').hide();
		$('#R1_server_conf').hide();
		
		$('#R2_server_conf').hide();
		$('#R2_client_conf').hide();
		
		$('#R3_server_conf').hide();
		$('#R3_client_conf').show();
		
		$('#R4_server_conf').hide();
		$('#R4_client_conf').hide();
		
		$('#main_menu').show();
	});
	
 /* R4 DHCP */

$('#R4_link_dhcp').click(function(){
	
	$('#ospf_link').hide();
	$('#dhcp_link').show();

	$('#ospf_routers').hide();
	$('#dhcp_routers').hide();

	$('#R1_ospf_conf').hide();
	$('#R2_ospf_conf').hide();
	$('#R3_ospf_conf').hide();
	$('#R4_ospf_conf').hide();
	
	$('#R1_dhcp_conf').hide();
	$('#R1_server_conf').hide();
	$('#R1_client_conf').hide();
	
	$('#R2_dhcp_conf').hide();
	$('#R2_server_conf').hide();
	$('#R2_client_conf').hide();
	
	$('#R3_dhcp_conf').hide();
	$('#R3_server_conf').hide();
	$('#R3_client_conf').hide();
	
	$('#R4_dhcp_conf').show();
	$('#R4_server_conf').hide();
	$('#R4_client_conf').hide();
	
	$('#main_menu').show();
});

	/* R4 Server*/
	$('#R4_server').click(function(){
		
		$('#ospf_link').hide();
		$('#ospf_routers').hide();

		$('#dhcp_link').show();
		$('#dhcp_routers').hide();

		$('#R1_ospf_conf').hide();
		$('#R1_ospf_conf').hide();
		$('#R2_ospf_conf').hide();
		$('#R3_ospf_conf').hide();
		$('#R4_ospf_conf').hide();
  
		$('#R1_server_conf').hide();
		$('#R1_client_conf').hide();
		
		$('#R2_server_conf').hide();
		$('#R2_client_conf').hide();
		
		$('#R3_server_conf').hide();
		$('#R3_client_conf').hide();
		
		$('#R4_server_conf').show();
		$('#R4_client_conf').hide();
		
		$('#main_menu').show();
	});
 
	/* R4 Client*/
	$('#R4_client').click(function(){
		
		$('#ospf_link').hide();
		$('#dhcp_link').show();

		$('#ospf_routers').hide();
		$('#dhcp_routers').hide();
		
		$('#R1_ospf_conf').hide();
		$('#R2_ospf_conf').hide();
		$('#R3_ospf_conf').hide();
		$('#R4_ospf_conf').hide();
  
		$('#R1_client_conf').hide();
		$('#R1_server_conf').hide();
		
		$('#R2_server_conf').hide();
		$('#R2_client_conf').hide();
		
		$('#R3_server_conf').hide();
		$('#R3_client_conf').hide();
	
		$('#R4_server_conf').hide();
		$('#R4_client_conf').show();
		
		$('#main_menu').show();
	});
	
 
/* MAIN MENU*/
 
$('#main_menu_link').click(function(){
	
	$('#ospf_link').show();
	$('#dhcp_link').show();
	
	$('#ospf_routers').hide();
	$('#dhcp_routers').hide();
	
	$('#R1_ospf_conf').hide();
	$('#R1_ospf_conf').hide();
	$('#R2_ospf_conf').hide();
	$('#R3_ospf_conf').hide();
	$('#R4_ospf_conf').hide();
  
	$('#R1_dhcp_conf').hide();
	$('#R2_dhcp_conf').hide();
	$('#R3_dhcp_conf').hide();
	$('#R4_dhcp_conf').hide();
	
	$('#main_menu').hide();
});
