package com.letMake.aPizza.service;

import com.letMake.aPizza.entity.Person;
import com.letMake.aPizza.repository.PersonRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class PersonService {

    private final PersonRepo personRepo;

    public List<Person> getAllPerson(){
        return personRepo.findAll();
    }

    public Person savePerson(Person person) {
        Person savedPerson = personRepo.save(person);
        log.info("Person {} saved successfully",person.getPersonSequence());
        return savedPerson;
    }

    public void deletePersonBySequence(Integer personSequence){
        personRepo.deleteById(personSequence);
        log.info("Person {} deleted successfully",personSequence);
    }

}
