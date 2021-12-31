import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <header>
      <mat-toolbar color="primary">
        <a
          mat-stroked-button
          routerLinkActive="active"
          routerLink="users"
          class="nav-link"
        >Users</a>
        <a 
          mat-stroked-button 
          routerLinkActive="active" 
          routerLink="photos"
        >Photos</a>
      </mat-toolbar>
    </header>


    <main class="content">

      <!-- stanga -->
      <aside class="sidebar">
        <router-outlet></router-outlet>
      </aside>
      
      <!-- dreapta -->
      <section class="details">
        <router-outlet name="details"></router-outlet>
      </section>

    </main>

    <!-- <main class="content">
      <router-outlet></router-outlet>
      <router-outlet name="details"></router-outlet>
    </main> -->
  `,
  styles: [
    `
      .content {
        display: flex;
        min-height: calc(100vh - 64px);
      }
      .active {
        border-color: #fff;
      }
      a {
        margin-left: 15px;
      }
      .details {
        width: 100%;
      }
      
    `,
  ],
})
export class AppComponent {}
