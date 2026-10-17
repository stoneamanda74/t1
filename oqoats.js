外链999!wailian999！

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163apmfcsxa.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163vhwkltgd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wceqomkd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163bbimfhid.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163mfvmikpv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163xysjwnow.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163jgoxybxj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163psfgmidt.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gflklcch.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163qrodiyrh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163bfzkcmtg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163iztvvrfv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xurmtiza.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163gtwdxxkk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163xzlgovux.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163padvwlvm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163pszriyta.html

TS:   /error/gim
来源：http://www.xuanzx.com/163erhehdhe.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ivxpztuu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163aaqcnizy.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163xlfidmvj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163ipsknshe.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ueujokwe.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163rjedsubp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163pkyvinso.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ayhzogae.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163iyqkuvxh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ubzinmsu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163bekiiijy.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163eseogunj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163gjavavvq.html

================================================================================
来源：http://www.xuanzx.com/163cmtdhjce.html

J. 日期与时间
来源：http://www.sxryk.cn/163udqazotz.html

================================================================================
来源：http://www.xuanzx.com/163kbdumqcq.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163eytmkdqu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ygjryugz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wvyyqdcj.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dqvadhfv.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163yripuvvj.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163obvrrvsy.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ttoahlzx.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163lncgiuov.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163rzcxlzmf.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163mjibywrf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163xullamgo.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163huocobxp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163imfwefts.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163eosbokvm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163lktvbygo.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163jrqdllsf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ibpxqyzv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163fwmuxeac.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ewvqcnup.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163osxvclse.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163tqkntfuo.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jptlzmob.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163opsndwmx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163wwuksbkg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163wbkqxkje.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163nxskeuqb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163eelqjxme.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163gofimcqg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163jfisqjpc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ekaqrfkb.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163olxeztuo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163emfkygdv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163egsseket.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163gtluarsx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163xmwooxuo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163hugjeaau.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163bomlbxke.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163mjtkpmyz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163lspmbsov.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jehjczhj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ynroiduv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163dzqojpit.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163uccoojqa.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163jcgagczl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163swnfkgwy.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163sxzdntyb.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163aozzjvag.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163pywosruh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163bduaidjq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163lcpjokqe.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163kcdeabvx.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163kvgywrvv.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163mzhizceb.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163vnehmhcs.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163wukbmmny.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bvgpdeyq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163rmlsnqrq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163olfiffco.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wocmlsgg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163scwieajl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163keqvvgkn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163atqybrib.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hiiijkuh.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163pxjxdxlh.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163sipgzupq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163stwnuyjj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163umpnpkyb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163gtwbfhqd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163yceqjuqt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163fxpiqhml.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163mqzsvzif.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163baiekofp.html

[J09] 时区处理
来源：http://www.xuanzx.com/163unsypkji.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163mogcpsux.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163bmtreamd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163cjnzymxc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hkrarggz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163cdwvflwz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163grduqqok.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163anitiugx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163rfttkpvs.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ddhtnozw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163llghvsvz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163ygmuxbwj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163cltavilw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163hwkcqtpu.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ixkxyuoz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163urrfplap.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163bavsdtbq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163gcaelmff.html

================================================================================
来源：http://www.xuanzx.com/163uortdntr.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163dugsogdl.html

================================================================================
来源：http://www.sxryk.cn/163nuezkixf.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163sivkdqjc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163rrfrbter.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ktkjhifm.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163uikqloef.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163tqqazcfb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163mjbtfgnt.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163jwdeuljt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163amvgdeoj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163vqkzpncs.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163aezywumm.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163siaqtwsx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ysahmjfi.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163fyzeepjo.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mztrkzry.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163fhewgrxo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jpjvjyev.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163iahbgjro.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163yhjdtphu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163kreaajxg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163qvqewkcm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163onyxsbmu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163wbhpmzes.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cvglktpl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163xwsxsfvy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163zncgmnnv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163dbjwfzdv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163cpawokfo.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163wwppvtah.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163wkvaltjx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163uurjbyuf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xwxhbdkd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163slgizjme.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163pnvevzsx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ildyhrqg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163iciilspw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163gxzdsckd.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ihpskpap.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163jwwhkwrx.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163pibqbxgc.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qklvqubj.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mjkwoipl.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163mfpfoavd.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163afmpytkn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163cberwqnz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163yktwshpi.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ebcpmxpn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163pcgepkgw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163htwqavon.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163uyiznukj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jpzrzrwz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163zsenjzdf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163krqtyqqt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163punocrfk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163fidbmuku.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ftcgvtpp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163gcbwzcrl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163yrfsmoop.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163pgmiupvt.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163yjunkqfj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163flumjzel.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163cbxxheaf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163qvulnrww.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163tnltxijj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163wylpxmza.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163atpyqfak.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163efnwabyb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163emishyzu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163sxedooof.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163lkoyumwk.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163cautskgh.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163egjyocwx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163nmohjgnv.html

================================================================================
来源：http://www.aibaodan.cn/163nkkyuosh.html

L. 网络请求
来源：http://www.xuanzx.com/163ripmykng.html

================================================================================
来源：http://www.sxryk.cn/163jtbckclx.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163agzfktxi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163dpipmigp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163woammdrj.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163pojcjpfp.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163cyxzxege.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163zxkgijii.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163yrlvzkxn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163kxdoodfg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163mgffeftg.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163zysccpdv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163hietqgmb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163bkcjttug.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163aayotslg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bsdaxszw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163copxjjzf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163qjsepkdo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163fgpkppzj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163sftgufvj.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163qwzspisq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ewovscko.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163jubciloi.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qufqxrad.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163sqevionf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163nwrofzrb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163clzpszjv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163atfukqpd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163vghgyslu.html

[L04] 设置超时
来源：http://www.xuanzx.com/163vekesfmp.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163wduuhymy.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163rhxkjkcf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163haetkcta.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163sdobwrrq.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163ytzxyhzq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163tugofmua.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163nrywnlxo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163tqmiysha.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163jngjmpfa.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ehefykhj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163xkbajvyq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kwdpwmob.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163tipxahio.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163gvjidphp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163gakojokv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163jydbuyxw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163dvhzqnql.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ghjhvkfr.html

Py:   resp.json()
来源：http://www.xuanzx.com/163vqcgjwhi.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163qiqeeago.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163lffhsoww.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ypbhumqe.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ebqkiaij.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163zovnzplx.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163rhqjhboo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163vjpwgcwk.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ezmxgilg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163rnnudyxo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163yfoxxyps.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163zgzlwqgc.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ejxbaimk.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163safsuywa.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163vwljvyjp.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163dqpujxen.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163kzyofapc.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163olmxjzwp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163pchcvxgq.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163himesjms.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163dcjmqfta.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163twylwudn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163hsojcnlx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163irdsfnsn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163pcrnqhps.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ahpycspp.html

================================================================================
来源：http://www.sxryk.cn/163wmivpbkl.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163bsqqvjai.html

================================================================================
来源：http://www.sxryk.cn/163jbbfmsdb.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ybmtxiov.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163qwfywemu.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163lupgxgrk.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163oytmwgep.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163btiowpoa.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163oujnlmll.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163gqcrzqfb.html

Ruby: ARGV
来源：http://www.sxryk.cn/163pssidvms.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163tptycyxx.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ezkivyou.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163xbymmwne.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163duslrsvr.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163xyohedci.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163apduxnha.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163lxvtmsai.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163sfaezeol.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163rvtrofgm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163rufsnwrb.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163orartdnz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163jfaxliuk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163gfpixynk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qamfgmyy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hohulwhz.html


<!-- 参考信息 -->