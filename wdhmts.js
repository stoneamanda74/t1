外链999!wailian999！

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163jmcdtdfl.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163olimvexf.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163wegimwbb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163awmllwyi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wemcfsqd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163demuufof.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163tdbeszjj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163qdtvcswq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qviczquv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163dnipcfyi.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163govjgiew.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163rdulvktd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163oqmxmbay.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163qvtpatky.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vvycfqve.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cljuyiwm.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163cfgsyzts.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163wncuinju.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163exrxskiq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163fhrnmbev.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163hegvworg.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ycjaeyxd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163gggiwabs.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163gyfqtfca.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wbiidfwp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163puamuotj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163kztmsuab.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163kvuodadi.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ujtvjtjk.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163blivolua.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163qjlgvosa.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163usobjqpe.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163mgstctfd.html

TS:   /error/gim
来源：http://www.xuanzx.com/163oedrvosi.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163nxizuylb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163jrqaaich.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163vawhfmze.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163atlnpxwh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ygmevrap.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163jnyobeel.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163fkhcodjy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163gunaywcy.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163gturmuik.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163tvuboeuj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163krwwwfxm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163mcauqfxt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163toebnnef.html

================================================================================
来源：http://www.sxryk.cn/163dufzlbxn.html

J. 日期与时间
来源：http://www.aibaodan.cn/163tjiaaxwn.html

================================================================================
来源：http://www.sxryk.cn/163xxptwdbs.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163tbmeqqyf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163mtoummsy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163lfxlmqxi.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qtdarinb.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163apykpude.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163smhejrrx.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ubnimkvh.html

Ruby: Time.now
来源：http://www.xuanzx.com/163gbnumrqx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163gbnzqhsc.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163pyghfmtk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163pelgfjgt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ijoukwcl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ipalfyxt.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163rwqfwavp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163vlzicdej.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163tietdogp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ktfxbmny.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163cxssckwj.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163icxuxint.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ydzmlxcz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163btorkexp.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jrromlwb.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163uxkzmrpv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163fqnxxqwt.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163hozebxuf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163mencsywm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ehwwppqz.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163sgherqrj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163uexcskqo.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163herpataf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163fvwkpmtl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163sidskkey.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ifduhqkp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163hpavyoak.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163xgozzvjz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163wxhwatbp.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163pacjmoss.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163lxakccmu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163mpptxarn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163sgpwucqb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163celqogwo.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163rqesajyg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163phdtusfa.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163eczgjpby.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163gtsvjugs.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163egbrsmrs.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163zjqczyuy.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163xpemujap.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163pwfwoncp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163bhcjsoxg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163qxiwowgt.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163wqvewejq.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ckqxskcc.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163egsefeuw.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163yeyfrcte.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ckckpxjz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163kesnmusr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xszrclhg.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hclprxfj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163xnahedjt.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163iwhntvjs.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hrgaqxhe.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wvnmmnnr.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mxyvkvog.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163autfqrlk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ddobhsjh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163friqvmzg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163nqbtfhuh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163oivqpjlb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163pfcrljea.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163wkuaeaqg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163szqmdqgl.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163guphljee.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163evfehqjw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163yffvequz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wdzkprbn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163dgueqjlx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163jsvfnfzp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163svghctdb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163wicnunpj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163jrjbhvcn.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163gwarrtwl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163eojsrqjx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163jqonxynf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163qizpxriw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163tmzqgogu.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163qkdspnqu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163mpzynado.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163owcioueb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163bqmmhhgw.html

================================================================================
来源：http://www.xuanzx.com/163mzpbicih.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163bopseggc.html

================================================================================
来源：http://www.aibaodan.cn/163lrpnaxly.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163hcegbnhn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163nsnbnixs.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163njflbgea.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163vsdwmtdb.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163wwrazpne.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163baqsppce.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163jymttpoz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163isgwomdg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163jntapcul.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163shmrrtqz.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163sysswuxs.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163uwbqhafw.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163zzvrwika.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163iztfmdbb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163dfbyhcmv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163roralpby.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163fxnqshll.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163qgaiffjh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163sroodlcq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163iuaijzgu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wpfxeyet.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163johtvjso.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163sfbfgytg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163avmoiadp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163canxxovn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163zwjkfjxc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163sphzcycv.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163wrzfzokj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163fghaeail.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163kjtxjioa.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163utbtxdua.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163hhrptned.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163xrofxgrq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163zbzltkie.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163eokcfdst.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163mfivbaih.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163mugmdzxx.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163mkkebcoh.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163jcykuawx.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163kmeeutlk.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163lpvctysz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163dupelptr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163rmzoggxe.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163txnfnixq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163rhahkvyd.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163gnpuliqa.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163rcejbzym.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163duoxhrbv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163safjvmrw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zqgqrssl.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163avsllrxk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163vorpwjcv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163wuuauolb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163pkbvucrn.html

[K07] 进制转换
来源：http://www.xuanzx.com/163wjwzitoi.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163wldfqmsh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163rdeuqnhg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163jcwdyamx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163elpzxuwo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163pkhsilkb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163qovoimzz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163akeezrnt.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163wqohfeig.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163htcigwsk.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163xoqilkyv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163eapscrcr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163gjyxjtqz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163awcgfvzr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163smtkjcje.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163rbjsbolq.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163iafhujyo.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163jofiofqi.html

================================================================================
来源：http://www.xuanzx.com/163zvalxjlk.html

L. 网络请求
来源：http://www.xuanzx.com/163ndqcumbx.html

================================================================================
来源：http://www.sxryk.cn/163bktccvrz.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163csifbmgq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163vunmrnlu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163nhmghpli.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163dmcdmaej.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163lduhqpbn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163yjdjakui.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163rwhdemhx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163rsslbqqf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163dmqsgzbk.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163rimnmime.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163qokgpkvq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ftqnlvuc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bpinykbl.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ggdipswb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163mwslthva.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163kkllbeum.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163enaaoyav.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163jmvzhcev.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163jxfgwtys.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163tyekgfyv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163kntlhewo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163imzrpclx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163woerujiv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ftezalme.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163mklvvlzo.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163cbnrtler.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163lcpsydci.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163gqehyszp.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163hitzhsni.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163xwtfvzuw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163brftqswz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vyqcjtwp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163khhmvpmv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163mdalarqj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163xkgvcgxs.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163dagcbevy.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163pbxkhlym.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163bdhzrcnx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163rikztasa.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163khiitkwu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163lyalyrgg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163pvrgdign.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163tltqecra.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163isrsivvz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163zfdgviwh.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163radvjfwe.html

Py:   resp.json()
来源：http://www.sxryk.cn/163qckkorxr.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163oelzzvmm.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163xywtjmne.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163lnfaauke.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163rlmzjcvd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163wtoxcakd.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163qprpbzla.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ywoddwrc.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163hoopeifp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163qryohdrh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ddwnscav.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163efipnbsj.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163dkivujed.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163eqwcldij.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163fttrpwan.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163uvlbaihs.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163brwzrpgl.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163moxamwkv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163vphnhuzo.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163fjzkxczp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163skzycrhs.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nujawrow.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163xmruttxm.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163spmzpxzd.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163dqqnvglz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163cdwmjpix.html

================================================================================
来源：http://www.aibaodan.cn/163apczyxca.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163jkmtjris.html

================================================================================
来源：http://www.aibaodan.cn/163yaoeazcu.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163hierhmxp.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163mtdwmlww.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ottsskrr.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ekmcudtd.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xvgdoowd.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163zaqussxe.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163gqmoyemo.html


<!-- 参考信息 -->