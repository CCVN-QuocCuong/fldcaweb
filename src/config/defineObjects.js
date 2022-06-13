/**
 *  --------------- DEFINE OBJECTS -----------------
 */
const PROJECT = {
  office: null,       // Office (Quick-pick list)
  projectID: null,    // Project ID (alphanumeric keypad)
  name: null,         // Name (alphanumeric keypad)
  location: null,     // Location (alphanumeric keypad).
}

const POINTS = {
  location: null,     // Location (alphanumeric entry, GPS footer icon), 
  type: null,         // Type (Quick-pick list), 
  targetDepth: null,  // Target Depth (numeric entry - with calculator), 
  latitude: null,     // Latitude (numeric entry/populated through Location’s GPS locator), 
  longitude: null,    // Longitude (numeric entry/populated through Location’s GPS locator), 
  elevation: null,    // Elevation (numeric entry/populated through Location’s GPS locator)
}

const LAYER_WORKFLOW = {
  from: null,         // From (numeric entry)
  to: null,           // To (numeric entry)
  type: null,         // Type (numeric entry)
  description: null,  // Description (alphanumeric keypad).
}

const DCP_WORKFLOW = {
  testDepth: null,        // Test Depth (numeric entry)
  testIncrement: null,    // Test Increment (Quick-pick list)
  type: null,             // Type (Quick-pick list or alphanumeric?)
  blowsCounts: null,      // Blows Counts (Quick-pick list)
  termination: null,      // Termination (Quick-pick list) - need to recheck
  remarks: null,          // Remarks (alphanumeric entry)
}

const VANE_WORKFLOW = {
  testDepth: null,        // Test Depth (numeric entry)
  type: null,             // Type (Quick-pick list or alphanumeric?)
  peak: null,             // Peak (divisions) (Numeric entry)
  residual: null,         // Residual (divisions) (Numeric entry)
  utp: null,              // UTP (boolean entry)
  fsd: null,              // FSD (boolean entry)
  status: null,           // Status (not sure this is a QC check baked into the app’s logic or Quick-pick list entry?)
  statusRemarks: null,    // Status Remarks (alphanumeric entry)
  remarks: null,          // Remarks (alphanumeric entry)
  vaneO: null,            // Vane o/ride (not sure about this either).
}

const METHOD_WORKFLOW = {
  method: null,           // Method (Quick-pick list)
  from: null,             // From (numeric entry)
  to: null,               // To (numeric entry)
  length: null,           // Length (calculated field To - From)
  recovery: null,         // Recovery (numeric entry - in percentage)
  rqd: null,              // RQD (numeric entry - in percentage)
  spt: null,              // SPT N (if Method = SPT)
  sample: null,           // Sample (boolean value, Yes if the method is a sample)
  remarks: null,          // Remarks (alphanumeric value).
}

const SAMPLE_WORKFLOW = {
  type: null,             // Type (Quick-pick list entry)
  from: null,             // From (numeric entry)
  to: null,               // To (numeric entry)
  container1: null,       // Container 1 (Quick-pick list entry)
  container2: null,       // Container 2 (Quick-pick list entry)
  container3: null,       // Container 3 (Quick-pick list entry)
  naturalMoistureContent: null,  // Natural Moisture Content (boolean entry)
  atterbergLimits: null,   // Atterberg Limits (boolean entry)
  pSDWetSieve: null,       // PSD Wet Sieve (boolean entry)
  pSDHydrometer: null,    // PSD Hydrometer (boolean entry)
  linearShrinkage: null,   // Linear Shrinkage (boolean entry)
  shrinkSwell: null,       // Shrink Swell (boolean entry)
  uUTriaxial: null,        // UU Triaxial (boolean entry)
  etc: null,               // etc. (other boolean entries).
}

const DISCONTINUITY_WORKFLOW = {
  from: null,             // From (numeric entry)
  to: null,               // To (numeric entry)
  type: null,             // Type (Quick-pick list)
  angleFrom: null,        // Angle From (numeric entry)
  angleTo: null,         // Angle To (numeric entry)
  planarity: null,        // Planarity (Boolean value)
  roughness: null,        // Roughness
  wallStrength: null,     // Wall Strength
  wallWeathering: null,   // Wall Weathering
  aperture: null,        // Aperture
  infillMaterial: null,   // Infill Material
  remarks: null,          // Remarks (alphanumeric value).
}

/**
 * The object level.
 */
const ObjectLevel = {
  Level0: 0,
  Level1: 1,
  Level2: 2,
  Level3: 3
}

export {
  ObjectLevel,
  PROJECT,
  POINTS,
  LAYER_WORKFLOW,
  DCP_WORKFLOW,
  VANE_WORKFLOW,
  METHOD_WORKFLOW,
  SAMPLE_WORKFLOW,
  DISCONTINUITY_WORKFLOW,
}












