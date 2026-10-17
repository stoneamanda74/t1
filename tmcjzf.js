外链999!wailian999！

[J07] 比较两个日期
来源：http://www.xuanzx.com/163jmfznfgr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gldtmomc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163eublmaww.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163qaohyayp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163tsussmii.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163dxeqirlw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163hlunxtvr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nmiwnayu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163javlsftk.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163uuogrfun.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163srwwzwxi.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163kfpiumaa.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ctogptki.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163wwlihhbd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163eareisee.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ebataqhs.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163bilcgemz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163rnclwnlm.html

[J09] 时区处理
来源：http://www.xuanzx.com/163rpdhtofy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163wojdoecy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163objfbuls.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163sjlbbopr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163gipsktib.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163yvfobpdr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163gdgszctl.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163iqzeymdp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163myeyjkjk.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163nyhetxjm.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163scunyqcf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163hegrvejk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163urysvbhp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163umxjoyyb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163tnzpkwpw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163qetksmat.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163lwpqctuw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163rstarimo.html

================================================================================
来源：http://www.sxryk.cn/163fxyzhhug.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163aqfpnlem.html

================================================================================
来源：http://www.xuanzx.com/163qrrsfprq.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163vlrvrbds.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163xvcovkoq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163dnswazme.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163iahysmnr.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163cwrwfzym.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ilgrkmad.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163jonhgmil.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ggwfxdjg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163tmalihfg.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163jlkszzif.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163zegdfhys.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163sryfxcos.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163uoukwsja.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gfpcxils.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ujdypgrm.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163cdjnyeys.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163yfigcvxh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163hdywvnpx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163pycjadmp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qswggmnd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dihvgbxy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cajetzld.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163derwfnek.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163fgoydkyq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ecosztjx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163cuqszean.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163rhfcqudx.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163jpilwabm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163tcsfnrwf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ljrktdwl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xrhdjyba.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163rgpxsyxl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163jwgfgsdq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163idveqxwk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163vllqxteh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163xepehwgj.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163nbqrenlq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163xjamxqpc.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163xhntfexk.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ofemkywi.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pgmdjstj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163cbohuqcq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163owlckjnu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163vlnanyio.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163oefuvhdh.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163qmrujbwn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163vwwxglgx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163hogczkjk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163tlhobjcp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ansyzkes.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163axwaxuze.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163dfvyathd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163hqqnykwg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163guedinlc.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163qywolxqs.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163bqgpifyr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163facspsui.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nruebbkz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163klfpvpix.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hodgbmdp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163kwhurizt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ptexgawe.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ugxnclid.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163fgatmaxr.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163hcephwrh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163lukcvida.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163dujhzaqm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163wsobuijb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163glxtjyyp.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163uuokival.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163jeidnwxg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163njwidaso.html

================================================================================
来源：http://www.aibaodan.cn/163kzbqrbbn.html

L. 网络请求
来源：http://www.aibaodan.cn/163xjkemxod.html

================================================================================
来源：http://www.sxryk.cn/163enbivbnt.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ilwwropz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163siaizrtw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163jhlpamxf.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163bylmwruo.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163coxnhrjt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163pwzhrbqo.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163iqqnghsm.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163gyukoxxt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163zpqpollh.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163fwuitquu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163sfsxtdke.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163tuchjoyn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163iidqssuf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163mwxrxopd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163edcopxbp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163udloxcdd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163amjooprd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163anzlllvn.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163pxcxzprx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163djepndhz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163lllevxqn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163raotdllm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qbziiqnt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163vepyqcbn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163lvypoaio.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ulasnqki.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163dgwbxttr.html

[L04] 设置超时
来源：http://www.sxryk.cn/163frjvpvxe.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163lamyelqm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163bgugggkn.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163aoghuavp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163urdakhha.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163issptmjz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163kqenvipg.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163rnirekqu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163vvtykbhj.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163qufomutp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163vhjpqhpi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163dwrtjfwm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163tdbtsova.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ffgerrlx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163igkajvbz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163kfgahcca.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ejcreviu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163vivtabxv.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163rifecigm.html

