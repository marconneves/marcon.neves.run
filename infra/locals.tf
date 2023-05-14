locals {
  development_settings = {
    "doppler_config" : "dev"
  }

  production_settings = {
    "doppler_config" : "prd"
  }
}

locals {
  settings = var.environment != "production" ? local.development_settings : local.production_settings
}