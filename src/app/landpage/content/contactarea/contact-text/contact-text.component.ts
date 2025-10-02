import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-text',
  templateUrl: './contact-text.component.html',
  styleUrls: ['./contact-text.component.scss'],
  standalone: true,
  imports: [],
})
export class ContactTextComponent implements AfterViewInit {
  paragraphs = [
    'Entre em contato com a gente, venha fazer parte do que tem de melhor no mercado de construção e arquitetura.',
    // 'Nossa equipe está pronta para oferecer soluções personalizadas e eficientes.',
    // 'Comprometimento com qualidade e inovação são a base do nosso trabalho.',
    // 'Juntos, construímos projetos que fazem a diferença.'
  ];

  private typingSpeed = 50; // Velocidade de digitação
  private clearDelay = 3000; // Tempo antes de apagar o texto (3 segundos)

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const paragraphElement = this.el.nativeElement.querySelector('.paragraph');
    this.typeParagraphInLoop(paragraphElement, 0, 0);
  }

  private typeParagraphInLoop(paragraphElement: HTMLElement, currentParagraphIndex: number, currentCharIndex: number): void {
    if (currentParagraphIndex >= this.paragraphs.length) {
      currentParagraphIndex = 0; // Reinicia o loop quando chegar ao final
    }

    const currentParagraph = this.paragraphs[currentParagraphIndex];

    if (currentCharIndex < currentParagraph.length) {
      paragraphElement.textContent = currentParagraph.substring(0, currentCharIndex + 1);
      setTimeout(() => {
        this.typeParagraphInLoop(paragraphElement, currentParagraphIndex, currentCharIndex + 1);
      }, this.typingSpeed);
    } else {
      // Após a conclusão do parágrafo, aguarda e apaga o texto
      setTimeout(() => {
        this.clearText(paragraphElement);
        setTimeout(() => {
          this.typeParagraphInLoop(paragraphElement, currentParagraphIndex + 1, 0);
        }, this.typingSpeed); // Inicia o próximo parágrafo
      }, this.clearDelay);
    }
  }

  private clearText(paragraphElement: HTMLElement): void {
    paragraphElement.textContent = ''; // Limpa o texto
  }
}
