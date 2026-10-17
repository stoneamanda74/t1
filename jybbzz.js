外链999!wailian999！

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zrcxpheo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ekgxflvo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163cldclhtb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163upoqthsf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163lybrzuwu.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163qmkqwofq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163yuoexfif.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163mekxwqml.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163zkeedeqx.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ayaikegi.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163vxojfjso.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ngihrnvb.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ysrpxbis.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163bgagmpvc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163berirhjz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163vgobqaoy.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163fkgdqypk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163rclkivms.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163pshxarlg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163mahgzakh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163roemxcvi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163mszivanp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163qwotwqqs.html

================================================================================
来源：http://www.sxryk.cn/163thidfjss.html

J. 日期与时间
来源：http://www.xuanzx.com/163mklvtvsm.html

================================================================================
来源：http://www.xuanzx.com/163pgddmsqu.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163dxkbxsxs.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163bbtgjcim.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ccyyfqgc.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163penvdhyi.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163yunginlp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163zikzbvrz.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ajogkzeg.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163kyqfvwgq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qnmlywkm.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163shefajzy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ntvkhwqz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163enggkvte.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163jyfdazih.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163tteidget.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163dmolanhw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163jurzudkw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163dybohrtq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163emzagdde.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ttfuxkfz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163uwfqmmqq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163iccagchf.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ggkzaocn.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163wmizxzks.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163kqnrjyor.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163rsiqobhv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163teglmffv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163tbjpjfqy.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163zbrjpxku.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163gwdgkrpq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163hfrtrbtp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163kdyshndg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163pfblcokc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163vnuztqrn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163kwlvrmlw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xxtysqvl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163gpvpbbem.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163qeczledj.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163xvccogek.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163lxxawqez.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jtcenrfi.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ocjxzama.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163txqmfghd.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163qpcowtdp.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163bwqtmonc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163smexnsxy.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ektfsplq.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163cbigggoe.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163vnatsyfy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163alissmit.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163xoatnfeq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163xdgpslho.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ykiwqirb.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163srtcprfv.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163szsmcbbk.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163itqoqjju.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wnvyhmoe.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163cqpglqev.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rbdxhtiy.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rcfwwypk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163fzzypprd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163gakgvofb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163aaorklsr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163krxzlodd.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163caiqolqd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163zuzquevh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163isuntqbg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163kotvczdc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163soxdvogn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163nnobudcr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163uzgdumvd.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163rtofmdto.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163jyvtczta.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163cwbraqgb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163buioaxyg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163vyidunyl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163fulrlpwu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163nlddrymj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163bfwkovrz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163klzwavyf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163vfffclol.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163saudbwep.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163vatogdzv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163djerjzrh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ziyxtvpm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163zatrxjlt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163njkvxzxb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163yxsrxlsg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163uiqsgwpx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163zvigufgp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163lvykhopj.html

================================================================================
来源：http://www.sxryk.cn/163txlajiya.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163yvgxuxpn.html

================================================================================
来源：http://www.aibaodan.cn/163rrjcsjdt.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163uftsacgf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163elojidso.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163psxlrkvj.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qknclywd.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mhfuwrnm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163bribrbvc.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163vrmfioou.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163wkilgxlx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163vanwlkil.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163fwvinqtl.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163dyigqgmb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163zhaktlfm.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163qxfshbpd.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163yjxpiyno.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163mvgmmqfe.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163brrmlpnx.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ogagaihj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163veyfwjbw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163xccpdsdw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163lgoemcrl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163wblhjkol.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zzehrilx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163fdznfgiw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163rsheoeap.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163klyhxnfz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163vlnpvelc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163asmennms.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163dduwfxze.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163dhomzzli.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163rgkojdgm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tlezpkff.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vurialde.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163rkaofmbd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163hwnnrsfy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163lpieophj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163cudagjoa.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163sesmpwmr.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163xpuyogtf.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163gypkscja.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qsfbsgep.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ozyhrtun.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163enwqicjl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163mjzlvhoa.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163gpxcvqgv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163pzgstuzh.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163zhmlygyc.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ktrqgbad.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163jiotoxdf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gflyyinl.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163noefjxac.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ofyzwtvt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163wjvzmkvn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163iijimqfs.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163rqblyinl.html

[K07] 进制转换
来源：http://www.sxryk.cn/163hymrhnmp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163houhudhe.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ykbmhkxk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163orhornis.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163hipawqbf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163tawifhud.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163qcqegmom.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163bscwgdho.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163uqlynqqo.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163dndruhzl.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163qybsdfuo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ckianjco.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hxgrvtwa.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vurcpade.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163zliymddg.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163pwwlcakt.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163tybapafw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163dulvffcs.html

================================================================================
来源：http://www.xuanzx.com/163ozbptnqw.html

L. 网络请求
来源：http://www.sxryk.cn/163xdnvulpq.html

================================================================================
来源：http://www.sxryk.cn/163bhbxwqhr.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163lucykrpg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163rhwbxovj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163zrgodzjt.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163byzdjjdc.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163jyvlsqsq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163bevldzul.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163pkxciodf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163rqkkojyw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163zpiorhfw.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163emrbchyl.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163jtjpgmuy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vtfqkber.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mfzgixee.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ywyphdqf.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163nrhhcprq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163qxfinjmv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163bvcitnxw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163yyduqjft.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163dlpnffjo.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163fwylspzt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163fzspbmml.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wlnjbfuj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hsjwhvyg.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163yyrcshow.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163jymqqrvm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163rdanrxdx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163bacpjiyu.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163gasraput.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163zdixjypd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163skbxjxlh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163btzqhtqr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163zmkkpoae.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163fkyaaust.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163izwkvypn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163dpdemekw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ivwimiiu.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163kfspbdpz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163twcyptxh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163qqjmjtet.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163rwbviwql.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163twtsjdyt.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163jzoicbvh.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163xmszeztc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163vddriydw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ngbispbd.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163dprxsxjr.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163psyoqutk.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163wenxbrvw.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163jayebljy.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163byfxabes.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163dsruygdt.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163kbbdmkxa.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163wphjlciu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163yrnzysvv.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163iamthlnn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163hmenbeus.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163cybgxdpu.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wcghaxai.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163dhsdjrst.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ekcjtgvc.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ntfpdteh.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163kpthcdse.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163akbtfvbm.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163kypyobuv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163lkffltwx.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ofieirdx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mczhpvwi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163voqesvcs.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163vqozncpc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163inklbabk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ctbacsoa.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ysqiasbk.html

================================================================================
来源：http://www.aibaodan.cn/163thkjoewh.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163duuubqwz.html

================================================================================
来源：http://www.xuanzx.com/163mhqissus.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ryrjkivd.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163asrchqxk.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163rrmeseze.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163mkweehzw.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163idfgqdhe.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163lbmskcvi.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163nakdeezw.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163qegdrijs.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163wuibxagj.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163enhjhsnv.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163tzzlqwdg.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163zzmzehzi.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163weagcsks.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163sofefeav.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ynclkvnn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163njvzzbtb.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163dnmapjyq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163bcuupspq.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163dwxcucus.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163rxtwgxcv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163vtletmbc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163pjvbanwh.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163lsmqyovh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163sqfjekqi.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163gmtoaliv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163yekovrrb.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163hbhidqet.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163nxbvjgop.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163tgyvglik.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163lfmtwjkh.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163bqpsvsyr.html


<!-- 参考信息 -->