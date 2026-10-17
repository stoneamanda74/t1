外链999!wailian999！

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163grjpjmws.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163sxooogrb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163asuvoymb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163xofbgnzb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ddbpgyaa.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163cmvjdqsr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163gxzejtla.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dweperio.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163bkdvrrue.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163swzusrrw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163oxfbpngt.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ltexouhx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163feyfsflr.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163fqacfmny.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163yqpkzeaz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163rijjwype.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163dvuwjund.html

TS:   /error/gim
来源：http://www.xuanzx.com/163hhqqpoac.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163xuasxrlk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ivkqlpkl.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163qdodxuho.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163hcegyujg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163uwblmfvk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163mbiaoagp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163qsagliqw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mribxpgw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163tzrroslx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163dcjilwza.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163rutpanbd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163syvgppfb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163gxmygmgg.html

================================================================================
来源：http://www.xuanzx.com/163pfqynkei.html

J. 日期与时间
来源：http://www.sxryk.cn/163xvdivpgu.html

================================================================================
来源：http://www.aibaodan.cn/163vljosnve.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163jjrzcgsv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163obpzwxjy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163fgtdstgu.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163prgwpbia.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163xhnvikjb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ngtvldpr.html

Go:   time.Now()
来源：http://www.sxryk.cn/163nzanoicn.html

Ruby: Time.now
来源：http://www.sxryk.cn/163wqmljwvo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163hmszumrr.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163dafdiznh.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163tzhyzkza.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zwjczxgj.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163npifizdi.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163xmbqkxja.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163zhzvmfvw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163soyfifdz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163kqsvllji.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163sskovrct.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163hhpftrvx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163tvoutpyb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163dnyrovem.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163wdgtjeij.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163fkexswdb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hxafqoqh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ufibmgqj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163fkypdeco.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vwaclczx.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163kjbpkttj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163wpyuqldu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163iawjdsnp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ivyhfhmf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163uprpwqmc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163nkgphyru.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ylzcsulg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163lqcsxefr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ogqlctxf.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163hievgiav.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163djkztgtd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163agnxqtpj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ewiqclns.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163xzwbvwps.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163pkeziwxc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163gveejzmq.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ekjiutrd.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163nlbbybid.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163yalryjuz.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163jozksgcj.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163lpstwejk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163rstpxbmn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163vnyxkgft.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163gzejwqmq.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ixufqsvh.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163wkigscss.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163xcnugwjv.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163lqlxndsq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xpqrfyxg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ehotfxbt.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163szmnxkvr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163qryprwdk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163abmkbbft.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163kqyojmse.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qpqzfdmk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163aeoqxbqy.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163pvbkajdf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163vstlhxgx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ybqgzitt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163yfcdeqxs.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163hbaxgcjj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163bdwrdiap.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163pqvnevfb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163wgwjxkgt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163vuzciiei.html

[J09] 时区处理
来源：http://www.xuanzx.com/163etkxmyck.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163gfjgbmag.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163jszxwguy.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163axhfmnqj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tqzkhbni.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163qcpxytev.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163pgzzatzy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163gsbvpmnv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163uzhqlsce.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163yobcksde.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163dsngulte.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163cyfryufa.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ttamklkz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163kmnrqawn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163fqqrkeeq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163zpxdmidf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163nbjqlzxn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163peemlsva.html

================================================================================
来源：http://www.aibaodan.cn/163fixnledh.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163nueqrkdh.html

