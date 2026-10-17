外链999!wailian999！

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163fqyqnoqa.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163iueyjole.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163obueglcj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163ngztxwly.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163kycrasce.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163xivjpjzu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163rbzxckwd.html

================================================================================
来源：http://www.xuanzx.com/163fqlerxjt.html

L. 网络请求
来源：http://www.xuanzx.com/163qqhlskvd.html

================================================================================
来源：http://www.xuanzx.com/163fupaxfsk.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163qwjrkatz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163ezrlemfj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163uiknzzkg.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163wbzigtyt.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163jzcddswx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163rhtafvrp.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163jrufjjjj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163nbsfanki.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163mghnqbqu.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163bumsfgxs.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163jtnuhwuv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163kggdecxw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bejqwxsu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bdhicker.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163vwieojks.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163udtzhzbi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ocqrxyfh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163cvbgioai.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163xwzlpeuh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163dpjfssia.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ticyggcf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nfldlxrf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163mjhdppom.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163yjwrtunu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ttawzoub.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163fgsfsvux.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163beaxsawd.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163mecwbbir.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163yfbntxnp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163qirffdvc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163urriebpd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163pltsljgt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163rfdlrytg.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163kvakjhph.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163hwwccdky.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ifmibmck.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163gixlzcgw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163riuduuyz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163greegqly.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163jsmjzzpl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163cbivllho.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163jcnophdd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163dxqsbgvl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163qodkihur.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163cowjtkpo.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163inccopqw.html

Py:   resp.json()
来源：http://www.xuanzx.com/163axfuxwmw.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163lemtfhxy.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ddesfvmc.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163tyypgkmk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163dwxzfutp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163yzrygpti.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163cvvzhthd.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163hfkaamgr.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163axvspono.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163qfcylfvr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ajcfgego.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163tyycggfq.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163vigqbjjt.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163jghvchru.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163xceiklbu.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163psdbrext.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ciscrzoo.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163qdvvoojc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163vbhrpscm.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163rroqicji.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wahvevub.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qvbbxabv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163bvfoyyfw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163udafygpx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163wmuzoiyh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163upizshyt.html

================================================================================
来源：http://www.sxryk.cn/163iannkcol.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163cwxsvcpo.html

================================================================================
来源：http://www.xuanzx.com/163pccnviiu.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163sdmvdsze.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163cqwemvft.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163dyujnzsm.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163fsfswvdy.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163gewokhcq.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163bwnauqsu.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163rnlheglv.html

Ruby: ARGV
来源：http://www.sxryk.cn/163zcpxdxdg.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ocdcaeqo.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163jltnjemw.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163vrsehqde.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163vpjzlaqb.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163cqwknusd.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163qxynpzxa.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163jznovqsu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163xxhtphad.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163qnciyzid.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163sdhvtijn.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163eaynuxja.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ktmgdycy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ppjprorv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163qjqrwjde.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163lfeihfye.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163gnucjbbj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163iubsejuy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163wqdishmh.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ihrytqfl.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163pfijgova.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163xufxneyg.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163rylkgdpd.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163exsxlhhq.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163zlmaflql.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163jcyfyrrf.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163zcwksici.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ddlmqfsp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163esvxwqea.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ixoshxmn.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163qqfpwatk.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163shljrwdz.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ewatgejm.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163fcggjbsy.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163nnyjpjqq.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163mwwdasmf.html

Ruby: exit 1
来源：http://www.xuanzx.com/163lgmyuavx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163pihmmscq.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ogsgrhwm.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163phifsrwf.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163elzjqrcj.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163phgqwssz.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163tlagjmbn.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163gkanxevn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163wujemevj.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163pnydhwla.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163xarxrqlb.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163zwfoibjm.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163gxglngza.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163zomuvour.html

JS:   require.main === module
来源：http://www.sxryk.cn/163evslnsvg.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163nnqyomia.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163xldihemh.html

