外链999!wailian999！

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163dujptupc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163bgnbhyfe.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163uifqibsv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163awpeukyk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ivejuwmk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163agbnlvzu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163kkscdcgi.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163qomxzzts.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163vzykivus.html

[L04] 设置超时
来源：http://www.sxryk.cn/163eglofvio.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163qkdoylvo.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163jkqoqyak.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dsxkqpem.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163njntxssd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163jsxvtsdv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163rauslyqy.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163zqncehzr.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163lgkycisc.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163nlveowtw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163lwcxqzqg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163gzimrvsr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163msjokdpr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163allokhno.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163rsucqsdf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163lgdwgied.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163prxmsmur.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ppsmfzdo.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163aiyhizih.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163afyahnfe.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163wiyvlbkm.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163xseagnpn.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163kgljavdx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163zxbowmhd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163myttzrcu.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163ofezdoew.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ncyphsol.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163fnfcexxb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163cemcffin.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163eghstbcs.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163nsttmzdt.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163zyuywpit.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163phihyetn.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163qjsfaaqm.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163npzndlnj.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163flnocfvp.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163bexxjviw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163nbaxkypy.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163xqsufllq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tnfyupih.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hridlyyu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ritgqtsv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163hpfvgyzt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163hyrjgcoj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163lveixstr.html

================================================================================
来源：http://www.sxryk.cn/163eeaedzhk.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163symnzovm.html

================================================================================
来源：http://www.sxryk.cn/163yndvugcc.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163wlokfjkt.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163nhxxkwqv.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163iejojscm.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163bgvqorkq.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jqiahbpe.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ecyenutv.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163xkpuujrh.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163rahqmunw.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163rzstllhx.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163kfnudoeg.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163gevcrzro.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163vfefstth.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163sxtffiqv.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163reglwnph.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163aazkhwef.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163tamupoiq.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163uilwlwyo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163kiekthdk.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163bsvbwmjq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163hrwqyaex.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163rcvmwgmd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163urwuwfrj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163azweeczi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163gupundcp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163pvdjoddq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163jpijhzfe.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163tcsqdivu.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163deaibxlw.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ozszgban.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163byxgbchz.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163czujiuzi.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163jmmtjfwu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163qnqcpbfj.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163nwvaeeyr.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163bmdhbzle.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163skbqxteh.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163caufxlqk.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163knnsnbpa.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ommsisfq.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163uizabqxn.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163wtguypwh.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163lnkegzsi.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163blyrlfpz.html

Ruby: exit 1
来源：http://www.sxryk.cn/163alurjdvb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163nnezvvrs.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163jsesipry.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163hdhvjjih.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163btmwvpcp.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163pqeojwhb.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ggseaeyk.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ziwtvisf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163qtipsxbn.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163gytanyhp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163inbayayh.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163brdkkitk.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163fruxnuck.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163bpleivan.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163fpklwzfm.html

TS:   require.main === module
来源：http://www.xuanzx.com/163obsvmqvs.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163mjspmhim.html

Go:   func main()
来源：http://www.sxryk.cn/163rqxlxgam.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163bmkntvff.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163vbqhtzme.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163qiukrpjd.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163ugmxyqfv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163hpjghcjz.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163bjvvgtwo.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163wjhtwjmb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163eezmoscf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163yyglinyo.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163afkgfwqr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163iawpbaub.html

================================================================================
来源：http://www.aibaodan.cn/163momnafkl.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163kwpfcacu.html

================================================================================
来源：http://www.xuanzx.com/163vcheabpu.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163zravyxaf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163fqscjtmd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163vgykkvok.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163sapfjdab.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163alwzkiey.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163hmjfnkfl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163gjgsurag.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163tlzopfrc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163answmnws.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163bbzaxmgz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163irvouzkk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163zfzotjwn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163khqfxtcq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pjnxkhul.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163xlaxwhtb.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163dssvkuwt.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163muwntcxm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163fxziuywz.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163dklbpdce.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163qajytulp.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163moprximz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163geijyalj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zzhjrspf.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163xufzmjdq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163qgssfjqb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163tmftcoid.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163bdbztzed.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163kmctchlk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163gkxhykob.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163auevsmwr.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163bdzbksyj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163whguhwms.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163hbysympn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163qeiycfwf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163tulmhheu.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163okvmhfvd.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163grvcmzoz.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ogwcjycc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163opnwdcxl.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163gwqfkkcj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163nxjucbty.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163dcqwqhqr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163vcwlamqv.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163elvudpdj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163qejdwedu.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163mbstduvv.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163aohyklns.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163uarkqxgr.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ugrvqcne.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163omekjcxx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163yyveqcvh.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163syhesgap.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163mmgqtnqn.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163bnfebtlk.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163zzrbplxd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163bocvilhu.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163szomycfh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163xgxlaalw.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163meacknkf.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163muzizjag.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163bhltzwvo.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163gzjjlrya.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163pqcznwcu.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163bdfdsrqk.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163ukvisktx.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163vycllnah.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163tjqzqowp.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163dtajcxxy.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163giyiffqr.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163mckodkcu.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163jnvfzkol.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163eeinqqjm.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163dolxuysz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163jnueguvx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163wwuitnrp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163erpikxiw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163bzsgxvco.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163vymymtwk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163peopncjr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163vbxnkijs.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163xbsovwrw.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163qadnrjci.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ydcjyncu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163hejrvogt.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ursrfvfw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163mixwbzmr.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ctjqjedp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163jabqyuxc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163zodpzaqx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163mrgtykzb.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163fkjxwfpj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163wtskqktz.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163drzxzxbz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163icwxnuul.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163tyeucmhy.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ipxrpxpf.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163nzfzqmhq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163mfsvtylu.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163mxbspqtm.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163rpwsulft.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163zjnveiwc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163sgpqytnp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ardpvsrj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163mpvzihig.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kaicrkak.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163uouzyfkz.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163qquywpan.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163tuuetcxw.html

================================================================================
来源：http://www.aibaodan.cn/163wuysevof.html

O. 并发与异步
来源：http://www.sxryk.cn/163kljprhug.html

================================================================================
来源：http://www.sxryk.cn/163hruzsfar.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163aaapjkor.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163zpbypdpn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163sbuhoycr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163cqxxpnnn.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163tnqilboa.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163pjqcufme.html

Go:   go f()
来源：http://www.sxryk.cn/163awubeicl.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163pubgogss.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163fzltimnn.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163mlpuepjh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163smylulkh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163fyubaodc.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163afhsocym.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163lvfbmtwk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163yqppklaw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163wuffcycq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163qtiodwrn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163hxgboivf.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163nqpvpqmt.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163fcmjmpgw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163iftjhbnz.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163bdynypgi.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163dvpouegl.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163scfuyvss.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163xpcuotmn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163hejnygcp.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163flbbgeke.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163cdkrprqh.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163qchasofe.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163firpusdr.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163zotnpjbv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163wurzjtvw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163unprsqqq.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163gvhdigcu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163wdonvmcw.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163sblxrogb.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163zsjtgvvd.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163hzuaeyws.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163gqjvffty.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wbxdcbdi.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163cahjayed.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163izhthxrw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163jgnxmxel.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163nzpynneq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ewrmwohn.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163jcwqkgwb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163eccmkltx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ftztfyqw.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163zdrznhio.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163bfuhhjgj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ayusvhyc.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163lziiojxd.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ouyevavf.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163oeodjpvv.html

================================================================================
来源：http://www.sxryk.cn/163auajtdaa.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163tscyvjik.html

================================================================================
来源：http://www.aibaodan.cn/163hqtqvewv.html


<!-- 参考信息 -->