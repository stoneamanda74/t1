外链999!wailian999！

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163rqryyjho.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163yqpddiia.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163itdvhzoy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163oggwjhsa.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163cxqylmrh.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163uezfznxo.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163mehlcmhi.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163wvragbpj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vbhzydwn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163lixakzxi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163fnzhghvp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163bvonoyab.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163lgjoyiux.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163cekgtlcw.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163zflzxqvq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163lozwglqu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163yhujznvd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rgbslcpn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xvmrxpyt.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163pkmnlucy.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163igumnvrr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163okvrwfnh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163vsqoamor.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163kvkgtvdn.html

Py:   resp.json()
来源：http://www.sxryk.cn/163qqabdisg.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163vyfcapxr.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163vhdopcfz.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ascndzza.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163mmnsjeif.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163fkvobxmy.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163amgavpdy.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163optjksnx.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163glguxkvc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ceueqiwp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163txczzayc.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163hfltyzsd.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163lgeftcpm.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163uvwjwbmj.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163jqnlmihd.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163kfmkkejn.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163dfoadaat.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163zogijkqf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163qllhllnm.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ypxmhjlm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163sqrfundf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lulvpfcy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163kthuqxrv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163hspvlnpi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163bgztrmys.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163wgmnbfbz.html

================================================================================
来源：http://www.sxryk.cn/163fquxpnwn.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163rzgxicsx.html

================================================================================
来源：http://www.sxryk.cn/163bojsoprs.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163qmpxqjtg.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163wbvjmpai.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163iobrgdcb.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163wtwmhjfi.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163xbmwcvpu.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163pgrkjnmx.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163glmrunyp.html

Ruby: ARGV
来源：http://www.xuanzx.com/163tkyyhdav.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163gjrfgutx.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163qjlzejgw.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ugseaypr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163bwricdxg.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163thbbqcyd.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163mtlgyxit.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163kxzjgwzl.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163xgucfdeb.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163liexuhgp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163baefdrwy.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163wecjqgln.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163xveedxxn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163khuvvddq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163vnkicabd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163atlvqfjx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vqnftsdz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163gjrsiqfr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163kohqsxqs.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163isyqlkvj.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163twagxnsk.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163uhouxzvx.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163xujsptxp.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ubalkqps.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163hbmwylzl.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163bxyepqty.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163wmrvioxl.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163qzsonfhz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163xgwtldqk.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163obdrhxyu.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163oyxrngpx.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163pywxvuqo.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163vfktrypd.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163qlmwwdfi.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163dsknzrla.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163yddpemps.html

Ruby: exit 1
来源：http://www.xuanzx.com/163iebdczwv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163fqecnlgs.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163qjbgajos.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163kvfrqffb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163queoxeea.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163otusufho.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163glecpydi.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163hhivxohd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163twafmlok.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163xpiinsgw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163vxmsevvt.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163trmnnkop.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163tkzylvqu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163xwxxafsl.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163bzkcrhvz.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163tpjchscf.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163uinqxpzn.html

Go:   func main()
来源：http://www.xuanzx.com/163wefwegag.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163mzwmwitw.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163cmkfftlm.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163izhiydtl.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163gagjmcqk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ldprdvpc.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163lslrqtka.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ofpjslqc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163kuduhisq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163cehhnutq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163nxummpjq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163atdbayol.html

================================================================================
来源：http://www.sxryk.cn/163uqroeykt.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163mqdrfkhz.html

