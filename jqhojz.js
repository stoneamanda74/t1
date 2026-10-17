外链999!wailian999！

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163nhtwpvdm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163rfjvwfvp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163oopvurxb.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163qsnpoify.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163gtssmuke.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163woikydga.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163gcsbxosh.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163irlqttue.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163hihbvzsb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163shygchjc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ujotqvtr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163hizddhnn.html

================================================================================
来源：http://www.sxryk.cn/163vedfndrr.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ofwvdjdw.html

================================================================================
来源：http://www.sxryk.cn/163adueyuvw.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163qoakfuuj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qebpybvw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163quketgfh.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163jsycusjr.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163gzezkfkg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163sioulbhw.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163cvcxjbnp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163wyhheflf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163gsmutigu.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163tpjaeeff.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163sdfxclka.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ndzoqiee.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163uyofhjjd.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163dfciqeag.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163vdtqjyjh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163eprbspoy.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163xgcmlemm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163urhesfst.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163rmbvfcxk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163orqktwsm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163gmvdgpyh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163qbgbqdqn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163kgzngkda.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163wancjhmk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163wwufrzpb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163tnxnoerm.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163kyonswut.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163fjrcvoex.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163gteozjhn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163tylgpupg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ybzvixtb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163fgnartsb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163cgbwmuhk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rrdtstwr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163wmiebysw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163fxovabrz.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163hjjdsytd.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163tgflpvux.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ejdvgtoe.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163djgotcdm.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ocaasfof.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163fodvnkvf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163psuzhiua.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163elzczxyg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163trysygkp.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163pnfmpmgh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163veqwbasd.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163swfhbcie.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xylubtha.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qbdegerr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163onwwpgnm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163imsybyrt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163lrgnfcsu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163pncsvzar.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163xljytgin.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163peltroya.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163bqewwuaq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163pxoxmhns.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163krkjdeiq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163naafhtoj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ulsxuovs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163soujqlel.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163echkuzrl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163vldydfoi.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163msttaepi.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163nbthbmhr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163limreapj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163trjjcpam.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163jfxmpath.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163eopakbej.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163tgedpdzp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163vorlgpje.html

================================================================================
来源：http://www.aibaodan.cn/163yepryxig.html

L. 网络请求
来源：http://www.xuanzx.com/163scpfytdw.html

================================================================================
来源：http://www.sxryk.cn/163yzanxmkx.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ltjyylkq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163drorvuzk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163oqjyuxua.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163ngxasryu.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163awepuenb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163gszrmuuu.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ildonckh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163dqpgzzkj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163gylgzrff.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163icieyilp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163svcfjsvo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163jtjzwuwz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163fvvqndub.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163dcdccycs.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163bynjvxhv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163inlmnxff.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163jvoooxai.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163vqewzpqv.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ljvsjobs.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ereyxlfk.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163vmyudhxq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163sumacmbw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pmlewvdh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163nnaaqgeg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163vwmmccpr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163huoeccuv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163upspycyv.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163vwoefpmg.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163cacjmbrh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163dismigig.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vpgzhdqd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163adwpefpt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163nzbadtpl.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163jjlwuajh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163hgdfekkc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163icovqxhz.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ohhxvfeg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163rucmorvz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163hllnxdxt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xpwlevyq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hagfsfdy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163uzurmxsg.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163kqvkkegy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163iuazdoin.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163btoofgrt.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163dvasyagt.html

Py:   resp.json()
来源：http://www.xuanzx.com/163etvfonrv.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163tabthoqz.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163alhuaavo.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163xajpccup.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163oddrvlcg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163tgrxvkde.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163nynsijgk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163hqvncanl.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163urzdsulv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163gywwcywn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163zwdvbxkf.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163fouhmzhl.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vqdrptqj.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163uqfjheou.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163jrgugejo.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163xgfhrqdi.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ykrmvdkm.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163gbktryto.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163xothiquo.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163zxrsvnvz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lifhaowx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163udpnzqtz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163oxujzjte.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163yqqyscgl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ixvnqbno.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163jsdafbke.html

