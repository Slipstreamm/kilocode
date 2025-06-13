import { z } from "zod"

import type { Keys, Equals, AssertEqual } from "./type-fu.js"

/**
 * ExperimentId
 */

export const experimentIds = [
	"autocomplete",
	"powerSteering",
	"concurrentFileReads",
	"disableCompletionCommand",
] as const //kilocode_change:autocomplete

export const experimentIdsSchema = z.enum(experimentIds)

export type ExperimentId = z.infer<typeof experimentIdsSchema>

/**
 * Experiments
 */

export const experimentsSchema = z.object({
	powerSteering: z.boolean(),
	concurrentFileReads: z.boolean(),
	autocomplete: z.boolean(), // kilocode_change
	disableCompletionCommand: z.boolean(),
})

export type Experiments = z.infer<typeof experimentsSchema>

type _AssertExperiments = AssertEqual<Equals<ExperimentId, Keys<Experiments>>>
