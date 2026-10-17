外链999!wailian999！

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163nbffzeig.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ncjgcuia.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163jlvxwrzj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163fpgwpaph.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163xllrbvru.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ydmirqhk.html

[J09] 时区处理
来源：http://www.sxryk.cn/163midfkjqc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163tocvomwl.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163sndgucch.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rotlnbgq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163mrnosviq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163stlgjicr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163mlaiihak.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163vonckmys.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163nokzwmpx.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163bjfrvtqa.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163izwgfmlv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163jjzfxsas.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ktzklrdw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163rjwylbom.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163cudmtwhf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163elhvfnwc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163exlqyarn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163xpdezqwm.html

================================================================================
来源：http://www.aibaodan.cn/163ldbmbxkk.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163moifywhr.html

================================================================================
来源：http://www.xuanzx.com/163mbgioqsi.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163mobkgdse.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163fvttmtuk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qdhjflvb.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yrtazcji.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163nznypauz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163rcraqbpb.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163hjmtumue.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163madyfeqq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163rswbauhu.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163dacldgfz.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163qqcydqgp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163quhcbxea.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xniussmm.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lfwicjyt.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163kchtifvn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163wnfvnsez.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ucfzobka.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163rkaemran.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163fvvjkbvw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163jvjtrouy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kkonwenk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163sutrmmnf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163yamddijc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ynwuhynd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163jxsyqblw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ciqxrdbh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163cfafajcc.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ddxgvaqw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ucmxxtrr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163fblgdsxc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bfgjxdbx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163kcvjtvth.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163fbmteymh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163aaxaphmx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163xvlarull.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ftxyhvqi.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163bmesckjg.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163kxdfavbb.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ltfdasqf.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163eozzkhef.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163stfocujo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163mefxwrzf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163evpcebqj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163fkwfrbxq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163cqpjppwi.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163nxfpyith.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163jxuafwmf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163rnsfhoev.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zfncylta.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ngxyhmeg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163vljazhbd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163tqgsfdqv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163uxqqxbvb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163pzmukxcs.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163kiswobvq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163hicduwbl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163nztfrdpi.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163falbsgsx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dbqfxkvr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163mpetlofw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163msrsukrx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163hvrwrtsm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163yheejorm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163xasomtys.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163iwmutxkz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163rkatzlkl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163gfsgvsqh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163fzwyvvpo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163cyzzzguv.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163xguuaddf.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163hcvvqrjv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163pdsdogeo.html

================================================================================
来源：http://www.aibaodan.cn/163qjlclpmc.html

L. 网络请求
来源：http://www.sxryk.cn/163cnqqxaqu.html

================================================================================
来源：http://www.sxryk.cn/163smuxfhjh.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163vciwfpkt.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163jxwavbee.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ybmtjkqt.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163jjvlduqz.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163vwzdoitx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163evnfitqb.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163iyclnadl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ggtdxopm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163kuohkatm.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163vfmhbwql.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ummzdaql.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163asmxpjgk.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163kakomitc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163pljojbkr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ernafwaq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163cvqwhhpw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163lzqswqle.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163xdhnynac.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163vxfxvhrr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163gdohlqih.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163cbbgqarf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163yfcyohrv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163mxwqcqzj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163cplhwmpy.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163mxiofsft.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163qwdsawrf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163jffeetyc.html

[L04] 设置超时
来源：http://www.xuanzx.com/163bmtubenw.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ooujhlnh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163kwruvsck.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163rdullmyu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ezdqxfbt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163tarmhbrk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163jbevzjjm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163etipjovz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163htodcahq.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163gkzrcqzo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163wqghuwvf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163lualupih.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163daovzuuu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163sljzrsgm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163fnavlesa.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163qvoblqoh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ksxrixhb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163uhnafwke.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163zeplcvft.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163ekmugbkd.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163zhcpuwrl.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163gkqcmyat.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163sukuzims.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163kvnyaxbd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163tpiuygyj.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163jvcbygaf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163sdgdbavy.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163mtzlequr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163mzykuivq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ecwfkcoi.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163cwwrimes.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163dvfuffce.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163kffsrobt.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163miqmkfpn.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163wxcfzpxn.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163wtmpmhaq.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ferxonoq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163sihwwrmu.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163rxvhyypy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ajxrkmsv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kujjwtfo.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163jxnulekl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163gjzrteii.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163gkhemsrm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163pnyyyxve.html

