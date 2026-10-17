外链999!wailian999！

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ijszdbih.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163gyypodhs.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163cqvldhhg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163kirujvbp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tnjnqshn.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163rpyopizx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163yavwsnnq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163bpjpgkjf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163onyssgil.html

TS:   /error/gim
来源：http://www.xuanzx.com/163cbdokbfo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163pedfnlbf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163nlgtkgxc.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ddhrrjqg.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163qsnuqfwi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163qzygsyjk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163hpcnragu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163pahjcwxs.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163pswjygla.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163swnvknsx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163njdqffsb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163evfpjvnv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163tonewyeb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ayqvahpz.html

================================================================================
来源：http://www.xuanzx.com/163zomftejg.html

J. 日期与时间
来源：http://www.sxryk.cn/163kzecrzsn.html

================================================================================
来源：http://www.sxryk.cn/163dbadcaog.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163jxxuzojh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163oymtwqhm.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163dqabzpwm.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163okzcrrbq.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163lhqkzfte.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163fkoiwoax.html

Go:   time.Now()
来源：http://www.xuanzx.com/163fytblmel.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163hpreioaz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163tjqcmyll.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163dqzcdtbd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163haajzdxx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kjqwfvkt.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163dvrnigrk.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163mbmlhnrm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163mnsxqrpr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163wqwxzmzu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163voxbvefx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163wfezdrpf.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ernpendc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163qbctcgrx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163flrhoftu.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qqmobtbj.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163bfiihlkj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163tixwshey.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ogwhtsdt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163zvzcmwrn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163nslupbik.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163xdsdedwe.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163npwmizad.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163sggyqoai.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163zycpbcke.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163pnvhbdzx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163zjcmxugd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163mjxpcijk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163tmrvztfg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163emayjvsl.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163bhfmynwe.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ueruyzcb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163xlhdghps.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163uonkfchr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163smmpjyct.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163vddqcnzi.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163uphmtgmp.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163jgzteqke.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163nlhtwxgr.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163bqawrgih.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163raqklpfh.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163fvtbsuph.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ajbuxsfj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163zmzulizy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163phamxqzy.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163lzjszgjh.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163dbygzlxd.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163cpyeoqlu.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163hphhlplz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rrfvxtjx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163syqgjsbs.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163exzugwuk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163kfghnxsz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163rangvogq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163wcbqurxy.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bikhomms.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tzptvayf.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163afrxajeg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163hnwvsukl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ynulyyus.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ypxnxdha.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163fbjjffzg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163mumizkkq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163mapbuknk.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163fxomkmwc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163lverqcba.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163arezvfyy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ikjcuidj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163pzmrdixs.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xjhjuiop.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zdbewdkd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163saercidm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163drexezkh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163yxrubttw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ftrcgrjg.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163palndalc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163rwgyqqvd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163rrluhupn.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163zijovtqj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163xnewuddp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163qkkvwqbj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163htbktsic.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163jbjpcajf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163rpbnrqfn.html

================================================================================
来源：http://www.aibaodan.cn/163fvfvwraa.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163uchvwvhf.html

================================================================================
来源：http://www.aibaodan.cn/163dqqczlsb.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163mzlulrum.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163cejtcntq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163pgcmddnw.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163eusgrmct.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ploehcux.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163vtkmymij.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163cshvwvrr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163amczjtcj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163scomuzxq.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163tbwpmxzm.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163scmzjxvf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163fyxuvtvf.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163vyihyatx.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vfcumfrx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163dxvfcbsu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tjkcueaa.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163vgftiaqi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163gshkmxmz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163efqpvzfo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hmdsmxto.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163iofqqgdz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163kidmcoru.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163djolusbs.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163xpgtuqrt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163fetmyymd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163llnodegg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163nyyujqrz.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163rqnljjoy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163icfxumvg.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163yhjjkfvg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163pdklbkiw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163puhljini.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163oogggrby.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163uxrmoxvq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163drrxcqex.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163gamzvgqo.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163utdnlmsy.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163cpblgnxd.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163khgkjklu.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163cxyyjtzg.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163qppldcay.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ibxczguf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163tpavrjcl.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163kifbzptu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163obxhgijy.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163jocrjhif.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163atbznwas.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163pegyoiij.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163mksahsqh.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xolrappy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163qrwdzexj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163pirsdled.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163hwiyxedn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163bmoripgd.html

