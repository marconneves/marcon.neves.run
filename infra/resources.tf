resource "vercel_project" "project" {
  name      = var.project_name
  framework = "nextjs"
}

data "doppler_secrets" "this" {
  config  = local.settings.doppler_config
  project = var.doppler_project
}

resource "vercel_project_environment_variable" "variables" {
  for_each = nonsensitive(data.doppler_secrets.this.map)

  project_id = vercel_project.project.id
  key        = each.key
  value      = each.value
  target     = ["production", "preview", "development"]
}

data "vercel_project_directory" "project_directory" {
  path = "../"
}

resource "vercel_deployment" "deployment" {
  project_id  = vercel_project.project.id
  files       = data.vercel_project_directory.project_directory.files
  path_prefix = "../"
  production  = true
}

resource "vercel_project_domain" "domain" {
  project_id = vercel_project.project.id
  domain     = var.domain_deploy
}