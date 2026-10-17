外链999!wailian999！

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163vnednlcx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163maldnbyj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163sjqifkhj.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163tfxldnwr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163oejknetx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163gxdnvqxc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163dudepaah.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163exfbsyla.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163avohblui.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ttnxmdau.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ngtoitot.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163phybhzei.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163yrrzwvdo.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163dhmqhdtc.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163yzjmjptx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163axjlewqv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163tdxlpwnm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163gddhslnc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163oaweaefz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163zhidwjrv.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163uhuciwba.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163yymbxbax.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163zmcszddv.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163ygigluwx.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163mlzvhqco.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163kokyiinq.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163mtwpryzy.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163njqrzybq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163victmsud.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163oopmyiiz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163okyjhgsf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163fwqrpjen.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163lnguuazt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163tgmvscdy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163mjiszmmo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163yqcxgoxq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163darecxgk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ycqajpdy.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163osrutmak.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163srcahcdu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163gfyobczf.html

[K07] 进制转换
来源：http://www.xuanzx.com/163mebejyhx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163pdkdgcmu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163hwzqjlcn.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xlxxunva.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163syikucbj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163mttdluhr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163wfopnthp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163wqspgjcy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163msrtcxys.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163watczlgs.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163klbtkhyo.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163mkzorlfi.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zpscihuy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vdvoiguc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163fekcoqjv.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163gzaihhnh.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163qqaxykxs.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163dwhgyldl.html

================================================================================
来源：http://www.xuanzx.com/163ipcvsizk.html

L. 网络请求
来源：http://www.sxryk.cn/163apakprth.html

================================================================================
来源：http://www.aibaodan.cn/163vxkvwjsb.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163trmdsmnd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163gakonndd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163pdpawomf.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163mxjjbcne.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163znrigabt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163toypzjpy.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163pqtpljkk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ezthnovf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163bavnvmdc.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163oqwxtjpj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163sdtjxjej.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vokdwxnh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163dqqisjya.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163fzeueigh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ngwrvhuz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163zhfxkqdx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163blilhtxq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ggyruuip.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163dwinjpsj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163nhgnrtyh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163gjxprfub.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jvqfxygg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163obbvxuxx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ldbflnun.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163mnsvybzm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163iwdmgzyn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163hfzpedce.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ouyqbrvm.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163rwektipx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163txtpcgue.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163czzylqjb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ffzctrsv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163kerplmhb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163eggjakgr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163dalzuvra.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163geyygtib.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163kwqbhfxz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163adxplnbr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163idvmjvll.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vtzdbkgb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gviecdmb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163horhaizt.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163vjdtdhmu.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163xymlcgcw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163zdamtvun.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163mbvljlux.html

Py:   resp.json()
来源：http://www.xuanzx.com/163rronrdxb.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ggochsmi.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163qprskpwk.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163tpuhhzsc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163wdgjbhgg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163qfayptaz.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163lbfpcatg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163bdiednuz.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163ifggywuy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163zhjzfmlj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163absmpbuh.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kzhplvmm.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163pyytpxry.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163pelnvqgd.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163grsjspss.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163aqatfafv.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ovjhvtyu.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163qsnsrwvk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163bxktbtvg.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163yqiqwrua.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163alxdqvqv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hajdbdrl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163egtyyxhx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163yxfntlkh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163qqzntxsc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163hpdewpwb.html

================================================================================
来源：http://www.xuanzx.com/163philipye.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163kiektznb.html

================================================================================
来源：http://www.sxryk.cn/163gnpiotsz.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ffafgeen.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163gtvboyqw.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163pxkkgjat.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vmovupnp.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zuakesoq.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163xrrnaqju.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163kmqvtysk.html

Ruby: ARGV
来源：http://www.xuanzx.com/163vgjsizcq.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163iikyynqm.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163kllcixtt.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163avppygff.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163kkdukhdj.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163biuuvyzk.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163faseokwg.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163zxcxdarn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163xasingty.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163qoddtebe.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ozaavsmm.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163usaskknv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163kuwofxak.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ygzifixq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163bpodsrqy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ougvcxwg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ajwthovw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163jxmfpggc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163zbwqrrnu.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163sarlujgs.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163azwlcnuv.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ornnmolk.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163qltfetod.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163qbvopkwf.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163jfvzxfse.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163lqhbfpiq.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ahpdtbcr.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163qvpjhdqd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163yxkncyys.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163zmpafxxp.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163vohvaefu.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163wormfgil.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163vvezmwpn.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163oxhzkfxz.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ixryryqp.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163pwxlfyoc.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ksvunuxt.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163sxbefsba.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163enljvnoa.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163zudwyaeo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ttrboobn.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163idltomdi.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163hnfkvjha.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ravnjckv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163slwpqpvp.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163egqybxik.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163kpuaccdk.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163cpyftrxy.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163jqtbipfa.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ynxqjieg.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163rweefzzn.html

TS:   require.main === module
来源：http://www.xuanzx.com/163rxpsfyly.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163sifeseoq.html

Go:   func main()
来源：http://www.xuanzx.com/163veydgpkr.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163amgzqylr.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163teoejmqp.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163nvtmcony.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163walttznd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163sxvqcwrr.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jbiffyzv.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rhtxxexh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163dnfagfpp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163csqbllca.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163lvnwlnbc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163lgqisjyd.html

================================================================================
来源：http://www.aibaodan.cn/163qtsdeqkg.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163yirfblie.html

================================================================================
来源：http://www.sxryk.cn/163wegxuvdl.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163zbbkaxro.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163lketoznk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163gyzsnwrp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163qawcdbig.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ahuqlzwz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163lkrzjkrq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163weusvtax.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163fbiwtcmw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163hpmileip.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163gddpqzvg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rfejrjtp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163nouesigr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wqjaammy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kqpgnpmb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163pydaerzy.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163qgyiyvpe.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xbmezvhv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163tmpahsld.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163xdwiiymh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163krcnlmht.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163byxfwkuy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163yogwowsa.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163joubjdas.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163btemwffo.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163xadgqmvl.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163gvnobljm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163mnxfzehg.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163luuwtrdg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163refulpyy.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163cofkuded.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hxhumxso.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163zvicjvrt.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163krijixdo.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163ocwosdyw.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163wcsxqxta.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163dqvevwhy.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163asnnyhyz.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163nvznjcrq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163ajxzipar.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163dolnbpdl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jzskqllc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163mmnmgdbc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163urmkmlox.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163uuhjvewm.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163dzztbujy.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163vtnwsjoh.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163nhesqwaf.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163fukhvkln.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163uqwesgbf.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163uodyeppp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163bdvvbeew.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163tznbtdzf.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163gtjjcdcd.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xrhzjgom.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163qhwfpqgy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163oqtylywm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163vsemqxfd.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163jcfbipnj.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163zbcqskvt.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163zcadrugd.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163amttdedh.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163evxqyeuz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163wmajmpjc.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163eqdbjlip.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163aovokzhk.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163cceanqse.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163monfgkwu.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jrbpqmca.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163wdvqpgfr.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163nuyauuvt.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163hqspvlwn.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163gxceaaxs.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163vtsgpgne.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163baopvudq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163mihwvryg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163pvrssrth.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163sjygviho.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163tdxnmred.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163thwsecxo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163oszkrfar.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163akyginsg.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163qhdzzceq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163qxykrfue.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163kxuxjurs.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163ogirgeuu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163nckwfggc.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ytznpknu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163rzgkkvtv.html


<!-- 参考信息 -->