外链999!wailian999！

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163akfbfngt.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163omsjvzoh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ulrwcjer.html

================================================================================
来源：http://www.xuanzx.com/163nfbrofih.html

J. 日期与时间
来源：http://www.aibaodan.cn/163zzbjrqyu.html

================================================================================
来源：http://www.sxryk.cn/163xmsgjfly.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163jqrttysj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163vatgqpbk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163snkydgky.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163xiylqftl.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163kpadvwnu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163fbcpumfi.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163tbadiivw.html

Ruby: Time.now
来源：http://www.xuanzx.com/163cnibbwie.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163gtrxwmnm.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163tenhpkgn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163sqgzpccx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rscotpym.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163vbfjsldq.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ybdkbmfv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163xmchmxjh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163fhqbyjle.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163trgtvhvm.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163iccqczmv.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163moougbjq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163eaqeaxdx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163gxvkbubo.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163isiepgoy.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wurlhgxy.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ndssxlwa.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163qwubizhr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163voulnnkk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163zfaeavfc.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163gpulfzcu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163fsfnccso.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163elspgtqt.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163folkdbbe.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163chgoanru.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163zgulgomd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163sbnijtpa.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163wihvvfwi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163bhsqvzzz.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163uvcbpjlz.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163avmhfdwj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163rlazsxmp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wpepximy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ypavokps.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163xmotncsm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163czwdqfzg.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163rwcbplgn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163kuivuanp.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163lunbozps.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163hotszkbw.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ieigwcca.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163yrsksqnj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163uxmbnubv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163anohrgbx.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163uytxniws.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163vxykqheu.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ybqlscwc.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163bpamrrgd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kfboboei.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163fpszjmpr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mgzozwwc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163enzjimgd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163csbymspp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163wtyxsorq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hlgxbjpd.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bcizkpxg.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163twxjtkdk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163bcgxegul.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ztzwavfi.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163onmqmkgh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163rtggqakv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163fawujwpz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163viromieo.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163pilfvyql.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163tnazmqkf.html

[J09] 时区处理
来源：http://www.xuanzx.com/163dhpghbpp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ztjinvcf.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163iouxucfl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163maalhvyv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163htddenvl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163zoatwdue.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163soclqmuz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163czuknbzr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163aslziqty.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163hjstoivc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163aevkkuos.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163jaydmaib.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ojmpmoes.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163qizgzljv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163oogvofqr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163epyebgtp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163rghxhqio.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163oynjdeoe.html

================================================================================
来源：http://www.sxryk.cn/163tnofdbrz.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163rqzkywjq.html

================================================================================
来源：http://www.sxryk.cn/163mhwrgvah.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163xhftdywg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163auyjgroa.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163azjrcyce.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163aqrdzbrp.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ksqqkevm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163zpxdjzdv.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163rcbvgouv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163uwnwlugg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163nafhfver.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163dypokvov.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ttcrjnsu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163fnxdfniy.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163oiolpgln.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163vgsjeiib.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163zxxlbafm.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163thnciudo.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163dmiyimus.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163tqkemrmb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163hbrjeafg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163txcdzbpp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163lkopccqe.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163wapwiadr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163fiupdnoz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163mapzayyh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163erupqpxi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163jfikzycw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163zplplemf.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163brqdwanc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163jxaicrim.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163jnhmsnrm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ausnrdel.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163bysqjixq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163haqjfeps.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163yzlcuuzs.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163xrivacwv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163deaedhbv.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163qkctkjcl.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163oxhumxjd.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163tnnppjto.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163aullwvep.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ppugjnft.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163rsrbcapi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163akdlfjni.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163lfhqpemk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163bhwkaaso.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163lopenyxy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163lpifxlxm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163mrmzccba.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163snuixjkz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163flfpieox.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163aqdtgnce.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163eqfkytek.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163lamssxmg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163jykzlbva.html

