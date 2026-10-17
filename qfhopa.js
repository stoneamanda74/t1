外链999!wailian999！

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163chuzvrgb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163iovcbkzc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163zxiibmfe.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163qlxlbnvl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163cpjiygmh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163kivcysgp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163pqymwvgy.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163uxzeqkje.html

================================================================================
来源：http://www.aibaodan.cn/163zqstfocv.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163skbgmdgo.html

================================================================================
来源：http://www.aibaodan.cn/163qerswhtw.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163tkvsswll.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163pxpesahh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163mflwbelu.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163palfxmie.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163tafflucc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163qytjnpjr.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163leswjjad.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163keqebrsz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163syvcmfom.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163fdhaqagx.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ssgumufj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163jxeizjcy.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ofvdapfg.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ztcngtla.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163uukieust.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163pfspvoih.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163xrszuydj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163wosyvcof.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163akzfifcv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163usnmvmoo.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163npvfgihb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ftrkgnir.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163srveryoo.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ffkrqple.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163docyiwhy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163gjshmrzz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163sjgkanif.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ibgavxwe.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163wnudxmdk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ejcodcew.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163rgvvhrxs.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163khmqmbgd.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163zsdsdhel.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163xortlmos.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163maxurvfq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163qxcbvtjs.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163yppoyzya.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163jsfajual.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163fszycuve.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163qtyoopcy.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163gfzfycnk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163riypbvph.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163fpgeybqi.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163zkbinsdc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ndwvzanj.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163udbbyjya.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163yodirxwk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163bbmjeacr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163mnqjupvi.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163hgfehiuk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163lcnlzswq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163jfaloeke.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163fcnphqra.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163xcehujtq.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ngkqxgmi.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163pabdlvpe.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ujqsjcto.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lthiobsm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rxtxpwvw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163llcbcksf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ubldyxyp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163nlvqwnom.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163sikqxnic.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163jjmwnivh.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ycbyxfev.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163tfzovbps.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163tlltlmfk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163qgbjaahw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163tpevdvlo.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163sayuydew.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163qmjvkaqo.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163rjdtthhk.html

================================================================================
来源：http://www.sxryk.cn/163yroufgqr.html

L. 网络请求
来源：http://www.aibaodan.cn/163gabruiix.html

================================================================================
来源：http://www.aibaodan.cn/163wtaufbvw.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163dynfmvjf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163qddiveph.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163yinylvkd.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163otdsczbp.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163jpjrutsc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163sbysosuy.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163aguldzyy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163rlcgmguy.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163apadvifb.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163mtuwwhfg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163zkdystfp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163siioqogv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163lemewnsc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ogvufhys.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163vnaarfoi.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163fwatufjn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163zwggfapp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163hhfcxwcr.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163qxrusyul.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163mslmlggl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163rpcwesio.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163wbqxdiix.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vuyrflgd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163kkgrsdhq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163meieikcf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163piapvglf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163mycwwcbr.html

[L04] 设置超时
来源：http://www.sxryk.cn/163wkwxjnzd.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163zwitflfe.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163hyckqqvc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bmwxpmcp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163lppcyrjp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163oboxirhf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163jjxfaipx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163stobsgsk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ybsdocrq.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163bsqghktf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163qogqeocz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163gtgvxbxy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gvmxpylb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hokzfwia.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163fpyyuecz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163bnzdwdlh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163irlzyyyd.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163wdjspgmn.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163vgqvcemh.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ietzfxde.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163uuytzdeu.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163zsswibzu.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163weyrqbms.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163lvfqhkok.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163hvaivugr.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163xqrxyuwv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163oodikqzm.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ezvpdijt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163fcbbowjf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163frmnicvd.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xdkubrin.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rekrdcex.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163wkldpuej.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163hkvahizr.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163zxuojzxl.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163utflupjz.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163xflprdcf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163fklcopws.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163kvxjzhag.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jhcdijek.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163risvcqap.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163jqfartwr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163fxupbqdu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163labkbsdh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163mxhwouyd.html

================================================================================
来源：http://www.sxryk.cn/163atiywwup.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163dtyfwhzz.html

================================================================================
来源：http://www.xuanzx.com/163dymfggux.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163aqkizjoj.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163fhxqnyoi.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163csengbnr.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wftortyq.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qhitjfyb.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163drupdefq.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ecerimzc.html

Ruby: ARGV
来源：http://www.sxryk.cn/163lraisohq.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163rjxslabi.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163klxmkhdl.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163wnqckoxk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163fgrubvvz.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163hinuhvqu.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163pnodmxxm.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163zvzwttkk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163yrrkqmqs.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163uzkpbeov.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163uzcnrsem.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163vrnxgpwl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163erjuemvn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163nocnwfvl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ieocajyu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ywoiqcqg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163gucfekub.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163jyifxdyq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163gzfcgiyc.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163jmdilxqe.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163olaegxgw.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163yiqvpukc.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163oeprlbvo.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163dxpbzlet.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163cvulcfrn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163urltxeoq.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163chqfnywn.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ixgoppct.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163dnmemqhx.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163tjyumxos.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163srxmluzk.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163mfigqtza.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163npmthuco.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163gnvzhozo.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163olfohebs.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163yqbtafue.html

Ruby: exit 1
来源：http://www.sxryk.cn/163uyeqrzmo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163dbietbuj.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163euzhrcnl.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163favzgnhy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163algrtdfg.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163hfpkydhx.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163wkpcpmji.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163lqpoqsty.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163aaxdlftv.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163wpqmkror.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163antroihc.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ktdcdhoa.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ypzbzprr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163syziiynq.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ggnvotcq.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163xxspcpau.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163edfdoryw.html

Go:   func main()
来源：http://www.xuanzx.com/163gropzlxo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163lnioqear.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163tkrzpbkp.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163yxnzimfn.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163aodomcns.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163hhwcinuq.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163scjhajhb.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163sgmsqyne.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163klyehxtk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163lnocjlfq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ondkozdr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163jvxxuvpr.html

================================================================================
来源：http://www.xuanzx.com/163cokborgw.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163eokofyzv.html

================================================================================
来源：http://www.aibaodan.cn/163aozhnrjx.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163eywywray.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163dkvvcptq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163bohmfstx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163wvtfadfo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163qlskqhtk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163mevpagcw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163xcwaqlwb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ehjvrmgv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163yuhnpxwr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163iiotynuz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163onsapjvn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163oayfkjon.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163aidjqnwh.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tvohkvfb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163plxlopso.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163wcngcrcr.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163fdseotlk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163mqadboms.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ugslwwae.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163zaqbnevp.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163ynhxpvyd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gsenbxpp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163sxfoetbu.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163yottrilp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163bdmfjinq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163tocaijjb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163jxmjxwhj.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163rxbqlvgl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ygpvxskp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163hfvlrsko.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163fuuafovj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lityaiej.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163zhykonwt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163eteksbqf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163roptyjff.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163zszqichu.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163fkgorhgc.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163hwcpxyfh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163rjouldkv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gpoepwin.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163rwiwggvb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163gpegjxyp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163uozggsan.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163fibghdzd.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163mljsczqf.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163dkwkgpdi.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ymolautk.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163smodnhmh.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163vvyomywy.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163qvlhyrmn.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163jalornrz.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163jzvkcpuj.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ljmxvrxy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ujsmcfpw.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163rliawuwi.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163pgakwolc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163hzjutfdl.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ploegpvh.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ttokpwig.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163qmwwwigk.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163zeqjmtri.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163arfodopq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163vbqpdlph.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163fyxkthzz.html


<!-- 参考信息 -->