外链999!wailian999！

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163iuuhvgvd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163jjxvhcld.html

[I04] 正则替换
来源：http://www.xuanzx.com/163oasacrtn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163fdtjppqt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163luqlnibw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163oyszovcd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tojrvlyq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163fiaxbffj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163llgdoqvl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163mxjotxko.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163kajepepf.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163odepqpcb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163zldxpnbu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ltvcbkws.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163abgyhlzj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ebzpsnnw.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163gghlaomk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ckntdlle.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mlhmivkh.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163pyrqjypn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163nrojmvgj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163uuaflmys.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163twtpztzi.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163zjedscrx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163glflvlct.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163zbrhpelg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163rfepmues.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163fhlxlkyx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163suatvihs.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163lxvqtxnr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163nmcuwuli.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163vpiiacyu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163bhcophhh.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163vrvghosx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163syqowtuh.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163daqvfzfe.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163lasjxfqx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163dgkttapa.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163llmhcqvy.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163wnmpjxhd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163idvuvlkj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163zeppejdq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wqtxitnl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163uejihijk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163yfqkymlv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163lqaoxjoz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163czgczsjh.html

================================================================================
来源：http://www.aibaodan.cn/163tofaxbtb.html

J. 日期与时间
来源：http://www.aibaodan.cn/163msnntylh.html

================================================================================
来源：http://www.xuanzx.com/163mfrbwskb.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163czishukk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163uttscxcq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163dejwlrep.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163bhpmfmka.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163crtjhcwh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163cpimsdtj.html

Go:   time.Now()
来源：http://www.xuanzx.com/163fhpwsrqz.html

Ruby: Time.now
来源：http://www.xuanzx.com/163hvpkmobd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163zdxxyxdz.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163hmiixoym.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ypknslhd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163camqwhuu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ecxyxyhe.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163gzqrmizy.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163itmoipks.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163qbaonrtt.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163lfnzvqco.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ksxoqllu.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ovhrygdf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163xxhlkybw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163oedzvcdn.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qhiraxmm.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163gqhundcj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hbuzdiye.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163uapjihbg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163papdabfe.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163arcnmmrf.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163fgqcqsot.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163qcyzskwk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163cfvztztc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163nmyntdga.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163wiwyyuqw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163mjhssugr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163iyktobxs.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163fxtfkljr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163uwmkummc.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163spgaiaco.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163pfxtamko.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163xdzsugic.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163mvtlbmio.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163hgtxwwxk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163istnmojm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163tliinwoi.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163sqsigklu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163dfedinfk.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163tisfnggt.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163bvwyyskc.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163quhehsql.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163jfuffhpj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163uxqpxptf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ahnkkqrt.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163eikbldqi.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163prubtcyx.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163mpechbjp.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163pekxqmgg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rwszormw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163uqarcddb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163srjfkfym.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163nvxhqdmh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163kvjtebbm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163avzunxta.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pnrynmtk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qqtavllk.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163whitlvir.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163jfawwrxi.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163wmupxufq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163foggufhb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163jcgslwji.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163yssfdufv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163jzskkvee.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163mpvygcgm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163whltboic.html

[J09] 时区处理
来源：http://www.sxryk.cn/163jgyncrns.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163oybnxwub.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163vfhulupa.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163jrkzqxgb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163oklotzvg.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163scpycadz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163uzzwmlsy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163hkxiiksz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163xfqkdwji.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ydojibau.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163mcjoqrwo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163hnmrpxqz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163zwygkpup.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163itfxegmn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163byhimaod.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163xtjcjjfp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163jotqgdkq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163huunghrg.html

================================================================================
来源：http://www.xuanzx.com/163nvkspztn.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163uhlprhoj.html

