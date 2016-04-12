/**
 * Created by hjzheng on 16/4/12.
 */
class CompareNumber {

    compare(input, answer){

        if(input === answer){
            return "4A0B";
        } else {

            let A = 0;
            let B = 0;

            let rest = [];
            let ins = input.split("");
            let ans = answer.split("");

            for(let i=0; i<4; i++){
                if(ins[i] === ans[i]){
                    A = A+1;
                } else {
                    rest.push(ins[i]);
                }
            }

            rest.forEach(function(num){
                if(ans.indexOf(num) !== -1){
                    B = B + 1;
                }
            });

            return A + "A" + B + "B";
        }
    }

}

class AnswerGenerator {
    random(){
        return "1234";
    }
}

export {CompareNumber, AnswerGenerator};