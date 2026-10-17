外链999!wailian999！

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ovzpecvv.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163mziwlvux.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163mwhkxzjx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163tfalifek.html

================================================================================
来源：http://www.xuanzx.com/163chztqdwc.html

I. 正则表达式
来源：http://www.sxryk.cn/163noglgagz.html

================================================================================
来源：http://www.aibaodan.cn/163dnvjwvgx.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163hqqdadmy.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163vsljrzaj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ljdrcthq.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rrwbzwsc.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163asleaibx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163lloqojdi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163bbsftrsn.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163jjpwhpyn.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163qlabdkjq.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163qvbyoszi.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163leqfuvjq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163yvzsiqag.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163dyenwdfe.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163zewefswg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163pemfmkhj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163dbcawpkd.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163vmuimxvv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163btubyzqx.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163wjayppzj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163xyuymagw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163apbuojsd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163bihdbogn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163sklwbjld.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163xykmjmgf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163hfoqnime.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163lpbboqsn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ejlkcdim.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163gokxkqec.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ihynzpvb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vzougezm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163gyudoaza.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ixonldjy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163oogdeyus.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163mbyoaaik.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163xhrznnnr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163zrhvqklj.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163zoghccpn.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163jdkbvuxr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163mjiewqiq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163okrawprp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hdfauquh.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163wbaxbjlg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163jmzpzgca.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dxykdniz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163astgckpi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163cbapnvhi.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xfhoqibf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163jlwsipwb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163jsvljduu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163nxrdapya.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163zhwubgif.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163vgqpqnbu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163craugkcg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163cnbhpglv.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163sssktdqg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163zkxidosb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163hwvjzxjq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163abscgtaa.html

TS:   /error/gim
来源：http://www.xuanzx.com/163yncunxfq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163uyopwnms.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163homavsny.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163msvugejz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163anmekotm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163wxyhqein.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ibxfkjkr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163kosjequx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163rfzcvjfh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dbfezlgt.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163hkfzjzcv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163nkknqipi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163imckptbe.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163telihsko.html

================================================================================
来源：http://www.sxryk.cn/163lxlbpmdg.html

J. 日期与时间
来源：http://www.xuanzx.com/163yllymnaw.html

================================================================================
来源：http://www.aibaodan.cn/163cfwjiucb.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163oxuicbez.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163jozpppre.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hzcxudjn.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163okfwhpac.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163zyfmjfvx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163mteqqcpc.html

Go:   time.Now()
来源：http://www.xuanzx.com/163csilqgia.html

Ruby: Time.now
来源：http://www.xuanzx.com/163diaofoft.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163pjtrutsc.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163jllojsiy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hbdmdfyj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163keuwtrzg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163jxbewrfp.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163saweedae.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163dozqjgny.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163mkdxwfmu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hkbvulia.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163pcqvosgg.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163lbnynchu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163zmseuvho.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ddlnbapo.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163gfrysnpe.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163pjfuijhh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163awkwkhmj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163vzrbpslj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xcdvkkpx.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163qlzhmikq.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163flzyetzn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163fxjkgjuw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163jbauwgbh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163rgjttgit.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163mdpuuchw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163xgbwjpcf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163jcegbyms.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163utnyvsoc.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163upeslwcq.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163eggxnczr.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ghjhzbme.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163nerfamlf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163irkjzyre.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163totuoyjp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163gbwwxefn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163dbbafqiw.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163lpphfzry.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163clyfnfzc.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163jkfkajav.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163oynnnovq.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163biguphyg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ltybzqiy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ovkpmrtz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163enhywqtu.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163nlgfiydy.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ahuklvdu.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163gvvzmago.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163bwrbnken.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tslhhqpz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163qhalmoxn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163fwbwiqyi.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163uwwxpyeu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163xapsvghx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163gmmtmpzz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vssjyngx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163llypejus.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ndcrfzne.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163jjjkwhcy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163eomakrpt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163brezngjf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163affoapsi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163nombttnq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163apecpyqk.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163hbvvpwuk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163stmgaurk.html

