外链999!wailian999！

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163udngifme.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163uizicbah.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163nowvdhqj.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163valgpxqw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163gyzumrgn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163yxbtjjyf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yiufrkez.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mqvwuliy.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163fhnhnuoo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163tcatodpc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163exzcqzms.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163kvwwtosy.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163bykpbzly.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163triebivu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163yxjdhoss.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163svmopsdz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163xydigffj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163kcyjxxyn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163gkizdbeb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163afyvvxmb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163xomwdtbm.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163vkudqgyh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163oirpbhyu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ftcpnpns.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163gjofviyw.html

TS:   /error/gim
来源：http://www.xuanzx.com/163jbavpyjn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163fuzjqjws.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163mrpmbwgh.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163tgorldls.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163vvtucmay.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163panobwul.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163rdwvaxaj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163mpnmsvhq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163dxvjgcfj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163zyrpifhe.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163msehrgpl.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163juerulbb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163mtnznfxl.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163odvidyka.html

================================================================================
来源：http://www.aibaodan.cn/163zdyeztuz.html

J. 日期与时间
来源：http://www.aibaodan.cn/163fnwzumxi.html

================================================================================
来源：http://www.aibaodan.cn/163ntabblyb.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ndrlutic.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163vvbbczkw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163mukahmlu.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163srcszwva.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dlvmwtiw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163mbvdxypl.html

Go:   time.Now()
来源：http://www.xuanzx.com/163avdemmau.html

Ruby: Time.now
来源：http://www.xuanzx.com/163annjxnkh.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ftdygyaw.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163cfakkbuo.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163trdpsfan.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163eeqbvrlu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ecfolcbw.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163qynnhuqd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163hrzpvxbn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163iufasztl.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zmywqwhb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163aajtnrnq.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163pqkvidyc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163pikibvoo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163xryljagp.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wnwwzvdv.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163upkeicbb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163tgblnfgb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163bpmyazrk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163snxqwaem.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163sbtyimpn.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163hrrhiouh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163wgvduvef.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163epjmjbxz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163tcvcuirx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ixskrcev.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163jkzxxelj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163laolcokz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163dfvptfes.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163djfcjrhi.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163waelkfib.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163kuphxsiz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163fyxqdbet.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163lbnfldeo.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163fvdkaijw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163avnydhxh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163wlmvfrqy.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163geywnoiz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163srdtctdz.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163fwrujmny.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163rwmfczmt.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163dtlrhupw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163udhhbhds.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163xnqnfbmm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163honudggj.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163hbqlpumh.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163lanfsbql.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163gjkljznc.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163gfdotqsu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mznhmhhb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163zvcwfzdk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163aahyokus.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163jciaglol.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163bkqpkutw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163urltityt.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nljcpyic.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wiplvaap.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163iyxcxmtt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163xhxxtser.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163gufvvpet.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163qwarybpr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163wphmxuis.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163nnmjduxp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163jzfadzuw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163lkcehknc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163vyemljmz.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163dqeaghbp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ruvezgtx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163wmgsfmcr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tdlyqoeo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ibaxbigj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163oikimkwt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163kjyfpmvf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163pbtoihwq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163fyzjehgx.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163jcdoqiao.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163jcvpgrpl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163qwqzvkss.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163yrdnsobk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163sxvujxps.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163gkpftelj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163jysbettx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ahqjarjq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163xtuioazz.html

================================================================================
来源：http://www.aibaodan.cn/163hbcrwsdz.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163hrejsfgd.html

