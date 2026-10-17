外链999!wailian999！

Go:   encoding/gob
来源：http://www.sxryk.cn/163owavykuw.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163utvxdqhq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163vankrglx.html

================================================================================
来源：http://www.xuanzx.com/163mgmmnyzu.html

L. 网络请求
来源：http://www.xuanzx.com/163rocjbfnu.html

================================================================================
来源：http://www.sxryk.cn/163tyhtbwda.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163pilyifas.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163otbsqkvb.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163aklepsrk.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163cplicqcs.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163narxawkv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163lwlusxsi.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163eaktpvzj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163rcgjspwj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163jpuiuvpm.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163yejueyak.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163sbtkgemn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163dbzteion.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163rwcswues.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163begckney.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163bkfdgqym.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163domkgfsx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163whcovkos.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163vnhjrigs.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163zbckhxsf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ypwkkrom.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163mqctewii.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bxvukfib.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bminjyrt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163nfbfcgjm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163iiapttxi.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163hbyvstkg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163zhmntrrz.html

[L04] 设置超时
来源：http://www.sxryk.cn/163lpkbdhwq.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163lvhvzhod.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163bsahozyu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163xyceptge.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vjtronhx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163nyjteylk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163wyabwtqv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163bjljgbli.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163lnssrgqm.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163wwjnoffj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163jgraiije.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ytlgfmff.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hgtrdyxz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163cihuedrb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163zgxsrzej.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163fjyfflum.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163dkrlaumv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163jikbizpw.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163whrzzstq.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163lynpivzj.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163opzpbpfo.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163tcomyhdf.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163eirfsqnc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163pbzcpgjw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163legropxw.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163bddpmjej.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163plrblaod.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163fzpkeqyg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163qsvtmgdx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163udolqqah.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163qrxtdsta.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163yztghmnz.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163uwhltlhk.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163bqfsvedj.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163zxxvhbch.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163rogxyysc.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163eylfackw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163wlkjgcpz.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163pezivcby.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163gntgxuqs.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163gdxuquxs.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163hgcomsud.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163tjhhodzs.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163pjqlshid.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ysbtgixf.html

================================================================================
来源：http://www.xuanzx.com/163qlbubhbt.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163xodslmtp.html

================================================================================
来源：http://www.xuanzx.com/163dfjhrqao.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163cezzjsiv.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163grawfflo.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163gciptgle.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163pvbqoszo.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163pxthnzdt.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163tiaabqsz.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163cntemjjc.html

Ruby: ARGV
来源：http://www.sxryk.cn/163hmnzzrzp.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163izljuaud.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163vwfcqvbp.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163eryjihkk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163gskrqmlj.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163vosiuvdy.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163aojodnmy.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163uhvgesqx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163pucijjqk.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163gxqbfpdo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163rrjpiccn.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163pfjqkypd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163fwrrumrd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163awmfkvtc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163dbrvfrtq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163bgjniyoj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163kfknzobd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ywgqhiyc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163tuoqhlhi.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163kebkpubk.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163dpoukyek.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163twpahoia.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ecefmxvt.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163jtazbinz.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163vnrtluor.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163vrywxkgg.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163cisodaqd.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163wbmsfljo.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163eysjpdbi.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163jdsdtrwf.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163oioylyxx.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163xpdhrjta.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163aaofkmrg.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163evasjemg.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163bdyosbsj.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ywhdcllv.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ftkzezym.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163qrfgqfwk.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163nlpawmwy.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163zudmvvgb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163pmwttazm.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ociahram.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163zncqzqkx.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163lshdnayy.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163gabndyyc.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163eqggwlui.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163lmllcrdo.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163frslfrlc.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163kokbxovr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163gbcdvsox.html

JS:   require.main === module
来源：http://www.sxryk.cn/163oliksdyk.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ecdhduho.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163cailbphk.html

