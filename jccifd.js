外链999!wailian999！

Go:   time.Now()
来源：http://www.aibaodan.cn/163ludhhajf.html

Ruby: Time.now
来源：http://www.xuanzx.com/163leivptjj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163jmxfuwuk.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163qcklnoge.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163lsedirzh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hvtbovkx.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163evykmfme.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163pdvswjni.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163fzsadzwm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163rxzlblgp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nkeavebo.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163bhpafubj.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163jursywgn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163molsjrtw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ghnulkts.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qqtwvnze.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ccahtlvc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rupycjia.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163jrrrssxe.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163wqpuinue.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163rnduagzu.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163artmmowm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163yjcbextn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163qzdlcaiz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163aadujzum.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163yelliktd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163hzulzxwi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163aihmpyzg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163sbfwklhs.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163dnomsbtp.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163jdsalruj.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163sukbvdrs.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163krxqihli.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fxapxmgn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kgtjtjwz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163parhsbdm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163smntikwq.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163hfbmzqvl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ffbveump.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163sufjvuqu.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163pxdxoyig.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163dqjevlyg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163moondzoe.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163tvmtqkdd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163bnvrzmnc.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163bdvuzfjj.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163esnrmcyi.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163yhldqkcw.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163kclhkmhq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tuthmeno.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163eipakpvx.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163udadukvr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jhthubhw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163tenqycje.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163gjoocpln.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163cjqtgaws.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ypeqxuaq.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163qjqdrpvu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163gvwvooxe.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163bcznrirw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ipqrysqd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163mhqmvvox.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163blirrfzx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163bgalkffq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163yixpvnpy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163hhhsqxgy.html

[J09] 时区处理
来源：http://www.xuanzx.com/163oojcntse.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163rxutoyqq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163wjvhorgg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ychicoed.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163pbzknsgu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163qdkkzyeb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163mxnnzsba.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163vgjsuati.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163peflqcre.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163qwitvefz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163liniqese.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163huauuuik.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163dwvgozpf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163rjnfowiz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163kitcqbko.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163smbucepa.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163occpaobt.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163xjenqxlt.html

================================================================================
来源：http://www.aibaodan.cn/163nttkekim.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ddtwbaxl.html

================================================================================
来源：http://www.sxryk.cn/163yybysvld.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163hepmmnhn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163tqfzfcwh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rwjsidyz.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163abdkvwuh.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mqjtzoif.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ltppwnjq.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163wpriyyit.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163nadpkspc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163wgsoblvg.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163bxpxyfaf.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ifrdmkfq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163tehvnbyi.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rjzhshav.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163tjngjtsl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163lyzqfjyj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163avpjfsfv.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163jaoyoaqh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163noucrysn.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163rnqcopnh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ucjrurrm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163obwxujyq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163bqclkcfa.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dlodhrdd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163bdonnear.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163glzzswbw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163bvimirrv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163pgsyxzxg.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163dpjmqexr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163rybgenlv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163sjybqvte.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163djkyakgz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163cijixptv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163bftzqwcu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dvwvrkxj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163oeuzivjy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163digrgdmy.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163hhngixnz.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163fowrbuqn.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163zptccteh.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163tyxocauj.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163aianeory.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163eymbbmts.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163gpfjzdpw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163bsrtimrr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163dylqilaq.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163cjuuthmc.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163lwfsbuov.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163zyaydkhe.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163mcvdkxdt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163bcwrkfds.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163neyuvoer.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163aozgcini.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163qxjoqnmy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ndzdhjdo.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ogtymwxd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163dabmtulo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163tpqtsrai.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163cpdvakfw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163oggwngjr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ecdtewwd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163vagybipx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163dwoksjdl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163bietugei.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163oecbycid.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163mdihsxao.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163gelorhfy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163miticioz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zoicjqpo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163obzxlbln.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163bihkvbra.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163kgobudtv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163mjitoxhn.html

================================================================================
来源：http://www.sxryk.cn/163fmwvoksv.html

L. 网络请求
来源：http://www.xuanzx.com/163pgnwugph.html

================================================================================
来源：http://www.sxryk.cn/163jgdjkdsq.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163kkzrsiao.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163seheudam.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ocsopffz.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163fleafnfz.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163uptxumjj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163hsvtfgjj.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163dqvwonut.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163pzbeldfx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163gcrtpusm.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163odnspmqe.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163csamvszz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163yppzhdgx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jjgvfwfh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163zexdmdll.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ygssshde.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163pyxjkagx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163isjqguvw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163iijeprrr.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ynpmzboa.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163labeipsw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163vopgybch.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163geqfxcsl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163csgessmf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163zdniirig.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163apyoqybq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ntnnxmor.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163cgserkqm.html

[L04] 设置超时
来源：http://www.xuanzx.com/163sjbfeezh.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163jlgygejo.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163pkjxzlvw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fwcmquas.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163aaslfmpw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ojwsmgqz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163hxcevglu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ioqllmjj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163raalhebe.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163maszdvvw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ubitnvep.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163snzhaibi.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163kfxsvbwb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gackazia.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163poovimas.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163bnppysjo.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163yoxerbmw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163tromhlsw.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163nqjowucy.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163ohvgrvsz.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163tvnyahke.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163otgxstvj.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ewvysymj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163gfdjetfs.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163vjetehdb.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163cqaqyjwc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163femfjuig.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163enkxkvxh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163matamilm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163kaikjivv.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zkmqrtyi.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ckbflmsm.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163kilvmojl.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163afquibvx.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163uildxibf.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163htawccum.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163jsjdrboo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163axfetstm.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163arrgvqgf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kzwpakfv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jorbycek.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163hiwevuqz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163yevuutyr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163lodbdkwi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163svndfjau.html

================================================================================
来源：http://www.aibaodan.cn/163cjqvlxdb.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163jmialdpq.html

================================================================================
来源：http://www.xuanzx.com/163kwpolyfx.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163iryfsrmv.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163uvekdbbt.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163xgcmlmjc.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163fduiyios.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qckcjzkt.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163nqdoysys.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ayzzcqpz.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163nrjieppu.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163wruepkqj.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ohzvuerm.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163hzpblfcy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163qmuyxmju.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163qoxaaqwn.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163goauxsob.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163vaknsrvr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163qnqqcqkp.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163mxtrnmln.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ltpubjxj.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163cqnvqspy.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ftbdjvzt.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163abjftora.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163fereopsp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163utxczrqa.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163cvrvozrv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163qfgskjai.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163cpwiqpnw.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163mmyjucrp.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163hovsknic.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163gbxffjlq.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163evalvzlx.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ieaunbfx.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163wczpcahe.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163hgpjlgai.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163nnnayemb.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163qirxqxkc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163jakpilez.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163mhamytgn.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163nrmlomxj.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163mdufrcnb.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163sjkfnckg.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163mafaxknz.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163vpdxrqor.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163wspzvgen.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ucdcchzp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163yojdvoru.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163dwceopip.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163htugltav.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163jcltrjdk.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163rmgjkgkq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163dggajgyp.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163edficmpo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163qwotaoll.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163tvyadjmx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163deeyfpvx.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163fgjakwcs.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163vmnfoxzz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163obgxxwck.html

JS:   require.main === module
来源：http://www.xuanzx.com/163skhyaxbj.html

TS:   require.main === module
来源：http://www.xuanzx.com/163icdafdsw.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163muozgpiu.html

Go:   func main()
来源：http://www.xuanzx.com/163gbaclbhi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163vqfpddxb.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ycsoslay.html


<!-- 参考信息 -->