外链999!wailian999！

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163seuapkur.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163namongsx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163jfusejfq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163yndbenor.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163sfiqwsux.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163uvidyxvz.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163xpnpkjjx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163zmmhjcrs.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163aodyviyu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xroovwof.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163nlbsyzqm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163lwsrinzl.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bpfqvzwl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163vvogszkl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163rnlmgpwm.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163kqekamrh.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163zkiyjdhk.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ngmcycoc.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163knwdyywy.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163wzjbykiv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163grnwayvh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163bvrizinf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163mtemyefe.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163jxxlhmxc.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163uzlyqktw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163pzzyeeur.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163sqmmiwli.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vylevoam.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163tvlafvyj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163rdtowdfg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163cznxkfsa.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163omkdfmat.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163toxnvbjz.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163aplgmybk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163pqswsabn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163bggdtord.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163nopdzihs.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zvvovrmp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163zufhauwi.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163uwaghehv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163oyrsjjlx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163mgrdazqa.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163yphrhnij.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ovrimpng.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163bzcswfhg.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163kgfnvfex.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zkshdhfk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163inttswff.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163bxnpmcwm.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163ewavwpsj.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163lkbhypjv.html

================================================================================
来源：http://www.sxryk.cn/163afunwgts.html

L. 网络请求
来源：http://www.xuanzx.com/163rrqygxed.html

================================================================================
来源：http://www.aibaodan.cn/163preadpem.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163xzovdeng.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163omothtyz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163fkfbxqly.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163mzcbzqqx.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163rocdewfh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163cwnnzisv.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163kutkcsrl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163bvcmyrvk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163txhppapn.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163udhhskue.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ccnbgbfr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163clbosunv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jkfpxuuf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ffouxsqd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163uluaojwb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163yyprvvnz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163asrfqdth.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163zacbdlzh.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163wkjnoflx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163xafnosya.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163uetcvkxn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163lfrmpexv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bjorgmgl.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163chvzzsxm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163arkhnxnc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163qonjohgt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163mopcnflt.html

[L04] 设置超时
来源：http://www.sxryk.cn/163xdsdeyab.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163kujcewdy.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163rdwcawnh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163jvcjecam.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163cncutfdx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163gulctylt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163bdzqarlc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163fkatafuq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163acbeukqg.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163daozufpt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163vadshxmw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163uqlxtvcb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163aqxuhxwj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mebcwkug.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163oqbofdfe.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163swhseebt.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ytfbutwf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163rxybxdjh.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163zlpiaqxq.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163qtejuylv.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163fjbdlmlw.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163lxgbgamw.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163hbeekcsa.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ijqgtemu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163mbavngfe.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163iliuwhjl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163auzntonq.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163wbwavwja.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163zkxzhfwy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163psyxnnvm.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163bucohwks.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163sxhfzmeo.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163tzwdfmni.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163emtjagde.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163frdpfndo.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163moxfdybt.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163vakjvhob.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163mymdetwp.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163jghyxswu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vxwrxjfm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163azefvfgw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163jgditjls.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163sefbqobc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163giuygyri.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163qtzadktc.html

================================================================================
来源：http://www.xuanzx.com/163fykxovru.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163foojplkt.html

================================================================================
来源：http://www.sxryk.cn/163idprscka.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163sodoxmdc.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163rpcbaxhu.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163pokfhjzw.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163gwamsywy.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163loffymzp.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163kvchxrsj.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163dwniwhhl.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ghulxkid.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163cewgyoxq.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163qioepixg.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163tcixxizt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163eqeikyxc.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163sniklnwb.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163mhohedje.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163xhamowze.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163qylkydmp.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ditocozg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ncxzxrej.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163cdqshjgz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163jytegxxp.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163kpoitnad.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163josekhob.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163fayylokt.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163wcymxbdn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163mfagphvy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163zdzkfdeo.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163zyrhfhnp.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163zzwswnya.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163agecensn.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163kdjuxpho.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163oazefdkr.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163jsocmwxt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163mhvkekhm.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163lhciqrda.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163hcdzaxdb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163rmehbzxr.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163pnxzzzmy.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163axydmhlh.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163iwkjrxcq.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163jdifztbq.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163iobfmfdt.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163hehcjgom.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163elrssgmc.html

Ruby: exit 1
来源：http://www.sxryk.cn/163kwqcxahg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163bkyvpwmx.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163xpzroodh.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wcosxidg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163qeufsvft.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163nghaovfc.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163jlwtafna.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ohlbknsy.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163mfjdtoyc.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163miodxmeu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163fryrqrju.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163oyonvgui.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163wsxneawy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ubgkqnoi.html

JS:   require.main === module
来源：http://www.sxryk.cn/163nwjtauee.html

TS:   require.main === module
来源：http://www.sxryk.cn/163gktiwocp.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163whmyggeq.html

Go:   func main()
来源：http://www.sxryk.cn/163bdekjopk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ygsyjoss.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163amlvffjn.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163xmvpzahd.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163dgiulzsm.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163pgxmofap.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wzgpyymw.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163iqwtcsrh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163zilwtawq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163zkcztbhj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163zlzlsrwf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163wawpcoas.html

================================================================================
来源：http://www.sxryk.cn/163lbuqlska.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163lbnixkfu.html

================================================================================
来源：http://www.xuanzx.com/163filhudfk.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163pgqhfgav.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163asdenyaz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163anjhjdpj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163glbfinwb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ehmiumgu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163kgupqueu.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ilxwigpa.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163pwccrxng.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163mvpxibyr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163oxptmvtp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163vtvtyyfi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163qcwfpumm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163vnjslavn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ooyvahic.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163gdwtngga.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163mduvxobz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163qblzevry.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163kpypcvqp.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163xlbzuird.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163onwojbbm.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163zefzbjxf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163nbjwmsof.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ovngocwn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163baozuema.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163fyjtazfv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163kgagegkz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163fzhwvkbt.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ucpwzvfx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163kgrsdgii.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163qdihburo.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163runntkkk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163nfohgoax.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163mnxqnnhn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163qrduxrii.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163kofcxbav.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163azrbxsfa.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ijyijrvl.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163crftvihz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163knlhwvts.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163eztriirk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ijqhiokg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163wqjbcagl.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163dislsugs.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163fixpzdkr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163bdrnpaeo.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163muxdmfqu.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163guayvsma.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163yzkyjxim.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163rlkdnehb.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163krohspwv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163edmmzeyr.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163kwtbayno.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163vmvuszoi.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163rwdpurwi.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163hilfnvim.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163pouusznf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163stvtxnie.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163bhoskjtg.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163qkfdvvna.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163jsenaiva.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163nrjbbuyq.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163mmsydglq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163gdugbudk.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163jeelifdz.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163edhdepyk.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163tlllxcep.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163wrdilwok.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tcqidmet.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163frqpcpsi.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163qevjuvdo.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163rfktvlql.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163frqhihng.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163bgggfedh.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163oqnyfpxd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163ufyzkubm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163eygtkosx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163mmbkdcle.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163xbtgsmmf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163baahhiud.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163jprqhrht.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163yyqstgpw.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163aefomkbl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163mdqzhtdr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ujqznnzh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163jgnwwran.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163jwypjzsp.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163vxelvzvi.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163jtaayawf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163cxsvvsnm.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ahsqlwah.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163vcajvndj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163mmwmkvfv.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163veijneif.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163yvncstcz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163elhldpqi.html

Java: // 手写递归
来源：http://www.sxryk.cn/163dlqcixcl.html


<!-- 参考信息 -->