var RealEstate = artifacts.require("./RealEstate.sol");

//컨트랙트를 테스트 할 것인데 두 개의 인자(이름, 함수를 받음)
//계정이라는 이름을 콜백으로 받는 함수
contract('RealEstate',function(accounts) {
    var realEstateInstance;
    //전역변수 선언

    //it()을 통해 무슨 내용의 테스트를 할것인지 정의
    it("컨트랙의 소유자 초기화 테스팅", function() {
        return RealEstate.deployed().then(function(instance) {
            //만약 배포가 되었다면 콜백함수로 인스턴스를 받고,
            // 전역변수에 저장, owner를 불러와서 반환
            realEstateInstance = instance;
            return realEstateInstance.owner.call();
        }).then(function(owner) {
            //then 을 통해 owner를 받고 assert 를 이용해서 비교한다. 다르면 에러 메세지 세  가지가 들어온다.
            //리턴된 실제값(소문자) . 대문자화
            //가나슈의 첫 번째 계정(배포할때 쓴 계정)(대소문자) . 대문자화
            //Error msg 적어준다.
            assert.equal(owner.toUpperCase(),accounts[0].toUpperCase()), " owner가 가나슈 계정과 동일하지 않습니다. "
        });
    })
})
