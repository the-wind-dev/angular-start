import { Component } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent{
  
  formId: string = '10';

  productFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)] ),
    price: new FormControl(null, [Validators.required, Validators.min(0) ]),
    id: new FormControl(this.formId, Validators.required),
    categories: new FormControl([]),
  })


  onSubmit() {
    if (this.productFormGroup.invalid) {
      alert('form is invalid')
    }
    console.log(this.productFormGroup.controls);

  }
  generateID(): void {
    this.formId = Math.ceil(Math.random() * 100).toString();
    console.log(this.formId);
  }
  
}

// interface Product {
//   name: string,
//   price: number,
//   id: string,
//   categories: string[],
// }
