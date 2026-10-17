外链999!wailian999！

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163imabfotj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163zkvyhcnf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163pfoqvzts.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163qylgncye.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163gmtdvyml.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163txirgrmi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163rhrhxltd.html

================================================================================
来源：http://www.sxryk.cn/163ppuabcfz.html

J. 日期与时间
来源：http://www.xuanzx.com/163asswwmby.html

================================================================================
来源：http://www.xuanzx.com/163ivxoducw.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163txhskxzv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163vtmcprcf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163tyhnvjiu.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163yqvxjvbz.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163oxlvornn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163hwhghjvi.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163khytxlzd.html

Ruby: Time.now
来源：http://www.sxryk.cn/163mbauvmtm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163blbalgzs.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163myuugkfn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163bgxagfxa.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163qxwaedbm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163vybcvwfj.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163wohlupxo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163esyculht.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163mhiqfctd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163swhvcecc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163nnpukkvh.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163fhtqkfrj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163abtevcal.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163zlrryssw.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zagzbuoj.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163suuttppx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163hplmpnhs.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163oeozaeso.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163fnbzbmjv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163apiyekmo.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163fmcuqtwp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163zafirzyi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163jojlhkgz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163mfycftvg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163fhkgfjer.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ooltozfr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163oqarywzp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163kvkfhzkm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163egzysqas.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163fiizsynr.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163hvrfbygq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163gwwlkphh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163evfynpfc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163nktaahjp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163rywnwpvi.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163xviuowoa.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163kimugvdi.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163rwiswpxw.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163hcperwvp.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163emxvkzce.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163zanqjtre.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163irrbpyxj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163vviywqim.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163uodtazdc.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163wkhoxccm.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163taduwlln.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163xajpvbnd.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163uccxopih.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163snvpyujs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ibbqreqo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jipinykb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163qrvybkpn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163yqgnxyok.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163chtkaxzv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163cktsxuau.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163lqgfxppv.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163rpcxqujn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163rpkxlevy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163gxfhrmfk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163btypxubf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163lhiguqct.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163paatoaat.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163sizxyxyd.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163tmaazgya.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163uwlgfrau.html

[J09] 时区处理
来源：http://www.xuanzx.com/163znzpqswu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163scizzkpx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163nfsylhug.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163tbjpdodi.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163jadoppaa.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ucgodrmc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163npeueqqc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163tbxhzieo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163qoezvtpd.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163zvwoukei.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163giilyaqq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ozkakgqk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163gowvyqmk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163dowbjgwz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163tpbvclil.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163txeempth.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163wnpgwiee.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ublkmava.html

================================================================================
来源：http://www.xuanzx.com/163osimossk.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ocabvqaa.html

================================================================================
来源：http://www.sxryk.cn/163owrqputy.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163cgprbrmu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163zyggyppe.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163hshwwfhd.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163fwwnfgqw.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163xoiqkgsf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ndltwupb.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163eoyclexq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163bwgxtxtp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163bppgouqv.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163hnhgxcgt.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163reqxjkkz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163pdnorhdf.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163twgmwqno.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163bllnbrpc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163gtqopdxf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163hkoqpjwq.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163kcsbvkzx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163cycjpouv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163kwrmoeng.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163sijlkoro.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163cskgxidk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nipxbjmi.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163uthlmrym.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ejduvrvr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163vunxmywc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163kxxkowgm.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163lervjcwl.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163lztrpqhk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ysgsarxo.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163tbaeyfnu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vczmygha.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163sepziiss.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163nghsrdou.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163xrlamsfm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163zafpviuf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163lctcpssn.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163vsctvkww.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163bkythswx.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163pzbmvacv.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nlclzcjp.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163lmlmuqoc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163odksrqxa.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ljvsbmol.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163mdtvlusl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163findflpr.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163maeoxnrz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163hyqftlxj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163bafztqja.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fodlxssy.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163euwxoytb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163nhwgyvol.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163apspjrwo.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163wmfkhhmg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163fkqlvdwi.html

