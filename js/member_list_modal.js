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

let niceMuscles = [];

$(function() {
	//モーダルが開いた時の処理
	$('#profileModal').on('show.bs.modal', function(event) {
		//モーダルを開いたボタンを取得
		var trainee = $(event.relatedTarget);
		//モーダル自身を取得
		var modal = $(this);
		//data-cusnoの値取得
		var index = trainee.data('index');
		var parsonalData = parsonalDatas[index];

		//リセット
		modal.find('#img').attr('src' ,'resources/' + parsonalData.imgPath);
		modal.find('#muscle-button').attr('data-index',index);
		modal.find('#muscle-button').data('index',index);
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

		//すでにボタンが押されたことのある場合box-big2-niceクラスを付与
		if(niceMuscles.indexOf(index) >= 0){
			$('#muscle-button').removeClass('box-big2');
			$('#muscle-button').addClass('box-big2-nice')
			$('#muscle-button').text('ナイスマッスル！！！');
		}else{
			$('#muscle-button').removeClass('box-big2-nice');
			$('#muscle-button').addClass('box-big2')
			$('#muscle-button').text('マッスル！');
		}
	});

	$('#muscle-button').on('click',function(){
		//すでにボタンが押されたことのある場合処理を行わない
		if(niceMuscles.indexOf($(this).data('index')) >= 0　){
			console.log('押したことあるよ');
			return;
		}
		$(this).removeClass('box-big2');
		$(this).addClass('box-big2-nice')
		$(this).text('ナイスマッスル！！！');
		//初めて押したボタンだった場合配列に追加する
		niceMuscles.push($(this).data('index'));
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
		name:'ジャンボ鶴田'
		,imgPath:'o0300030014316705656.jpg'
		,nickName:'ジャンボ'
		,age:37
		,prefecture:'鹿児島'
		,gym:'ゴールドジム鹿児島店'
		,comment:'筋肉こそ正義'
		,rate:55
		,blood:'A型'
		,height:181
		,weight:86
		,benchPress:125
		,deadLift:160
		,squat:150
		,muscle:'圧倒的な僧帽筋'
	}
	,{
		name:'アントニオ猪木'
		,imgPath:'o0300030014316705656.jpg'
		,nickName:'猪木'
		,age:31
		,prefecture:'神奈川'
		,gym:'ゴールドジム横浜店'
		,comment:'１、２、３、ダー！！'
		,rate:80
		,blood:'A型'
		,height:180
		,weight:90
		,benchPress:135
		,deadLift:140
		,squat:140
		,muscle:'翼の如き背筋'
	}
	,{
		name:'スタンハンセン'
		,imgPath:'o0300030014316705656.jpg'
		,nickName:'ハンセン'
		,age:28
		,prefecture:'群馬'
		,gym:'ゴールドジム草津店'
		,comment:'HAHAHAHA'
		,rate:63
		,blood:'A型'
		,height:173
		,weight:75
		,benchPress:115
		,deadLift:130
		,squat:125
		,muscle:'どエロい腹直筋'
	}
	,{
		name:'武藤敬司'
		,imgPath:'o0300030014316705656.jpg'
		,nickName:'けーちゃん'
		,age:31
		,prefecture:'東京'
		,gym:'ゴールドジム秋葉原店'
		,comment:'ウィィィィィィィィィィ'
		,rate:90
		,blood:'A型'
		,height:186
		,weight:90
		,benchPress:155
		,deadLift:170
		,squat:160
		,muscle:'メロンのようなヒラメ筋'
	}
	,{
		name:'ジャイアント馬場'
		,imgPath:'o0300030014316705656.jpg'
		,nickName:'馬場ちゃん'
		,age:26
		,prefecture:'福岡'
		,gym:'ゴールドジム博多店'
		,comment:'私が神だ'
		,rate:48
		,blood:'A型'
		,height:190
		,weight:87
		,benchPress:145
		,deadLift:140
		,squat:160
		,muscle:'8つに割れた腹筋'
	}
	,{
		name:'初代タイガーマスク'
		,imgPath:'o0300030014316705656.jpg'
		,nickName:'初代'
		,age:38
		,prefecture:'東京'
		,gym:'ゴールドジム神保町店'
		,comment:'パワー！！！'
		,rate:70
		,blood:'A型'
		,height:178
		,weight:81
		,benchPress:125
		,deadLift:130
		,squat:130
		,muscle:'磨き抜かれた上腕二頭筋'
	}
	,{
		name:'小橋健太'
		,imgPath:'o0300030014316705656.jpg'
		,nickName:'けんちゃん'
		,age:22
		,prefecture:'茨城'
		,gym:'ゴールドジムつくば店'
		,comment:'最近筋トレ始めました'
		,rate:70
		,blood:'A型'
		,height:170
		,weight:70
		,benchPress:95
		,deadLift:110
		,squat:100
		,muscle:'鋼のような広背筋'
	}
]
