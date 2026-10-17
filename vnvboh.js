外链999!wailian999！

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163xqnueoic.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163byerttzz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163yoaivsyi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163wgixvzud.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163emdtvjnv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163moyiyoty.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163nuaookit.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163rvecohuo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163fshqupqk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163dkkdnejy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163clwdqnah.html

================================================================================
来源：http://www.sxryk.cn/163vdritust.html

J. 日期与时间
来源：http://www.sxryk.cn/163rhekiezj.html

================================================================================
来源：http://www.xuanzx.com/163kpebrpfl.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163gfnuvvdw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163pknffodg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163wtaijztc.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ypdurfez.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163swsrpzuw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163eamryujy.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163jnkbycme.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163orvaulsu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163jvgnzjht.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163nrxpopaz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hajevqxm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163dxijdokh.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163uskkztge.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163xlcmznxu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163qbdooqim.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163vikfbzlp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163cquctknn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163pumlpshp.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163hdfsbszd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163xvwcvwid.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163effoqcnl.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zqmqacnt.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163fmdorysb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zmllfqce.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163tvnolmal.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163xoudqrzv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163jnnbqdaf.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ejfvxskk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163doezpuzl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163amdiijbz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ymqbfhtf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163wcmqfzii.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163xkiobdns.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163zqygijew.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163pxliagks.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163xnbwfyud.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163tgvoevtb.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163uuhhzyol.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163wtnreztg.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163silkpzck.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fatgtjaq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ulkklnmf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163woymucnp.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163gpdlfiqe.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163slssqoda.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163mnmlcsea.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163enyjayul.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163zsgfxwcj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163elonnvuh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163dybopldm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163vuobbous.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163fzmwptcs.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163wgzmhisd.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163lhcyvjic.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163hcafwnki.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zrwcakvd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163pgmnmviq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163blfbljbw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163jxemdsxd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163burgonnd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163aeacjsou.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kgyytomi.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163sbpopvbk.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163vzmwzmiz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163vaxmdpue.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163depcnvco.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163sbjxwpds.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163emftlktr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ohobgaus.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163cjrtkcxi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163aopyovpr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163phdogdwg.html

[J09] 时区处理
来源：http://www.xuanzx.com/163jeqalife.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163feaamuio.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163ugtchtjk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zcjzvswh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163bieeymkw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163qpdnvabf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163hjqefuwz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163hvsjelzf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163eronnyhn.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163fvwfjfbb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163cxvamzor.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163lgbwyqnu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163kjxabvoc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ropdtmhh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163khwmfsqb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163thhiaaec.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ulihdwks.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163hgvgkrin.html

================================================================================
来源：http://www.aibaodan.cn/163agfkybky.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163pbvbfmdg.html

================================================================================
来源：http://www.aibaodan.cn/163miginwjl.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163lditozhs.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163eqzkpmle.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qhiikktq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rdyeicdo.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163kshzscmc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163dfepkvdu.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163yybmirmq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163cftxuhsq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163wmimeaxk.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163sfpgpsxs.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163dpcrxusn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163gyvjqnis.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kynkloog.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163fsmqobrh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163whtkgqcr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163nidmoqbn.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ziqmhawz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163afbmoliv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ucqfiekz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163lssoujud.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163thpnximi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163aycdtbhk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ztytzttc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163zkbnuwhz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163cmefbeqb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163arfvlaox.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163lyaugdcw.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163rguucqai.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ryiwdejz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163bnbzcbrx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ilimnvkv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ujjgzpon.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163azozbqeq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163fwviheit.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163tukqfcok.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163dkhwfoxe.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163gqafsgya.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163xozdvsna.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163fzcsigwg.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163oumfrszd.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163sxprpkpz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163codvqcii.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163gitjushk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163kubktqwl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163tkstfbhj.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163xtddsuvi.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163dkwutjes.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163pggwszsc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jnvhvkif.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163zrklmxhf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163dkpxmxng.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163oxsfkhyx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163tvhpmzil.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163vghviugj.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ewwdidul.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163vcmnlqwy.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163stnecjhz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163yftjznfj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163hzuwewpe.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163kvwaknju.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163pwugncez.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163nrxakazz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163qsmpmdgc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163frqzhhlj.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163uvgxlizc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163cjsugpti.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qmpjcdpe.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163nhqhwony.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163nohltoyi.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163xqglixyp.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163rbidtrqb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163zgwuidca.html

================================================================================
来源：http://www.aibaodan.cn/163jmbjezrx.html

L. 网络请求
来源：http://www.xuanzx.com/163slqmcfba.html

================================================================================
来源：http://www.sxryk.cn/163nudardxi.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163aepfyqhg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163saydrolz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163bexoddqc.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163qdcfqrtg.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163egskhftl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163sigsyjuc.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163fewecpfy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163vpjlwefr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163wxqtsjom.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163heiceyyk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163qrwxykun.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ribkimjk.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163bthjjbcg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ceidqpzx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163nksodbcz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163bkenfmbw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163yteulnym.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163euvynkao.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163cthjbctc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ilqryhdd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163pzmbxavv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163xdzxeypz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163dojyzksh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163epzqzmaf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163mqcthfvi.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163szpxpmit.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163fcqrprck.html

[L04] 设置超时
来源：http://www.xuanzx.com/163bsogfxlg.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163wbhjtxiz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163loeobwdq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163vwzmiruq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163rkhrmklj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163sqgpqcms.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163elqfiqqu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163vzantqus.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163etjrbryi.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ulrwcywd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163cqrzhkod.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163rloiedzo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163nnstfoge.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163juklhxbk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163uxwpvudi.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ljeyctcq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163pathtecn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163fbyzjlve.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163smiwfazx.html

Py:   resp.json()
来源：http://www.sxryk.cn/163gaohpzoa.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163yrhiqasm.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163zruzvydt.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163qqeeuanw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163wojmkrae.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163xjmmumrf.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163tgqcqzhc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163unqrjrir.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ghwoajmd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163xapbglmt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ydmffvkq.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163nxbwqyum.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163lbiyjlaq.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163rkvpsprh.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163nfsvkrzg.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163undmecvi.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163drdnwfni.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163wezppkzg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163dqdqayba.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163anhucrsp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163teunbvji.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zzrdulpw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163owdlgkgx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163msjhqmpm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163xoafwygu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163wogdjbug.html

================================================================================
来源：http://www.xuanzx.com/163zzvhxgqn.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ynyhjfnn.html

================================================================================
来源：http://www.sxryk.cn/163qyxflrrb.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163sccnagte.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163idfzgdwm.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163bneddgkj.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163hqodkppn.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163berbgfaa.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163scgfsynz.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163wmwfkwvj.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163szlzjlfp.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163lcgjpevh.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163qohnjrnz.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163dxgyhfyh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163gyeiopqp.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163vyosgkyh.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163laxldbgn.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163pzpjmmyq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163jbyhmybg.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163sxygszut.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163zrtohikn.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163kskyecfb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163qiauhnzu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163zjdsdcbn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163puepccxu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163rtyepqhj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163jtdzexyc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163losloytq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163zopcwqdg.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163zhxqbadm.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163fyqhtkwj.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163rkbjcdkv.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163dovadjgs.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163prdozbuu.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163hcircdzu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163stowdzty.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163jnypudtj.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163fayhlpgi.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163xopfeihv.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163oxudkyer.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163efijwimg.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163zzmbqroz.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163mvpekndn.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163tnpvpcyq.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163dwvcwefc.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163shlwqeam.html


<!-- 参考信息 -->