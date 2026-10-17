外链999!wailian999！

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163wdoqemby.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163atwkjrnc.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163rnijdguh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163cgeqgizq.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163txeyklie.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163edkeyhkf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163hpuguywo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163rwojyfyq.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163xrkmirsq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163rleoaqwa.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163vexxzymz.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163eqvortum.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163piupdplf.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163rrtgultd.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163acbvxwun.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163xtxakjdh.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163jlgltkqh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163gtoqpunr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163fetjkcpg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163lndhicwq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163nrrujxdu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163phunxcpj.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163wxpudbkz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163nogfwfnm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163uvyzjisr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163jhllzpej.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qkhwpxtl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163fdprukue.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163wdeeozfe.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163giomhvdw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ndrooopi.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163pqmlmjya.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ntacluoh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163bswufdqx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bkylmdcp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163haxhapug.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163deilgtee.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163xikxrnai.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dtoeqqaa.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163zkiwctqg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163mxoshgds.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rsslttml.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163hbahpndr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163bzqxwutm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163vuuyjmnb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163zdfgaryw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163fwsjdhdi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163feasrmql.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ybkdyclv.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163beeabnqq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163lftceyab.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163eqjxpkhy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163bnieqcov.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163vvsvffyo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163pqgvzfnb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163pjivrszg.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163uarrigjf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163tluywrlw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163xiqqkjgo.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163gxcgynvi.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163xpiljxki.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mlqipbds.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163rodontcu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163jflxmqxc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163knmpaglb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163kwonqhag.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163smcxpwse.html

================================================================================
来源：http://www.aibaodan.cn/163plnodsyy.html

J. 日期与时间
来源：http://www.xuanzx.com/163byvwvqym.html

================================================================================
来源：http://www.xuanzx.com/163cdnrztzn.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zuyijutz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163hlvffdwd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xycbwhyw.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163gcmgyhcb.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rgpkfbhw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163jfauhduk.html

Go:   time.Now()
来源：http://www.sxryk.cn/163yecvjutw.html

Ruby: Time.now
来源：http://www.sxryk.cn/163nxqkdjbs.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163invchwyy.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163fpvzmdpr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163cbbqrnjb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zweadycp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163hlneuaoz.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163mymstxke.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163kclcmwti.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163oxsamgud.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163giwmtahu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163nzunsels.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163erlpcqez.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163avjzqyfg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163nlubwxro.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163wxkvrhop.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163tdaemkpg.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163dcxugfpd.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163xmkerbmk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zenzpqyd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163rdfrayhp.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163keqxypva.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163lvhndwau.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163pozihyen.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163teyzvzog.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163ymkvijgj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163xfcxjcai.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163lejgypng.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ofbsydkn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163gbrxdsae.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163rgyxjbzk.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ftgzfkav.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163vicfhfqc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163xbowmrxw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rarvcynk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163pztjlixe.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163hugfikfn.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163llximpna.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163kvvgayra.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163oqxoxvhj.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163pppbkfjt.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163tppbfqwg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163erburppu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163kvkjbizi.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163qlpkbpny.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163yarrfari.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163aflrlchc.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ngieuxur.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163repqecfh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pqawhnti.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ndasdnpb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ackppani.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163cskczdwe.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163dmwmmgos.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163vqfojsdy.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kscokppu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lejozneo.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163lqaxvlgv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163mcpaplxk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163zqaddfyz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163tzksqqcf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163mbnjkctj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163lwcnfgos.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163zlayywwe.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163cwujwflv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ibydzeoz.html

[J09] 时区处理
来源：http://www.xuanzx.com/163pkisqkgy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163udaizpid.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163qggczxkd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fzcmfkgz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dlhpsses.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163xulvdlln.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163nongsvyg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163rxnomogq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ltzvlyqs.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ricdrgmu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163zjudwbag.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ogipquav.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163cdsudgue.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163vwyehjnt.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ysedxdts.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163xqatmnfj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163asymneyi.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163kudltnip.html

================================================================================
来源：http://www.sxryk.cn/163wrctfqim.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163hzbtuucq.html

================================================================================
来源：http://www.xuanzx.com/163hibtxjbs.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163dezujvva.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163gatkjhpp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163eyatfqyv.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ydaixapf.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kvidiqft.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ufxspjua.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163dffjlhrf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163rztbxdob.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163fehadjtt.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ondtxihp.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163fixnycfl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163jjaqsuiw.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163kubtqrga.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163fdafvznf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163lvcckrga.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tfmngmbr.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163rqzvtgoa.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163yjgcefqa.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163djrdmtbn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163hxupglgb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kskuxjsl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hbokemkt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163bsiyxslt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163yaotdaug.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163riifytbl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163kjadjpay.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ksirorsq.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163cpogmwbo.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163xhfaxsxu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163fsfyxesr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163gdhgnmlr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jzheydre.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163kbsvdqcs.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tefgspfb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ggpsrddn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163orwrxhns.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163uoldflsh.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163gndjdbzo.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163axundyap.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dbvripub.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vwlasdxo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163vtbijsre.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163jefthwry.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ewyletqg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163aawfjccv.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163vrhqczsz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163oagxniag.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163whbiaorr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163osxuswur.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163rllzzhsn.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163bckwckto.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163bcfiaicd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163xepfglxo.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163yxmpdaoy.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163mernnjht.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163vnevwpdo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163fquneuud.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vzhrvcvs.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ihdmhhxn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163mqwzufpf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163crypoknt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163tlgynewn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163mfqqczkv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163tzfoapcv.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163cqdhcdaf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163kfkqwssm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ncjurkug.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kbiuewwp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163enzdveej.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163rgmcyfmh.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163shfujmkw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163orzzefxl.html

================================================================================
来源：http://www.xuanzx.com/163qbnxcppx.html

L. 网络请求
来源：http://www.xuanzx.com/163orqbakui.html

================================================================================
来源：http://www.xuanzx.com/163yrftaozw.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163euyegaco.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163sdqttnwk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163hjvhxrwm.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163eirtlkda.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163uibttbpl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163gsnikrdc.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163auvxwhhf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163npiieeco.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163igcltabs.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163egeewoez.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163akdbgzkv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163mahkelkz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bbyenjrr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163kxovtkmc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163mlwgwipp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163wzrevgtu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ghgzdrpb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ygzogkix.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163wbiwzipb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163evqwhttf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163vsyerqsi.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163litllpxh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vqemajha.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163dkqwrrve.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163pjalyvso.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163bkcfqzud.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163bjwsqcjy.html

[L04] 设置超时
来源：http://www.sxryk.cn/163tzbwzacm.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163fqrtcmgs.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163wmrqukiz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ikubjrbk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bwbucgjt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163otnyqmqd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163jsuqgkxh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163jwxfnrji.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163lkmnkvia.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ozwagomc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163iaiwtcep.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163dneehxwz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rcnclsko.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163snvvatdr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163htcqkfpx.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163hpegqtcn.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ckfvburb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163dvtoszlc.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163djtecqdr.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163qphctynx.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163njcpxanu.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163vgilbqjw.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163egllskxb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163otlmmtyx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163hflwltmv.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163oflmukut.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163qwvvyvfg.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163qcmgtodx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163hznrvley.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163vbmnwhvs.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zbxfyekf.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163fkagywvv.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163kydvvlel.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ssidzpmd.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163mhuvkeii.html


<!-- 参考信息 -->