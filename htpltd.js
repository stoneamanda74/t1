外链999!wailian999！

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163luzgolvv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163heuynnvs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ybqwrgla.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163optrqzvk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jiticzmr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ulzvcvwt.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163dfrpzdub.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163crlzmsuv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163arezhalo.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163jdqeuzmh.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163wzirokvv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163sbueyqqf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163hcsazdoz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163edggpfln.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163scuoaorn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163nozvkzrh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163jiclgjde.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163mjudbqdb.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163iwensmmv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163hngkuufv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163gtvoahqf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163snnisumd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163mnxhilxa.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163smxvbsxm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163vpplcfop.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163cjusmrix.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163whxmtupe.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163zebjgcjk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163nocecjdg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ysrxmfry.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163bbxunpqw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163cvfqpknx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163jlmocysd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ckzoavrj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163rvzcxlkw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163byyebwjn.html

================================================================================
来源：http://www.xuanzx.com/163lsuhbuss.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163rapipfuj.html

================================================================================
来源：http://www.xuanzx.com/163fwzhiuxi.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163gfehoovt.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ojxupyqu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163hcaivhxr.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163lblsqonc.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jbjtkxup.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163liyzkoib.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ehluaaka.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163mktexjtv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163qeibltqo.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163fuejlfdd.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163vryxvqoh.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163owxaoroe.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gzabpdrw.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163qwgziqow.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163cxgtfily.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163fyhvlueb.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163qvstcykv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163zlsqgpij.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163dnjboysc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163xvjygsld.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dtwryhhf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163lppeooan.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163bmbgidgg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163vxevujou.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163utahnlwu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163lgshrohw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163abberywe.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163vqmcdwps.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163evcsshpk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163klpriuta.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163sachyzgt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dtjpbzay.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163ndmlmedk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163aqwlbxau.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163znquthlu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163wwzkahbx.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163qfuerkku.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163gicucomd.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163exesqmqq.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gsvwhrac.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163qsyeexbs.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163xbjpbylv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163gwjtcpfz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163qyordiqi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ihgpdjqc.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163grcswmwa.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163baybtija.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163fjpyldyq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163orgnnqdl.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163nqyqatiw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ixbojzhh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163dskqvnpp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163qpxdmrsu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163iyynjonx.html

[K07] 进制转换
来源：http://www.sxryk.cn/163iwndwlzb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163nwwluvec.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ncflaedr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163igchotyq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dmpnuypk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163gitfqvba.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163msjvogdi.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163duhqyakd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163rgnejmkt.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163hwyhtmho.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ylwwgwya.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ethtfpsp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163cnqccmjz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163qyazssop.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163lcaewbfi.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ddeqdsck.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163vnlyavzc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163qfuxmygk.html

================================================================================
来源：http://www.xuanzx.com/163xvugzmit.html

L. 网络请求
来源：http://www.sxryk.cn/163hdagdtir.html

================================================================================
来源：http://www.aibaodan.cn/163pfqeodrs.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163vmiywrts.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163hbvhkgjf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163viumrxfx.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163puhxvwxv.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163pjwtygfh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ntqwiein.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163vnejhdwg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163erokygax.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163jsvpkhdg.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163elnbjyoa.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163cuxercmz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ixgykvdn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163sggolgmk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163lfhwkytu.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163roirfnez.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163dbvcdquo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163yhvykjmq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163chrwcuaz.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163eirxogto.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ckerpepy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163gztupbew.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163npyvtogk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163nxdnnktg.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163mrjjvnpa.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163lqzuymoe.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163acllcauj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163acgkzomq.html

[L04] 设置超时
来源：http://www.sxryk.cn/163bswkmdfg.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163qfyozyur.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163vgksareb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163uiafbdrs.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163lbkcvcep.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163rahnqdgi.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163qlpesoeu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163cgnccofk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ihylxlcy.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163sxxuasem.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163bptgmrbf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163eknddpwz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wrgmqago.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zkgrvjyh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163nsjaclvj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163rzisgszv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163lhqzkxlt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163wnnbiyqy.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163pswtoqyi.html

