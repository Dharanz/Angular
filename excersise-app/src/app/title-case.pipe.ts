import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {

  let prepositions=[
    'of', 
    'the'
  ];

    if(!value) return null;

    let words=value.split(' ');
    for(var i=0; i<words.length;i++){
      if(prepositions.includes(words[i].toLowerCase())){
        words[i]=words[i].toLowerCase();
      }else{
        words[i]=words[i].substr(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
      }
    }
      return words.join(' ');
  }

}
