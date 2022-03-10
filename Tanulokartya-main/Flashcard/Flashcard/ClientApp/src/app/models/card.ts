import { Deck } from '../models/deck';

/**
 * Card interface
 */
export interface Card {
    id: number;
    type: string;
    card_number: number;
    question_text: string;
    question_picture: string;
    answer_text: string;
    answer_picture: string;
    question_sound: string;
    answer_sound: string;
    deckId: number;
    deck: Deck;
}