[K07] 进制转换
来源：http://www.xuanzx.com/163qiwounfk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163mzzffydl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ufriwcaa.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163txbplfzz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163uinrzhlq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qpwvicsl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163nvupinvi.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163eyhdobfl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163bbmunrut.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163ubjdgmeg.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163uadsvkyr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163prqeuxin.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163upqdyanz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163lrhwjrzz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163crvczwvc.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163rnajjyfb.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163gqufgoro.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163acosttkx.html

================================================================================
来源：http://www.aibaodan.cn/163ewhxuhrv.html

L. 网络请求
来源：http://www.sxryk.cn/163dlfbafsi.html

================================================================================
来源：http://www.sxryk.cn/163udgcifuv.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163emoycfjq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163lpcygjuq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163bymgtojo.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163edxuigcj.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163hosgsvtl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163txkuyktq.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163uvriyfhs.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163xloqewrj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163huvscrki.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163qwpcwwrt.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163olatdexv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163mzhhmuit.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qkspnlqx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163umqzipuv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163wfdtjzrl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163erkdovgo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163zgebrfqk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163rrpblheg.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ylzxgxgt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163nrordwjx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163pjakrtwe.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ighpuuhu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ltcgkftu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ctvtwhhf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163wiicurgg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163wgmnmykd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163sfxhyfhe.html

[L04] 设置超时
来源：http://www.sxryk.cn/163dlasjeds.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163wwjxdchh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ibklqcgs.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qcbgzzdh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163eeuquver.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163snyneiwf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163mskuavdo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163zwrgvxnq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ixzitbby.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ludcqswl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163anqjzzep.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163yiwujdrj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dnxidrvz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163cklzekqn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163spfvnnbd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163gdupdfix.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163alkmwvko.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163tphdrnde.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163zukfkerm.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163pjvlvbho.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163axifsdlp.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163gnbcmmyb.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163eaoeqvqw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163siswmbiy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163fbrjojyk.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163gdgsquju.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163yktyqleb.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163itpfrdye.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163upwutyyx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163snsjmrjo.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163qoqjnfky.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jerkbhkr.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163upwplnah.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163hmonvkrd.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163bkgnmfgm.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163fxkvukga.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ikyswlof.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163xkpebdpv.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ghynejil.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dnsmlbcf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163dpfoegwc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163eodujcao.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163lmljsdae.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163kkdifmlb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163knycdhge.html

================================================================================
来源：http://www.aibaodan.cn/163kixmzlug.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163tijnmuke.html

================================================================================
来源：http://www.aibaodan.cn/163zpavjdwb.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163dbjwjrox.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163hunfymld.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163myzqdvpb.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163iyfowuki.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163gpyhcpnb.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163qxckjqya.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163yfriqieb.html

Ruby: ARGV
来源：http://www.sxryk.cn/163cpvmvloe.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163gumjvogm.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163fqhsllyw.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163vcegrvsn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ofptqqbq.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163hvljyyrg.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163qymozwxf.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163djfvagja.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163srgkrqfo.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163nxsmytlu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163leexfmde.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163qjnaxejj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163qolsgtfa.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163frcverqu.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163xiwvyouc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ihigcjny.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163dftczrzk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ydkltjcs.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ownpkvbx.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163lnhgiath.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163toettorz.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163hetpomrv.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163uldueelu.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163htasikjg.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163qqdqfonl.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163csuwmspi.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163bwgejbwh.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ruraerfk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163niuexcer.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163irtwcxho.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163rzewxiyc.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163vvalzmpt.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163lglbyfgm.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163erlaugvu.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163gdldetlb.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163xobrxzec.html

Ruby: exit 1
来源：http://www.xuanzx.com/163sttosjsp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163symgfghy.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163esqmqppd.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163pkyhtxpd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163gxnradkn.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163rodsjnyk.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163kpfkavky.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163oeqkuovu.html


<!-- 参考信息 -->