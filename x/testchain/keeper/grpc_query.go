package keeper

import (
	"github.com/fadeev/testchain/x/testchain/types"
)

var _ types.QueryServer = Keeper{}
