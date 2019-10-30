import {Component, Input} from '@angular/core';
import { ShoeService } from '../shoe.service';

@Component({
    selector: 'app-shoe-list',
    templateUrl: './shoe-list.component.html',
    styleUrls: ['./shoe-list.component.css']
})

export class ShoeListComponent{
    shoes;

    // dependency injection shoeService
    constructor(private shoeService: ShoeService)
    {
        this.shoes = shoeService.getShoes();
        // calculate average of true to size
        for(var i = 0; i < this.shoes.length; i++)
        {
            var sum = 0;
            for(var j = 0; j < this.shoes[i].trueToSizeData.length; j++)
            {
                // data point should be between 1 and 5
                if (this.shoes[i].trueToSizeData[j] >= 1 && this.shoes[i].trueToSizeData[j] <= 5)
                {
                    sum += this.shoes[i].trueToSizeData[j];
                }
                // out of range data point
                else
                {
                    sum = 0.0;
                    break;
                }
            }
            // empty list
            if (this.shoes[i].trueToSizeData.length == 0)
            {
                this.shoes[i].trueToSizeCalculation = 0.0;    
            }
            // non-mepty list
            else
            {
                this.shoes[i].trueToSizeCalculation = sum / this.shoes[i].trueToSizeData.length;
            }
        }
    }
}
