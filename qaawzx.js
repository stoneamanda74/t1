外链999!wailian999！

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163bmosqxym.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163huqlpblj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nlqepcht.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xzltxgak.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163lekisszw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163vgplgatg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tqgegxqp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163rksflhnt.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163lekautzx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163wdtrbfyh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163mepwdplf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ahhqthue.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163kdkuzktv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163disffsdi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163bveukjdp.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163olmelfrj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tvffqehu.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163groqlfxy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163pzwrsgpo.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163eckbkzol.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163nhbdvuxj.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163tvsocicx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163nozimmrc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163wcvvtrog.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163xnanwoaf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163jgyvprvl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163clhauadr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163clnfnjcv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163lhtrrgyp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hddkdbdj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163itnwdtlb.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163edbxyvme.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163tkodjwai.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163lklexxte.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163xxklsgpn.html

================================================================================
来源：http://www.sxryk.cn/163fcomajkb.html

J. 日期与时间
来源：http://www.xuanzx.com/163bwcjvezo.html

================================================================================
来源：http://www.xuanzx.com/163vugpsqpu.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163zvmgsesk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163vfupqgsh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163pjtekcqe.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vdzavjxg.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ulyeozpd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163fnijmunf.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ymemfzbv.html

Ruby: Time.now
来源：http://www.sxryk.cn/163atfhdjdr.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163xsbswcnn.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163nijrcsrc.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jdquafno.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163sqqwmslc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163wxribddy.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163iyerebmz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163oliboggv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163wvzfkqcb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163kuuewbox.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163zqnmyuhg.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163iyilrgtb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163zfaskwna.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163yufbwnfz.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163wuuigfhj.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vjlqcknd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ptmgbbyi.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163yhylwwoi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163uaorgwgh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163pvsaiqhe.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163milofvpn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ozetvvao.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163oiykwvsv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163felutkgs.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163slymondg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163iqubxver.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163innvzgaj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163giahwpub.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163prxlkcrw.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163jgghxjtg.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163oinxckrw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163wizosmrn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wwtfsgiw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163frkbnwpi.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163bncvjtyq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ksbzwhgq.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163fvehhtox.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163guhnhlfx.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163jknrtlvc.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163obwygcsf.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163tvkwwxnu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163wzcnqjfm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ibhipikm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163tqsahgvs.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163jistlscp.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163cwowkjqj.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163aradalxt.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163gjnidjou.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ihgnpauj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163erzoxsqf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rdxrqhiv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163cpnbrdbd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163rnlfvncl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163mbrhhqrk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vcyrphog.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wkxthgeg.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163evvumtae.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163jstgkqvo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163gnxkzxyz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163gxhezuar.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163bskwesiw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163qanijhky.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163nctkflyf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163hvfbnzyb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163qqnswxle.html

[J09] 时区处理
来源：http://www.sxryk.cn/163qxemavtk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163egmyjegi.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163pjbbqoki.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163sbmltrzq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lspztqwm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163olvegzed.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163lhkmvnoz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ldpjjsfe.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163sotxoaoz.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163rvnbvbbp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163rnibadep.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163xrvpeaxk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163cpbryyhj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163txdwebcx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163nzknqpoo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163gjtdpyui.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163clwzayiq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163dacascry.html

================================================================================
来源：http://www.aibaodan.cn/163rlcwwzgr.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163piyedwto.html

