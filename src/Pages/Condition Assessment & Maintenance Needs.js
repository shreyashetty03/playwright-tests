const BasePage = require("./BasePage");
const { expect } = require('@playwright/test');

class SpaceManagement extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;

    // Module locators
    this.ConditionAssessmentAndMaintenanceNeeds = "//span[@class='m-menu__link-text mm-menu-link-text' and text()='Condition assessment and maintenance needs']";

    // Sub module locators
    this.PlanningOfInspection = "div[aria-label='Planning of inspections Process step']";
    this.MaintenanceIncident = "div[aria-label='Maintenance incidents overview Process step']";
    this.ConditionAssessment = "div[aria-label='Condition assessment Process step']";
    this.DataSetup = "div[aria-label='Data setup Process step']";
    this.Configuration = "div[aria-label='Configuration Process step']";

    // Sub Types locators ( Sub module : Planning of Inspection )
    this.PPMRegistration = "div[aria-label='PPM registration Process step item']";
    this.RecurringIncident = "div[aria-label='Recurring incidents Process step item']";

    // Sub Types locators ( Sub module : Maintenance Incident )
    this.MaintenanceIncident = "div[aria-label='Maintenance incidents Process step item']";

    // Sub Types locators ( Sub module : Condition Assessment )
    this.ConditionAssessment = "div[aria-label='Condition assessment Process step item']";
    this.ConditionRegistration = "div[aria-label='Condition registrations Process step item']";
    this.Condition = "div[aria-label='Conditions Process step item']";
    this.FunctionalSystem = "div[aria-label='Functional systems Process step item']";
    this.TechnicalSystem = "div[aria-label='Technical systems Process step item']";
    this.Sensor = "div[aria-label='Sensors Process step item']";

    // Sub Types locators ( Sub module : Data Setup )
    this.ConditionAssessmentType = "div[aria-label='Condition assessment types Process step item']";
    this.StandardCondition = "div[aria-label='Condition assessment templates Process step item']";

    // Sub Types locators ( Sub module : Configuration )
    this.AccessConfiguration = "div[aria-label='Access configurations Process step item']";
  } 

  async clickConditionAssessmentAndMaintenanceNeeds() {
    await this.page.waitForTimeout(3000);
    const ConditionAssessmentAndMaintenanceNeeds = this.page.locator(this.humanResources).first();
    await ConditionAssessmentAndMaintenanceNeeds.waitFor({ state: 'attached', timeout: 10000 });
    await ConditionAssessmentAndMaintenanceNeeds.evaluate((node) => node.click());
  }

    // Navigate to sub modules
    async gotoPlanningOfInspection() {
        await this.page.locator(this.PlanningOfInspection).waitFor({ state: 'visible', timeout: 5000 });
         await this.page.locator(this.PlanningOfInspection).click();
    } 

    async gotoMaintenanceIncident() {
        await this.page.locator(this.MaintenanceIncident).waitFor({ state: 'visible', timeout: 5000 });
        await this.page.locator(this.MaintenanceIncident).click();
    }

    async gotoConditionAssessment() {
        await this.page.locator(this.ConditionAssessment).waitFor({ state: 'visible', timeout: 5000 });
        await this.page.locator(this.ConditionAssessment).click();
    }   

    async gotoDataSetup() {
        await this.page.locator(this.DataSetup).waitFor({ state: 'visible', timeout: 5000 });
        await this.page.locator(this.DataSetup).click();
    }

    async gotoConfiguration() {
        await this.page.locator(this.Configuration).waitFor({ state: 'visible', timeout: 5000 });
        await this.page.locator(this.Configuration).click();
    }

    // Navigate to sub types in Planning of Inspection
    async gotoPPMRegistration() {
      await this.page.locator(this.PPMRegistration).waitFor({ state: 'visible', timeout: 5000 });
      await this.page.locator(this.PPMRegistration).click();
    }    

    async gotoRecurringIncident() {
      await this.page.locator(this.RecurringIncident).waitFor({ state: 'visible', timeout: 5000 });
      await this.page.locator(this.RecurringIncident).click();
    }

    // Navigate to sub types in Maintenance Incident
    async gotoMaintenanceIncident() {
        await this.page.locator(this.MaintenanceIncident).waitFor({ state: 'visible', timeout: 5000 });
        await this.page.locator(this.MaintenanceIncident).click();
        }

    // Navigate to sub types in Condition Assessment
    async gotoConditionAssessment() {
        await this.page.locator(this.ConditionAssessmentType).waitFor({ state: 'visible', timeout: 5000 });
        await this.page.locator(this.ConditionAssessmentType).click();
    }

    async gotoConditionRegistration() {
        await this.page.locator(this.ConditionRegistration).waitFor({ state: 'visible', timeout: 5000 });
        await this.page.locator(this.ConditionRegistration).click();
    }

    async gotoCondition() {
        await this.page.locator(this.Condition).waitFor({ state: 'visible', timeout: 5000 });
        await this.page.locator(this.Condition).click();
    }       

    async gotoFunctionalSystem() {
        await this.page.locator(this.FunctionalSystem).waitFor({ state: 'visible', timeout: 5000 });
        await this.page.locator(this.FunctionalSystem).click();
    }   

    async gotoTechnicalSystem() {       
        await this.page.locator(this.TechnicalSystem).waitFor({ state: 'visible', timeout: 5000 });
        await this.page.locator(this.TechnicalSystem).click();
    }

    async gotoSensor() {
        await this.page.locator(this.Sensor).waitFor({ state: 'visible', timeout: 5000 });
        await this.page.locator(this.Sensor).click();
    }   

    // Navigate to sub types in Data Setup
    async gotoConditionAssessmentType() {
        await this.page.locator(this.ConditionAssessmentType).waitFor({ state: 'visible', timeout: 5000 });
        await this.page.locator(this.ConditionAssessmentType).click();
    }   

    async gotoStandardCondition() {
        await this.page.locator(this.StandardCondition).waitFor({ state: 'visible', timeout: 5000 });
        await this.page.locator(this.StandardCondition).click();
    }   

    // Navigate to sub types in Configuration
    async gotoAccessConfiguration() {
        await this.page.locator(this.AccessConfiguration).waitFor({ state: 'visible', timeout: 5000 });
        await this.page.locator(this.AccessConfiguration).click();
    }

}





