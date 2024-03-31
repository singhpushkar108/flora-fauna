import { Component, OnInit , ViewChild, ElementRef,Renderer2} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent implements OnInit{
  @ViewChild('form') form!: ElementRef;

  public aboutPort:any =[{opt: "Press Release", route:"/press_release"},
                        {opt:"Press office", route:"/press_office"},
                        {opt:"Contact us", route:"/contact_us"}];

  public discoverContent: any = [{opt: "Journals A-Z", route:"/journals"},
                                {opt:"Articles by subject", route:"/articles"},
                                {opt:"Protocol Exchange", route:"/protocol_exc"},
                                {opt:"Nature Index", route:"/nature_index"}
                                ];

  public publishPolicy: any = [{opt: "Nature portfolio policies", route:"/nature_policies"},
                                {opt:"Open access", route:"/open_access"},
                                ];

  public researchServices :any = [{opt: "Reprints & permissions", route:"/permission"},
                                  {opt:"Research data", route:"/research_data"},
                                  {opt:"Language editing", route:"/lang_edit"},
                                  {opt:"Scientific editing", route:"/scientific_edit"},
                                  {opt:"Nature Masterclasses", route:"/masterclass"},
                                  ];

  public baseline : any = [{opt: "Privacy Policy", route:"/privacy_policy"},
                            {opt: "Use of cookies", route:"/cookie_usage"},
                            {opt: "Your privacy choices/Manage cookies", route:"/privacy_cookies"},
                            {opt: "Legal notice", route:"/legal_notice"},
                            {opt: "Accessibility statement", route:"/accessibility"},
                            {opt: "Terms & Conditions", route:"/terms&conditions"},]

  public headerMenus = [
    {route:'/weather', name:'Weather'},
    {route:'/news', name:'News'},
    {route:'/about', name:'About'},
  ];

  options:any={};

  constructor(
    public dialog: MatDialog,
    private renderer: Renderer2,
    private router:Router,
  ){

  }


  ngOnInit(): void {
      this.options.menus = this.headerMenus;
  }

  /* trigFun(option:string){
    switch(option){
      case 'Home':
        console.log('Home is triggered')
        break;
      case 'Help':
        console.log('Help is triggered')
        break;
      case 'About':
        console.log('About is triggered')
        break;
    }
  } */

 submitForm(){

  }

  showForm(){

    // this.form.nativeElement.modal('show');
    this.renderer.addClass(this.form.nativeElement, 'show');
    this.renderer.setStyle(document.body, 'overflow', 'hidden'); // Disable scrolling

   /*  this.dialog.open(this.form, {
      autoFocus: false,
      hasBackdrop: true,
      disableClose: true,
      width: '600px',
      panelClass: 'custom-upload'
    }); */
  }

  hideModal() {
    this.renderer.removeClass(this.form.nativeElement, 'show');
    this.renderer.setStyle(document.body, 'overflow', ''); // Enable scrolling
  }
 
}