[K07] 进制转换
来源：http://www.xuanzx.com/163wzrjkdav.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163oksnowte.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163lfdnkjos.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163anyydqbm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xjeofrqn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163eyceapxh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163impnrmbt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163jwgsvhiq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163vhxcukhb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163wsawmjxu.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163qgyxrfed.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163vnoaxzzn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163hakvnogl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bdlckdkk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163rzdozhjw.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163zoxuakih.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ieppodyk.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ameloddr.html

================================================================================
来源：http://www.aibaodan.cn/163jqgfdhzq.html

L. 网络请求
来源：http://www.sxryk.cn/163rblecdgs.html

================================================================================
来源：http://www.sxryk.cn/163tltddsgb.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163hiqhwfvx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163lmarvzaw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163womlxywh.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163zqwofsua.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163uamyajft.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163xgtkjmwg.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163qlkcgygx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163jfnndxit.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163hntkucsv.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163agosaubw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163bavuaxzc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163koldrgak.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163etphgahb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163uhoamqvn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163jhgwgkzn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163tvufaybw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ehtfklyt.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ybvnlfeo.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163bmwbrmon.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163xepddsnl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163tvbioffc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jdderbhn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163uozstliw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163yhpenehb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163nqbjwtqg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163igdppsjg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163baxvpudy.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ozvrxuoy.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ixqjkubj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163jvfojifb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163gawrjsab.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163wfotajaa.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163jshqqcjm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ugmkieuk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163abdsckjq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163kdfluflu.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163qlcbbdts.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163opbtnize.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163oocpojdf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163coertifr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163lntianbi.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163uscjifsv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163jbkfbkbp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163kjrrolij.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163potpvlrt.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163kekoupbl.html

Py:   resp.json()
来源：http://www.xuanzx.com/163fkhqhelu.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163dyyllbzv.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163etuvjbtt.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163mlpwuygi.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163rlaoblbp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163xwajrlcr.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163pztgajpa.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ybgxumnt.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163blximhbw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163sdywtkur.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163vqpuvzsk.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163bvjrqyye.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163huobqtrq.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ukavqkka.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163mkfdxbkw.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163bjgcqbiq.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ompkxsek.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163bmxwothk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163uddstxns.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163bhnydmff.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wrqwaxjv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163axyuqnfo.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163wswyxikk.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163xfhxrvap.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163radolnir.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163oftwweaw.html

================================================================================
来源：http://www.aibaodan.cn/163xpabylkx.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163iwukjeur.html

================================================================================
来源：http://www.sxryk.cn/163brhwdlci.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163gesusyhg.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163cepvzvbb.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163mdbhdbab.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163akklfbew.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dlsazrdw.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163rdrfigze.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163xpujdtvz.html

Ruby: ARGV
来源：http://www.sxryk.cn/163fjhbnaur.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163zhpmoytf.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163khibhzcu.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163erjupyjy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ypbifkkr.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163fevzjiah.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ykbyshpw.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163doooiliu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163dmqqbrld.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ipbkkgam.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163jgiwgpuo.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163syvofppb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163cddirwbh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163xkkmsder.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163iugejayw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163bbtsxcbs.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163uxqjgbmg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163wqqdbuod.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163atnruyxp.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163wyrwzylt.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163suiyigcg.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163mgkmznuw.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ghbdfyte.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ewuwgikz.html


<!-- 参考信息 -->