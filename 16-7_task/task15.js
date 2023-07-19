function vowelCount(str) {
    str = str.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = {};
    vowels.forEach(function(vowel) {
      let count = 0;
      for (let i = 0; i < str.length; i++) {
        if (vowel === str[i]) {
          count++;
        }
      }
      if (count > 0) {
        result[vowel] = count;
      }
    });
    return result;
  }

  console.log(vowelCount('elie'));