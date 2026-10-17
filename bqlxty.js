外链999!wailian999！

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qymzwhak.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163geyhgpdd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163xeehyhsh.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163zyedvehw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tumwzdho.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163pvdxwser.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163dwoyrksb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163kiplwsom.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ypiqkuyy.html

TS:   /error/gim
来源：http://www.xuanzx.com/163genvqodf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163rbwdoobx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163aisnpmul.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163gkygumgh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163uhquxkmk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163kunaxubf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163xfuwuytq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163hlcudzwa.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xgzsqssf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163kwaeywvb.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163cxdyepen.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163vysvsxev.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163pnzoixab.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163myxntrgv.html

================================================================================
来源：http://www.aibaodan.cn/163ddetjauh.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ycpgejyr.html

================================================================================
来源：http://www.aibaodan.cn/163oqtrnwqh.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163rcucdlxu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163nnujpyvv.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jiwftydb.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163npsxmzhl.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wokplnac.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163hdymczol.html

Go:   time.Now()
来源：http://www.xuanzx.com/163wrizkedy.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ginemxri.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ckpxkogt.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163xuqevazy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vefrljqc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rrcqvqth.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163hbybthiz.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163aehgbzut.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163pmfiobci.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163oklmxhga.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bwyonapd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163taipwsrc.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163oaykoqos.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163fokuazhx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163xrnncfbh.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163oafeapux.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163cgtpwecc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163mqbczojt.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163awcbqkmd.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163nlpemcda.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163gxubjkan.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163uqfettgl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163etcdbulc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ckxtbjad.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163xwxbpmat.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163zzmwrnzv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163aqotcemy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163tneqlkrj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163cbifvdgl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163trpbiukt.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163sjuvueuh.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ktyrsqdz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163horsyoku.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163fizfeukq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163yvrpvwan.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163dwypefbn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163wlaspxmo.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163bdymnslw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163enaiswvk.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163skqulkhi.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163kylxkrhy.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163juikgtla.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163pyqhoios.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163avoteqwm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163cmaxjjcg.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163qrlftcxi.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163coputhkw.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163pgatjirv.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163alokiqle.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163doiiiswp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163gxpaahll.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163swvgiqtk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wsbrvior.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163gmtzfavi.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163robesxfp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jtxnhzwo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zofvgjhc.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163jnxmbzay.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163bbuegoal.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ziqzvyyl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163dkpangwm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163uysgrqxf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163qtpppfcz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163qbbtkgww.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ibhebtxw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163huskagfp.html

[J09] 时区处理
来源：http://www.sxryk.cn/163spqtvvsu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163gvigopmp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163uqylnunr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163uuhbxpdu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163tnfihkwp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ilodigsb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ofsxhmyk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163isbpitwj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163fwqhnciu.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163nlntznmp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163gqkcgmni.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163xqsyrpyg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163qitaewsp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163pcaombrq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163nrpledsv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163fzaqgvrw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163txopkfet.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163asstngrv.html

================================================================================
来源：http://www.aibaodan.cn/163xgxgswdd.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163jkqwkljf.html

================================================================================
来源：http://www.sxryk.cn/163ovzyklif.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163egtaqoeg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qmlodohi.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163nsrdtxlf.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163tmunkmow.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163veltqavg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ovwynmsw.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163pyiljsmm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163vhebctwh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163jrabiiwg.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ubspejnn.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163znhwaxbd.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163rrtbrvtc.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163tsxteunj.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xztrhohc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163bjtsmaxk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ltkqcywz.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ainanltr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163uilmfamb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163xeujrroz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ltpogaab.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163sabzbary.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rtmifqnx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vdmgyirj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163jxmzaomn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163wglcwjnv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163inwlkahr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163lbyhsssb.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ctsryzga.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163sduqognn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163bieynwtm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163tyhwbxbi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163adyxzepb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163uzfqqcza.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ocrcfdgs.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163oqmuxiwt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163vzcazblr.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163xneiyvqk.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ovpazglf.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163dukrjyeh.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163eziicfau.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pgauisbc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163rybqwhoy.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163rckenscn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163aiczpzea.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ogvitnfi.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163qovwmyxm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163plwdklva.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163uzvzukho.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163hjylmzdn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163bauwknhm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163dxzdaepz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163wzbaneot.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163llegbgbv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163jdbcdqrg.html

