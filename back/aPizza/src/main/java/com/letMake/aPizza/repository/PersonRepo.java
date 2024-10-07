package com.letMake.aPizza.repository;

import com.letMake.aPizza.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepo extends JpaRepository<Person, Integer> {}
