export function transformSportComplexDetail({ sportComplex, subFields = [], fieldImages = [], fieldTypeConfigs = [], pricingRules = [] }) {
  const rawsc = sportComplex?.toObject?.() ?? sportComplex;
  if (!rawsc) return null;

  const sc = { ...rawsc };
  delete sc.created_at;
  delete sc.updated_at;

  const ownerObj = sc.owner_id?.toObject?.() ?? sc.owner_id;

  const clean = {
    ...sc,
    owner_id: ownerObj ? (() => { const o = { ...ownerObj }; delete o._id; delete o.created_at; delete o.updated_at; return o; })() : null,
    subFields: (subFields || []).map(f => {
      const rawObj = f?.toObject?.() ?? f;
      const obj = { ...rawObj };
      delete obj._id;
      delete obj.created_at;
      delete obj.updated_at;
      return obj;
    }),
    fieldImages: (fieldImages || []).map(img => {
      const rawObj = img?.toObject?.() ?? img;
      const obj = { ...rawObj };
      delete obj._id;
      delete obj.created_at;
      delete obj.updated_at;
      return obj;
    }),
    fieldTypeConfigs: (fieldTypeConfigs || []).map(cfg => {
      const rawObj = cfg?.toObject?.() ?? cfg;
      const obj = { ...rawObj };
      delete obj._id;
      delete obj.created_at;
      delete obj.updated_at;
      return obj;
    }),
    pricingRules: (pricingRules || []).map(rules => (rules || []).map(rule => {
      const rawObj = rule?.toObject?.() ?? rule;
      const obj = { ...rawObj };
      delete obj._id;
      delete obj.created_at;
      delete obj.updated_at;
      return obj;
    }))
  };

  delete clean._id;
  return clean;
}
