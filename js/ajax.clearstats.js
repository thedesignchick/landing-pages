jQuery(document).ready(function($) { 		// Clears landing page stats $( '.clear_stats' ).on( 'click', function() {			 // define the bulk edit row			var post_id = this.id.replace('lp_clear_','');			var status = 0;	if (confirm('Are you sure you want to delete the ALL of stats for this landing page? (There is no undo) Alternatively you can clear stats per version.')) {	  			jQuery.ajax({			  type: 'POST',			  url: ajaxurl,			  context: this,			  data: {				action: 'lp_clear_stats_action',				j_rules: status,				page_id: post_id			  },			  			  success: function(data){				var self = this;					//alert(data);					// jQuery('.lp-form').unbind('submit').submit();					jQuery(self).hide();					jQuery(self).parent().parent().parent().parent().find(".lp-impress-num, .lp-con-num").text("0");					jQuery(self).parent().parent().parent().parent().find(".cr-number").addClass("cr-empty-0").text("0%");					//alert("Changes Saved! Refresh the page to see your changes");					 },			  error: function(MLHttpRequest, textStatus, errorThrown){				alert("Ajax not enabled");				}			});						return false;		}  		  }); $( 'body' ).on( 'click', '.lp-delete-var-stats', function() {		var post_id = jQuery(this).attr("rel");		var variation_id = jQuery(this).attr('data-vid');		var variation_letter = jQuery(this).attr('data-letter');		var selector = 'li[data-postid=' + post_id + '][data-letter=' + variation_letter + ']';		//console.log(selector);		if (confirm('Are you sure you want to delete stats for variation ' + variation_letter + "?")) {	  			jQuery.ajax({			  type: 'POST',			  url: ajaxurl,			  context: this,			  data: {				action: 'lp_clear_stats_single',				variation: variation_id,				page_id: post_id			  },			  			  success: function(data){				var self = this;					//alert(data);					// jQuery('.lp-form').unbind('submit').submit();					jQuery(self).text("Stats Removed!").css("color", "green").removeClass("lp-delete-var-stats").addClass('lp-clear-success');					jQuery(selector).find(".lp-impress-num, .lp-con-num").text("0");					jQuery(selector).find(".cr-number").addClass("cr-empty-0").text("0%");					jQuery(self).parent().parent().find('.bab-stat-span-impressions, .bab-stat-span-conversions').text("0");					jQuery(self).parent().parent().find('.bab-stat-span-conversion_rate').text("0%");					 },			  error: function(MLHttpRequest, textStatus, errorThrown){				alert("Ajax not enabled");				}			});						return false;		}   });			});