外链999!wailian999！

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wepcxrqt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163sfevpnup.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yqpqrhyt.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163werjxxok.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163zdqfadic.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163hehhubjn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163cikhnqry.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163hlhfcupu.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163jofwkdjg.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163bomjayfw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163fftemeny.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163esuwlojc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163llpqgdpy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163qepmbrdf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xmefqhqr.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163xxfxfozo.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163uxhdgsnu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163cwwtxnci.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163uhewlkyc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163uginawdt.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163wdqmxxkx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163dhsjudph.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163tmduqwfj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163adzckbty.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163nhnvourw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163cvmbukad.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163muahjfmp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163natjjojw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163lvigcbfa.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ceytcule.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vusmipkv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163flpxklls.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163gsttgksz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163bbxyjvwq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163cxiabban.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163afpigdvl.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163lqyxpavd.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163fxhazxio.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jdqiuzja.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163lnaplmnl.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163xgwsoqhj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163vrlikyuk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163pggudnev.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163ohdptqeg.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ahqqbbfl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163kjodpwul.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163thbfidkg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163gpukotqn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163bodjuugg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163dhverkte.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163tgbgazbm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ntckykot.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163dleupqyx.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163brskgklp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163nkjgjuxt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163nmnrrbbv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nohuswtx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163uhuzzhja.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cdrfgaqc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163upyegysw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163fhkztlft.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163uifpzywh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163ksogervy.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163milspsmo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163vmacpvdq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163nempguwa.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163rgrxkvgh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163itoymhia.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ncoqadrg.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163zwanihgh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163lkqpehmx.html

================================================================================
来源：http://www.aibaodan.cn/163jvqpcipj.html

L. 网络请求
来源：http://www.aibaodan.cn/163ukuuzhjv.html

================================================================================
来源：http://www.aibaodan.cn/163qejadtia.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163vilbirvi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163gjynytsi.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163hzcbeiku.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163phqmlqqj.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163gxizhyap.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163lilmtrxq.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163bsgdvnun.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163povdtrgl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163pztmwfuq.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163lktuascy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163waxdoblq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163sluztwen.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163eoofgbmx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163rnuljqje.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163iejtegnz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163rjshcmuw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163hjerwrkt.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163kwtamdls.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163yutjdnky.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163mqlbselv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163jrvkfxlu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163xperhkaz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163albcyold.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163oatqfmrv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163kbivahmg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163xjkulnhv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163mpeqtbyo.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ngnrudbh.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163rkkioyng.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163vlyqsypc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163dxnrpyyo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163swyhvdyn.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163odvvaazw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ebziljxw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163juahtphk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163rtynvfjt.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163gpdjlmku.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163miimhxep.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163nqtscivt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xaooomie.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qrqmrwmy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163xpqegfmb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163qyzufttf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163cordpxbb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163icoojrya.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163tggaqdcl.html

Py:   resp.json()
来源：http://www.sxryk.cn/163jhueyvjj.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163vtmsdobe.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163dudrgqhv.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163wujdsnbu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163nrtighrr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163kezzimhb.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163zljwcpks.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163lhyymwfj.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163huwpooeo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163wbggkwsu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163pkziatqa.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jvikgfki.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163wxjxxous.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163vadmzkol.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163tkamubtv.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163zxijawhv.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163iottlqui.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163czilrrxn.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ufsbgmpl.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163bcdcbpvz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wvetvvai.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zmuxdoag.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163bqkwecbj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163batfntci.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163lcmzprpu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163rsqkbxbb.html

================================================================================
来源：http://www.aibaodan.cn/163xzijiypm.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163sglpclca.html

================================================================================
来源：http://www.aibaodan.cn/163pwesqddz.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ivefdmrc.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163hbeafune.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163mvouosno.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qnowqwed.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163yacsncij.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163kwuwrjfc.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163eqlcayea.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163kgttinli.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163udyraxgx.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163dpmlzqlj.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163dhvakirc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163pvudkjyo.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163iudrapfu.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ufxfauli.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163bxqwvijw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163dgaixsxw.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163kxxmomfg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163mwglpcig.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163tpkildia.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163rbkeogwe.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163hbjbkymq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163yabddcin.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163frqxnomz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163mnpynvzv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163grbpgqco.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163rxkkabgv.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163pxyxnael.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163gvdfroll.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163dueeunlg.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163xioilups.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163bvsauynd.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163axzqbwcr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163odeplkia.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163heihqcfo.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163vfihsdcg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ysgifshl.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ycnfpvzy.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ncojbptn.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ejawdsla.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163jnqusoom.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163nxjeanvr.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163qwxyalfc.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qumljvuj.html

Ruby: exit 1
来源：http://www.sxryk.cn/163vjbqgnmp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163sbqeevwo.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163bjteesod.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163kcxtbojh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163orwadxrt.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ahpezibv.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163hyjafplx.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163jmobbvbd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163obeoowlc.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163aztjuusx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163raucgekw.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163tdgztlat.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ugcmkjax.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ajibivzr.html

JS:   require.main === module
来源：http://www.sxryk.cn/163xayricfr.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163agphkvwx.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163quhfftdb.html

Go:   func main()
来源：http://www.aibaodan.cn/163pjllmqai.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163cnvbjens.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163nmtxokpt.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163zsflhfxz.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ekennxeg.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163tnashgij.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163drglthmz.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163uexukyoa.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163mgbluloe.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163vnjrmbdx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163wpziqkxz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163rwkdlgcr.html

================================================================================
来源：http://www.sxryk.cn/163bsefzqsd.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163vveydcsl.html

================================================================================
来源：http://www.xuanzx.com/163vnvcbppd.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163qdznmfup.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163mevyjoni.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163qdprglnd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163lhtbgyad.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zeoerwxq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ralzhlvs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163mlklwiul.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163lekndhzh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163zhjhdjig.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ucowiulv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163oqyfvjgg.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163whmkzcsd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163sntoctke.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xypdpbsy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163mlolayjo.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163prxinrae.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ptqtzxky.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163saowpttj.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163zebvpesi.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163cssnmigp.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163iwqfbxsk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163blsvaibd.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163wcslgyxk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163wtssxctk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163bslgnpvz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163vjwcfgre.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163mihzwzwc.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163bkzhpjjd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163zholupdv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ntohmgsu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163yjoxiojo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qsmjuoqi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163yrajwetg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163yafslhra.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163wjfeluzx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163gkgxvuav.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163wgongaxk.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163chrchthn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163jgthgsft.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jhscphkf.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mkgukbks.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ibciiuyf.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163sevrmwln.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163niicmgex.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163qwplptsa.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163zflpmcqs.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163wxacltmv.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ijbamooa.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uttbwpsg.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163lonamiyn.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163hmbtecsi.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163zcarqfnx.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163kzxdlseg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jrtcsuif.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163ssuccnrn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163xzyasdxs.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163jqxvipez.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163mxudlhuo.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163yhqvcazy.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163wwrprjoy.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ucxrvobu.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ecznskup.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163tixhoxte.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163nchahwia.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163beeqexvo.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163xjytgwqv.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jnfovapr.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163awofxpyt.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163yzkwnyhv.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163pvekoans.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163tzrattps.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163elzblyuq.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163uylrtydr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163bmpxvjih.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163aijgotvp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163qakmwjcc.html


<!-- 参考信息 -->