外链999!wailian999！

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163kdkjysrs.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163mbqqvjwf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163gzgqbwdo.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163etujytty.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qqtwicjh.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163hiyjzzif.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163qylfjhzb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163njoibgro.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163fsxgqshh.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ctmvukzw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163qnsgemwr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163vzkvhqyl.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163pghhvjps.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163sakfbnjz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163lyeaacvs.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163vnjnxpmw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163dwdfeweo.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163gzgjsujj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vdrzrqwh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163brmacgcs.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163svwcmili.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163yxosscbk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163iqygoxlf.html

================================================================================
来源：http://www.sxryk.cn/163lkdjjfjf.html

J. 日期与时间
来源：http://www.sxryk.cn/163qpltobcw.html

================================================================================
来源：http://www.aibaodan.cn/163jwsmaxdf.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163vsizvmxn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163dkprpsoa.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163nemstuic.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163jkiiexfs.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163dvttehxq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163yjmepgow.html

Go:   time.Now()
来源：http://www.xuanzx.com/163lmgrwwzi.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163jjjfxhdj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163xmqkdanm.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163rnkcxqkl.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mjzwsvwb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163cgdhlstu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163bcynudqn.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163dcftmntm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163wynoowmo.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163yqiycwmv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hviefsiz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163drqtpwcx.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163doghlcoy.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163iaipxvqa.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163doyvrcky.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ceslmtgb.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163scbyqbrf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163nzmsjgfw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ddbrfttm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163nfejtaiu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163zzdfbdab.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163daqoexjk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163hsmtyxse.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ntmiejeo.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163nclvqixu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163oznfwvcs.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163nzrmpvlb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163deffkbiq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163bkmtsqsz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163zcvhmavp.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163mthlorie.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ypzbcvec.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163qxwcjqee.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163geeqtvbb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jxhvmrog.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163xlhwqitf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163guuusssm.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163pfykbcmh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ochegrsv.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ldffaenh.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163pfafiudo.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163vaqstpuc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163sykwgrar.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163jsigfqjj.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163qipvwtuy.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163xwrrwzcm.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163dbbtmdke.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163fohwkpsu.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163qjsofoum.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zsikugsy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ugavzxkr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xuwyebnb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163kidofxhf.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ktkegbjg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163tmyiysvz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163spciqvdc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163liutikwh.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163zqkyblhk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ekegxpru.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163nbsdpirn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163giyzlpyu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163eusdqzkl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163dnazrquh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gdjsoifl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163yqkfrijb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163vplvumlc.html

[J09] 时区处理
来源：http://www.xuanzx.com/163kskpuiyk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163xellpiir.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163bhgmpeyg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163tcpujabg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163swgghgsc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163pktxrvyq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163hmcbjiyj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163oegzydaj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163cvyraoel.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163vbqfjkhi.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163eooyfxov.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163sljnraxl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163znqoluxr.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163slirfaaz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163aervewqu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zbvmvtjm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163lkrlpgtz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163vumtwquj.html

================================================================================
来源：http://www.sxryk.cn/163wdjtwzyn.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163jmpsqcpu.html

================================================================================
来源：http://www.sxryk.cn/163tdobdmhr.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163cpxotyno.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163amuedebn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163aefqrezo.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163sivbracs.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163alpvnopu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163hacbwjnh.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163tkmcvlnb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163kxgwchtt.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163hfxqoyvl.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163tyciyjde.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163vkzdoozu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163glulksgz.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zqfvycog.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hadvakmy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163hkubejqo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163mbwmzkud.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163wxbsuumq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163naifvbet.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163rsjlqsgy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163dhuaujyw.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vkujqbsb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163akjewfbc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ublpzvln.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163oxwuzomp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ndjvegzj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163jyeucegb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163shisqacd.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163obblyird.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163zedxsetg.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ozsrlmas.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ssiccazj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kopapqan.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163kgbfigpk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163zykhckin.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163wyqcgncb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ldubxknu.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163zaygjndd.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163iypemmvr.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163wpmojdsb.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163brouolbh.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ngstvnye.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163pvynoiwa.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163cwloqswf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163chlhryho.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163gabwcrsb.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163nijqmbby.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163eofzplpy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163nwqzkmsx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jqeseywo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wlfrasyf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163zgqudabt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163gpubyjhp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163zsbjxfdf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163sajwdmio.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163wenujuou.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163pmrgxvld.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163fxeghezb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163eidmsjsx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mukabvsw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xkpwcpmo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163qmlnwdcc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163vjkhstfp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163imklacya.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163qtapbglw.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163yrxgsuib.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163xfxwnxef.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zbgdsblx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ogakskir.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163pfrxffws.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163usrekthd.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163escogwbv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163rtmaiglc.html

================================================================================
来源：http://www.aibaodan.cn/163mcbnwlvz.html

L. 网络请求
来源：http://www.aibaodan.cn/163roeqcldh.html

================================================================================
来源：http://www.sxryk.cn/163mongrede.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163vbwuimfd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163bunttaxy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ltrayjkp.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163rfezncwf.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163zdeskpbk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163amjghuit.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163inauuuxj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163yoafnsyx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163vekxuqcw.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163sztuoxns.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163voddnczw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163wotkjrrw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163vkeccxef.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xjcheygn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163mvtvpecj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163sqapqszu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163sdzmqvyl.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163wpluejfs.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ixyyrpiv.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163vdanjkar.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ddezrsgy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wlzaoxuj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163gqacgciw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163anpwhgdq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163brthtlrt.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163rjngwamm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163qcmqtpby.html

[L04] 设置超时
来源：http://www.xuanzx.com/163cmlfhbhw.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163mvpqkbfn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163uusbteri.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ymbolqne.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163gcphucux.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163hnudoage.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163mrbswocl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163cdqxkjiz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163dzoqxmme.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ugoellmd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163cvdouhes.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163alwdtqsk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163nwwxstka.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rnpetuod.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163nnupqihn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163zznyklnb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163udtwqhmc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163egfznmoh.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163eiuosqzc.html

Py:   resp.json()
来源：http://www.xuanzx.com/163gzhyowxq.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163fylntydh.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163gkliwhrn.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ljdabjdt.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163cutruqdv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163gomcdfio.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163lvpbupzq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163yccmyupp.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163stodxcub.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163hsipxtjj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163iuuppebb.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163omupzsjk.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163mzskjpbx.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163gjajzpgy.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163oblrrwsr.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163etbvkebs.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163minsfkxq.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163vdluqpsc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163bxtmwtox.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163bpcrqeef.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jqipkpwk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163roxuqyqx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163byrlxqjs.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163kqpobqag.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163ewpyjdec.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163lctxxkvl.html

================================================================================
来源：http://www.aibaodan.cn/163gcgypwds.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163jjnngvwe.html

================================================================================
来源：http://www.aibaodan.cn/163zyldqqln.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163trohbzdm.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ebqlnbjr.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163dwwfrsro.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ijjkdatd.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163jstkgbuj.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ojsjrebu.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163tldwworj.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ipxnaoxa.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ktizkbig.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163xindhhna.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163gtlgqdmh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163wrvoyulv.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163zgdwcnyh.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163eufdmtrj.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163msnycaou.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ikaygvcj.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ltwzzdbw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163rnaydigw.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163twttvoeu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163vjueuhzh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163hgzurzcv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163arncorhr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dwlvndwi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163gjvaikfl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163cgwuncho.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163grspoqky.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163wpgznzpy.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163fhawpqkz.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ugfeygby.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163edqalrri.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163opthmxzb.html


<!-- 参考信息 -->