//added by nilu 
jQuery(document).ready(function() {
    //jquery
    
 
jQuery(".page-node-add input#edit-field-classdet-class-code-und-0-value").attr("disabled", "true");





 var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 9);
	if (pathName == '/cart/checkout' && window.onload){
		// window.location.reload(true);
	     // window.setTimeout('location.reload()', 1000);
			  //window.onload = function () {window.location.reload()}
			//setTimeout(function() {
                 // window.location.reload(true);
       //   }, 5000);
		  
		 
		}
    //alert(pathName);
    
});
// populate Enrollemtn setas into decrement setas field
jQuery(document).ready(function() {
	 jQuery("#edit-submit").click(function () {
		 
		    var dcset = jQuery("#class-details-node-form #edit-field-classdet-decrement-seats-und-0-value").val();
			var enset = jQuery("#class-details-node-form #edit-field-classdet-enrollment-seats-und-0-value").val();
			
			if (dcset ==''){
				    jQuery("#class-details-node-form #edit-field-classdet-decrement-seats-und-0-value").val(enset);
					//alert("ok");
				
				}
			else{
				 // alert("mutta");
				}
			
			
			
		 
		 
		 
	 });
	
});
  jQuery(document).ready(function() {
	  
	 
	 // alert("gwregwreg");
	 
	 //class details
 //jQuery(".view-class-details tr td.views-field-field-classdet-status").parent("tr").addClass("inactive");
	 jQuery('.view-class-details tr td.views-field-field-classdet-status').each(
		
		function () {
	
		var status=(jQuery(this).text().toLowerCase()); // to get just the text
		
       // if(status=='Inactive')
		//	{
				jQuery(this).parent("tr").addClass(status);
				
			//}
		}
		);
		//jQuery("#uc-cart-checkout-form #payment-pane").hide();
		
	  jQuery(".page-node-edit input#edit-field-registrati-date-registered-und-0-value").attr("disabled", "true");
	  jQuery(".page-node-edit input#edit-field-registration-last-modified-und-0-value").attr("disabled", "true");
	  jQuery(".page-node-edit input#edit-field-registrati-date-registered-und-0-value").attr("style", "background:#e2e2e2");
	  jQuery(".page-node-edit input#edit-field-registration-last-modified-und-0-value").attr("style", "background:#e2e2e2");
	  jQuery(".gift_certificate input.node-add-to-cart").attr("value","purchase");
	  jQuery(".view-view-registration #edit-actions #edit-submit").attr("value","Update User");
	
	 
	   // Checkout Page Address Popup
	   jQuery("#edit-panes-webform-nid380-0-if-registration-address-and-billing-address-same-1").click(function () {
		         //alert("OKKKKKK");
		 if (jQuery('#edit-panes-webform-nid380-0-if-registration-address-and-billing-address-same-1').is(':checked')){
		 
				var fname = jQuery("#edit-panes-webform-nid344-0-first-name").val();
				var lname = jQuery("#edit-panes-webform-nid344-0-last-name").val();
				var address1 = jQuery("#edit-panes-webform-nid344-0-address-1").val();
				var address2 = jQuery("#edit-panes-webform-nid344-0-address-2").val();
				var city = jQuery("#edit-panes-webform-nid344-0-city").val();
				var state = jQuery("#edit-panes-webform-nid344-0-state option:selected").val();
				var zcode = jQuery("#edit-panes-webform-nid344-0-zip-code").val();
				var phone = jQuery("#edit-panes-webform-nid344-0-phone").val();
				
				 
				jQuery("#edit-panes-billing-address-billing-first-name").val(fname);
				jQuery("#edit-panes-billing-address-billing-last-name").val(lname);
				jQuery("#edit-panes-billing-address-billing-street1").val(address1);
				jQuery("#edit-panes-billing-address-billing-street2").val(address2);
				jQuery("#edit-panes-billing-address-billing-city").val(city);
				jQuery('#edit-panes-billing-address-billing-zone option[value='+state+']').attr('selected', 'selected');
				jQuery("#edit-panes-billing-address-billing-postal-code").val(zcode);
				jQuery("#edit-panes-billing-address-billing-phone").val(phone);
				
				 jQuery("#billing-pane").hide();
				 
		      }
			 else{
				       jQuery("#billing-pane").show();
				jQuery("#edit-panes-billing-address-billing-first-name").val('');
				jQuery("#edit-panes-billing-address-billing-last-name").val('');
				jQuery("#edit-panes-billing-address-billing-street1").val('');
				jQuery("#edit-panes-billing-address-billing-street2").val('');
				jQuery("#edit-panes-billing-address-billing-city").val(city);
				 var ss = 0;
				jQuery('#edit-panes-billing-address-billing-zone option[value='+ss+']').attr('selected', 'selected');
				jQuery("#edit-panes-billing-address-billing-postal-code").val('');
				jQuery("#edit-panes-billing-address-billing-phone").val('');
				 
				 }
		   
		   });  
		   
		   
		   //Class Detail Hide Under Student type Classes
		   
		   
		   
		    //View Registration View Page
			jQuery("#edit-field-registratio-payment-amount-0-field-registratio-payment-amount-und-0-value").hide();
			jQuery("#edit-field-registration-payment-type-0-field-registration-payment-type-und").change(function () {
	var pttype = jQuery("#edit-field-registration-payment-type-0-field-registration-payment-type-und option:selected").val();
	
                       alert(pttype);	
              	
	                 //if (pttype="Cash"){
						/// jQuery("#edit-field-registratio-payment-amount-0-field-registratio-payment-amount-und-0-value").show();
						 //alert(pttype);
						// }
					  //else{
						//  jQuery("#edit-field-registratio-payment-amount-0-field-registratio-payment-amount-und-0-value").hide(); 
						 // }
				
				});
		   
		   //Checkout Customer Information Pane
		   jQuery("#customer-pane").hide();
		   
		   jQuery("#edit-continue").click(function () {
			       
				   var ema = jQuery("#edit-panes-webform-nid344-0-email").val();
				   var pema = jQuery("#edit-panes-customer-primary-email").val();
				  if (pema ==''){
				   jQuery("#edit-panes-customer-primary-email").val(ema);
				  }
			   
			    });
	
	
	  jQuery("#views-exposed-form-schedule-view-page #edit-title-wrapper").hide();
	  jQuery("#views-exposed-form-schedule-view-page #edit-submit-schedule-view").hide();
	  
	  
	  
	  jQuery("#edit-panes-webform-nid344-0-first-name").click(function(){
		  
		  
		 if( jQuery('#edit-panes-webform-nid344-0-email').val() == jQuery('#edit-panes-webform-nid344-0-confirm-email').val()){
		  

	
		 }
		 else{
			 
			 
			 jQuery('#webform-component-panes--webform-nid344--0--confirm-email').append('<label style="color: #b01a1a;display:             inline-block; margin: 0 0 0 5px;">Not Confirm Email</label>');
		  
			 }
	});
	
   
		
	jQuery("#edit-panes-webform-nid344-0-alt-phone").click(function () {
		
		 var pval = jQuery("#edit-panes-webform-nid344-0-phone").val();
		   //alert(pval);
		
		      var regexp = /^(\()?(\d{3})([\)-\. ])?(\d{3})([-\. ])?(\d{4})$/;
              //this.value = this.value.replace(/[^0-9\.]/g,'');
			  if(pval!==''){
				  
				     if(regexp.test(pval)){
				   
				  
				  }
			  else{
				     alert("Please Follow This Format 555-555-5555");
				  }
			  
				  
			}
			
			});
			jQuery("#edit-panes-billing-address-billing-first-name").click(function () {
		
		 var pvala = jQuery("#edit-panes-webform-nid344-0-alt-phone").val();
		   //alert(pval);
		
		      var regexp = /^(\()?(\d{3})([\)-\. ])?(\d{3})([-\. ])?(\d{4})$/;
              //this.value = this.value.replace(/[^0-9\.]/g,'');
			  if(pvala!==''){
				  
				     if(regexp.test(pvala)){
				   
				  
				  }
			  else{
				     alert("Please Follow This Format 555-555-5555");
				  }
			  
				  
			}
			
			});
			
			
			jQuery("#edit-panes-webform-nid344-0-date-of-birth-year").change(function () {
				      var yy = jQuery("#edit-panes-webform-nid344-0-date-of-birth-year").val();
					  var mm = jQuery("#edit-panes-webform-nid344-0-date-of-birth-month").val();
					  var dd = jQuery("#edit-panes-webform-nid344-0-date-of-birth-day").val();
					  var bdd = mm+"-"+dd+"-"+yy;
					 // alert(bdd);
					 var currentDate = new Date()
	                 var day = currentDate.getDate()
	                 var month = currentDate.getMonth() + 1
	                 var year = currentDate.getFullYear()
	                 var cd = month+"-"+day+"-"+year;
					 //alert(cd);
					 var d1=new Date(bdd);
                     var d2 =new Date(cd);
					 var mon;
                     mon = (d2.getFullYear() - d1.getFullYear()) * 12;
                     mon  -= d1.getMonth();
                     mon   += d2.getMonth();
					 //alert(mon);
			  
					 if(mon<=228){
						 
						    
							jQuery("#webform-component-panes--webform-nid344--0--high-school-name").show();
							    jQuery("#webform-component-panes--webform-nid344--0--parent-contact").show();
							   jQuery("#webform-component-panes--webform-nid344--0--parent-phone").show();
						 
						 }
						 
						 else{
							   
						         jQuery("#webform-component-panes--webform-nid344--0--high-school-name").hide();
							jQuery("#webform-component-panes--webform-nid344--0--parent-contact").hide();
							jQuery("#webform-component-panes--webform-nid344--0--parent-phone").hide();
							
							 
							 }
			  
				
			});
			
			
			
	  
  });
  
  jQuery(document).ready(function() {
	  jQuery("#edit-field-class-detail-class-type-und").change(function () {
		  var sttype = jQuery("#class-details-node-form #edit-field-class-detail-class-type-und option:selected").val();
		  if (sttype == 'Auto Mobile'){
			       jQuery('#edit-field-classdet-class-assocation-und option[value=407]').hide();
				   jQuery('#edit-field-classdet-class-assocation-und option[value=426]').hide(); 
				   jQuery('#edit-field-classdet-class-assocation-und option[value=404]').hide(); 
				   jQuery('#edit-field-classdet-class-assocation-und option[value=408]').hide(); 
				   jQuery('#edit-field-classdet-class-assocation-und option[value=405]').hide(); 
				   jQuery('#edit-field-classdet-class-assocation-und option[value=402]').hide(); 
				   jQuery('#edit-field-classdet-class-assocation-und option[value=409]').hide();
				     
			  }
			else if(sttype == 'MotorCycle'){
				  jQuery('#edit-field-classdet-class-assocation-und option[value=105]').hide();
				  jQuery('#edit-field-classdet-class-assocation-und option[value=287]').hide();
				  jQuery('#edit-field-classdet-class-assocation-und option[value=104]').hide();
				  jQuery('#edit-field-classdet-class-assocation-und option[value=407]').hide();
				  jQuery('#edit-field-classdet-class-assocation-und option[value=32]').hide();
				  jQuery('#edit-field-classdet-class-assocation-und option[value=407]').hide();
				   jQuery('#edit-field-classdet-class-assocation-und option[value=426]').show(); 
				   jQuery('#edit-field-classdet-class-assocation-und option[value=404]').show(); 
				   jQuery('#edit-field-classdet-class-assocation-und option[value=408]').show(); 
				   jQuery('#edit-field-classdet-class-assocation-und option[value=405]').show(); 
				   jQuery('#edit-field-classdet-class-assocation-und option[value=402]').show(); 
				   jQuery('#edit-field-classdet-class-assocation-und option[value=409]').show();
				  
				     
				}
		  else if(sttype == 'Scooter'){
			       jQuery('#edit-field-classdet-class-assocation-und option[value=407]').hide();
				   jQuery('#edit-field-classdet-class-assocation-und option[value=426]').hide(); 
				   jQuery('#edit-field-classdet-class-assocation-und option[value=404]').hide(); 
				   jQuery('#edit-field-classdet-class-assocation-und option[value=408]').hide(); 
				   jQuery('#edit-field-classdet-class-assocation-und option[value=405]').hide(); 
				   jQuery('#edit-field-classdet-class-assocation-und option[value=402]').show(); 
				   jQuery('#edit-field-classdet-class-assocation-und option[value=409]').hide();
				   jQuery('#edit-field-classdet-class-assocation-und option[value=105]').hide();
				  jQuery('#edit-field-classdet-class-assocation-und option[value=287]').hide();
				  jQuery('#edit-field-classdet-class-assocation-und option[value=104]').hide();
				  jQuery('#edit-field-classdet-class-assocation-und option[value=407]').hide();
				  jQuery('#edit-field-classdet-class-assocation-und option[value=32]').hide();
			  
			  }
		  
		  
	  });
	  
	  
  });
  
  //Add Class Detail Page Hide Fields
   jQuery(document).ready(function() {
	   jQuery("#class-details-node-form #edit-taxonomy-catalog").hide();
	   jQuery("#class-details-node-form #edit-uc-product-image-und").hide();
	   jQuery("#class-details-node-form #edit-body").hide();
	   jQuery("#class-details-node-form #edit-base").hide();
	   jQuery("#edit-submit").click(function () {
		             // alert("Jazzzzlllllllyy");
					  
					  jQuery("#class-details-node-form #edit-model").val(0);
				var price = jQuery("#class-details-node-form #edit-field-classdet-price-und-0-value").val();
				var sprice = jQuery("#class-details-node-form #edit-sell-price").val();
				jQuery("#class-details-node-form #edit-sell-price").val(price);
					      
					
					
		   });
	 jQuery("#edit-save-continue").click(function () {
		             // alert("Jazzzzlllllllyy");
					  
					  jQuery("#class-details-node-form #edit-model").val(0);
				var price = jQuery("#class-details-node-form #edit-field-classdet-price-und-0-value").val();
				var sprice = jQuery("#class-details-node-form #edit-sell-price").val();
				jQuery("#class-details-node-form #edit-sell-price").val(price);
					      
					
					
		   });
	   
   });
  

 jQuery(document).ready(function() {
	 
	  var nidd = jQuery("#nid_t").val()	
	  //var cods = jQuery("") 
	   //jQuery('input#edit-field-regiistration-promo-code-und-0-value').val(nidd);
	   //jQuery('input#edit-field-regiistration-class-und option:selected').val(nidd);
	   //alert (nidd);
	   jQuery('#edit-field-regiistration-class-und option[value= '+nidd+']').attr('selected', 'selected');
	 //  jQuery('#edit-field-regiistration-class-und option').attr();
	  
	  jQuery("#edit-submit").click(function () {
		 
		
		 
	 
	var bphone = jQuery("#user-register-form #edit-profile-member-field-member-billing-address-und-0-phone").val();
	var baddit = jQuery("#user-register-form #edit-profile-member-field-member-billing-address-und-0-additional").val();
	var saddit = jQuery("#user-register-form #edit-profile-member-field-member-shipping-address-und-0-additional").val();
	var sphone = jQuery("#user-register-form #edit-profile-member-field-member-shipping-address-und-0-phone").val();
	if(bphone==''){
		  alert("Billing Phone is Required field");
		
		}
	if(baddit==''){
		  alert("Billing Additional is Required field");
		
		}
	if(saddit==''){
		  alert("Shipping Additional is Required field");
		
		}
	if(sphone==''){
		  alert("Shipping Phone is Required field");
		
		}	
	});
	
	
	jQuery("#edit-field-regi-student-type-und").change(function() {
    var stype = jQuery(".page-node-add #edit-field-regi-student-type-und option:selected").val();
	if(stype=='AutoMobile'){
		 
		 jQuery(".page-node-add #edit-field-regiistratiodriver-license").hide();
		}
	if(stype=='MotorCycle'){
		 
		 jQuery(".page-node-add #edit-field-regiistratiodriver-license").show();
		}
    });
	jQuery("#edit-field-regi-student-type-und").change(function() {
    var stype = jQuery(".page-node-edit #edit-field-regi-student-type-und option:selected").val();
	if(stype=='AutoMobile'){
		 
		 jQuery(".page-node-edit #edit-field-regiistratiodriver-license").hide();
		}
	if(stype=='MotorCycle'){
		 
		 jQuery(".page-node-edit #edit-field-regiistratiodriver-license").show();
		}
    });
	//auto craeted text fields keeping empty:: 
	//var auto = jQuery(".page-node-edit #edit-field-classdet-class-code-und-0-value").val();
	//alert (auto);
	 
	//jQuery(".page-node-edit #field-classdet-class-code-add-more-wrapper .description").html(auto);
	//jQuery(".page-node-edit #edit-field-classdet-class-code-und-0-value").val('');
	//jQuery(".page-node-edit #edit-field-classdet-class-code-und-0-value").attr("style","display:none");
	//jQuery(".page-node-edit #field-classdet-class-code-add-more-wrapper .description").attr("style","margin:0 10px 10px 0px;clear:none;font-size:12px");
	   //page clone
	//jQuery(".page-node-clone #edit-field-classdet-class-code-und-0-value").val('');
	//jQuery(".page-node-clone #edit-field-classdet-class-code-und-0-value").attr("style","display:none");
	
	
//start date	
	//var auto2 = jQuery(".page-node-edit #edit-field-classdet-class-start-date-und-0-value-datepicker-popup-0").val();
	//alert (auto2);
	//jQuery(".page-node-edit #field-classdet-class-start-date-add-more-wrapper .description").html(auto2);
	//jQuery(".page-node-edit #edit-field-classdet-class-start-date-und-0-value-datepicker-popup-0").val('');
	//jQuery(".page-node-edit #edit-field-classdet-class-start-date-und-0-value-datepicker-popup-0").attr("style","display:none");
	//jQuery(".page-node-edit #field-classdet-class-start-date-add-more-wrapper .description").attr("style","margin:20px 10px 10px 0;clear:none;dispaly:inline-block;font-size:12px");
	//jQuery(".page-node-edit #field-classdet-class-start-date-add-more-wrapper .form-item-field-classdet-class-start-date-und-0-value-date .description").attr("style","display:none");
	
	   //page clone
	//jQuery(".page-node-clone #edit-field-classdet-class-start-date-und-0-value-datepicker-popup-0").val('');
	//jQuery(".page-node-clone #edit-field-classdet-class-start-date-und-0-value-datepicker-popup-0").attr("style","display:none");
	
	
//end date
//var auto3 = jQuery(".page-node-edit #edit-field-classdet-class-end-date-und-0-value-datepicker-popup-0").val();
	//alert (auto3);
	//jQuery(".page-node-edit #field-classdet-class-end-date-add-more-wrapper .description").html(auto3);
	//jQuery(".page-node-edit #edit-field-classdet-class-end-date-und-0-value-datepicker-popup-0").val('');
	//jQuery(".page-node-edit #edit-field-classdet-class-end-date-und-0-value-datepicker-popup-0").attr("style","display:none");
//	jQuery(".page-node-edit #field-classdet-class-end-date-add-more-wrapper .description").attr("style","margin:20px 10px 10px 0;clear:none;dispaly:inline-block;font-size:12px");
//	jQuery(".page-node-edit #field-classdet-class-end-date-add-more-wrapper .form-item-field-classdet-class-end-date-und-0-value-date .description").attr("style","display:none");
	
	   //page clone
	//jQuery(".page-node-clone #edit-field-classdet-class-end-date-und-0-value-datepicker-popup-0").val('');
//	jQuery(".page-node-clone #edit-field-classdet-class-end-date-und-0-value-datepicker-popup-0").attr("style","display:none");
//	
	
//month group field
//var auto4 = jQuery(".page-node-edit #edit-field-classdet-month-group-field-und-0-value-date").val();
		
		//jQuery(".page-node-edit #edit-field-classdet-month-group-field-und-0-value-date").val('');
		  //jQuery(".page-node-edit #field-classdet-month-group-field-add-more-wrapper").hide();
		 // jQuery(".page-node-edit .form-item form-type-textfield form-item-title").hide();
		//jQuery(".page-node-edit #form-item-field-classdet-month-group-field-und-0-value-date .description").html(auto4);
	
	//page clone
	//jQuery(".page-node-clone #edit-field-classdet-month-group-field-und-0-value-date").val('');
	
	
	
//email list 
jQuery(".page-emaillists .view-emaillists .feed-icon a").html('Click Here to Download a Report');
jQuery(".page-emaillists .view-emaillists .feed-icon").attr("style","float:none;width:95%;margin:0 auto")
	
	//edit address book
jQuery("#uc-addresses-get-address-form #edit-uc-addresses").wrapAll('<div class="admin_form" ><div class="inner_form" ></div></div>');
  
    //edit user
jQuery("#user-profile-form").wrapAll('<div class="admin_form" ><div class="inner_form" ></div></div>');  
  
  
   //login block
    
jQuery("div.login").hide();
  
     jQuery('a.login').unbind().click(function(event){
       // event.preventDefault();
	   // alert ('dddd');
	 jQuery("div.login").slideToggle('slow');
     }).attr("href", "#");
	
	
	
	 jQuery(".login_arrow").click(function () {
		 
		 jQuery("div.login").slideToggle('slow');
		 
	 });
	
	
	 jQuery(".contact_us input#edit-submitted-name").click(function () {
		 
		 if(jQuery(this).val()=="Your Name")
		 {
			 jQuery(this).val('');
			 
		 }
		
				 
	 });
	 
	 
	  jQuery(".login #edit-name").click(function () {
		 
		
			 jQuery(this).val('');
			 
		 
				 
	 });
	  jQuery(".login #edit-pass").click(function () {
		 
		
			 jQuery(this).val('');
			 
		 
				 
	 });
	 
	   //contact us
	  jQuery(".contact_us input#edit-submitted-e-mail").click(function () {
		 
		 if(jQuery(this).val()=="Email")
		 {
			 jQuery(this).val('');
			 
		 }
		
				 
	 });
	 
	  jQuery(".contact_us input#edit-submitted-subject").click(function () {
		 
		 if(jQuery(this).val()=="Subject")
		 {
			 jQuery(this).val('');
			 
		 }
		
				 
	 });
	 
	  jQuery(".contact_us textarea#edit-submitted-message").click(function () {
		 
		 if(jQuery(this).val()=="Message")
		 {
			 jQuery(this).val('');
			 
		 }
		
				 
	 });
	 
	 
	 
	
	 //user register


jQuery(".inner_form .collapse_box").each(function(i){ 

    i=i+1;
  if(jQuery("#uid_"+i+"  h3 span").hasClass('plus') ){jQuery("#uid_"+i+" .collapse_box").addClass("hide");}
  
jQuery("#uid_"+i+"  h3 span").click(function () {	
      
if(jQuery(this).hasClass('minus') )

{
jQuery(this).removeClass('minus');
jQuery(this).addClass('plus');
jQuery("#uid_"+i+" .collapse_box").removeClass("show");
jQuery("#uid_"+i+" .collapse_box").addClass("hide");

}
else{
	jQuery(this).removeClass('plus');
    jQuery(this).addClass('minus');
    jQuery("#uid_"+i+" .collapse_box").addClass("show");
	jQuery("#uid_"+i+" .collapse_box").removeClass("hide");
	
	}

   }); 
   
   }); 
   
   
   
    
	 jQuery("#user-register-form #edit-profile-member-field-member-shipping-sa-und-yes").click(function () {
		 
		 
		 var st=jQuery('#user-register-form #edit-profile-member-field-member-shipping-sa-und-yes').is(':checked');
		// alert(st);
         if(jQuery('#user-register-form #edit-profile-member-field-member-shipping-sa-und-yes').is(':checked'))
		 {
		 var fbiname = jQuery('#edit-profile-member-field-billing-first-name-und-0-value').val();
         var lbiname =jQuery('#edit-profile-member-field-me-billing-last-name-und-0-value').val();
         var locanamebi = jQuery('#edit-profile-member-field-member-billing-address-und-0-name').val();
         var bistreet = jQuery('#edit-profile-member-field-member-billing-address-und-0-street').val();
         var biadditi = jQuery('#edit-profile-member-field-member-billing-address-und-0-additional').val();
         var bicity = jQuery('#edit-profile-member-field-member-billing-address-und-0-city').val();
         var bistate = jQuery('#edit-profile-member-field-member-billing-address-und-0-province').val();
         var bipcode = jQuery('#edit-profile-member-field-member-billing-address-und-0-postal-code').val();
         var bicountry = jQuery('#edit-profile-member-field-member-billing-address-und-0-country').val();
         var biphone = jQuery('#edit-profile-member-field-member-billing-address-und-0-phone').val();
         var bifax = jQuery('#edit-profile-member-field-member-billing-address-und-0-fax').val();
		 
		
				
		 jQuery('#edit-profile-member-field-me-shipping-first-name-und-0-value').val(fbiname) ;
         jQuery('#edit-profile-member-field-me-shipping-last-name-und-0-value').val(lbiname);
         jQuery('#edit-profile-member-field-member-shipping-address-und-0-name').val(locanamebi) ;
         jQuery('#edit-profile-member-field-member-shipping-address-und-0-street').val(bistreet );
         jQuery('#edit-profile-member-field-member-shipping-address-und-0-additional').val(biadditi) ;
         jQuery('#edit-profile-member-field-member-shipping-address-und-0-city').val(bicity) ;
         jQuery('#edit-profile-member-field-member-shipping-address-und-0-province').val(bistate );
         jQuery('#edit-profile-member-field-member-shipping-address-und-0-postal-code').val(bipcode) ;
         jQuery('#edit-profile-member-field-member-shipping-address-und-0-country').val(bicountry );
         jQuery('#edit-profile-member-field-member-shipping-address-und-0-phone').val(biphone );
         jQuery('#edit-profile-member-field-member-shipping-address-und-0-fax').val(bifax);
         
		
	     jQuery(".shipping_box").addClass("hide");	
	}else
	{
       
	 
		 jQuery('#edit-profile-member-field-me-shipping-first-name-und-0-value').val('') ;
         jQuery('#edit-profile-member-field-me-shipping-last-name-und-0-value').val('');
         jQuery('#edit-profile-member-field-member-shipping-address-und-0-name').val('') ;
         jQuery('#edit-profile-member-field-member-shipping-address-und-0-street').val('');
         jQuery('#edit-profile-member-field-member-shipping-address-und-0-additional').val('') ;
         jQuery('#edit-profile-member-field-member-shipping-address-und-0-city').val('') ;
         jQuery('#edit-profile-member-field-member-shipping-address-und-0-province').val('');
         jQuery('#edit-profile-member-field-member-shipping-address-und-0-postal-code').val('') ;
         jQuery('#edit-profile-member-field-member-shipping-address-und-0-country').val('');
         jQuery('#edit-profile-member-field-member-shipping-address-und-0-phone').val('');
         jQuery('#edit-profile-member-field-member-shipping-address-und-0-fax').val('');
		 
		jQuery(".shipping_box").removeClass("hide");	
	}
		 
	 });
	 
	//node register edit
	jQuery("#node_registration_form_group_billing_informationss legend").first().append('<div class="form-item" id="edit-profile-js"><label>Click here If Billing Address and Shipping Address Same </label><div class="form-checkboxes" id="edit-profile-member-und"><input type="checkbox" class="form-checkbox" value="Yes" name="profile_member" id="edit-profile-member-yes"></div></div>');
	
	
	
	 jQuery("#edit-profile-js #edit-profile-member-yes").click(function () {
		  var st=jQuery('#edit-profile-js #edit-profile-member-yes').is(':checked');
		// alert(st);
         if(jQuery('#edit-profile-js #edit-profile-member-yes').is(':checked'))
		 {
		 var fbiname = jQuery('#edit-field-regiistration-first-name-und-0-value').val();
         var lbiname =jQuery('#edit-field-regiistration-first-name-und-0-value').val();
         var bistreet = jQuery('#edit-field-regiistration-address-und-0-street').val();
         var biadditi = jQuery('#edit-field-regiistration-address-und-0-additional').val();
         var bicity = jQuery('#edit-field-regiistration-address-und-0-city').val();
         var bistate = jQuery('#edit-field-regiistration-address-und-0-province').val();
         var bipcode = jQuery('#edit-field-regiistration-address-und-0-postal-code').val();
         var bicountry = jQuery('#edit-field-regiistration-address-und-0-country').val();
         var biphone = jQuery('#edit-field-regiistration-address-und-0-phone').val();
         var bifax = jQuery('#edit-field-regiistration-address-und-0-fax').val();
		 
		
				
		 jQuery('#edit-field-regi-bill-first-name-und-0-value').val(fbiname) ;
         jQuery('#edit-field-regi-bill-last-name-und-0-value').val(lbiname);
         jQuery('#edit-field-regiistratibilling-address-und-0-street').val(bistreet );
         jQuery('#edit-field-regiistratibilling-address-und-0-additional').val(biadditi) ;
         jQuery('#edit-field-regiistratibilling-address-und-0-city').val(bicity) ;
         jQuery('#edit-field-regiistratibilling-address-und-0-province').val(bistate );
         jQuery('#edit-field-regiistratibilling-address-und-0-postal-code').val(bipcode) ;
         jQuery('#edit-field-regiistratibilling-address-und-0-country').val(bicountry );
         jQuery('#edit-field-regiistratibilling-address-und-0-phone').val(biphone );
         jQuery('#edit-field-regiistratibilling-address-und-0-fax').val(bifax);
         
		
	     jQuery(".fieldset-wrapper").addClass("hide");	
	}else
	{
       
	 
		 jQuery('#edit-field-regi-bill-first-name-und-0-value').val('') ;
         jQuery('#edit-field-regi-bill-last-name-und-0-value').val('');
         jQuery('#edit-field-regiistratibilling-address-und-0-street').val('');
         jQuery('#edit-field-regiistratibilling-address-und-0-additional').val('') ;
         jQuery('#edit-field-regiistratibilling-address-und-0-city').val('') ;
         jQuery('#edit-field-regiistratibilling-address-und-0-province').val('');
         jQuery('#edit-field-regiistratibilling-address-und-0-postal-code').val('') ;
         jQuery('#edit-field-regiistratibilling-address-und-0-country').val('');
         jQuery('#edit-field-regiistratibilling-address-und-0-phone').val('');
         jQuery('#edit-field-regiistratibilling-address-und-0-fax').val('');
		 
		jQuery(".fieldset-wrapper").removeClass("hide");	
	}
	
	});
	
	
	 //FAQ collapse
	 
	jQuery(".views-row-1 .faq_content").show();
    jQuery(".view-content .views-row").each(function(r){ 

    r=r+1;
   
   
    jQuery(".views-row-"+r+" h1.faq_title").click(function () {
	
	if(r>1){
	jQuery(".views-row-"+r+" h1.faq_title").toggleClass("minus");	
	}
	else
	{jQuery(".views-row-"+r+" h1.faq_title").toggleClass("plus");	}
		//alert(i);
    jQuery(".views-row-"+r+" div.faq_content").toggle();
     });

     jQuery(".views-row-last h1.faq_title").click(function () { 
 
	  jQuery(".views-row-last div.faq_content").toggleClass("show");
  //alert ('rrr');
 });
  
});


  jQuery('.calendar_hd li').click(function(){
	    var currentYear = (new Date).getFullYear();
        var pickdate =  jQuery(this).attr("id");
		if(pickdate!='00'){
		jQuery('input#edit-field-classdet-month-group-field-value-value-date').val(currentYear+'-'+pickdate);
		}
		else{
			jQuery('input#edit-field-classdet-month-group-field-value-value-date').val('');
		}
		//jQuery('input.form-submit').submit(); 
		jQuery('form#views-exposed-form-class-shedule-page').submit(); 
			
		
	
  });
  
  
  var inputmonth = jQuery('input#edit-field-classdet-month-group-field-value-value-date').val();
  //alert (inputmonth);
  var pickdate1 = inputmonth.substr(inputmonth.length - 2)
  jQuery('.calendar_hd li#'+pickdate1).addClass('active');

Drupal.behaviors.myCustomModule = function(context) {
jQuery('.calendar_hd li',context).click(function(){
        
		
	    var currentYear = (new Date).getFullYear();
        var pickdate =  jQuery(this).attr("id");
		if(pickdate!='00'){
		jQuery('input#edit-field-classdet-month-group-field-value-value-date').val(currentYear+'-'+pickdate);
		}
		else{
			jQuery('input#edit-field-classdet-month-group-field-value-value-date').val('');
		}
		jQuery('input.form-submit').submit(); 
		//jQuery('form#views-exposed-form-class-shedule-page').submit(); 
			
		
	

	
  });

}



  }); 
 
function filterme(mon)
{
	
	//alert(x);
	 var currentYear = (new Date).getFullYear();
	 //jQuery('input#edit-field-classdet-month-group-field-value-value-date').val('2013-0'+mon);
	  document.getElementById('edit-field-classdet-month-group-field-value-value-date').value = '2013-03';
	  jQuery('input#edit-field-classdet-month-group-field-value-value-date').submit();

}