import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {

  ngOnInit(): void {
    $('#mobile_btn ').on('click', function () {
      $("#mobile_menu").toggleClass('active');
      $("#mobile_btn").find('i').toggleClass('fa-x');



    });
  }

}
