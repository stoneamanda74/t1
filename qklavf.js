外链999!wailian999！

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163zkzshpfc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163azjkrcse.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ltilnaki.html

================================================================================
来源：http://www.xuanzx.com/163diqlvcph.html

J. 日期与时间
来源：http://www.aibaodan.cn/163xnuypwft.html

================================================================================
来源：http://www.sxryk.cn/163nfeotpgg.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163dygyoeyz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163oxhhplsh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163expsvwdt.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163blhgtscy.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163lgaxrtco.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163kpgnlrox.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ivjfjbxc.html

Ruby: Time.now
来源：http://www.xuanzx.com/163kgvreqfh.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163dzlgqaqo.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163qmmgefow.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163glpflnfm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163bunlgnmb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163wuetyguf.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163soudxyic.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163hrbjblod.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163zvmjaxdm.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ftefzmhf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163vdbylgcp.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163vszmfpdt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163bixhmqkm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163nhqajyjp.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163rhajpcyb.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163iszhstdz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163tenifrjf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163fxdozspn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163qvieadgd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163wcspzhys.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163wmqxrpta.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163yywmsgli.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163czhooflz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163wsaejghh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163mfdbpxqf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163egznrmrw.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163fsvsroco.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163wleojhhy.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163qwakyqgb.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163menblvtk.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163nowwbzix.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163rqeutzkf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163dchvplvy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bkhybqvo.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163japxsccp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163gyqqeqto.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163oxajrklc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163fzztwnyq.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163fgszxiig.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163xkvcuxiq.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163tqiyipvj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163tqpokcoh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163tthpbjgc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163seyypwfn.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163uuaahywo.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163wswisrdu.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163uydhqmpf.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163glxvdsyw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fniubfir.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163svcolvdh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163kwjjlxez.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163emeojmqa.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163simjjduf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163lpocsift.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163cnbeyuol.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mknaebky.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163gqroldii.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163qykcbbnh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163vtrwewby.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163nzbivezy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163sjhvmjah.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163qyqcfxab.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163oichnjkf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163bjbnedbk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163dinkenyo.html

[J09] 时区处理
来源：http://www.xuanzx.com/163fvqxxfch.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163acggmbil.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163iyamtkfb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zewatcif.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hyirimca.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ynltlndx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163wcrdvodg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ddkzcskg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163luprzrzg.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163hjbukqvb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ygqpvxuh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163fhwltrct.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163mkbxsssj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163mbpgtjsq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163zzkoqoyc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163vldyibjc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163dhnsmbws.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163qsrfelox.html

================================================================================
来源：http://www.sxryk.cn/163anyvczrx.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163deirfxuq.html

================================================================================
来源：http://www.xuanzx.com/163mxuwynke.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ahybgnht.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163obqjpxpa.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163lzpfokud.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163kumqblbc.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163wgnfsynt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163howrmkub.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163pvuokofa.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163bevhyzgm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163plcplofv.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163eixpyhaa.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163rcpewfzx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163jkqttqnj.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ogxwossr.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163blmdjfos.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163rnogbnqx.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163adbckqpe.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163somiplaf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163kgfvitbp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163lbdbaaaq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163eorkgxmp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163pihboyuw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163cvbkjucr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163gvgzfnzp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163pvxpjaqa.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163rftlvlwe.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163xcweiuem.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163yrdfesry.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163wuppkbur.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163fgjhvsvm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163xdfwakti.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fovgcmoq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jlubcdpx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ywiwnalf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163dbitxlal.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163mbrumayx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163rnntxpuj.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163jthcuuju.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163cxxamqpv.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163yxvaanod.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163weplayws.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163mofqigxz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ubgtgwrg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163mqdwjjon.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163makvmnkf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163lewzpgxd.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163wmtwcbvw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163qmstchwc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163hkkclghe.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163lwpnheuk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163lcttsyem.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163eliusjyr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163rwvybyry.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163yzlwwdmi.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163nohupgum.html

