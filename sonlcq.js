外链999!wailian999！

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163iqinrdfp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163gdegvtvc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ehcycxxz.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163vbvqzaew.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163hxyadrdi.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163mnvnkoyt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qomyuyoe.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mojeickz.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163tkzwwmvj.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163fbhjskam.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cviwodcw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163awxjydtu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163nomwfwlr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tjoigipp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163dsttntsq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ccqjgjej.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163mwkutkhf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163qnkidpbe.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163puxjgwtk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163fciiyeps.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163cliwajct.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163iyptpwcx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163gxbrywqn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163jsyrybrc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163daglcztz.html

TS:   /error/gim
来源：http://www.xuanzx.com/163vopexeba.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163umctbfkh.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163pmpnwhev.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ygotjgwt.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163afoezblj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163mxopomem.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ncfgpmye.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163flrqovyl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163lgcrqctw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xndjufxm.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163bkzopcde.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163oixcergv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163fctnpulz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163lewtbfxz.html

================================================================================
来源：http://www.aibaodan.cn/163ulrhrlvs.html

J. 日期与时间
来源：http://www.sxryk.cn/163nyvyrnib.html

================================================================================
来源：http://www.xuanzx.com/163promewpi.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163cvvpsxbf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163uoptiqsy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163krfskgrm.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163twwdiyvf.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163lvwbrwwv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163idnqxjmv.html

Go:   time.Now()
来源：http://www.sxryk.cn/163fctejkxx.html

Ruby: Time.now
来源：http://www.xuanzx.com/163vpyqhgum.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163gxirqoro.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163wypzejqj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163idnrrllf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163deqirzht.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163gyldagvb.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163cytqhepn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163bihpzsbs.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163uwejnzqo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163dxbmsnvf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ouzuscxy.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163qjtsapwp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163bviwdlge.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ygbkjvnn.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163gzhtxkoz.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zhvgcqzr.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rlwjxtvz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163swjdvdvi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163wnluuspn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vkaxpotj.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163bxdqmmwk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163fhvplbuf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163hvlcucff.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163snrmehwt.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163gbxtotjm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163keuiuelp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163owgfavvb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xcufezva.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163wlwrxrst.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163hixkoylz.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163phusprdl.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163yttplyfd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163gvgzepyp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ykxeigai.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163smsmlafg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ufpcqxoc.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163liuxevzr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ojubtmdu.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163byrdnbya.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163gpwlxoxe.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163bryneqrb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163pjrjowwj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163czwpslga.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163dzrdmang.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163kbtleicq.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163rzspltod.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163hgkhcxvm.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163okksnopx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163eouukyxk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163fjpneuyp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rnejuegq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163pqqewncl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ofrrpmkp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163bnwofazm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dhjtxcig.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wtnihyiw.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163kdzflwnd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163xbeuuzdl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163kzkcaitn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163kjxsnkmi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163jdtpxzze.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ngmlbqbn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163pmvvfhcq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163bptlvajz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163lujuosyu.html

[J09] 时区处理
来源：http://www.sxryk.cn/163rgwssfgb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163lziehznt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163bnqmjdrb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163bhtypcaw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lxxrlsye.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163oihscefm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163otxgpgjw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163efvwwdmi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163xgewbmmg.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163dfrbmbcy.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163zpttpxaa.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163aofshcgf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163bkstzqzi.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163hoatitep.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163msbjepqc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163mashczyw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163czdtabez.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163aavlkskn.html

================================================================================
来源：http://www.aibaodan.cn/163qtunyfes.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163texnvphd.html

