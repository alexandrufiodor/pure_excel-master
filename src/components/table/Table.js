import {ExcelComponent} from '@core/ExcelComponent'

export class Table extends ExcelComponent {
  toHTML() {
    return `
      <div class="excel__table">
        <div class="row">
          <div class="row-info"></div>
          <div class="row-data">
            <div class="column">A</div>
            <div class="column">B</div>
            <div class="column">C</div>
          </div>
        </div>
        <div class="row">
          <div class="row-info">1</div>
          <div class="row-data">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
          </div>
        </div>
        <div class="row">
          <div class="row-info">2</div>
          <div class="row-data">
            <div class="cell selected" contenteditable></div>
            <div class="cell" contenteditable></div>
            <div class="cell" contenteditable></div>
          </div>
        </div>
      </div>
    `
  }
}