================================================================================
来源：http://www.sxryk.cn/163bbwlodhz.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163okhedygo.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163hpwpsupo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163cjzetfwh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163nwlfzfjk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163kaajbbar.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163kuzotoaq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163aapaezgs.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163wyidsbkx.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163owjlngyr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163gqjbsskx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vegzcept.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163npliislx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kjulxuig.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163sahmydlz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163lymzpzgm.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163dvpbgbvv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163dygudizx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163olyimsoe.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163xqxuuudf.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163cnqqnqtk.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163mlrrakij.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163rlzwtmbl.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163kkjqcgay.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163tnhsygwk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163jofpbavj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163bgrcdvud.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163jxkaqpvc.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163wqaxhgev.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163nifcyvhn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163pzolqwbu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vmhdncdg.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ldcbgwvv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163gzetmxmc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163hgqopbhb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163xdagpmch.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163oznheepi.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163xqnngkop.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163kxjtjalm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163leerckmi.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163kqetcuza.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163sikoqmww.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ytpzhbck.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163bwyosudd.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163dksnsgkm.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163qikdsffb.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ddrsdmte.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ufpamgbl.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163sxvxidbu.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163jbwhzymr.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kzpwiaqd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ptywewom.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163xrkuqouk.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163prughqml.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163afjhrxcg.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163qqbmyxlg.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163xjaflfma.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163lhfugwha.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ylyronvd.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163hkyzcwwp.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163ttsdbwpi.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163quloesrr.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163lilwupdl.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163qebzkdgy.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163cakpwhuw.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163iessrhpn.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163chxfxluo.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ckvrduzl.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163txpzplwr.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163bvwsalyu.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ggxcrkii.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163gezrhgzj.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ddikdxyj.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163vsrvoini.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163sskwghvr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163vnpzxsxj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163epugauui.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163qnctkpgp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163rawfzpqj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163dgccckrt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163tazinhdp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163mrkrbfww.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163uwfsfdvq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163uysfutiz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163gaoglchj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163jbncjykd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163tnryextg.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163okhrarkg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163cdbglsxc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163lezcmkgr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163fnjjdlod.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163qlgdxdim.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163itokpdrj.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163qukcvmue.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163bdvucgqk.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163vocumoqf.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163lrbhrvst.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163adgquavp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ktyszczk.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163qeuebelp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163qqbqncru.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163nmazmaeh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163tspfkzgs.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163gaixxxyo.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xwfvaxvz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163lavqoinm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163txrhrsrd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163sipomxdo.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163foikaxex.html

================================================================================
来源：http://www.aibaodan.cn/163oyknoksb.html

O. 并发与异步
来源：http://www.aibaodan.cn/163svkvjzaa.html

================================================================================
来源：http://www.xuanzx.com/163kvynujji.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163oefrmdjo.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163fxqgrlbh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163nhkmdljw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163abtfjyhp.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163kwnieswk.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163muckjoeo.html

Go:   go f()
来源：http://www.xuanzx.com/163lvilzcbx.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163divxuyuw.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163lkxrtzbd.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163wzkraosz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163vrorxqse.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163orilkvdl.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163fikweusj.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163vkgbarig.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163orkwuhzo.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163vxcbgjwc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163durcpwaa.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163yjksrjtu.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163puvhuvzl.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163zeiielmd.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ordgrlqw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163lsaziyfi.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163vttnmwyx.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163lbrtfoub.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ncgphtga.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163hfgcnqgm.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163slkcubxl.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163rldsygjj.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163uapmpdqe.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163tgkjtlmv.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163qkidtzqv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163zcqgxsof.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ccfsltiw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163gmppqvxq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163xtbfhult.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163gnfjwyer.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163tvkjpdcj.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163apehfnpr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163qxosxtze.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163tscdmdes.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163pgmzzqav.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163fstbofzl.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163nrolkakj.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ehrgfboe.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163pjepyuwv.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163fswhjswq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163edpkpklp.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163odmvirgb.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vqlsjkgd.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163wjvnupho.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163dtycdaph.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163srjrdnci.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163aadqxxda.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163dcvqepac.html

================================================================================
来源：http://www.sxryk.cn/163unyitukp.html

P. 常用工具函数
来源：http://www.sxryk.cn/163sjsfbadj.html

================================================================================
来源：http://www.xuanzx.com/163skdcxrxi.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163srwpgezc.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163tebudhos.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163wqqcznpp.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163nlukrbhr.html


<!-- 参考信息 -->