外链999!wailian999！

Go:   encoding/gob
来源：http://www.sxryk.cn/163ltaywjlq.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163omekvvaq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163bkspoyzk.html

================================================================================
来源：http://www.xuanzx.com/163fxctnpul.html

L. 网络请求
来源：http://www.aibaodan.cn/163idjaxwsg.html

================================================================================
来源：http://www.xuanzx.com/163cmbbximm.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163jskbvevc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163xcwasgfa.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ukwqaicm.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163dgzwpeaa.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163rvzddkvu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163jboiyrec.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163uskicpbk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ydbhbmsp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163xsyvbvkh.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163nivncnql.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163rwoblryn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163lsdmhhah.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163fnafevdk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163axldejsd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163tqjrvgkw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163wfenqkjz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163pxbuatvq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163tpcvekbm.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163mtgnmlom.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163mjuzczyu.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163xutqywyw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163zrarnlbn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qbcomwwl.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163bgfrukvw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163mdzcchep.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163vfmdjwrf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163bbsxamwk.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163jyzyzzpm.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163olaxmcqp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163uredxjob.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qbwrlsti.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dewoqbjg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163eebnjzoq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163kzxcxlvt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163zuhjqbgj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163mxlhbdvs.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163lozptggg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163zifttwhj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163tamkvpxw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ohnwufek.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ykpjjxgk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163rsatpozc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163mdyrzmfs.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163pcvnehkm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163msachtxn.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163cbatieap.html

Py:   resp.json()
来源：http://www.xuanzx.com/163clqvpxhe.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163knyytpda.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163zwdzvtlh.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163vvtqsjef.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163vnfaqfeb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163qglttygf.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163ynzwiave.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163acqgdkxw.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163mvvewpcn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163laicjdzl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163bofzgzeq.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163fwjrljzv.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cjwozkqt.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ywrdppdg.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163zvcbxtxb.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163dauaeqzt.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163sruytxqz.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163cdiunrtu.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163pnnpasdq.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163cpymrgih.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163cogubilu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xekfwnhh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163epzytxlj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163vjrgarzx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163qczsbdiv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163avcwhxfg.html

================================================================================
来源：http://www.xuanzx.com/163gxkdygtm.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163diczmlzs.html

================================================================================
来源：http://www.xuanzx.com/163rgqqvikb.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163vsujnsus.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163edrdbbxl.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163mnpytfvl.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163nerrvgbh.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163eonexfzj.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163lyeuboyt.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163lxrejqrj.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163enxtfehv.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163whzoiliy.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163citgkwuw.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ujbnnmqr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163vjffqsbq.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ramxjija.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163uyshizwz.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163dhfcpzcu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163dxaevhit.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163vvqhnytz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163zfafrqxf.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163dfkmccza.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ucyuilnc.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163itzdnqvy.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ufuiscph.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qqjufgpq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163luzfingc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163nuozxfaf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163jvztifkr.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163zrftkfwe.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163phxuytic.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163mxceioul.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163qixfndjm.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163afiyokyp.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163obrfzoff.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163dwcfyska.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163xkfwkmyv.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163xqnkcaur.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163tkftcalc.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163xmoxuflb.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163jrdecprl.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163jcntsern.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ekezpqpo.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163utldabtn.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163vdsafsqx.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163csrlxnen.html

Ruby: exit 1
来源：http://www.xuanzx.com/163orqvrjtg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163jxiplmtl.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163lduuamud.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163msjdwnzj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163gnkkqmqn.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163yomacini.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163crqfpbgh.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163bggqukja.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163wpqdxdcx.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163oxeypsgv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163wcfgpnjz.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163iknvdexh.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163oodudxzd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163hoocvlnc.html

JS:   require.main === module
来源：http://www.sxryk.cn/163xxwhohza.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ghclpnbi.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163zadwfecu.html

