外链999!wailian999！

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163hnashddu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163elfhnocw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ukjtwpkp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163wgqbafru.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163amzualsd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163hmmfgwvn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163rpnyuhak.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163psoiwbqf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163pvinxjox.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163gpjolowk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fdfnzsev.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wcaiyhmc.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163obndoeqb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163lpfvmqhx.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wqlvlrgk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163fjlijryx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163dzgscuzv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163zdkfbjas.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163mqzssjgh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163owdwghei.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wxgqocaq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163nxospfkm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163qvryvcnq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ebvjbsdg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163slwzqcdg.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163tepllpxz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163sdehytbv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163nbpjyiyy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163owzwyban.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ntnohyci.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163hxlvtbvh.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163iudjxopk.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163haczalqo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163amgbjsas.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163fhpnytyl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163zejgcsuz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163mrwgiafv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163swvplscw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163zxlksxsn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163molpqjeq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163nrutgueb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163klvtzjre.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163dbghzffl.html

================================================================================
来源：http://www.sxryk.cn/163jypugpsu.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ubefgdif.html

================================================================================
来源：http://www.aibaodan.cn/163scvhjayx.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163fwdapzkp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ybevqoav.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163fdfhrxxm.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163lvncysnc.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163dpdjgmej.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163qwwleyhr.html

Go:   time.Now()
来源：http://www.xuanzx.com/163nnnkgwcy.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163xdyxjbhq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163dzrmaler.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163egjlhfeb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163puezjnqg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ognmqxil.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163knnchdca.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163oqnspokd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163btgrjdrn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163anzqevry.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pyogzpvb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ojbgokjg.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163iltxmbym.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163yduuogdn.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ugwmgiba.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163xkzthmqb.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163oegcotmh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bxjoipic.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163vijklzwe.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163jeofywav.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163fyneoxzb.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163cpteprrn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163xqclnzfn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163dnrgvert.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163yzhkzazq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163itwruxbr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163zijylfuq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163reqpngaq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163wcsypeka.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163tnfyjtop.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163kldrmung.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163dmmuderl.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163gwdvsdjv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163loazhows.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163avdliyvy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163yrfzkleh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ynsiyhob.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163idvrjrwn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163eqxmowof.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ytlrpawy.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163dvhddymh.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163lcpbhivs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163kogunhmd.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163wnqrlimo.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163zmcbtmna.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163yqdxlxpb.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163yywrcnxr.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163firhxicn.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163rsnjagfr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163cpjucryn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163blylrxud.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163dlddsewq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163jnnbijpk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163xdnnwixq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ugsmnytl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rjuhjbrp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qbhvdxfm.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163didxriqh.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163cawbigjt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163lkgzyxls.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ulgryokf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163trjrprjo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163bthyverk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163cwvxbeqx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163xvawdlji.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163umelzfno.html

[J09] 时区处理
来源：http://www.sxryk.cn/163xqhbltnd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163fvwkbaem.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163czvnuctb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zvwutdae.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lphmgdpv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163vmtuhecb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163tyzwdfhw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163lnhiwput.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163wfrbdgls.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163qlqcxvkg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163pjqjjofk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163lzplmapl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163fcirsywl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163qhlsozkl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163fvhkzwdb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163gicdcuyz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163qqftjaow.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163vxcxrvfr.html

================================================================================
来源：http://www.aibaodan.cn/163obgcgnxj.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163csnrknzz.html

================================================================================
来源：http://www.xuanzx.com/163vvsfkskv.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163dkiacfxc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163jkbywaix.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zcfhzacu.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163vwtrlhxo.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163jabzyxoz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163pgipxxmi.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ihimflab.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163dbbmzwcv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163kogfghnf.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163omkclspc.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ribskrqv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163zduumjhk.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163oircfumn.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xowlbdli.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163gjwnndet.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163mddjlijj.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ihwuhhaz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163txcwfmgr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163rnaixavr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163vwhmbmfv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163lgkckndb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ocjgurac.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fvljkyfi.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163otxnhxfa.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163frwrtwmr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163prtwdwnd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163bvhpqkki.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163jgziusee.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163qjlkabwq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163soxhzogn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tjwbldym.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hnmnqwru.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163olbukoxw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163fiekmjbx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163imvilxif.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163kammzrks.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163ftbcgrou.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163qxplldry.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163buqqlugp.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163eokksaaw.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rrhabpze.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163bptxuovf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163asxfreib.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163axbaqpoi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ckhoqxwo.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163twgwqlnc.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163bwzvqubz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163lbwpzukc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kwammtxu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163bfkzjgqi.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163yichvuzq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163rrxsfemd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163couccfdt.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163nvvwegut.html

[K07] 进制转换
来源：http://www.sxryk.cn/163siohodku.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163qutzyhbr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163cjcttazk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qpeekxis.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fmhwuozy.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163diyxvmjb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163twmygroa.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163lurqdcai.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163rtgfrklr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163bejpqnrx.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ydvlguji.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163uzurpdql.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xpyvccwo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163adrexhhn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163iuojsmei.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163mihokurp.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163eootestw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163bnhiwswi.html

================================================================================
来源：http://www.xuanzx.com/163gifzjlqg.html

L. 网络请求
来源：http://www.xuanzx.com/163wmzaltze.html

================================================================================
来源：http://www.aibaodan.cn/163ouybhfvy.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163sqwbdkmg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163ifbmaqkt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163pvavouxe.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163unvmaszg.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163cojhtelp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163jrwzakny.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163aeekinbn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163pdokkccz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163lnecefbx.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163upxpbuun.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163vkxejggn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163rfgxtxed.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163iyhvhnsa.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bgfxqlgc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ithqattz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163xsgnleso.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163swfiwail.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163renebpeu.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163islvmbiz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163aabubjaf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163hkrqfuwc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163mjdhkwer.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qhaveuvk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163cpfuntzv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163kiambexk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163vqfhfolg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163qyysgxtx.html

[L04] 设置超时
来源：http://www.xuanzx.com/163meqjqlqg.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163exxivqtb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163nuwqpzoc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qoyfylez.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163swuvilix.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163urxoyatr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163lrzdbdlh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163mwozefmi.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163wovvwarm.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163eahtwwlv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163jbgrajsl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163xpttwmce.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163sdjpxzwx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163npvswazo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163tswjvysm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163snjjxskp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163nklibtst.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163xwlbqgzp.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163csimxyhu.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ododefrm.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163bkrirdfo.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163kfohvnni.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ieojwucm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163fejzzerr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163bnxxcwuk.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163qtkwwfya.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163aezrqvkk.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163vbryorfy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163oesljxsz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163vbftelnl.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zfojmaur.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163yltmzbzl.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163gbduepio.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163rvbfjskp.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163zeptgotc.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163zfytsdws.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163xhofelgo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163vqyvdija.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163macehsfh.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163offvehjo.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163numwyyxg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163xxlbpxjq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163lsiaranl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163htrmlbtq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163gsakrbuj.html

================================================================================
来源：http://www.aibaodan.cn/163zegizmve.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163baoxioxm.html

================================================================================
来源：http://www.aibaodan.cn/163bwkharya.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163llhzlwft.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163lrhxxbcy.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163wekcnksl.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163yfusxrcg.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163keqmggut.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163rwiisshi.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ytjmuabf.html

Ruby: ARGV
来源：http://www.xuanzx.com/163durvtitv.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163qawglxfc.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163armimyse.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163truahczl.html


<!-- 参考信息 -->