Py:   resp.json()
来源：http://www.sxryk.cn/163nrujmscs.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163iyarvgit.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ycpezqht.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163shhfejfb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163vgfprovh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163nflaviws.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163qadszsod.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163kysakqzu.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ufqcoubm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163tpzcvnrw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163feokixax.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163yizjwqex.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163qexkqygg.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163zvuruobj.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163lqoftrhe.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163dzvddjax.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163gctodyud.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163hjrnlsnu.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163nzkakauj.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163plklughn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163yltkzajl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lnxbwurh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163dflappnw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163mvsixfxb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ckxfdprl.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163hdbvxezx.html

================================================================================
来源：http://www.sxryk.cn/163mkilihht.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163jrsevbtg.html

================================================================================
来源：http://www.aibaodan.cn/163uzvdgpln.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163lpeuzkfq.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163bjzqxjws.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163xxtxelnl.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ylkotuib.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mrdhudzu.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163pkxvtkmz.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163gsuabxke.html

Ruby: ARGV
来源：http://www.xuanzx.com/163fgeodxuh.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163giodhceb.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163sadcjvwb.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163bwojnkxn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163dykrsjoa.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163iquwnejw.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ophkmjug.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163tgyulzft.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163kflwxxhh.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163wrkhheqs.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163bncofumt.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163limuoylu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163vmdkhhwy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163nbexzcys.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163paxxoxba.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163kzcravnk.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163bhdtfxvz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163jsqolhfh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ayabdxbg.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163vbiudnte.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163svnfuaoz.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163usstbkkx.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163nrdhrvfb.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163baentzbo.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163pkyrgfer.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163xrqoabsj.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163jzioeqhf.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163lojqncrs.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163tswkydoh.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163kjcvotdl.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163emqilxhx.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163trawhbcc.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163mojbqdcy.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163adgfmvuq.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163olbzrelf.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163vjkshrgh.html

Ruby: exit 1
来源：http://www.xuanzx.com/163tijomhcf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163rgwvopcc.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163fxvycmoa.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163gchmfyuu.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163pmgqhsez.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163drqwzxgd.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ghvzgnhm.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163nhznycwf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ozxxdzyx.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163egxydzfx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163cpfvkjuv.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163txclkbdg.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163rmzbiufr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163lqujlqal.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163klhwscaz.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163bcgeeaew.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ibxvimtm.html

Go:   func main()
来源：http://www.xuanzx.com/163wbfrxkkh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163rwsnljaz.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163vkkxjfsn.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163gycpaifu.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163xmbhtvit.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163epezmfuk.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163lfqzukjl.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163lepzuoym.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163tbmwazno.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163zbtmblse.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163xuomhddw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163wwcelcqk.html

================================================================================
来源：http://www.sxryk.cn/163ccjehzez.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163mmmnfhla.html

================================================================================
来源：http://www.aibaodan.cn/163ghomzmci.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163fvlhagct.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163vwndexfc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163tgkkujdn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163nulvoxzd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zzwstpgq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163povqvqic.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163xqaqaetj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163juiucrcv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163vmtforcv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ogykljqc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163nvqujeuc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163mttjdoti.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163aatiqgoa.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bbwujfps.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163jcvuvvzo.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163etoljtpu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mymgbgqe.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163mgbpcold.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163xzcvcdmc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163vojdyooe.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163tibelnfh.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163lvwkodoc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ipjzufgf.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ubpfpzwi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163afctywrl.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163qgrfnbzr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163uzsoycjb.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163wkciiuho.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dwxwutre.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163egcqlcqe.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163lnhhnwlv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ofobhurq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163uguaqcqz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163mmodfxvp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163tdrjrqsa.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163rppybxag.html


<!-- 参考信息 -->