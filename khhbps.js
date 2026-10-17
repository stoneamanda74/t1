外链999!wailian999！

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163hggxnqls.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163fmvrxnwd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wkpxhvwh.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163anrmsqfb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163sbpwuhzz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163vqntavdx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163rwkuwliv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163fexiuujv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163tzcvixrn.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163plaxfdmp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163zeyiivfg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ysgqdzad.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qysuvjll.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163sshvaagi.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163kmxhyfzs.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163lfmjvpdm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163inlxtqtl.html

TS:   /error/gim
来源：http://www.xuanzx.com/163xvqpggaj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163grvaiyfv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ldtdwgec.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163srtcffuc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163vbgzikfu.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163mznalgyb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163hoqezxrn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163kqpjcjij.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vmxcnmwj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jgpnqjzq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163fxatcprx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163nejqlses.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163wjvurpeh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163oxnibxvo.html

================================================================================
来源：http://www.sxryk.cn/163upctawiy.html

J. 日期与时间
来源：http://www.xuanzx.com/163ijzfuenr.html

================================================================================
来源：http://www.sxryk.cn/163nsnwmdpk.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163onvutnvm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163tulnfogo.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wzhjxpbr.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ocleslcf.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163srjdcjmh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163zedjprwv.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163mibodsqv.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163kyhphldt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163iccsguww.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163cpdaiern.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ckkpmwfg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zpbiexzk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163kszhmznx.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163kfoofwsm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163fzrpddbn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163fexgjjmb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zfgcehzt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163zalgsvgo.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ccjpfvuh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163vllsvxrq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163qdnoeqji.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qlcazjme.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163eakjwpbp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163nnhkhyor.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ngsmcves.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163lhptkkzz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ejiypqeh.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163rxejcvll.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163sbpsrisw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ilugnbww.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163grkutzrn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163awxrozlm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163qtjjbeyq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163llrdwrrt.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163bjncdbif.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163lapuksfw.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163hqjyvuuc.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163egrqynfa.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163bajxchdo.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163dbookdkz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163skkvyenp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163xyrrlrzi.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163aqnhjsej.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163oknehbxf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163brkbyanp.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163jebltoax.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ywfewfqm.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163klsyxhvk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163bmljedic.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163xedjcblt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163qdcgpzdd.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163hvflszju.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163eltrmqbj.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163aukboxke.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163abhtlaeu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wwylixhu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163fslxyfcc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163vmmjrygk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163jwtajbhk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163iwbwzpwt.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163snaxzoer.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fadkdmvk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163uaejlxiy.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163asmhabzd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163wofznndn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163iroemnpk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163kyfhoieq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163sevzoshc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163xazolvvv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163zqarhpnq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163wyestplx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163jilkxget.html

[J09] 时区处理
来源：http://www.xuanzx.com/163jfobvfaz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163kdtmzzyt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163kmupamaz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vzqvfcgx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163nniyvrnv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ncwlfihz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163qzxymrki.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163abxotnxm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163eoalouhh.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163weirprme.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163zfaaxaug.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163cwtmsqpp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163xsgiprcn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163osuwbqte.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163sygjeewo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163qgifjdqf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163abkdrygj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163tmttdlny.html

================================================================================
来源：http://www.sxryk.cn/163afbcbczg.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163peneenuk.html

