/** @format */

import React, { useState, useRef } from 'react';
import moment from 'moment';
import { GetColor, getElementScreenCoordinates } from 'components/Helpers';
import Tooltip from 'components/Tooltip';
import { StyleSheetManager } from 'styled-components';
import {
	CardContainer,
	PriorityLine,
	CardContent,
	TextContent,
	Title,
	DescriptionText,
	Info,
	Priority,
	PriorityLevel,
	Dedline,
	InfoTitle,
	Date,
	IconContainer,
	BellIcon,
	MoveIcon,
	EditIcon,
	DelIcon,
	ButtonBox,
	Button,
} from './Card.styled';
import { useColumns } from 'hooks';

export const Card = ({ item, deleteCard, editCard }) => {
	const { name, priority, deadline, text } = item;
	const [isTooltipOpen, setIsTooltipOpen] = useState(false);
	const [position, setPosition] = useState(null);
	const { allColumns } = useColumns();
	const elementRef = useRef(null);

	const closeTooltip = () => {
		setIsTooltipOpen(false);
	};

	const deadLineString = deadline => {
		if (!deadline || typeof deadline !== 'number') return '--/--/--';
		const date = moment(deadline);
		return date.format('DD/MM/YYYY');
	};

	const active = time => {
		if (!deadline) return 0;
		return moment(time).date();
	};

	const priorityLevel = GetColor(priority);

	return (
		<>
			<StyleSheetManager shouldForwardProp={prop => prop !== 'active' && prop !== 'color'}>
				<CardContainer>
					<PriorityLine style={{ backgroundColor: priorityLevel.color }} />
					<CardContent>
						<TextContent>
							<Title>{name}</Title>
							<DescriptionText>{text}</DescriptionText>
						</TextContent>
						<Info>
							<Priority>
								<InfoTitle>Priority</InfoTitle>
								<PriorityLevel color={priorityLevel.color}>
									{priorityLevel.name}
								</PriorityLevel>
							</Priority>
							<Dedline>
								<InfoTitle>Deadline</InfoTitle>
								<Date>{deadLineString(deadline)}</Date>
							</Dedline>
							<BellIcon
								name='bell'
								active={active(deadline) <= active(moment()) && deadline}
							/>
							<IconContainer>
								<ButtonBox>
									<Button
										ref={elementRef}
										type='button'
										onClick={() => {
											setPosition(getElementScreenCoordinates(elementRef));
											if (allColumns.length > 1) setIsTooltipOpen(true);
										}}
									>
										<MoveIcon name='process-task' />
									</Button>
								</ButtonBox>
								<ButtonBox>
									<Button type='button' onClick={editCard}>
										<EditIcon name='edit' />
									</Button>
								</ButtonBox>
								<ButtonBox>
									<Button type='button' onClick={deleteCard}>
										<DelIcon name='delete' />
									</Button>
								</ButtonBox>
							</IconContainer>
							<Tooltip
								isOpen={isTooltipOpen}
								onRequestClose={closeTooltip}
								card={item}
								position={position}
							/>
						</Info>
					</CardContent>
				</CardContainer>
			</StyleSheetManager>
		</>
	);
};