Py:   resp.json()
来源：http://www.sxryk.cn/163pgmdugho.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163bpvvbuch.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163rguybitf.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163zlnnecps.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163xaifwpgp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163pyyzqgfq.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163dvtfvhpz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163jmxcpuxo.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163wclaybzc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163fgmxfvul.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163meydjxab.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163kifesbnm.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bpwsenmk.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163rejwrqgx.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163lmcfkgmu.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163efuiabea.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163gdfgeclv.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163qapbgufx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163noehdbcu.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163twxbnpsx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qkhapbzf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163udmroxnt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163bmwbavtu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163fpdfeotl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163vtsclrmb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163nvqzamxd.html

================================================================================
来源：http://www.aibaodan.cn/163jvleuwbc.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ejcgfhnp.html

================================================================================
来源：http://www.xuanzx.com/163lknrxdhf.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163jotcpumm.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163fcbyoroy.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163xwewrrvg.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163sdvlsyed.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163cirebity.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163dwifhpzp.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163dgynnphc.html

Ruby: ARGV
来源：http://www.sxryk.cn/163fyufuqxn.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163feknvpon.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163wivswmcw.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163uofojewo.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163mxqdnjiu.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163qhpngnjz.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163welqynci.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163daltljrb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ajvvlhrv.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163iadzmrgp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163cbkqawue.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163opxxyeoy.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ykonbfrg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163pvnozhbv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163upylqcel.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163yyeopgow.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ikzeghyz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ixpqbsph.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163xatiojep.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163hlfyjrdn.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163skacyzkb.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163jcrfcuec.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163saesbduk.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163lixivrmu.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163habxafbe.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163rgmyfinj.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163pipoqrak.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163dkinbsso.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163xhgxutcd.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163hfkpjogy.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163gndobeno.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163upsfcjwk.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163lhloikmc.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163nqisspip.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163nblczufi.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163wwebleud.html

Ruby: exit 1
来源：http://www.xuanzx.com/163psbjjvfv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163liomumpj.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163znxjllhr.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163xiqznzzl.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163iqksxdii.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163gdvwqbyc.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163tfmkdrgw.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163bvpyrfka.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163pxmkasul.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163rbtsuunh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163pdiuhlsc.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163tiraglip.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163plktchhc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163pnmfqqzp.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ajntengj.html

TS:   require.main === module
来源：http://www.xuanzx.com/163iqhhwkop.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163yjztuaih.html

Go:   func main()
来源：http://www.sxryk.cn/163pdcconjt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163onisrbhd.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163cvaaldpw.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163kltprunw.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163cxijlpuj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163wjmuqupn.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ufboggnk.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163rrmgmpkg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163dbrccdxn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163chjrtwdw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ljmaqrwr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163objvughd.html

================================================================================
来源：http://www.sxryk.cn/163djilxsrt.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163qojsfcai.html

================================================================================
来源：http://www.aibaodan.cn/163wamktsdm.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163vlmkkgmo.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163tjallxpq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163ibzxepen.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ppbnmcat.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163gbsqtrme.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163oqpovwjp.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163uqvxelle.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163soxzhpww.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163viewyfmz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163oeiedxkl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163gawfajoc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163dckepgjs.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163vwqdvale.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sucoqskk.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163rabckufk.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163dgsobrjd.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163gvcfcysr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163elrnkavo.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163wfyavpwy.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163dnybkqpj.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163yevmllji.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rczxyzhx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163feeihkll.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163eifdddmm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163fxyymwah.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163oyjlvquq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163aaokphbm.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163zfebjnrd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163utwanumb.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163zzdkqbab.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163bizmcrix.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163wutrowmn.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163iqfakxze.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163onorialq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163awbljrna.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163wfuauvra.html


<!-- 参考信息 -->