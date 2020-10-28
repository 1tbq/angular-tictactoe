import {
  Component,
  OnInit,
 
} from "@angular/core";

@Component({
  selector: "app-tictactoe",
  templateUrl: "./tictactoe.component.html",
  styleUrls: ["./tictactoe.component.scss"]
})
export class TictactoeComponent implements OnInit {
  constructor() { }
  currentPlayer = "O";
  ngOnInit(): void { }
  won: boolean = false;

  place(box) {
    if (box.toElement.innerHTML != "" || this.won) return;
    box.toElement.innerHTML = this.currentPlayer;
    this.currentPlayer == "O"
      ? (this.currentPlayer = "X")
      : (this.currentPlayer = "O");
    this.checkGameBoard();
  }
  checkGameBoard() {
    for (let i = 0; i <= 2; i++) {
      this.checkWinner(
        (<HTMLInputElement>document.getElementById("0_" + i)).innerText,
        (<HTMLInputElement>document.getElementById("1_" + i)).innerText,
        (<HTMLInputElement>document.getElementById("2_" + i)).innerText
      );
      this.checkWinner(
        (<HTMLInputElement>document.getElementById(i + "_0")).innerText,
        (<HTMLInputElement>document.getElementById(i + "_1")).innerText,
        (<HTMLInputElement>document.getElementById(i + "_2")).innerText
      );
    }
    this.checkWinner(
      (<HTMLInputElement>document.getElementById("0_0")).innerText,
      (<HTMLInputElement>document.getElementById("1_1")).innerText,
      (<HTMLInputElement>document.getElementById("2_2")).innerText
    );
    this.checkWinner(
      (<HTMLInputElement>document.getElementById("0_2")).innerText,
      (<HTMLInputElement>document.getElementById("1_1")).innerText,
      (<HTMLInputElement>document.getElementById("2_0")).innerText
    )
   
  }
  checkWinner(first, second, third) {
    if (first != '' && first == second && first == third) {
     alert('You have won the game!');
      this.won = true;
      this.reset();
    }
  }
  reset(){
    (<HTMLInputElement>document.getElementById("0_0")).innerText='';
    (<HTMLInputElement>document.getElementById("1_0")).innerText='';
    (<HTMLInputElement>document.getElementById("2_0")).innerText='';
    (<HTMLInputElement>document.getElementById("0_1")).innerText='';
    (<HTMLInputElement>document.getElementById("1_1")).innerText='';
    (<HTMLInputElement>document.getElementById("2_1")).innerText='';
    (<HTMLInputElement>document.getElementById("0_2")).innerText='';
    (<HTMLInputElement>document.getElementById("1_2")).innerText='';
    (<HTMLInputElement>document.getElementById("2_2")).innerText='';
  }

}


