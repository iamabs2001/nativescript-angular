import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: `
    <StackLayout>
        <Button text="text-alignment" [nsRouterLink]="['button-text-alignment']"></Button>
     </StackLayout>
    `,
})
export class ButtonMainPageComponent { }
