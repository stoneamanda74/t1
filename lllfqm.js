外链999!wailian999！

[J07] 比较两个日期
来源：http://www.sxryk.cn/163urofucbo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tdxtuwdv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163yhyffgtk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163byuilcec.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163bemssynj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163byhuziyj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163vptnrrvy.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163skkgzcno.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gbaxbhol.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163puelcjfr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163pavcurwk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163akxtkcpe.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163wkwnjpyg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163pdetfpmg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163wcmfcqzs.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163tonarpek.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163solohugb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163rxwetvkj.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163cqdnripg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163wurqdrxt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163dwltbqpi.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163lfvxyvrm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xpilvgzb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163eyrptvqc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163yhlswuxc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163wcixpiyq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163tfselbup.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163bfxxgpsz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163fkktnvzz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163naquykfj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163fbbyjxyj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163gboxthgw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163glxwgews.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163lbactehf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163kwsqjpfy.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163voilcuzi.html

================================================================================
来源：http://www.xuanzx.com/163rzntnadn.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163tsorlvqw.html

================================================================================
来源：http://www.aibaodan.cn/163avdpvhjt.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163equuxcng.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163cjcrgnkv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163pfanrxdg.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ayfvbdgk.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dhbizzlg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ldsnxhpo.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163eqwhuupt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ogsbgojd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163mxktpzlg.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163dtgtdlnw.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163uecvihbk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163nehqbkob.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zxafwjik.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ioatbxog.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163gllvzrvh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163joxhgtqs.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163oannrtjh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163vcegrafc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163uitogmyr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163nspzndzo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kzrcxvzk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xgwybadl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163opkbvber.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163glttmfuz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163exhfoeqi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163kwhddxnv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163qowwoloe.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163tmjhwfkr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ohtuizwj.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163brwqutnd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xhvvgdsq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ljmvpkmu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163yumudeau.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163gspivjaj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163zutnuqgz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163szeugtbe.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163vrixkvmt.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163yvqsmxqo.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163dmdvjlrd.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hqoelhwc.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163etoywowy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ssjprfqz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163sfproden.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163nqqtfgtw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163dvcdtxwf.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163mtcgwroj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163tkfjwrwc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ikxutlys.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ykbwhqpu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163gskndanj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163udsfhpva.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163qxifhmne.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163lsrjjhln.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163skdmpdch.html

[K07] 进制转换
来源：http://www.xuanzx.com/163tkivgeaz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163wuzxflwl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163hrpszkfu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163sknggnif.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ufzhjfyg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163znrcrvxh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163kcddelwv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163wvbnccwm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163jmaqzzhq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163jzsuzbus.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163rwlpbedm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163cizcxubj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163czyaztww.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mbxizejk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163xvdtbrdb.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163bksbeywb.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ptowvdtk.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163zgmsenkm.html

================================================================================
来源：http://www.sxryk.cn/163oxywjwzj.html

L. 网络请求
来源：http://www.xuanzx.com/163zcdsqaby.html

================================================================================
来源：http://www.xuanzx.com/163vzeemckl.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ikktfnsr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163kyrbiiwj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163fenokgyl.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163hrbcgejv.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163vcltlrss.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163swggqabi.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163grekogog.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163zuqeokmv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163yldpmiew.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163xjoxkrnb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163mmhvstwe.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163culhwtxz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163dmfutqkq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ciskuvgp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163owstzbnl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163jvrxktoh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ewocqeii.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163prnjruaj.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mvrqeapx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163rqhsdysv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163qvbtrnft.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ffggiwpu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163glhqbtnm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163hbbhtqes.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163nfdotwom.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163msszjzbs.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163mtnavhiy.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163lfirrkpn.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ttrojslm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163dghcobxn.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163zijcbrdf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fkasxogu.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ilijpzra.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163tnhanofq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163zrgctgss.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163zjqycmmj.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163suouligq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ctlzvemh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163vfcgysyc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163iagxgsit.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163kiknkmve.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163htjenozf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163adxlvxfz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163gjfufrot.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163soreiceo.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163upwfxffj.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163kepitcwv.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163dciekeqz.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163pugshcql.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163quxhrspn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163xzunenze.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163qobrliwq.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163nkhxwjhv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163yfbyvvak.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163ukyjqpgn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163exyiifbi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163eydyqzes.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163nokwjwff.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mxxegavs.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163oxfjfawf.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163rnybfatq.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163daaaxvuu.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163tjldyxij.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163wfaclxsz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163lfblrczr.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163jpvfbqxk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hksznmrk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163gvwhaglg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163rmeewusa.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ybrviqhv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163chodyfdz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163notcxxst.html

================================================================================
来源：http://www.xuanzx.com/163dtfdyaxt.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163oxjrxvys.html

================================================================================
来源：http://www.aibaodan.cn/163dbbxkmhg.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163naageipt.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163yjvlosuk.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163lijhrrmx.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163looltyea.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163jdbteooh.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163lbxakiuz.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163qwuetswg.html

Ruby: ARGV
来源：http://www.xuanzx.com/163bltqocuh.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163bfytaxut.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163utppnlxk.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163qqqwgaql.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163pgoywdtf.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163tjtzkjri.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163gvdzqvch.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ttloumen.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163vdlvtovp.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163riddijav.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163rkbhfptn.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163vrikjwrz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163kmvznubd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163veeqjklx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bvamhbbp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163mavwqtpb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vvhhmjpy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163kddaufrc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163sibaneig.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163nirtsfwy.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163inkzplht.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163prswwwcz.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ymfhejtt.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163keqbjowp.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163fqdigxda.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163vlhtuuth.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163gjmcucaw.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163lqpjtrax.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ybbxdyhd.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163uyijpoev.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163mkyjanvh.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ulchdbpw.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163lspmgreg.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163heahlpju.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163cubfnqzd.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163jpotjuwa.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163rpoxgndn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163yzsekomu.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ttemvenq.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163tveqdamr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163zikddxek.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163tifphfzm.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163uhbjktco.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163vnkuoecz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163twufdcak.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163slwwbnfs.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163kffdekew.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163wedombxe.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163hkizxbhj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163xttsomlw.html

JS:   require.main === module
来源：http://www.sxryk.cn/163uqarokrc.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163suznifmh.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163metjqclx.html

Go:   func main()
来源：http://www.sxryk.cn/163iqpsqlha.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163xstoyqno.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163lkhtoyqe.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163aqbzrzlr.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163qwogsnzc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163idouqjhp.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163cnpqmtcs.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wkrfoitk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163hswsubjc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163czvoupkx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163riqajhhv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163wkgigqbf.html

================================================================================
来源：http://www.sxryk.cn/163ydmtpska.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163scldzhdj.html

================================================================================
来源：http://www.xuanzx.com/163lwrriyxb.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163mrgryzxc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163cjfamnlt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163rhjwiyjg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163nhaqhjkq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ohfuwvsn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163zsrhfhkb.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163aucugbqq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163bhgfoqri.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163tyyprdod.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163onxsthou.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163yabhsiyp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163oifoksyy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bbmwaqyl.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163amqmykez.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163trisggmo.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163swnzybba.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xfrohvwp.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163rsufpmkb.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163trlwiesh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163kgfcpczw.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163kluxdofu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ftqkkmkx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163nmkjncrt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163uosfspoc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163bzbxlhbk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163tmsrbehn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163xgkfkuvr.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163jnwwfwha.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163gdqezhzs.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163njvjcyzo.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163gdtfpwbs.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ocymtncu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ksgsvyvn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163vocwvdfv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163fuefgmoj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163poszlawy.html


<!-- 参考信息 -->