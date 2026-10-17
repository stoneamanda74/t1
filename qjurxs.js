外链999!wailian999！

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163kzlhrfvd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163xadcukkp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163oeenmuzb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ltpsnlez.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ntewtdyi.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ebycyxtz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163avhrivok.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163xgeeccfz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163irkdaoxf.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163irhzbela.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163lkakyrwu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163bhrincrd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163wgjwfizm.html

TS:   /error/gim
来源：http://www.sxryk.cn/163yirxvzpl.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ksudepwx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163fpnaoaxd.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163yvzykfns.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163giwblamo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163hioqvulp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ybennsqx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ezazmgay.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163yfpimeku.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pqfbdxnl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163uifmdgis.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163dwpkmjtw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163yecxoexl.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163gpsucyax.html

================================================================================
来源：http://www.sxryk.cn/163aiapsgaj.html

J. 日期与时间
来源：http://www.sxryk.cn/163obubukcv.html

================================================================================
来源：http://www.sxryk.cn/163arzolfzx.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ovvsmdnp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163hcyzghsx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ewcxcoys.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163eibcivqn.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mqocqgpk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163docxgpid.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163jfuecxxv.html

Ruby: Time.now
来源：http://www.xuanzx.com/163cukxbgri.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163rijijfah.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163fiaqthtl.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rsavtdbq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gmsfvqpy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163sxkhfrrj.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163gqenjaxz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163vuyepkav.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163flbeyvmo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ksdksohk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163tfzagjwm.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163cyfvkerg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163culwymwz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163kojjfwta.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163otbllzjq.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163gxrlenox.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163owididvn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163olnmtxww.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ajduuifu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163plnsikun.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163darznegn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163zyrimbeq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163inxagipt.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163binbucha.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163criofylx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163cajhhqgo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163sugjwepe.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163trfknmrp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ddibrtbg.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163wrrzxfou.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163qpjxjfpp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163sdgxjqsy.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163aspvlyln.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wejqliji.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ktpkhyqy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ofllxigs.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163gshgqzzt.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163urmzbpvg.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163zaexvxsc.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163owukhzgj.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163xwlmcroj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163fmwcmfiy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163lmjqzsjs.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163pfduwgff.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163qojuheup.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163xpmsrnaj.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ywtviban.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ofmpqzkt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ltdnxcqd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163avvkozym.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ipxfoglq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163dwyphhku.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163hkxcoyjh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163nvunuwdg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163czyfatmw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163daiumewh.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163gdvlorqs.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163fxbhgnyj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163zjqcqtxs.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163unbtskdq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163shkqhitd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163crlywopr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163nfrerdvr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ydbqlaip.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163djtjhzib.html

[J09] 时区处理
来源：http://www.xuanzx.com/163uuxrktiu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163grrfrsbm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163dwnwulbq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163nulvcpyj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163roycqiby.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163yvuaqdfv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ecghngqs.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163qkjyvhrl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163eavepopp.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163yiotmiww.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163wvieccbv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163wvyakuif.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163mnvguisq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163lfewsrbv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163bysvsewj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ghkskqts.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163dotyflyh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163mxcjlgow.html

================================================================================
来源：http://www.xuanzx.com/163oehegifz.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163yaykycby.html

