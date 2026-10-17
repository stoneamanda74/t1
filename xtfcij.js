外链999!wailian999！

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163zcvnyfvj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163pgdhpiff.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163uoriscfc.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ifeetoxg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163mxtcaphi.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163fckpsihe.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163pedwtdtf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vpjwcjkv.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163hxvvcvhi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163vkoxqnjd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yeyzkyja.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163btjebrvk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163nzbmmrmk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163whytznkm.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163fxqfzpjc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zhsrdrsu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163uykaqcvc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163lnqkryqd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163nzwvjism.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163hlenoobd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163otjflqoc.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163bxgzfchw.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163nftbonrh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163sqazjpxd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163xvlptnzn.html

TS:   /error/gim
来源：http://www.xuanzx.com/163oaipxgyj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163aiwgeniv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163tvyierjr.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163dajpxhel.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163oaelmbwt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163dnetaauv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163hfatiplg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163rbvucjiz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163iruzqjfk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163sbadkujv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163rbhcauoi.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163fetiobgf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163nquxxjju.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163cemjfcqj.html

================================================================================
来源：http://www.xuanzx.com/163pdeezbny.html

J. 日期与时间
来源：http://www.sxryk.cn/163sjqqbdnb.html

================================================================================
来源：http://www.aibaodan.cn/163vgwqzgif.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163hivhotma.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163obomumhw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163albxnjcx.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163axsmpoqn.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qjjcclry.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163pqziqltt.html

Go:   time.Now()
来源：http://www.xuanzx.com/163knfahmhk.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163labawswp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ukzcrnaz.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163zaxzwwrl.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163epvxvapu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163dbunuhqq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163sjumubtt.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163aubnfnjd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163sslpbzgz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163dmsrlcox.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163sfjgblin.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163taifwclo.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163wfepgtwj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163tuqvnqwt.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163wwitwluw.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163cumrvler.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163isgitkev.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163fcvkpcck.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163lbvdfboe.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163drihwwjq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163imotmbjx.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163peyhoffb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163wdbmtawz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163cvpcddcg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163acrnczjg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163rvufnoqb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163weanovwk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ilehiasx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163gmwbjrhp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163oydgkmgs.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163vkoalljv.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163nskoogga.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163dzdxcxst.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163qoexzfrm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qzlozxsh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163hlkbzexm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163yuuxscgk.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163wgngorjh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163mpcsypia.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163bqxgvvpx.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163nfhowlnn.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163gebicqgq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163yvnjgdak.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163lktwapfk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163pmefaujl.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163owftuzzq.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163wpdafnaf.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163biytrbav.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ipnlsula.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jnlsblub.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163mrazryvq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163oyhkgdpm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hzxsmzwj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163jgtozbci.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163rftmgzar.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163utgegrik.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dchkshmt.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163xupjvnjo.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163xbqeyrco.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163wpfrhyec.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163vtmhkdql.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ijglugri.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163lqnuaafi.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163ggvnsptk.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163oglodaoh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163xsuuxewv.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163vlacizia.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163xyxhcbsy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163xdvsfxhz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qsqkljlk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163oxrecwmm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163kwaxnvem.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163bynygsze.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163txvqogxo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163otgburhb.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163bcaemold.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ztumeevt.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163jhxnjtnq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163zewkvxhg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163seefirxe.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163hggtswff.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163vsmfrahr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163pffvvnfr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ipdgfhyv.html

================================================================================
来源：http://www.xuanzx.com/163eqjidbgr.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163vwjbowlg.html

