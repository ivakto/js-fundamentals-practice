function loadingBars(number) {

   function showLoading(num) {
        let loaded = parseInt(num/10);
        let remain = parseInt((100 - num) / 10);
        let result = `${num}% [` + '%'.repeat(loaded) + '.'.repeat(remain) + ']';
        return result;
   } 

   if (number < 100) {
        console.log(showLoading(number));
        console.log('Still loading...');
   }
   else if (number = 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
}
}

loadingBars(100);