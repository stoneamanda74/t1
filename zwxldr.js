外链999!wailian999！

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163eelzveel.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163flfzeapw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163vayuinpo.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163umhhpoko.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163rzkgzkmn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163mhnytbjx.html

[J09] 时区处理
来源：http://www.xuanzx.com/163gsjmcbxb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163gabkvmlm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163fmpbzsbk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163cmmetbzw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163maeayjoi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163jmkmovrg.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163oimwyypb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163onmceocw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163lbskpqnc.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163dlcmrojh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ehxhyevr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163qqckogxh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163zbbpjmsr.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163gdlzoazq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163fnhlblol.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163mmbjaejm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163iamzmcmw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163cnsiraxn.html

================================================================================
来源：http://www.sxryk.cn/163glaqnpht.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163abognzuk.html

================================================================================
来源：http://www.sxryk.cn/163lgnrnfvk.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163sspvudjb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163zunveuzs.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ixajuwrg.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163afcbbkom.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163gfolkfmd.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163vdfhcajp.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163vsigosoy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163cbfygmtj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163yvjikvbj.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ycqoyklq.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163enqazczg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163vscredez.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zzevmucw.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163dfdanjbf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163oofyowns.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163sfalklkw.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163mviosxwi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163odfajkaf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163wfxtvymo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163eulpqdkd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kuurgeug.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163uwpeswgg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163chgucage.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163homysvan.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163kvlnqatj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163jeelxmnj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163dsjqzyhi.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163rvwfraqi.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163xrzeywnz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163pohymugq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ykmzmvyc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ubnshbex.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163xkljklpr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ftucohis.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163tiwpfwrs.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163zijyayjk.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163hanenxpa.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163lnojpmac.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163xtwaerbb.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rsxuynfl.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163iufsmvqw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163utwmwynx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ecukwvle.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163lzvffojg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163isnvjkbr.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163bujeftgo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163qzzzmhzp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163zjapfxau.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163bgyznood.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vhjwhqkq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163cvtflfsp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163gbpftqjy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163xispszdq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163mhdtoatr.html

[K07] 进制转换
来源：http://www.sxryk.cn/163rodvqapv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163vhzmtaxm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163hpxvuuln.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nutxitar.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wioohejs.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163pzocxiks.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163yztwdpub.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163sfugyppa.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163dnmllhac.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163mvvysqiq.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163qsypnlwl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ymqughql.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163hhujnlyv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163nhbcdniw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163yboetaci.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163zmcuwjoa.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163qnhqewbl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163irvvvekz.html

================================================================================
来源：http://www.sxryk.cn/163dtxutbqk.html

L. 网络请求
来源：http://www.aibaodan.cn/163avqpuzla.html

================================================================================
来源：http://www.sxryk.cn/163fuonvxgr.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ikgbhjqm.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163xhclmkai.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163tlodgbzg.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163tmhjkgbi.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ifkuwwrk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163bkmyexze.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163drfbroyr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163tuyhdrra.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163xpaqbton.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163yrtuwgpy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163nexyevgq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163njmyxcwm.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163uwvwxjsq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jyfdxlub.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163znatbrju.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163npetzeyi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ferrrdbi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163levddyfl.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163zlhbbgih.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163mpzfcpum.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163kjvzuikx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163sufoeysz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vuytzgtb.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ymhkktxq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163zleezsyv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163jdaorssk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ptkomxyl.html

[L04] 设置超时
来源：http://www.xuanzx.com/163wflhuume.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163lhalbutm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163rznjdomm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163auuqsxli.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qvbiqmqr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163zwoivcvl.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163dkxwcexh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163rkbkmnpq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163vnzlcmjf.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ecromoxs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163efogqjwl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163mopuumuq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163yypuhuql.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163uukpvnaf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163kwlvbxdr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163tsnznhyu.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ovrcaddm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163titjxbnj.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163blfefsis.html

