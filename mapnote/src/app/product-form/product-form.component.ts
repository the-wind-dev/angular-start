import { Component, Input } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent{

  productFormGroup = new FormGroup({
    name: new FormControl('default name', [Validators.required, Validators.minLength(4)] ),
    price: new FormControl(null, [Validators.required, Validators.min(0) ]),
    id: new FormControl('default id', Validators.required),
    categories: new FormControl([]),
  })

  onSubmit(): void {
    
    if (this.productFormGroup.invalid) {
      alert('form is invalid')

    } else {
      console.log(this.productFormGroup.value);
    }

    // console.log(this.productFormGroup.value);
  }
  randomStrOfNumbers(): string {
    return Math.ceil(Math.random() * 100).toString();
  }
  generateID(): void {
    
    console.dir(this.productFormGroup);
    this.productFormGroup.patchValue( {id: this.randomStrOfNumbers() });
  }
  
}
