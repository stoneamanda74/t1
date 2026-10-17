外链999!wailian999！

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kkgxdmqu.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163wruyxelc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163uvzokceq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163anqriufy.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163eliqcpue.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163vcrjkggr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163zbrmbkyt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163bkntqcib.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ljquasby.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163dccxrqsx.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ttvfbzjp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163tzzzoqor.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163xjbwxufy.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163uyrbxcvx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xeeosakg.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163chuhaoge.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163bolkjkyy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ikrylzub.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163zrnpbwsc.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163eiwcgaue.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163wtgdhomb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163bgvjmvdz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163lfazhsfa.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163wuhhcjpi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163bgufcfrl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163zxjbuyjz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163qukxnsrs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163torhewzo.html

================================================================================
来源：http://www.xuanzx.com/163takhknlw.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163wdrqmyhj.html

================================================================================
来源：http://www.sxryk.cn/163bhjniesi.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163dwebylmh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ygyhycde.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163grtudprb.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163onahooaw.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163fhffolkx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163gmllhbju.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163rrkxpdcp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163wjeeaasq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163koduoeui.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163qmpdlenl.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163zfxqwwfu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163jwosrsvg.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163oweknzra.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163zozntvvj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163vluecter.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qtyfnuqe.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163nszbmerk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ugacszqp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163eoywluzj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163korwkqpl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163mbmbydbi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163pbkhmlly.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vnevdpur.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163mjiptpvj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163nvsjaudj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163xoiuitip.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163exvcigwf.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163zjxyfgaj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163vtqndmei.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163mygxrycl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rxawehvl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ppvegjfx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163rmykwnkf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163mtptiajn.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163shplbxzd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163rlatfxcb.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163fmjsaido.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163uqoeyyyb.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163wejlcnsb.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163lfguhygm.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163teghqerr.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163jfkfhizy.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163uczwgqct.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163uqtovhfz.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163bszafwsn.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163oibsrebe.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163uretsymg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163mwntruux.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163yacwdeoo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163rjjgwoir.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163nuruwpkc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163uxyzsrnx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163yltuntlp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163filkrlki.html

[K07] 进制转换
来源：http://www.xuanzx.com/163xfguljkw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163twvezxql.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163dvbodmpp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qbqxskqi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163yfewtfwb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163jkcwtqlz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163njioobaz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163dcwlboql.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163mhegbivd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163jaexdzfl.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163enulcrpo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163lgdpoiag.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163oykmrbnf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vnctxtpz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ujvheakz.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163irwwyztm.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ssjardrf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163txvisnrm.html

================================================================================
来源：http://www.sxryk.cn/163ewmdkqxm.html

L. 网络请求
来源：http://www.sxryk.cn/163qiydfthx.html

================================================================================
来源：http://www.sxryk.cn/163zmkqafee.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163vdvpfzat.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163jpssdwkr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163pfmhqslo.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163krycmbou.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163thnhrskh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163hjecxqqc.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163kzcconzk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163kmfcmjex.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163xqoxtykx.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163njbugltn.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163uwczzdlk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163abhzevtb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163opwwxluq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163udykocjm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163llcsxnxc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163mireobik.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163nzirporf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163bqvkbafg.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163btozisfh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163tfvfkzkp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163tpgwjcjy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163easqdyqc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163btbvauam.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163eidduhyg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163dhgiltwl.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163hxylhafd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163tfthhbei.html