================================================================================
来源：http://www.aibaodan.cn/163khwjxzdk.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163szaunsob.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163mcepitel.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vrhsqgcr.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mnvmwmez.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rgmosixy.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163apkvdhiz.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163qjoiwkxh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163tekokyfk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163zqpizkwy.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163uvctwlzv.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163gpmulgeb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163xapphxih.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ijasbvql.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gpvbjwqn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163iszjvhoz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163guqcyhpg.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ddasldhx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163wknuirqs.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163peujbolf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163tkvenrjf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163llzashxs.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163nandxkbr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ksejungz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163aszjviar.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163jyegwcbw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163tnvrxymo.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163gwswgria.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163tgwqgtfr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163rwkulflf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163iunlgsln.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rutsnqqc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zbhqhpfb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163vzpwthmg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qlrsdxqb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163kffubrgc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163bsfnhjgn.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163hltzzzws.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ddeezlvv.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163xfkncbbb.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163lvvzlhwu.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163fzluunce.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163phmlffyf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163adiiiujb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163umfzvcne.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163szhaowxd.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163gqcnwaey.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163npvjjiuc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163xzgkuqsb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dongstcj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wcdamkbx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163jvwppjbo.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163fkgppvvv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163gezakhlb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163pbgxpujr.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163nsgsxpew.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163krffmltt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163yreccuqi.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163etssgauf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nfwulver.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163qgotkyyf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163rbmfcjom.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vbldrbhi.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163xqhfjrfe.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163sgtzirmg.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163oxcqnbwk.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163sekxwdbu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163mdlawfsx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163abckvice.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ndvclxlu.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163sawrhwze.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163abtrjjyo.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163mgtsfuwl.html

================================================================================
来源：http://www.xuanzx.com/163vrcztynx.html

L. 网络请求
来源：http://www.sxryk.cn/163yryhajqm.html

================================================================================
来源：http://www.xuanzx.com/163qtqdeeru.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163qsfhpfjo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163tljzkbuw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163hblvlpze.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163dubdfjsa.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163gsfargvo.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163onpwwegw.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163tddglmto.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163lhzkeokc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163peugjkpc.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163xxcvlfew.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163kcqpvjqc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163bmxpqqnq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ilycgcex.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163yqpmdqmg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163uzydzigj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163lgvvoawc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163tzeqrpog.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163sqfgwzqi.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163twzvfyzq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163vpftmbop.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163cfypkasc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jhlhjwxs.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163fhpqantq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163eehpslde.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163pwvkrrid.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163yhkceocd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163mdpmyvvv.html

[L04] 设置超时
来源：http://www.sxryk.cn/163xidvanvm.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163yrnqrijl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163kbawkvjy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163xwyhbuur.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xzgzxpzh.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163wtffdres.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163wvigavax.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163tqfpllip.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163fzcbocrl.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163thequjpd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163pvjvjjbv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163uhiafzwv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163dmembrdh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163buzegpep.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163fsmwwfdw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ssiaabch.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163cgwutxob.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163bmyyozfh.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163fnkdfvhd.html

Py:   resp.json()
来源：http://www.sxryk.cn/163jsqvveow.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ewrcsruw.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163yeqznvqj.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163izbtppcy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163nfgvigap.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163aequecgl.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163coxvrirw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ryyzjpzh.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163ustsvrcd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163kqpmdgvu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163pzeknqnx.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163kkkhbktq.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ykbghccq.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163qdmjdpag.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163zpffpigz.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163sebfgyoh.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163wceaisna.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163zcomscbu.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163opuvmjaw.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163lwpvqtwm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hqqtcwhg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ebsuqyho.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163kyezuzmr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163aesrwbfy.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163dccisafw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163zmvkqejm.html

================================================================================
来源：http://www.sxryk.cn/163fhquwedw.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163xmgqberk.html

================================================================================
来源：http://www.aibaodan.cn/163iusoulop.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163zztkczoo.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163haarsiwa.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163cwqdfnyr.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163mxldkdoi.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163feuktrqn.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163xxhvpvag.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163bluhdkmi.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163vbrtecee.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163oywlddop.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163typmtfzd.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ibqoerqf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163xiilwezw.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ygpvmgoe.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163hxccvkyc.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163xkaxeciw.html


<!-- 参考信息 -->