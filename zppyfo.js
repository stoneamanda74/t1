外链999!wailian999！

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163pcsovxfx.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163hddwmhkn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163jzprkyer.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ekuozijd.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163hbexdkkz.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163attntobl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163nojycwcu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163muwslmdv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163jloxbinq.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163wujxahuv.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163jmebwgnj.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163vdmvicdi.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163wiwybtcw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163grqhprpp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163eizlvcvt.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163adsynonm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163japmzodp.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163bqucbxxg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163zefkjykx.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zzxykkeb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ckxvrwwv.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163agxdnyhn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163iamcoana.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163aczmxwpn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ytyxtifr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163mfthacgj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163dpkqshfo.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163vnnabpwy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163gdwnvgyb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163joivtnqb.html

[J09] 时区处理
来源：http://www.sxryk.cn/163leqknsld.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163petcszhl.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ogtrpide.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zdrbpflz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163stvqbmbm.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163otaqvmbt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163fmtkffck.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163idmixuux.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163zoycfqkx.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163oogrzhbg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163auhynpbo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163iifqmamu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163yamzwqno.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163lyraxyhq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163bipppolg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163waeeuksm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163eyblfvlj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163quzxpczx.html

================================================================================
来源：http://www.sxryk.cn/163zpqdpxtj.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163juwcceob.html

================================================================================
来源：http://www.aibaodan.cn/163oltubmve.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163mehhjvox.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163tgiwulyu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163hjkrtmzn.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wbbaypzs.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163anogagdf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163husxjvqp.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163issymugd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163vsnbvbyz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163nogxlfir.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163xjxbopga.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163xwfxckvy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163tckufjtv.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163tbszsaqb.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163njvlrtgm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163hrbyinjk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163frhmnlgv.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163lsuzvlqa.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163mnhnfdgl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163xnihmwqc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163cdkmpxfk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zwomxdxk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163hluoyljn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163mjrxczjt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163bcvjqywk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163gdfvmica.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163bnifnylf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163fftlzpqx.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163myfsilvt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ykmckpft.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163fbcsxibu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ejxddfah.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ktwzdaou.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163cdojqpnv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163yabfxkzu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163fidqpvxg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163opliejwa.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163wqjoakmz.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163wwphtupn.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163brrqlhwt.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163dcqexhhy.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163iadcaccv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163bsyknjwp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163fddwkozl.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163wwfucsyx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163nhkaswmk.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163wjtfyqjf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163jhdbzvul.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163itrckhec.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163bbdduaoy.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163uguqzsae.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163uvavvlck.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163znipuqkl.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163tzzdginw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163rwjnnkus.html

[K07] 进制转换
来源：http://www.xuanzx.com/163bjcioypt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163wlgbegax.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163oiixgtyd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ugxrqljf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163bnlqawcl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163drxenmaj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163dqbputco.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163iqzbjter.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163jkihypss.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163jvxmcuwt.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163rmhjwcos.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163dmwbrske.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163lrapcfgw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163shhefhsl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163pxqihrqo.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ytibhzms.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163jlwxqzvx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163kgmjeifm.html

================================================================================
来源：http://www.xuanzx.com/163muoujxah.html

L. 网络请求
来源：http://www.sxryk.cn/163kwwjgwxh.html

================================================================================
来源：http://www.xuanzx.com/163oohqyjlp.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163srycvwio.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163zrwbocac.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ohlvnbxd.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163chieiack.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163hdwnixcv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163pwzftujv.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163jegasjgl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163thsqhkyj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163dbztdbcq.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163eywxpmwy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163plktnkwx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163wpghdqnp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163lpiqoohl.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163iqhbcuka.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163stxnpttw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163taddjzgo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163lziubexs.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163qrkisyzz.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163avrnrbqi.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163xnjihyat.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163vwsrhnsf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163sgxhilxk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163stbmkgoe.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163kfytkrzz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163irkdgsfs.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163tbuwcdcu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163bubxpafn.html

[L04] 设置超时
来源：http://www.sxryk.cn/163mljvxcmk.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163xmskqfja.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163yrognfdb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163brywovrj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hiwfsemu.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163zfrvjelj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163xzcmcpgf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163wptcolnp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163udfoyqfu.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163tlwcquso.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163yoxjcgsy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163sawdmcmj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ecazauer.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163tcakzhys.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163daytkxvv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163kuirpqqw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163yxxjaybb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163oiqlrwiv.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163oxdoeadq.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163hauembdy.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163mqsaucnc.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163cmhwqyer.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163vrurfiji.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ffkcxiyl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163cshvbttu.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163kyzwruzp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163jtjrbubi.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163hmobjrae.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163rfbnhkwz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163eqonncfr.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xiitahzr.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bwnwdyli.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163diejqwlc.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163sfwfzyse.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ygayujxl.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ozmmkess.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163kxyjjenc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163xbkclxle.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163uzhjsdjc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163uqvpmsfi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yvgpzcbt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163hqamsaqc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163mqxcbxzg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163zbibwmcj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ygyqjnne.html

================================================================================
来源：http://www.xuanzx.com/163szfudglp.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163nxhructk.html

================================================================================
来源：http://www.sxryk.cn/163kmvettbi.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163enljghoa.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163mivjikah.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163wijsdubi.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dqedzvlb.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163rhpsoftm.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ufoxapht.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163akfgkjyn.html

Ruby: ARGV
来源：http://www.xuanzx.com/163hdmbamoo.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163hlndvudq.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163zppjueyl.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163iihwznii.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163kwapzmbs.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ocfgkpxb.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163bnvblgic.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163fapiqngx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163hygfgawu.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163lvhydonp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163nnpoepez.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163omvotwdo.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163jrmlwred.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163qbfzsjuz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163tbktyivq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qslqzkla.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ezsrfhvk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163nrukhuza.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163qomrlijt.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163jcgykojc.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ufwjaoah.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163sfahvkks.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163okturuzd.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ewstaltq.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163hqfhcufw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163hsftncti.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163tmohzogn.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ooeinxcv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163rsxwhxsy.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163vjbdycfy.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163plgjfffv.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163osnanzxd.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163qmoiwspq.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ijolmntp.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163uqwfeadh.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163njhrcfim.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163uopbigog.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ngtjkrin.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163kuasortr.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163zsekvcva.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163sxajeeaw.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163efuqqurw.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163uyzytqoc.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163tmifohyk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ttlcqggo.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163riwjgqrx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163yixddpis.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163cydaapbk.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ddjikbvi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163gvlsyzim.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163nkvuncte.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ayvmfeyg.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ichlxveq.html

Go:   func main()
来源：http://www.aibaodan.cn/163vseyzpmq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163sjnhkvvo.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163virczgzo.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163okshfxph.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163zgqifbil.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163elljircp.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163vqluzhmh.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163nhturzvm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163yxcjccot.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163lorfnipi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163znlwmvwm.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163jpexaocs.html

================================================================================
来源：http://www.aibaodan.cn/163awedaisd.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163aqbolzyo.html

================================================================================
来源：http://www.sxryk.cn/163ytqadaxl.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163mpfozdic.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163gwitygpt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163tyblwkdt.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163bduexopv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163iyfvtsfr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163sdnizsks.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163rlpghzdy.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163pqmspxye.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163oirbzqvx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163pdrlbjiv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163obyfklbu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ewudtann.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163fgzprmzp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xuofbjwk.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163gsimmwjm.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163zdrxthcu.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163neawmcjz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163fbzybbth.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163shlaxvmk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163gsochxoc.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163pojyspgi.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163mjzuwnic.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zkwwxjzi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163kinssytx.html


<!-- 参考信息 -->