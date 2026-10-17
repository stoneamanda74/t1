外链999!wailian999！

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ocngjuou.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163jzzrgjpn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163egwebnfq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163agpnecug.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163jnoribeh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163sedlkysb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163lmxoibpn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163pczjdriz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163hesvzted.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163nncvrxwp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163spmjkzfl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163xxieqxma.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163axnoymms.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163urukyitm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163tfzgnicj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ojiihcnt.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163iplsvxen.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163kvsvmcgw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163xytgbhik.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163unubprbr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163hkvvgfjb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163qdmschco.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163epvimvik.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163xnekzzjp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163sroiqdim.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163viiyhjzr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163hsmbtgbs.html

================================================================================
来源：http://www.xuanzx.com/163lsajqrys.html

J. 日期与时间
来源：http://www.xuanzx.com/163wezydzch.html

================================================================================
来源：http://www.sxryk.cn/163jlxjrfao.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163pogviyxc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163nmmzjazb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163dzpxunep.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163phcafywy.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163pfsqoset.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163qtzfdkwd.html

Go:   time.Now()
来源：http://www.xuanzx.com/163dfegwavy.html

Ruby: Time.now
来源：http://www.sxryk.cn/163slhxkaqt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163frdamwta.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163afncsllj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163obodgfwd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ltjdgdpk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163hlqtemyk.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ddlcpdyw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163hsicxble.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163gukawgfs.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nykanjxr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163rivnrwur.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163cpcptvyg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163pozbgrsm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163hmpensxi.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zafxkdkt.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163fncbxfhp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163kvhhjdoa.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163wzwkdcnh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ngnixpzt.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ypbzeoid.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163fjjkwdde.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163bexeswvt.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163otfxtmtw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163dhsixjxr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163gxuhqnqf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163gpdxsjwa.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163rekwgoov.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163vikyznyg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163jgfcbndd.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163yajihwcm.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163kcxqrldm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163izsdeyie.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rqtnuvid.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163zhqndezm.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163gvnruudh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163kltsqvqx.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163loafgiah.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163gzzzibje.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163cqejuauf.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ynrvpzsc.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163vzgvnbhs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163vezjutcq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ngysbsyl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ghvybuou.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163jcjdsigw.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163xbzypvcm.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163gsyiwlwm.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163uzwixvbv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tuzeokqf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163otxfewsl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163yrdjxkom.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163loojrxya.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163pqqktoxk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163wdqnnair.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rlnwirvo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zxgmumgz.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163qexelmxm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163uofmkmkz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163hhndkavn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163fturzhwy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163nbuzridd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163vyhzdjjj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gzbobvjr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ajmxknzp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163osgsbftp.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ebkqpdci.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ykyumqap.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163fekurlfq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xpxnxord.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163thbdvwug.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163miiweass.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163xhdhlwjk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163grgbxptu.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163plllcvoi.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163vegntruc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163vzznijyd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163kimcchos.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163tnafuqcm.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163wcsqdlzq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163pyfsguwi.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163svnodqrf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163iuxvkfcx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163eblpztek.html

================================================================================
来源：http://www.xuanzx.com/163esdzgluw.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163larfnzvw.html

================================================================================
来源：http://www.sxryk.cn/163cdhdwsih.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163xkzdqnar.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163nxsfhuag.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ynfpzxoa.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ceaqjedi.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163gkrlzkrx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163wukgzdxw.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163ladsdhvp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ijhsjpnt.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163bovjkrxu.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163qtleepcp.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ictclqcr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163geayyfmr.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jqfqkpiu.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163kewaglsk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163eyydyjdk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163gffmrphk.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163lgyrewpq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ghfskvnm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163sjqabchu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163cjrspepg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ewljimgf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xiadflxq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163cmbszkjb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163nhitsnjy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163mwlotoxg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163nqxkjalx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163dzfkcjyj.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163mzomxiqs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ocqagfgy.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163yjbtptuq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ymfjkqrb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163cyqjzauu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163kkaadqif.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163oeopnwmf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163lswmvpxi.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163stdtwrbf.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163rbblfyth.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ikhadkvy.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163wyoztile.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163sqfzbeby.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vxoafstc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163etizpkpr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163iuevqmfb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163xcwbqrbq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ojnpfcwx.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163biqaixba.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163jvfulsxx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163rubejdew.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163iafpbvtw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dhklpbpr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163xvnwykbj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163jqzukpgj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163jzjobfkk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163vibrysja.html

[K07] 进制转换
来源：http://www.xuanzx.com/163cuouxfgr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163epzzlsht.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163fnxaomjt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163arsieoct.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163myphwyxm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163vitptppz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163nfwdvhlz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163zbodshvk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163wzbnjnxx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163uuufrohd.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163hptzpmka.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163mmvyeywi.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163utdxneut.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163tinesovz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163lyhfmcft.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163gtmaudxf.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163jjdppxjr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163zlcxiort.html

================================================================================
来源：http://www.aibaodan.cn/163fsuqpxed.html

L. 网络请求
来源：http://www.sxryk.cn/163tdncmosp.html

================================================================================
来源：http://www.xuanzx.com/163wjkfpdoi.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163vaykcqmy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163clfcglxp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ejnsgwhv.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163mhwtxwug.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163fvmltour.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163vmjoheja.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163okrtmyvi.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163pjrkyzuy.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163cmrmjgkv.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163lejcfosf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163mipvcqvk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163dgykbhyi.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163sqxhgxum.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163kqrojvje.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163aaqwccbj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163eldovwnb.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ojiaectx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163lgtlxfmd.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163mvyjuhej.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163xutjzqxd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163nrhqhhre.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163llrmqryu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bmklyqeg.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163swgeurnk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ktmjrlhs.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163wtfpecdo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163jcuczbxg.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163kenpsvfw.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163rkvsbkps.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163rilbxuik.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163tbninjiq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163rsupoaku.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163itvqxaxh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163gkcrwqso.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163teecitth.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163fydgwypv.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163uryhcrkk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163eanmhhex.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163zdkhgcdt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163gzolugyv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dmskfwiz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163tfimizxy.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163wrgustnm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163pfhanuhs.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163pyexfhkg.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163dzcutoim.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ljknxqvv.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163inblfxrf.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163yrltubuc.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163viexwwdx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163yyshzguc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163lztodlha.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163cckexrwe.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163seddywyl.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163pceiawzo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163nxtberzo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163zbahguqo.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163iotsutuc.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163gilmegmf.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163moodjfpp.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163dvjpcvfh.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163nblvgvqr.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163fuxanihp.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163tqotcvjf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163bxeopnhg.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163anwyxaka.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ebljzsqc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163iiggtobp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163tdqevehj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163dqhjxtkv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163chyebyjs.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163aweczzzr.html

================================================================================
来源：http://www.xuanzx.com/163nekwcuvt.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163meotloxk.html

================================================================================
来源：http://www.aibaodan.cn/163ymqgbmul.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163djcdoczn.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163hebblaqr.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163uhbnuekq.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163iswzwjcx.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dtljipak.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ovisuanm.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163sesjkvjv.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163peidotoz.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163agynlaxu.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163yyrapuac.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ofhmanur.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163fumvgafa.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163uzknjluf.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163zokayetf.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163fvmrnazh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ogsalqii.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163gxpidagh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163znqhczut.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163aikcycwk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163cjghngwe.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163omlviclf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163vjrhonuf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pjstseah.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163knrhrdgy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163vmazpzxs.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163cwngkcyf.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163bmkxqewn.html


<!-- 参考信息 -->