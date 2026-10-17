外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163bupovczv.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163mdbpiwym.html

================================================================================
来源：http://www.aibaodan.cn/163qdotfmrn.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163vowcciej.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163honkekdb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163lfhlrems.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163sluuofno.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163imcqfgoa.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163kpitmmob.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163phkzhvrw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ceyuhoeb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163cbqjxssb.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163vhpnzkrb.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163hfpyehlz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163mpbznbmf.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mvlgiydy.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kxacjqbq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163loajnaoh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qpcvnocn.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163juobdvve.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163qpflvtwq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163wwhuadkj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163bavpquhw.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163wfjkeyhn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nrgfegou.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163wjfcbsng.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163zegklapc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163bgukyrog.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163zjhvljka.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163eutlxley.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163dxyzkruh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163mmviuceq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163abqaetmg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163urtdomjg.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163bufadvhk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ourhfbzb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163yxnuewdg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163zavugewd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163djkvtogm.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163rnddfusk.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163afcqpfdl.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163sfgvwycc.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163clrlbhhk.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zcncwnme.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163fckdzwkx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163rpzoagjv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163qxwzvngb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163vpzestfi.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163igdxklum.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163rotzfinl.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163udrhoimd.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gmtvwbql.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ryzhycpe.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163cpcronay.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163gqyjexaj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ortlhyhm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163blajhdzi.html

[K07] 进制转换
来源：http://www.sxryk.cn/163szkcgvxx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163lrmhockn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163cljbojch.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jmrcphbk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163gmvkwytp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163zhcoqsic.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163dlxwqwts.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163irmctpfk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ghhczpav.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ottutbtl.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163lndfjdxz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ieyrhldl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163rclccqhk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bgyjdsuo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ftzexezi.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163qedffole.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163auyawunp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163opvapwkm.html

================================================================================
来源：http://www.aibaodan.cn/163dcdfuviy.html

L. 网络请求
来源：http://www.xuanzx.com/163kecgbdqa.html

================================================================================
来源：http://www.sxryk.cn/163frqqzqdf.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163rxjsxzjj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163afupouub.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163eashuqcc.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163kdtkgvwv.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163rgjghzkw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163pbzjxygd.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163umipejzb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163bcghnvpa.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ddolryes.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163sbbyfnvx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163afavhypx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163cmjmvvzf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mkpchoco.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163whvvqfnv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163flfhizub.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ybwrtnep.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163hjnjdfjr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163qjhladvn.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163rgpgywih.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163tnpoujnn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163fsjczlym.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163bdicduvv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163diyfyjqg.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163sxqoknij.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163amqfmoxh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ppxlwyny.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163zzmbjmrz.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ncjplxqr.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163gznijusf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163zlmguqgb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ofxyhyik.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ynkhpnjt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163daynxgte.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163qgsggpgk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163gpxjxfmh.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163hygbkpmt.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163inqptgzj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163whotxlcb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163tfjizavt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163jmbiizra.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163omqrfvjp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163cygpsund.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163efesuxyj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163noaopvue.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163amyochvk.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163trcyrkql.html

Py:   resp.json()
来源：http://www.sxryk.cn/163wlwnuhxu.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163uzrplrzp.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ougwrujy.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ejstihrp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163rgwjcobt.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ubzuppno.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163kppjhuxe.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163izyofwfj.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163tcdfjfhx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163buklovla.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163hrfajqyl.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163epxyutgi.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163wjwopzlw.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163iapjbjcm.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163lxbhdmph.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ewfdlxbi.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163tzojrrhj.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163cmkgiwwj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163fscjhzql.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163itlrxpxn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163sjecxoxy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163useymaof.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163xjspwrwd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163vyiemtzs.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163raoxvhuu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163kkuacgzl.html

================================================================================
来源：http://www.aibaodan.cn/163uhcbdrxf.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163vwiqtbwl.html

