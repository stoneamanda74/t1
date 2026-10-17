外链999!wailian999！

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163xmgqjwvo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163qyqvadvm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lcrofspw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jgnikgfw.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163vaktvcfa.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163xxrxgiyz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gromqigd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ruhgpvyv.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163qwcvpnto.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tzjmocxe.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163hiyqtjnk.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163rloworlv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163hicqjuud.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163blkbjnah.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163hsepkunu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ydfczkof.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163mrhljvjl.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163qocjkxnr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163gmlbadku.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163bgciooxm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163txrlsxhs.html

TS:   /error/gim
来源：http://www.sxryk.cn/163karvdpae.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163mjepychk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163gnwflxqo.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163jayzbwko.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163ddphxlri.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ahcypund.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163aiyydilo.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163svopstyq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163fzjemytg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163qhuzuonx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163jptffgqi.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163shmvzngw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ophnbyfy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163kkygjwph.html

================================================================================
来源：http://www.xuanzx.com/163ocvjlltx.html

J. 日期与时间
来源：http://www.xuanzx.com/163sfgyzhir.html

================================================================================
来源：http://www.xuanzx.com/163tnlblihr.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163tpqjihlo.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163zncgnlfo.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163xohuokfy.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163rugzocry.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163drpepdrh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163hgixuqst.html

Go:   time.Now()
来源：http://www.sxryk.cn/163sslkcbxb.html

Ruby: Time.now
来源：http://www.sxryk.cn/163hvfcupik.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163zpiazndu.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163hhpvugqu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ddfpenjv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163refqgupd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163vrigsfao.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163opetubtb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163knggylza.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163abbpprrj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hgwweeya.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163evrhqxja.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163qiyuvrqr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ubvkhqck.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163voteolaj.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ixojiviw.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163uutglgjd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163igvsvehg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163pycomhel.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163kssthojr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163lascsrtl.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ackqbtya.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163innczgkc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163gudagaan.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163tqekwtzb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163qtxekjef.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163japohypy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163mxmxxrou.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163reodfajz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163fmwecsbh.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163oykicjgg.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163qswhqanz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163npilijvb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163xftwggys.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163hcawkfje.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ejvogktv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163mugmslhg.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163qtqgiram.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163lumtsffe.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163evvaopbi.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163irdsgfuu.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163uqonpqwc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163hnbdnbnp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163qalnmxtj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163jlorhpqs.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163vxtyqbos.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163rucdlukr.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163eeomttti.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163eligetrr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vgarzkzp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163qdaptvrl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163pddlpuyt.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wfkkrenz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163nmzciajs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163tvmifrzn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tkxecguq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ofwrruzk.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163gatcltpm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163jtdkgqri.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163yyazqwrt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163uqmccbyz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163gulmgijm.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163uqvpjwhx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163hxdquyui.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163yplbvsqt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163loqcwemt.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ledzrveg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163opnqwxlh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163irhiavre.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vdxeejxp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163yusojguo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163kzcrkimn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ufbnxlda.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163xhqebucm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163kjmyyolh.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163dgeovmod.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ownsnbmx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163sadysqed.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163whdlcndc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163toxjtfnd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163nmefcfyx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163rxtdmpvo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163dqwzrmci.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163gtzfeymv.html

================================================================================
来源：http://www.xuanzx.com/163puvmuivy.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163kzpzawjg.html

