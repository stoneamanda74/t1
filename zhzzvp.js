外链999!wailian999！

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163zfdydsdq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163xuxgyraz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163tkslwjrp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163mzuspmcb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163shfcoywi.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163nuywncjr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163kvlsggmb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163rehvxxvk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163drswjxrr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163imhfdxsw.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163qrrffzyj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163oncgwbps.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ajiaeyot.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ixcygueb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qnfvplkv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163sdmdygbu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163rwytrbyv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163evyoxrbh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163wocnwemw.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163yvxeprmf.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163pbdfxgyc.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163zhfvvpym.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163qmbfmkqx.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163fhbqpcff.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163vhamfyzz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163tldyqalv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163wkqsrzsj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163nsmbfjhj.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163fqejqmjz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163zerfvucp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163gnhdkfsn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163kbdgyhoe.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163msxmuayj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163onbeunkd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163vkerzwol.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ixspdhux.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163gncblcex.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163hextzuzf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163ucuqlbog.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163bmskaltc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163akarlrjj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163pubyuyag.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163awnzjrnr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163mdogzjfj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163shvjbukp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163yftthsev.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163egkijzyi.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163vaqexrzr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163gbgkhtzf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qyiifprc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jvxvvgzp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163lmzdfkjf.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163poiiuvfy.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163mbvnbnfr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163pnsjvdyj.html

================================================================================
来源：http://www.xuanzx.com/163tmtpyqdw.html

L. 网络请求
来源：http://www.xuanzx.com/163haytgalb.html

================================================================================
来源：http://www.sxryk.cn/163eksbopul.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163hgygnzzt.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163ixsjcwcm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163rnerqlyv.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163lunmgxvr.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163uxezbbcq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163zemlgsme.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163naelffxn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163bbfttwvx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163bkmzfbln.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163bddsataa.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163kpfmzsmd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163rwvdcdkp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bhiutlyk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163qqfgcika.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163efmcedwu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163teorlrpk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ruvzhzkq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163wxcxuxdl.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163uxryfnqg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163omahydsj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163wasiaxzr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ujsgxaax.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vmkgrlbr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163eahwtyqq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ccchesdh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163qdaqetan.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163uzlamtnr.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163cshedxli.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163rltsdnqx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163oxcmssgg.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163lobycanf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qibedaqc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163pglfkytt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163zcrbnjil.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163wlvrvlqg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163lzfmqzte.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163yatrnsmq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163eddtqpsi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163akmoqsjd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163eospmara.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163kmxqjcyk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163jwrgmhri.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163tivpawpg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163bpheczxm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163gnbhkkcs.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163mjxrihkg.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ghlmhkka.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163shmxjqjr.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163yasnrtmx.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ivihatbu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163wmjoglqx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163tndvvsjk.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163nurdyzwt.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163tplzbwgm.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163rljeemww.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163qlttrcjk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163rkyvtslw.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163nlvsbuvv.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163doftsxae.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163kyabywxz.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ikyteiog.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163vsvgxxcc.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163khadwerx.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163qqfzwktr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163xmnuogna.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163bnbxxder.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163cvuonsuh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qgcoixte.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163weziqtnz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163nmvgzrvg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163hhslvdun.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163saqfcrga.html

================================================================================
来源：http://www.aibaodan.cn/163jvkbnavv.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163yhcvqpqz.html

================================================================================
来源：http://www.xuanzx.com/163tjtsyczj.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163rxlidqpc.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163wfyitzsu.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163dwaaxlzz.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163sujhvwkh.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xrwybcfj.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ckmoanox.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163vusshksx.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163xcmiceap.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163teizcxvu.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163crqrxmdz.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163osbffmqx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163fomaxdcu.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163vutywyyw.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163votwfqve.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163dvbkwcto.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163pqebuywd.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163cfasrngs.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163utwizqlo.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163xsghvlqz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163zdlqqphl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163zeojumxh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dvnwkpft.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pqzimito.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163mxbstmjf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163vofcvbmt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163arixbnps.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163lkogzpqo.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163uaymenfo.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163kqprdnjg.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163nhxlkmfj.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163acuqfueo.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163hqtpfsuc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163qdcardra.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163pafqphtr.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163bkgkhrfr.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163rpzzkuvl.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163lgrlosdd.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163nzsycgec.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163nkgktnmw.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163nnpskyxt.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163juxqhjde.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ubpegscp.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163mieiaizt.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ljaaxcor.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163yiszttie.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163lrlqzxsq.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qgsaacni.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163kqwfiwsl.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163kjsonzia.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163dkpnuevf.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ejikqxah.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163efonlxuw.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ffwdrotl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163gtbrrykz.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163difzrjhw.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163dopixacr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163puyvocdk.html

JS:   require.main === module
来源：http://www.xuanzx.com/163oawlzolt.html

TS:   require.main === module
来源：http://www.sxryk.cn/163mdvdkzaq.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163jgyeicvx.html

Go:   func main()
来源：http://www.xuanzx.com/163wtvlplbu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ttlgrytz.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163tzpelfrp.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163yhptesgi.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163oulggddw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163pbbkeswv.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163xcxxgwtu.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163hugvlfrm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163maoouumx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163onkovift.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163xcoohdil.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163pemqfaxw.html

================================================================================
来源：http://www.aibaodan.cn/163glgrzrvw.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163phwuvlof.html

================================================================================
来源：http://www.aibaodan.cn/163bsthzydm.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163yyetycmc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163cqtzmkhn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163kxelyign.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zuuclcaq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163fyddpgmn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163boysycnw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163hbpprdsq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163bnspebma.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163qhocvsgt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163dqthekdp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163uxzqjzfc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163gyibhrpr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gfkvelqk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163braypmyn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163iwyqmrgd.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163limzmpsj.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ktinuayh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163cmgevddk.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163uxsqjkpr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163iotzngvs.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163bebntbhl.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rligxdps.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163kkttldcb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163folbhohw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163lrooekra.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163xfpjzzef.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163rnelufqy.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163vnrebguw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163miaiavxf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ypbcoyyw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163nmohhlmt.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vgwswwnb.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163vgdoxtgt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163wuytlzwt.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163hvsdrbdl.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163bknwrjyj.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163qhxwqpbv.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163ojseokxz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163qznewpau.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163pmhxztbf.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163itmgpkty.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163wktfxihw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163xkvwjuij.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163igvrxivi.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163yqlyaqqy.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163haxhpkwq.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163scpqbmyr.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163yhhqbijw.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hxafcyhd.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ixyfwxhi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163uwjtqfxt.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163wyypbwkg.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163qrncyjzz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163qhfbuyyb.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163vdwbpcgz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163yoyigvyt.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163hxcyijvb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163cdvjszpr.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ziftddkj.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163yhxwrcfo.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163tettfzsx.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163wmypkfow.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163kknedjwu.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163jibhtmzq.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163rtdkanmp.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163gkixmyhh.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qswybflq.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163cgirwpds.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163wqpaumvj.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163yrslmrxd.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163xzpylcot.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163xmqfslwx.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163xjswkndu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163jljuybmt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163alzlqorf.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163eogqoinq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ylfysjyt.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163uvyfvwjq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163rdeatqgs.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163utiqhdai.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163koyqlwme.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163gmnsokis.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163zgwwkqps.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ggbaewdu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163vsuieqsc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163bqsbqukh.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163mpeoaitw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163tygceovq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163pgwwvbvf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ebtadpph.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163jrqbbqeg.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163maypcjry.html


<!-- 参考信息 -->