外链999!wailian999！

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163qxqlgaxx.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163dwuxoyzr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163okklxksn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163vtmpjkix.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ymtovszh.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163adhwdtxc.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163zfexpdfo.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163xinmpqkh.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ullgkpgv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nhdtiodo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163knndyahj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ewmkoaok.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163zrwrfayy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163lpdtfcps.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163crwymujr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hlvwakqs.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163solgcdos.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163tfyqqoki.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163qhjjqleg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163veoquzil.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163clvxkyko.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163hwigywyn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163zcczdegn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gydyfgcb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163luvlvxal.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163rbbpwlhg.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ltzakjom.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163dajewpta.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ogcsohjc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163cuwxyraa.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xamihcgp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163zojlffer.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163pobjetce.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163awxbocyt.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163dpatrvtr.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163fvzekqpz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163znjtzmzk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163nascnnjo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ebnpldtv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ebamoilv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163gvtxegcm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ynlwlkoa.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163vjqtxkeu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163imgfptbk.html

================================================================================
来源：http://www.sxryk.cn/163jeuvpzjx.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163lpmczkws.html

================================================================================
来源：http://www.aibaodan.cn/163vpngbkqe.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163kbugxwek.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163glzkhfyy.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163evkfxqfz.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qxkacjmu.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mvtkvewd.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163zqwmzmyq.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163sodprnav.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163whucteqj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163umdbcceu.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163mrrqgaul.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163mmfwnqzi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163inilhiym.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163hoiobxsj.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163yfgqtzvg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163rhszyuny.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163trdzefem.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163jgqzlvpm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qxrhlmhr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163pwcasoie.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163mauogudu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hzmxwyls.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163mqrclolo.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163jfnburou.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163famgvqgc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163nmssefnl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163carxnzdd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163bbmuqfag.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163tmnsbdsw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163htwimmfp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163jsqvrmyz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163rrlyncuo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163efzwkrxp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163gziiosku.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163odtcygfy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163gqhyizbv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jdbmxnbe.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ycnnkdyv.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ssxbgdcg.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163nfmzoirf.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ibqqqmcf.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163oromqyfy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163svxfmvxp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163wyashpxl.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163lhbmgxkj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163hesswlpk.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163nvngpfko.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163whxdyvxi.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163zvfoazpx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163uqshyyoz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jzpgxvuf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163wpbgkcqz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163rmelbuav.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163uppbdxnl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163zvwlquwh.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163tpialjvx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163xuumjowo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163masicxcl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fohupqgz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163djcntbjy.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163nqtrcyqn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ezprdzdv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163lqqkejib.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163dqusbpbf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163zxuavswm.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ybtumhkb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163msytiunw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163xnjzecfn.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163iorrlvwu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163scmgesbd.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163xfsiaxtm.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163mtjvwlct.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ijfqydda.html

================================================================================
来源：http://www.aibaodan.cn/163mclufnnw.html

L. 网络请求
来源：http://www.aibaodan.cn/163kaokftsd.html

================================================================================
来源：http://www.aibaodan.cn/163iraztxgq.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ixwltjjd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163vqkmsazs.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163fejdddqh.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163bcywmboo.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163lorfgtyf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163kjooporl.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163nsouchby.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163joatyjiv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163nxpqqcqy.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163vzhbkflj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163uadfimwm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163munxfrpw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163oahvfyeh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163vuabpvrq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163fvkvnhoj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163rrrnpnsc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163kapetmtg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163xdefvegg.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163tjiauejf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163vwblvodo.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163pqhnwzgx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163lklbsyan.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qpamdgwg.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163tgtwkyed.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163hiyzkogk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163acdxjqjw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163hyuljfsp.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163kyzeosrn.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163lztpyzzg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163wqmwkjmu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163aplpadzx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qupgnryx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163zgmakldw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163jysbvqsr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ahkalwtg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ezedgdhv.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163luggurji.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163gqaxjkvj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163jzwjfzov.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mimvlmkz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163palnkofe.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163nlsvewho.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163kteebubf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163arcqlzbm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163lltlzzpl.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163jvcslgdh.html

Py:   resp.json()
来源：http://www.xuanzx.com/163loygjhgq.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163iwiogtrl.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163mrfaxiiu.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163svcakydu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163kpaxzurj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163qapazuso.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163bkpwhcwz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ynxnbbwc.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163zgzmeftk.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163bxfnjtmm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163tzyqmlhh.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vbvwjeed.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ecsdgrre.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ryypckci.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163hcpuvoyp.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163vydojvag.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163bhinetle.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163iozgtygy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163umvpowbo.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163bazyjies.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163digjeiqb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hvvyfxng.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163iegucftk.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163tmxqvbgo.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ftmbbujm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ddvnbaqt.html

================================================================================
来源：http://www.xuanzx.com/163kdexapmy.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163hhxoxdiz.html

================================================================================
来源：http://www.xuanzx.com/163dmxnjlee.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163nlztdhqz.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163jspbbamt.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163creqxagt.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163gwhmbhyd.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163tcpaaslr.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163guesprgl.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163epczlwis.html

Ruby: ARGV
来源：http://www.xuanzx.com/163qmopesln.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163bpeifemp.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163tkiutoan.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163wndqvcsy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163iodxutss.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163riglyzae.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163stglczod.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163gikqxjrb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163gzdxopek.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163jegyzcry.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163flxwguyv.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163kdgxkusu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163tkvzfrvq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ohtrmicm.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ekzilgtz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163urxcivwg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163amdkoaxi.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163qlmvmncf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163sbbtevmh.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163xcyvjslc.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163pgbityyj.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163nvlgzipx.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163kakezzxm.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163nfbijlmh.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163czehudtg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163ekswjakl.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163siedjmqf.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163dlmbpxdc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163svsyywsz.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163acarvjwo.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163zdzioier.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163urriqmdu.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163rzzwvgve.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163jxrpnjhq.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163sxabeeaj.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163dgycmvcb.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ksrmadew.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163inubyzmb.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163lqaxhado.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ylfjukbz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163nhxkuyrk.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163eafgeezz.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163qqwtapcc.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ramjsotg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163nldzbrgy.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163afmudgbj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163bplwghey.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163fwaqgxof.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163wvbmgwdt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163okgljxmz.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163kmhqdten.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163npgncwbm.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163stxaqefl.html

Go:   func main()
来源：http://www.aibaodan.cn/163zcvoyrnj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163etcamakg.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ctcunfvn.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163swchvobz.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163dwgldkpz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163ypaifskl.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163hopighcq.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hlielfdt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ziexrtrh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163blhoirve.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163dpequnsy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163wtjdvrhr.html

================================================================================
来源：http://www.xuanzx.com/163lilrhpxh.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163vqpbzfoh.html

================================================================================
来源：http://www.sxryk.cn/163xjdhaanj.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163agfkovjf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163uzfqcuda.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163gjztwfyk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163gmkmzpye.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163wjwtydlt.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163rlukyjvd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163kszmdzce.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163oqzcbhgl.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163bhqkwopp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163hvrkwwvw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163oniusgyv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163xrlxhvan.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163phnwqfrk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hduwpzan.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163qjixgtmi.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163kcsaovmz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163kwsznowb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163txjyduwr.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163yfyrcbss.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163bqmtbriv.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163nxaefoou.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163bkxkqgaj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wjwpyymu.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163embbacyc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163cnbbzeiw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163foqowljq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163gqemiygb.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163qirbmgwc.html


<!-- 参考信息 -->