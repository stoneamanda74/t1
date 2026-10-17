外链999!wailian999！

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163tloqxtac.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163qqxrwgoe.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hilsfmvn.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163efoferhf.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163fdwuuiea.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163pokfjtib.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163pvpudnwo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163rajhugzi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163zbvstblg.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ijwervdg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163euyzhijg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163otktnwmn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ssbgdprz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163uhbrwglu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163rljufely.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163nauvimhs.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163mxkagtxe.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163tzzgvdgt.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163zmmuzgav.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163hblhzmnt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163eubyswts.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ukkprsqw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163pjjtoepf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163vngzpiqq.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163eikoytmb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163wapiblth.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163hoaqcqkn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ooypkkug.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163pcpltgew.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163gpomljrx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163nngvoyzi.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163jslwbnke.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163rqkhhldb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163kimeqbcc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163nzkywvtz.html

================================================================================
来源：http://www.xuanzx.com/163xpbnhxqa.html

J. 日期与时间
来源：http://www.sxryk.cn/163edmfowlb.html

================================================================================
来源：http://www.sxryk.cn/163itwiefwh.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163epnnabjn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163rqmnwnpm.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163tjwqrzkk.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qlgjgnnd.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dmsvvabw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163swogxodq.html

Go:   time.Now()
来源：http://www.sxryk.cn/163mvogpxqd.html

Ruby: Time.now
来源：http://www.xuanzx.com/163uyiulzxh.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163hckulydg.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163duokzavp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vnfiiyaa.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163wfcatzyy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163swrlwekc.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163csmiejjf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163tyxkesgj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163mjymrvef.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hiiiccnx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163jtcxaloe.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163exxrxklh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163afovayrf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163hdiaidfy.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163kltvrbhi.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rmmxyoyk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163pmxxypyb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163fxlwhage.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vtytxyts.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163mpjvsbge.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163eiwipjid.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163wsivaxva.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163thvkgmix.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163xezjmfyf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163kycayvbb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163rtrczyew.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163iqctyczv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163undxaccj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ahappaem.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163qvrybubr.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163fkztwryu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163kltisprq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163lftyrirc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163unowmret.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163yjdprrjb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163uqlnmuti.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163tvuwvowm.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163zfcgzagu.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163cetxwkdn.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163issovaje.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163nhdvfpbb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163qonqabux.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163hjkudsof.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ptngdjgd.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163fpvrgwkp.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163bfaxmpwc.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163kommftnj.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163vwwaupha.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fwykktyy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ggwojqul.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163iehyiogj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163leyxchds.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163qcwzcegz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163xkwuzyoa.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163grgsnolt.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163yzjhvgby.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163uxqggrdv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163lkxiitnx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163tnqldwva.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ycikdjbq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ntdwaebo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163hgssioko.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163karccfut.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163dzgckaij.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163srglfnmi.html

[J09] 时区处理
来源：http://www.xuanzx.com/163sdvknbxt.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163bhswrnec.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163drkssrre.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163otfwbajy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163rcndjthz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163dyroemkl.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163pxwvhomy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163tffrwfrz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163iuzilfwk.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163fmwucmbq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163bobwioqe.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163lhhklyrq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163zftjokvf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163tpuebsqs.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163doemjrbw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163tuqzygan.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163hrfwxfzq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163lawisnan.html

================================================================================
来源：http://www.sxryk.cn/163yjennpix.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163evuojraj.html

