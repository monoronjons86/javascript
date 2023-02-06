//১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

function leapYear(years){
    const remainder=years%4;
    if(remainder==0){
        return true;
    }
    else{
        return false;
    }

}
const thisYear=leapYear(2023);
console.log(thisYear);