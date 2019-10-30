import {Component, Input} from '@angular/core';
import { ShoeService } from '../shoe.service';

@Component({
    selector: 'app-shoe-list',
    templateUrl: './shoe-list.component.html',
    styleUrls: ['./shoe-list.component.css']
})

export class ShoeListComponent{
    shoes;

    constructor(private shoeService: ShoeService)
    {
        this.shoes = shoeService.getShoes();
        for(var i = 0; i < this.shoes.length; i++)
        {
            var sum = 0;
            for(var j = 0; j < this.shoes[i].trueToSizeData.length; j++)
            {
                if (this.shoes[i].trueToSizeData[j] >= 1 && this.shoes[i].trueToSizeData[j] <= 5)
                {
                    sum += this.shoes[i].trueToSizeData[j];
                }
                else
                {
                    sum = 0.0;
                    break;
                }
            }
            if (this.shoes[i].trueToSizeData.length == 0)
            {
                this.shoes[i].trueToSizeCalculation = 0.0;    
            }
            else
            {
                this.shoes[i].trueToSizeCalculation = sum / this.shoes[i].trueToSizeData.length;
            }
        }
    }
}
