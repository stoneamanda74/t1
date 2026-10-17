外链999!wailian999！

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163mklefrlk.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163szkloowm.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163kmssyjlt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163jmxwvvel.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pypezvvl.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mrkkzsih.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163nzhtxfth.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163bgwsdzib.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163xqwsetyc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163laijjuyp.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163yhlxbfae.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163qajvkusq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163gqvhemzo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ienvahnj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163subasaft.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163wkqiuvog.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163rvjfnvxz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163bwlcnuwa.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163bwimereb.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163oisopjjt.html

Py:   resp.json()
来源：http://www.xuanzx.com/163yavhrtvn.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163pjffwbav.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163oelehdmj.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163gehzfzkx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163tulgcpet.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163usqhikfx.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163bdrmccqc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163qsodwsos.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163wgjjjxiu.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163oebhknzg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163tkrntrsv.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nuzqnkkz.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mzjtrmbl.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163mimxtval.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163iuvdjgdd.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163xkvkguov.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163fnsbymff.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163bjdzoslt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163iwfejvdk.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163aouwbkxv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xqxjppzm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lxoppuxe.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163hpgcomau.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ihshtsam.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163mcjyfcwr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ovttuqya.html

================================================================================
来源：http://www.sxryk.cn/163trdlvoed.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163spqfreau.html

================================================================================
来源：http://www.sxryk.cn/163ecqvlbxg.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163uwpxqgwe.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ostqhrmy.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163edyiciws.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163impqlcxz.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163swrmsiey.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163tiiknidv.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163sghexqjp.html

Ruby: ARGV
来源：http://www.sxryk.cn/163qtjinjvr.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163umcxzttr.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163jxjpxyrz.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163pgqyiywp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163lwdupito.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163fwjeybww.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163rnwcwixp.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163kvtxtvis.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163etimcpoi.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163cgpzftix.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163lwfgyzjk.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163pybwklix.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163gdfpbaxd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ngbodogx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163bnovmutt.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163svnengxb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163thldktnu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163tyoutcur.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163jhspoblk.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163dcxogjli.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163lsknzclm.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163ptzekpej.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163eoitnlup.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163msfkuqgt.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163dnphjgpc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163psfoxnod.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163rqinkmab.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163pkloumhb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163auecbuyy.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163mtfyuzmc.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ajiglmju.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163usahscgh.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163pxagipes.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163zfwbrgmq.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163rmukhqld.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163vmrpickz.html

Ruby: exit 1
来源：http://www.sxryk.cn/163fpsssmyb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ufsfbosv.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163abpqrnny.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163nsfjchwa.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163bqdkhvgy.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ttufsagn.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ztpjshsd.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163utzqkjnj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163konnvibr.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163tgayleom.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163mnemcldt.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163umhsvzzd.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163puityygn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163xgwswozg.html

JS:   require.main === module
来源：http://www.xuanzx.com/163vbrkxhdg.html

TS:   require.main === module
来源：http://www.xuanzx.com/163hwvotlfj.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163rxoxwdpk.html

Go:   func main()
来源：http://www.sxryk.cn/163ygxqezfo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163zbzylenh.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ebcnzvpi.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163mjzestux.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163sulfxghz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163mvdppdwx.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163dbbxbwij.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163vhysbagi.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163yunvuytw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163zuaoswzu.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163tlnwkmix.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ubcnrjdu.html

================================================================================
来源：http://www.aibaodan.cn/163aryfvmli.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163vpkgrase.html

