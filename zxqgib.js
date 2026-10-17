外链999!wailian999！

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163qtkzubio.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163loienups.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163skoikijz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163eilzqykg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163onlzuagq.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163tqinplyj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163cqhdyovs.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163sbsxsgmf.html

================================================================================
来源：http://www.sxryk.cn/163jyhiopbo.html

I. 正则表达式
来源：http://www.aibaodan.cn/163jkfsdgbt.html

================================================================================
来源：http://www.sxryk.cn/163yjtqxnbm.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163dtpqpnxk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163trlkmdqy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163symdkzkf.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163idnjepst.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163gmeartxo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163rdggtgam.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163dschjagm.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ihmxacoa.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ezwrwoxo.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163bkmrsmvi.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163cjogkrwc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ewunpkoe.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163rdzgypnu.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ndlnkgbv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163vyphqtdj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163pkmxqraa.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ohivyetb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163hhvaqekl.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163rcksizhe.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163phsmwaic.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163woovqrmy.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163jxofbjmr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163pwrkkkwy.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ieewpyis.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ttakrino.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163senqzett.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163znbwkkwz.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163xmhvjlpu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163numengkc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163yyozrszb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163zgeueuvx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163cxxuqdzp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163jhdldrwp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163vkjorueg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163xroukirq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163vnrdpbaj.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163kleaprbi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ubstaath.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ttqniysd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163gilfshqa.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163pznvwbkj.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163lijblsfd.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163hfurmyap.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vnvhykuo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163yflsajfq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163xevmhbmh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163uarhmgin.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163gyongnlw.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163kxsywrkh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163intmyomx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163widefbnv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ikkpfmbl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163evdaffrf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163iqizgugz.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163vwkgsdiz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ksbmbikd.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163pvmyovix.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163dgxhwyyl.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163bbpxmfly.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163zknigzpm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163tkzbkekq.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ebqqpqeo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163nwckjzvc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163dsisbmht.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163txcetgoz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163nvbofirh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163tuoklpym.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xzaiwwhw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163phiwrlyw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163sbxhryzm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163falduueh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163answtwkp.html

================================================================================
来源：http://www.xuanzx.com/163wrajsnug.html

J. 日期与时间
来源：http://www.xuanzx.com/163cofgbevr.html

================================================================================
来源：http://www.xuanzx.com/163xpsxzdlh.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ektqcdkd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163oeyfivxp.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kwcumnzk.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hsgxflkp.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163aouwxxtf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163kewbzwob.html

Go:   time.Now()
来源：http://www.sxryk.cn/163dnjfjyuk.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163rlwsbcnj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163duadcekx.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ftoxbkit.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bsdtadyh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163unbkukkq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163abxfkksz.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163nwybrfpi.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163meivddeg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163zrwqocop.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xcgmvukw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163bxseeiag.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163uzxawmve.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163dvkgfzat.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ptxttvbq.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163jhjkouil.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zfoneutw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163xjxnbvuu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ofumlgvj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163wzacxlux.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163uhvxxvwm.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163asfckbql.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163btelbbus.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163axjnmwxh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163fihlzlsd.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163hwbiimqz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163mbncynsn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163uzwwoxnh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163idqjfjzh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163fougizsx.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163hnuegsha.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ulgbofzz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163tjnfuqqn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163bkqfpjra.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fbophtht.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163vzbodpkn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163qpjcdlks.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163btzfzgol.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163kvqlwdge.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163hwmdjniz.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163hfweccdk.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163yqqsgtun.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163zivzzwle.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163twagtydu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163hrjisikf.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163qpclskva.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163laqhtjoa.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163rcrsvcit.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163vosnkfgt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gbflvtzq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163jbedqwon.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xtmfdpwz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163occtvyke.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ofajrqxj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163iwruudlj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ydvqqjuc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163nhoelawm.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163vfdjqotr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ptscyyvr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163uqfubwtv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163myrepoye.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163wscnebvu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ycrpboas.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163ygwvemne.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163mqagcayi.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ahyabomy.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163mjbzgxin.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163nuvpqakw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163saphbabk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163jiqqgfgx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zmxxgdiz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163mfkfimkf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ykrqmddq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163efevanjb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163trwglqyw.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163vtqbiuwr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163tfyoarka.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163haixsxwd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163fzoiuiox.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163lpwjmoos.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ticuytkc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163einiirzt.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163bskmiqrm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163rltafxwm.html

================================================================================
来源：http://www.aibaodan.cn/163zqfhuyaw.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163egznsjna.html

================================================================================
来源：http://www.aibaodan.cn/163esjbljko.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163qbxptzou.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163kkacptfk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163bhwjjelz.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dcykwivu.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163itqcgwoi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163nypxtqxy.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163yytgrlyb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ajcigrbf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163nhgkdqee.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ofeabjrv.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163tybmirwr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163hegryelb.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163gljeznxc.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163sllayzpk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163jpkqfzxy.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163agauoyar.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163kfgsvvrs.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163itxfryco.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163qynwuunx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163pkjedveb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163mdzkegba.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163tciczmyg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xqeabkxb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163fxttqtuz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163quzwdcph.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163bfxlqyzb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163hhoxtqnb.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163shnscein.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163tiquckqq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163maurilsg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163lrfyxtcy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vplybemp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163jdjpqkbf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jimnrkbe.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163xwwxfwly.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163mkeohefk.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163pikibutv.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163pnslmwjg.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163jrvsqoai.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163esvzyhzq.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163lfhtgxcl.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163lqkpqsbf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163xbrwktsi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163lrhjnsgt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163fkdmfjxt.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163fhbcliqr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163gfncvtks.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163fmlpnamf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163bordhurx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163dvewmnxr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163gbrufljg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163cfzghaty.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163diwoufuf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163iqgwstdg.html

[K07] 进制转换
来源：http://www.sxryk.cn/163krbixzxh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163xpmzpmor.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163xjzlmash.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163szwnidkq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qzjxkrqm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163kilhmhcn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163wulcwkck.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vellmolk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ipdbfjwg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163nqsjufcu.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ivkfwayl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163jfbzsmui.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163pwvjyrbo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163asxbytaj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163lpaluclx.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163fpueohxd.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163oxwzwkhg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163cysviema.html

================================================================================
来源：http://www.aibaodan.cn/163letxcuir.html

L. 网络请求
来源：http://www.sxryk.cn/163gcorpcur.html

================================================================================
来源：http://www.sxryk.cn/163zveuniiw.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163uoonmydk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163psfjlehf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163raigbnrj.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163swgmxgwz.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163wwzenram.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163lbbsyhdq.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ptvfypue.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163sgdiniua.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ngyjigsf.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163kzbpokax.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163pjcxhess.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163blydykag.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ljuxtfpm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163kkygnwtv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163mdopysnl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163rpqcawou.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163epuxlmhu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163eobcmzsf.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163mpyceriu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163wujaeiip.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163dtqengtn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163rpwyeafd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163kxnwyqpd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163youpulld.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163egwwwaix.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163borzktmk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163kybtcyyq.html

[L04] 设置超时
来源：http://www.sxryk.cn/163idwjojke.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163qfsnihdq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163jhkfdajy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163fjbtbnmv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mkynbjmz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163gjawchbw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163qlvumsub.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163errqxzkq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163pjenvqxs.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163vxxleuei.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163rgfwbxxs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163tdympnlh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163yyggyyhz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xjtrdduk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163kbxwkifw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163pcysyxto.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163dgfxgpin.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163nlhyvdze.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163nyrpvajn.html


<!-- 参考信息 -->