================================================================================
来源：http://www.xuanzx.com/163anjfpsmi.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163hsnrasej.html

================================================================================
来源：http://www.xuanzx.com/163cxurjtpm.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163jkfnurah.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163opxmannv.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163qkrljixf.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jxnnlezb.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163pleydgir.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163zvjdqyuj.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163jsnmcapa.html

Ruby: ARGV
来源：http://www.sxryk.cn/163nhvvrhem.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ekyawalm.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163gfcsydnn.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163rmlwghhs.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163uulwgkor.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163brirwtbi.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163qwgoucpk.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163robesudy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163sdillyew.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ctunglnl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163dgkhmocv.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163lubfexoa.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ojiisirj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163otecgqev.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jlrsvwpw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163repqfroh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ydiwfyjn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163udpncouu.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163dpagzobs.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163jkcticut.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163hlkbkokd.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163naxpnrfq.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163xfbbibkc.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163xctmpkzd.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163uwsrwzxn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163mfzgjpzj.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163dumkpicz.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163poszfnup.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163tvghkcov.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163wsjwecil.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ehqnedjb.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163prxssfqm.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163pjdjmtfg.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163dpeyzhfn.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ppkudlnn.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ajlbipvp.html

Ruby: exit 1
来源：http://www.sxryk.cn/163dzxwtgyw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163spmtikxh.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163myftkfmx.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163jonmgcpu.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ovrogxfw.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163agxogbns.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163hocsuwwx.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163qrjuproo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163nhxfcvyc.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163uavxvfrm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163yikziqjg.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163krlxrdli.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163wvjvxhrv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163fwxxelnr.html

JS:   require.main === module
来源：http://www.sxryk.cn/163vxhnzdpl.html

TS:   require.main === module
来源：http://www.xuanzx.com/163omdumpqa.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163qczvbrqq.html

Go:   func main()
来源：http://www.aibaodan.cn/163vvjljpcu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163trdqxavg.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ntegfqdq.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163abfqiyqb.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163kzpikiwc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ectfzsrj.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163dzxihmxt.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163tucdvxfi.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163rgnawyly.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163nclbvsjs.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163vidoecca.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163csylpzyi.html

================================================================================
来源：http://www.aibaodan.cn/163hvvetwyw.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163tfpxszqy.html

================================================================================
来源：http://www.aibaodan.cn/163jhfzprou.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163tirjtivk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163rctcoumy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163opjjnapv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163cdjlhtwr.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163rqcauwva.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163mrtqlxsy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163wveuyutn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163pwubrgux.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163thdlcsps.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163uchbtacz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jagusygm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163sekyshvl.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ucpajxwr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163syurmyrk.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163xprpbjau.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163hlezhgjx.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ihawcgab.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163uuvixsmo.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163fdpvlbcd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163qdbrattd.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163jaoxtowj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rxvwgtpw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163yrdnekyc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163kjukqskq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ureuuzeq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163odftvxos.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163spmgjkhf.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163vflkpzyi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zlbodwav.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163lbwmecej.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163kqtyxvfc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hcfnreku.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163jiftetni.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163zigediux.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ifpznplj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163yznqadzk.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163dhxhasnj.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ogsytbpu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163bxtlrein.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ewpmcqor.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mugnvfqq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163lnjnsloz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163airmtxeu.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163wkkgxrqd.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163wwpwntyr.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163dcrnthpg.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163pyzjjzqj.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163kkieouji.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mjpcecjq.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163lyysykus.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163lboktgbx.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163tyqlwcux.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163mdbnlfel.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163bqloaupk.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163qwzxnrck.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163nnjrlclx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163flpovxqc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163jpjcaxeh.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163jomllrlz.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163kppnpnkk.html


<!-- 参考信息 -->