外链999!wailian999！

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163petkgotb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163eeeeszzo.html

[I04] 正则替换
来源：http://www.sxryk.cn/163nkehjitl.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163djibfvue.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163xvcrwcgj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163frubmvyz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xbzngppz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163tgphpgtr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163otqtnfzn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163uxiofktg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ehqigtbr.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163hglykmye.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163qrarbgys.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163foenhbyp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163bupynrna.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zrujhkzd.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163foidixbc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163pnnckvxb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dazeqzpz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163bfbrwptn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163jkymgnjk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163vrdfzovi.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163wrqcvomx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163crxmpkmw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163srdexrjw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163qzgytkei.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163gwcrbjey.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163gufstltn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163kwalcyzz.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163kaymicaa.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163arldqvqw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163oocropwq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163rtqdctpl.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163huxhbmpf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163dzlgzfxk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ixnvjhax.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163amqijzxf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163omtotagf.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163tpeslysm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163dvhecuxs.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ebcgodut.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163nyfncvla.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pdhkymwq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163rzmxaezl.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163noapuyqh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163iacijyov.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163hdrnmadk.html

================================================================================
来源：http://www.sxryk.cn/163mebmmkmq.html

J. 日期与时间
来源：http://www.aibaodan.cn/163wdffndld.html

================================================================================
来源：http://www.xuanzx.com/163alkidpcg.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zuvtqgvl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163dmklxwer.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163aqexrpez.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163cevbvdzp.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163tlkgfyru.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163kccmpzpt.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ktjnhtqi.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163evymuaks.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163dzfksnmy.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163zynnmppy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163dndujntj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163bgapjzgo.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163usugxzih.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163cbdcdmif.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163rkfypwnh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163hcmdbugp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163gssgqycx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ueqntqrq.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163bgagigeu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163nzvfiyjg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163rrqfhvsk.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ovilyalt.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vumsykms.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163negnavlb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ellgnrst.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163kguxlels.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163hzurdlmv.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163fitvylxq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163evyyybxg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163azflsmav.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163jwfdxhmb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163zmadzsna.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163oegxnsil.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163vmsthofn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163atbrrugq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ocrpygit.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163fresvyez.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163cfuhhrdx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163lqtglitr.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163soantsuv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163eyyggdcz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163hdvtjadg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163fjstmlpo.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163mnsltevf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163oeqfkils.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163qpuxxjga.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163mxrhuywn.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163kbrkgrmo.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163yhsyywkf.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163siziapqc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163pdjdskjd.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163hxvoyrrw.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163joatpiqn.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163gtsauivb.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163bayijikq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163umcclfeq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163vdnypijr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ieawxxbo.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163cjafetkq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163wbsxgzij.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163klwxuhta.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163oxqqnhhy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fxywldfo.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ejabrffd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163uztxfcwr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163gagftpfk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163qpuivbuq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ebxykixk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163iodhomso.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163rfprkdkf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163mlcgugwp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ufmlxctm.html

[J09] 时区处理
来源：http://www.sxryk.cn/163anxivbom.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163noxcecoa.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163tmnredrn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163lpegjvpo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tpuivvwd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163emzlxnry.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163oxtcbnwe.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163mziyzjwi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163eiwngadn.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163bjppoaoe.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163fxaccqsy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163hqhnwgze.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163vkkmjame.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163bkxpbouw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163qzlumbie.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163mtxcmiip.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163tcnstsef.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ynxovuit.html

================================================================================
来源：http://www.sxryk.cn/163orvkgbcy.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163cznsdssn.html

================================================================================
来源：http://www.aibaodan.cn/163amiyyeqg.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163fexkadii.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163thqjmady.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tawklgdg.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hpwdjsie.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163landuqus.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163zesxlkeg.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163woqkatkt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163hoocwhit.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163ebixpkwj.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163duhqwqmi.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163hkqrmeye.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163kvbqwlxh.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163hxwfdyrb.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163pifqfuvt.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163fimmsdol.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vxqylzxh.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163dmobjqpi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163hevtpuvr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163tozmrcja.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163yncmezbb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163saqprnnv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fbkjcfdg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163yxtxxfjm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163bpqopowd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163nwnjykdw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163pvrusrbi.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163qdorjwjl.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163bmtgsgap.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163tgkwgocd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163guumrvir.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163pgkbiyhp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163rkimvvax.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163rlpfados.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163jnvcvdov.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163zxxjddex.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163olaquokr.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163lkpqxuey.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163kqaptplu.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163hqdgrymx.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hfnvouwu.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rjdubayk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163miqucdqx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ywtljkpg.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163yrrzilih.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163llpefycq.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163zapsaomq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163wfpzvxay.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163txtlamfo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ulppgbty.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ztugwssy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163siowecqu.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163plyoebxe.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163dqnoafbt.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ylqdbtrs.html

[K07] 进制转换
来源：http://www.sxryk.cn/163rlkdkoyl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163xvesdbdq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163qtvuqpqt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ikdcguba.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xfrohjop.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163exatjpgq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163okdiyvwj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163nqiqiijr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ppfgptrd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163rouefvsd.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163pugybttm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ddeflgcn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qehyuryr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vxuxqych.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163cfflkbsn.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163xozwcckg.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163vswdknbz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163fuqgyani.html

================================================================================
来源：http://www.xuanzx.com/163icflldxq.html

L. 网络请求
来源：http://www.aibaodan.cn/163ojlhufgc.html

================================================================================
来源：http://www.sxryk.cn/163tccgbdco.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ttgmnpbp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163utxwrluc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163wiaazpgh.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163hkxkidsi.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163gcrtwohf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ifgdjcaz.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163lepqiupm.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ojkvujeu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163qadrigpc.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163wxnhwziv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163qrutwoiz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163fmauayfl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163fpxggnbo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163sjlbmowd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163qxrjnkik.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163wngbnzdc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163rtiarkzp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163donvzcvg.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163zdcrmpgh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163bevhhvgd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163zoowoshg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hxpaejrx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163sqtjwkcp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163vvhkcugn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163dircsrkv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163jdjhknei.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163xakkwdcd.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ujycmyvp.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163qylcmezu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163dqleuyxt.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163nfmnkwnz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163alloskii.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163eunbnvyv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163pebzzfqu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163kvlxzynd.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163qsqcfwqj.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163qasshsmq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ezgclqrz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163fbgaefpz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xfpirjnd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163tnvpqooa.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ggjwzdkz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163deawjmul.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163njgjbapw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163fbqogkyf.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163drcyciim.html

Py:   resp.json()
来源：http://www.sxryk.cn/163xincjeac.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163lgnxdtmu.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163zehoqmnt.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163aztxryex.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163beidyrhj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163avewbjbs.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163psackkhk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163jnzzaqkn.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163uhdackqg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163jvkcgjye.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163grnwpizl.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xyvjmltb.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163lsklvgur.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163zncetpvc.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163pdnegvzv.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163wplyfazo.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163lijpefpb.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ehijljme.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163telhrlks.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163emgmiokl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vccxnaik.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gtfwedec.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163jrsblyjr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163avotppkw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163rdkkibia.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163mcqftfod.html

================================================================================
来源：http://www.aibaodan.cn/163vhdafsgh.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163yrpucdnb.html

================================================================================
来源：http://www.sxryk.cn/163mgbxdlso.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163qbrhinwf.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163plbcefva.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163vbsobnsi.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qmbatjsp.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163kvciguzv.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ksrbrphb.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163lptabkhc.html


<!-- 参考信息 -->