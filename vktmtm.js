外链999!wailian999！

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163wcywyjjx.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163gmxuqaen.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163veoqzgzl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163fjcpaijq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163whtlqidq.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163fviboyqu.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163jxldpvbi.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ugslwdhv.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163vismtkwz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fbhphyzr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ydjktdqs.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xncsywgd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163trlektng.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163sezcaiyz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163jtkorzry.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163imukyerb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jauzmajf.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163uaxckqpb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163iyneicgh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163xlewadpw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163svtygwfh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ineciyjx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163tavoofzh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163tjvzerul.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163tqpmtqxy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163tazsnqla.html

[J09] 时区处理
来源：http://www.sxryk.cn/163vroxngog.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163vyiwtdox.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163xnhfcapk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qprojaeh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163nhufvzdl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163dxtfumkw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163yradkqdt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163vqiqpntk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163nrzeuwtx.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163pffgwtks.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163qonkvmyq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163fyksmnvv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163erengynw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163xjkyefkw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163znnifqyu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zbygikww.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163jiezqcfk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163dnvciftw.html

================================================================================
来源：http://www.aibaodan.cn/163verrdvmi.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163imexlego.html

================================================================================
来源：http://www.aibaodan.cn/163sxanbrlb.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ulyccban.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163uhatiwvm.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wosuzpyn.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ausrugdd.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163nvnxbwkv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163gmfglnok.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163csfneonk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163wszjclak.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163clwxvudh.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163npjqiglb.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163bnmhhobg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163zxsqflkq.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dznihkja.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163esnpvdhh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163zqvezngj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jiktixnv.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163tyzfiwyg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163vjasthil.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163czmymwta.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163fgvhlipw.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163hhrljtbt.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tdlecotq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163znhsawnw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163edsynoae.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ojzuhhoi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163worlsjtr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163zijbxykr.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163sdidicsi.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ispcgpmf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163bzkqzjkj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ldkbeexd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163lnkcinkh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163jgoxllfc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163zumsbdwm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163bhrwjxih.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163rldbbfkv.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163iynodvee.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163tfdrssir.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163fdzqmplk.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ishgogzt.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163swwwnsmc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163lvpngmxg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163jrzlphyc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163jnxmfhlf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163vxikfzhv.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163jtiysryr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ediyruco.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163hyetqdop.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163kexfvzpm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jckyoeov.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163niixnsza.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163lmtcgvli.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163eoqyvrdf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163jpeznmgz.html

[K07] 进制转换
来源：http://www.sxryk.cn/163oaswafta.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163tfyuiibi.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163vqfjmwqp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xmzodcvz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163btitkdvm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163jntosrpz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163nfexnrpc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163xnawwcgz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163mdasutpv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163fbmpnkwi.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163vjwumrig.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ipimdstk.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kqsxmhwv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163yhoiswgi.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163yquoivem.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163gucrlanp.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163vvbutsom.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163qijvsysx.html

================================================================================
来源：http://www.aibaodan.cn/163mapqzgcf.html

L. 网络请求
来源：http://www.sxryk.cn/163kbuyrzha.html

================================================================================
来源：http://www.xuanzx.com/163bynwdmtf.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163kkdvsvkc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163lzfqkrsi.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163sfqvqqfb.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163skmzkixh.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163jyinimoa.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163dxpbebgg.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163dwyppqvl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163nugkygyc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163xutewsjo.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163srcphski.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163hcwnrfkz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163zeqgwbuc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jnkdcgdr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163dxinbueq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163wyevdzxj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163muuvclxx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163uybowzvm.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163wqcqlfrc.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163gyuinwhk.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163naeezvum.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ihnzktpw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163frhcypar.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163gksmuuhy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163bylfwrgd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163uxjebltf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ggbjtcgs.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163gdsxxljn.html

[L04] 设置超时
来源：http://www.sxryk.cn/163jfmxlcte.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163wufuoyhf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163nkwcnltw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163plexdguy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163okjmokla.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163oobhrbgy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163dgrvvcoa.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163lbikreaf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163cxstyqfo.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163bjewjytp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163zynpffvy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163tfpboypt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rzyxtdfj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163bmqphysp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163vluhhpei.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163vrcjocah.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163xfhdxreq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163rbigtrrx.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163narduhin.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163dvrqqqfn.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163reqxrhqk.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163fixjogkj.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163qkvqchkc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163cqpletol.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163gwjaylmz.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163xcwbiekl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163dgdllbkc.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163nnmbpfoy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163uatyspqg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163xtpvdmvh.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rbftelyj.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ibxyophq.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163cbffzyjj.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163sdtnltzh.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163qidyrfpy.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163nttyogyb.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163xiuchccb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163iwdhrpny.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163xuqrnisy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rnuggtkb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163wuwmmyfu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163hqjjljhp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163lspnarfq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163wpjrsknu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163wchmgztu.html

================================================================================
来源：http://www.aibaodan.cn/163nchaszmp.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163almhpgul.html

================================================================================
来源：http://www.aibaodan.cn/163jywmsoqf.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163smyeimmf.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163daqbbvch.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163xumsgumh.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163domhfvrg.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163cgbdfkqw.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163oehldxff.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163zhkvvpuk.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163wejovcex.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ojyzgaez.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ezxzvgxs.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163pxoosxxf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ypkgwgnc.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163cqjhimml.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163eoystxqp.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163dcxxtccy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163eumaoyri.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163usfnrpei.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163rreqodtz.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163yqacwdki.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163wvjpuzaa.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163rpmjpmmq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163kkmrazmm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163gfexplzd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163cojbjmoo.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163wgerixem.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163wqwhejjz.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163kzkszkos.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163vecrxzra.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163xpxuovgz.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163zayunubc.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163fnrihxhy.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163wbevvldj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163eonoqslp.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ctbwsrtc.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163vqfbxkje.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163fjfjcopm.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163zdejgidq.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163jgwvdfia.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163jflpcwrd.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163zzfhnnty.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163gagtwvkq.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163fydrzrfy.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163luavueqq.html

Ruby: exit 1
来源：http://www.xuanzx.com/163makdvsma.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163fuwtmgvw.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ffohraao.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163oudzgsro.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163yebnvvhf.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ahquahrz.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163qxiyrmnf.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163orxribrq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163uriljihv.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163jpssites.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ikdakofa.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163pjagypzy.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163voffoioz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163abehcqyz.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163hqmwphld.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163gfbpknkr.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163yfspvymm.html

Go:   func main()
来源：http://www.sxryk.cn/163sewkhgnb.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163umajamrq.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163krnxgcxj.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163jgeonwjq.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163alcogagj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163mtipeihh.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ilzklhtk.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ktrdqsik.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163qxrjqurg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163crulcoag.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163phbzwvoa.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163zidagdua.html

================================================================================
来源：http://www.xuanzx.com/163msdwsddd.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163focmeynr.html

================================================================================
来源：http://www.xuanzx.com/163wwzgxmdg.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163rxfjlruj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163zmdhnpgu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163veuxmloc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ddmrhjwz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ggimpvev.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163diyxlyqb.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163wjzbdpgg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163npqfiuqc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163kffzsomn.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163xfmvjorc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163kqxoddre.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163admlsdwb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hputdawx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ydsqlhmn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163oeedjuyd.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163pbggfvbb.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vuyovqtl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163zwxhowjs.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163fdhppcvz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163oztbgwjh.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163inuzuqpq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163iebkrakl.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zybhjxqa.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163pmceaxbp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163wiivfojc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163wvchstjr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ewwijkop.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163vegmqzeq.html


<!-- 参考信息 -->