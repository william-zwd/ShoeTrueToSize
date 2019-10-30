import { ShoeListComponent } from "./shoe-list.component";

class MockShoeServiceEmptyTrueToSize
{
  public getShoes()
  {
    return [{
        "shoe": "adidas Yeezy",
        "trueToSizeData": [],
        "trueToSizeCalculation": 0.0
    }];
  }
}

class MockShoeServiceRegularTrueToSize1
{
  public getShoes()
  {
    return [{
            "shoe": "adidas Yeezy",
            "trueToSizeData": [1, 2, 2, 3, 2, 3, 2, 2, 3, 4, 2, 5, 2, 3],
            "trueToSizeCalculation": 0.0
        }];
  }
}

class MockShoeServiceRegularTrueToSize2
{
    public getShoes()
    {
        return [{
            "shoe": "adidas Yeezy",
            "trueToSizeData": [1, 2, 2, 3, 2, 3, 2, 2, 3, 4, 2, 5, 2, 3, 2],
            "trueToSizeCalculation": 0.0
        }];
    }
}

class MockShoeServiceErrorTrueToSize
{
  public getShoes()
  {
    return [{
        "shoe": "adidas Yeezy",
        "trueToSizeData": [0, 1, 2, 3, 4, 5, 6],
        "trueToSizeCalculation": 0.0
    }];
  }
}

describe('ShoeListComponent', () => {
    let service0: MockShoeServiceEmptyTrueToSize;
    let service1: MockShoeServiceRegularTrueToSize1;
    let service2: MockShoeServiceRegularTrueToSize2;
    let service3: MockShoeServiceErrorTrueToSize;
    let component: ShoeListComponent;

    
    it('shoeTrueToSizeCalculation should be 0.0 when the data list is empty', () => {
        service0 = new MockShoeServiceEmptyTrueToSize();
        component = new ShoeListComponent(service0);

        expect(component.shoes[0].trueToSizeCalculation).toBe(0.0);
    });    

    it('shoeTrueToSizeCalculation should be 2.5714285714286 when the data list is [1, 2, 2, 3, 2, 3, 2, 2, 3, 4, 2, 5, 2, 3]', () => {
        service1 = new MockShoeServiceRegularTrueToSize1();
        component = new ShoeListComponent(service1);

        expect(component.shoes[0].trueToSizeCalculation.toFixed(13)).toBe("2.5714285714286");
    });    

    it('shoeTrueToSizeCalculation should be 2.5333333333333 when the data list is [1, 2, 2, 3, 2, 3, 2, 2, 3, 4, 2, 5, 2, 3, 2]', () => {
        service2 = new MockShoeServiceRegularTrueToSize2();
        component = new ShoeListComponent(service2);

        expect(component.shoes[0].trueToSizeCalculation.toFixed(13)).toBe("2.5333333333333");
    });    

    it('shoeTrueToSizeCalculation should be 0.0 when the data list contains size < 1 or > 5', () => {
        service3 = new MockShoeServiceErrorTrueToSize();
        component = new ShoeListComponent(service3);

        expect(component.shoes[0].trueToSizeCalculation).toBe(0.0);
    });    
});