[K07] 进制转换
来源：http://www.xuanzx.com/163qnhbmgzb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163zhkocrty.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163bwulbiwl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qlpfudbw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163taiqjwom.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163yknujooc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163qswbswlf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ersqownw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163vprbpfxe.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163dghyoggq.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ujzgpbas.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ackklegr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163xjbvnqrv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163gwtosakx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163gwttmneq.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163tdlhmnho.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163psbuqcej.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163olsgvita.html

================================================================================
来源：http://www.sxryk.cn/163eqzzrjrq.html

L. 网络请求
来源：http://www.aibaodan.cn/163runlifhq.html

================================================================================
来源：http://www.sxryk.cn/163emlwfjyu.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163yhhzjwkk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163dxurcvvz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163kzmjzwtv.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163mpemonal.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163hrhypssf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163fhioityd.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163xyhgmwic.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163jmutlypo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163woalrdvq.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ignbtnlb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163dsfvrmif.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163wioztcfp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163yfvoamzs.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163qxovhfwa.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163yvxfowzd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163pvkpmhsw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163abzwwsxu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163jyeyvrcx.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163sghygzty.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163jhelijwv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163pkntxsew.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163axnsqgjf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163lmflzlgx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163dbirawlh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163lcbynorh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163wopdwjlw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163grwrgtxy.html

[L04] 设置超时
来源：http://www.sxryk.cn/163aioljkmi.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163pqjeybfs.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163nrtnolxv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163duuztwvn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163mriksova.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163fowgytss.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163tirxvfvl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ppyadfsy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163fsajchze.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163iwrkhdta.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163bbuizftn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163jiogaqgm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163nvmbtfic.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163iejumguu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163mgqiywnl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ibgtmckm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163nhrkptwb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163udznzhdt.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ikwhnlnu.html

Py:   resp.json()
来源：http://www.xuanzx.com/163fvjctvej.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163uhsvddru.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163qhestypr.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163tkfkxjxu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163hkpgodnq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163qmkliokf.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163qgrebhio.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163cwdvuqvg.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163lvwgxxor.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163iynmhxjp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163dnqjhkoz.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bogxvokb.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163lphlhyyy.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163pvhuhgji.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163wbwkhuit.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163dnnpnoev.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163eudqwtiy.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163mcehvjkd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163kdyhcscp.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163hjfgcmuv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vjcbavqr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fwfrrktl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163aepgfcbn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163jvxphgqq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163haczzmow.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163zptvpuil.html

================================================================================
来源：http://www.aibaodan.cn/163diedulnd.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163jtstdghk.html

================================================================================
来源：http://www.sxryk.cn/163okwglugw.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163xcmhxaux.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163qogbysgu.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163oxyjgxud.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qwkqzcwt.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jsqfdnyq.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163fmjksebo.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163yogqdkgg.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163bwrbzzqm.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ezjtmebu.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163bxkijvbk.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163txootngi.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163bjxdtqde.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163mrwzvyzw.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163gahkxaqy.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163avuxdmup.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163toscfxwm.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163cdzbaomm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163qwunmlha.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163nqcswinr.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163iteemaju.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163vtgnxyoz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163bbkqqsed.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163aisvgwuu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163cavcpdkp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163udcfmuue.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163nkozenyy.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163unegmqsb.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163fqgptgpd.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163evatwzso.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163aaycsntr.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163lzjteynu.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163erlkvfas.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163bttdjpgs.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163dtimtoac.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163yleqtukq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163hdrbifnd.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ymqmevih.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163kuejcptl.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163mnrsntfc.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163yuuqfmje.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163yauvfjdr.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163vhocjjcf.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163mloiprbv.html

Ruby: exit 1
来源：http://www.xuanzx.com/163rjrqhsqd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163ptqjnduu.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163erzglrja.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ikobbjbg.html


<!-- 参考信息 -->