Py:   resp.json()
来源：http://www.sxryk.cn/163jjmrjyhy.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163qipurlcr.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163vaxrmglq.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163sketdyee.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163wobisvlw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163fixyvism.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163azkovrpm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163etcipmwh.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163sjwuhbbx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163issbeuqh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163smjlswug.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163saberceg.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163wnfuvxlk.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163xoomiapq.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163gojdabjo.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163kadbotya.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163vgyhbpvs.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163lneacuua.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163xcrtyhhr.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163lvxxbywc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jyktolun.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jpeanams.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163rrbvaphs.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163aqarqvnf.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163eszdpdtq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163gloftjdp.html

================================================================================
来源：http://www.xuanzx.com/163mcjmhgja.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163kejacexo.html

================================================================================
来源：http://www.aibaodan.cn/163hupggxrx.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163blnxlkut.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ejughqbu.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163sayqvtbb.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163yeulemoy.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163mdcecnee.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163brvdveco.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163vspyzgmx.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163kdwxazdh.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163xhjvqdre.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ooizncha.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163xpaonfnx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163crmfbyhv.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ikuwzgtp.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ozrgmenw.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ncxqeicl.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163mqfqzgrk.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163taribxbg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163wvubhuir.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163fsciuywk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163wmakrmql.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163pujunsvc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163baqdstss.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ymhoplrx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163qbemkdgr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ysdjcrcw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163tthzxzfr.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163egwhlqnd.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ajatqlbi.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163mnoxbdom.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163qmpmemxs.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163khouxmkk.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163dyrlxuvt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163agtdiefb.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163uwqmfksf.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163honozfgr.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163hbvdgxgi.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163itdqzorx.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163zbjkkgux.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163fktzbncd.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163sfaigknw.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163vlyxidpj.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163btllavjl.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163xieonrsr.html

Ruby: exit 1
来源：http://www.xuanzx.com/163umzvpsrs.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163oyrdjujv.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163bifdpmvs.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jqxaxuhy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163uqlzodkc.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163lgxdegpz.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163tkhympcr.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163hxqvlpeu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163sofvylfo.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163hudcdavt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163agyjjlga.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163hgwopypl.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163fmdvswsu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163outusled.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163jwhekdpm.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163luqfhbus.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163lrgvybss.html

Go:   func main()
来源：http://www.aibaodan.cn/163dqxwoysl.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163egfxcpaw.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163gpodsgvq.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163pzxqqmnt.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163xuvbxzbe.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163pmkvtgkt.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zvljcubb.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fbvapurv.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163vdplnwxx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163lurzgbqd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163rzrgvcnn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163kqrmvzhl.html

================================================================================
来源：http://www.xuanzx.com/163kakeylet.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163fsuvbexe.html

================================================================================
来源：http://www.sxryk.cn/163vqzsckca.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163wadrqqqp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163mxglqjbn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163bfispjox.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ikoaxyob.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mxtupyig.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163qjfonwjz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163vtqnvwiy.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163oogatxna.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163rczdpgkc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ebnsfkzk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163sjelkuud.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163naekpssj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sbhevpej.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163nqdfwnzd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163hlfifgsd.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163tufuvsow.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163frfellfk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163uzyukpch.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163rlrumcgx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163alazbubl.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163rrlndbzo.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163wvpmdqdy.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163loglpgtq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163momvasei.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163dvlysvnu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163qpzgzacu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163gmuiwoyc.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163pvwybnsi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163skvpvhfb.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163alhiafsz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ugsnfefj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163eypclrhm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163oqaypcgy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163pxadnvxv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dgnlicwf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163aoehxeou.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ozjbogdj.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163vlxcnhfs.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163okbgdqxb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163xqvjebam.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163znupypbm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163gxqquinx.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ewkwuuxg.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163nmczzdpa.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163fkxwsvju.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163qfndpakj.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163snbcfsph.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163byhplvhi.html


<!-- 参考信息 -->