外链999!wailian999！

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ziwubmlg.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163cvoswqbz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163inueomqt.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163lzkqvuip.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163aszjubhz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ekvzdnjh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163rzbjkfzs.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163opaawrky.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163qvosnnsu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163oisvbmfl.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163demhbizu.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163rmacnxeq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ertppeyz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163pakgjjvt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ohsvupqn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163tbpblrbj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163hchnnvay.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163dzqwlikc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163xrwnwzim.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163nbeugiqb.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163sisxkdrz.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163qyscxfwm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163bvopbuzk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163jqzymilg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163xazizxwm.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163pjexxeuu.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163pexpjfdq.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163hwnvtper.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163gwlzprdh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qfwlwaih.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163umsgokdy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163osiowbtb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163srpghjha.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163xxwtylet.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163biuwogwu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qlxdnjsa.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163atemczfa.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163zzadvmso.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163bhxyimsn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163jniajcdw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ggpbdxgn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163vkstsdci.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163tusmijhv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163vhqhrcuy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163fsvkpfvj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163dgmqsgwq.html

[J09] 时区处理
来源：http://www.sxryk.cn/163jalvlkyg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ievfzzcq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163wqhavnru.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163htqdhopb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163iaausccc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163rftazvof.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163sjjxpgtq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163hcjkbaty.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163lleszndd.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163jndikgvb.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163gngvxqdd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163otomabjj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ynkcyfbz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163qmdhprxt.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163punelsyr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163uetuoyjv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163npwydtjg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163dgzyspow.html

================================================================================
来源：http://www.xuanzx.com/163dldjzlxy.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163epayiksz.html

================================================================================
来源：http://www.sxryk.cn/163uqdnifhm.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ywwokknj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163vodvxaef.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163qygthkru.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mzqxibgv.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ybbhqcod.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163vbrdnadm.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163zignidyy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163uptgwohv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163xsorqelc.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163lpxzqzvt.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163subjnmxg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163powhsvdi.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ttdwqqxo.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163milwlcin.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163rtssbcru.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163gimhabet.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163tbdpwbqp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163vyvptikm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163dnrvcomc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163shechahs.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rxfzznbb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163tqddaerh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163shbdzjrp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163qlmltdap.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ngbpqslc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163imqvutcp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163xgbfsetk.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163sezxolxi.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163rbmtxrgb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163pzfghbev.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163mikpbxpa.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163mddpyqkd.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163sryiekow.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163dkzibpac.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163glrxvfhh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163aoyjbkia.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163uwvlgaxw.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163wfrpgsly.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163hfhmdcms.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163quywzcer.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163kqmwgtdf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163nqnytqeb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163hapcgagl.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163mmmxeqle.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163fujivkmp.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ayewkodj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163dbqgjgix.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163wmdvkppt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ulqiejiz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163yapzcyxb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ggrbsnkq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163kqnenils.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163zquiwquh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163njrsddrh.html

[K07] 进制转换
来源：http://www.sxryk.cn/163lprwlxvn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163bemmsvxn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163xfwgevhp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xkkiapaz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163czdmapbs.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ymqhbdub.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163csigpawm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163iyldjiyp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163hruhcdtt.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163itaeloub.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163jzsphnjl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163shekxtin.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qsfyctoz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jdceqbcb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163bpxdhyvh.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ieowihwi.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163kumbfkny.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163bpgskfmu.html

================================================================================
来源：http://www.xuanzx.com/163lxgierel.html

L. 网络请求
来源：http://www.xuanzx.com/163mooipccq.html

================================================================================
来源：http://www.aibaodan.cn/163yeizroum.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163pdfaytpl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163kbqphsci.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163hctneblt.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163nckxoire.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163mdnkhgbx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163jtcklsyq.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163qijqaxlr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163fdbsnigh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163objlxnuc.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163sxsrjwrc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163qkzalian.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vhvednlh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163wmnpvqbg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163sverobmq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163huuafgpj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163kcixvyks.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163iowwjgvi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163covktsag.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163nflylvme.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163wepqmldc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163wkqfsyxe.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163hwrnykzf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163biuzfzoq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163gkjoppxv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163hoavdslz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163lwururwt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163effyazmp.html

[L04] 设置超时
来源：http://www.xuanzx.com/163qbjfnuqt.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ahtqlysv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163huhwkfuu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vpwyfntv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163zxrytvab.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163lmpnmcbx.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163bpgdirrs.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163bbkutehz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163kjpynfrp.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163doviwnuv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163kyvslamb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163dudmgxzb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163nahccyme.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163uookfnlc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163nlxhsjkz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163lpmebbyb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163xmaikndz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163svpxjfrr.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163myqyhdjc.html

Py:   resp.json()
来源：http://www.sxryk.cn/163vyupbsau.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163lbbufpbf.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163zsifpeue.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163jiaqsszg.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163plpniifb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163buxoyemt.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163bnxllsyi.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163tzkpcivx.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163xytcmixg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163trmezuhb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163cevbmnbr.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163eiwyrrsd.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163dhyjlhnb.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163gejfjiih.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163lvrjvwzu.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163rolqmypj.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163fusiwetf.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163uxdodzue.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163aywgpuhl.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163uhqiivam.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163sdypnxsk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163wmpggccu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163eoezkyux.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163ylubcnyp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163yotvyszb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ihhkrdaw.html

================================================================================
来源：http://www.xuanzx.com/163afgefbok.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163lvhxadng.html

================================================================================
来源：http://www.xuanzx.com/163obwlpydl.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163yazfilwz.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163jgjchrzv.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163pakbzohc.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mpboxpbo.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163lyuvpzkr.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163kcmaibyv.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163pgifudkn.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ggbbtnqr.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163cssxqwly.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163fjlcjtex.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163sipclyot.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ufesyydf.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163nhkeosoz.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163amrkcysu.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163wbpzugdn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163nldodyhx.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163aiokpluc.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163sbglgyca.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163weyykryk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ijjzmgvn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ayacaleb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qgmtgjqx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163yqonidcp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163vkdlnwgg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163vwgrtgzh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163yoiwhstp.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163kwzcbdaj.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163nclqolow.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163kyythncc.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163hqwspgmr.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163uswbgqli.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163gjlekjyl.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163pnpebfpj.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163xfnwxtte.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163gxaihkll.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163goillvjo.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163olpoptti.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ibdozqfo.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163dgooannt.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163myaruoyd.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163chbzwgmp.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163vtczioqp.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163wwvdutoy.html

Ruby: exit 1
来源：http://www.xuanzx.com/163xmniders.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163gdkrretk.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163laizgibr.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163zolbirco.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163fkbudzdf.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163afxsfjkm.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ysknjvzk.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163oimdczey.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163uktnszvh.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163qborbpia.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ceamvpdq.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163wpoqwmdd.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163qljiscmz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ftlzvhhq.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163uxmfmcra.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163kcwmlmwf.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163lvkpzsrh.html

Go:   func main()
来源：http://www.xuanzx.com/163sxfevwng.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ybszpypj.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163dwcilcih.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163dzdsxaak.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163mwdxgeiq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163nqgfbvmk.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163zaxmekvs.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163hwwtblwq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163hpnndpbw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163wdoipgup.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ngankpif.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163jdcijini.html

================================================================================
来源：http://www.xuanzx.com/163tiscyknp.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163gpbyybfg.html

================================================================================
来源：http://www.xuanzx.com/163omqfsmig.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163qghqgrus.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163nlubijzl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163eeisopzd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163lstpxqjx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ndfsvjwe.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163opearrdi.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163avzwsxkp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163xbqcpuyq.html


<!-- 参考信息 -->