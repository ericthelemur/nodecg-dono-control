import React from 'react';
import Card from 'react-bootstrap/Card';
import { getAmount, timeFormat, dateFormat } from './utils';
import { Donation } from "../../../../../nodecg-tiltify/src/types/schemas/donations";


interface DonoProp {
    dono: Donation
}


function DonationTitle({ dono }: DonoProp) {
    const amounts = getAmount(dono.amount.currency, dono.amount.value, dono.amountDisplay);
    return (
        <h2 className="h5 card-title">
            <span className="name">{dono.donor_name}</span>{" "}
            <span className="donated">donated</span>{" "}
            <span className="amount">{amounts[0]}</span>{" "}
            <span className="amount amount-gdp">{amounts[1] ? `(${amounts[1]})` : ""}</span>
        </h2>
    )
}


function DonationSubtitle({ dono }: DonoProp) {
    const date = new Date(dono.completed_at);
    return (
        <small className='datetime card-subtitle text-body-tertiary'>
            <span className="time">{timeFormat.format(date)}</span>{" "}
            <span className="date">{dateFormat.format(date)}</span>{" "}
        </small>
    )
}


export function Donation({ dono }: DonoProp) {
    return (
        <Card key={dono.id}>
            <Card.Body>
                <DonationTitle dono={dono} />
                <DonationSubtitle dono={dono} />
                <p className="message card-text">{dono.donor_comment || "No Message"}</p>
            </Card.Body>
        </Card>
    );
}