$(document).ready(() => {
	var trainee = $('#trainee0');
	parsonalDatas.forEach((data,i) => {
		if(i != 0){
			var newTrainee = trainee.clone(true).removeAttr("id").attr('id', 'trainee' + i);
			newTrainee.children('img').attr('src','resources/' + data.imgPath)
			newTrainee.attr('data-index',i);
			newTrainee.find('#age').text(data.age + '歳 ' + data.prefecture);
			newTrainee.find('#comment').text(data.comment);
			newTrainee.find('#rate').text(data.rate + '%');
			newTrainee.appendTo('.trainees');
		}
	});	  
});
	
$( function() {
	//モーダルが開いた時の処理
	$('#profileModal').on('show.bs.modal', function(event) {
		//モーダルを開いたボタンを取得
		var trainee = $(event.relatedTarget);
		//モーダル自身を取得
		var modal = $(this);
		//data-cusnoの値取得
		var index = trainee.data('index');
		var parsonalData = parsonalDatas[index];
		console.table(parsonalDatas[index]);

		//リセット
		modal.find('#img').attr('src' ,'resources/' + parsonalData.imgPath);
		modal.find('#modal-name').text(parsonalData.name);
		modal.find('#modal-age-prefecture').text(parsonalData.age + '歳　' + parsonalData.prefecture);
		modal.find('#modal-comment').text(parsonalData.comment);
		modal.find('#modal-rate').text(parsonalData.rate);
		modal.find('#modal-nickName').text(parsonalData.nickName);
		modal.find('#modal-age').text(parsonalData.age + '歳');
		modal.find('#modal-blood').text(parsonalData.blood);
		modal.find('#modal-prefecture').text(parsonalData.prefecture);
		modal.find('#modal-gym').text(parsonalData.gym);
		modal.find('#modal-height').text(parsonalData.height + 'cm');
		modal.find('#modal-weight').text(parsonalData.weight + 'kg');
		modal.find('#modal-benchPress').text(parsonalData.benchPress + 'kg');
		modal.find('#modal-deadLift').text(parsonalData.deadLift + 'kg');
		modal.find('#modal-squat').text(parsonalData.squat + 'kg');
		modal.find('#modal-muscle').text(parsonalData.muscle);
	});
});


const parsonalDatas = [
	{
		name:'内藤 哲也'
		,imgPath:'o0300030014316705656.jpg'
		,nickName:'マッチョ'
		,age:34
		,prefecture:'東京'
		,gym:'ゴールドジム越谷店'
		,comment:'筋肉最高'
		,rate:70
		,blood:'A型'
		,height:175
		,weight:78
		,benchPress:105
		,deadLift:150
		,squat:110
		,muscle:'山のような大胸筋'
	}
	,{
		name:'内藤 哲也'
		,imgPath:'5.png'
		,nickName:'マッチョ'
		,age:34
		,prefecture:'東京'
		,gym:'ゴールドジム越谷店'
		,comment:'筋肉最高'
		,rate:70
		,blood:'A型'
		,height:175
		,weight:78
		,benchPress:105
		,deadLift:150
		,squat:110
		,muscle:'山のような大胸筋'
	}
]
