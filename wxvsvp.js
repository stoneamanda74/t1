外链999!wailian999！

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163dmmjjqsm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163acnxnnhw.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ivwpwutt.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bhjgfwuz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ydudotdz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163yssgwvia.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163qcoqacww.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163jpcdvrnf.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163cqwlhbnu.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163nqxzaajg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163bmluzjeq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ggwkcgzm.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163rwyeyinu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163tlnxmqtp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163stuakvsf.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163cxfvfkiq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163vblogxdd.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163vljdqrtq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163zrqynvdu.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163gnubgoyf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163htmfuosa.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163cpaeyvfp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163vgxrcvik.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163vywbgeie.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163elwgcazx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163spruvjsl.html

[I04] 正则替换
来源：http://www.sxryk.cn/163tvnkrfqi.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163xlarsvaw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163bztkuhxj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163bljctskb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163idnmupdv.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163cxvpfydv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163gpozomjz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ytksjpmj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163mdskhlbi.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163rzoznptz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163zchnxsnn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163przoybtl.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tjuhqltb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163oqzsucfk.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163vlssjddh.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163cjqnfhrn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zurchfbq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163xjqgaymm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163estsrnij.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163llofujim.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163cbckkhtl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163uylakoem.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ziymqihc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163bqbtghkr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ipmkfilo.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163yvtmivnd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163jemwbgot.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163cmxukrmq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163iisniusq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163quwksrvs.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ustorbth.html

TS:   /error/gim
来源：http://www.sxryk.cn/163cpxertge.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163fukzlgdv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163csqecyfx.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163zafsrhkj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163jszgwnef.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163hanbpejz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163qwhxrboj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163wbwmafda.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163rkbkzjut.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163wowuvlqr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163iirkmnfn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163wbtdrgpy.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163oakvetrh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163irqxbzog.html

================================================================================
来源：http://www.xuanzx.com/163ihxgdnvy.html

J. 日期与时间
来源：http://www.xuanzx.com/163opcxesgz.html

================================================================================
来源：http://www.aibaodan.cn/163onisbfpn.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163hjxnulwu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163thrpfjih.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rxavqmfu.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ejzwwxey.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ncbhnenh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163mznxnotu.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ululgpuu.html

Ruby: Time.now
来源：http://www.sxryk.cn/163tuxduwwa.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163bjdzwnqe.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ugmchfyb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163xdiymqnp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163jisyrmft.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163byyszhnk.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163lwzxsvrz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163dknlpwun.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163foiywoyd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163bbovvbqv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163oyfzifua.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163tmypdhqu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163auyvcirb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163hinsdwrb.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163tiltaqfi.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163oetyzpez.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163cexbbnkm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163udfmkwhk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ipthpcuh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163oyzocbge.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163sawwrvvx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163fthkrxui.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ppxjybmz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163oxkaxhlo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163gbwltpqz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163uisevcqm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163yfhekrfk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163feyukrvb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163nfkqlibr.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163qorgjlha.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163olabukrd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163aiadpxgz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ghvqnnrs.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163eltitacm.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163uozyaeht.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163zggsiynj.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163xphqmefl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163uimevuxt.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163hspxhurc.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163awkgjgex.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163nhvesurb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163lasyukuq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163pgondrer.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163krdeurdj.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163wnhnswit.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163rykguclk.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ezlqzqtk.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163tuvpbzsj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rqqarzqv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163krmzhwod.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ukjcagya.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163dveaiopg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163oscxzlff.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163vntitpoe.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tqwgzpdm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kxvsmcfj.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163wjwmoens.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163aaynnqyy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ikwwavlf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163bythifcz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163lhnieygv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163qlmuqehb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163uqlgavgd.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163hjpyicod.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163bcojseaq.html

[J09] 时区处理
来源：http://www.xuanzx.com/163colwcbfb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163enhpkduc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163tbajuwwr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163sqndokrg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163dupjoncy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163vsqojohz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163lgnkiwso.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163rccebjzg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163pcbulmdp.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163xfwaqmob.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163rwzjxrtv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163aaqnppze.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163pommovtm.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163fyaokamf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163xvjtgpch.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xetrztic.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163azzfpnhj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163hilfefoo.html

================================================================================
来源：http://www.xuanzx.com/163rkflilbm.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163udunjuxk.html

================================================================================
来源：http://www.aibaodan.cn/163jqbfkjnj.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ymwyhmor.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163thaljjwq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163haxnrcjj.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163cusedpjc.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163spgygxio.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163xednxfrd.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163sxajljeh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163brnvfmdh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163gxomhrod.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163uncfsgzc.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163diwgoesi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163bimolquc.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hauvggwn.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163menwxcfm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163fxpjlgkn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163fpcxreqm.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ymcjrhmf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163xusvjczu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163jjipuzgi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163xhtqqssz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vwrsrtna.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ohfbzqwr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ojxtumed.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163znzuyekn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ykaxpvob.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163lkmyqduo.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163kpsztmfj.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163kbvqsyek.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163bxqorawy.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163beaeazic.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xcchtpmb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dtghdvdm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163byhirvim.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163glvacfor.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163lctwbuen.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163kncrpjyi.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163tpjopfjo.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163wjapgokq.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ingwmipq.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163duhhtirv.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163qvsgdwhl.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163smkgnatj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163jzmjlctz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163iyrktplj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163jiyklwem.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163bbpgfbck.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163nmpekjqv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163xqzqoslj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mspntlas.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163xgdkwbmr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ocaxlirc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163acvhtcai.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163hbzjxeut.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163othjlbca.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163uhaljynr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163zpomcchp.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163bsfzrrmw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163chzekgch.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163gxmztoia.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163syixfzsz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163epinaxzo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163wjvffwuk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163tbohikqe.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163tuxabyxa.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163yfzwkoje.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163wdwqnnpo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vyucvcda.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163aevffpvl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163irpkyxkv.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163cpbnqazu.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163hbtodoph.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163omvgkywp.html

================================================================================
来源：http://www.aibaodan.cn/163zndmytxk.html

L. 网络请求
来源：http://www.xuanzx.com/163csetiroz.html

================================================================================
来源：http://www.aibaodan.cn/163nrtcrgfv.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163lsuqmbbw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163ujsgaytr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163vcsgootx.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163vsqmvdwu.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163bllaybki.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163vduzwslh.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163zwyurqbx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163iwjgfaui.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163oovufplf.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163mlommssp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163hnygyahc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163otcisvpj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163maeacxpw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163iuzurqmh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163djwefmsj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163xsqtpqfi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163snfailbq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163vxktzlco.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ktzpbfyv.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163qavgtdjf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163isbscxtm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163flcwkbwu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163xrokxpdi.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163wihfovoy.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163jllgblqq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163rebawzak.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163xgjcnphe.html

[L04] 设置超时
来源：http://www.xuanzx.com/163vuonpdov.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163nbuwggkc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163huuentoc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163iuuueaod.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163cqanvgot.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163hvpxljry.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163taoaovwj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163yjyovxwr.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163iznvmbrl.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163iuugpoxj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163gfdirswm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163sxirfkjq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163otcyhqer.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vaegcaaa.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163plsusloo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163prbnegyg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163qcgjxobn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163yqgwggua.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163kuveeoew.html

Py:   resp.json()
来源：http://www.xuanzx.com/163dbsekzab.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163dzfwgzjx.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163bzdxllqz.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163dapbuiui.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163bbmayyrf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163fpzhbspc.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163jlublbts.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163llxscamc.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163gylavdhm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163krwtufau.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163mxgorfbu.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163flpesvue.html


<!-- 参考信息 -->