================================================================================
来源：http://www.aibaodan.cn/163bsikrmut.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163etzhniol.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163dfaumklt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hmaoiqqa.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163luabwvxu.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163pytojyns.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163dolzbkyu.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163uxjkzjch.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163nlldbdyw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163kjswflac.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163wezobekt.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163hinrmllu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163uhgkdlno.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ltdicgqu.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163nqdairdc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ptgjyfiz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163gwdbcser.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ioxgffob.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163swbcqnpc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163kryowows.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163yioiyfvm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163bxycixse.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163tcupargq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163kdvokbrq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163kdrsrzxm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163iilyzxkl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163dybbiecl.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163gocmmiyd.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163raebnebw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163qrldhwna.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163oraxsvwd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qfujbszj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xkuovbtm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163klefhoss.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163whdcpkww.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163cjltlkkj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163fmlmjhvk.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163uxrfgovj.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163dapnpbjf.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163rougejxt.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hfdjxbvw.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vaqjzjeg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163zbtxbmug.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163lwlljgaw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163porxfyle.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163hmwjxdfh.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163jyropwtl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163rfrcmvce.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163xqimqvyx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fzxukfrg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163pcjitstt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ctpczbgd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163nuibxuio.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163tfmsmbqj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163mygvvzhr.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163qtjoojnh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163hhmkhttm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163bpbanmcs.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163lycxyeny.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163nybcukof.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163hzfnnuly.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163cxnerixn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163odbikzbo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163kugdhidl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163hskrgffu.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163vzhphytu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163hxpjadxf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163gcmaafhu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163hoiykmgl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163tswzbqcc.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163phlyqmbf.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163upiafaka.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ugxwabpa.html

================================================================================
来源：http://www.xuanzx.com/163rkcmtjdp.html

L. 网络请求
来源：http://www.aibaodan.cn/163gsfdunyt.html

================================================================================
来源：http://www.xuanzx.com/163hsuvglau.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163shfhfjcl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163rhxcwtmw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163lfbfvcvo.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163jfimmpyb.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163nnumwgai.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163lutrgbfr.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163fgvybmkh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163xkqlixty.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163zlfwhmyi.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163dbjbjqzg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163xbixbswf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163sqvufcnh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163skxngzwy.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163eczbhcix.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163syxudhko.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ekxhfiiq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163xflmhcqt.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163wjeobakn.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163pkfijxva.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163tyixmfkq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163edbpspyj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163querriin.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bngcirud.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163piiqggxf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163kwahriik.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163qujgcrge.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163hhcuokdz.html

[L04] 设置超时
来源：http://www.sxryk.cn/163bpasztll.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163qrybqayu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163qsbnmtnv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163oezymxha.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163aesxyawx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163lpvejhyd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163gxguikhc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163plztwhzi.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163fiaqpdbd.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163qujcffrk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163mrjfside.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ffavfyaa.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hdwmhdwy.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ieahigxm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163jzdxrhdn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163unghywgb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163kdqpsnib.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163bxaureep.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163lyorgiig.html

Py:   resp.json()
来源：http://www.sxryk.cn/163tytrrlkh.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163hirdkmah.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ilqdkxvy.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163zbbifkuo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163xikegtus.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163mtitzwzn.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163osovzzmn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163lnikmwlm.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163fkjxblsy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163cfyggyrb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163hdkqiozz.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jbtvkydu.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ciogvmlt.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163rtervucr.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163egihgbdx.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163rimibfjb.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163fseiwohb.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163mxklpxzm.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163vmmegror.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163kvjusgkg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ucytxzsu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rvzkslsh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163lexslfws.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163bhhqpudt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163kxajqebv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163fwhcxoxj.html

================================================================================
来源：http://www.sxryk.cn/163pxfwfbld.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163pwykdrov.html

================================================================================
来源：http://www.aibaodan.cn/163aabhbkyx.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ypntddvi.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163uszvzekj.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163qukgulrl.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ygwlbpib.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163tehppinv.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163jwofnnyi.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ohralaps.html


<!-- 参考信息 -->