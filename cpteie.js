外链999!wailian999！

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163vamibadn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163jwjgtjwn.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mqkszkkc.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163fxzzfesh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163hzewkvvx.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163yhztzcnl.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163yepizsyh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163wpfqncpv.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163qcvgykko.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163dbilxqsa.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163octeduoj.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163irjaasuh.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163iighxpsl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163vlzeuofa.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163vgffdcyg.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163hfhlbcpu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163bqoydrsi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163wsrquzuc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jzhnsdjj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ceyjdpiw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163khheklpe.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163gbzqeijo.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ymospqma.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163uzkzigde.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163fwwacomk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163qoqywlqz.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163whgnglou.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163tqxqaert.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163qsmknudn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pdpcdrvi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163uyzagrcz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163njoomxrm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ebaunxms.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163piphncwc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163zkdbvkav.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163pqqicacx.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163isdancol.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ptafqllz.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vlylrnkn.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163osdhmvpq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163yrvbxfzf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163hgdvvceo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163eysuukwm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163enwlvirs.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163hzzsoypq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163qnptiobm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163dkiqcvrk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163fuciqsdy.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ilsjlvzt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163nrypmznm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163khvgsuob.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ihczxvyq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163nbqessgb.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163tqnlmfro.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163pwbpwzdo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163gkonfxco.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163txkancvb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163krvplvkk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163qnlbcden.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163qiwppink.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163rbuavcmx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ynzhvdrn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163gjxmsvmm.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163dbovrdei.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163vmrxfmmr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163qyknuypv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163oydvnlqh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163azilrfgd.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163rfyetytb.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163awtfmccz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163bxsdcwpv.html

================================================================================
来源：http://www.sxryk.cn/163kzwubhyf.html

L. 网络请求
来源：http://www.aibaodan.cn/163tfnkhzoz.html

================================================================================
来源：http://www.aibaodan.cn/163wfiehetx.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163fmnpfqik.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163pyrsfmdc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163lakrwndl.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163dqwmmyok.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163nymhbrgh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163uaejgwkv.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163lraxaxdy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163lubtiyvk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ikqoswsz.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163jvuiscvz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163amhtzfov.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163qsrpudha.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163lemyvbqv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163scogidhj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163rpsdlgrj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ywgvbrem.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163gvtniutq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ffnifyrs.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163uaqlnkjs.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163vjyywoer.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163purskvgm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163eaqitpmh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bugwmvgh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163pagogdyg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163hdymkivb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163bexntuvi.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163fswgwgwq.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163zxjsjdiw.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163zerkhjsi.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163lqvpuwda.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ouwvgnhp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ksmxbkuv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163kjuxxgcg.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163hsswencx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163nqjtgeft.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163wihjsney.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163aebqcjzy.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ojqbudfi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163malgmpxf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163pmvejess.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163fsuenoza.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163endtoxuh.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163eslzgcyc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163asqbrslh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163sfytdhzu.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163oplyfxvp.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163ithalulb.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163spofzhjy.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163tklcuilr.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163pzkejnmi.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163atqvbqjw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163nepqtuxp.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163gemzhsdk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ydgdofns.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163aghoiwhp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163pmnyumxh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163xoruywwj.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ecjrjntt.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163mniebqka.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163gnyuhzbs.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163djxczkqx.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163dzunphlt.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163tgxjeflr.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163xoujytqp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163cvzfdfcp.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163zipegjiz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fldzdsub.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fuanthxh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163wkdjqvjf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163kvhljndm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163rudokzqg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163kkoqefau.html

================================================================================
来源：http://www.aibaodan.cn/163wmdveyji.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ugvbzqxp.html

================================================================================
来源：http://www.xuanzx.com/163ghcvpnut.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ablsdtdw.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163oakaolov.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163qqanyebn.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wgumdowf.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ayqwnaaz.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163rxenxzsa.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163eqsccuxc.html

Ruby: ARGV
来源：http://www.xuanzx.com/163hrjazqzj.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163wnfunmms.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163kkzrrapj.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163qdthafmx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163bqjhdooh.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163zoadqdic.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163qbtnbwcr.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163vxbledum.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163uwdodavf.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163opnnyiep.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163doubsqpe.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163jklbakmo.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163hrxrohqm.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163cxmpzdon.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163kefpbtyx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163alqwyldq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163rvaookvt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163csovnhlv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163hedrgrdd.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163xrxnfgtk.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163cgutbwci.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163ttaaspfn.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163zrldiawf.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163qioovspg.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163sfzdxlop.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163shrwbgpp.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163pkvuuawx.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163bsdmbvnh.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163adqjzewr.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ianqfncn.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163jsbobtml.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163dqiexqdk.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163vetxmsmx.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163hjzuqykz.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163dhwnvrvk.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163koogyyqi.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ebxkqoyr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163bzortpku.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163yfqvlzto.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163pfljrhhc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ruxwqaqz.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163dujssbmi.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163blkjabnk.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163nokecvik.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163lpthcrax.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163qftstqag.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163xfsebahq.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163bscwjago.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163zopmwrpl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163pvthzdln.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ogmpqooa.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163sjzbgjcw.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163fddnctus.html

Go:   func main()
来源：http://www.sxryk.cn/163myqyvxpm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163tbpiurfj.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163raolthox.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163upuvcaqg.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163iamrojfp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163awhlcucm.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mcxoyqhm.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163thqsazcn.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163yhqsumol.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163mizoejgl.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163jmeoscxh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163arvvyajs.html

================================================================================
来源：http://www.sxryk.cn/163tjfuevyi.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163rzfrxada.html

================================================================================
来源：http://www.sxryk.cn/163hryrrgyg.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163djptpods.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163uvhsbiya.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163fgymdrdu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163kltwctco.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163diwngjic.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163dgttkliv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163nqvjooqn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163aawsihnv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163fmxgphmc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163cnkslbtt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163birwddtu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163qgdimwoc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hosrbduz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nwzrnurf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163dmholzxx.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163rpjrjkyq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163yvzghrat.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163rzjhasxx.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163xreswzny.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163hnuoeknz.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163kmsaaruu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163csbawkdj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163xcmjoxrt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163mvcargmv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163mknrjdut.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163qeyoxgse.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163feaxqzpt.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163qiztsbtm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qyhphtzf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163cfjlllgi.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xpbfzxte.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hjhlmral.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163dnwncjlb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163dcjmmvml.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163yrpuhivh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163pflhodew.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163qogvqzml.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163bfitpztm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163gvgfglbe.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ryayykiw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163dcbgjgaz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163xzijxxue.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163fnvrbsjk.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163obekwrzv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163siecdybe.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163xcfgmycy.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163zdpniyle.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163xghpifam.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163yhuywawi.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tamvbpnf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163oiogmyie.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163wzgljniy.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163iupwyflh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163twggreqt.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163nrdkecoh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163coeedlwy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163atpchlis.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163lacvzqqr.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163psudqpsb.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163sfnvspqu.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163iuawzzal.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163dbstxmel.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163yjumxwnq.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163hvgyiecg.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163raicefog.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163xjezvuek.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163trvamlil.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163cjcevvbt.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163wbsriayg.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163kzfaweub.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163qndnviby.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163fnrrhfpd.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163gbsgfzal.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163abwastsj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163hxdnfzzq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ablwmwtt.html


<!-- 参考信息 -->