================================================================================
来源：http://www.xuanzx.com/163amotfbai.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163zsltsfxh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163mouptfgf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qdvnvnxu.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163iknnomoi.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163jyjzriuu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163shovbygg.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163jatvznad.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ixypbkpp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163kantohht.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163mruydcmy.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ykjrwnpr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163zwcajzgc.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163fstxbhqv.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163vwpjgtqa.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163umgwahvq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163odydhgsq.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163jryqouqe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163xudzuqpd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163opajjqvx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163tmlxjmiu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163balxyrrz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rgwjpbbq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163vuleibtf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163qboleaad.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163vbatdcet.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163mztsepbf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163emxnackv.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163guzvcera.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163lcydttcl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163mfmnowmk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163lpmvhpqc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163caepsibo.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163yusueqlr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163zoebxpre.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163kqxuydpo.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163vcdigprm.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163osspnjwy.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163jzlyqnbl.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163rfanirxy.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163fmxjdxmp.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xbhwcact.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ibyybxvx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163tmwtqtzw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163sulnypnl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163zyytculs.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163fxfkohop.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163bojdknjz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ziywjcni.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ypcwkxla.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yvydwyec.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163poxcnczl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163kxcsznxf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163izkpwqki.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163lmthzkce.html

[K07] 进制转换
来源：http://www.xuanzx.com/163cxsoxydr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163rrkncsbo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ejkgawct.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163oktocqmb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163hflfgoog.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ylenbypr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163wbycnnia.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163jikpszrj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163seidrhrg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ybvmryju.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ucqnikuu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163vrvuywcb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163hmgipwhg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163fixcxipz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163jfbmgadn.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163bhgjbmjh.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163qmusmycq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163gliragok.html

================================================================================
来源：http://www.xuanzx.com/163tvbsxuuq.html

L. 网络请求
来源：http://www.sxryk.cn/163otalprex.html

================================================================================
来源：http://www.xuanzx.com/163cwtolzoc.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163vrovmisp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163nehdpnwm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163fjdyrhbx.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163zcstvkqj.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163nguavbhb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163hprzfxae.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163jctjhyqa.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163zigjsfps.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163yqigckpf.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163zqadvbwl.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ldbeiqyd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163nqrmbvfj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ajraxyfe.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163knmvggev.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163xemszyop.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ikhiuedv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163fmffagrg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163rvjmmbeq.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163lsdfcjxa.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163vwgbkdyj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163doemttsq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163pbufjwqc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163jgvjhqwh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163rwmuqbqe.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ciqkrgou.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163cyglqckc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163qrrfxwmz.html

[L04] 设置超时
来源：http://www.sxryk.cn/163lgcopkbo.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163iindfjnb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163urlimtqo.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163fvyjmvld.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163drkyqsbc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163cdzealbf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163bfnbkquu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163qmycxhmc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163wxgsulsq.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163qalarzaw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163hpxtzzto.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163nkbbeqpf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163nsxugtlo.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gyoabwfc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163uhxpgzry.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163mgpaofcs.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ljpxhbko.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163tcdtpmrh.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163gayumbrl.html

Py:   resp.json()
来源：http://www.xuanzx.com/163mmfszqmg.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163rtmavdob.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163mlybowqb.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163vfdtgfzs.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163chhqorlc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163vuxvyphq.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163dpakoigz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163kzncndtb.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163wuahvtjm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163vjpudnpm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163glbxkcvz.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wjezyaox.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ewmqazog.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163rhnmvchq.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163njxebedt.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163mvsclxkw.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163czcrthaz.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ubnnesie.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163pmzkmnyn.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163nkpqcizr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163nrzwytek.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mopupmwv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163tdapbahn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ririnkrm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163cmmadhgg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163arwbybpc.html

================================================================================
来源：http://www.xuanzx.com/163hwspkvhc.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163jyolbyem.html

================================================================================
来源：http://www.aibaodan.cn/163zknfwluv.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163foagitpq.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163zlovoymz.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163xoxvcets.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163otttiiwp.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163fjbvnknj.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163nemtwdqu.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163yvbkhgch.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163zmoadbdz.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163eshwrhkb.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163vctxydfm.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163cbbztnhg.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163qtcljwzs.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163hppfpxhs.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163gigumhbt.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163mighmcov.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163hakdtgxt.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163icbrbjqx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163zywrclgs.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163vfktfmfg.html


<!-- 参考信息 -->