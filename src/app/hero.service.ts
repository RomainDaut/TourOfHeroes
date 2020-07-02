import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";
import {Observable, of} from "rxjs";
import {MessageService} from "./messages.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable <Hero[]> {
    //TODO send message after fetching heroes
    this.messageService.add('HeroServices: fetch heroes')
    return of (HEROES)
  }

  constructor(private messageService: MessageService) { }
}
