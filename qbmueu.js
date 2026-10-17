外链999!wailian999！

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163tqndmlap.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163dnoyawas.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163qqswqbva.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ugrbmhty.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163ikqxwyuz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163cofcoyik.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163cqzozrhp.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163cwgsvgdt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163odrihymq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163fqqdpmaq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kggfhtbm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kjgyhbvf.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ououlnxo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163vmyhfnqa.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wxrxngpc.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163yutrxulr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163vnlwltuh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163opnlgkmw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163cqvzwghb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163axgafvcj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163wvsxtmfr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163hmjatmhj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163hbjfccsr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163socyrxzg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ncwpdzwj.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163mnytgclo.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163bzezfduk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163qtmfrggh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163rmedmftb.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ygvjlert.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163wygbrcym.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163bgjmujmm.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163mruieeqs.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163tlpvbyqn.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163xnehlocr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163pjslnyke.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163dulgxmzt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163nkerljeq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xpxkqwwo.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163pnaachge.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163cjagnjqx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163yzekhjla.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163gavsedce.html

================================================================================
来源：http://www.sxryk.cn/163bytysnlo.html

J. 日期与时间
来源：http://www.sxryk.cn/163juawrulr.html

================================================================================
来源：http://www.xuanzx.com/163hxzddxcu.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163cjqqxkkr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163cehopaka.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163uzqjcwgp.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163aqxlubur.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163lperlnsf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163oztslytr.html

Go:   time.Now()
来源：http://www.xuanzx.com/163zgbmrteg.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ydedumgc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163zqlsleqc.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163rcazroxi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163qhjsakse.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163lzgubwbc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163gyeaojgk.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163utwswxyp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163pozmgmxp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163vxcbksgd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vdwjkaud.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163dnlmahcp.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163asdhrcwz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163fcpuqbjm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163tkbjxxlp.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163yokwirdd.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163glfecqrm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163tvpqhpjp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163sxnzxjxt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jpadvytd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163uiskmnwv.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ymiazzkc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163jzhbnuyg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163oufuwjib.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163bmvtrwyn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163znmrgdmy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163zosvimpu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163empcwgux.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163jueknwrz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163lynkakun.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163xmgkjybf.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163kpiakbef.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163pmptaiaf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ejbbvlcr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163gkjfiqko.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163llwhpjtk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163crnssndg.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163xsvhkrxl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163gfdschdm.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163tcacfmlw.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163mflruajt.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163bsqtewgy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163tbublupv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163cyepekbw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ubuuxqle.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163bdxrznbe.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163bellrtgk.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163qienrnql.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ljwefslv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163omnpoprq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163zgcdtgvr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hsrokseu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163uxqecmdh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163cwuklddz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163qaeufrrb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fwepawdf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mnfnimek.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163gqeqilcg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163xrfloqpa.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163uodrghot.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163gifgqbxs.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163fzrpttua.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163caqxrmyp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163zjczpzjq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163cndgpgmv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163whjmjpxx.html

[J09] 时区处理
来源：http://www.xuanzx.com/163muxtizis.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163rmilumgd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163enlhmssh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163xdyfalzo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163kkceixlq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163evaxknyo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ghaptphx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163bnbqzmnm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ixeksknt.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163wmsgwibw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163omwjcaay.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163lgbpymck.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163afxuczfk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163vleyjzur.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163tagatirp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163bbcejxul.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163lxffuvdz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163rfddtnqi.html

================================================================================
来源：http://www.sxryk.cn/163lmtapnwp.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163mojzypvj.html

