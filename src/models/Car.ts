export interface Car {
    id: number;
    make: string;
    model: string;
    img_url: string;
    rrp: number;
    summary: string;
    carwow_rating: number;
    available_colors?: string[];
    recommended_engine?: string;
}
