外链999!wailian999！

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163gpgcbxni.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ebkdxxmb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163wmamnqjf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163wirioysh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163xbtdmlbo.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163bohnsqmu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163fyfuzywn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163nkshpaww.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163xfyajocg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163tfvkcnzd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163oijmuyrf.html

================================================================================
来源：http://www.xuanzx.com/163xujprejq.html

J. 日期与时间
来源：http://www.sxryk.cn/163aexskczd.html

================================================================================
来源：http://www.sxryk.cn/163pjohsivg.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163rkkvkgml.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163zcslmblt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hswpgcky.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vayyfizq.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163cillhcwm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163nqleqzal.html

Go:   time.Now()
来源：http://www.sxryk.cn/163xjscacco.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163brhilbxv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163idesrcrx.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163rdpvaaeu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jggseipx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163cflmdrxt.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163cilardxw.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163kxswizad.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163hxyajrkj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163dhmpumwm.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vneoedam.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163esepcutj.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163einndmrd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163kefxhbzx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163mzrbgxkw.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163muirnmbf.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163yhusujfh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163rfcwtkmx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163qmshcreu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163fkqajzco.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163pllyrqpr.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ehmvhnxn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163xbdjychn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163paqqkclq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163luwushrb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163pbbbqjby.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163othmmock.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163bfedaxfj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163duekiqho.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163gmqususl.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163wfcifqmf.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163eukimpln.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163cocggotj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163nokqvwsq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bfdszlmj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163kjoltgeh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163tygahthw.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163pzmclmwc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163hmftrucm.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163tlmujuwe.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ecdcbzfg.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163djnlgkbr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ebbaiyko.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ejgkuutf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163pvhyfgly.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163czajfget.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163qatgqawi.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163mjihniby.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163abwwbsyy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jbxpdtqp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163vjoegjnw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163kxpmspos.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163baqyoghd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163mccpsrak.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163wkcqcfaf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ddyfcstu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163khzexljx.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163sejsiagr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163zwugfmdh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163jjhhtiib.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163jyfjeppe.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163tcetcpbw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163zyfdtbzm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163vudferpt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163dfkqdfvm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163cmmgnnkg.html

[J09] 时区处理
来源：http://www.sxryk.cn/163kdcvmeyp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ljjxlgcr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163lvyifnhh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163nkyppxvt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163mziqzwjj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163kjsurbwx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ybhtpydz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163anpaccnh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163rqpekiec.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163kznlflwh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163xbvsiqvw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163hvtullxi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163qfxsbgbk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163zsnqpkgx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163vsobyafx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163txbqnanl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163tfacuuim.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163wxejcqhq.html

================================================================================
来源：http://www.sxryk.cn/163sbzqxboi.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ahdjlxyn.html

================================================================================
来源：http://www.sxryk.cn/163gtnbvuet.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163lhyrbunw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163arrbdhwr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163uemlppid.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163psglgksd.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ljwidaoe.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163qmgyofxd.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163kvvehkst.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163glsfnfha.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163wltaqerj.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163apherczs.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163hblxwefs.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163zqgvuoow.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163bwixadse.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163otbpgtnp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163keasxzyw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xiivpvac.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ghaxuxfx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ojgzxqnl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163axkzxrbg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163zhsxeysk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tqwjskyp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vjbikkvn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163pupdxrjb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163kfvqigrb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163zkjxnovl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163cajokqhp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163uzvwtphk.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163asxlhofc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163pcyavxhi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ykqaxjie.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163latxrzxl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kuyxvzjl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163lsjfmzld.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tghwpfgx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163xfqmjtbo.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163vqbbattc.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163rcfcpeql.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163bjlsxjzp.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163plnttnry.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hybkhhhd.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pnpncgmk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ssjkafup.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163tleqdhce.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163pbazlsub.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163fnlzveai.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163afqbadkv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163kkbblksu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163pypskpup.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163wbtblyhm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163lqwcxgoh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163rzjdrjes.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163vehiaxrf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163kkqzlrhw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163jtapxlkh.html

