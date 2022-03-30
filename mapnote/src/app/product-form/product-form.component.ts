import { Component, Input } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent{

  formId = '10';

  product: Product = {
    name: 'default name',
    price: null,
    id: 'default id',
    categories: [],
  }
  

  productFormGroup = new FormGroup({
    name: new FormControl(this.product.name, [Validators.required, Validators.minLength(4)] ),
    price: new FormControl(this.product.price, [Validators.required, Validators.min(0) ]),
    id: new FormControl(this.product.id, Validators.required),
    categories: new FormControl([]),
  })

  
  refreshProduct() {
    for (let key in this.product) {
      this.product[key] =  this.productFormGroup.controls[key].value;
    }
  }

  onSubmit() {
    this.refreshProduct();
    if (this.productFormGroup.invalid) {
      alert('form is invalid')
    } else {
      
      console.log(this.product);
    }
    
    // this.makeProduct();
    console.log(this.product);
    // console.log(this.productFormGroup.controls);
    

  }
  generateID() {
    this.product.id = Math.ceil(Math.random() * 100).toString();
    // this.formId = Math.ceil(Math.random() * 100).toString();

    // this.refreshProduct();
    console.log(this.product.id);
    // console.log(this.productFormGroup.controls.id.value);
    // console.log(this.product);
  }
  
}

interface Product {
  name: string,
  price: number,
  id: string,
  categories: string[],
}