[K07] 进制转换
来源：http://www.sxryk.cn/163lpofjjoy.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163bpkvyvbx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163upjsbhlj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ubmjwcjy.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163clwtmjvf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163wwoepouj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163pdhyoxiy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163urojsahh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163hlmticou.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163gyduqsri.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163tngmidnl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163nzregjyg.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163yigaqgih.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hdmeueej.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163vyjxmamr.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163xdhoothk.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163bttjbgim.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ylqikfni.html

================================================================================
来源：http://www.xuanzx.com/163kugwuqrt.html

L. 网络请求
来源：http://www.aibaodan.cn/163qoktrfge.html

================================================================================
来源：http://www.aibaodan.cn/163teigazdm.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163cmvnqmop.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163iiclywcc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163pppxxkpp.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ytjnknyi.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163pfhpkxiw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163uoheoyof.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163grgpmxpx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163miqqdhly.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163xemtaumk.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163hsuzyiip.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ghckntqx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163wczhfstz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bfvfpnvu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163rmsgcqym.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163hoowxgau.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163otpvthzu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163tkalqzhw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ifnvyuow.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163fiygkhus.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163wmveaodm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163dbdqomgs.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163rqhqmjfs.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163igwtapwa.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ipdohcvt.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163dbbazwys.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163letdafyg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163fontdstq.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ksepunye.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163wbgygvie.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ifjqystv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wfbntwns.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wbvwhqkp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163kqfwiqns.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163vqbuigmm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ztxwamys.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163evdxcopi.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163zixchdon.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163sidpmcxp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163bizytrek.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163itsncija.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ckuvekex.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163puhopzmz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163qsnbskiu.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163zesakmhq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163fatxklvn.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163puzphtqp.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163xupjmtjb.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163bnrnxxea.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163nvyqljmr.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163oxxgqhdb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163wermvprv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163kioajbqo.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163mlpmbkvk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163qgvpyupm.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163cwqaktne.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163zzkqhzvb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163xrygzvso.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163wbhtlncn.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163nvvcrqah.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163jpkfujtv.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163vthbiyls.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ablzqraf.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163zduruzvv.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163cmpdxklf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ojymvvir.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163sqmqempy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163gmismfns.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bkczxdix.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163gyvqpojl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163xgztljnz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163nbbpunhx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163rybsbbqk.html

================================================================================
来源：http://www.sxryk.cn/163skwyrosd.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163rggrtvpk.html

================================================================================
来源：http://www.xuanzx.com/163mgbmmwof.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163bxthugzd.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163vxkoxvjx.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163zqklswhe.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xejrvzwg.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163voijkbmf.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163lbxztpqj.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163dbxbtevx.html

Ruby: ARGV
来源：http://www.xuanzx.com/163rdphicxi.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163kvdjqoff.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163eymgbsbb.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163vszjddvo.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163lnmrocok.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163fiqmdalw.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163brosiuos.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163yfkwxppg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163igzxpozj.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163zqrznngf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163zjpfnjwu.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163jpxcsxvo.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163tbsmcvlm.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163flkzymmp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xchyajuy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163oijftncf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163dwgadcvz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163hqjysyqq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163aoxgpxyx.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163jaxwxzuh.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163bxubuowo.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163svxoqcry.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163gyjnmltu.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163osfkweda.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163lgqgdmxd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163rranoqsc.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163jrwtztfy.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163kjzsuoci.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163rggdsipf.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163kngzrath.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163wajhcgoq.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163buulosgt.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163aoofbmap.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163vwzoyudq.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ltifpjor.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163jhfowogl.html

Ruby: exit 1
来源：http://www.sxryk.cn/163gtykxrxa.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163fuuaamcn.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163vafnzdhw.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163psurzciu.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163sjtomlqu.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163gzozzpaj.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163elsslgar.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163lbmofxpc.html


<!-- 参考信息 -->