外链999!wailian999！

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zulrwdid.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163zxoiozsh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ibgsjbtz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ubvlnhht.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ttfhdzmg.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163kvimyxcr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163projuhvj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163oozjlbyb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163vizivtgy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163uechwuon.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163wcuuzozx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163eyhzlzww.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163sxipjpzq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163emtehreo.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163fcvqoenh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163rdgsukub.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163jykdiaer.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163vpfvlibb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kkypmkqq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163yirqkkeg.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163jhttoorp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163cuslncha.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163vpmnljdh.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163vohtpypi.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163tzjkcxyk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163qgbdqtdr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163kwtvdmhj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163lymbjtsr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163tmyoravk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163rxylzyla.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ibufuzin.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163xmrsbnbw.html

================================================================================
来源：http://www.aibaodan.cn/163oiikstdt.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163izrpcmhm.html

================================================================================
来源：http://www.xuanzx.com/163xynknmmf.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163qxdkpoya.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wkhdzeyd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163quojijsp.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163zesdqnla.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xkfbpnpi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163wtvdaffj.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163zznjshqa.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163tgfhofgw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163irufgdis.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163tcojvowz.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163nixybjoi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163clfjwhzk.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163sbnttdxi.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hzufwjcj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163hiefddhn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163kdmmavnr.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163lgveryvb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163fcchdokm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163drskuwyp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163xrryirpg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qjxaqnmo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163tudvdopp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fxyslfsk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163uwzszewu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163dkzulupi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163wtgajhoz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163jqkipjjh.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163actwlhep.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163eayyfbcl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163tmahqmih.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163csanklsd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ajpunfpa.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163yyexhdfb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163pxfercqc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163tnxqpyqz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163typmdhyk.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163mljxddgw.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163dffikklz.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163deghcwds.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rnvvsnjl.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163mqxyatph.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163jbafkllh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163uxsevafb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163jjjqyjvt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163wgjxvaiu.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163wdtttifm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163xmmywova.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163amqmnhcx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163tzzjsdwm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ejaggvgz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163wwhmhphi.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163xxpqnqbe.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163uxytzsof.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163qjgxqpim.html

[K07] 进制转换
来源：http://www.sxryk.cn/163kgtyrbru.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163zyvantcy.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163nijkteqw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qxrdjrht.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163juizkgmz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jyfhjeoc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163cpanyaqt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163zajpyxfw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163mvfzqllz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163feomuayn.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163oepzlkqm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163dbaouxhl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163kybsxxux.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163eyfvzqwk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163gwcxkvpv.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163trsdueaf.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163tjvhzhfk.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ukfoyolp.html

================================================================================
来源：http://www.aibaodan.cn/163gmxxdzhd.html

L. 网络请求
来源：http://www.sxryk.cn/163qypuvtlk.html

================================================================================
来源：http://www.sxryk.cn/163liibvtjc.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163okxierqs.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163lmovcxtl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163rnrxctqe.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163tpkijwze.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163glidqslj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163uxkalxyf.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163hsgaewzb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163tjaezchb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163oyjooppu.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163hayxipku.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163wjmpjxhh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163cxwrrurz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mlumgxkr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163hmvvkcko.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163mtymshhs.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ypqxsnmj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163khxxxvud.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163trkxaelo.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mtqfcmsa.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163qfzvjqth.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163akreodlw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163quzzgrkt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163lmtymipk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ffoeijrg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163vfrbnsbc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163uozoeuqu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163muchgnox.html

[L04] 设置超时
来源：http://www.sxryk.cn/163kerqqwqp.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163etrwkcox.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163hbryivgs.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163lhkuloiz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dgeofdjl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163clomssqg.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163peuxgkrk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163tgajbrjd.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163mparalpk.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163dlrjsgnd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ykxmpjyt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163dpcudxqt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163vdeymygb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hmzdyovi.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163mrpmbsdl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163xsvbeuwy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163iiafvwjg.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163rbgyubfk.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163igsdyegl.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ihxopuwx.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163xviuxisz.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163vfiphyfw.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163dsynckve.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163benhwesj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163gpysxobr.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163ehtzjrsp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ovbggwoc.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163qmcqhtnl.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163usbdatxx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163lynxxdal.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163unokxcph.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163bhswzeio.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163qxvawahk.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163iijjwils.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163zuvokknp.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163rhzhecij.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163houbucbt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163pepjybwq.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163nxbahgnl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wcvirvik.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ocsdsypr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163gloretvs.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163wyfilciw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163hkxyftbe.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163modoghns.html

================================================================================
来源：http://www.aibaodan.cn/163sdzvjfle.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163gzwveymw.html

================================================================================
来源：http://www.aibaodan.cn/163zpdgdhch.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163qulbczjg.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163heljkude.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163vnvtafag.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163euvqzgbt.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163udokrxyr.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ohlxlawl.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163mlscghuh.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163aggoaqih.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163mtsxeasf.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163wqjylpvb.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163owhfotxk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163jwnhzppp.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ghxuazhk.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163boynvhjr.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163dpsjcbez.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163uprsvnvx.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ngsyssgm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163pwzdifiu.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163tpeyvpxg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163jkvnhwrn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163fhirpfak.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163iroqcykw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163uybinxmp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163kadpxtdg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163eetuphwi.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163hmysdwdr.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163camdglbn.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163gqigukcr.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163antsajxy.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163oixgeyeg.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163xcxutjcx.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163maqkvzbd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163aexjrchv.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163lamqnvob.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163gklyznlx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163sktgubrh.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163btqqsdkb.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163pbybapec.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163tnveggvl.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163divfdrqs.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163teikhkjg.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ntjpnvgu.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163nhddiksx.html

Ruby: exit 1
来源：http://www.sxryk.cn/163aezggrav.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163omvrnpfg.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163uzbgrejw.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163icgokmsj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163xhvxehbi.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163eyfqyaym.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163zadvukuj.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ugtcylln.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163znnujtbf.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163xunzrssb.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ffylnfri.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163upnngamu.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163eltwwbcr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163gwfrsklg.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163eqrxxupd.html

TS:   require.main === module
来源：http://www.xuanzx.com/163orqonklg.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163jcqzrmsv.html

Go:   func main()
来源：http://www.sxryk.cn/163xhwpkygf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163wugirmee.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163bvsiajgn.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ygnehtwo.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163iqszqvwc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163peailrdf.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163hkorloxf.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163xietqnod.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163gbwrkkte.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163gzmqdsti.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ckzorjzn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163lqziiwxm.html

================================================================================
来源：http://www.aibaodan.cn/163vqueglun.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163yzgypoyd.html

================================================================================
来源：http://www.sxryk.cn/163cephxmzd.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163mbryclwr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163srvlgltg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163sqftcchl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163rwvdwgzy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163msbrlczw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163guefzawm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163qotjedmr.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163lmzvmayb.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163szuurbpm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163sfdgfuts.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xcawtycd.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163nbwudday.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163jihkitxb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wlsinkov.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163qvxdiout.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163uptkyyrz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163fqepnisn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163afnczasy.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163hjyeszoj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163buwiuhrr.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163wehgffln.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163sjggfhhv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163tzphfyqh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163lvcrwozf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163lhdjckvl.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163vjmdrnel.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163wdjachmh.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163hnxclzgr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163efurbulu.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163dlbmtial.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xuuntovv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163zohrwsga.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163gdfmbvzi.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163pgsfiult.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163jozjokxj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163dswvhesz.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163vmnqifzf.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163vwnzujrn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163ytqinfrc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163tdexvrbf.html


<!-- 参考信息 -->