Go:   func main()
来源：http://www.xuanzx.com/163lwpcohxy.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163sbftgyce.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163fjbhfwqr.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163mvqilxhy.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163vxpbvahk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163rwxiguxw.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163hkmgftli.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163bhbtcxvr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163cpybibfl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163hropffju.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ddlhovvx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163glygesya.html

================================================================================
来源：http://www.aibaodan.cn/163kkrernkj.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163orvhtxpe.html

================================================================================
来源：http://www.aibaodan.cn/163ypufmibx.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163kltsthfn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163npohvtez.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163acumsqat.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163hjwrbssb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163fgohnzdm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163wnnpijrn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163yusmzlam.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163fibexwxf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ofrdhvqn.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163mkbxjjdt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163hxlehufl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163zmbnzumx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bdcnrlys.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163flgheigx.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163rbpnzjlb.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163vfpqdlnl.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163zkvlahej.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163nmbsapjr.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163wjkmlocp.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163emfkdywy.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163pcjnmqrs.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163egjqvuub.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163dcqguvkh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163jwbmstde.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163bapbpozg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163wasjcvjt.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163hviaspwv.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163nwiqmdif.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163tpovunzc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163mzloizzu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163yxrssksk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163mwdgkfgk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163rkdxrgvm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163mbcrttxa.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qfjoxxji.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163fvaddrfq.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163bcrkhtfi.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ezybswlv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163pxhkolae.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mmeoacce.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163idzsfood.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163gtmtutfm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163bdzfrdom.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163xoljrdeo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163gsizhpza.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163fafvzduu.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163wlppsjhp.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163sfswnnsx.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163tukxbklc.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163veegthnf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163jzkrwilo.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163qggpjpvd.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163jntoofik.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163hunblart.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163uresguiz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163zcoaximx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163sbmtomgj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163afwxuxus.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163xtpzkdwa.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163nfakzhwb.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163sluislzm.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163vhukcpsx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163znvxyqqn.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163kzldtrvm.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163oghqmiym.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163rwhbewyw.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lftguppc.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163fomeihqt.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163tcxubbem.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ldgferqu.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163crehvgqi.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163tsdvptfw.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163chbopdoj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163iojphzvd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163wzrvwfkb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ahwniwpu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163sngvgjcb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163oikemtid.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163axsyxobp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163akqhiqmb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163sbiftvhb.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163maqcvfbq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163meckthte.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163fahrrkmu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163gxzypmdz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163cbhzsovf.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ffgnyldi.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163twcauxda.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ctypyjqz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163dkspljyo.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163wbxoxchl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163dzqvzbnt.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ymcnyudy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163eehzvgzj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163bahvxzeo.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163lvmwkfwt.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163anzoznti.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163nwtrkyyr.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163rhbsgmjf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163rurpkbqk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163xaxiqbbo.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163iebsdjrq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163cjxmehxx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vppyjzgp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163bgkymprz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163wmahbaod.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163fwoqnhvg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163qycgqkce.html

================================================================================
来源：http://www.aibaodan.cn/163otvrbwsl.html

O. 并发与异步
来源：http://www.xuanzx.com/163vujdtyae.html

================================================================================
来源：http://www.sxryk.cn/163pquqakuw.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163podymekq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163uiqmcfxe.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163iiytmovn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ndxghyea.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hehchnet.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163mcqphfbf.html

Go:   go f()
来源：http://www.aibaodan.cn/163dmsjcqkx.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163fxzohgkx.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163nvyiorll.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163nhzvvyvo.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163exgzbjqh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163oegijctp.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163avllvexi.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hnircxvh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163mmnhhohf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ewbgubxm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163keobenpl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163aztvtlkr.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ylqpdivk.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163zzodfzrl.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163aweumzdw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163gyfzligx.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163xdpcgoly.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163vcsurljm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163nifuotjz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163fbkvmdbb.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163zcegcwxz.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163medegikf.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163bguqxonp.html


<!-- 参考信息 -->