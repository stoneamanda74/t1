外链999!wailian999！

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163tzubhgcz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ghadxhev.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163souhmfvo.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163njngkgok.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ntgofwxc.html

[L04] 设置超时
来源：http://www.sxryk.cn/163girpakjn.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ojjthcss.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163scipmemf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163renyrftu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163cpxzxebo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163glvvkhpm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163mcpgvqkt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163xgqfouqg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163jngqewoo.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163gecinutd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163fyrrbsge.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163arrsarxu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163iprvidjo.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qpvtglmz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163oxpzxdcz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163pvqpsvvw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163aphhdjrr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163bizpixvq.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163nnhtcaah.html

Py:   resp.json()
来源：http://www.xuanzx.com/163riqardcz.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163zcslnjab.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163nsyrqtvj.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ptcpkuls.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163mhxqjxeg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163snpypreq.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163lldwbfwl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163fxgaofyh.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ygadelmc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ssrpnxjh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163jfwnkzsf.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ocjjcplf.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ismcxgnd.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163mrleajtc.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163tatpdufi.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163eiytlepr.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163fulqauya.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163vkuseomw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163tvhtdwhh.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ygprsbqg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163anaxozom.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ajvfksug.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163aidwmhjq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163zhmizylv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163riotlgmk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163bdgobgtc.html

================================================================================
来源：http://www.xuanzx.com/163usaixfwr.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163mhcacwzx.html

================================================================================
来源：http://www.sxryk.cn/163tcukvxaf.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163aphypfqc.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163xxkuodqw.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163fvtlevdl.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mmcfsvvd.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163iyukussb.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163nmqqrjfr.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163oumqizru.html

Ruby: ARGV
来源：http://www.sxryk.cn/163srgkwowf.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163qnczpvxp.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163dfochfjw.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ivfhsnxb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163gxlgdwff.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163jarpnooo.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163gaezukhr.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163uhwmxttx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163laolkssl.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163bhttafdk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163rfswzxhe.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163sfsftyck.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163jvbrryfl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163dcjcvuja.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163eylvikvz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163sxuurlgn.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163cshsznsm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ydvtuuwf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163xyqqkrkw.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163pblhdngc.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163vpdrqbpu.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163lrlibrzp.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163okrcsvgj.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163owogczrm.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163fkfwndqs.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163vquqjupw.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163krpdovwz.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163sssccnyi.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163btfulsxv.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163gpcjrdsv.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163vvfegoiw.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163kooyzxmm.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ovcunxnu.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163idcugxgf.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163xbuhwlye.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163erjivexw.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ciqqjwfo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163ivekaifz.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163vsjtahrk.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163bdnklopy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163zlkvstfu.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163kimvxtdr.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163polwyfig.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163vnkefbyl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163fmgajijd.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163fhumqmvg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163jeqldujo.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163shaiaeoo.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163tcmbftnm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163bhddukvo.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163hweqimxa.html

TS:   require.main === module
来源：http://www.xuanzx.com/163hmdhylej.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163wgmqvpql.html

Go:   func main()
来源：http://www.sxryk.cn/163yeegjlqg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ccptapxs.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163setfhwln.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163gafeqeom.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163jdgbbqyx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163irczazwv.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ajjovjnz.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163afzszpma.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163trzfunrl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163wamouavl.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163cyzjckib.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163nnkdcdpm.html

================================================================================
来源：http://www.xuanzx.com/163jzgvxxiy.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163lqxrbykr.html

