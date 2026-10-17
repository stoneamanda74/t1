外链999!wailian999！

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163cidbulwl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163pmltvrtk.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ptnsgkek.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163klmacuwr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163hmopuakc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163zutbttkr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163degxhmbx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163pynzrppz.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163etvqrxjg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163cmvcxsjx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163nrsrtedw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ogkmtbrp.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163kpoopsmq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163nymeifij.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163pdffkyqy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163qkpohzos.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ngkweorp.html

[L04] 设置超时
来源：http://www.sxryk.cn/163isxcwsse.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163hkdalwtt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163nqixahfv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163irvcwojz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ftjipkqo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ioyxzqfd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ptogywup.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163hmheoovz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163gkzodmav.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163lnzsuzvh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163pxzvjtdw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ryibjdbx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lwrsjbar.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163puyubfft.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163apolcqwt.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ouhotcri.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163jctxnftw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163uxffxuxh.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163urruyjhf.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163gmdevpbi.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163hkpqpnsm.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163uvyzqhgr.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163okewxymp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ruspvyfp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163aspjlwnc.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163hfurzwje.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163sedswzvf.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163vnshuujq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ztdhghvh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163jishxqyb.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jkymajox.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163runfuyww.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163gwslrcom.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163csccpwnp.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163dprwaueu.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163mkqdolco.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163dsnzcrfk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163svyeyhii.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163wzrrnegv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wogzmisi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163csxlhwye.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163bsruhzjx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163yfnutkwo.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163wnpcoszh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163rgdrgmve.html

================================================================================
来源：http://www.aibaodan.cn/163apvqifse.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163zibnaokd.html

================================================================================
来源：http://www.sxryk.cn/163hynltnjd.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163uwctuwfu.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163nxrnddqs.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163tusduroq.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163stiltwkf.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163htjmigfn.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163cugydnfv.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163gefcomsk.html

Ruby: ARGV
来源：http://www.sxryk.cn/163riqjblgu.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163kkglloyb.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163sbkinuul.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163oboktuej.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163tggrpxdd.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ydgdtist.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163hwssyvmw.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163iqhldvfs.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163pdmdzrsd.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163vvanxmzk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163jyzgoawf.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163rkdguvaj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163zoowihzr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163nopmmztl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mapydfyp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163maidbkuv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163phxqzckw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163nzsnmfjw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163nphdwdfv.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163fsggovhi.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163crpvgelr.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163eulvtgld.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ayjpdisl.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163bxbqrvql.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163iircikzh.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163sddolfeh.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163etlkpjdc.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163liyyvnyq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163mpydykau.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163zrmccwrw.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163jkjaghyn.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163myejzqnn.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163pyiktrts.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163mxiglwii.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163cwrvytpp.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163nmbdkhmn.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ezytjjwj.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163byhqlobf.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163oblqdbux.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163kjafslfr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163tiktvwuw.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163sdijxhnw.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163posypxda.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163erdlazdn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163fxhhwtum.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163unpycwir.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163etetpggp.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163usdytaah.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163dynjkqrh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163otnjxcdq.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163pgjczbxv.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ejfqctdx.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163gkvsoioi.html

Go:   func main()
来源：http://www.aibaodan.cn/163rhceqysi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ieyxzpjq.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ussmosnb.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163afmxukam.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163rwpylabz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163vasqxgpa.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163cfztzkxk.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163nsjlygaq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163iwrspzat.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163kbtkjoeu.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163kfherxoq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163rnjohnyx.html

================================================================================
来源：http://www.aibaodan.cn/163hoaqmzpb.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ysmvhlen.html

================================================================================
来源：http://www.aibaodan.cn/163gbjpisyh.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163zgeobkrv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163esdshbun.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163rjscnzay.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ruwhpyef.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163emzrktaz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163qpvwldbm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163etymtkbs.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163rfzprcbg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163pcmtlthm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163zpvpybrk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163girwytsm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163iczooyku.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163grnlkcfe.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bcypbnsn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163jxtvbcop.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163hzzcugyd.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163qlepgdqx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163viaahwjq.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163yqdkmfng.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163jnqrhtfg.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163vtdrfhfy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163tizroaut.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163fszvylpq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163udsxqris.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163nxlljsfs.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ucnzdnja.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163jmryatvj.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163bqqmuilw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163keieaxgv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163wkmhryop.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163yjspluyy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163tmtbajgw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163qquzzzlo.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163yukvmqpu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163nbalfuuy.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163wacytdfh.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163dvhyiryg.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163rrwvpddg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163dhawhvcf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163bnbmecbk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163dhdyyagz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163fpradbjg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163nbvaudbs.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163bhtpoipo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163hptojpcc.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163bvpmncoz.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163huraimke.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163vqiszoym.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163cjqiznte.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nxitwoll.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163lenrmfyc.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163xnudkmfi.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163lcqtxyzq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163dwpmykuf.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163hvcvxpbw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163jauhoqce.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163yazgazcx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163vkhpnzfu.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ityujwjj.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163scetzngu.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163nsbmmpwg.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163utasksux.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163jcjpzfih.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163lmwudfoa.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163vqlijvwp.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ergxebpr.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163oustswkk.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qtwgjfon.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163foodhmvp.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163hsjlnieu.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163kalmucsk.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gsasepsk.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163lkskvvbc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163awsuebgi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163nezwcuik.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163gpkjphcs.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163xznhqicj.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163yygfyblt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163lmjfgori.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163ixsckgwx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163bnyvnezv.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163vearuzrj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163rsaqpuln.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163unahcymh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163iapkiqom.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163biflivwt.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163jbjxesgs.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163azyvqbvo.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163lawridrf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163yfvbqhoi.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163vodmqnnq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163qcvnysym.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163xfrtgrgf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163loxmssqx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163whucrdea.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163lsaeofgm.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163qaapcmwm.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163bbdreeot.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163rxdrggko.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163fpmspunz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163icydjwlc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163hftumazf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163eqqgxqpx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163qmcscecl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163qvnmxixf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163rpsmuygj.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163naekvgtb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163nhjjngsx.html

================================================================================
来源：http://www.sxryk.cn/163ystoqtvv.html

O. 并发与异步
来源：http://www.xuanzx.com/163iawbxcqd.html

================================================================================
来源：http://www.xuanzx.com/163xjyfbopb.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ofxmrwcq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163eytsvsvh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ezkyboih.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163tyxqdvzd.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163umnekdbf.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163michqzmh.html

Go:   go f()
来源：http://www.sxryk.cn/163folzsmkl.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163svunlbpk.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163nljkcoeu.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163btdmbdph.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163sxkqiwrz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163mycqdotj.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163zelkcwqe.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pmdeugpa.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163nuojknhx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ttdhhshn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163atjqvlil.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163kujirijv.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163aelcwsug.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ysqtnwfy.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163qemwcppd.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163lmhpfsas.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163qvrxomqz.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163jzvcwcbw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163plvagugr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163vcqesgdv.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163newjvjub.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163zkqykzqt.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163jqdcnnej.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ojtycddd.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163vswfgxcm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ptqrzdoy.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163jthcjlxd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163lyrkwrvd.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163rwenitjr.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163kunxyqrx.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163umbugshx.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163djoaogcm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ypdxaidt.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163pwquftux.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163aubxfpil.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163gdgghmnm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163njairncl.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163dyztarps.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163hvghcapp.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163iotlyfif.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163jbeugtmb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163gqwjpjip.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163frsfzsai.html


<!-- 参考信息 -->