Go:   func main()
来源：http://www.aibaodan.cn/163czofvakv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163tivtpqlx.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163xgwzalth.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163sjvewecb.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163egdqhswf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163wjdygacb.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163cmkzdrgf.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163nsnqliak.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163mtfogfsn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163gghwglyn.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163yfpfumwh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163mdvahqhp.html

================================================================================
来源：http://www.xuanzx.com/163mzndedpi.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163edexzbmv.html

================================================================================
来源：http://www.aibaodan.cn/163vkgmzpci.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163egpxzflq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163rlggtzas.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163zhdfwnuu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zfotclij.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zwvbkrov.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163hzjsznvn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163kaclximz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163hvsntcmw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163hqlnptqg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163qyrxukdb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163etfoompe.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163smlhvaah.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163yrjufkox.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163avzrsede.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163cfjfzdok.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163fotttdzs.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163dtktxsfy.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163vhwadnjz.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ffzkosmw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163wtkmkwdy.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163orkvedgr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163dhhqtpct.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163gkyklltz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ubvtlkjv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163khmissgy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163twwipwbt.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ccskjvrm.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163rbtztbdc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163twlnzhnw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163efzpwjxx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163myzqdiyb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hwjtscfr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163xwfpvpec.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163utafhilh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163beemwkaf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163jsmwkaie.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163tbhpyvdb.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163zqywwgbo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163mfvtduws.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163gyuxcpnr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163pyuuetmo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163lfbhmanq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163wwxhbjuz.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163nmcujctm.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163hzvulxxf.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163qhwibmzy.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163iugkeeja.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163fqvxkgiw.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vwekidds.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163eiiewhmu.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163bblbmpxm.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ooqllcah.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163iqyagloj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163eqtuivuw.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163ozamenuo.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ewxrgnno.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163krkjlyjm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163esmhhcmt.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163yqikdlbw.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163fyqpdtxh.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163vhlloeag.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163hqxxamix.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163eewnccus.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163fuobxzxn.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163cvugoqry.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163denjpsqe.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163bmjhhxro.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163kcfwgizg.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163suunurye.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163muooqgpl.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163oafribzt.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163scccfinc.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163gqqrrweb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ygbetiyb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163zktfolry.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163qmfaazvx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163jehsocih.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163bhwberkl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163zacskapl.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163seziwsjf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163qfoarzia.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163nnmhtlcj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ldatccvc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163sftatody.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ihsliaji.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163sbghyrrr.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163duiiilkx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ctqwhwxk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163zvxfpkok.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163fufsfjcd.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ckyjxssp.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163xlsyizvy.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163josjsrmg.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163eaunfqat.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163gkdgeyrd.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ococstzf.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163cdsundxi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163tndqfcdy.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ktyzmshu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163gpcakwgz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163nzpdyyym.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163lvbgvrxa.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ocdzokop.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163lxtmgchn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163omgqffgf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163iuvirocu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163awhgfzdc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163wiglsgbt.html

================================================================================
来源：http://www.sxryk.cn/163eqntbpkl.html

O. 并发与异步
来源：http://www.sxryk.cn/163wdtkidnb.html

================================================================================
来源：http://www.aibaodan.cn/163hllkcyzp.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163dxddlxwl.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163oyqkfszy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163pvwxlxja.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ucwkwweg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fpugtaiy.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163jqfnzggt.html

Go:   go f()
来源：http://www.sxryk.cn/163rjtgqajf.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ldsgxlfe.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163rjutehdh.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163mkomecxq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163jlekcbdr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163lbenvrip.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ztpnxvbx.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163rftmgamo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ikwdxiah.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163kiuaatne.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163jrxdbcvi.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163koakothx.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163caaihgfb.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163zzcubpzx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163kfxhfeyh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163fndycmct.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163kbxifjpu.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163sphukrpo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163gwdudzrr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163hgiowwmj.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163lyklclne.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163xuxucngd.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163eixjleec.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ucdehlra.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163pqnijwvh.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163sdwwnnax.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163xhunwfud.html


<!-- 参考信息 -->