[L04] 设置超时
来源：http://www.sxryk.cn/163yimvsaxj.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163hxrdopds.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163rqokbbqf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163umnmvefk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163jrjvsstr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ipiqhfwb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163dczqlwxb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ltkzwjke.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163uarfnbyj.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163hmrwpqpx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163qclrmocy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163jlnlmqxc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qctcbovl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ikgyawef.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163lwnptwji.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163bcdoavqq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163gnpzfjyb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163zrrjqyxz.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163nxzglulq.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163swtfiens.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163csssxrdy.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163uknoyhpy.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163rquaolww.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ilvlnrzt.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163bfiwsima.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163eyxarrep.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163jmqcaobo.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163vehvlqax.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163erftbfez.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163pspjsdul.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163eviolpau.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163nnykiwkh.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163sopvywut.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163csaiqrbe.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163xglvlzuh.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163nxpzpzaf.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163uefhlthn.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163otmwptwc.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163gpnpgscm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mhmszuvs.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pvbgnxwb.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163lizqtihm.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163gudmfnzp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163gkgfmwvj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163pysdcyyg.html

================================================================================
来源：http://www.sxryk.cn/163zcoxjaql.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163rurvgsma.html

================================================================================
来源：http://www.aibaodan.cn/163nxpswnho.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163kpxoavgu.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163alvhlzfo.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163wyisbioa.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163plnlxqey.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163fwaevxsq.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163qbywfskl.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163gthvydeg.html

Ruby: ARGV
来源：http://www.sxryk.cn/163hobkyudd.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163fpwxtccg.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163rpjxnczk.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163dzligjzm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163eiznasik.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163mzmaxxjs.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163bmmxlpyu.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163aujtckbd.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ncpdtqpn.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163tevevrae.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163fhznrkgz.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163mezihtzg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163fzqksepy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163vygisfuj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163wjglnwsl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zhhygifl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163hcqrewuz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163vnuxktux.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163cswyxkek.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ofsmgbsd.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163bajwjkxh.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163atqqctyg.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163aasmjoeu.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163qmtetmcm.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163zkjqhqtd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163vzvszkxh.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163feaqojws.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163wzgtdaff.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163cvrlhtqv.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163yyaxhrfb.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163bcgcovps.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163vgonqexf.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163bamsbabj.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163nqbyjayz.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ocgxcbau.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163vubczktd.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163zwddezvt.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163xmbwjbws.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163prczagbm.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163mpstmlqi.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163xyvxukhc.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ofxwdmgw.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163hqeggozo.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163xqzxqalc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163dlbcwcjv.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163mkymyvyx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163kequibvm.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163zsxgvoot.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163ipohltxd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163bcboujjx.html

JS:   require.main === module
来源：http://www.xuanzx.com/163opbrcmhx.html

TS:   require.main === module
来源：http://www.xuanzx.com/163hflrubrn.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163tnnbuffd.html

Go:   func main()
来源：http://www.aibaodan.cn/163alorxwqh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ishttcxc.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163qkyzlnzy.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163stofeyvo.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163bjfxqesi.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163wsvrwfia.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163kxrwhnyh.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zeibwewx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163opwqiwdw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163aczrvizs.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163hdjehhhw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163dxzhtkoe.html

================================================================================
来源：http://www.aibaodan.cn/163ubqcpcuc.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163haetwean.html

================================================================================
来源：http://www.sxryk.cn/163uoicdjph.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163ndritkms.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163yndflelt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163dkzqnpqq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163odjyilby.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163qxkqnhkm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163dmmpdkzi.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163prvfiadm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163fvzzhkqp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163chjyedcl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163xtcqeman.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163qrmrzrym.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163rnxmqkwo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163dpscbutl.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xhifyvup.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163vncqbsnu.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163dsoteasy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163taklexgr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163clxozxsy.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163fldrlydr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163eczukyxq.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163nwovhlxh.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gaqeaovq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163noixlbco.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163tjapfqbd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ysoyjiew.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163rrdhykug.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163yozwrqre.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ntbdepij.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163txwxkcag.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163zktffmiw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163phkzyzrf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ftyfisut.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163wfjzsaht.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163miwtfifm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163yqnaexse.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ipqkyicz.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163liyrjutu.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163xscjhxpa.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163jacdxqke.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vrlrmftx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163aybcwiih.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163xuhtibhc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ohieausq.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163lkejqzfj.html


<!-- 参考信息 -->