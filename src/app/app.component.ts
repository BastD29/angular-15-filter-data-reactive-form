import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Item {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form!: FormGroup;
  items!: Item[];
  data: {
    optionId: number;
    title: string;
  }[] = [
    {
      title: 'Data 1',
      optionId: 1,
    },
    {
      title: 'Data 2',
      optionId: 1,
    },
    {
      title: 'Data 3',
      optionId: 2,
    },
    {
      title: 'Data 4',
      optionId: 3,
    },
    {
      title: 'Data 5',
      optionId: 2,
    },
  ];

  public filteredData: any[] = this.data;

  constructor(private fb: FormBuilder) {
    this.items = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
    ];
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      selectedItem: [''],
    });

    this.form.get('selectedItem')?.valueChanges.subscribe((value) => {
      this.filteredData = this.data.filter((item) => {
        console.log('--value--', value);
        console.log('--item--', item);
        return value ? item.optionId === Number(value) : item;
      });

      console.log(this.filteredData);
    });
  }
}
