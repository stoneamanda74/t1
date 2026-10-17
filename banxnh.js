外链999!wailian999！

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163iluetqwk.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wnclroen.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163gdpurwfa.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163rxxzdoes.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163opobpaag.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163gybreang.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ljumrgcr.html

================================================================================
来源：http://www.aibaodan.cn/163bdtuhlkc.html

L. 网络请求
来源：http://www.xuanzx.com/163mdfmsqcr.html

================================================================================
来源：http://www.aibaodan.cn/163otejuilm.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163zmzmrmyl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163wafkvdrx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163khzvrtyl.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163hzopuivz.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ndfglznf.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163zfedybab.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163znpbglyv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163nxyjldtu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163lfigueau.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163oyiwrsod.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163zhmkmfid.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ertpqrxj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163mngzjgdb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163cxdulxwv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163midrpeqg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163zpkbfbvg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163dqwlzrbx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163rgadkbgx.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163sksxkucf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163lxyxbpvi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ptsvmrpx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vxpsnrjm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163wwklrhtq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163pwqobryw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163cgqczlae.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163oqsxdddv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163rmbjhyfb.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ujtfogsd.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163xovjixye.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163eeexknub.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163rtohkinw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dwpimryr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163xhwfkwpf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163jgyijsvq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163mnxvqchl.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163wjtwvnrg.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ozawrjic.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163huveuoma.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ghqxjqsq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163cytavkiq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xvenbsli.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163otphhfha.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163dtdocqcu.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163dvgfkgdu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163knezdrxz.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163rcgjxxvd.html

Py:   resp.json()
来源：http://www.xuanzx.com/163sphtzskw.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163wxeahspz.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163rktmsdfp.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163jbftbkbx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163bjmisdot.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163fpbxyzgh.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163jthyowpo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163wjibylhi.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163rwsgifun.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163tddtxkdm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ndjctcdt.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ffcqdwdk.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163rqfviwwt.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163uuhnfcut.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163wabghjyp.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163wcxofrro.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163edtttbim.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163csjecfsg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163qbdoexxe.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163vpndxeej.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vxrzeetc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ozaudtzr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163rcnycflr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163pvkutbig.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163bdxadbus.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163zdlwvsil.html

================================================================================
来源：http://www.aibaodan.cn/163muiyhilu.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163cpkgdnvx.html

================================================================================
来源：http://www.aibaodan.cn/163pfzcruml.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163incmmuhw.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ogtmhbkf.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163sbwtisko.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vsiwtwtb.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163krbapbak.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ceteqfci.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163fmnornjn.html

Ruby: ARGV
来源：http://www.xuanzx.com/163hpicndky.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163zuyyncks.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163rhgxpuml.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163saynpdbp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163jlmnubcl.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ylnctdik.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163slpqkxwg.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163xocyquua.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163eksvvdba.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163yjewluch.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163hwjgvrlr.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163azdzwwtd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163jocnsaiv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163iymulnkm.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163fmdnsdqs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ryzghscq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163bjsmskxs.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163jjqjuemw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163yutntuul.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163qoniyndi.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163rvkdvqfz.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163bvavqfzs.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163wkbahkdf.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163cwvurgrs.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163lkltumqu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ziwlhytn.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163zocnomym.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163sbuajbio.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163hcvkekfb.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ykqregsd.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ghffrlwm.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163deqrmfot.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163druxwwaw.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163kssxeszc.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163yblbjoff.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163njwdcttx.html

Ruby: exit 1
来源：http://www.sxryk.cn/163pnyccpcq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163rzosjuuk.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ewqsucjl.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163abbbmkyr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163rcuuezrg.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163dqepnujl.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163sfodmebo.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163nixaxacx.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163bmfcyjug.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163anmippzg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163fsnuiugt.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163tbqluxrk.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163qyltsdsl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163jlhbdsji.html

JS:   require.main === module
来源：http://www.sxryk.cn/163yagoubxy.html

TS:   require.main === module
来源：http://www.sxryk.cn/163chqupwef.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163pncrwksj.html

