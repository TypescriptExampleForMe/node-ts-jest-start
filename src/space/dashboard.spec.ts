import { Alien, lifeForms} from './dashboard';

describe('tests for Alien class',()=>{
    test('greet returns correct value',()=> {
        // Arrange
        const alf = new Alien(100) ;
        // Act
        const expected = alf.greet(lifeForms.martian);
        // Assert
        expect(expected).toBe(`Greeting a Martian`);
    })
})