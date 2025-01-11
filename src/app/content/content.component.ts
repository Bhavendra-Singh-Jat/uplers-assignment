import { Component } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-content',
  standalone: false,

  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  selected: number = 1;
  filters = [
    { title: 'E-voucher', },
    { title: 'Product', },
    { title: 'EverGreen', },
    { title: 'faishon and Retail', },
  ];


  itemsSections = [
    { "pk": 1000, "name": "GviARLUL", "points": 333, "display_img_url": "https://images.pexels.com/photos/105006/pexels-photo-105006.jpeg", "quantity": 8, "valid_until": "2025-05-07T16:25:52", "low_quantity": 8 },
    { "pk": 1002, "name": "OZXDPzTd", "points": 352, "display_img_url": "https://images.pexels.com/photos/357155/pexels-photo-357155.jpeg", "quantity": 35, "valid_until": "2025-02-05T17:46:27", "low_quantity": 10 },
    { "pk": 1001, "name": "mLqVzMMo", "points": 230, "display_img_url": "https://images.pexels.com/photos/105006/pexels-photo-105006.jpeg", "quantity": 49, "valid_until": "2025-05-06T17:42:11", "low_quantity": 3 },
    { "pk": 1005, "name": "KhLpPBqp", "points": 374, "display_img_url": "https://images.pexels.com/photos/357155/pexels-photo-357155.jpeg", "quantity": 0, "valid_until": "2025-10-10T14:20:25", "low_quantity": 6 },
    { "pk": 1006, "name": "owrWNmGq", "points": 497, "display_img_url": "https://images.pexels.com/photos/105006/pexels-photo-105006.jpeg", "quantity": 47, "valid_until": "2025-10-30T17:17:10", "low_quantity": 2 },
    { "pk": 1007, "name": "MIAJKTtP", "points": 186, "display_img_url": "https://images.pexels.com/photos/357155/pexels-photo-357155.jpeg", "quantity": 14, "valid_until": "2025-06-21T02:24:59", "low_quantity": 3 },
    { "pk": 1008, "name": "XZPNyqsP", "points": 465, "display_img_url": "https://images.pexels.com/photos/105006/pexels-photo-105006.jpeg", "quantity": 50, "valid_until": "2025-09-16T04:26:43", "low_quantity": 10 },
    { "pk": 1009, "name": "wlPniRXR", "points": 470, "display_img_url": "https://images.pexels.com/photos/357155/pexels-photo-357155.jpeg", "quantity": 2, "valid_until": "2025-07-17T03:44:18", "low_quantity": 7 },
    { "pk": 1010, "name": "PpYnDNAI", "points": 362, "display_img_url": "https://images.pexels.com/photos/105006/pexels-photo-105006.jpeg", "quantity": 40, "valid_until": "2025-12-15T07:55:11", "low_quantity": 6 },
    { "pk": 1011, "name": "mPjaqrOu", "points": 487, "display_img_url": "https://images.pexels.com/photos/357155/pexels-photo-357155.jpeg", "quantity": 44, "valid_until": "2025-08-14T03:44:22", "low_quantity": 7 },
    { "pk": 1012, "name": "bEdIAnMT", "points": 290, "display_img_url": "https://images.pexels.com/photos/105006/pexels-photo-105006.jpeg", "quantity": 42, "valid_until": "2025-04-05T11:51:08", "low_quantity": 2 },
    { "pk": 1013, "name": "lrmJRUfm", "points": 296, "display_img_url": "https://images.pexels.com/photos/357155/pexels-photo-357155.jpeg", "quantity": 7, "valid_until": "2025-02-21T04:24:38", "low_quantity": 7 },
    { "pk": 1014, "name": "WDINPgnQ", "points": 212, "display_img_url": "https://images.pexels.com/photos/105006/pexels-photo-105006.jpeg", "quantity": 33, "valid_until": "2025-02-18T18:50:53", "low_quantity": 7 },
    { "pk": 1015, "name": "TyYbVglI", "points": 451, "display_img_url": "https://images.pexels.com/photos/357155/pexels-photo-357155.jpeg", "quantity": 26, "valid_until": "2025-02-21T16:15:26", "low_quantity": 8 },
    { "pk": 1016, "name": "nuUlvboY", "points": 120, "display_img_url": "https://images.pexels.com/photos/105006/pexels-photo-105006.jpeg", "quantity": 0, "valid_until": "2025-12-12T04:07:34", "low_quantity": 1 },
    { "pk": 1017, "name": "VYCyidjs", "points": 134, "display_img_url": "https://images.pexels.com/photos/357155/pexels-photo-357155.jpeg", "quantity": 23, "valid_until": "2025-12-19T15:42:20", "low_quantity": 8 },
    { "pk": 1018, "name": "FvzyCLPw", "points": 472, "display_img_url": "https://images.pexels.com/photos/105006/pexels-photo-105006.jpeg", "quantity": 15, "valid_until": "2025-02-02T04:24:00", "low_quantity": 6 },
    { "pk": 1019, "name": "HcXtHduA", "points": 163, "display_img_url": "https://images.pexels.com/photos/357155/pexels-photo-357155.jpeg", "quantity": 43, "valid_until": "2025-11-13T15:15:54", "low_quantity": 7 },
    { "pk": 1020, "name": "sdlHrSss", "points": 494, "display_img_url": "https://images.pexels.com/photos/105006/pexels-photo-105006.jpeg", "quantity": 30, "valid_until": "2025-06-30T14:49:09", "low_quantity": 10 },
    { "pk": 1021, "name": "BkThTsnV", "points": 473, "display_img_url": "https://images.pexels.com/photos/357155/pexels-photo-357155.jpeg", "quantity": 32, "valid_until": "2025-10-27T16:49:46", "low_quantity": 7 },
    { "pk": 1022, "name": "NzcIpLzc", "points": 255, "display_img_url": "https://images.pexels.com/photos/105006/pexels-photo-105006.jpeg", "quantity": 13, "valid_until": "2025-11-09T08:58:02", "low_quantity": 6 },
    { "pk": 1023, "name": "YjbnxLhc", "points": 281, "display_img_url": "https://images.pexels.com/photos/357155/pexels-photo-357155.jpeg", "quantity": 33, "valid_until": "2025-08-21T01:09:14", "low_quantity": 5 },
    { "pk": 1024, "name": "JbwQKwqT", "points": 220, "display_img_url": "https://images.pexels.com/photos/105006/pexels-photo-105006.jpeg", "quantity": 32, "valid_until": "2025-09-21T14:54:01", "low_quantity": 9 },
    { "pk": 1025, "name": "qhqeRsOZ", "points": 229, "display_img_url": "https://images.pexels.com/photos/357155/pexels-photo-357155.jpeg", "quantity": 50, "valid_until": "2025-07-13T02:26:18", "low_quantity": 9 },
    { "pk": 1026, "name": "HYKvPPmK", "points": 475, "display_img_url": "https://images.pexels.com/photos/105006/pexels-photo-105006.jpeg", "quantity": 20, "valid_until": "2025-08-19T16:43:25", "low_quantity": 2 },
    { "pk": 1027, "name": "NFurZdXz", "points": 270, "display_img_url": "https://images.pexels.com/photos/357155/pexels-photo-357155.jpeg", "quantity": 23, "valid_until": "2025-01-24T04:13:31", "low_quantity": 6 },
    { "pk": 1028, "name": "wSGNxYJm", "points": 151, "display_img_url": "https://images.pexels.com/photos/105006/pexels-photo-105006.jpeg", "quantity": 6, "valid_until": "2025-02-12T04:05:47", "low_quantity": 1 },
    { "pk": 1029, "name": "csABPfCs", "points": 162, "display_img_url": "https://images.pexels.com/photos/357155/pexels-photo-357155.jpeg", "quantity": 12, "valid_until": "2025-01-20T16:11:35", "low_quantity": 4 }

  ]; //
  expandedIndex = 0;
  closeResult: any;

  constructor(private modalService: NgbModal,) { }

  poupOpenFunction(content: any) {
    this.modalService
      .open(content, {
        windowClass: "radious",
        size: "800px",
        centered: true,
        scrollable: true,
      })
      .result.then(
        (result: any) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason: any) => {
          this.closeResult = `Dismissed ${this.modalService.dismissAll(
            reason,
          )}`;
        },
      );
  }

  applyFilter() {
    this.selected === 1 ? this.itemsSections.sort((a, b) => a.name.localeCompare(b.name)) : this.itemsSections.sort((a, b) => b.name.localeCompare(a.name));
    this.modalService.dismissAll();
  }
}
