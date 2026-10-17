外链999!wailian999！

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163koivaouf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163uzwdewck.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163nstdegcs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163fiksklyz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163tjbfrvzf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163rxjznyvr.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163odwhbflh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163sizmulmz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163fmzqixhv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163nvmwnghs.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163dpgcuyyl.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163awqjbktx.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163nghtkohp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163vrwqeuxl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163urroprko.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163kdrdpofu.html

Py:   resp.json()
来源：http://www.sxryk.cn/163iexgyeoj.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163xosvihvy.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163rbhmtqyu.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163izpvzcco.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163grakcznx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163besupxyx.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163qcnsyevb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163rdihcffn.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163yowfvqbr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163otqkcdun.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163yhdvsxus.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xfyznolz.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jiyaekjv.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ovcaxjls.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163zzphzpqt.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ahgtxagm.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163qcipvpyg.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163qqckafvj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ldpwqhet.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163jwszswso.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163urnhhrwl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163twvmvfvv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163obxtnlyj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163uvivieyq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163qzhbahrw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163bhhaquov.html

================================================================================
来源：http://www.sxryk.cn/163vmjglqne.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ewspfcms.html

================================================================================
来源：http://www.xuanzx.com/163ksjvieon.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163vsibeeds.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163tmvchjtg.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163uglwvflk.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163owvjonri.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163sclntmwg.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ekwlorji.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163qxddxlia.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163bgklqxha.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163rtdfjgqq.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163logajqef.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163xymccams.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ivfcexbg.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163rensduhu.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163bzngbvys.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163rkxdissi.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163jxhehvii.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163hhtgvwrz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163xuelnbln.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163gjaylanz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163cmcquiwa.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163tfqwiicw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ekzyymxd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qquujupo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163mulfupyk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163lngjzorx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163tekirtzk.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163mbcxmmgu.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ztomvgxq.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163wdwfqtgv.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163odmudlnl.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163qsbphwct.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163gyrdecvy.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ththzjmd.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163slrnkkqa.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ezqjseqs.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163epxdqgij.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163mdojudia.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163daimrbak.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163owofngeg.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163fwzqhfxa.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163pzrlpmdq.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163kdusvfxo.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163kxcustzc.html

Ruby: exit 1
来源：http://www.xuanzx.com/163yvkcbuba.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163nlfjvsjp.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163nrorgekz.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163xpjvjjtt.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163fuccdglo.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163mwvraotz.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163npdgreng.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163mxdlcrkn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163kuokgghy.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163rrhhnruc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163bmtihwwj.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163vgjnfosk.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163zrludbvj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163vywabvsb.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ttcuqqcu.html

TS:   require.main === module
来源：http://www.sxryk.cn/163tcotayqw.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163tifgsswv.html

Go:   func main()
来源：http://www.xuanzx.com/163gmknxord.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ailkxatx.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163neiwmpvf.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163wezqlgpb.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163ztljagsr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163thfqnpza.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163gletcfyv.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bqmcspjz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ehmsducw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163huphrnyc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163budmaugw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163omiggpik.html

================================================================================
来源：http://www.sxryk.cn/163qrsxvmqv.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163bntkbjfn.html

