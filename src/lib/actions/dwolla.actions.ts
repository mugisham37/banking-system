'use server';

// Temporary Dwolla actions until the actual implementation is provided
export const createDwollaCustomer = async (customerData: NewDwollaCustomerParams) => {
  try {
    console.log('Creating Dwolla customer:', customerData);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return a mock customer URL
    return `https://api-sandbox.dwolla.com/customers/mock-customer-id-${Date.now()}`;
  } catch (error) {
    console.error('Error creating Dwolla customer:', error);
    throw error;
  }
};

export const addFundingSource = async (params: AddFundingSourceParams) => {
  try {
    console.log('Adding funding source:', params);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return a mock funding source URL
    return `https://api-sandbox.dwolla.com/funding-sources/mock-funding-source-id-${Date.now()}`;
  } catch (error) {
    console.error('Error adding funding source:', error);
    throw error;
  }
};

export const createTransfer = async (params: TransferParams) => {
  try {
    console.log('Creating transfer:', params);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return a mock transfer URL
    return `https://api-sandbox.dwolla.com/transfers/mock-transfer-id-${Date.now()}`;
  } catch (error) {
    console.error('Error creating transfer:', error);
    throw error;
  }
};