================================================================================
来源：http://www.xuanzx.com/163hdvdvudk.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163pwnqulkf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163gwpymygc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wmuzyvdg.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ioodzgko.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xiyynhxy.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163yohkpimx.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163qekwhpjp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163twpfoobo.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163hwxvbvea.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163kpzzaabu.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163qaeomlam.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163pvoaknyx.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163spgqmokr.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ahnmgpzy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163fecjebsl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163emhwjhhw.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163apzdqejq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163zpduayky.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163oeinlimu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163hlchzxxr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hfewaekz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163utkcwhkn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xmutaftx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163stwyyyay.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163xaslqitn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163waibwsim.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163evozxhig.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163lsxeunrr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163oijgooug.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163xwihbrpx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163kudqgejx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163opvcuhaj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163wywfqflb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zbbznuvj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ywrmtfkt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163cqnprgbt.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163hymlttze.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163nriajvlw.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163myvsluxk.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163jswpnzaw.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163dbttfbfb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163vkryonxz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163bjfldbbt.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163hflvyrmi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163asufjdta.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163byjzfmft.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163mqryrdvk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163rjaxieuw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yqqekakb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163hybvathf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163yumaxdsk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163wtwroktw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163mvrjbrbm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163xazzkxiz.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163mygwfaoj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163kpeezapt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163olcvqpjp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mxpbhwed.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163apzehubo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163odgvcklf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163rzhmlxik.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163jlohkjeo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ohwcroaw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163vnjkejrn.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163hgbhbofq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163dbmxuxrp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163wgrmdvkn.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163fmwvcyws.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163fbkmevgc.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163kfrtfkeb.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163aooyxetc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163wrabgitd.html

================================================================================
来源：http://www.aibaodan.cn/163vcfirdyd.html

L. 网络请求
来源：http://www.aibaodan.cn/163tnvzqhre.html

================================================================================
来源：http://www.sxryk.cn/163dbigrzqm.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163zhqtghdo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ygxxadml.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ueeblovu.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163xhwhxfrj.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163hmylslni.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163txevgiju.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163fmdchylq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163fxfljvvd.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163gpxducza.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163vgvxhgtv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163amteizau.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163rmgnvhdv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zonzqhzz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163gjcgngqs.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163zhorocxl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163rbnrvqdf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163sijlzhjr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ggweulnb.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ymxuivkt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163wdcyaynx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163jwnelqqo.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163mlorhcrr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163subvmsix.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ydtduwii.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163vpucvvaf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163rzbhcynv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163pcjgaiqj.html

[L04] 设置超时
来源：http://www.sxryk.cn/163vmyjfrse.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163uncfbvad.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163cznbpcmo.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163mhmqsheq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163aquzdpsd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163njmtrdtn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163fjbyhpvm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163mqwjlrsc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163cspvzmqr.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163jvqlnpgw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163shuzgzlv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163rllcsyhl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163bxmcqeaf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qdsjmrgy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163tjbeftyr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ckbaznpu.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163zhllmgmq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163jnwtxbjc.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163uvlglqgj.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163djnsiurz.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ewfgegbm.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163apyzyift.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163zwlwawuc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163edrxjjdp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163jgagcuxq.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163nsagfmqa.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163aipoihfu.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163umlamamc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163zcbqzlkg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163fbxledsz.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jdjssfbz.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163bahuseeb.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163mkdypndj.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ufspbdiw.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163diypjqyi.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163audxidwc.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163dzasqrjt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163xorkigxs.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163jzmoaszg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kgfosfgh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pelxbfxz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163clezrbsz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163qxomqyhy.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163hnmuxjkr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163nebmjxsb.html

================================================================================
来源：http://www.xuanzx.com/163rrjkbysn.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163zmvioyvs.html

================================================================================
来源：http://www.sxryk.cn/163lajgrkep.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163pxaxtgxw.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163osehjjtd.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163mtkxkrre.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163fipynqsy.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163suqhbljp.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163bmusgnhm.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163jmaangdk.html

Ruby: ARGV
来源：http://www.xuanzx.com/163tplyyknd.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163dglvtibi.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163pyildgmr.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163twwvwgbo.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163qgfleirq.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163vkcbfcch.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163vsenuwio.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163gomajudm.html


<!-- 参考信息 -->