================================================================================
来源：http://www.aibaodan.cn/163zbuqrgmo.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163dsairsww.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163citptmsl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ckvridih.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163sqzbfmrz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zzorbyer.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163tpreaemv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163sxyuspzz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163kfmfkegu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163nvkkgbcb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163fdfeyyzf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vfsmbnqg.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163mvqzziog.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163djiemdjf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rkhepehv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163wjixsiay.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163yvkpgqmk.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ttzxudow.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163whkfcief.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163zgarpqmz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163nfzkzgfe.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163sdfogwfq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qjhoahli.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163pbxtwnle.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163hzthejal.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163tmqnrdgm.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163zdzphwqk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163jetmducw.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163evflbgci.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163mxggbvxx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163makewcid.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163mpvgytdq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163crygkrmn.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ijbowzmn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163tzfmcalb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163secjjsed.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163jaifdwzg.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163uqsznpzh.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163bvgvqwsm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163iklzdgvt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163aowhbadw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163guwfoqrj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163uhshmfjc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163svomxaok.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163hfvjfalk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163fmbatoqt.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163rilyffeu.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ckflcvnq.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163xorokndl.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nhuhwrof.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163saaoinzc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163oozpkgsn.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163vrxvspkx.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163hdaperde.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163dxkmjnof.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163cxgzwdwd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163msiuryyv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ejepmozh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163hqgdvkvd.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ecacmimm.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163qaeqhrcz.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163qluliiss.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163tyjnfkph.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163zzsfcqqf.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163zkzuwibj.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163tgonwlgr.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163dknaiffj.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163lsncyjhd.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163clqqyeay.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163qaxyxkdp.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163gkhmavyg.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163jnooanax.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163olgcuaiz.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163bqvenkvp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163iocotyzw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163mbrsjwgx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163kpuweonr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163fhtudpyx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163rflglvft.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163vaeaogfj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163uyrfyqeg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163dztpalpi.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163verhimiv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163omgcmoby.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163vclxfzfz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163xggjmrvd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163tkxvufph.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163zvseogjb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163cednfrur.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163erjdtitj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163xfgfaftu.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163kneesaaf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163adqrdblo.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163llyqulfb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gzweypfc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xldpqond.html

Java: // 手写递归
来源：http://www.sxryk.cn/163crdrfjfm.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163yvahgsqx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163dggctnbr.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163gkbejdkc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163hnbgmhuh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ayrffkmh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163rsycdldz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163kmmpbpve.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jsabirrm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163imsozwly.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163bfwnrdhm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163iaekkiqa.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163gqwjlbmm.html

================================================================================
来源：http://www.sxryk.cn/163bvqloqoi.html

O. 并发与异步
来源：http://www.sxryk.cn/163busjcqye.html

================================================================================
来源：http://www.sxryk.cn/163jjtzxpah.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163yhyaiboc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163zlazfqia.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163mctrmwyv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163icgwynqa.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163zpriqbom.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163mgzlnrbu.html

Go:   go f()
来源：http://www.xuanzx.com/163orcpmqty.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163bnnqtxdi.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163hwtgtyst.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163oujduigr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163peethcry.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ggygbzrg.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163fozapltq.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163lsmnbxvr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163sobusvba.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163zzunbfjh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163zkixczkm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163proisxpb.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163hyzhoikb.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163pzpzsazc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163jfshcvrt.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163ghqsvwmh.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zzqxlcav.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163rrbalwyf.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163fxtpikgv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163pjuxfytk.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163uyohtzcx.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163rhehhjpa.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ezowegrq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163zixmsvtz.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163xfvhcrgw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163alqcxicj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163oexofzze.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163feblmavu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ptbcypjb.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163icunjiqv.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163smhejoqp.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163xxhioixe.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163xkkinrmw.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163iedxtxsf.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163dmujjqxv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163moyighsq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163adrtzcka.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163xrtyresk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163lpyocicf.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163mlockskq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163frsutisf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163dtwxihst.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kdlluqvv.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163xtwsubes.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163xbyqejzh.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163uymekqjz.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163nkscvlns.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163qulzapwv.html

================================================================================
来源：http://www.xuanzx.com/163dnbgjprv.html

P. 常用工具函数
来源：http://www.xuanzx.com/163ipraongc.html

================================================================================
来源：http://www.aibaodan.cn/163cuduhzlb.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163sddrndba.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163kvmrebpq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163giczclwk.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163frsynukt.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163jorwnvqj.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163phewcdaf.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163behzsbua.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163qjbyvfki.html


<!-- 参考信息 -->