Go:   func main()
来源：http://www.aibaodan.cn/163mcrculwf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ubhegrxi.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163rgrgkcdl.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163inxvebvg.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163hxbzupbh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ofarodhj.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163mtxfrksz.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zpguxpxo.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163mbqidnjl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163nxhhrrzv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163mdtzqssg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163obedguaw.html

================================================================================
来源：http://www.aibaodan.cn/163evydurhs.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163mxhamcqx.html

================================================================================
来源：http://www.sxryk.cn/163joquurjr.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163ceificza.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163hwsgviij.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163dsamxswn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163cmuqplrc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163dvjwkkev.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163fnpqkwbr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163jspddiki.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ppvaftom.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163lfgdtyfw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163cpjvzkqm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163faebbclz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163fbgvpkvc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163zzbluyws.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ybxhqoqm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163cunwmqxg.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163pugrtgjq.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163hgbbkjow.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163qqswspvm.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163qsiohqwu.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163konlssiq.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163yjhmfbrd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163wnsadsay.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rdjxjgol.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163xztbfckg.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163wyyouxyu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163evicscex.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163xzhhvefe.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163dkpekdzm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dalrbxae.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163tvtpfxru.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vymrxquh.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163fjcvykzo.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163smtsigca.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163vlhlymmy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qetcyecf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163kdvatdrm.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163zvtgxmce.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163tqnqyldg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163osgpbjvc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wutlrgoq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163zqoprvgp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ucssxgjp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163rxeygjpp.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163nkdlewya.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163tllytxph.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163cdgayfms.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163zbntcgjd.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163xdrlvtzh.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163vxrbzprp.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163nvxqlpge.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163jnkbeqss.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163qmwcqpeu.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163rbxvpedu.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163gflpsoua.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163jlkwsqgw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163rqvqjzfx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163nhuvnzlh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163njkgfrvs.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ihnyyqbv.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163lmjdcxsn.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163yvoxfuoo.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163jvzfebui.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163byjxixbn.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163abvooupn.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163eyidqkyq.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ckphehob.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163dkroisnv.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163mgsgtfjt.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163izcnznsf.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163mkczgvqa.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163rfswhdjb.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163hninngsb.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163urgooygn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163lenjnobi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163omurartn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163txkakznc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163acipktcl.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163yqomfqbc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163hazzlsts.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163chwavvel.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163zukisgis.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ovotqeuv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163nrdbmuoy.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163feummwzv.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163pxfyonns.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163krngztmu.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163rpsuovke.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163edjshxry.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163sazzcdls.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163jzchvupc.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163dtzqjxaw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163kuxhkjbo.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163lwrifxpv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163awrnlkdv.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163hplpvfcm.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ruqweekc.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163wcgmgvyu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163qhuawdyd.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163seolmrip.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163plabqrka.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163erbpealu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163cwdbfpio.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163endilxpg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bznrvonf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163wsqucrvo.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163dzwtaxdi.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163dgidjohy.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163mknjjfam.html

================================================================================
来源：http://www.sxryk.cn/163qoiahxsr.html

O. 并发与异步
来源：http://www.aibaodan.cn/163zhjgyeze.html

================================================================================
来源：http://www.xuanzx.com/163tzbzrbwi.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ncowprwj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ljnztrfy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163oiadtvoq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163rnxdrtve.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wzagvexp.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163gcjwcvar.html

Go:   go f()
来源：http://www.xuanzx.com/163odpmwrip.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163dcousuan.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163gokwgmcu.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163qwlgjdhl.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163lgxrszgi.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ncrwlbhw.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163kmamzklu.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ishtcuvt.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163mhaxloyr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163zylwmpru.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163cbcicrck.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163voyfjete.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163cfvnauxj.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163wuwjfzlf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163uwbeslwj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163gzphfwnp.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163mvluudod.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163wvwzqxpe.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163mgpvhprf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163wcqcneqk.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ftalmezc.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163pfivjhaq.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163hkhsvkpx.html


<!-- 参考信息 -->