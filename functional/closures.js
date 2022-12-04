const y = 'lele';

const f = () => {
  const x = 'lala';
  return () => {
    const z = 'lolo';
    console.log(x,y,z);
  }
};

f()();


// const g = () => {
//   const a = 'lala';
//   console.log(a, y)
//   console.log(a, x)
// };

// g();

/* caso practico */

const auditProps = {
  createdAt : { default : new Date},
  updatedAt : { default : new Date},
  createdBy : { type :  3, ref : 'User'},
  updatedBy : { type :  3, ref : 'User'}
}

const Model = defaultProps => {
  return (name, props) => {
    const schema = {
      ...defaultProps,
      ...props
    }

    return {
      [name] : schema,
    }
  }
}

const withAudit  = Model(auditProps);

console.log(withAudit('Product', {
  name :  'dedos',
  desc : 'personaje locos adams'
}))



