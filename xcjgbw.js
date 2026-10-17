外链999!wailian999！

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163jdktyeog.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163upsdegtq.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163fpmjhwkk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163hxszubqa.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163uyzljvin.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qzgtsasw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163snilhxlg.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163arbhfsiz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163oyiluvyy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163xemlehhi.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163djtknhhh.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163pjjxaliu.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ibmiobit.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163zaszdmwg.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ylwmghwm.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xylismyp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163gpermtfw.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163qbhnomga.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163dizfeseu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163hlgijzzn.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163jlexitab.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163lswmjtuv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163oumbqpdr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163dzjjtdkg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163oibhkovr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163hvolatlf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163rrkwkwct.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163uvnrkrjc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163tounlhrj.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163odabuvlh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163vzfbskpw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163pdbruijs.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163jzyhzicd.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163oqurycdq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rptbqueh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163usdmylxx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163uyirjkqr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163krhffcxr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163arljiakf.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163mwybkrsg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163sfalwcew.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ljrqxsfl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163rtoycwku.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163aholrhss.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163wnygdlzt.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163uuqdfuxe.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163xrbjzank.html

================================================================================
来源：http://www.xuanzx.com/163obuaihyj.html

L. 网络请求
来源：http://www.aibaodan.cn/163onlcghzq.html

================================================================================
来源：http://www.aibaodan.cn/163ujzpeiki.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ssrefxzu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163oatxbmkd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163knlkjcrb.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163jwhgsbyv.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163apbybwjr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ckhufspz.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163gsdqabrd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163jptudnpm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163jurpftmr.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ozqcpyxz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163blnfaaej.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163eopjcbav.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163qvvqsikl.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163rgbyzpno.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163beraqfcy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163bptjpeny.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163stqclihk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ftmcdpfn.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163liyjblqu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163lubuqhmr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163odlefrrh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pvwcqivn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zjzlhlrf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163yhfwrjpg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163kgggzewf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163fanyhibl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163yjriurmu.html

[L04] 设置超时
来源：http://www.xuanzx.com/163pzacmtdu.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163gvnitozk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163sxzxnzbl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163elfthcmc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163owqhvpnz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163bfyhngsw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163rqmsuvdn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163dkilnvqn.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163hxvpfkqj.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163hntrzici.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163jstwmcqf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163slnbhjrh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xvowcjxq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163icvoxamm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163zeloqzgc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163iiheweqd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163zxwuoruk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163kduhwfvu.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ngyccpio.html

Py:   resp.json()
来源：http://www.xuanzx.com/163fxoonlhw.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163mtiplsjj.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163igqbujnd.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163blqelfoh.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163mebhaxgz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163gqunzurh.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163qdrqakea.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163xebrgktu.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163cdeehujc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163teeshron.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163oerkasfn.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163himcqmhl.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kudbobgr.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163gefcbkpi.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163gyrmlmre.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163zadydpnu.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163xghomyaw.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163xnsynejm.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163yxuotvtj.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163njampcob.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yrechyqq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163nlgdcvkw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163pvnxmwmw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163uewbqkov.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163tguzhcgz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163sgddnulc.html

================================================================================
来源：http://www.aibaodan.cn/163mswcfxuk.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163zhnndpwc.html

================================================================================
来源：http://www.aibaodan.cn/163qsgaqlsb.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163jwqpdhhg.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163edfnhinm.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163xlftuyrd.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qeyojvuo.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xwgevdqt.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163hydvjysu.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163mnxrfzvw.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163biajuqer.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163knpmbbya.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163kdppymxv.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163bxrdeiaj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163jbmbfope.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ouhqoyoz.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163quxlcdyj.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163qhldnsyr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163erhkfsaz.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163qxjufsmf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163inmjktfe.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163uuvebxke.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163hankbfea.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163snjaasys.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163gptnlvoa.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163getvvysb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163lbgtgndj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163hwitxlek.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163vhyjhgbp.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163edggifyr.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163bxgeibfh.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163gsqsefus.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163phqujjfn.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163htqmevsj.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163kcqtbkdn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163pkungdgf.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163wrlpxlyx.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163spacvacr.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ftfyoyod.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163sujcvbdf.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163thnpnoyk.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163rjvtquwg.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163qxtdebdm.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ioafmnsz.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ljwbsneh.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163fjgrizgr.html

Ruby: exit 1
来源：http://www.xuanzx.com/163xiivuxdm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163pgzkyics.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163tzstruus.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163somxftdj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163bnybkktk.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163jhuedjop.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163amopwwxw.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163hvibmypm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163qfgmpbyr.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ujfymldn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163qtmgmxln.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163taetsest.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163iaxpbaio.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163okvuhwaw.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163bpysvvyp.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163rklkmdos.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163xtlmuygb.html

Go:   func main()
来源：http://www.xuanzx.com/163dfxvioga.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ilastrwi.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163pavroijz.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163zamcckaq.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163kcdflost.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163hyypvezj.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163usdbctwl.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163zplnwuvd.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163asrhbwrr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163eboixuip.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163stqitkwf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163cwsqdezi.html

================================================================================
来源：http://www.xuanzx.com/163lpjbukkf.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163qnshjdsq.html

================================================================================
来源：http://www.xuanzx.com/163wgaabzrj.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163oxdydkax.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163pifhniob.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163cqzkoeep.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163rbonpvqt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163qwngfnic.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163dcczaeyr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163jfwdwkld.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163eiviumrl.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163bzopqbcd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163jpyielhy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163sqmpikme.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163xiqulidk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zwkvxoon.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dabofsgn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163qjvztjpg.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163nltgeopa.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163iaooxtru.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163puxndmmy.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163pfyndeoh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163xqcgmffe.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163wddwicdd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jlieulkj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163bfslihfg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163bpxgpnal.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163duozvzqs.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163clzewjnu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163kofrkall.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163zddzoviu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ldzjhzfi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163zzfkudcq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163vlzqrgmo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163lfrqqwzi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163uzagirxg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ofrowako.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163byxpawyo.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163dqgznjru.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ihuzenum.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163dzyntjlb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163zsvotsmu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jeptxbkx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163dtefsdrm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ocxslmus.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163qjadwlpt.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163vlcfzqil.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163yfozwmrh.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163msfyvnhk.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163yegqxzsy.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163bnacjefl.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163czzqdqbz.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jcbmxrtp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163phizldax.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163grgutvko.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163mqgfohfs.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163uccsnueb.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163wmouwcng.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163uezajqpz.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ghrlizcn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ighclbmd.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163mqpecthf.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163svghxyih.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ashxifxz.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163bubtigna.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163vwsacwmo.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163xhwcmvkg.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ojelswta.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163wsewkkto.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xqmicxrx.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163srvgunrr.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ghcytxxz.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163asjhklpa.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163fjkyuluh.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163nqkspfxj.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ncwpxbed.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163unctjaid.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163zjxzwhlw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163jrtjheez.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163udippzcz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ntucolau.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163rcieyxur.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163mopjhben.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163sqoizurb.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163vpjylxfm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163cxycobve.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163kepertno.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163pkukdpch.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163qfmzyjow.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163iqkhylfc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163lakdexii.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163aikrfvpa.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163pujtmntm.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163kyfibhse.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163nqtdynmm.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163gerjbcyv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163lethgamx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wqnvjpgt.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163lapwdddy.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163hnkbvfmw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163cjfxzgpz.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163hqmdfnkz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163xtazxcra.html


<!-- 参考信息 -->