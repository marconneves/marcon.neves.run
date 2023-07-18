terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.11.4"
    }
    doppler = {
      source  = "DopplerHQ/doppler"
      version = "~> 1.1.6"
    }
  }
}

provider "doppler" {
  doppler_token = var.doppler_token
}

provider "vercel" {
  api_token = var.vercel_token
}