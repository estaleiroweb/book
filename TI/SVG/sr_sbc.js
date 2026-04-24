addEventListener("DOMContentLoaded", (event) => {
	var ifSelected = { 'Device': 0, 'Side': 0, 'Protocol': 0, };
	var objSelected = { 'idSR_Peer': 0, 'idVRF': 0, 'idSBC': 0, 'idLink': 0, };
	var allFields = ['Realm', 'IN_MANIP', 'MANIP_String', 'Trunk_Context', 'Interf', 'VLan', 'IP', 'M',];
	// dataFields[Device(0:SR Peer,1:SR Core,2:SBC)][Side(0:Peer,1:Core)][Protocol(0:SIP,1:RTP)]=[fields]

	var descr = document.querySelector('div.descr');
	var ev = document.querySelector('#ev');
	var arr = document.querySelectorAll('#ev .eqto_event');
	function active(obj) {
		arr.forEach(o => { o.classList.remove('active'); });
		if (obj != undefined) {
			obj.classList.add('active');
		}
	}
	function showTitle(obj, e) {
		var t = obj.getAttribute('title');
		if (t == undefined || t == '') return;
		descr.innerHTML = t;
		descr.classList.add('active');
		posTitle(obj, e)
	}
	function hideTitle(obj, e) {
		descr.classList.remove('active');
	}
	function posTitle(obj, e) {
		descr.style.left = e.pageX + 'px';
		descr.style.top = (e.pageY - 70) + 'px';
	}
	arr.forEach(o => {
		o.addEventListener('click', function (e) { active(o); });
		o.addEventListener('mouseover', function (e) { showTitle(o, e); });
		o.addEventListener('mouseout', function (e) { hideTitle(o, e); });
		o.addEventListener('mousemove', function (e) { posTitle(o, e); });
	});
	// ev.addEventListener('click', function (e) { 
	window.addEventListener('click', function (e) {
		if (!e.target.classList.contains('eqto_event')) active();
	});
	active();
	hideTitle();
});
