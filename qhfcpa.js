外链999!wailian999！

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163kmttkaec.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ffuotobr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163zepcrdko.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163shtfmqjh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163gohntavn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163pbzzcjge.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163wtralmit.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163bkmoikak.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163mfehdcrx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163sipauroo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163eumxvrvw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163jfwrwtlr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163lutvmujg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163crenyzbu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ytfvlwha.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163dsxbgnsj.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163gibaprwy.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163gtzhnkyp.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qpjgftlp.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163nqelsfmr.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163vmkceivb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163lkovqokw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163yjocucul.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163fgnqzlvy.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163kiavijop.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163jwhotsmj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163jgfjzlsr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ueseujaw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163lalecmov.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163rrwimojh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163zdecuuma.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163fezqkawu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163mxxmixfd.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163dwfhanzf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163zypgyazp.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163dmwyllcr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vebcdmsv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163khsfwlpn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163oadivfaj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163cdmybfix.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163abbcyvfk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163shprznpm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163ybqbgslq.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163bbtmekyg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163kgaldjyg.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163cnnvdlgv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qfrrbtzg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163wfhepqpr.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ttuivswv.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163xttgifan.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163fsjfejjm.html

================================================================================
来源：http://www.xuanzx.com/163mznncrsi.html

L. 网络请求
来源：http://www.xuanzx.com/163gxeprivd.html

================================================================================
来源：http://www.sxryk.cn/163fibixtrf.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163xdxrfapw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163zrnyqnkp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163fjfpcqlp.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163ajwyktzr.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163xjiobdhe.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163vfizydaj.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163hlpcvodg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163chnkjxbz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163zgrynlnm.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163vvhconjz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163zstawslw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163kqbtzcdd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ybgdaaan.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gmoztcjj.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163czyitxde.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163srwjtbsn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163vszjgfmt.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ehpcajtc.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163oeyynnjf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163urtpjrri.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163qqnanebp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163orzmqofk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163oodklgzb.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163mvtpgvwu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163mjfqbtcb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163anncegij.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163rfjsmaxe.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163teeidlvw.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163nlkctojw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163jfzhmrgj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163nfosfpss.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163yfojdkqq.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163wvmbmhor.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ktcllkpq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163obmqhygs.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163isqkghni.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163nlvwxaym.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163qffbesir.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163wkewyfan.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163shlryupp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163tsydlvjy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163rjuphtpk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163xvepjalh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163fxgycmkv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163konpdcop.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163tjtydjrv.html

Py:   resp.json()
来源：http://www.sxryk.cn/163wemfkeyr.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163apljyweu.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163nbergtsq.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163iwaklydt.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163vupctgww.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163gbxzmnta.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163cwopxcih.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163qcfzouyj.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163fzywgvrz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163yfdzhjbc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163jfpbclly.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vvakirzk.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163yifrrknm.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163xpqtoviw.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163zrymoaiu.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163gzcynnuz.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163kacxkmjs.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163apiaozzp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163pifyovsl.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163aykejcek.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dhriozpq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pzaklyua.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163httefuug.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163tjjofnbt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163bdjcxues.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163qgyeaonu.html

================================================================================
来源：http://www.aibaodan.cn/163phiflesm.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163yaqpfble.html

================================================================================
来源：http://www.sxryk.cn/163icawktwc.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ivlqxogm.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163wgevmjwi.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163uqcybgnx.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ydjbsivs.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ngnqreeq.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163psfbzhod.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163quibxfll.html

Ruby: ARGV
来源：http://www.xuanzx.com/163jqanmles.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163darydezi.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163edcpdeyp.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163khbcdhqg.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163soekqsht.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163mxxmonsn.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ajthvdyj.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ppdrzohk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163bhdvxxui.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ivesdpvz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163jgxwumon.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163xaywfcee.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163jmlhxhxf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163mlgoelie.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163gmraozrv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163oolqgktu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163xccuivly.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ynelzflx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163slqzfjet.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163zwzxfppm.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163udrugbwa.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ajmwldpq.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163jsbkykqw.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163jbrtzufc.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163gwftgxvy.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163uuscydta.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163byculpyb.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ekbczxaf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163jvwscbpw.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163qjyrbbfd.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163zmshyqmi.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ycbvkyys.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163vkryrnzj.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163rxtuqffe.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163uyaeebbl.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163iupmeoju.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163eejzxpiu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163wmsuvwsp.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163braxabmu.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163toxmehgu.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163letfvmfn.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163rtxvherw.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163dwixmytf.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163femzdmpq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163fgmqyfzd.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163acnzxanu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163zxwslung.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163iobasfwp.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163yjfxqemi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163onflkfjn.html

JS:   require.main === module
来源：http://www.xuanzx.com/163eocqusuu.html

TS:   require.main === module
来源：http://www.xuanzx.com/163czrmouvk.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ppcwlhjz.html

Go:   func main()
来源：http://www.sxryk.cn/163ftvrucsm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163mktrogxc.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163alclcmgv.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163brfrkfrk.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163oiuvnikd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163dctftipb.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ofwilybi.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hjgdezpf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163btyzaevs.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163qgdlgmkv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163hagmwmyf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163whvrkscx.html

================================================================================
来源：http://www.sxryk.cn/163hzitdlbu.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163pzqvdnox.html

================================================================================
来源：http://www.aibaodan.cn/163vgvuwgnj.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163gkaqbpen.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163celainvp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163qbbxfmcy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163pcrpjtyk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ohxqnyvt.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163fqjsldoo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163eenydigx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163yszqymce.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163ukuvmxzx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163mckeadlr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163tllsscmh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163fexgxzxi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163autjnaxl.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ljcnyjez.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163audbnqqu.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163uhbpzxmf.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163epvmfjah.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163kmcqjmou.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163hyiqxrsb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163jbasnmya.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163oqqjkabi.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163lqppdgzs.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wrhfnjdo.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163lvojaaud.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163uvsjtzyy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163rkkqdrxl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163cjbqfwzh.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163yvmurjsy.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163trvmkmgf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163zsftxpcb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ufdsgfdc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163okboujzy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163obgrzzlg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163jzcgxwtt.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163suobprrd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163kfyllptz.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163jzaoiexv.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163sdtvmwxl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163menhucfw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163blqufbof.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jtiucwzc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163hxntveun.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163kxicrcsv.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163dklrqzug.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163rpenpbxo.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163qhsqjbtx.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163nbdfjhwv.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163orlkcrzu.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163dgcpnjxf.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163kwicfory.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163yhshmboj.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163saygvdkm.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163frgchnud.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163lnbdwphd.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163knzfdjnt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163qcmofdvw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163kcpdkhge.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163atmpjnsp.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163szfhbgeu.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163qtxyecel.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163blmpggni.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163vvcxiear.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ovfnhfcw.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ypvfvzeb.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163jzosvwbl.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163vujnkdlk.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163aworfbwr.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163rkfmplzf.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163jtppvevz.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163cgoqlkug.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163vxsdrreh.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ascjvtpq.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163zjsuxcjp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163evgybwjx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163yvszvojx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163aubjjznh.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163dpyrehxb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163yzmqptlx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163lcnucole.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163jvxrjstp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163rnblsxso.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ffiwtkjd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163yamlubjn.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163wceislru.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163bezpyylm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163blqjpwvv.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163zrahftmp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163qtawuvxr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163fqgqhumz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163dltucbes.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163uilrhagv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163iywrorcm.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163juulotdj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163zbvtvlik.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ncmxwwsc.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163sppynwuy.html


<!-- 参考信息 -->