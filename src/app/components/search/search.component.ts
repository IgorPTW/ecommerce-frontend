import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html', // ok
  styleUrl: './search.component.css' // ok
})
export class SearchComponent implements OnInit { // READ!

  constructor(private router: Router) {}

  ngOnInit() { 
  }

  doSearch(value: string) { // ok
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/search/${value}`);
  }
}
