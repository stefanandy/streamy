package com.streamy.streamy;

import com.streamy.streamy.models.User;
import com.streamy.streamy.repositorys.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import com.streamy.streamy.repositorys.UserRepository;

@SpringBootTest
@DataJpaTest
 public class UserRepositoryTests {

    @Autowired
    public UserRepository repository;

    @Test
    public void findByEmailTest(){
        User user=new User("dan@mail.com","dan","ROLE_MANAGER");
        User userFromDb=repository.findByEmail("dan@mail.com");

        assert(user.getEmail()).equals(userFromDb.getEmail());
    }
}
