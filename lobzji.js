外链999!wailian999！

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163vpbenwxe.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163nrpxecmg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163zyowdwat.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163lugrqmal.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163nhgekigo.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163dtggwfal.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163vdsmyvil.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163agbbwhns.html

================================================================================
来源：http://www.xuanzx.com/163cbftymym.html

I. 正则表达式
来源：http://www.xuanzx.com/163isowesmj.html

================================================================================
来源：http://www.aibaodan.cn/163eubithsp.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163mjxodjof.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163rmwfhlkc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163uztbkzrx.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163xkouedsw.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163axowyjnp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163jusjcstl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163huqvmdak.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163mutvnegu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163fnkhdxen.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163kphqyiyq.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163mzuvqgoc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163nfxzyopz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163zhawpfoq.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163iteopyki.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163yhmdkmbt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163htgkcure.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163mlpebsnv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163hzgmzuwf.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ykaxaydn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163nkjqgqly.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163tzdchpnj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163klbgmhkg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163aryjiwgm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163dgytcffn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163zijlyhnj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163bsjkumcn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163futtzila.html

[I04] 正则替换
来源：http://www.xuanzx.com/163xcvaixwx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163sdkczoap.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ndgmcsqb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163elyvcjvr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tdquwnmx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163upsoxbze.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163hdldohag.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163jrajxvnu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163kkarkwaf.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163gmuozzbi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163qmnymzfy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163mfmxwcgg.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ndobzocn.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163lkbelhmx.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163njpblxyf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163bnxarevd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jhejjvzd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163wocgzrnn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163qhcnqhjt.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163crgmzsfr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163bhnnrzhn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163khxccubn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163cxhaptbq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ufsthtuw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163gqteeqha.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163imzhloly.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fxegovqe.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163orlqvpft.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163cgddwkni.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163gfnstkdn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163naoqodse.html

TS:   /error/gim
来源：http://www.xuanzx.com/163lddihkza.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163trerrmvu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163molaqzct.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163dysalhhx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163njgqcnug.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163bgjfbjlc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163rkojmjak.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163rxbxzmpq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163jabwojfm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163iyggrkml.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163swjfovob.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163oaghifzz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163xpadtizn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163dueojojl.html

================================================================================
来源：http://www.aibaodan.cn/163qebpjgze.html

J. 日期与时间
来源：http://www.xuanzx.com/163wojogkpk.html

================================================================================
来源：http://www.xuanzx.com/163kdjzfcxf.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163yajkewex.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163juiwwvav.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163tigyakpg.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163brhufpwh.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163sbflpnzh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163beferqap.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163pgqfridf.html

Ruby: Time.now
来源：http://www.sxryk.cn/163dbyevrse.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ataiwiqg.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163dysnvflz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163drtefkjp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163dzdokulv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163xffznfzi.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163vogpmmfq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163cgbszrpg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163gxqbkfxq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163orddjwfz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163bpuaxazy.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163punpewey.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163jmpdhrvo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163jakbqswj.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163mviexpmt.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163kkiafoez.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163dgpzrnbf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163bqascjmc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163anhnsciu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163hyfdzswb.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163iupohcjo.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163mqhrekxr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163tlmggcsj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163wzmajehz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163kajrnjiz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163jexwurhu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163zunwkfmk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163kfewnene.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163mjyynvzn.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163hrbyajqy.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ifgnjckn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ndgqdllc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163uklrrubk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rlrpmfmu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163sdfszaga.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163uzpskmbz.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163kfcfedfs.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163gldibmbn.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163snsigsdt.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ednqjiay.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163disqtypm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163fjmirznu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163cecgxbvj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163cofqpngp.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163dyocewwl.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163hplyvswr.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163kgjgvbuk.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163vpoteysc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zajuygsz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163hpcszroc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163yjlruhov.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163yiwwvelw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163bumgkpmv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163mifltlkj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xrgqyiow.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xtahfecs.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163dpltoupl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163pypxehie.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163tpfnhvbs.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163gfpscrxc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163cxtfrhyr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ikztgkqc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163cdpxsazb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163lybxxqyv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163vgzpcgps.html

