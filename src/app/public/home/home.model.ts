import { ContentModel } from './../../shared/models/content.model';
import { DocumentModel } from './../../shared/models/document.model';

export class HomeDataModel {
    public banner: DocumentModel;
    public eventsButton: DocumentModel;
    public homeButton: DocumentModel;
    public contactButton: DocumentModel;
}

export class HomeModel extends ContentModel {
    public data: HomeDataModel;
}