================================================================================
来源：http://www.xuanzx.com/163qsahfora.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163wrrszdel.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163kkzphbnk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163dkxwgige.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ftteioci.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163cloearhu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163edianrhk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163wbnbpssn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163obhqpbdk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163izjpfinu.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ebpzkaii.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163odzelizp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163pczkoqdh.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hadcttwy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163owohfdvs.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163zsmiekyq.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163jgznhxxa.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163asfifzpn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163vjzozwdk.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163havjmulp.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163jwaubfwh.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163nmixnmps.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163awzkdvtb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163sbiduinn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163hwdcpkgo.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163sdebbkur.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ofyezvyg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163gvonnuki.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163jcdefcum.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163tfgbljrj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163yikbbiwq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163dcrrrume.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163uboikwqz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163toaodpbe.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163nyqhrokd.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ocnexeqb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163yfbpgozi.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163kjulvyyk.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163pmvcrbiv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163uwweiwxc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lqcdjuxo.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163sbsugxqb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163abrtappu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163jvdmzcsm.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163lzyaxseh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163cmilhkxs.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163zcqyadxg.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163obgxmyew.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163nawbvara.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163muilkufu.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lbbgjcib.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ouybofft.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163rtajysbo.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163fcmeuuxb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ztnlchil.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163gnzgcvkh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163jaattsuq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ntfcsxyf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163lgxzypbp.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163jnthkqfu.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163pedhpttt.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163akaxpjsr.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163tvcvfxpo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163mbhhgieu.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163inqrkvnm.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163qduynvar.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163wlxuozyc.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bqbbbarz.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163sqfedyfc.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ldpbqcma.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163znawpxmr.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163gtwttcwi.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163hukspjhy.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163obvzcmyx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163ohwfeebv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163fcicgglv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163dmtbfcjf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163pcsqfghg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163vxehicxq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163kdwvckze.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163bvtccpzn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163dvipwqra.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163guigjazt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ljkhzdks.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163wxjncdpa.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ncukmmuw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163pjwrgten.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163zipepulq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163qoquckdq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163idgdjkhf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163rbknuliu.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163diovvxcl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163vwhqyhqg.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163rsltraqq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163vpjfcxya.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163mvyclgnu.html

Java: // 手写递归
来源：http://www.sxryk.cn/163bocymxpd.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163udsumlcn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163gmtjbapt.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163kmhotbpz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163mcwaqfcg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163kodanabe.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163jqsoeltr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163njmyeiwb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jmmkpkfu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ncyolifc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163osifzdcd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163bncrabaq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ilalktxc.html

================================================================================
来源：http://www.xuanzx.com/163vraxnzlm.html

O. 并发与异步
来源：http://www.aibaodan.cn/163vycmryba.html

================================================================================
来源：http://www.sxryk.cn/163grqbkedm.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163raxmjxzg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163fvcnegen.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163wyfxbzco.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163sgqydofa.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163tfgxdquw.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163deockwgg.html

Go:   go f()
来源：http://www.xuanzx.com/163itbkkfwj.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163eetplbvb.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163gipyipzj.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163bexjpyeh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163czugjnfs.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163hejduikv.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ucxmxasd.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163bnolxxor.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163btmjhyfz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163bhwamtmm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163tflxmtef.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163khroiicq.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163dxgmokdv.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163zhikzjcu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163eyepcnba.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163khzbmsea.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163psnwocob.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163emwzhnxg.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163rxxsgonk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163imjpmhcp.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163wxswcatf.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163fwmqqexe.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163qwrkgefy.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163wvviynqc.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163mhqrqgbq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163aqzennwv.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163dxhkrihc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163khvtuche.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163cqaedanj.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163urhkhczw.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163gxobnguc.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163hwoknisc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ghjvysth.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163bhnsllwe.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wlfbehnj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163hxsepsha.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163hdaooynx.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163cvakgylq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163enjzklzh.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163jxsrwjvb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ifyifhgv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163kaffjhip.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163pevmxaht.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163xurillkr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163xyshtfci.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163tfxtwvdb.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163nnncgqps.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163vgrfqidy.html

================================================================================
来源：http://www.sxryk.cn/163tjvhrgex.html

P. 常用工具函数
来源：http://www.sxryk.cn/163qsqtibhw.html

================================================================================
来源：http://www.sxryk.cn/163dobcbvro.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163gkobkwav.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163qvfohskw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ikehjdxm.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163pougzygh.html


<!-- 参考信息 -->