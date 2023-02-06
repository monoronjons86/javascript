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

//২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

function Test(ages){
    let odds=ages%2;
    if( odds==0){
        return true;
    }
    else{
        return false;
    }
}
const oddtext=Test(23);
console.log('hi',oddtext);