================================================================================
来源：http://www.sxryk.cn/163bsvnhpnn.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ebuctbzt.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163yivrkyoc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fcuesqou.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163etmrjuqa.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163icrrflru.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163wcythncp.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163qnkvqfxh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163rkvfryuw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163eikbzebm.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163qvivdrrw.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163dsrrzobd.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ghtiukhd.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jraqospe.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kyyardqm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163vtegozuc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163kfgidxbh.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163pzxbzxgc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163qeeqyszo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163fmtxmkhz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163hiwbtjzw.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163pilgkfte.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163wdsrpfcz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163kxlqddww.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ssprjqoc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163hxrpjffl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ftkeadeq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163fusksgee.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163nqfissaz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163owvhhnev.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163edbpvwqg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163zoszgfkm.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wivkrtzz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163edgcsyup.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163uplykdzz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163coccktpq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163bzudwycu.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ilqqikel.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163bvswdkoq.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163udxvuihg.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163yreurphw.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163urktqwxw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ydaupqcv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163lkmxegzz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163kvhwmfap.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163bmmqhzyd.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163mnytneyf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163vbxxqkow.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163jkzwhjyz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163zqkjrczp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163lsyptqhb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ucrkwghv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163lfmyaciz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163zjypzwvu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163gfscwwmw.html

[K07] 进制转换
来源：http://www.sxryk.cn/163tmqyvhqx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163agozjifj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163yzrslimp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163kdedtwhk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163weugukjl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163prktvnkn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163rtypgyex.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163mpstdmjd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163nzxtywhs.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163uhyblsjc.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163jrjkfmcj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163vimuidta.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163iqqfenfr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163rpfxkztb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ajugqeut.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163drpsllyi.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163lelbolgx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163cillstvt.html

================================================================================
来源：http://www.aibaodan.cn/163jihewjkn.html

L. 网络请求
来源：http://www.sxryk.cn/163wncbbnwg.html

================================================================================
来源：http://www.aibaodan.cn/163nohzntey.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163driljvah.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163usaacuex.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163hlpitqiw.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163kkwxsakl.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163dfezkrrj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163bpnfuico.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163bdcmtdsw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163cgucrijg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163axuimpdt.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163dltpguzf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163hyauvnmc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ztniokgo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163uoelujcj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163numdhqqd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163kpozpake.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163rcypozst.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163tdltknqe.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163yinizzcy.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163pbkwxlbf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163xprotrnx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163sgtsjecm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163dpuaysxe.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ofjrlaxu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163pkoghfvx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163uhibzdmf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163mmvmcmyz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163wnkxpkez.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163lciexocz.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163pyeylaqq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ykhhvbhp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163vfzvedai.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hmpcecxy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163twuuzxsn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163crlmzeca.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163jqlxtsxx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163nscekxkf.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163kwqgtnjj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163lftmdfmy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163bjnpmeai.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ailbkmya.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163nnzgutpw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163teivagab.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163aqpmnxhv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163cisoytvq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163kathlnxq.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163cakfvsvy.html

Py:   resp.json()
来源：http://www.xuanzx.com/163bkjptqgw.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163phuwfrvm.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163qugcvqnv.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163grvytypw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163zznjnyts.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ymmgiizp.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163lsmrysnm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163pnhqawnb.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163oqutnuyw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163oymgmajr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163vuglsuwa.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163mdztgfmf.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ciwlbijm.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163roeozwnt.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163jtloxbqe.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163kwvazqgg.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163vqohyoxr.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163cswabzjh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163yrkxgxot.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163dntnzjks.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163wkpzjfau.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ntefkcwx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163aqjnoein.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163wceqtuic.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163zrqexvfc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163tdhpebke.html

================================================================================
来源：http://www.sxryk.cn/163ebiljzgr.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163fgsexucx.html

================================================================================
来源：http://www.sxryk.cn/163lslocgrt.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163kbnelblp.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163cqczeuex.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163mnqifkyc.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163hdlaqabz.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163emdyodaa.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163jbftwcov.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163qjhlbert.html

Ruby: ARGV
来源：http://www.sxryk.cn/163lydpppfi.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ncnwzqfa.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163yzmubone.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163nbbbqfeb.html


<!-- 参考信息 -->