================================================================================
来源：http://www.xuanzx.com/163yipbupnl.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163lrixkpmx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163xjdbujps.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zfiodkwd.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163iccjujmr.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163blyawlil.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163xsrkhbyp.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163qrtkkmtn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163nbpildam.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163bpxibbwd.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ankwitcf.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ptjtyfag.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163zcrkitre.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xjyzdxut.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163kmvugizw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163dyjslxlz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ebtnvtrg.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163dqbngnfu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163pcxoaymz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163lxlaxifq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163tdnvakif.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163gvtvqxzu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rsbphlxz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ehgnhjjf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163guvtrwuy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163odzmwpyb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163sibclwlm.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163zepvpify.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163eikegzxg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163hhiribbs.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163dnbpxkgs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163bjxikefr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163mverjurx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163uipugixl.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ckcquwnm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163odkwzvia.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163gdmnosic.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163rukamawb.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163hzobggnl.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163hsuwiywp.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163tccdvgvx.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vipehjiv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163uxnzrmje.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163yrfuhqbb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163cqmolwyx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ghrzyslv.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163btbftjeh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163gcdegiov.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163mpmkzuko.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ugypjbac.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jhooyxtd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163isnlggcz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163npekuiuw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163vqxnircq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163zbmnfsjl.html

[K07] 进制转换
来源：http://www.xuanzx.com/163yfjhssow.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163eufgclwr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163vksndlvk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fuklhosc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ffgzggju.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ykxggadw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163zwjdslxz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163cvlkwyhc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163drwolghq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163rrjhmwre.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163phsqnfgg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163trjilamr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163nlicbbvf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163yskkvbdb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163rfwtbyzl.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163vdbmzrwg.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163gvtitjyu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163vhbvfuwp.html

================================================================================
来源：http://www.xuanzx.com/163kdqwztib.html

L. 网络请求
来源：http://www.sxryk.cn/163jjxynyud.html

================================================================================
来源：http://www.xuanzx.com/163qwynkxha.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163wnsmkyzm.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163yltdqgme.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163fghgieop.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163eginmwms.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163nkfqkzlw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163lbmqxhxa.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163jbpvjyaq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163dxhwwyjc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163uzfummxq.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163lutwlyom.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163bxzrtcpi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163syjlmiqm.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163pwuenhiv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ezsncebe.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163zvaetckz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163emycswym.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163nyvobcoe.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163qkeylhhy.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163xiyhcqnp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163usddpzxr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163siglddpr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vkjgffup.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bdozukor.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163bfqzowjh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163kgsaqoop.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163fwnoqafe.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163elgezcdy.html

[L04] 设置超时
来源：http://www.sxryk.cn/163uxehdvnf.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163ihuzlihc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163yovnvzbl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163gsqwtuty.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163utlwegsp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163vviiobex.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163gbystnqm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163xgfynuvw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163xgnmeeup.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163fagtxihz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ymqiymfo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163tsnanmwq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xbjaqvcr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163pbrxvvfe.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163xadsflin.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163owhnfshf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163qhiamzbm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163jtcpnzib.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163poxwzjxv.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163pwlzenmz.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ujylwysl.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163pppnigzy.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163xwpaulcp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163hybqhzsc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163fqssfngc.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163lhgfgflq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163tdfszjfv.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163zczjfzpy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163xwbukqhx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163glychfun.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163dspsvlzu.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163oauiwgce.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163rcpfddrn.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163qknfvtzz.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163davcejor.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163xgyecnui.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163slylaadr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163hrajcmab.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163dzgacmfx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163sgdqpwdf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hyzkxnqs.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ttuwyvra.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163odnwoznj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163qfhkhgwx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163kfsbijya.html

================================================================================
来源：http://www.sxryk.cn/163ttwllxly.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163xldrlbml.html

================================================================================
来源：http://www.aibaodan.cn/163icjngebb.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163dhvtnvlh.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163atenczbe.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163upsjypaq.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163kygcpsmx.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163wgjamtwy.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163mpplybsq.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163osoudurr.html

Ruby: ARGV
来源：http://www.sxryk.cn/163gvvpguvs.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163szmmxnfn.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163qsnfayug.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163nxvkrgyv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163kanskccg.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163nfqjomtw.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163rjoemebc.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163inumtlqh.html


<!-- 参考信息 -->