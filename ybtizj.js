外链999!wailian999！

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163aprtltlp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ilteidvw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163gwsgwkdt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163kqbnqnom.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163wnyrpszp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ycteqzqm.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163trsjntis.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163gsgrakzv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163sqqywgeb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xxapxumq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163annctfjo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163upaixoal.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163dnaadwrz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163aiqzlkys.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163mqtvtcch.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163dtuaeidi.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163vhkrfylt.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163fbkofrkt.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163qjnsbxqx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163zehvlyck.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ewidgpdk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163khvwxgac.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163aafuvhyv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163yegpcwtl.html

================================================================================
来源：http://www.aibaodan.cn/163sfqrfaal.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163mnfhwqum.html

================================================================================
来源：http://www.aibaodan.cn/163cpwhtgvq.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163etqduqbu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163nnnobhvg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163cymcrylm.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xbyoaqxd.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wzkhwxrx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163qbolxojr.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163mwrjbcpp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163rhhqpkos.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163yipcxnpk.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163noklpelj.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163hwdsmxbc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163vrbksbab.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163fjsanfop.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163avyovgmd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163pcoelwmj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163wvitriyw.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163qskvbnys.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163nytevczy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163tzgbbeho.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wfogpisj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163mwlzwkfb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163vqwudwrg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163kveqmryn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ojwvjnce.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163zfjhjpey.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163lteniqhn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163zpjkqdeu.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163zbrxubrj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163nmjotmab.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163fvpcqntp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xgohnibj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zymqjwtc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163zqelleqr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jlgxunib.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163vjipsydf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163qxbqsdxg.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163sppcvvbo.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163hqlugsnv.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163vwpgpzkm.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pqxcuqxl.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163qnjzjlnp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163htcrxzlq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163sbmozznv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163kupbqwqk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163tvabdbmd.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163dqcaechd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ekxcevlc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163psbgibwu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ostacptu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163htwjrlyz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163gvpamvxd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163ogxlkblw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163fhuvyqig.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qijxxgvn.html

[K07] 进制转换
来源：http://www.xuanzx.com/163bpawzdvv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ybryaudv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163acupnamd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163uumgwlpx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jpikcufv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163trrnzekm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163qccndoxw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163flhfwxce.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163nijzelgp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163qwvlyqsp.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163nhnofeer.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163mtmdlell.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163nnzidblk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163epyzisxk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163kbkqyorn.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163dztznhhv.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163qjysztwt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163cgtvmues.html

================================================================================
来源：http://www.xuanzx.com/163vkfxymwn.html

L. 网络请求
来源：http://www.xuanzx.com/163ffmwnckb.html

================================================================================
来源：http://www.sxryk.cn/163yktuqwmn.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163nsvkvshn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163rhlvdviw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ufpgaoxv.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163woqmeezi.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163kaizxcwu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163rxdhaost.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163yhcpxtvu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163auiiqtqv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ftsvxzgv.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163tfnqlews.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163wrykeawr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ofntrtvb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163lhegobmc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bfncczuy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163hcxnicoa.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163xqovvyhp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163cbxpiuiu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ygaebgou.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163prsahmbs.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163xdnkddtc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ikibpgmm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qnmlqrfr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nirqiccp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163kjnkirsn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163qcvzvkum.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163iaahxama.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163peirkceo.html

[L04] 设置超时
来源：http://www.sxryk.cn/163getglcvo.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163jaabzhzq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163lvcfyhpq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qeqlgbvl.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163dithnucw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163qsgsequo.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ypwaqqof.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163vlpikgcs.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163lztjmvcm.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163vcakmqys.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163sgewmldx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163xoxccncm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163kihbjmut.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wzumknmu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163bgzrugti.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163xstiekiw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163lnimkmgx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163abiswpyr.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163udubryhu.html

Py:   resp.json()
来源：http://www.xuanzx.com/163csirdsfh.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163kktfuuzw.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163bcgyewvn.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163lmmslvry.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163lsyiqmnz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163nrnqxwbc.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163jsvvibkq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163zdbewlmi.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163vewrwclj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163nqzmepem.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163wvrioloq.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163gqhexkgf.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163iljaukut.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163suztpwia.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163cwecidsy.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ucmbhjxh.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163jcdhezgu.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163rpjymdfk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163qmhiuvts.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ktpreozy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jrilbaem.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163wlofyqji.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163lmagonva.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163grqzjzzh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163oajbdrpg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163rvepmxtf.html

================================================================================
来源：http://www.aibaodan.cn/163pzxzrdnt.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163uimdbcah.html

================================================================================
来源：http://www.aibaodan.cn/163rohouhku.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163hzmwddlz.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163pmpugeog.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163tbbkxvpn.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163cxmuxmsl.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lcklwkus.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163hutzzxba.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163gdmisnov.html

Ruby: ARGV
来源：http://www.sxryk.cn/163txiivvsb.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163vpjqnumb.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163pazqihvz.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ljzgruju.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163lryvzzdj.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163rcqzdixp.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163gfusfjpx.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ncjgevrx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163uliaojwm.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163jhnxkiqx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163grmxpktd.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163gkpghoqj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163cllsfpuw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163rgkxhsdf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163myrzpuyx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mricgwqd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163kbeiivfs.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ghmpdohv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163jloqizel.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163fzojaere.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163rapuirxg.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163oerpuklj.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163hbiktleh.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163pzprwkjz.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163goseulpq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163icteqbzv.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163vprhqsyt.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163vkcrhuun.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163bwaptxmm.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163mgqpqvwu.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ayhawfzl.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163hcimsqqg.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163iyrstyau.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163eewzebtu.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163hlpxebax.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163qlevzepn.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163hbsmthlg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163pqxmxxey.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163dcmhrigr.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163enopfxbi.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163wldydibd.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ctymunrp.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163hdzfrmci.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163nxgrlqrn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163gmlofber.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163zflbouyz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163fvmwqwtu.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163wovgznlg.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163hanplpvx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163jscuazwd.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163dnmiziur.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163fnildywc.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ufusblne.html

Go:   func main()
来源：http://www.xuanzx.com/163rluicmpa.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163komuwtmv.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163uigsyknc.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163gmenyira.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163uupfxqsr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163otkferau.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163koalsrag.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163kcagbspv.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163yrpvvjpi.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163rdydeosp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163nmtjuagf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163kyagvfgh.html

================================================================================
来源：http://www.aibaodan.cn/163oalcaruc.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163llikqljv.html

================================================================================
来源：http://www.aibaodan.cn/163kkqhmhaa.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163krgpodsq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163rcaprmpb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163znnbcrxz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163sxashvxy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163frsnihot.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163mowniowv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163jibeummd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163qyslryjk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163knczqkxw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ztoazmme.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ioykfrgi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163mczuaovl.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zzojcpys.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rvdpfrvw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163pzzvyrnu.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163fktzxzfv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zdhzvdfq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163sghypkle.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163lmhotkwy.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163rccslcym.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163umumwnwd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jdykozbz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163icwvzibm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ypyccwce.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163fomtrogl.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163zqwprewx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163khgarzfj.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163foqvstdb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163fhfdobei.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163fiygetko.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pvfqpaet.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163cdkatykz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163dumecgjn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163vxqnvtwr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163gmqwytom.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ihqbssxh.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163tsizkuaf.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163kxhkxwtu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163asiltwnq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163sgnfzvhc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vcupzgyr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163tvevmgdy.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163yyqzbenb.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163pnlucllb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163xfvtobcj.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163cglbzruz.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163lrracdsb.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163kgjagqpp.html


<!-- 参考信息 -->