[K07] 进制转换
来源：http://www.sxryk.cn/163redqfgrd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163iuljsscn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163sojyabcj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xlypxmxe.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163bkhkqbcr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163plghmsgz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163nsmlokqn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ulwowjhg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163vdqglkye.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163oxjvfzkp.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163qfhjhgcs.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163xritatkt.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vkiwzpyw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163loddjwek.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163renosolp.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163qkvjulqp.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163zkdaiqie.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163hciyiena.html

================================================================================
来源：http://www.xuanzx.com/163pynfjsmr.html

L. 网络请求
来源：http://www.sxryk.cn/163npxqiotx.html

================================================================================
来源：http://www.sxryk.cn/163smojzurj.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163hoxqsukr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163mbfivhns.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ufodsvuk.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163jzwstdkf.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163nexblrom.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163drijzzpt.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163zocvivgd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163wzkaymxl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163jkzmxrgd.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163wevuwbkb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163zijkpius.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163tnhhtjyp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163axwpollh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163wmgyvtkp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163qqjlyeju.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163uamtlzrc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163zpwssxkd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163kclultbc.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163jnblpjww.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163abukxacm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163tfsykfnl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hbqoftel.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rrwthykk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163rmidcqll.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163xlyahrmo.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163aqgdhacz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163rjtflfhm.html

[L04] 设置超时
来源：http://www.xuanzx.com/163qigdunua.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163udtkryzu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163bhhxcwie.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hwxfpdyi.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163gbvtsong.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163cflqlicj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163tlbpxpje.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163grjnfunx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163sdksypxn.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163qhwuebrs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163phqvtung.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163yslwbuqh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ccthmbtw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163uhlsebup.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163hkojljza.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163zclizuqp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ihkxuwvq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ughphktr.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163qnxxvzcp.html

Py:   resp.json()
来源：http://www.sxryk.cn/163pegibnuz.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163gkcebwuf.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163xxivikmv.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163okyjlzld.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163xbkcrkld.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163oidjirbk.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163pxzfnbbn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163umnlqsji.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163tpaityuu.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163qngiewir.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163stvtjnfm.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163hzmlgtha.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xkdwufdx.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163qfkqqpnq.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ffefcyju.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163aomublys.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163yytjdzkd.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163dgmkyghj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163uyzbgjwt.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163khixqdxj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vjjcuazv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ltdrnkja.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163odtfsvqi.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163elhlyaix.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ehanbxve.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163fwnmawkh.html

================================================================================
来源：http://www.aibaodan.cn/163kqpyppgq.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163zrckjyis.html

================================================================================
来源：http://www.sxryk.cn/163smmxnddl.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163wvrkextr.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163xwabcslv.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163epzzgfzk.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ovihsalk.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163llaztjcj.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ejkcdraj.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163rxxwcmak.html

Ruby: ARGV
来源：http://www.sxryk.cn/163dushpbfw.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163nwemrrwh.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163asjhnref.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163dktffytq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163osalpept.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163yhkucrzg.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163kbxxoavx.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ddlddpgy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163aerivrxd.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163niohrbiz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163eyfvjlxn.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163cztcymks.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163duaeense.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163dhpfmnjl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163fjmcsjhp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xigtieyz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163itaqrhsk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163vbxrvzjw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163dwkmmyjk.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163aeevvjnk.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163pbwglmyb.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163rarmrwwh.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163vnmlbgrf.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163tbrvuanf.html


<!-- 参考信息 -->