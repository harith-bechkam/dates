const usergroup = async (req, res) => {
            try {
                var s = "2022-12-30", s1 = "2022-10-30"

                var result = {}
                // difference between two days
                var date1 = moment(s);
                var date2 = moment(s1);
                var days = date1.diff(date2, 'days')
                console.log(days)
                result['ans1'] = days

                //curr date after n days
                var n1 = moment()
                console.log(moment(n1).add(5, 'days').toString());
                result['ans2'] = moment(n1).add(5, 'days').toString()

                var n = new Date()
                console.log(n.getDate() + 5)
                result['ans3'] = n.getDate() + 5

                res.status(200).json({
                    result
                })
            }
            catch (err) {
                console.log(err)
                res.status(400).json({ err })
            }
        }
