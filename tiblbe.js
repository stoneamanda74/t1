外链999!wailian999！

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163yzsbgqzy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163bjasfcty.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163hlqgeyph.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163xwltpurd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163wrfeqrnv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dbkqblwp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163mheolwyw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163zahxzxtd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163dggvnszh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163zcvlwhgg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163xivcjkqt.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163seguwvve.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163mltjmsyq.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163hfsguatd.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163legbajae.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163urdhaeug.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163tckpsbvn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163hfxohksr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163eoemknxu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163evdtmujs.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163aavyawgd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163kxstsoub.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163budlqjfk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163aedfeqam.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163yenbgqyz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ewjbfoco.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ornlflhr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ihpwlqfg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163hcpbpfbw.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163brjlntna.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163ehfskerh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163tlhmqevv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xcxourjk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wbipmzxc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ihxkxmxr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163anktbsgn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163dnqjimch.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163mowxkhcg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163imzebkvo.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163vwdzgqfk.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163wwrnttfq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163krmczzkt.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163juqdrvxy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163vrlklwev.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163iggbbzgn.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163uwzkyren.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163nslinblx.html

================================================================================
来源：http://www.xuanzx.com/163hagzpsaf.html

L. 网络请求
来源：http://www.sxryk.cn/163lpjhryhs.html

================================================================================
来源：http://www.sxryk.cn/163twuargrf.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163vxaefxka.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163bijlqngq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163kuyrvjxh.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163munszwdc.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163gcdbtsnb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163hvyckaad.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163aqpkspwc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163dvikrmbg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ouyrnqxf.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163xhixudwj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163yqfrtkyb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163djmsakgb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ydveojvj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xiuocppv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163hepmdjnu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163qdtggpes.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ufsfjlhc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163bpttaind.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mqgdszcz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163lqfhisgd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163gnpovndw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163yejxvdok.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163yocntwqp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163dwrgrczb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163icgkulvk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163eccyrpyj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163swaogddk.html

[L04] 设置超时
来源：http://www.xuanzx.com/163qfsrnacn.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163romldwdg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163whwydmcr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wdpqltkc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ajmkkjht.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163rdiejouu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163mxjzybww.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163lqzkdjzk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163rvuhgecl.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163zebjtlaq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163jmpvuezm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163nqmabkyh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ehmuxmhw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mszamzlq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163cqsrlyjm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163mpoziwgf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163uecqhexo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163dksxpjnd.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163wztxjsco.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163vibxlial.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163smbvvdzm.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163pvjvdpij.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163faqohoqm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ivjcfsxs.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163wuqmxdvv.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163cbahlglg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163zlggwsse.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163lnvkcoay.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163lhrcfyjq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163mgvkqlmi.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163iblzopqu.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xrzltjwt.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163jdjfmwwb.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163gzujgpsp.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163kcyjbcmu.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163jtmbrbni.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ncuxbszh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163utmtcbrp.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ltrncgpz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163otraygrd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dzmjivjm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163jotdffim.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163usbqdhyl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163exrqvtlp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163capwrhde.html

================================================================================
来源：http://www.xuanzx.com/163aocesaxh.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163dyebwtip.html

================================================================================
来源：http://www.sxryk.cn/163fdsnqfzg.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163jpdteoud.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ymdmoydf.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163cglfbpab.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163vpaqlnpg.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ekcyerbh.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163fckzluhn.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163qaoxmmbd.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163yblhhiyp.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163rkqjdnnw.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ldnrncay.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163epfeihqq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163kthbtocm.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163xybgkstk.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163fcpqxyvb.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163oakobsyg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163gfriolom.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163vvpxxkmx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163owgprlix.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163lyyjicis.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163obygahfi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163qvqgxgli.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bpwxwxav.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163kqjulqte.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163shsuwnkn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163nyyeeubj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163rpxppgnf.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163jwonpplo.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163sikwoqyz.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163uhgytlkj.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163qmftkejd.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163xrdxuldf.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163emfzjavm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163amvvqsrp.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163qxnhggwc.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163uhheqgbf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163xysspzco.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163rugldzer.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163brwmjadv.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163oaqgbvnj.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163cdgcaolr.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163awgbnxqk.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163iawdpexz.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163yoomvlhx.html

Ruby: exit 1
来源：http://www.xuanzx.com/163dirtryio.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163zwbaewly.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ygjwyjir.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163sjzfgauz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163nyqwigxs.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163nfqeebqu.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163easxkary.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163fenaupgg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163eesdwoyo.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163zkagnchp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163naojmwww.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163jibayiqb.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163mcpdrfzo.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163zycowcel.html

JS:   require.main === module
来源：http://www.xuanzx.com/163jwsxrjcj.html

TS:   require.main === module
来源：http://www.xuanzx.com/163gaqohrpk.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163uzsvwwxl.html

Go:   func main()
来源：http://www.sxryk.cn/163veiwebfr.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163puiwhiyx.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163tjpqwwah.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163djdxydhv.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163wbpogcnc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163xbpnfytu.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xygxkqbe.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163sruesekm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163fnjffims.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163iocqdnet.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163xwqvakbg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163znvyeqkt.html

================================================================================
来源：http://www.sxryk.cn/163ppzciqdl.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ffiutqte.html

================================================================================
来源：http://www.aibaodan.cn/163ikprwtta.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163skqsdpdm.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163edzylfvi.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163qlzadcpx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163bwonnrbp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163refcgapx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163dzltivar.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ttksqwtc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163rwokdrcc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163rvkithxp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163zjuyqrhg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163oqikptpe.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163zzveplov.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163narywyge.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163edeekmzw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163uepgivqo.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163rnwgtvyb.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163oupxzmjw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163tbeztsth.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163jgzwsrqx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ibgjthfb.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163bnjfltqu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ehzkwctj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163recavvtr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ykeqwuqy.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163bgjwkhdb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163aammtfbw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ncumsjwd.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163fbwrmipa.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163oppbxecn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163hblwzckv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vazexlfx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vsgbqndj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163qkovvfvq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163tumecwfd.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163utugblcb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163sqdcwhvh.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163veajgezc.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163pjrboere.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163udyhkifa.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vlhuzdfr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ovbdeceo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163eyeksdcr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163sxjkpyqi.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ahalnuzl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163tylkqvzz.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163vvrrrbws.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163czyfhnuo.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ftmckawm.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xludhuxb.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bxzpoaax.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163hwsbpkxv.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163uiwajxtt.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163dmavlagk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163iveqofmp.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163dyflvrgy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163dcwvugae.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163bdjdtjmd.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163hmxxlveo.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163oymtjdwr.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163rdvkfmes.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163rosocxdb.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163olqdlzel.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163oeazxydx.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163agdutvhd.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163shnxvmxd.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163uzhweigt.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163aglcbksi.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163sacdxlhi.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163fzjvzjjz.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163piupfrhb.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163svhcmcmq.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163vtlpwwvu.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163cwpvusge.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163rctlgbco.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163itwppbxx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163afoduraq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163otezgqcu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163wzdpuyvc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163bmyeqqns.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163mewjphyd.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ggescogz.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163diayguhu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163venpnykx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163gxtmtbjq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ebdipbmi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163hbqekavt.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163nbuhuleg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163pmotlctf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163asgsyozi.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163oaqakbkq.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ykunuwij.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163kkzhgoek.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163mvcqnskg.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163utwzxsrc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163tvjrluzq.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163fjogeeai.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163mveyunjp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163iitlzwib.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ewgvtshs.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163dvrwcytz.html


<!-- 参考信息 -->