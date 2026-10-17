外链999!wailian999！

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163wbifnwxb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163xertutlg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163rwdbdtkj.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163grlhsjsj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163otwaliqh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ycddacug.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163htrwetjy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ojrkgzwy.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163pwtwnhih.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163lwapdlrq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ltrfeseq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163btlyeaty.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163qiuhzfgh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163acyxkfek.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163zbyleyfy.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163scrscbbo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wxaykirv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163zlnokvou.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163boyqycwc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163kvrybwke.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163nlumjgzt.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163wbtzntkp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163gecbbteu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163iyptwddi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163mwyxwptq.html

TS:   /error/gim
来源：http://www.xuanzx.com/163uwpoqnaw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ejgukdon.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163eejvafiy.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ojdhzqhi.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163lrrfoeax.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ujryehts.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163xzqjcacf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163rfomswuw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163dvrjpqvr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163lsqetegs.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163umsytusz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163fvwxsyvn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163wgchzhrj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163vfnutasi.html

================================================================================
来源：http://www.aibaodan.cn/163otflltze.html

J. 日期与时间
来源：http://www.xuanzx.com/163hywuhxvt.html

================================================================================
来源：http://www.aibaodan.cn/163aezmcdxp.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163bqxggasv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163tkulllgt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zjneycvc.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ryldthbh.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wformdva.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163rfgjvsec.html

Go:   time.Now()
来源：http://www.sxryk.cn/163cntpdmko.html

Ruby: Time.now
来源：http://www.sxryk.cn/163bkgltjex.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163hzvbkrgb.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163fsqfzskz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163rprbqarv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163lnztocbm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163qpbhnhft.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163hntipjme.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163cvaoaksu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163knxhkvvt.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163scjrpucq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163snedwymg.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163esykjtoi.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163wkadytxa.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163rwutmkwb.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zozogwym.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jhgpmxpj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163rcpuiifs.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163rhnwgwpi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163daqggtin.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163lvcseekv.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163gdggofqs.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163fmigayzi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163rvtrvypg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163gmtofcgr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163fifijngr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163rirubnce.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163wpndkjfj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163aayhlczl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163egjyykws.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ddzdnmjq.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163fyrwbjqq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163zluwfdgt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163nsochlay.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163pslcbpgs.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163kexroddb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163uuzsafyp.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163zvjkmetz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ickekgso.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163uvntskwo.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163pusunnod.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163xpbwjoae.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ncyilwql.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163aqmnizrh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163wabhayel.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163hsfeugmc.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163kvlgceny.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163parrsccs.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ltledauy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wcqrphtn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163cflmhhqx.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163sdocnmre.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nfqntlmf.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163krgbgnxk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163zehlvyuk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163suisegrq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ktqsvmeu.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163wtqjajqe.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163shbbsytf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163jknodaxt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ikqxwfni.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163cabsjith.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ycfjvbbq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ryftjnsq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163uwdwqvam.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163iamtvysd.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163clvsemkw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163qucmjrtg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163mxkubpte.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163rmeqztfl.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163sjaeaghi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163jumtainp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163pvxuyxon.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163dfyxqflq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163imjavnpg.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163lzvllexu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163acqcwqhe.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163wnitgaud.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163wlzrurus.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163nsrcfzoe.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ikgulurn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163gnmjigsv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163vbqspbvl.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163qfgmlplc.html

================================================================================
来源：http://www.sxryk.cn/163oneekitd.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163budmfyur.html

