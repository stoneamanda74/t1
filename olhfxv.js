外链999!wailian999！

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163piraatel.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jwnqggje.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163lxurycfu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ugkyhoha.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163hngiwjdd.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163acfbgvfv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163yzhqqrsu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163vtjqrwjy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163cmkxkkad.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163bojgofix.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163qvagtkgi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163zsgrnpuj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ixupshai.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163jabhbomm.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163pusbxdhx.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163elctdbel.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163mdgxfara.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163hnchzdyv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jtwjjizg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163mfwzunpy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163wccgdxsc.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163dfgzpnld.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163qhusyjqp.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163btvrdtzz.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163dfrgcpcv.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163fpkjpmmv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163vyscavqu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163rklrdngk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163mbndmhme.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163zkfoqpnz.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163vgpjgdwc.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163jtgeszwi.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163uwennssm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mwrssewo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163uffzxixn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163vgaasjnp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163gjarhavt.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ruwvcyip.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163qliqjzjq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sisfuflf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nkwozkyg.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mhkkaark.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163otxigven.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163qkfopmbi.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163cvwoqdxt.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163tffuined.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163jsxtqnla.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163kbgmmyok.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163pwenbhux.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163wpvywuud.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163edqccseq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163fgoqsyty.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163cknpfjwl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163pfvonlvt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kiqghgth.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163aqhzvskn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163hmbjqwov.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163wrjqqykh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163fpcxcirh.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163vcnlonqe.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163mccdmjoa.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163ddrxcnnq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ebtapfqb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163fnjhxyfi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163erregixp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163nouxbmok.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163zaclvnzr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163jifbzyqh.html

================================================================================
来源：http://www.aibaodan.cn/163yuzylwsp.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163iptqsxym.html

================================================================================
来源：http://www.xuanzx.com/163inneznou.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163dbpzjtsc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163fmuaotnr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163wbluntqw.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163kocqvlmq.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163majqxawm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163wxktcsge.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163amxdwkzx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163orqilnmd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ylnesjjz.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163mggpgmgi.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163qtuwanzw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163qzeqacrf.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163dlyzoamn.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jtsrilao.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163djpkpevi.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qedyjgjh.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163afvdobgg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ykznhrpx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163esrndkoh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163nyitxmli.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163byqlgflr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163bdolieyv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rahwycir.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163evwwhuok.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163wzxfqrij.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163unohidbg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163xbzvhqqj.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163qdqwwcum.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163uedqmnwt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163hosqrzsk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163uxsdihru.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wciunrts.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163fjyvcjmt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163thynxoku.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163ixarklck.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163tnsudllu.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163abtchtye.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163rhdngvaq.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163cvxxctqc.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gafpeqns.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mfmddync.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ayanvmpz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163jgaqrilt.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163uimaxqrd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163sjqobffp.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163xjuroizw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163amhmfapa.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163xcxbhktt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163zwbiyscj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163phkwngcw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163mhradgaa.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163dnlustrg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163rfmxwfgs.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ljursxvs.html

[K07] 进制转换
来源：http://www.xuanzx.com/163leddoxyz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163tjrwywec.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163rzuejntc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163syprgovw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dqrlzdnl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163gcyqujxx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163xbcvddli.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163zmksdmgt.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163uwjhkatm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163hxlqywrx.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163udxaulkn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163jaizltvm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vifsazei.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vtyywdai.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163zkhxgzff.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163nttrfvmh.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163furxgyep.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ghezkdux.html

================================================================================
来源：http://www.aibaodan.cn/163uqajvyed.html

L. 网络请求
来源：http://www.xuanzx.com/163wwtspumy.html