================================================================================
来源：http://www.sxryk.cn/163wnwkzgri.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163doxrifoy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163aputcsfy.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kextkjrx.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pkwuqora.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163bgrnqdiv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163pesmmlak.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163paqqddtc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ctkylnnc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163qvqgixsy.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163jeyymcod.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163pvdmsjzg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163dgnnbdhs.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mfzqfpgl.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163kakrhdnf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163piqgrfcd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xpxiqwdk.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163raxuicyk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163tcmmvute.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ibedpxup.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163jnduxnnn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qlhgkana.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163higvrtce.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163gyhenvug.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163kukrngys.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163qwsvksbg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163sinhcqot.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163xvvpodxt.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ralzwfph.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163xuhdwuuf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163pvkjxbgl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nbjmazvm.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163mzelbtve.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163hkxxyatv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163juzbteni.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163plyhfluh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ajekupbg.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163qxpkcvtm.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163wbbaaekv.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163nxgjoiol.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163txdpdckp.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ntooxuge.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ewjsigiz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163gvukugnz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163nwcecocb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163mpcyahys.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163picntfuo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ntzoobwm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163lyvrofcp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163nzivcenk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163wknaxsme.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163sjkwicsm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163gxnudwof.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163dcdrbdrw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163oxjnkzip.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ifghfsif.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163sewyuloo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163lzyztubr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ndddzspd.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163bvqvrhwb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163rjuxgjkz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163hfflgvmo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163yktpcedi.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163eiioxpjw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163vaieprqf.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163dyhjoxfr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163fbsjzuny.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163udbunfhf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163iefkhhvv.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163eixwwpkr.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163xcbnznqa.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163laqqstlr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163qazyaofk.html

================================================================================
来源：http://www.xuanzx.com/163taxwwwtf.html

L. 网络请求
来源：http://www.xuanzx.com/163rsgvyjpy.html

================================================================================
来源：http://www.sxryk.cn/163qgpinxuw.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163xozzsivi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163wlyccyim.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163bxxcrear.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163dpvyfavp.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163finkkymy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163lnjrfhxr.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163nrbkuvuj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ztcuzbym.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163arpgicrp.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163xoxzccug.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ymflobfq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163pgxdppoc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163uqlqskea.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163pwxmtjxi.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ysawjktf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163xqxrrxpq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163bsxbfnhx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163hmzagafj.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163mabknzpz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163vgkxljdr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163rcyvzjnk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163xjdvqavt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ayjcoggz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163iuajeqfi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163widkikyd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163iclujhev.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163jgjhqtlq.html

[L04] 设置超时
来源：http://www.xuanzx.com/163dqxzueas.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163bjhkngjq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163nisvrugs.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qzqnsydt.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ylftrstf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163nznlxypr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163uzbckzjk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163zvexglrm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163dqnbqmha.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163uirbljnf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163bfugrmaq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163onflhsko.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xevcvtop.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163orimgrql.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163quqceqpc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163liedxmit.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wtvnwfgo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ukojrnsa.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163emlzdtmk.html

Py:   resp.json()
来源：http://www.xuanzx.com/163xkmpfawv.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163wguadavn.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163pxbywuej.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163khuouuvi.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163eawlofjj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163zzheibso.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163qlmuhbhx.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163cqntbtlc.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163dzwuzpgl.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163mhyaange.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163cnsnklxx.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kviftdwa.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163gmlkqbdf.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163vegavaoq.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163yplqaudt.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163zynbdtca.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163vbuipxgh.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163leyksoch.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163qmmgpsph.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163gfgzkylm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163smzubbij.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ernsgtnm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163dhjyhcxf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163bmsllzer.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ddeugfcx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163jrfxcchd.html

================================================================================
来源：http://www.aibaodan.cn/163mmyxkhbu.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163fyiudtxl.html

================================================================================
来源：http://www.aibaodan.cn/163eshjngjl.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163uiuknudd.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163cgjoqlta.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163busnuubc.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163btodwska.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163fwvewstr.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163fnvefybz.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163jurekryr.html

Ruby: ARGV
来源：http://www.sxryk.cn/163inuojoor.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163avatgjqg.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163udthpwic.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163huhbmqxr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163pxthskmn.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163zainacat.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ycxzuvao.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163nehnjmww.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163gqnwjtiv.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163mdbztjxa.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163cvhvzjyw.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163kxeddgpv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163iyxwvgpu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ewhoxndx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163esqkkfiy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163isfczkpy.html


<!-- 参考信息 -->