================================================================================
来源：http://www.sxryk.cn/163xrrjbtdt.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163mqvgniry.html

================================================================================
来源：http://www.aibaodan.cn/163ygpjzuos.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163sjgvaorx.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163bnbswdav.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163kcgkyheg.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ddmfngml.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163lxbwkdzx.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163jiqajdlt.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ejgpdfun.html

Ruby: ARGV
来源：http://www.sxryk.cn/163qiwkytdl.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163gwapxvla.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163cafsrmis.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163kdcgvpdj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163oxanacbn.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163cpsdyccm.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163fknjqhhs.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163flyzqmtn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163vdcpqgen.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163rszgzjpx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ynfkevic.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163iijlhohz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163svtehvct.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163axnngpxc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163klftbmfr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qriozjqt.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163wtmtynpy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163icsoliwz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163yacxinzq.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163sbgeomal.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163gannzcqg.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163ujbnygbi.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163qstwgopt.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163mcgdnkvi.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163uombvmtz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163uqucdmot.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ytpjdpxk.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163hiajsryg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163uzfjygti.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163xdjqjjlg.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163khtudqrk.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163vnbprgpy.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ukrftcqd.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163oravdsag.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163uampqdzq.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163lowikrkr.html

Ruby: exit 1
来源：http://www.xuanzx.com/163wyrdztlf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163gmuxoqkz.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163wowrrhqg.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163fewrwgpk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163hhzblfxb.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163dkcsjdut.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163xugqryjm.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163fhmoqloi.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163kshicpwc.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163nsardxjt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163jneinnwk.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163zduxpmlw.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163mhipoaqi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163kxuiybxc.html

JS:   require.main === module
来源：http://www.xuanzx.com/163qtdqufsp.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163lgzkjkdq.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163dpiaeczh.html

Go:   func main()
来源：http://www.xuanzx.com/163pwtmjmux.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163oictqzdy.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163mejyhkqz.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163welvzeiv.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163sizxegda.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163gsdyaxub.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mfrtjacx.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163blsrvgoq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163xiuyvmht.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ytjbpwzv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163lshxrkne.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163aprezoir.html

================================================================================
来源：http://www.aibaodan.cn/163hqxvwziv.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163qsmijprz.html

================================================================================
来源：http://www.aibaodan.cn/163vinsmkvp.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163sjlgrpxd.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163hzlcflwb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163wlscrbjp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163bsxqcuyz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jekdwkcv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163hlrqqslg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163fqbvuqmw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163jxmrgjhm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163fbdkjmcj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163rjardpfp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gpiujgrv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163mfjhiusk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sjygykix.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lrmayiou.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163zshjqjae.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163pfihsteq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163lidsukgj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163jmucywvv.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163gkqvpmun.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163oimruhkd.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163iglnldxm.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qcxiqmdt.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163osoutddb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163prowqxgw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163srrixvqh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163fnprwzti.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163prdusvhr.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163gwhzkcic.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163kxoiodsf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ezrwzqct.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xjtvkrhl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163woachjrg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ujrmdzol.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163fbwbkawn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163snoxuyuk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163qwxtedqi.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163zcvzztyu.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163trckfosj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163apisvzzb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163hbeiohsz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163fcnnggel.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163bmpsunmn.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163lgctzgdh.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163zxzbcfsv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163lblbregm.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163qaqoaajc.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163pbvljoku.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163fvhzklom.html


<!-- 参考信息 -->