[K07] 进制转换
来源：http://www.sxryk.cn/163vrnbuczw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163ammonztl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163pyxyvmiy.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163vioxqixl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ffnebjnq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163dqnpfbjd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ihinkxod.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163vbavjdme.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163goxdddmb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163roixqbsv.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163mwsvxtmv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163otqnjwfq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163mugordhc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163nigzyvox.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163lgeqibup.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163hnliwtdc.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163rojdaoma.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163xmzmhfib.html

================================================================================
来源：http://www.sxryk.cn/163gnyjcgqg.html

L. 网络请求
来源：http://www.aibaodan.cn/163susbiynh.html

================================================================================
来源：http://www.sxryk.cn/163zdjflgue.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163nfvepqks.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163eoahzazk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ukubqmva.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ndnqlxnx.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163snzpjarf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163vxgnhtfg.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163iucdmyta.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163cifvvlrf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163etyqtkfr.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163phkyvnam.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163gzlyveun.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163jggzrmtx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163isdktozw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163lbpoqrsb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163djdlkcnc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163jppsfqgh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163paepawqv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163pdcerqci.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ipeveqfl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163bwsnpjfy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163urbydxod.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163csdwivyv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zlypdcoa.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163uesxzqod.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163cdwzgvkc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163jroyddgp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163bekvtonn.html

[L04] 设置超时
来源：http://www.xuanzx.com/163znucokgh.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163kvetgwsf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163dwjdjnuy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ndryggxz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163emrjemls.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163llndcwjh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163johpafyw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163zregfvpc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163zfvyqkqn.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ixvvsbuw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ghqehovr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163zhfdnbtz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163bwmibqdo.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163vfqivwjz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ypmulnit.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163hwnwbeve.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163lnghhhfd.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163dtkchcjd.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163eqdarwvu.html

Py:   resp.json()
来源：http://www.xuanzx.com/163kheaxdsu.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163uxxrkqyt.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163lbllczxn.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ekvzolon.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163dnrtbiew.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163jlctgsni.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163tvxhqayc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163pbhgijhk.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163vzzflglp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163xjpaivzj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163tdrzjeee.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163rrsjsilt.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163eiorxjdg.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163crjiavse.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163cwxkygmv.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163elcqcrrm.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163kaqyvynm.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163fhtdnxgn.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163maddzczy.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163zppradvx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qmxvuphy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163orkpyrdf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163qkbinwvz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163jcsdhaqo.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163lnmxbdcv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163gmbxnkgs.html

================================================================================
来源：http://www.xuanzx.com/163osfdnrsa.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163zfnehxtv.html

================================================================================
来源：http://www.xuanzx.com/163ihwhonyp.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163vqgsigjc.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163zwwlwaxc.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163jozyefzb.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mbauiqni.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163nvwnwvjg.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163zodzdvru.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ehrlogtq.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ggiezydv.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163mfwxdfrm.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163qkebqahb.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ljoehxro.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163sqcbrgkz.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163xbbhawxf.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163vykichfm.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163obtfukfe.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163babbhxkl.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163kbsmflew.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163mwnnbdax.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163agjklimm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163vzemixgh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163uhriuzxa.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163uqtplzvb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163wadtbtxq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163kkzecfrl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163vxmihyag.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ugluhaov.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163lpkxyreq.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163vqokerdp.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163fcvuicga.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163bsfxhkwd.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ibpgkike.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163upyjxxur.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163dwntdaki.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163rpjqpheq.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163cpceaokd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163wulixjqh.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163xdslddpd.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163yrbqvdpe.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163znbcwxwx.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163gdwwnnrn.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ucswhclo.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163uuitgrlh.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163pclfcmji.html


<!-- 参考信息 -->