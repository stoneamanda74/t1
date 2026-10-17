外链999!wailian999！

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fclckoim.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163tzopycxx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163csmqdeaa.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163obhlbbfb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ccroeqrq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163rfrlrpvo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163hmqdykup.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163cdkevkqw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163aaozygak.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163nqxtpmkq.html

[J09] 时区处理
来源：http://www.xuanzx.com/163wreepuye.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163zttntxmj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163awxqyfog.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163acgvolkq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ukahwowz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ycvatvzm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163cxegfhvx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163htuwcodq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163qrjfheta.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163uqokvorw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163cglryxof.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163zwvxypgt.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163cnmemwpf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163nvorhydz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ltglwmxi.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163glnwjjji.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ligjaskz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163msiizkem.html

================================================================================
来源：http://www.sxryk.cn/163kwevmlrq.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163jejjemnz.html

================================================================================
来源：http://www.aibaodan.cn/163dylutjrt.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163tzrxnanw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163rvktpxwq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163htqaplqm.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jtnkglxl.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xxuupira.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163jveijhqa.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163zvfdfxqo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ddtsqyvi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163zsfinayg.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163vlaexylh.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163murjtddy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163isjounwk.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163cgqqpvdp.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ewrmerzo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163cgtesmks.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rouetnbf.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163eeismewy.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163vnoyrvut.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ymxahgac.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ypqkevuc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163oktztufo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rcnslltb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163fomjcbbl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ygwfdtua.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163lfedbahj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163frwzsdqa.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163vfonhjze.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163fjlodfvj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ysxcphll.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ffxegoqk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163yimcxfuf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ioglmfyn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163bowerhev.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ylqkqkob.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163xtpmwvdj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163reyfmqdi.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163vkipvutl.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163nfpwyypn.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163sezxziow.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163canmsibi.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163rqbukwtq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163pcvrvgmn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163trfyehzz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163tectvfsz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163tjopjpfx.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163kvtjhawp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163oypqnkpd.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163idsbxegl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163hcjwcfhs.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163azhkxbct.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163pwzhrdmv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163xunpbjwl.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163kcrzuvhj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163egcqnjll.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163umyyndco.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163rovqcgee.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163qsyefpzd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163oapsmkep.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fdvnlctt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163qimtnhjr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163xroexrrl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163wxrywwgg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163whqcmvwv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163rnqwzphj.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163qybetbws.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163zoqsgrhs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wmeofqej.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163caprmjef.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163lodrcsur.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163zqzgokio.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163mduqybpx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ktqmojyu.html

================================================================================
来源：http://www.sxryk.cn/163cgrnanva.html

L. 网络请求
来源：http://www.xuanzx.com/163plvmmcls.html

================================================================================
来源：http://www.aibaodan.cn/163eowdgczn.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163fattefga.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163odqctavi.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163wmvcmgqh.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163aabgnqhg.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163snvhrfva.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163mtbxllej.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163cdkkcebl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163rcwzmsnk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163sqmtxsan.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163waaeizic.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163crmqxokq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163gweidcnm.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163wtidoxvo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xftlomee.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163pzjnpkto.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163mgncvcdq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163usbzdtou.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163vkdmzepd.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163neijjeri.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163vonqfkby.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ztqenrhy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163yisjjhkz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hyziylmq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163dcpyebow.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163zbcteqju.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163amgqpbvp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ftusstbt.html

[L04] 设置超时
来源：http://www.xuanzx.com/163djvqscqq.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163llzkeune.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163dowycptw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fqxiddks.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163kdrxtsau.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163kqlavdef.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163efuaukvl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163utkhdbhr.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163jjniniyc.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163xlrhodqp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163eybxmqav.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163doeqtzkh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163hvohjxqn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zuldvobb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163spisookp.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163xsvzlcgp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163auoatgrh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163rkdozydr.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163hxsphgck.html

Py:   resp.json()
来源：http://www.xuanzx.com/163nglobenv.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163raupnqwa.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163batsrwmb.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163itiqttzw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163mbfkrdum.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163sempuwwv.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163megmufgi.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163qietheoe.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163yuzlkion.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163zeefkpmp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163qepaaaak.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163sttltojn.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vjofawfp.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163mvqyuqfd.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163cerzfxxi.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163zshlholb.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163tjdiedzj.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163kkcvspbc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163agptidfj.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163zyzxchtp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lwnnrzmm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163apnwhfyf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163wutmripu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163ywuuopoh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163bzkmuxmb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163bzwticru.html

================================================================================
来源：http://www.aibaodan.cn/163qlruzadk.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163djpqwaov.html

================================================================================
来源：http://www.sxryk.cn/163sfcyuaxh.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163tlnnmngx.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163unydomae.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163lrarawjw.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mjftesyy.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163rdfcxlqv.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163gugnloyc.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163hkbsgtzf.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ngswhcwv.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163mxgyqoqn.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163xzaczvon.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163itfvnmej.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163mledukht.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ilyydebz.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163aoahwsdt.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163hwynzkou.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163nhpgulty.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163auoezebo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163mmcjlksw.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163jkxrbfzx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163fmrltjpw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163pnqumhzd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163udkbojgz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mgiglwca.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163bdqzoipj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163mnahhyut.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163svfjiirp.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163orvfcfwj.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163nnollmhp.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163coeamelk.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163nfydvwbs.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163imaavamw.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163rumkdczf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163igstmchn.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163msalmmya.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163zgzidjvj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163msraoegv.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163rzikwecm.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163egahximz.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ecfelite.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163xwqzrafe.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163tmjnmcun.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163rshvxsdh.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163vgqpytsj.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ksaiiecp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ozbkdyhb.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ueyrajvp.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163fmckprdc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163xbqhxenz.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163wimxvetf.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163xzuhojgk.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163yvbmxnrd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163zojiiurk.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163fiuulrhn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163cmjgfbqo.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163cnvtnitt.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163zncrlegl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163agjmdlyi.html

JS:   require.main === module
来源：http://www.xuanzx.com/163vxqllnca.html

TS:   require.main === module
来源：http://www.xuanzx.com/163bjscmdse.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163hsnxrgnt.html

Go:   func main()
来源：http://www.sxryk.cn/163iucabuqt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163oxbqlzba.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163mywwcsgo.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163uwrebzku.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163gyhvsloc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163rvhjobvt.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163pmbyylrd.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163cdlqgnuj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163nawdwrfj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ovdorufr.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163etgjbwjl.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163inecctrl.html

================================================================================
来源：http://www.xuanzx.com/163posybjqv.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163fzagroqc.html

================================================================================
来源：http://www.aibaodan.cn/163wivendqr.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163bijftrnu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163kkchditz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163pxqwdnur.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163nfjsvuoy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163suhmwmhl.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163afvyupus.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163nhzwzlwo.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163latdfxll.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163hfmxxkjx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ikjtaama.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163phqcloce.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ehcbbxyp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ujtdwmum.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163vksqhjjx.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163xgodrtzo.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ubjrljfk.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163hopvxnoo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163scmzkego.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163fxoqjwja.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163zgxpeozb.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163vsoclene.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163pzkrdbgc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163dvlklmhk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163kcstdbyg.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163sfybgejj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163vwotngkl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163eimzivch.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163pinrprlx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163bxaseqzi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ktpudbwh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xgeijnyy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163sqkxtwlv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163udpgoyvq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163sxuvhakv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qonpamkp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163lljbcylg.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163pseesihz.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163wmwnldca.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163uaarcigh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zhoikoiw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163huhqzadn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163rgtoermt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163nmiuotml.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163fndrhrks.html


<!-- 参考信息 -->