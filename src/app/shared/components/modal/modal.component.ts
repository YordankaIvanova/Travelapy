import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'apollo-client/util/Observable';

interface DialogData {
  userName: string;
  password: string;
}

const USER_QUERY = gql`
  query login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      first_name
      last_name
      country
    }
  }
`;

@Component({
  selector: 'trv-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {
  private querySubscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private apollo: Apollo) {}

  ngOnInit() {
  }

  onLogInButtonClick(user, pass) {
    this.querySubscription = this.apollo
      .watchQuery({
        query: USER_QUERY,
        variables: {
          username: user,
          password: pass
        },
      })
      .valueChanges.subscribe(result => {
        // TODO: store data
      });
  }

  onCancelClick(): void {
    this.querySubscription.unsubscribe();
     this.dialogRef.close();
  }
}