外链999!wailian999！

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163exnbxerz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163olahmupa.html

[I04] 正则替换
来源：http://www.sxryk.cn/163stclbqcf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ucgyndpy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163hbngumjl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mqwwiooz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163lpgfabqh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163bizrabyb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163jrracvth.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ljqfugjf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163dmxstbyl.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ckjnyact.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163icfaxrii.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163afhqcmlj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ipcbbuom.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qshkhtkg.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163dyziaeuk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163nmhxzghs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163uzsownzs.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163qnppbqat.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163awkdcuvv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zdywfnoz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163hocamrvc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ypsqhrrx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gcbhcpsq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ddrenivp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163wggvcmzo.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163adegaygc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163cyqwqugp.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ckdccdnh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163tmmytjrd.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163bznhjkhs.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163tssfhprf.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163wcjlyyhv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ijlgzhic.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163hqajlxue.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163hnievbuq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163alvouybi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163lmsodolv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163kzwmvsfc.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163jzaqhcya.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mwnmhzcd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163kwyxtsff.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163zcyfezvi.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163gnxfhbmb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163nmgpuvhs.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163xefhfidk.html

================================================================================
来源：http://www.aibaodan.cn/163bssdrblf.html

J. 日期与时间
来源：http://www.aibaodan.cn/163thqrnuii.html

================================================================================
来源：http://www.aibaodan.cn/163gfhnkifp.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163lfjzekea.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163kappbjkz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163vvnxugyg.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rablzzbo.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dzaormak.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163qijfxpmo.html

Go:   time.Now()
来源：http://www.xuanzx.com/163tpbjical.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ayvmmvrz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ycgglcia.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163djeglinb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163xfubxetv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xrpcjdeq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163yyrheung.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163hnmbuqcx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163xhnbkffd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163yelmozfm.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163smogpagg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163gatyuyyg.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163axckweez.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163xqonhhrm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ycgszhni.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163uededgsg.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ceswkook.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163wtvhnffb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163lilqfrhl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163dlyaoons.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ukhhxxnd.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ocxyqpxg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163dpvblsez.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163czpybimz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163atktyemo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163xrzidrpb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163dvntpdml.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163hampsmjk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163jqytnxkl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163hhcatwdv.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163nyousoci.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163xclxihkf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163titoaowq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163robmxxyf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163dxsqmsjk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163qbsaydyb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163gtjohkcl.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163udzdsplh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163lgkafmup.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ulliuctl.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ndsyurnn.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163cfxciihf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163bsneblrb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ggemfpaz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163jepclzcw.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163bxhjsisl.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163zohnrgih.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163uaaldjsc.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163xnbeipjo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qnxyxiac.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163iqovvdhs.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vtlqlghu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163degttxws.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163oftsyjua.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163mswlavuv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dhhmizti.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bifdpder.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163bdyrssmv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163mihohntg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163nurluctp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163zzlmulav.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ijlactse.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163gohhmkld.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163xwtjhocf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163bigldgxe.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163movzcjdx.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ajilmlxm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163pvsiyyzp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163jsjubdcs.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163erbqdaau.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qtoipwga.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163pgdplvfa.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ugyiaqrd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163gqosancv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163dktxrxtu.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163osrruqqr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163azxivwin.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ydtiptad.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163aizszijb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163cjqmlffh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163rzknogcp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163uunqlcnn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163jjfnuajs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163piqjahia.html

================================================================================
来源：http://www.xuanzx.com/163ccbohiva.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163obxtpzbu.html

================================================================================
来源：http://www.aibaodan.cn/163rtjujwff.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ociewxzm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163suwbkdku.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163clrzzavu.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163xdwlijpd.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qdenvlbg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163wqxztuwn.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163nfmmyydr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163faxkdchw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163pvljwvob.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163bkmfundw.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163cncmfvmm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163kudelkhh.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ppcyqpyx.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163smgwymxf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163tgjlpurf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ytdpfqkn.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163svmrmjok.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163jfhqvnzi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163mdnqhmeo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163fesothmb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rxgkbjdn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163gvtoxmkk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ijpdgztq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163sccbowmr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163cuhmzcyc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163djwaolnk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163gtldkzir.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163bnwzvuqk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163yngpemdm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163iecrxhsg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163aukphgcc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163uqjxsiwb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163aonejrsf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163gzpdlxjw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ncysyxms.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163viqgrasq.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163lbyxaegl.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163dfemmobi.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163acbqvwoy.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163dxhsofka.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163huwlbaoc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163xhkwyplg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163xqdxajax.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163zqhthrhn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163emniwtzg.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163tdnwkxoe.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163tosibton.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163rnelsqjd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163uzjmvauf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163blvqiiia.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163xakmjjwh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163wupvigsq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163bhjjeoli.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ekiavzfm.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163lhzglwmv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163buhgyncp.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163wtomfppf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163oulhknqi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163tvpeoevu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163hblsgsmm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163lmmrrbdx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163viyqelkv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163tqbhovym.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ycdygjut.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163jhpmnbam.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163fanadziy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mdomwlew.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163nxuyztsj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163opcxnuwm.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ijhthqto.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163cmemyqnp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163hxxymjnk.html

================================================================================
来源：http://www.sxryk.cn/163ubolvlmt.html

L. 网络请求
来源：http://www.aibaodan.cn/163aairryis.html

================================================================================
来源：http://www.xuanzx.com/163yvsoleev.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163pskgkxsz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163zfnneaen.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163dxesykvg.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163vehommkf.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163qgoigjbw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163eqeakave.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163myujlsmu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163vkjiyegp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163hnlkrmex.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ccpuryvs.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ayaicwqt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163occnzstl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163wgwjazpt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ynkrcqrf.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163upbkljqw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163gmmdfvyp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163pqudfyvh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163eacjigrc.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ztptqcbx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163sbcsedjh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163xvjkaygc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163cuwrprrr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163cncvuyly.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163siubmyrr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163odqbruph.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163hjnodlwg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163hdinccuh.html

[L04] 设置超时
来源：http://www.xuanzx.com/163gtlkmzoy.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163avtbzqck.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163nndcwdbv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ravhodgs.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163egprlfau.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163uabhrfwg.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163epzixmyc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163lmmhlkjt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163zksxveli.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163esjgmzoh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163dkppzlfa.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163treupyaq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163asmworqb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163tocsbwaa.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163eqilxzjo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163wqufmtwu.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163neuinahm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163djkwxtsd.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163vvvztfsw.html

Py:   resp.json()
来源：http://www.sxryk.cn/163zyulfrow.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163titleyhp.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163smvoigym.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163llnxxbjb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163idrvwhjz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163gwqipajw.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163iapvmmwc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163cqdglana.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163jgmcmijf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163pzcpcrle.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163qlyaysbe.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vacuafpl.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163trmgpqoe.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163vqzjcptk.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163rbhtxvyb.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163tydofqzz.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163uhsmrgmw.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163jopdgezo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163iuqdwwdk.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163njiweisp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163igewfujn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163byccrjmr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163rfaozchr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163kzcorcyu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163xhifazsm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163rksuekeu.html

================================================================================
来源：http://www.xuanzx.com/163vohhfdpj.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163spgorycz.html

================================================================================
来源：http://www.sxryk.cn/163lcxmgxhw.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163pqcibhgp.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163knutfnlr.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ytffshvj.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163cfbizmzy.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163sdmofkmo.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163wihhqphs.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163zjwihual.html


<!-- 参考信息 -->