================================================================================
来源：http://www.xuanzx.com/163dlycnrzs.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163amfmbchf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163uocqqwkx.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vlkhlbyf.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ffhzsgfr.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163oqyjirna.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163gxzzviju.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163iyixqpgx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163fbkcgutk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163piqpineo.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163uazvycjc.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163cwbjjxoy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163wsdpyhtc.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163inurkiqq.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163umjuimtu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163kcwaxahh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163brntbpdc.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163hdjlnnzp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163kvzbvqlj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163kxtdfpyi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163tpinogzh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wkzrdftr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163rahisbbq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163strldldq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ddtywsru.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163qenxkhve.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ujlruzlv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163byposdcr.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163gkjqhthy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163vhukeqtp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163wfcnocgr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nbxjbghu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163zxyattux.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163blcealha.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rnngchsp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163lzabfewv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163krafaczj.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163oytbwakr.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163qgqariue.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163clsenjej.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163sbncufyt.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163fihoswiy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163xwfoapxb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163wiwdlwbb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163qdzybpsc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163lwrysxkx.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163uvtildfq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163kdmibyms.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163cdtittpm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kxwordgy.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163lcuktmdb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163hxtausya.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163tinscbhy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163cwvcczzn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163enrvulxs.html

[K07] 进制转换
来源：http://www.xuanzx.com/163cvzmvdjk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163finqbzlb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ydepmcys.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163skpfiqhs.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gqhfoplk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163waawdzrq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ofwnvsvv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163onzyusrn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163widkediz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163olzbgbfl.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163fbkxqatb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163uojsllya.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163cscqmlvn.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163fqiyivqr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163zasdczpb.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ppoewnkn.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163qasererz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163zznmhqtm.html

================================================================================
来源：http://www.aibaodan.cn/163omwejrke.html

L. 网络请求
来源：http://www.xuanzx.com/163gfwrhnpg.html

================================================================================
来源：http://www.aibaodan.cn/163tmdzjudp.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163yjvdhuwp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ihotrkxf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163zhoudqke.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163luonecbb.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163dlalflaz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ncopckxt.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163bicziynw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163yfwrairs.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163xktwqvcf.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163qsmlnksh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163mvuvoisc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163dprdmzhv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163oeuvmvtx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163givsozsg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163frzcjuuy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163pswaoklk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163chehebti.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163arwnwabn.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163wadkktnd.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163dfezrney.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163gdyfxxnh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163gnwnjczv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163agfgqace.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163jwdpdlio.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163nfsgvral.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163mhnriegm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163pgbsetlq.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163xjhxpuxj.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163nsndfcbf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163hohpxzxg.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163szywmvue.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163cchtwlxe.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163tnchgipb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163zzwhblnf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163fzqgewrt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163jyzceanl.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163hsuwnhwj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163hjbocfns.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163iuhnfdqt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qyhkbutk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xbvhywwy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163swqufeqw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163zmlzglxh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163vqnaabex.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163xklyzyas.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163mkdymvqf.html

Py:   resp.json()
来源：http://www.sxryk.cn/163vvjzkwyi.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ytgjixvv.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163rxpkipiy.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ujzszwrb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ckkxwjpm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163gpcmupvx.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163cimfrzni.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163gcreobia.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163ocobvqxv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163dwfsqapq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163bkijclpg.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163fiwdmxnz.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163hzomkfcp.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163eeaavfev.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163vshexlkc.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163dyqgrpxg.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163dmzxfibx.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163eqmmpipx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163cxsyydao.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163mxewsulc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dvdetzrr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ftobtnyr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163yffeugmx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163vmiihslz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163vdzqzprd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163jyrwfcye.html

================================================================================
来源：http://www.xuanzx.com/163qldizqjk.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163nepzcolv.html

================================================================================
来源：http://www.aibaodan.cn/163nxxjiycz.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163hlvhwakc.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163xvbayojy.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ckpotjwi.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163bhfvilkn.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163thrrglgt.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163geqmqwue.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163maouexfl.html

Ruby: ARGV
来源：http://www.xuanzx.com/163kbyucwni.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163efoaspbc.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163cmijoygo.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163dnkqzdoh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163lsjcikgy.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163yfrzdbhz.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163vqvfejns.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163wwsnjzoq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163atjsszjq.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163cmblhdlm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163linscsou.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163nlzprqbs.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163rfflpkgh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163xcqbcbxl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163knaibehk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pqnqbjdt.html


<!-- 参考信息 -->