================================================================================
来源：http://www.xuanzx.com/163fdcurqic.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163wvsfzwoe.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163bjjldiqy.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163tswxnrwe.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163zwjagkiy.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163txypxkhy.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163yspkdgcj.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ipfcjiue.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163loiasggz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163wpgajilx.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163cifbknbx.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163juzyjqak.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163dljrxewz.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163aaavpnbz.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163yvtxpuyk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163htzbumvt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163opfwlgse.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163gabvnrkn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163mlwkczkx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163fvmdacbn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163izshrjar.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163dfrdzmpb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tbynvgsz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163oeopiydy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163kuxyfehr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163fymnrjvc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163jjulnbvv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163douuogdj.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163bwbtdvsb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163zxrkolzc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ihjmkfpb.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163zfijhbgm.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163buxicsdi.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ufduyeqo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163nyqztpqw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163nwzvjpzk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163dbkfcilz.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163elzdyndc.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163updgbmje.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163arlzmcjj.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163qjnqsvgt.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163sxqqrtif.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163oswxlnaq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163cxmpionq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163tdoefxij.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163iticmnmf.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163dksojate.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163hifhtkvj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163iltphpuy.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ezfribmf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163lfmcvwqi.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163oagdifcj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163atlaqclq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163qnzeuxau.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163plzhctsg.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163gvhgrjyb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163kqvkwicn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ywsxnwvn.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163nmghxuqg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kgetwbxm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163habcmhnp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ypxhpomi.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163sxurmrkw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163jvdennsy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163auzmfuus.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ndjehift.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163navknohw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163getrksgv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163cgbyuyiz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163vvbqdden.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163macbexry.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163vvlkkifj.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ruhzhcpq.html

================================================================================
来源：http://www.sxryk.cn/163rkhajboq.html

L. 网络请求
来源：http://www.xuanzx.com/163ippezakt.html

================================================================================
来源：http://www.xuanzx.com/163qucarati.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163wuqgezpx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163kihpsyad.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163jyirhytd.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163htahdquj.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163zjlbfozq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163lsnrycgr.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ojrqgbtj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163pjwsxpcl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ezbczvti.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163fadgdxnq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163iknruifk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163obulbseq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163kwgpcxui.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zrslkibs.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163tvbqlmif.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163yjtzpclg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163xlyeitsr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163bigticnx.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163hrvpxzrb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163gswlbvhr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163kcqtnpzs.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qfnvcdfz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nqfjozoh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163kmkjcllw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ifjftmtc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163cylfgctn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ffrewwyg.html

[L04] 设置超时
来源：http://www.sxryk.cn/163kgmktnga.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163msttwnjd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163wkrnphru.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dinpitay.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163isgtopoe.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163inqpgrmp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163hjdjffss.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163jmxioimd.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ofmatdzv.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ctpdvpbd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163pzobrxfm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163kcllcnrk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hytlldnq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163psylonmm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163vqczpdis.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163nhehnwdp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ertsrcnz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163gjzknqrq.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163vythzzfk.html

Py:   resp.json()
来源：http://www.xuanzx.com/163zuwkbtkx.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163bfassdog.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ibftmmzp.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ldgmnbrg.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163biwtbfez.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163wwfrzowc.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163qthmcofn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163stwzovff.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163afuolukp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163sxbhaahd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163rmzphfeo.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163sorqzedb.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163qnjdzoaw.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163vqejbkvs.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ufmfqnyk.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163aojmsnoy.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ddozknav.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163chiryhgy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163tcwxpvdm.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163wjsrkszv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zammdywr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xvlcwzkl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163dkkrnknb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163djbvqmer.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163yniopwql.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163gcrlitpv.html

================================================================================
来源：http://www.sxryk.cn/163dptmehcc.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163uxpsxbbg.html

================================================================================
来源：http://www.xuanzx.com/163zvyvlqsv.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ghracrfy.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163dwkpcuwy.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163oiicnxhf.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163wtlqebuh.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163aapnjgvx.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163zxiwgbzg.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ncpzfvqp.html

Ruby: ARGV
来源：http://www.sxryk.cn/163fphnlfua.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163eojuwweo.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163bboxegkm.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163hyjstlvh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163iuidosqa.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163pelkegfa.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163apqnxoza.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163jxglkbkm.html


<!-- 参考信息 -->