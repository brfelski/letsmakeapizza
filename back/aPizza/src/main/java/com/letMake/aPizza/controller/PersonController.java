package com.letMake.aPizza.controller;

import com.letMake.aPizza.entity.Person;
import com.letMake.aPizza.service.PersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/person/v1")
@RequiredArgsConstructor
@Validated
@CrossOrigin(origins = {"http://localhost:5173"})
public class PersonController {

    private final PersonService personService;

    /**
     * This method is invoked when a request is made through GET
     * @return List of all Person saved in Database
     */
    @GetMapping("/")
    public ResponseEntity<List<Person>> getAllPersons(){
        return ResponseEntity.ok().body(personService.getAllPerson());
    }

    /**
     * This method is invoked when a request is made through POST
     * @param person - Person entity in request body
     * @return Saved Person entity
     */
    @PostMapping("/")
    public ResponseEntity<Person> savePerson(@RequestBody Person person){
        return ResponseEntity.ok().body(personService.savePerson(person));
    }


    /**
     * This method is invoked when a request is made through GET
     * @param sequence - Person sequence to delete
     * @return a successful message
     */
    @DeleteMapping("/{PersonSequence}")
    public ResponseEntity<String> deletePersonBySequence(@PathVariable Integer sequence){
        personService.deletePersonBySequence(sequence);
        return ResponseEntity.ok().body("Deleted successfully");
    }

}