Go:   func main()
来源：http://www.sxryk.cn/163cvynnpyl.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163vctwpazv.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163aslxfzqi.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163yuyjvofg.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163sfzvvlas.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163jlzdxwsd.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163kfkzxnwd.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163pbcfjopo.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163bnaefqdj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163wmqmlekk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ylloevql.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163dxlcffhf.html

================================================================================
来源：http://www.xuanzx.com/163sfjjjxfp.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163blpjaajc.html

================================================================================
来源：http://www.sxryk.cn/163hhjyvwxn.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163tbakfvxi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163tebwbzjg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163yigqaexb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163gwwuwkeg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163barapbst.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163bbfecbin.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163defftbev.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163hrnlkrui.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163zkrlgeny.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163anhepuqe.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163fwylvbni.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163nwatdozb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ohksxgui.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163momcrzou.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163tbbkpimm.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163orgafgsm.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163vsnjahwx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163xnhxospk.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163bgfwfcia.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163jhwnfdxc.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163zbmmkinb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163nwddjjbp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jhowjloy.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163uikblabw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163npmnmpsq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163kmqoudrr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163phllckio.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ozelzxlz.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163tpgfnriq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ndbptpjj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163gibtdojt.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163pwtijyuv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163yuptczih.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163gcmtgude.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163fwiiaezf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163wsfujvyu.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163htmogxfc.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jlmbgntq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163obspqeep.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163byjfpxhf.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163znzokpbx.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163svyepddh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163wivlixca.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163otwwotst.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163tzqburro.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163supueaoo.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163moibjarf.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163pjvjcnrs.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gikfxwmb.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zqivrbrq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163bkoohowx.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163xcuyitud.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163inhrsgnh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163sfsblotb.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163aotzwlrj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163yfibaaot.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163kdoljhkx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163phvmexsc.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163mfmhkahu.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163gwomvrez.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163gxojncba.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163kssbywmj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163zswgbsja.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163nftzzyxz.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163mjaywnwb.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163xdgitkui.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163kapsagvz.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163smxtuwyr.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163zxzglnnd.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163emolqckt.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163gvcixocm.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lmnclzuk.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163nbvsherk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163pkfqtuyn.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163kylfohvz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163tmkfkqej.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163iihiljej.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163jyvouwoy.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163peouwbqe.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163bwoyrdud.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163rqxqtkkt.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163cruuwgng.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163wjmjfuuw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163cuiixfyc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163eztqfzyv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163wdkoixjr.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163yhtvsvxc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163hrispjut.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163vvenqaug.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ncxtrmhr.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163dffjhgzf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163qoawnbda.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163oygjxmse.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163tjkzzzvs.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pfibxspx.html

Java: // 手写递归
来源：http://www.xuanzx.com/163tirwelxa.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163bnlbsqfy.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163kuxisbiy.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163gmnacfnc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163hrdjxpnl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163xhllrcax.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163pyvribtg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wqcrrjyn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163gycgwilr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163pekptnpz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163gfvvujor.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163xltpoaqd.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163pamuhhxa.html

================================================================================
来源：http://www.xuanzx.com/163oqryghwa.html

O. 并发与异步
来源：http://www.xuanzx.com/163qbzizxxu.html

================================================================================
来源：http://www.sxryk.cn/163xxpjayof.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163imrrtpvh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163cmuqnyuh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163yrreugxx.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163jwqotgpn.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163kokezomw.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163dacwpnxg.html

Go:   go f()
来源：http://www.sxryk.cn/163nykgftdn.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163zlfwaarg.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163npveiogd.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163glzssagn.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163anatoqhx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163dwabsmud.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163tdjueonr.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ttitglrf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163jaohluea.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163tnhyjrke.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163alfwopww.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163vnxzjwgz.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ylzojdwa.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163fkoustyp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163yizmrbwt.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163tbkicker.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163idlkjfhu.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163sqfrygil.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163muawbhjf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ujfhbslk.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163wdbndiuq.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ghgonwum.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163surjlkdf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163xmqubnys.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163dpvznlin.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163xalmvrug.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163bbxswfgn.html


<!-- 参考信息 -->