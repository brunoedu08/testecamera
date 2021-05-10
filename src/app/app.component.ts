import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { DocumentoDTO } from './documentos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public placa: string;
  public permitirCamera: boolean;
  public tirarFoto: boolean;
  public webcamImage: WebcamImage = null;
  private trigger: Subject<void> = new Subject<void>();


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.placa = this.activatedRoute.snapshot.paramMap.get("placa");
  }


  triggerSnapshot(): void {
    this.trigger.next();
    this.tirarFoto = true;
  }

  handleImage(webcamImage: WebcamImage): void {
    console.info('Saved webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public autorizarCamera() {
    this.permitirCamera = true;
  }

  public salvarFotoFrente() {
    let documentoDTO = new DocumentoDTO();
    documentoDTO.nomeArquivo = "FotoFrente.jpg";
    documentoDTO.conteudoArquivo = this.webcamImage.imageAsBase64;
    documentoDTO.tipo = "DOC_REPRESENTACAO";
    documentoDTO.ctrDthInc = this.setDataInclusaoDocumento();
  }

  private setDataInclusaoDocumento(): string {
    let agora = new Date();
    let timezone = new Date(agora.valueOf() - agora.getTimezoneOffset() * 60000);
    var dataTimezone = timezone.toISOString().replace(/\.\d{3}Z$/, '');
    return (dataTimezone + ".000+0000");
  }

  public tirarOutraFoto() {
    this.permitirCamera = true;
    this.tirarFoto = false;
    this.webcamImage = null;
  }

}
