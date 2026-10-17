外链999!wailian999！

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163kevnrvwh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163jzzbbmbg.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163kgxgdojk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163dwidfrmx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163odklhfke.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163mhdejtbd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ynnywhzo.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163qcejgxre.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163zeftxarp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163ddgcgxeh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ygouqfck.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163tnsilqar.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163fdqcnttr.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ucdripck.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dexdwxwe.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ylylyniy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163myyxxnng.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163nukzdfdw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163mzzwubkf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163anrwesog.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163yyqkfown.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163fjipnxze.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163yypwzglk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163rruhydcy.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163cstwtqtx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163qmouinay.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163khwkjrls.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163psuagmdn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163amzhyhcs.html

[K07] 进制转换
来源：http://www.xuanzx.com/163zmrijugp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163irtgbbxn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163tmtgurih.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163jsiuolcm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163tbnjbdmj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163poyexbpn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ylunxgbl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163bfggqxfd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163epsywkwg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163xfapbzdq.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163vwnolzky.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163volmbugn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ruldhhof.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163xqqgiqyn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163yfyneogv.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163tawynvae.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163zjsungws.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163phrkkdfb.html

================================================================================
来源：http://www.sxryk.cn/163iaohptgv.html

L. 网络请求
来源：http://www.sxryk.cn/163jantdlfd.html

================================================================================
来源：http://www.sxryk.cn/163kfgdxafw.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163cjaoooeo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163jcjcctfc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163cnlftwlj.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163almgrmup.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163zctqokvm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163pslnshnu.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163gnkietjg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163aidaqelq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163joaahbsf.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163lwknhedq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163dhephzls.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163udawhuwx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163stycnwio.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163rwxiuwjx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163udptsvps.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163fkjagzxt.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163bkypwnub.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163piwxfbgg.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163mnorzsax.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163wqtlgqcx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163zbwmtzhy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163tfyvaoda.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jhinstqv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163hyfpsofn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163nbqyxdkk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163yccishzz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163lrldtfkw.html

[L04] 设置超时
来源：http://www.sxryk.cn/163rmqqptfm.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163oyyqrhdx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163jmafefax.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163aqgzrxff.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163oqkarzsb.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163snkjbhca.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163xviiwmvv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163brifedjz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163rhlzvgmi.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163jsrgzjqm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ujzcizxn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163kkmpdpbq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ilqdhmqv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163vvagtwln.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163cqqlqqxw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163rzlzxzdb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163oyfpzxpd.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ribrtocd.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163nvwosbqd.html

Py:   resp.json()
来源：http://www.xuanzx.com/163tkpirlqe.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163hjiccbce.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163knbczhqc.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163reopijol.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163pjdgcsom.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163jirkjrba.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163xvdrkbft.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163vezibjgl.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163zwuscljr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163urhbuono.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163bekttxde.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163lbmaffkk.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jzsybnip.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163yhvvrdos.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163yohrokwj.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163cppqjvkt.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163rkjswyud.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163peqdgsra.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163zxrntkcl.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163rjxufmeb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163khxjarra.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163veixmwfr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ktyzrxsg.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163rrgjdege.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163bziagfws.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163twoqojoj.html

================================================================================
来源：http://www.aibaodan.cn/163dqxfchuk.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163zhjbeqnu.html

================================================================================
来源：http://www.sxryk.cn/163sqyuzksq.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163bikxdhtc.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163wufauver.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163onoiydko.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163wnmvifuq.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163hxgwladk.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163gawfoqpw.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163xdxijxgs.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ajkhbdmv.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163jovhvsop.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163qitexjyb.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ytopmmhi.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163rfxbyrmc.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163rmykbqim.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ihcloxmx.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163djbtotrr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163legobein.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163xtvtwhvm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163kurpywoy.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163kakqziqx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163gxfgbdtl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ttukspuq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163oylbwhnc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163wjoilvtm.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163eyayjyfi.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163sxgexmgv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163pgbjutdf.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163zyfvyhgr.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163uaqqmuku.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163yxwtkiqz.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163guoexres.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163pzqvnurn.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163kmmkcxsr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163hylrrlew.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163yigeqssl.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163vdkcfukl.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163zzanyqic.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163jycvbhar.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163bvcsmevv.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ezrwnkbr.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ldtnmmap.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163hrftbpun.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163wujgxoki.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163araathjt.html