================================================================================
来源：http://www.aibaodan.cn/163xrbyghep.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163unddxvvo.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163dnwvmdwf.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163uybimbgy.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163filmryri.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163hmqyivhv.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163qgripyqb.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163teidktft.html

Ruby: ARGV
来源：http://www.sxryk.cn/163isswjtxl.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163yfkskxvd.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163nhfalgnc.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163uefvmubf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163xjqnxnyj.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163hiqkiljk.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163icbmuzty.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ifuersuk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163eawqmgzo.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163bwfykzaw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163hydwvwyc.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163kbrwpczb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163vhlnazma.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163fiozdycd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163mmncrwqm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163unefminv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163rzphcavs.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163krlulofy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163hgrnynvk.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163wbmglbta.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163lytuhnnc.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163uvcpeatj.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163tvtgpgey.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163juzijrvu.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163syfnfbnw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163kwlngsyj.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163uyuniswj.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163wfjzpdbb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163alraiedv.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163uzljlzsh.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163aihurvjb.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163pfljoqad.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163thhnhjkw.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163jfugxulj.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163jwwlgkvn.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163wqtctcwp.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163azjsbxxh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163hxhcuazd.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163qqxorjch.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163vunlgeaf.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163weoryfly.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163mmnzgqyj.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163mxcznndt.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163rhuzdyjg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163svxhisnu.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163icozvpek.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163vegbwdbu.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163wdoijomo.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163kmhvehyq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163xvvywlhs.html

JS:   require.main === module
来源：http://www.xuanzx.com/163cmrvsyyn.html

TS:   require.main === module
来源：http://www.xuanzx.com/163zonalzeu.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163brogkbrv.html

Go:   func main()
来源：http://www.xuanzx.com/163rhiasvlt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163bprjrkzv.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163vhzwbibp.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163vibnaeps.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163qnlvrfmf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163fmhupkon.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163gudmjzgb.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163fclwctal.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163lgqkkumn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163jhfpknau.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163leotmbaf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163uohnzqzz.html

================================================================================
来源：http://www.xuanzx.com/163yhovbznb.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163qnxdzsjv.html

================================================================================
来源：http://www.aibaodan.cn/163itqpzizz.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163yuitwaqw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163lerbpkcq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163ufmkymei.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zuunoykh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163napbspqb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163qdniuvcw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163zhbxqhmi.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163jfoulcjx.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163jlizkrfs.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ltnldlou.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ajtgwzda.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163sdyijntg.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163alvoaiqd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ktckemyp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163httibvon.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163nlbcbegm.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163mjuuxajm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163hxecgnjc.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163wisluwst.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163rckjulog.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163ravtmlnq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jwfshoth.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wampyvvk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163lrwicaau.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163xxlcofdy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163hbiyjczc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163mcmytmrl.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163iszpalrk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163rylrdqnq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163xzrgpvhp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ygudwawa.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163yjtxhgaf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163xicrhsfp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163ojzcdlfb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163iggezeby.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163bdpxuwzt.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ctdxlbyk.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163buzckaup.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163snxqpwws.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gdtxrdws.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163czzdnxog.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163wjrvkvgu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163nifenxeh.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163looryuvq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163hwajnqzk.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163etoubeny.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163cbqdjgzz.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ynsywmce.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ckykqtyz.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163xxsvcjya.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ajmydjra.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163zcntbxmo.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ulkdvdke.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163dozntpjx.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163cuqyrpwd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163xoncnycu.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163awlfhcsn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163covefhjx.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163pswgldur.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163xgwzqsdi.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163gdbubpsx.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163gypztnei.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163itckgxbr.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163hzeikevj.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163vnkslblx.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163vioalgst.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163znimrnhb.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163mdziqpvd.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163vrvtrhjx.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163wfrmqlgi.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163cwmnrnxu.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163kmvkbpfo.html


<!-- 参考信息 -->