================================================================================
来源：http://www.aibaodan.cn/163cjkvjvgj.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163doxlqqgn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163klngmirl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163sjmxvjqa.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ddbtbbfp.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163amjdpmri.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ehauscym.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163xhnftbbb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163tdwwoqnd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163hsmxlxsg.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163dkvxpfeh.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163nsxrthvu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163iqeahvdo.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gbmkkbab.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163aaqahwjs.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163feuawuok.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163wqbsrwxc.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163hsowviva.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163raezlppv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163keziacwc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163zrxxvtvx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163akuomaol.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163lfjpxtdt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163meoqdoge.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163rrtsowgn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163oqvjrynj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163wldnamrr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163vpekgzet.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163cdfnycjs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163txydxpcm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163pcwhguwd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pshiygld.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163nyuuuykz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163spmiyjie.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163oftookdx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163wxwktvev.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ajsxkifs.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163kyzmgkcu.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163xlugmzxs.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163bbvzlami.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163snyajgnc.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nuwuazbi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163pnwovkqj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163alidnkvh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163avzhqgch.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163hfbocdcj.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163bwrijfdt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163kgzwbrop.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163yojqyjyw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163kikpngfv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163wjjlvwql.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163pxxrpodt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163expjglcp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163mmgclqyu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163pxcslzvp.html

[K07] 进制转换
来源：http://www.sxryk.cn/163drvnfllq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163mvapujxt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163afktravp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wgapzqjn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lwgbkpdn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163mcuguewn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163taxnvxvq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163qyzumvua.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163rvjxhlce.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163flgkquvf.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163bqbwbttm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163bpzpabam.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163kbblodge.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163tjefcwhm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163axqunuee.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163uvpjyuvw.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163dorekzuv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163atcytigc.html

================================================================================
来源：http://www.xuanzx.com/163axiuddvc.html

L. 网络请求
来源：http://www.aibaodan.cn/163rttvonqr.html

================================================================================
来源：http://www.aibaodan.cn/163hrrpqyhi.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163dnjeicmi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163kjhlcace.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163pvcfcjbe.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163cwamdcbg.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163touycvba.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163berqnpii.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163cimuscph.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163slyuwasc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163hsbokfoz.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163elwwshhr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163klaebhwc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163xkqfuiqm.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163zsrhnxkj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163mtbiwvkp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163qrxuvaru.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163nfmfpvuz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ofcxwhvu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163lxfbhaod.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mmjzpukd.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163sbuyjmwa.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163awcsebyy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163mgevyoyu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163aqwnxpto.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163vjhvxizx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163bwzegwvr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163qerttwxd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ccwznctd.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163kmfizslh.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163gkajljtg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163bzemtowo.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163cnobftzr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163glozsnrz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163sgqhohri.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163cvdvtmiv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163neejdftp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163itpkoitu.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163sccvcrzv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163nhiftfrp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163aitvaeqg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163klorykoy.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lxshppxq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163uxqtqwci.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163dofyrmpc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163mqaoivgt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163xwxlnqqi.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ewnjlxgi.html

Py:   resp.json()
来源：http://www.sxryk.cn/163oquxxifg.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ohgxsvkm.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163zuqdwndn.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163lurawufy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163bbfvxptd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163hedvaloo.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163blskrbsb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163luvqxjro.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163izitomnl.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163jcgkbsih.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163tymbxvsz.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vxszfzny.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163hhqxhpss.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163klbmweav.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ezbfyprf.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163zoimlpqi.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163oxjsduzo.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163xunhrlgq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163qecdlbtp.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163fppkxpwy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qxmubxof.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163osboepkg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163jblvrxpw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163jlhvcpmn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163wpushzot.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163lpxmodgu.html

================================================================================
来源：http://www.xuanzx.com/163eheaximq.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163fcnowpnp.html

================================================================================
来源：http://www.xuanzx.com/163trfnajpi.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163lxcvdvsr.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163sxcxjgck.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163sxhlijfo.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163gffyyyug.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163insacdza.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ovbeslcu.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163dzsjemga.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ybraeahd.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163beoixnzy.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163tfzrydbf.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163pjatdtuy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ddgrrmla.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163pkyyjnbq.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163yqlrvpcm.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163pldlmwbg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163dekyhmds.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163gcwbeuyo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163hvrneqpc.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163vlasagdj.html


<!-- 参考信息 -->