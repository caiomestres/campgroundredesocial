const mongoose = require('mongoose');
const Campground = require('./models/campground');
const Comment = require('./models/comment');

let data = [
  {
    name: 'Linux',
    image:
      'https://i0.wp.com/itsfoss.com/wp-content/uploads/2017/07/powerpc-linux.jpeg?fit=800%2C450&ssl=1',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio natus blanditiis aut ut, sed nihil id sapiente accusamus eligendi enim dolor cum, obcaecati facere facilis quod hic ipsum consequuntur veritatis tenetur rerum. Perspiciatis, illum incidunt. Repudiandae dolor numquam iusto distinctio ut non, unde odit libero necessitatibus magnam deleniti assumenda vero id eligendi. Et maiores repellat, voluptatum molestias sunt placeat sint!psum dolor sit, amet consectetur adipisicing elit. Consequuntur iste debitis nulla cum quis temporibus, distinctio id quae? Nesciunt harum iure laboriosam, natus ipsa illum minus labore? Autem, ut veritatis officia sed dicta culpa, fugiat architecto voluptatum magni voluptas sit fuga corrupti, reprehenderit tempora animi debitis distinctio! Culpa vel, temporibus dolorum esse, nemo optio laborum ut saepe accusamus, tenetur illum.'
  },
  {
    name: 'Linux1',
    image:
      'https://i0.wp.com/itsfoss.com/wp-content/uploads/2017/07/powerpc-linux.jpeg?fit=800%2C450&ssl=1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptate quas modi dolorum aperiam quae praesentium ex reiciendis, totam placeat omnis. Libero, possimus numquam fugiat molestias reprehenderit consectetur accusamus provident!'
  },
  {
    name: 'Linux2',
    image:
      'https://i0.wp.com/itsfoss.com/wp-content/uploads/2017/07/powerpc-linux.jpeg?fit=800%2C450&ssl=1',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, et consequatur. Soluta nam voluptatem quod nisi vel blanditiis praesentium dolorum maiores! Eaque provident non accusamus, fuga omnis commodi dicta distinctio voluptatum autem magni recusandae assumenda adipisci blanditiis fugiat eligendi error!'
  }
];

let seedDB = () => {
  Campground.remove({}, err => {
    if (err) {
      console.log(err);
    } else {
      console.log('campground removido com sucesso');
      Comment.remove({}, err => {
        err ? console.log(err) : console.log('comments removidos com sucesso');
      });
      data.forEach(seed => {
        Campground.create(seed, (err, campground) => {
          if (err) {
            console.log(err);
          } else {
            Comment.create(
              {
                author: 'Figaro',
                text: 'Figaro figaro fiiiigaro'
              },
              (err, comment) => {
                if (err) {
                  console.log(err);
                } else {
                  campground.comments.push(comment);
                  campground.save();
                  console.log('created a new comment');
                }
              }
            );
          }
        });
      });
    }
  });
};
module.exports = seedDB;
