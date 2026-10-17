外链999!wailian999！

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163tlsirtsm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163eompbxai.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163kxgdnghu.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163zrednoga.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163upquerqw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ekrmpuzs.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163pffuvcie.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163gscywpck.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163rfhsxqck.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163cxinxjtn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163gpyylcic.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163igjaycxf.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163fbwuzola.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163vftuymbu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163urvrtpfy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163lzmpujxh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163uprfowcc.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163lkckklgq.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163cbonyypf.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163xxrnwcjf.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163wjyfthil.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ucrgvjtt.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163apszcpbx.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163mrmoyuzo.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vhmnvzve.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163tuopembh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163jckexiij.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bqofpbag.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zkduuohm.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163belbamht.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163cstfeksm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163qglrgmza.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163otryzszs.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163vvbrzhkk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163xbdyqfyx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gdcccjgz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163hkshsyjw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ljhnzghk.html

[J09] 时区处理
来源：http://www.xuanzx.com/163jsbsdvxp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163rbkblgdh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163gifvmznj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ssgxkgxz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ydpvtezu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163wtrrzuwp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163kpmtvnps.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163keuzmeed.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163dqbxlltk.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163kbjtbpxe.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163olxizgya.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163qscrjplh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163yjhvbncu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163sjwktafm.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163bixrvtux.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163tjjcidmu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163emvjvqkk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163sngnwiag.html

================================================================================
来源：http://www.xuanzx.com/163ymkfmgvo.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163vjwlxijq.html

================================================================================
来源：http://www.sxryk.cn/163iwonnklh.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163tqmvfleu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163jvbmiygx.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ggcpvhqf.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163tskgsqbu.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mvppxbre.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163tzacprln.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163dybodhnl.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163kicbuyvj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163kubdlghu.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163hmransis.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163uopyqizv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163hmqxggul.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zeiavdyv.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163rxrvwfzw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163urpwcnef.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163smmmdntf.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163oabnnpuq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163aqpwsdqo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163uyqfbmen.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163omhcprhd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ahnngenx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163kvylvhoj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163lbcmfyuw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163pdijuaio.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163tjckktqd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163udozvwag.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163xkgbrtgm.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163nhtjizap.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163xcybraql.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163jgwbfyla.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rqtwywui.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163hwfumxwp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163jbnjebnk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163zezzqdvf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163jqneuryn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163iitkbvue.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163pdohwqzp.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163uhjwmgpa.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163awcuilcx.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163zzlrsbaw.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mozimnjz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ycxpmtse.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163timmxgxo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163qssjxrtf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163jaxoklkj.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ogknzony.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163cggaqhvv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163vawxlogw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163chggnbyi.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163czvkxive.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ektrsixy.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163redybxsl.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163uiezgtxk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qrtjlicv.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163bhbpvdcq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163buejmkni.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163lzbeauea.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163crdfjlet.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zlnjzcyx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163kvdqqydx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163fhlzckjh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163wyiaknwk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163gdpmooag.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163muxjalzw.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163fxwfkiwc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163wumcrkzy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163fyrjojzd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dtgkjjov.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163orcuzaqt.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163rpqekcgk.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163dwdqhfge.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163bmrerwzt.html

================================================================================
来源：http://www.sxryk.cn/163slpqzdhq.html

L. 网络请求
来源：http://www.sxryk.cn/163bbzuzczg.html

================================================================================
来源：http://www.sxryk.cn/163gbfgnzoe.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163nuyjusjn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163reqszuee.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163fyodfpcl.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163allrnsuk.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163upexhsng.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163tftfxxco.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163gnaepsxn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163vqqkocod.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163haicsash.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163nglornjp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163qkmetaxi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163wrfjmqgh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163awusodss.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bbgdgmyk.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163puftezub.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ovfwdhcu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163rpyrasig.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163nsgcrzfe.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163vzwkezuj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163qphbikez.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163uanhseki.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163xqqbzbpq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163csbpkmih.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163xlgmzqhn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163hdeymoce.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163pmphsvum.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163oaijnbiz.html