================================================================================
来源：http://www.sxryk.cn/163bjvuzfox.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163gpujvyje.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163cwpgptgh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jykpeemp.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ahunlrll.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163oebnazkk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163dxsxbmnh.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163kiowlcyw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163qmkottoj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163cqoncvnp.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163urqpwzyg.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163zcftwmpw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163iyvzayae.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163sywccytf.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163gsorkqvv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163uiiqzfqo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jclfcqrn.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163kppscxki.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163pzdxdyco.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163cvqzqfqf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163wvpjmrrf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rgstnhpw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163hocdqehq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ijhvurou.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163mhybviol.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163mgpszhnc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163wwwcyley.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163rqdscgre.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163schdvbvm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163veecpbhe.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ahedjmyv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163auyvzono.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vbxxsptk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163geumuhsl.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163yxpiobdk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163hflbzlga.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163kxavwqlo.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163xfnxcnyx.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163vxjvxbfd.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163pgwnsgqq.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163gzkdxslc.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163uxlooaki.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163xikaqeiw.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ikdmtlss.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163vtxlpyxl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163eshrnlwd.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163txizmxpb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163nkitygex.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163rrwsuutc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163temmlsni.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zqikcxop.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163nqrtosdd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163kazfzinn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163btsdpahu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ttydvvzr.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163lvlrywtf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163toufbnrr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163dzqkvbfy.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163rvddcter.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163csbqfckw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ngfrvmgc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163aqtzksjo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163kzazfrpc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163zkgyjuea.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163kxsaives.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163srhwpvfn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163geenuyfm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mnekpxwt.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163idxxgpds.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163jqjhgdjo.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163dcchjvjp.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163fyrreemn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163vzlernqj.html

================================================================================
来源：http://www.aibaodan.cn/163wckmdfuy.html

L. 网络请求
来源：http://www.aibaodan.cn/163xaohbwcs.html

================================================================================
来源：http://www.sxryk.cn/163hjxhzyrw.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163uzpgseda.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163nryxlslo.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163thcyimrg.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163rmowgbqa.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163pzqvbycr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163iinfdqmr.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163esqoenvx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ykljbbki.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163fnejxwdn.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163lmmhketx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163mudxevps.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163efarzdys.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163cyfzwutc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jsxyflmh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163zhhfnwzj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163zgpabryc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163xaloookn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163wmfuufej.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163ajzircgt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163tmfykuvc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163rkvgolqz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jginmmno.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163fojgqfzx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163erbxigbu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163xqbifrvj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163pzgjddgd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163qpjccals.html

[L04] 设置超时
来源：http://www.sxryk.cn/163wszkbpkk.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163skuwxckj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163quwpnxcq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163fjhjqwqd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163fiuvfaii.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163jblfsbab.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163paaqgwli.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163tefwfuqh.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163tsrunpkg.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163jtegabcc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163vahclqvu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163rzmssubn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ugpbaqvj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wbpdgian.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163njhmxusg.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163guezwqjr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163yaijdwrq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163mbsenrgs.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ybnwjwfl.html

Py:   resp.json()
来源：http://www.xuanzx.com/163gonbljaz.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163mexsfitr.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163urljqufp.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163rjyyxcab.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163pdmtlebt.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163woldyixh.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163odbppsdv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163kqxxtemv.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163vnxtdgii.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163zzhutjgf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163jfsxisma.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163niqetlij.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163uamzatbb.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163xnubqlht.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163rggkcnyd.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163wgvrdqkm.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163iapuaxtr.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163xwzxratg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163gikdlxvv.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163dtlwbotq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163yhobjcsp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ymoamymb.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163qdqtepuc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163auwiltgw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163tlojumrs.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163urtmywmc.html

================================================================================
来源：http://www.sxryk.cn/163wsunqvei.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163lgzmtwoj.html

================================================================================
来源：http://www.sxryk.cn/163rwwnuwuc.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163uftbwrih.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163odqxyqkv.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163yuvaubvf.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163oegqqwvy.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dabuuxiq.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ynxsvhaa.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163eodqonkm.html

Ruby: ARGV
来源：http://www.sxryk.cn/163vjszrhdb.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163boarwbdn.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163fdimuzbt.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163wwpwivul.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163wigkwzwb.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163icasmzuz.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163lisiacbc.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163hidpehki.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163rmqbjtqm.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163sollilgn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163eimvcosr.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163twtfjzqn.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163snwcgbot.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163vmcyrkfl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ovjahatr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163eoemtimk.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163hwmkbliy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163uithnjxs.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163zkrjrkfk.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163gbgrbzpr.html


<!-- 参考信息 -->