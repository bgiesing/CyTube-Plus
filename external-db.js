/* ----- DATABASE CONFIGURATION ----- */

ChannelDatabase=[
['', 'Spagoots: Top Ten Face-Off'],
['https://www.youtube.com/watch?v=UUAKMHKCu2g', 'Top Ten Steven Universe Characters!'],
['https://www.youtube.com/watch?v=5sjGZzUyoCA', 'Top Ten Pixar Films'],
['https://www.youtube.com/watch?v=y7-QQNM00JA', 'Top Ten Disney Films'],
['https://www.youtube.com/watch?v=NQkxNw7zgP4', 'Top Ten Animated Villains'],
['https://www.youtube.com/watch?v=Cl2KAs5LIe0', 'Top Ten Favorite Songs'],
];

/* ----- CREATING DATABASE LAYOUT - DO NOT REMOVE ----- */

dbwrap = $('<div id="dbwrap" class="col-lg-12 col-md-12" style="display:none" />').insertBefore(configwrap);
dbwell = $('<div id="db-well" class="well" />').appendTo(dbwrap);

var item_nr=0;
var layer_nr=1;
var opening=new Array();
var item_count=new Array(0);
var count_nr=0;

if (ChannelDatabase.length<1 || ChannelDatabase[0][0]!="") {
	ChannelDatabase.unshift(['', '(various media)']);
}
UI_ChannelCache=="1" ? createDatabase() : '';

/* ----- END OF FILE ----- */