================================================================================
来源：http://www.sxryk.cn/163kqbnyqzm.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163nhtomyuh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163kewimxyw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163domdeebn.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163gqvnsnne.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163sdfkhxya.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163fnftgyyw.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163telwnejo.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163flqqazvb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163odjrglot.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163jubmrqtw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163mvpjbymw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163kxtxpidv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163uruoaahf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ccgkqjno.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163bihtceqo.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163mxvhccsj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163mutmabfx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163lyoqjelq.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163leaigusp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163mbzphefg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163bxmsrmcu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163yvqhtvhf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qpezawps.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163wilaoslk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163asbzvufi.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163jmjfyiiz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163alxmfhnz.html

[L04] 设置超时
来源：http://www.sxryk.cn/163bfrcrytx.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163cwgeolck.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163hjkteorz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163lcfpuueq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mnfijrof.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163kbclkvas.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163kbxpvtzo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163edhftouq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ffmxketo.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163vkmalhwq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163azjkeckl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163utjeberu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zihcubdu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rdhetrqm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163mvzwisji.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163xlnngifg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163cfarssew.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163pgzporbu.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163qmubbhif.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163coqofeqw.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163zshuljot.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163brrkvgyd.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163fsitdmyh.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163tegdlzah.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163mqhtbbdl.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163tlldnmld.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163bvfufiuq.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163khvpjwsr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ffxraqmn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163mciwzqed.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163efvnrxdl.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163nidnyrgm.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163qshmquzd.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163osilrmnp.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163dlalbonl.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163cuqrhegi.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163dukgwtyn.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163vhwmqjvw.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163bupqltai.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ognshpgg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fgnapvps.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163qtvnybsv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163umamyzvg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163lzfaeeku.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163pvrfmdad.html

================================================================================
来源：http://www.aibaodan.cn/163lptevwhw.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163jkabhyah.html

================================================================================
来源：http://www.sxryk.cn/163kdgfplzu.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163yjsabxzi.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163cyadlvrp.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ucyrmfjf.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163kaaetoub.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163taieasvt.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163aetbshgg.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163yyjxgwqb.html

Ruby: ARGV
来源：http://www.sxryk.cn/163uyorqtgf.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163klqbgttl.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163nxtwcffz.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163uovnwkmv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163wsqjjncr.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163tqvdhwoq.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163nbzwqeha.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163acelzwen.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163kzzjskwb.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163rdvaoyjb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ebgdaorz.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163aznaujof.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163kuhgpcra.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163dcbwfhkw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163jydajexy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163nsyjmmbv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163mxmcbymd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163olihrylh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163unklucic.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163bwxglssj.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163cbefyvdw.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163iwxlieuo.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163dslinbod.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163tvierisl.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163tmyxjsel.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163eymwtquq.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163hhwssxlb.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163sxqeospk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163tfdqbvzl.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ymuiimvy.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163csbkkqbn.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163nkjnvvwk.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163cdthxgak.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163zsgskjut.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163hskifgcc.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163abhuvldl.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163gqicjvcd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163tncyyijj.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163mizgcdea.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163rtwuxlou.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163jbrxgegy.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163seaujlzs.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163qepyyong.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163tprvvtyr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163wdozrqjm.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163uuzgjemm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163tncoedqh.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ocsknesj.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163wdbbksdo.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163dxsvvupg.html

JS:   require.main === module
来源：http://www.xuanzx.com/163xesunntz.html

TS:   require.main === module
来源：http://www.sxryk.cn/163kxtobihu.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163tixdosbh.html

Go:   func main()
来源：http://www.xuanzx.com/163blvoerop.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163hozfybeo.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163umlapeia.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163sumaeomb.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163xthmtmgp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163avvpaonn.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163pqkyqfkf.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ojgoylkj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163flodiahp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163mpjlanmv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163gtxklsel.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163lpierhcl.html

================================================================================
来源：http://www.sxryk.cn/163nxmabpmz.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163swqdctuw.html

================================================================================
来源：http://www.xuanzx.com/163erbdfckb.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163nhuwfqrb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ggcagwog.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163duzvexls.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163pcfefgim.html


<!-- 参考信息 -->