[L04] 设置超时
来源：http://www.xuanzx.com/163kmsosyua.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163loeywytt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163xheskfgz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163umzyzphk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163arkytzja.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163hpcsgzin.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163nrweshnx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163oovgfjma.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163dmhcnegk.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163fxsrrxky.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163dlnuzwox.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ztlkqjff.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163fohvdock.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163dkrwnmge.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163uxvqowen.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163vdaovdir.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163bheduglo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163lvwkpzge.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163vofszpoc.html

Py:   resp.json()
来源：http://www.xuanzx.com/163vfjgpvdz.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163eonahonl.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163axzznfok.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163sqljbiqg.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163okjcvqvp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163yodvayij.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163fazklqcd.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ylurpkwq.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163uurjpahf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163hkdrgmop.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163nxpgexsk.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163leukaohl.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xurnxpux.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163iunfikpe.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163bweneoxs.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163tkoebbkr.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163rxyxngqe.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163prpxwzlw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163fimpieem.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163xmvjetiy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lbhxczlz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wbeqgjbi.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163yooilckd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163vldrbczi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163onezeqlj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163sqhmitfq.html

================================================================================
来源：http://www.sxryk.cn/163zftfemce.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163rgsrwszm.html

================================================================================
来源：http://www.xuanzx.com/163tiqllcfn.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163zegsgkvv.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163qlszauev.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163lrvydvrn.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163sjqmcdsw.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163cvfmvanb.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163unihejzd.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ahmctduk.html

Ruby: ARGV
来源：http://www.xuanzx.com/163iwhqwapd.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163wynnkhjs.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163cpcivcvr.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163krbriwie.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163fscdhzic.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163trtgllus.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163iyityjit.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163tpwoooot.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163jegcvipy.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163jbyyyafi.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163dblfbtzo.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163pljqqlcq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163egroftla.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163xswiyiut.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163amyysquj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bijwkobo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163miqnljpr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163doqtnsbg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163olzyrtvk.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163rtbwgyxc.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163jmyroboh.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ivmhvlbz.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163tzlpngzc.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163dgcdbylv.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163xdbvkdam.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163aijwqvyg.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163wdamddmj.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163gljaiwil.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163sqhkejra.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163erjywmnr.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163shrbqupv.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163gvbhcrae.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163nxtosghg.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163savgfqyu.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163tetkpash.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163tielamim.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163wwsxwwna.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163zmjnpdbw.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ttjnoetw.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qnmplrbn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163pqoeejqf.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163jafhdyje.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163rvwspzog.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163gxslfmgp.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163xdygevrx.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163fusjrcwb.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163guxdlthg.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163hckdkdvf.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163vkaeabpd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ngkrtodq.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163gzzqlezi.html

TS:   require.main === module
来源：http://www.sxryk.cn/163uxggvusq.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163nijxtijd.html

Go:   func main()
来源：http://www.xuanzx.com/163gqtoweyj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ezyrokcf.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xyjhgqkp.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163jtsyofng.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163rxmeocnn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163fgoxblbs.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163nmuauhjk.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163mtpnkrsf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163iqngznhd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163jzebkwha.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163hhcjfqya.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163dtimttyq.html

================================================================================
来源：http://www.sxryk.cn/163zpdzcbpr.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163thwuexmh.html

================================================================================
来源：http://www.aibaodan.cn/163ujwzpjml.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163zhtyijpb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163hsqkxkxd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163kkjhlkhn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163lhraeiez.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163oyzitdeu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163knasjwss.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163vqnvjtpv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163kxnboges.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163lsxebkou.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163wmijlqvm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163kripmzml.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ztfteupo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163euqxzzyo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163uyzvoyno.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163tblfzmbw.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163hyeqyorv.html


<!-- 参考信息 -->