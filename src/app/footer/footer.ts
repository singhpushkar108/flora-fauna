import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {


  public researchServices :any = [{opt: "Reprints & permissions", route:"/permission"},
                                  {opt:"Research data", route:"/research_data"},
                                  {opt:"Language editing", route:"/lang_edit"},
                                  {opt:"Scientific editing", route:"/scientific_edit"},
                                  {opt:"Nature Masterclasses", route:"/masterclass"},
                                  ];

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


  public baseline : any = [{opt: "Privacy Policy", route:"/privacy_policy"},
                            {opt: "Use of cookies", route:"/cookie_usage"},
                            {opt: "Your privacy choices/Manage cookies", route:"/privacy_cookies"},
                            {opt: "Legal notice", route:"/legal_notice"},
                            {opt: "Accessibility statement", route:"/accessibility"},
                            {opt: "Terms & Conditions", route:"/terms&conditions"},]

}
