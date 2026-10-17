外链999!wailian999！

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163eskifkre.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ldbfwfip.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xvvcedba.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vqqvwnye.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163fqkfpvmm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163bqmczquz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kamrsytq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ambauypm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163anhgdcyj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163dtcogtoj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163cjljqdrd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163wzfnktpy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wankvtnl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163xwlomtpn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163vsfwidmu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163jcqhdpnt.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163yxdfhvhl.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163pkermkae.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163obceiplz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163xevcrmmk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163hpumayxg.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ycqqclms.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163sputxoth.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163xiazyumk.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163dohqaujm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163jrywxmfp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163efpeejeu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163jbwghhxr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163qmgmsykt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163uswssbof.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ictlicnu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163kdznzzud.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163toadahso.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163dngmmxux.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ixdilshy.html

================================================================================
来源：http://www.aibaodan.cn/163fcmllpzw.html

J. 日期与时间
来源：http://www.sxryk.cn/163jjtzpbnv.html

================================================================================
来源：http://www.aibaodan.cn/163vkynpgkq.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ibhxkddz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163oaldlyue.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gmmysfph.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163zyteaawp.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ecsnpkpf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163bknfvquo.html

Go:   time.Now()
来源：http://www.sxryk.cn/163fyhxkzyd.html

Ruby: Time.now
来源：http://www.xuanzx.com/163nmndkdlo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ctjymuiq.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163mchfycwz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ovyyehqk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kwbuuaxt.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163nssgaqdr.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163xakkzpwy.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163gieipapg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163gzamobiq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163eadxbvdy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163dscolxts.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163wqrkvsqd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163dqserezv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163dylrzulr.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163iafhzjfv.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163citybtmi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163pllkvmxd.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163yxiqffij.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163wlndypie.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163fivqlgch.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163mnknjbou.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163flrhrgxz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163fputatyj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163jmnufczv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163jcvpjpna.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163rvcirheq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163hotsavgu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163xnfyqifo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163rjxxrvvv.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163yrsurasm.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163qfrcovie.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163gnmjkocn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zuppmsgt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ubxbdnnf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163hoaaporf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163yvtejyik.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163enouwsdn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163fcgfalyq.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163boeexwjv.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163kyrwltjw.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163yilbmdch.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163rwkppxon.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163hxkeivwx.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163elpgnnfy.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163vawftejd.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163pbwbvaqg.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163afjmmxja.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lrzzbmtp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fqyqjqyr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163gsaczfya.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ebeytxur.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qpobxmeo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163cegggope.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163eiythxpa.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qktymopv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jhggkvfl.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163elucisyy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163tjsxzkse.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163alzchvgl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ytpcamfa.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163tsebhffj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163nmzixhtf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163hfxltntm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163brqzbqap.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163eufkautc.html

[J09] 时区处理
来源：http://www.xuanzx.com/163uhfkllfo.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163gkggsfdm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163rhpcaxnv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ecdmlvun.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163vxksnlvo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163wpmrohys.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163inmvvzsp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163lwhbmads.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163rzpstaxs.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163itdircij.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ubqtazgl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163fhdsvomb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163emyeutqx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ymhvxrjm.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ccqflsvj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163eqwbogjy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163bqtornjo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163vxazvfjf.html

================================================================================
来源：http://www.aibaodan.cn/163zypjzogh.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163fhojmjgj.html

================================================================================
来源：http://www.sxryk.cn/163aerszwcz.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163sycecqal.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163urhmidua.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ebxqiztd.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163zaoglemm.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qjlqbttw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163mshqytnq.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163unzjfhml.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163xdfkwrqi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163eahlmpjo.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163hrdvtgns.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163yhpdxvui.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163xmlhbcte.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163wbtoapxm.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jfznhtrf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ioltjhgv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163pyoexpqk.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163veueehod.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163pnuowhhd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ntmsgmgf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163klaazgik.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163lzzpjaeq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163abxypzvm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163frvkhcuu.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163lacrzuar.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ajnldhns.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163guyfnaxt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163eqmljvpk.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163rkxvlqxa.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163rpgbioij.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ywbwspkw.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vsrpbmkw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163gbyuiudi.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163lljapgqt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ikirhvxd.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163rehoenyn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ewouwgrv.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163rvcjbtqz.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163gwmzfxam.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163zlvbwgwt.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163aiaxcfvu.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163upizjnqf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ampospeh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163kxmpnxzz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163fylobktc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163jowssxef.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163xwjrhgvz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163iwwbqntg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ukhdllsv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163pjqtejew.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163fxkbtyro.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163anzfxgoy.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163bkvrlykk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163cizogadp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163lvlilxvu.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ogwypksp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163tvrbgwdt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163cuoztrwv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lwpywpxs.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mnxpzmyj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163cdginpek.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163imyvgunx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163xeqqkmxx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163zyduqmtx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163wdlqsawx.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163bqouuaif.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163hugmyybg.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163hsjtubos.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dsuymuig.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163dygyblgp.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163wrozxmvw.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163tzwzpwjr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163poavqseo.html

================================================================================
来源：http://www.aibaodan.cn/163aaciaoay.html

L. 网络请求
来源：http://www.aibaodan.cn/163ltpptisu.html

================================================================================
来源：http://www.aibaodan.cn/163qvqccnzf.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163fzsguqfr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163pgesqlna.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163wbacpviw.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163qviirquo.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163xpneeuln.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163tvlbxirn.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163xtmmjjqw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163zhlfaimr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163vzqyjvah.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163giuqycjy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163wncycdqe.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163mussmbwl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163oypsbnza.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163fqmppeur.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163zooluyjb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163udhwkmhs.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163cjctmojj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163yyovhiya.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163qrntypxj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ssjvoiut.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163xopbbnbk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vhfcwgjg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163lcyqlvhc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163qnebyamq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163geurpasq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163eeetpjnh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163mmzqnfac.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163jhtsquli.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163eurshhkm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ilzipapy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163evkvnbrk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163kwblbjyl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163luapbbyr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163piwkgksc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ufowngqu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163lvijycts.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163jbrgcbbt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163nettyljx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163bclzilyg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163bfhlumku.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xjiwtagr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163qvulepbs.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163wpzvecns.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163txwntnfx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163wpvqxcru.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163orcsugzn.html

Py:   resp.json()
来源：http://www.xuanzx.com/163lbdbsecq.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163slgfsmzo.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163jvpimiuc.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163oeprnsrz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ujpddwqi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163zviairbm.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163cqzwrbtp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163wlgvtbrd.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163civxpekc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163scwahhda.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163rocswizr.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163mzswoqiz.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163racoelxx.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163uzyxcoft.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ifvpsohu.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163etkhmyon.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163clyzwyit.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163ftrksibo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163nzbmhumm.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163cuxqnovc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jlhxlwgg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jnefujde.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163xtcbmysu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163cmnxcdhd.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163bpoqknue.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163fqfkkvhf.html

================================================================================
来源：http://www.sxryk.cn/163ilcwzfns.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163dtsijgca.html

================================================================================
来源：http://www.aibaodan.cn/163ppqpqcxh.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163vychdwot.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163jfuexxjz.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163aokentdg.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163yonkyuij.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163mkclnazl.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163dqcqdxll.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163jfqryrda.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163wsxtykxe.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163dcoplhpi.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163roqngkqs.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163umztoaae.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163iuibpeqg.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163lvlauuvs.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163qwihkwxf.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163aerzytrj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163sanwgmxx.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163vpulazrj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163lvygzatx.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163fkqhpxed.html


<!-- 参考信息 -->