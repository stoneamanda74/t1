外链999!wailian999！

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163cbmhntbg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163znljjlwr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ncqmsmmg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163flxtrlnd.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ndhnyten.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163bqlowhsi.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163xueucuzu.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163rywacyye.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163zfmewxhu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163dhjvxoqx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163vraaqkcv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163nelmuhfy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163aznfdpbl.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163churfyqg.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163qszqindn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163gahmfsao.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163nrmrinbc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lftaisgz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163nodwgjex.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163dtobipfm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163eakupicy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163uwhvgmbo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163yonugdit.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163pmivaxeu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163iztworrx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163faidrlyr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163iwfdhenf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163trxvcyrs.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163etjpxhqb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163mizntcut.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163jlveuxel.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163bxinevcp.html

================================================================================
来源：http://www.aibaodan.cn/163ydbcggbv.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163nduxmhyi.html

================================================================================
来源：http://www.aibaodan.cn/163pwlgtwuq.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163oooeqqza.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ieutgkoq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vlbmpjpx.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163fdcetubb.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163vzushwzx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163itlqwbli.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163jsyyxpfb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163dwyrgycn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163psmwxcfc.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163horurwpf.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ehaficcw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163zisjblhl.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163uwgzjlaf.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hkaelcaa.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163hfcovnkd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163wazxakpv.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ospjmbks.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163npyjtsbm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163kbjaxhof.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163aockxxmu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163oojqjpst.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xkeqxwzw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ltjimpik.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163vcygdorg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163djtfbdkc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163jnqlleea.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163wvpixtsf.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163rjgstcbh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ojydsanq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163kmhacpmv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163igxplclc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163mdnnnlhy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163hhnagwcr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163kfdztrxc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163gjmsdewm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163exmbghmd.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163gibzvlil.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163rqennmei.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163hlwmhjeh.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163lpdpuyuv.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163wcddxhxo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ixeevinu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163gwmfkbxq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ohcydcqf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ftjrifmy.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163yufiiqoq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163sggessyp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163lztfttyk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163lpklyota.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163jjnmfkjr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163mlguwmxn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163xqaanwyt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163czcsgzkb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163yydfyqok.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ewqdrhna.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163gmkitmpf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163iktmdwrb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nkmkxlzf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163latvutwr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163uwspmylv.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163kmxykksb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163udwkpigs.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163victkean.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163alcxxutx.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163acroivkm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163xrpbecgg.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163xagvobfv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jiwkxmht.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163xrrzqddy.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ovunduoh.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163zthazzpu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163lhpeewdp.html

================================================================================
来源：http://www.aibaodan.cn/163hmzlxajf.html

L. 网络请求
来源：http://www.aibaodan.cn/163slvelxzl.html

================================================================================
来源：http://www.sxryk.cn/163bigznllz.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163apbwubvi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163tnjdnclh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163waiigbyh.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163siifmkyz.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163pktxypaf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163gktgyvwx.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ztlbttaz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ksfcbtgm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163gpjpgjak.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163boldjvin.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163mmhkirxh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163pdceqxyp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163fczkjhos.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163vlpnyphn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163jvwteiyz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163japyyrmi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163rpulseuz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163vijtfmqs.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163tjyqaots.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163hwgfkzsz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163uexlasfx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163mvvdqhdz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163iupngtfp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163gqfrhoxh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163hlfugtfq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163uujteeov.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163eyjyrryj.html

[L04] 设置超时
来源：http://www.xuanzx.com/163kstgbsdl.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163cglpcupy.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163poyilcoq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163nwhbkxms.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fvwgplid.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163qszppzie.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ezvxbtvk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163edhnktms.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ssrthdac.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163synfjmhc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ltboimei.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163avumcial.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163fkcfnqzg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163mwccfpqm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163xhdxqqvj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ujelrdub.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163fijkmngf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163uxyjsdah.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163jdeycrvb.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163phxxlstp.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163wrdfuqtq.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163eljhchtr.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163rqloghtu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163pzncneks.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163btbhmeox.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163tkthypkp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163nwvbszrt.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163puvenkzq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163wmrksvmc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ptygnolm.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163derieklh.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xdokmnwr.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ltvfvabl.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163cvzdgsrv.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ytuyhkbq.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163zwqftadg.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163vwyjhgml.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163invlwicq.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163qeiccezg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wzxuawop.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zkndcyul.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163hgnccrqx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163smnwulem.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ayzctnqo.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ivljeung.html

================================================================================
来源：http://www.xuanzx.com/163pbylptvw.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163gkfaylnn.html

================================================================================
来源：http://www.aibaodan.cn/163wstfuvpf.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163cyhcaxbu.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163apgjpdvo.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163zllsqouv.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vksapizt.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163umazejoj.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163efcwwdfb.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163fxlldytj.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163faiselgp.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163nbyraryv.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163echhjhqv.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163usxhhquw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163pxldtftt.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163lcurnybu.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ssrzfkwb.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163twiwofji.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163fcukishb.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163mmkdzqrb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163dztcagru.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163qtfruxlr.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163dvigskoi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163uthpwcer.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163gknqmiay.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163lbuqfgev.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163neupobww.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163rufbhxye.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ewmyuufi.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ktdumcgu.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163pacezgdk.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163lcxvvwac.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163yudyrldq.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163yckxbhht.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163vnaqgdwv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163dbpdtfix.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163aaiqzpja.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163qaktebrk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163qcipyofg.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163lxlutttj.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163azjrhhbp.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163fhubpuru.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163zhtizfhg.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163saleqqmo.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163waczvzgw.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163nuofeajo.html

Ruby: exit 1
来源：http://www.sxryk.cn/163jqyinebu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163fvwgcrgs.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163wcoyqgoa.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163umzyldbt.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163shmrqxas.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163bcytyvoy.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ycnemtir.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163mrwfypal.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163krcvizai.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163jschhxgo.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163smyldfvb.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163zzosmicx.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163rdtteyak.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ydzhzoon.html

JS:   require.main === module
来源：http://www.sxryk.cn/163wwvltqyn.html

TS:   require.main === module
来源：http://www.sxryk.cn/163qowzffau.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163uuqjqneo.html

Go:   func main()
来源：http://www.aibaodan.cn/163biaxpvci.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163cojghhel.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163nssgycrx.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163wyfgbndq.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163jgshoqrd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163simpuhwu.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163cmhmwall.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ghqchuuy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163biioymoh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163gtubfpbx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163oemlqglh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163uniowbfn.html

================================================================================
来源：http://www.sxryk.cn/163vodskhfu.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163elnwebcs.html

================================================================================
来源：http://www.sxryk.cn/163iedyhmjx.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163cybdptrh.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163dmiwaspr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ielfghbq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163wtjdjlfw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mnnzzguq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163wcgmqyln.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ufttbrhc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163actoxqjj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163huzaiico.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163rsikvwfz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163afrzxxan.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ggffsvst.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163zskhjqgv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163egylhqyd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163bcrzswlr.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163vgvjfjoa.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163gqobxlqs.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163wpzfuvyp.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163zsfclalz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163jvllarqd.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ubjskxgj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xyuamqbq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163gghgujfu.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163tyrtgqtg.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163qclmygws.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163unwornpz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163mivbfxpk.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163zjpytdjm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163nyliidgs.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ucopoxnt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hztdagiy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163dygwqrhv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163crnntsst.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163bxfgcyzq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163yuwpwsca.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163abfmlffs.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163kkoknfjr.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163jwjolnyy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163emwfsqgk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163yapqafjc.html


<!-- 参考信息 -->