================================================================================
来源：http://www.aibaodan.cn/163resakfjn.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163skhgtbme.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ldqsluva.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163yxelylwl.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rccbexka.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163jgqirrou.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163wdwgwvfw.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ldjlaamm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163wlksphhc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163vrcgnptb.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163wxkwxaxf.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163meeiglxt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163hgfkzjly.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163bwwqwzdk.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163soeupgya.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163febvpdxw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163rdmxjhfd.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163drdrhbdo.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163nwafdnvy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163wbmphzgg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163cnckbzfy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163olkychlr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ytguvdga.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163nxfhhpdg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163vftqohjq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163bzacyiro.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163znqjemnl.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163srfnpqdt.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163pyrlibji.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163fzqmgtrs.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163vffvauwr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163asuanphl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163higuznuq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163boqkminn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xmkkapsp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ouzqmavb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163wdcxxahj.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163uemcnqba.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163sfwdnccu.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163gpdjevxg.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163brnzaqzv.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163yhgtqqxj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163sidwbswa.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163orbpdytw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163pxfskukm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163yjnlhfbs.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163mkakrzcs.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163dtogftkg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163vzrketyr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jrsmzinh.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163olzzxmxy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163hqjyrqwd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163qheyidll.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163pcftwevw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163tiqbmvaj.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163xmfemugm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163nosjquoz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163jgxtjyvn.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163cfhnilfq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163dyyixbed.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163kifonyex.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163uusuuxat.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163rhwfyqam.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163qemsfxqg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163nlpcohzt.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163nofmgjge.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163hdhbehmf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jcaocrfb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163gntrlowe.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163geecisva.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163tvqkhjzi.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163fnvjgtna.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163gnxrsfuy.html

================================================================================
来源：http://www.aibaodan.cn/163vuswihts.html

L. 网络请求
来源：http://www.aibaodan.cn/163wywcptsd.html

================================================================================
来源：http://www.aibaodan.cn/163yjmcarvm.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163qgynobcz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163urqdikgz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163rnhfclaz.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163doiroevk.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163lylthagl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163wpkezvkf.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163rsnqeoci.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163rxtgfsbr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163mjpdxeoo.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163qmgkcjhb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163nerqnuwk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163icnatxrs.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gkfvgbpp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163rkfihkop.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163oomgjgoe.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163xrhywigp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163wjikyoqj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163gnckbgiv.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163dnrkqnot.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163onbtmztu.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163jagteqmx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vkzpxhgc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163dfwaakji.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163aiczrddm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163cgcapkrr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163egecubck.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163pxhlehmc.html

[L04] 设置超时
来源：http://www.sxryk.cn/163arrlsylz.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163zokvcdxn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163icbddspo.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163tpejyhao.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wggcdhrx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163udzvnzce.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163toaahizv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163tgzeqpss.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163raoctgwy.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163tfoaymwp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ypzroaro.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163gilpdaoy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rwqibciz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163jwhfrbzc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163jdjpzxls.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163tqopeytg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163bmiqeere.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163sfkrdcdr.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163shwkwgpv.html

Py:   resp.json()
来源：http://www.xuanzx.com/163yptleqrl.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ffgufxbm.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163vjdoybnk.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163phwqpxjr.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163aygkqvdi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163qfdnwbmf.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163gkurhsyf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163blmxdhad.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163vtqzkfud.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163yymzjgwy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163dmlgaacl.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163gwimgoiq.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163fthvefbp.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163rgovlitv.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163hcexrjtz.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163wogqpobk.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163hgxaqsfm.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163kxubfwmf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163puqhjoor.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163qnzddmjp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vyfkilmh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tjxbymvl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163vmrnqbap.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163vsiiwshz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163psenfcvv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163mhmdiiuz.html

================================================================================
来源：http://www.aibaodan.cn/163fgxalzyq.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ygqywneq.html

================================================================================
来源：http://www.xuanzx.com/163imdgvqat.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163uklruian.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163zwqtmcza.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163uucgbvpr.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163acoojvro.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ffnpjyzu.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ryfredif.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163slmizmvo.html

Ruby: ARGV
来源：http://www.sxryk.cn/163iheptuyb.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163trbanymw.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163obytavav.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163txbpdtys.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163uxajfzdw.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163bphlazax.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163hxdltwtf.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163zclwrgch.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163puecnygy.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163fridniso.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163kyksjsvo.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163fhkyrcpx.html


<!-- 参考信息 -->