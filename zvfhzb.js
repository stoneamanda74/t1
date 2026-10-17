外链999!wailian999！

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163sfuveqtu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163tjfihmph.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163owbpaxda.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163coalqnqz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163rmojhqab.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163nabjfvyp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163esaemstt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cxfxpgzd.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163bxyvjlac.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163mqcdkaps.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pdizbbtw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163jultvtqq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163elkzzbom.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163vrqlyorz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ytkepknr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ppqenivi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163fqrfzbxp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163kbjeegzp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163elpkaqrl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163eqhshcht.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163yumvufvl.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163kbkinqmg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163hjxznnjj.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163vuunwudv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163awgdqegb.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ewmfgikj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163yiufhkxd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ilxtjrss.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163zwxeqeyy.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163gsjbzwvr.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163uzdiwruv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163rspbkgtv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163tfhpwxpo.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163exjfgaqy.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163uainccen.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163odkquluu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163etfpngbq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163tpjecojj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163vvsvntps.html

================================================================================
来源：http://www.xuanzx.com/163ubhzpdww.html

J. 日期与时间
来源：http://www.xuanzx.com/163ucqomcvx.html

================================================================================
来源：http://www.sxryk.cn/163nczguuyk.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ycvaegue.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163zqbqeehj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163txuqslfl.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hfsdffis.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163jkjmzpsp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163wobdblwx.html

Go:   time.Now()
来源：http://www.sxryk.cn/163dqkgpazs.html

Ruby: Time.now
来源：http://www.xuanzx.com/163geadoczl.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163jrijwzgl.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ihcpzjsz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163mdtbrehs.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163qttoriej.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163hdicvqzu.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163hwhgewea.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ziwzafnu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163bjymmjlw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rpvhopjk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163rjfqihqy.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ujtazrwa.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163srnjtrfe.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163deaxcmsp.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163muqlssur.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163kylvkaid.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163harzrxqo.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163kzpcdusz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ecshyqcf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163fwfhrtum.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163izkqnbrr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163cogemhoz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163yiuojpss.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163jbyrbjwb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163wxxehdza.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163zciwtmnf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163hodpsvyv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163fsceojgl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163nvxivrwk.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163neymhwku.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163oemhcxiw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163xyqngrwf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zcuwnbkc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tbiluyjq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163yddnquhu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163lfagxvjw.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163jrfqszqv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163hyuqgckd.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163hkoumoyh.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163jjygvanp.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163mphlieyd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163geyejmfb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163zxmwalgf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163wwnyekgn.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163bhungikj.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ckinrehw.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163jquruzls.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163wxacctpr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wbdqijzh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163bnotckgf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163qrumegdu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163boignord.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163gvefyjac.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163qihlgejn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vrmzbkkv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bfjqwbcw.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163fgkbrbgg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163shmarboc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163aqzindml.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163bpbrhfnm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163poqguowz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163jphkhxfz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163qmroexnp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163dzokdqgp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163yfrpyrdj.html

[J09] 时区处理
来源：http://www.sxryk.cn/163nuwilfzd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163rotyvmdr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163mgqlumjl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163tendspdr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163jgmspkuw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ttkzhotf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163gmlwlzzo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163riyfnhoc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ofwqehlj.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163rmvrzuwb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163rovjjxba.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163wbqeyxyh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163cfpvcirg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163hihmybni.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163flnkejqk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163pebhzras.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163hhomzhqx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ivyahbru.html

================================================================================
来源：http://www.sxryk.cn/163nlletoso.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163xargshmp.html

