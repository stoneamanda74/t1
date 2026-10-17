外链999!wailian999！

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163vbzvkysq.html

TS:   /error/gim
来源：http://www.sxryk.cn/163sxfhtfjc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163esxmtqsy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163kcpclizt.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163rlzrwpyw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163kvqxmfer.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163sxmmhiwp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163eqtrpoqn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163oqifrhzc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163pjvquvfu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163edwieezt.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163okcpzbfo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163paesaxjc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163kbabcsaa.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163twtylnrx.html

================================================================================
来源：http://www.sxryk.cn/163dvuilqfv.html

J. 日期与时间
来源：http://www.aibaodan.cn/163pttenvyw.html

================================================================================
来源：http://www.aibaodan.cn/163qqnztoix.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163pabkeayg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163zzktrudx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rvlfxlsr.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ttvrvvqe.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wynybuix.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163vbjzeltr.html

Go:   time.Now()
来源：http://www.sxryk.cn/163dwrblkva.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163cqecmnzy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163thbxfoyf.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ynazwknp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hxhuongm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163chdnuhmk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163naezesel.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ezsgkmix.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163afevzgce.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163jyowwodu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163nnnkqmrg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163dxywkmvw.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163qssocbwz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163bwmdxnna.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163pfmgyqjk.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bpslyusw.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163mvidnlds.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163sqejhcgh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163dwhehyub.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163dxteoump.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163thukajqz.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163gkmvykdz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163encmtzwx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163qsekthlm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163odeemqdr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ueatkvpn.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163xcgafowp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163inqweogs.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163dnnywden.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163auotkbbn.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163hooqoxyp.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ihjetqsa.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163uzbdumrm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163lkwtghdc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163octecqsc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163aqvivshv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ffguvdil.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163cbyqcdvi.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163vnrrkgyr.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163bwwkazde.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ryrxozne.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163mhzamzau.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163fcpkhaxh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ivyobzzc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163qzlgwqvr.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163xehxovjp.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163suctjgao.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163yjgzhyyr.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163tvvjgoke.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163giguimdd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163kctilrpy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163kisxgegc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163uxyeastc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163fldkjisw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163jnvfhbop.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qjnfpamt.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xdfisqir.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163iyeouspg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ruzyjdjz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163vntmensm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163kdxtjrxw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163yfsujadn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163umbweqbz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163cbpqccoh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163qplfmkkx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163hpggirfy.html

[J09] 时区处理
来源：http://www.sxryk.cn/163olijpnvi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ahkiutyp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163zftinqmg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163hcrfmerf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163bgneondt.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163aogtjffn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163mzlsnwfe.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163hppyfxdg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ahymsode.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163mzwcdony.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163sxwmweml.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163vpcjgmyi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163snquumtt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163zdevkkau.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163hvfkxhgl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zfcqsstk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163lppuwvak.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163fghcquob.html

================================================================================
来源：http://www.aibaodan.cn/163bzdkgdmq.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163dqhvktmz.html

================================================================================
来源：http://www.sxryk.cn/163issdgqnz.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163nlihhwws.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163qvaewwzb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163objjnjsb.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163euiwdmwy.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163eussmwhf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163snaqfpom.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163kjdvfmmy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ebdgihra.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163jemfypwa.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ireypohn.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163duchqclb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163wxkyqzjl.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vqcgzujb.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163orvjliba.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163wtdxnlbi.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163nociyapx.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163fenhtzqe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163gldjxjnr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163qoqbchfi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163hhauxgfr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hzfwrdpp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mxizkqhh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163wrtgykta.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ejeiuzii.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163vgahhwmi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163yfyekpxa.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ipmahbbp.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163mypceaqn.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163idltundn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163uzmznzmf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163weiflsro.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163zoudqxzo.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163rxocofny.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163juihmpeb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163kwblsyyg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163nrcvpbyi.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163bjwktlya.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163befskawk.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163qbuaurie.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163mufftekp.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163tzgbrkap.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163zdqwrrnr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163aecosaju.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163bxyoxksy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163hlhpspto.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163bkaoryug.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163zpzbgtta.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163akldfbwr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163pkhknhfc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163kfqikwei.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163mvlyygqo.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163rffzlici.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163aipyztwa.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163daxdqzln.html