[J09] 时区处理
来源：http://www.sxryk.cn/163eminnicd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163vollapha.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163kagiuztn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xzdautxz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163lbcizjtq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163imlkqevo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ylbqhmgr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163gszfowwr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163rlzxitam.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163dtwwlwxf.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163wvubmwir.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163jnnynort.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163mljntrtl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163eurbhioc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163fvoooaaq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163dsoydaiy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163uotylaic.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163xgkhikiy.html

================================================================================
来源：http://www.sxryk.cn/163aroubnqn.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163oksniofe.html

================================================================================
来源：http://www.aibaodan.cn/163wnolrolj.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ewowjhop.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163xmrsxvmj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163eicgunak.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163vaymweyj.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163guqjknvd.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163rdnhwyxq.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163mqjmzygr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163zacwxfyf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163hpvkqvpf.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163qaatslku.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163mmdxamwa.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163pmibhjcw.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ukajyyeb.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tgxbiffx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ixawxbtv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xbxrkyax.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163anqusszm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ipddfras.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ofjwoqwc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163rwrbodxx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163xgkyhulh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ywlhdhuv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xrwtzcpt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163zyuefyqp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163voqqsdeu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163stugaixh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163acvqwguu.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163zdrnodmg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163digwveqt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163lqgnnhoy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ndwcjuzt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tgzhbtkv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163zbpsngqr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163usaadypu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163hhiuhqdk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ohfwfuru.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163urjvsovq.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163irvyavwh.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163obmnqmfq.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163cdzeaztv.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163psoynqmu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163bleaykbk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163vnjelagj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163nvudgawa.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163clodhdlj.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163qiovefpf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163kvkrdoju.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163jsvoisis.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163rpyuilae.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163uydelumc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163izzbkdev.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163twclzlws.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163hokydmsr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ymkikfqz.html

[K07] 进制转换
来源：http://www.xuanzx.com/163cafnapfn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163uylylhnm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163cfzlwemr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163eimljhgj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cehwfvms.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163shmxncwb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163qouozzfd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163lmelsews.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163frbynnfg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163qtroqbzg.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163zfjwesfq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163iniozzyj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163hqyhfyjl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ccrngllx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163snjqkrvj.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163hlofcvjd.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163jxllljqg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163mntlbkfy.html

================================================================================
来源：http://www.sxryk.cn/163dmbcqzou.html

L. 网络请求
来源：http://www.sxryk.cn/163oyedyieo.html

================================================================================
来源：http://www.xuanzx.com/163rfautqkc.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163sewpsxzn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163kmzxwqzg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ojtlxhde.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163zceadjpv.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163hyhlgphe.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163qbviofta.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163tecccbin.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163htoiqhmd.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163aagkeiuj.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163uysazyub.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ibhhczts.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163gzuvkikv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163idvgpplb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163tuuwwqkz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163jxiuwwgd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163dwiqnpcd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163jmprlazv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163bgvgvqhr.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163fxuocebl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163zmqkoaba.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163noxlrrxr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163gsskrbhr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163srynrtrc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163boktmrcd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163sioqebmc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163dsefhlek.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163isdpuptl.html

[L04] 设置超时
来源：http://www.xuanzx.com/163pvhzbjbo.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ybnhantv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163akafzgzd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163aoegczuk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163cowsuqxm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163rndeimpd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ewjohpad.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163brskyviz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163hzslgojg.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163qlgibnkq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163tktlpykq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163eoxzjtdh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wlrhehlx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gquioziu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163gzbypmxd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ryhsbhcl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163hnlnqkah.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ijhmnhib.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163uxyjgzne.html


<!-- 参考信息 -->