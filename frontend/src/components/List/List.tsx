import { Button } from "@mui/material";
import { Teacher } from "../../@types/teacher";
import { FormatterService } from "../../services/FormatterService";
import { ListStyled, ListItem, ItemName, ItemPicture, Info, ItemDescription, ItemValue, EmptyList } from "./List.style";

interface ListProps {
    teachers: Teacher[],
    onSelect: (teacher: Teacher) => void
}

const List = (props: ListProps) => {
    return (
        <div>
            {props.teachers.length > 0 ? (
                <ListStyled>
                    {props.teachers.map(teacher => (
                        <ListItem key={teacher.id}>
                            <ItemPicture src={teacher.picture}></ItemPicture>
                            <Info>
                                <ItemName>{teacher.name}</ItemName>
                                <ItemValue>{FormatterService.currency_value(teacher.hourly_wage)}/hora</ItemValue>
                                <ItemDescription>{FormatterService.limit_text(teacher.description, 10)}</ItemDescription>
                                <Button onClick={() => props.onSelect(teacher)} sx={{ width: '70%' }}>Schedule Class</Button>
                            </Info>
                        </ListItem>
                    ))}
                </ListStyled >
            ) : (
                <EmptyList>Teachers not found</EmptyList>
            )};
        </div>
    )
}

export default List;