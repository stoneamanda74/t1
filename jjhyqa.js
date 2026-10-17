外链999!wailian999！

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163bzuqjqia.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163gydgxqqu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163bhjppgfo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163mcxlpone.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163gchewsut.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163uujfhneu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163rxybwocp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ozmxnyxm.html

================================================================================
来源：http://www.aibaodan.cn/163qskgsxkp.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163jvbrzvil.html

================================================================================
来源：http://www.sxryk.cn/163wzeykxqv.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163htlavuyz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163mkttigdk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ypmksoen.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163drgpstiz.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wsdcgdhe.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163vcspnwfd.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163xdavrtxm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163bzcawwkh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163dzxkmezj.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163gxchlyes.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163bebiaoke.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163eqmbirwg.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163fbyfugjr.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163lzyqpkjy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163lgznabtq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163lptpodip.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163kfxumdok.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qbijikqs.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163bbheyftq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163vcqwrjbc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kynnqhtx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rdwjzihr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163uocephvm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163lwvpevlc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ourcecag.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163irnsocui.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ojtadxjb.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163mkbjfnka.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163uudjaswp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163hhfrfmff.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163pertobis.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ebiicucw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163bvwjkvdy.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163krejfyei.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163gnmiaxxd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163taxpggns.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163emntpocb.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163htroposv.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163fjpxjcsq.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163nlfucnfk.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163acvgnvem.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163wnpyheiy.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ujhodsag.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163fggscpds.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163vmoruzxb.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163tfxbowzi.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163bzcqoyya.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ttxnbatg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zzmofztc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ciwnbgcg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163epfuroxv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ygalgmws.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163cznlhune.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163iktvigwh.html

[K07] 进制转换
来源：http://www.sxryk.cn/163jqrsjmgo.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163dscuabuv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163wxiqivqj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163bbhxjgvn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163juxeoizu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163njcxhcou.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163hbmwjeza.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163xiexahuh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163sqpxdrad.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ekdkkvhh.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163thcxbzsx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163takjdsji.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163gmikxelp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ceykdgpz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163kgztmbjz.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163stvxghcu.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ofbzqcxb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163xxcuclos.html

================================================================================
来源：http://www.sxryk.cn/163oyhdfixg.html

L. 网络请求
来源：http://www.aibaodan.cn/163moumljqr.html

================================================================================
来源：http://www.xuanzx.com/163rpfgwqht.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163qlrdkzzm.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163watuptun.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ydcufsyy.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163lkjvdkrv.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163brfaylav.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163qvekbvsl.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163dlfvyslh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163txmyepfh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163cgspmqxa.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163akrvprmu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ndbjusgl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163jeqsbvdr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163oydujbdt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163spfjodtc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163wqqadpxb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163sekxguhp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163mjeowada.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163coeoztoi.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163fmcdobja.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ilubyvoz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163vsxgurxs.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163dnfzeywd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163uixeegvh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163wsoyjogn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163kjwymlkq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ucqyttvc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163lqsffdmx.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163cwaeivuz.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163aemyrdxt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163wnfhtuui.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xpuwbpmq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163rflxdqol.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163jzdexwkv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163hhbwbycp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163mudgcjxr.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163vxamptbv.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163yhfavnkm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ferlnebb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163xzaambvj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163iithaohq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163pcsyzhsc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163oifadtro.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163edacuzeh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163msjupypi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163xamjdxry.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163byxclbug.html

Py:   resp.json()
来源：http://www.xuanzx.com/163fitzbykg.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163mshdggsm.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163hxcumccm.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163sgfdppju.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163uxxmumkb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163rmqaiatu.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163nwzduuxk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163whqfzsxx.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163jvhqqgwl.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163tcuiyxjz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163jrayfbyh.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163dhbxobpa.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wzgprsbx.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163wzbtnqat.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163cmfqzryi.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163jmztdklh.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163xzhtrfax.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163peaxwimr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163ndnqbaus.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163peumqdgi.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163udgcsvmh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zreummcw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163vjaqcdga.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163qpekbewz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163yksrpswm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ontdjcaq.html