[J09] 时区处理
来源：http://www.sxryk.cn/163fxyvwecb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163fpvtchqn.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163qpyvegif.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163imnmysyk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163jmawtnqw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163nskfqftu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163opohjrla.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163wqxnzhbr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163zmgmupqz.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163alwsfyct.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163rdflbemf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163motlrigh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163yriagjem.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163uydwsqng.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163odepxpac.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163feyymkyo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163udpvodnz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163mthrjcut.html

================================================================================
来源：http://www.xuanzx.com/163punylwsp.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163mzuqeyjh.html

================================================================================
来源：http://www.sxryk.cn/163xluidjkl.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163wuuaepud.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ungnslyp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163esqhtnfo.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nhbvnboh.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ynbphrtk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163jtrjpsmu.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163nwztspxo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163hyltgeau.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163iocnvvsm.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163zoactegm.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163pzjdusui.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163dsolqiqu.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163idyipqya.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hlumhqiw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163vbtowjkj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163uqxejgxx.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163xnheknto.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ovtiadyw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163qnqxdgwl.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163rvnacbbd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163zisikkpd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ftqjkhuv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163lnnptffs.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163zicnqdqd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163dodyeinn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163yajemhki.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163qwkguloc.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163aphyjals.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163fgdxpcsf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163kuzvyhdu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jhvywmyo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163dtgzzbju.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163hjnmkpbm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ouqeakvt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163kxpbhjkn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jwhrxmbp.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163zofgiawo.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163auwpwqxd.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163avvkmmjn.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dkcpncwu.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163mapuhpod.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163hnumyold.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163nhzcmxgh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163crcxrlxw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163lpzlxize.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163homwmgir.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163kihindsq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163wzeeiwso.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163bjkxgqtd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ojqoapag.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163pvcochnh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163vedkjvky.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163hpzzbfmw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163gulovydc.html

[K07] 进制转换
来源：http://www.xuanzx.com/163nivwsxsh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163bbxcekqd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163vvaqeflg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163irltouwc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163smxesdyg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xkovkcab.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163mpdxtjlh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163wjmglzok.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163owrcbxyw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ipxvvanu.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ncqnbbjo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163hnkzaxzx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163tfazbqjf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ltdmbwhp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163fbvyuldk.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163xezirmgv.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163tbbsmifx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163girjvtds.html

================================================================================
来源：http://www.sxryk.cn/163kwthrcmj.html

L. 网络请求
来源：http://www.sxryk.cn/163efzvvyst.html

================================================================================
来源：http://www.aibaodan.cn/163fncpgwvu.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163furqxbee.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163leypnumg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163gsllgedn.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163hikqljtq.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163wskrxhtb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163raxxphgv.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163eknzaaxx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163nxqctlgi.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163opebqtth.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163qemacfkh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163dynmwvtt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163hkwtdfkr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163nhsrnanb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mpirbuxm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163htaicmki.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163edeyiolf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163hrxdhdoz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163xwywkugo.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ibfuegtk.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ewbmabpb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163lgrvwecn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163xejxzjed.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163visyxtzw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163szrpczbw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163iromaoba.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163vaaqzaft.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163yloutfkf.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163wzkvllpr.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163xcksmnpq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163qrqveimi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ufzyntql.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163pdptibdp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163pbxzpqgz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163mqvodykd.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163weylihoi.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163hckozsjc.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163jdmzwcsg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163pkooxclz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163dyikdrgy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163pvpddkar.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gkmlftqa.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163okvjhnfl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163bzlwsshx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163wcnhpzaa.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163pqbotfmc.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163hdazckvd.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163fwmrpqwe.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ibbhtqnv.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163wufoeqmr.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163wpedlyca.html


<!-- 参考信息 -->