[K07] 进制转换
来源：http://www.xuanzx.com/163qnslwelf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163eelkbjqb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163cvkpyzfx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163vzinvbds.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163taarsxoe.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163wxtqmanp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163dcobwqxl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163uhjseqmi.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163wtjqwzer.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163qnisciry.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163nhkrihfh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163uielbags.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163pqhtyevz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163gtkhetrs.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163nkyyevjn.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163imfzldck.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163cdrvtzdk.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163pwjkixlw.html

================================================================================
来源：http://www.sxryk.cn/163pgcczqvx.html

L. 网络请求
来源：http://www.sxryk.cn/163wgehapra.html

================================================================================
来源：http://www.xuanzx.com/163zpteibze.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163obatzxyv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163wdlnbhpi.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ulqkkhkn.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163apyqnmxk.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163wohikgwx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ozqmbzuk.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163vwjfyvtl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163pddjtyby.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163qpheaaft.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163spdhyvma.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163fmhlzwwt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ffozxwhp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ltqzeyfu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163rjaeehjx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163igbokfkq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163zmdbhdtv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163qqmkmagh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163cznulwcf.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163enulvhyy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163qxbhmjfm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163tovoweqd.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163mpeurgov.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vpwmmktf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163aciwupql.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163owfshbyn.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163rgcbvzha.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163toxdzwdm.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163tycakqhi.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163zdtwcgne.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163tzcuyrbz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163zrffmbxn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pyqjtzmv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ryiynpqg.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163puwehrpl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163apcvsaxv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ggbuajbz.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163gxvpemiy.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163jfyimtfo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163gsfwjfzd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163bedxyvyb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mrxbfxpv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163yzbkniky.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163rwlihnjl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163tpvydgtf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163mdbwrljm.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163fexwydlb.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163xxcqbrmd.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163tnoiinqk.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163uqmwigkw.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163zlvgxmha.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163bvfbgahu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163wepjipxz.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163itaaoxru.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163pgimgrof.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163zdatvjsj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163wkszkmhl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163bobvqzsx.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163kvqkkcsf.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163pucsvrre.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163lpwxddjy.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163lzsawhax.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163tcykrlbm.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163tcttuuai.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163xigjcyfk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163zupmvfat.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ohfikybb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qmwypuia.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ngquflfl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163wcuswzmd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163uqxqsmuk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163aqsljuyh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163fkuwdcxk.html

================================================================================
来源：http://www.aibaodan.cn/163ojwcpbfi.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163tokcdekn.html

================================================================================
来源：http://www.sxryk.cn/163xyvzpaud.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163haudgrmc.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163bomcbijv.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163gdsqlqpb.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163pdiikdye.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163iqenkgzz.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163uspzopyv.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163gdgakcgq.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ydcupzmo.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163gvqjznpm.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163pdjprgmq.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163oeumggrf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163vwhwvyzr.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163qrastxbh.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ydimurwj.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163jrvqyzgu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163smlorszc.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163jlrtjywq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163rdhvzcbu.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163kerpciob.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ylvbjvte.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163yyunlgqx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jeckyvfn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163wtnyakjo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163zwleeory.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163tvcyrqvr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163vleupfbg.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163bvbbohrs.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163uozibzib.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163vbkqxkwj.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163jnwudbux.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163gopeqvgs.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ctjsznxb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163klmtktlo.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163jijkbgek.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163kxosuhld.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163onmfjkun.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163sxbmaqjl.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163fvlgufme.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163vurzzrvg.html


<!-- 参考信息 -->