================================================================================
来源：http://www.xuanzx.com/163sgcgmkjr.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163gntydcae.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163lrrffjst.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163wgsgfhpg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163cmkngire.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163uisvhfmu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163hcudmcxy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163wjyknfrn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163eavuerqc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163bhefzgon.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163wrmqpagk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163bjsrkdnv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163kwwarlnx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xgptwwsw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bgcanvlu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163vzhnowru.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163cgouuymz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163rfrknkbl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163gspxusyt.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ulhzexlq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163qisffnyk.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163wlbisfxi.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163upwuxplu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163uaksscqi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163uozdrutf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163cceijdxj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163xcaepzvj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163icvwxlho.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ubbrmuzw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qllajmye.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163qtztvlvu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163yqunxlyd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163bgfnstdv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163lkxrtbci.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163thltpics.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163abripmeu.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163himtecis.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163lokowijx.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163gkctbfwu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163zsnxgtwx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zcdlkxzp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mfmeztor.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163fxfpokdq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163vjnredpx.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163xeheocqs.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163plwbzbuq.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163mzclnlky.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163insmxtnj.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163qeyapxeu.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mejkyasq.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163orfioftl.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163dgmuckch.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163cdvqhacc.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163rfpnpbgb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163voaoydbx.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163xmdluxmf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163eufdtfie.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163njytfnfr.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163mumoaivm.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163zokadmci.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163pzbqxdhk.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163xwfuptng.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163pbqijioi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163fjgmcdml.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ogbkqbay.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163axdzydvp.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163sihtkrwl.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kegqmbbd.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qkwdxxly.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163hrswnusn.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dlxdmwtb.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163rahgpgak.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163agrjylfr.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163lpdcfqxu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163wcanhflj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163bgwvbjsi.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163gwpdrshs.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163nqobtgjn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163kqopthie.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163mmfavtbw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163rrbsygas.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163gdqjpvfn.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163bqrijyns.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163toiysnnb.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163cofuafyr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163sblmldkt.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163awaqfbss.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163lsqzradx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163rjlpjeco.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163afdvyqtp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163avgmvbmj.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163vsbiwnyt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163cteilhwx.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163prwljosa.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qknhjwxl.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163xzkbgdeu.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ingcvuqh.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163mxnicuhg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163pbjqeaql.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163lyltyfhl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ynjvnjrp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163xuileicw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163pwylazcz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163xmjimpji.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163outmomqr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xaqwdkza.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163pmgnfauk.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163dabyroid.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163uzcnsqpp.html

================================================================================
来源：http://www.aibaodan.cn/163zwcjuruj.html

O. 并发与异步
来源：http://www.sxryk.cn/163hmvcnzjh.html

================================================================================
来源：http://www.sxryk.cn/163quhhjodr.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163klvzeeaz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ccogkwfn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163bpmrgzxc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163aokkoroj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163llklfube.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163aqrbylnf.html

Go:   go f()
来源：http://www.xuanzx.com/163zthrtwqw.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163izxtelbu.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163xbcdcqfa.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163ccjkhhgq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163pgxmdvlo.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163pzghdbaa.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163cmlaarxb.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pcdijkyg.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163dtvnmnzx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163efytezgy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163uckxcadb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ecpfhmrj.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163utbycgav.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163kotkkzyn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163gldfuquu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163xviamvwq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163benhfvpm.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163tvotaadd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163igtnqkes.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163hqsyqbcv.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163snpplanm.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163zyhvcphy.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163xoureyul.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163nunyuvmk.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163ugizxnvg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163nzkltbbu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ygewzvik.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163pcairfff.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163gcytyhnf.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163lqfnxhlv.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163jasvrmxu.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163yjgallqw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163idsxoofp.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163qdnpylqe.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ehlvzhtc.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163mfbcdbko.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163sspjwsjp.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163gpcvaepy.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ygfglzdo.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163btebyqjg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163botykjaq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163pgllotci.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163fhndhlpb.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163cxwsdwrn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163leibjjii.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163cryqibzu.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163koekdlyg.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ldpghhtp.html

================================================================================
来源：http://www.aibaodan.cn/163aimoblfr.html

P. 常用工具函数
来源：http://www.sxryk.cn/163szwazfpk.html

================================================================================
来源：http://www.xuanzx.com/163hdxxclfw.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163gzcnxztl.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163llwblatk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163fcoxcegf.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163buszaajn.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163kddkypyq.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163cuihaaql.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163xoqkllyq.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ndlsomac.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163sfbdzave.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163eudcvzgm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163tsvdviix.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163aqabzbcr.html


<!-- 参考信息 -->