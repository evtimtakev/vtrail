import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {Analysis} from "../data/analysis";

@Component({
  selector: 'vt-analysis-selector',
  templateUrl: './analysis-selector.component.html',
  styleUrls: ['./analysis-selector.component.scss']
})
export class AnalysisSelectorComponent implements OnDestroy {
  public static readonly ANALYSIS: Analysis[] = [
    {name: "Sentiment", value: "s", options: ["negative", "neutral", "positive"]},
    {name: "Categorization", value: "c", options: []}
  ];

  @Output() onSelectedAnalysisChanged: EventEmitter<Analysis> = new EventEmitter<Analysis>();
  @Output() onSelectedAnalysisOptionChanged: EventEmitter<string> = new EventEmitter<string>();

  public selectedAnalysis: Analysis = new Analysis();
  public selectedAnalysisOption: string = "";

  public AnalysisSelectorComponent = AnalysisSelectorComponent;

  public setAnalysis(analysis: Analysis): void {
    this.selectedAnalysis = analysis;
    this.onSelectedAnalysisChanged.emit(analysis);
    this.setAnalysisOption(this.selectedAnalysis.options[0]);
  }

  public setAnalysisOption(analysisOption: string): void {
    this.selectedAnalysisOption = analysisOption;
    this.onSelectedAnalysisOptionChanged.emit(analysisOption);
  }

  ngOnDestroy(): void {
    this.onSelectedAnalysisChanged.complete();
    this.onSelectedAnalysisOptionChanged.complete();
  }
}
