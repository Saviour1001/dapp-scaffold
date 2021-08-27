use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    log::sol_log_compute_units,
    account_info::{next_account_info,AccountInfo},
    entrypoint,
    entrypoint::ProgramResult, 
    msg,
    program_error::ProgramError, 
    pubkey::Pubkey,
};

// solana_program::declare_id!("BpfProgram1111111111111111111111111111111111");


#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct WeddingAccountInfo {
    /// the String
    pub txt: String,
}

entrypoint!(process_instruction);
pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let accounts_iter = &mut accounts.iter();
    let account = next_account_info(accounts_iter)?;
    let message = WeddingAccountInfo::try_from_slice(instruction_data).map_err(|err|{
        msg!("Receiving message as string utf8 failed, {:?}",err);
        ProgramError::InvalidInstructionData
    })?;
    let data = &mut &mut account.data.borrow_mut();
    data[..instruction_data.len()].copy_from_slice(&instruction_data);

    sol_log_compute_units();
    msg!("{}",message.txt);
    Ok(())
}