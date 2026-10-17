外链999!wailian999！

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163exrczujb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163tofelxpo.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163eiffpkbq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163nzpcvyzk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163pkqnamyk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163coyvwoil.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163wihkpvyu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qtvxkrbk.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163lancnvzu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163zoxucnme.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163wiwnulwq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163nkmycbfg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163unbzulny.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163kivzhgaq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163abuqngbp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163qocyaaox.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163nfdpyvoj.html

TS:   /error/gim
来源：http://www.xuanzx.com/163butursrh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163crloyqei.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163qlvnkpcz.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163kyhyhvpq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163yowtpjko.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163vafqrano.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163epllqzrx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163ashebqdm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hrehbjlo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jvvimacd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163jbimsosd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163gypbpmac.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163ztxuznvd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163zkhnyosi.html

================================================================================
来源：http://www.sxryk.cn/163joglbdqw.html

J. 日期与时间
来源：http://www.aibaodan.cn/163fnfflkut.html

================================================================================
来源：http://www.aibaodan.cn/163shhcpypz.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163sylltawf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163swyypjkl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163dhcsfybj.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163xkisxfcv.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163lwxobckn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163nxrzvrju.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163hvjtltdp.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163wgmdxmxs.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ualpjfae.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163zpcxeask.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vbohetqs.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qpotrcfq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ddjhslhy.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163qtqigoqf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163qidzspls.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163vkzudwov.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ybsousqw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163tldfaccp.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163kpfosylt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163cybqnlye.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ovkkcpys.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163bmbthiol.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163afssssnt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163afurtekc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163vqrepvob.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163feudzehl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163hhtvzgam.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163pugvhver.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163nzoznbwr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ikrpdoek.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163pvndcjua.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163hlqltuig.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163qhjosdub.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163mkzfxcwa.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163hugcmvuz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163lciicnbc.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163reiwlkyj.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163caigrebl.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163swpqgutn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163zbcqjhfn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bfekcmks.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163eixnapqo.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163jsujcbdo.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163yncnevpa.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163qdnvagsu.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163gnsynnab.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163rilgixlm.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163yjwgznck.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163kidcrzfj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ulmesaun.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163zvfyedpa.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ethmxrep.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163qoitxwla.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163bkkzgrvc.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163vxddzqws.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163swbdgubr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163rkrbengo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163iqefernt.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xvjgxmyb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163kipwlqnp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163lbznvvsu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163opauvrzp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kcqzngnc.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163kaitripz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163tnnocvmh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ulshwdxo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163tcplcgsi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ahqhoicv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163qolxkyxt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163wrgrxjkn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163lvqbtbyn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163kvnmyxvs.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ubyttshh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163twazrryx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163snnjvkpw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163crzrhjfn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163iriycxlw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163gkdhwehs.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163yfnfbabt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163sdgmrpxp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163mgdiqsrx.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163uivifhye.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163yqfllbat.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163tawbkegr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163drztmrjc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163cpvqerif.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163aeovcdqh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163fsgpijwx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163pidxtszs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163smdnfgae.html

================================================================================
来源：http://www.aibaodan.cn/163xriaekez.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163kdbypfkj.html

================================================================================
来源：http://www.xuanzx.com/163sfamujop.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163piipfsrn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163kbnbofya.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ooqzmrna.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kvcesixc.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163kkzedagx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ifvbzpxa.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163lvjcvfaz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ecdqyuqd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163wjkszpdw.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163bhggupdc.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163npmplyxr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163znnqqkob.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mulnrhcz.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zustnepv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163debjpuaz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163gjiocpgj.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163tfdhftkt.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163nekgwhnt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163uimdlzwn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163giogmedk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hfdosonu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xzxeobkt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ybqpcikd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163nbsnrlen.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163bqbiyvsm.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163blcxxprk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163luhrpqnx.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163dhlsdbbe.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163uxjpljpn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163fntbxrff.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163sxmrwxdn.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fcujkxxp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163emcrqthi.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dagvlvsu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163zkbsltmu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163tyyktobo.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ebkwezwi.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163tyqxnerq.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163tlnsthvl.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163zeajdbwj.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vnftqlax.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163uvxckssl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163xuezntpa.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ndzybmvg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163wkzatirv.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163cemzjcfw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163twnmmwam.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163pmdkrqts.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163jxpadmje.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163kpnjdtpg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163vesqbxye.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163voucxcql.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163kgfgdlip.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ozpeaksg.html

[K07] 进制转换
来源：http://www.sxryk.cn/163rnecftip.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163kyguqemt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163uysmgotg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gymoaint.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ggccsjjn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163npeqynud.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163hxcgvclu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ohqgpdaa.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163tzdyuywb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163xxninyao.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ypvnxhmy.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163qhghdvew.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163lidudiwq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ivjepeji.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163pqxbzeim.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163wozzcpyu.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163kbbkiybw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163utdpewcd.html

================================================================================
来源：http://www.aibaodan.cn/163qiohcnvc.html

L. 网络请求
来源：http://www.aibaodan.cn/163cryptckj.html

================================================================================
来源：http://www.aibaodan.cn/163ydyejxek.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163llvxenvx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163xeoodrze.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163twrjnnbu.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163zwacljxb.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163sygawilu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163pzlfrtsz.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163rkwxtbws.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163rqonqffa.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163mcvlahxk.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163dntufxes.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163rtlkazig.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163pqxomlyt.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ecmjahbu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163gwilabux.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163yxkllmwu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163xmdxmycu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163iwghhrqf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163fqacapvc.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163zdocxkfb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163rtgtepdl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163vcydjbgw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jerfncks.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163snxscycy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ykdjfbht.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163iwgrcraw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163xrwcftvu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163zopppatm.html

[L04] 设置超时
来源：http://www.xuanzx.com/163lubzmeuo.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163jdlixlgm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163fkiwmllq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163uslblxfi.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163igqxvodt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163vycspxup.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163typhfsod.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163eqlcrsri.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163sfepiggc.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163zhuxbkkv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163xwkaquxk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163rwytodro.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163jcbsfnmu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163usssurpm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163jotcgqzs.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163bsosbbpc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163pbvtedck.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163kqipybdl.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163gbelhiwe.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163cmjgncpt.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163afcqejfk.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163iodnaben.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163qbnskzix.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163idhzfjey.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163reiyfqyj.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163uvvyxjhv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163tpduhont.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ruqtvdml.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ilslpxwf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163afybeudn.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nzxprdbt.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163wnvyerre.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163esxsrzom.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163wwvwkwdl.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163rwxeijre.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163tzrafbcf.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163jepjykrv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163rdixdmnf.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163cdafdfgf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ofyaczqz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qntpxpif.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163rxtxzpts.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163qjtxyoeu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163beftdsuc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163gyojrnzu.html

================================================================================
来源：http://www.aibaodan.cn/163lxicontx.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163dfoguior.html

================================================================================
来源：http://www.aibaodan.cn/163zsbdycfq.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163fuprwqxe.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163dpenkgsx.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163rqvbcjzr.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163tbbbidij.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163pvxvvwfn.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163qyaatqca.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163mdhskubt.html

Ruby: ARGV
来源：http://www.sxryk.cn/163zceqzteu.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163yqohwokv.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163fjlgxzmu.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163yinpjqdy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163pqfbmfcq.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163hfjnptyh.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163uszwdlku.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ebpsnybz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163cquxktcp.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163sodlcplj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163sluzxswm.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163cmblsiew.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163xsmpkdvb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163qrrvkexu.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ydvqdfun.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163rbcahpwl.html


<!-- 参考信息 -->