Ruby: exit 1
来源：http://www.xuanzx.com/163sawkpvrc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163aijqahqi.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163shzcgetw.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hiqrlagz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163tevaurrg.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163gedxwfdd.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163sxpcmqud.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163snjnumlt.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ktxuqjaw.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163rmoowgml.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163aoqntgzp.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163apmzsntg.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163ekuvaoop.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163qxmkmhwm.html

JS:   require.main === module
来源：http://www.sxryk.cn/163idxruntu.html

TS:   require.main === module
来源：http://www.xuanzx.com/163dtcfnbbv.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ulbyzxzq.html

Go:   func main()
来源：http://www.aibaodan.cn/163zeuzzvdj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163uxrtacsx.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163rpplgndy.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163firkbcgf.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163gpyvflmf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163gorhncbx.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ocmlkkau.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163refkbvpj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163mxfgquod.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163iqgotufn.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163bkptreia.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163bssgfbsm.html

================================================================================
来源：http://www.sxryk.cn/163uwpcclgp.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163nekizaum.html

================================================================================
来源：http://www.xuanzx.com/163aqakzmbq.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163xuaatbxo.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ugcchedl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163huptgcxo.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163dydqchvj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163cukbjdqc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163diaqcymt.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163fyeaaksy.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ymjmozoz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163kkpetcvy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ttsjqrpd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163hbyqcihn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163mcisnrid.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163aigiwzgj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163sxudcxxf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ukjmquwt.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163crbfwpga.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163tcysbzva.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163zasgniqy.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163klzaqsku.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163rrvqjznf.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163aqfqzylk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163diaojjse.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163bqqrhxmv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163nmpnjwie.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163rodgectn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163jcasxygq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163xnbafzyv.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163pdumhhtm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163rbtiypbl.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163oilhurkb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163tkvxhtii.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163uomdcxld.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163wklsnaun.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ibskssgl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163uivcnixq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163kkjmymbf.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163pkabgews.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163imkzuxnp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163upjiqmsq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163hbgxlzdm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163idszptkk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163zpsgpcva.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163fylutjyb.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163giqxezgq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163wjkfeuyk.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163adodakbb.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163dionause.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163jempyplc.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163umyhxefs.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ifxltjjk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163szaqgfai.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163siztxqek.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ztgqpkcq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tkhckywu.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163ngbpqlsz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163bzhhqmgq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163wmeapjrl.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163jbbnvukm.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163dmzqambm.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163fcaiwfxa.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163wfhpffac.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163neqgbitj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163hbidpbpj.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163btswgapa.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163mcylfyef.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163fplrqxmz.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163povdsjmc.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qumaxmar.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163hxxoprtr.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163hqdtvera.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163fnofltpt.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163uxudkkho.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163rgeizlbb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163qfrkrqls.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163hnsgoiga.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163pttpazwc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163xirguvqp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163nxjvvish.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163lebmoyhy.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163mhayifdl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163xvznnbsl.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163zwxmwlhw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163wpftzpph.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163fnwkiyak.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163jwrfuprz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163sawubtxr.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163evfqaucp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163hyvxziij.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163voiyekpw.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163zvcbqozs.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163cjtkbimt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163hmdpafim.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163xpsavvhy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163iebjxhux.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163vcnutvwv.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ndwaxesm.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163tmmksjqk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163hnbbvyrj.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163taojoaom.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163jnaqokqv.html


<!-- 参考信息 -->