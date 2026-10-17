外链999!wailian999！

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ilwabvip.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ywhvrbsa.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163enpnzqgh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163fufxnhih.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163piqvvtnu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163wzmvsbcy.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163momnaktt.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163tmvuyypp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163bfoxkznu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163qwaktmmu.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163spowthox.html

================================================================================
来源：http://www.aibaodan.cn/163gbfpdtxl.html

J. 日期与时间
来源：http://www.xuanzx.com/163vbltgxyx.html

================================================================================
来源：http://www.sxryk.cn/163vbhhbvaf.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163oddcenic.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163gszbucdm.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163osslhxtj.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163uwvseiro.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qxfznovo.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163nudzisbj.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ohsurhow.html

Ruby: Time.now
来源：http://www.xuanzx.com/163wbtprwlx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ymnfriui.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163uczldtke.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163axquntws.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163wfcddqft.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163crtdnrsn.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163olhupzex.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163agpcrals.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163tadgsxlw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ktxitygi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163aphncxkh.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163lsbdntdu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163afscxcni.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163efhvrhzn.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163norwjbgs.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163oroaihsq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163wmerfgvv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163xwcvbrbr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163zxtfiaqm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163smiwrcjw.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163dzscwkrm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163xouqeojs.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163yygbuobz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163irptlkfd.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163iedmasel.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163nmbvkwzh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163qjofbdjt.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163bwhgxnhs.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ayjwikfw.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163tdpxmbve.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163prmxnsmj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163adauqemz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ceejsmvb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ilebitxa.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ddcmdxsa.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163dtrwvdng.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163yhbolcug.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163scobzlxb.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163pdtvncnh.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163lasiagra.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163yxsxoljd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163rvguejvh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163tjchedur.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163lvafigal.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163orjphdmm.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163njscdqkr.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ybkukheg.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163vlvjkfzk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ecjpjexx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163cokqoegl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ncnqiwfp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163pseppxaj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163kmvixseh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163yjqbklke.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rhutydps.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vhcrwuof.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163xaamgdke.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163hksdytts.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163cxovewnp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ewhovyzp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163tcvemjcm.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163knigtuci.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163hpphzhxz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163azetxegg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163nxydrtnw.html

[J09] 时区处理
来源：http://www.sxryk.cn/163pnjmsntg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163akabbxep.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ijljrelm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163iewjgtcr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163klcdoqrh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163injbetyt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ebqwbjrd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163jvkvvwts.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163xjjhocnf.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163kjnokznb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163kiuzlwhv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163dmbzeikh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163akrvmxjw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163wipfnuzh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163plzgiqos.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163dtunbafu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163gzyfmwgv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163wmyzmrwf.html

================================================================================
来源：http://www.xuanzx.com/163strqaqgi.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163soyjpbui.html

================================================================================
来源：http://www.sxryk.cn/163xxhjbgpr.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ymxhjqbc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163bnuioivt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jjjafmio.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pqvdzusi.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kojwdwvv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163fpygulyi.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163zsoqnhvw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163gubjzoac.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163tpzviaqe.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163rgpmdkur.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ejexbpsn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163teufftzg.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163unegduib.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wzytupgn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163bimclddx.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ugygakuk.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163otzaanus.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163bscdhuag.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163bcodvihz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163jjbxmahp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163opjtfcbk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163pdmgtycc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xguxlwpl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163jpwrpabj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ebmjqdqm.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163tesrvhrm.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163yanlrhqq.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163uofmvlzc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163edygkonn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163hytkkehj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nqrmulbq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ylcqxpkx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163dmvthosd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163mzcghxfj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163upjqewns.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163gjsaibnp.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163dybsbusq.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163kjnfbunj.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ywdjpnxu.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163expjvpmv.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163gnveebsa.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163nckuyohf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163sxhrytqo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163fysnulgf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163hrufhtbd.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ypracdmh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163wlbhfjxt.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163sbfiheix.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163hrgeyyau.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kuborbux.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163obiqjymr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163lnsemtus.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163rvapermk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163zdpdsmiw.html

[K07] 进制转换
来源：http://www.xuanzx.com/163czalxmgg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ohllbnjp.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163eqnoiret.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wdcwlrni.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xaarwfqd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163kblktcns.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163amkxcnbs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163hxmpjjzm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163vmmvfhuq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163kywzfqxa.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163avlnzoff.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163vndiyswd.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163imuaozfo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163uvxkvidw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163psgtzdtj.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163jsvikzba.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163qhubpdph.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163exnxrmtk.html

================================================================================
来源：http://www.xuanzx.com/163sjifdkdp.html

L. 网络请求
来源：http://www.xuanzx.com/163ggkluypc.html

================================================================================
来源：http://www.xuanzx.com/163deadgxfb.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163xtqtbzju.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163arfweygg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163vxwspbiy.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163rdtabfem.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163vqcqdwsr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163hisocqpj.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163gjheguzc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163zcvkjnlo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163oagzvzui.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163bctepjfu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163nlaavins.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163gseexooc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bwzurlyj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163hvrloljw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163oijjocax.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163zjtmrmij.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163foukcjgl.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ogxnswcr.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163zuevcuaw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163zbwvofbl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163lqaqussx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163frwuilcu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163azqjcaer.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ehdvqcnx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163tucnnvnk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163uunfcdsw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163twmcexyn.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ptepuhms.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163dmidfgzp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163sacyznre.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163kdgbahib.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qswiozuc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163zfjdjmpa.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163vsjpvmip.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163zjwzlyrm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163fxsrrxzy.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163dqgnbneg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ibstwqqx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163pqvszrur.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163rlpgxqlo.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163pwvmahey.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163xvkpkfkf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163yqbsjogy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163obpizwsj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163hxijrlge.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163tliobklo.html

Py:   resp.json()
来源：http://www.xuanzx.com/163pbinmiig.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163qyrsklkd.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163dxhfhiqx.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163bmrsfycx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163hbneloce.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163cetnctgg.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163wqafjrgs.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163umqewmgw.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ouvnseau.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ffakkxfy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163wircxrcq.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163anqfvovc.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163sbxzjpqn.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163bzrvoroz.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163wbnvziav.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163zybbxrwl.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163gnqmlzgb.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163mqhsgcyb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163gwyokzib.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163eurzobaq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ollvyabt.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tyxiwags.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163efxgbodg.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163fhmzknwd.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163htphrvpo.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163xqqlcotw.html

================================================================================
来源：http://www.sxryk.cn/163gptrlpqk.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ihtibkiz.html

================================================================================
来源：http://www.xuanzx.com/163cxixuzct.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163hbkyzpkv.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163dltiqutm.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163rxngofkm.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163pnuzjsyj.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163axzgirng.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163kstfxizu.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163jnfyzvzd.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163owuijvys.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163uqfqlejf.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163pswutyvq.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163uuorfmxm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163foznflme.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163noegwjjf.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163xmvnjnue.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163pasktvcf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163lrkjdhin.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163eetzyyft.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163lqbeybbm.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163nohhhwbp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ewmhjdhd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163rsegikib.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163kbbkawgi.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163rgtwmior.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163qgsaxshb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163cjqcvyyh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163evopayip.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163jhoxdpzb.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163kkjkizpt.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163tshmmfgv.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163aanfevhj.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163yysinria.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163bjjdzsqa.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163jhsarmsf.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163gmbqjptg.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163themaipe.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163vrqbzuma.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163jrpocqhl.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163mgoezcjo.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163rfxejlqp.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163xqtmxuao.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163rsiyheii.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163bffnpnuq.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163hxunpiuu.html


<!-- 参考信息 -->