================================================================================
来源：http://www.xuanzx.com/163vbeftbxg.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163bgsgpwgh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163grpakcia.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wqkkteiy.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163stkaesbi.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mkqbzwqw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163rxqayucj.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163rdlivoaa.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163takpwpui.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163izlptman.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163bnuudrxg.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163brgdczvc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ikhmoeal.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ysfqhyot.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163rqkweern.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163tgnfuffk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163bgbchvbs.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163kzhxwvak.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163idqmwbje.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163nchvxlfv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163etwkhihw.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163naauuzzo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163mwqacxpd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163yqdhwjsh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163jhzgmxre.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163pfkhvycl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163hlskemqb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163hpskbzym.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ahxxnurq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163xvmzqahi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163hkzsgbpu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wyuibxyj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kezfxujl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163liuhyrgo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163yglmlwud.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163scvrzfeu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ojemucnh.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163aenqrklh.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163jjbsddfg.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163dzelrtgo.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xypnjcsl.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163iryavpqg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163rinsqlzz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163zauaoanm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163xqmfigyp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163mnhyrgxe.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163rahdkjrn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163rldbuxln.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163qcfxypfz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vfbscieq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qsxiiqze.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163eafpeiwn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163qqxgmihd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163noecjgzs.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163dumkagfc.html

[K07] 进制转换
来源：http://www.sxryk.cn/163xdtonmjs.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163kmifwjbi.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163nsieovau.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163yhojzcon.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ueskpjez.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163gipwxgvx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ibkacaye.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163osomsgut.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163izvlusnb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163xkqjtmzo.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163mporjngp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163zmlqkyhd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163xguugcbw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kigbygkb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163vfhssjnq.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163jzktpjlb.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163rplkwatl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163iymirjrj.html

================================================================================
来源：http://www.xuanzx.com/163mdacgfev.html

L. 网络请求
来源：http://www.sxryk.cn/163qzjpxkky.html

================================================================================
来源：http://www.aibaodan.cn/163wpvjdhxj.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163subtbkih.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163bqlntvnd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ppsdhrwu.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163rlprcihl.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ynmhuvhf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163eujxkidg.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163xcrtyusl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163kaifjscb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163jdweoiuc.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163pgiywasb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163djjmjpln.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163snlniowl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163omrwjqih.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yfgkecca.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163xmgzonwx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163emrdtmim.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163qbyhpzvp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163uqwlgnhl.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163iuelndvx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163oowaxpbi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163jnudpyjd.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163xcxzzryn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163sqcornmd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163pmtdfjzi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163irgphkqz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163pvnaeyui.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163jliyrllc.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163eaesruoy.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163yyluuxsl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ppsxxobk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163opoderjz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ftvyfqhj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ciqhlyzj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ybwxssgw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ptwhorqy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163knytbevi.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163zzcffrug.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163yjffizhz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163rkqcyulg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ohmrhsnf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ubcaowrj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163fcwwcvwq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163eontrpdv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163vpgdwgdb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163uaxeoymi.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ijwafmwx.html

Py:   resp.json()
来源：http://www.sxryk.cn/163kghwotfz.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163glzrzskc.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163zfpqmdkh.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163uppqdnnl.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163dhrwrthb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163dgpaucfh.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163xtuhnyep.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163mjozhfyp.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163mmmemzrk.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163tlsqzjyq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163upjazymm.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163fucxhvkx.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163uuqxatqv.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163usljnjsb.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163lsevzihh.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163huybkuhu.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163lsbrtzhk.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163pnnutxxj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163seanhovy.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163qwcvxurn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ddazbbxh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163myrobhut.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163kfeaalfr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163flhnxhek.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163eiouqsxp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ontuyasb.html

================================================================================
来源：http://www.aibaodan.cn/163qgjafour.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163oawqpzzs.html

================================================================================
来源：http://www.xuanzx.com/163szevcqzs.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163vqtbnzoa.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163xcmpzvbv.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163skkteyoo.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163cnrfqjih.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163hgghmezo.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163wbolmbje.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ajxlxkrz.html

Ruby: ARGV
来源：http://www.sxryk.cn/163cjaydnaw.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163psgoymof.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163sntficjr.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163qqyodfzz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163lvgvpbqf.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163jhxwcwsk.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163pxysjfyg.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163uvvyobfg.html


<!-- 参考信息 -->