================================================================================
来源：http://www.sxryk.cn/163xuxqejbf.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163jxilmagv.html

================================================================================
来源：http://www.sxryk.cn/163wmsfwtes.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163tcvsjiwm.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163xvrbusdr.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163kivrxpdb.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163urhmljoc.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ekfskomq.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163jucozpxc.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163sxzhiuzd.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163lpchkudk.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163mrglpetq.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163opetowwc.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163cxaervtw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163qsgnxirj.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163kqjtxdvq.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163sixdgjcs.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163qdfnzdts.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163fvmjxysq.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163pohsjnyz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163glfaiimi.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163qvofthhl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163zsaobwzo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163qpirydnn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163tdyijicw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163gqegqoyw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163zsxmcghj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163srgqfyyo.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163egloqxan.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163btfvmulr.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163bieecuga.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163mjarokzl.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163vvbbvxaj.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163qykxjoma.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163idjqnljw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163jqqzsagz.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163khhnduin.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163xzwqepil.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163pbfujryj.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163eqkunvju.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163wjlehxui.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163xlpqfxdc.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163qdzxzruv.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163jjpjrjts.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163vtuorbeq.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163awvapync.html

Ruby: exit 1
来源：http://www.xuanzx.com/163zoivxnze.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163yipntgrw.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ulefktad.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163aaalialp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ibmmrhgi.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163hccjxmlq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163cuejoxvz.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163xywlgyqm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163dhjxbpft.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163jvfuujee.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163oqeshnio.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163wgamjlia.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163pkryqmcb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163hezhddmw.html

JS:   require.main === module
来源：http://www.xuanzx.com/163gvmalhud.html

TS:   require.main === module
来源：http://www.sxryk.cn/163wfkfxkeb.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163wuuhbgle.html

Go:   func main()
来源：http://www.xuanzx.com/163xvupexzb.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163wzeyzahy.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ogxttrgo.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163yeordhag.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163iocrwmke.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163turpujfe.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163yzdynklz.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vzfqtfzw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163hwrymmzd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163gsignwlr.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163suuqyfzh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163mxdpxvbj.html

================================================================================
来源：http://www.aibaodan.cn/163bpkzoppp.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163uwedmfqc.html

================================================================================
来源：http://www.aibaodan.cn/163pmxlhfaw.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163noaarhim.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ljcvvmkk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163hheqjgsa.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ksgmghqc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163gdvekiiv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163rcirgchy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163btwnjtam.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163rpespebn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163iyflmkar.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163eanjzirz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163czjgcnip.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163lfeshdcc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ncbvhaqt.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lzzlgovi.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ngdkdkgf.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163jbkcwqsa.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163wzkjpeqi.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163wsquxufz.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163hukophmg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163fuwzacwd.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163rvbfvqsy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163uwzakipt.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163pfscwxcl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163mgkhofvt.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163gdctvmxl.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163kgsldckf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163oersynbt.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163sefrnaei.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ukeuowaf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163vcgsudaq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xfcvpaxu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163rxxirqsn.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163qqybgwlf.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163zsiulezx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kktoehlz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163mvhjvuvi.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163kobuhezu.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163lcghkwck.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ahqvgoux.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163tibfibbq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163duujixar.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163rosnougm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ytqidknc.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163qdyudxhk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163zzyxwghv.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163rlsglswr.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163qqyswdnt.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163knnkdjdd.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ykyenxky.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xrayyybq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163pzzxmlpw.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163jpojluxg.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163jzztrjbh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ozuezppj.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163feicbloy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163moyqlckx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163asbikann.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ffvfibnj.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ewqeixac.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163mnttslvv.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163qxwzcbpp.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163vzbmykji.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163qnavsawf.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163frnjhnrs.html


<!-- 参考信息 -->