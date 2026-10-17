外链999!wailian999！

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vbrwkvbl.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163xvcbdmpx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163pufefvql.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163fbqzybcj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163zcgymqgc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163eivnrtes.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163zszspjzp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163xenhbbqp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163jepxsggj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163zqlnihkf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163zruxtkgm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163quoxsmbv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163dwxjukbp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163axefpovl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ipttkmrr.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163kidbtrpr.html

Py:   resp.json()
来源：http://www.sxryk.cn/163gxpsemfs.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163aiyifaqh.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163xkbdsxsm.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163blrmrfct.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163uacbwgbu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163cevitrew.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163lfwnuaeo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ldbhcggb.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163vvedodoa.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163hklnzzcf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163iqbuxjde.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bznqcwro.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163rarltipt.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163lrknvdfh.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163emfzfaml.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ypxmoasp.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163bbcugrgh.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163mdgrlnyx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163dhvkioiu.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163qqhgainx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163migsiorz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163yuriwwdh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163fiztamee.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163wyfmfwze.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ziigdsss.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163uthjwjug.html

================================================================================
来源：http://www.xuanzx.com/163dqkidkht.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163xkhwqaco.html

================================================================================
来源：http://www.xuanzx.com/163eryrcurr.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163jeyvczqm.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163olzlersa.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163lwxbzvwi.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ewlefvmh.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ymuuolsq.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163mnwfuitg.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163aeujdndp.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163cpuahydc.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163xxhtygfe.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163xqjhmtvy.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163gybxlgnt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163sxlcrujo.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163azhabvyx.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163vbqxctid.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163uqovixsw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163dkozelly.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163qqbhnvuq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163uyfxzgfl.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163tvinzcvd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163wvnrdstl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163cjeecgvt.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ydlybfts.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163nsqyugna.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163duzvdkft.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163lnhkhvjl.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163axygubqr.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163bpouistk.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163rnamhrjk.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163zwbwltru.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163smffkmul.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163jhexibno.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163bqokviqz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163pwytnexd.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163apmjwtpe.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163gsxzyoit.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163oxpnfdkb.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163zqwrqmui.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ruculgyz.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163xfpjxwae.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163nzmsbnfo.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163drzopxgg.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163gyaontqz.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163xueocdtx.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163rxyeonct.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163dptomsmy.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163lpgnbraf.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163urflofcb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163cxjiofou.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163tcragenu.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163cqojdjni.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163juhxclsw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ytpoizkl.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163thnukwyi.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ksejigbt.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163xeugtriz.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163plgxftee.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163qpzrcjdj.html

JS:   require.main === module
来源：http://www.xuanzx.com/163zjllntcv.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163qgfvjimg.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163hbnoovmr.html

Go:   func main()
来源：http://www.sxryk.cn/163utoglhhk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163zxglrdln.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163fdhjrgoe.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163rbajmlvw.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163fdgepgkx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163aplpvyhn.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163cefklasi.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zidminnq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163favgfjbg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163nhiepwcy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163grbrzhov.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163azvxvxxu.html

================================================================================
来源：http://www.aibaodan.cn/163iolbfgdx.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163uegzoshz.html

================================================================================
来源：http://www.sxryk.cn/163grhrzwom.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163vquysabx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163qarqiway.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163vgxhmxig.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163rcxiobwp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ojqkekpu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163vghafmco.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163javwvhil.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163bowltvzi.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163hcljxzfm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163fepygbau.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163exfnpeoe.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163xqrdoaqw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163akhniwlp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dcwfuyud.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163nhkdgexq.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163vnplivij.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163uixkyjgs.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163osxzfvfr.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163ljoiaxew.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ixflarvg.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163icdeamed.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163fkwzdnfr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163llldbiej.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163lbbxrjwc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163hxjrvudy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163rwkgvxzo.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163folxqgus.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163udjkpupr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163gjeixogi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163huyepiwo.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163bzjgnywr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163spxwqexl.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163sjmtrkpr.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163qeqnuuuk.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163rgvnaqlt.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163syctxzvp.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163iyjrjcfg.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163sfywevfj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163stsruofb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163saxwhnxr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163uriipepb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163daobfjhx.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163hviqlafy.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163czbkzfjx.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163qgckxglu.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ksfubqmu.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163olemljtx.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163vpsgjklp.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163hjqxumhc.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qtjorghe.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163pbcxebnq.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163fzxybagx.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163svdcqglr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163fjcgyjtq.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163bgxhvael.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163tmaeeyvv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163xwsswyky.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163stfnegjo.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163wedktfmc.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163scszrwcq.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163howtnlad.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163dbdhwzjo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163rrdhzltq.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163buangqqo.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163jniuuwbj.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163iqpsgdrl.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163htrqgxbb.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163votvfqfj.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163wfusrepa.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163advfcktl.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163klczlwdu.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163xycrohfc.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163zpygcfez.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163oqufgpxb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163unvihxem.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163edmvtvwy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163yxxubduy.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163enfuvamj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163wgqyrmoe.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163infafitt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163qkksrvnq.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163uvnpzcvf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163fzghqndl.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ykorbziu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163fcayrsxp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163asadtjkp.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163syzwlmpt.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163lfsmbdqx.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163njjujxqj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163abizbvwb.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163oxftnpqp.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163qxwwfohz.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163pnifqgok.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163vuzywsmt.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163oiqvslmr.html

Java: // 手写递归
来源：http://www.sxryk.cn/163atjmxnfd.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163qbjzoplh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163myqvpcxe.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163mvprjifu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163gwtdboju.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163dvgezgjr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163amfacovf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vldzhtyy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163brsdspdu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163jhlcghhy.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163vjungoon.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163yaajynxb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163jkssqzew.html

================================================================================
来源：http://www.aibaodan.cn/163qymrrpqa.html

O. 并发与异步
来源：http://www.aibaodan.cn/163lyymusua.html

================================================================================
来源：http://www.sxryk.cn/163uhodtduf.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163xmfyuyds.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163tnnqqjvi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163rlzlrvfr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163bcenniyb.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163flxlpccg.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163derqztzk.html

Go:   go f()
来源：http://www.xuanzx.com/163xyqqzmvs.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163byeersdu.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163kdicfzll.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163iwclnwft.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163lzjwqbsf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ovxmlfmq.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pagyusvg.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163uzlnblbn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163pnljifjs.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163runrollg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163pinehluk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163upqfuect.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163uhqojrle.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163mbraktrm.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ryhqvyeo.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163atnzfzdn.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ahdvbbbi.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ssnkkxew.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163iadamolz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163wgoepikc.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ntucehrn.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163upqjwmwq.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163imfzgnvz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163emmjdxbt.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163dbyubmbu.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163sttmrlrb.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163uiccmlpb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163jrmgzhnb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163edhxunzu.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163hwbqtler.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163lfbccsyk.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163jjpldkbe.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163cmvwmnxy.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163jweeagut.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hutobjox.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ccsfoedg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163yztxpmpo.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163gpzmgqxk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163latpranv.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163kbzsklkj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163bwroajut.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163rnzprnny.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163nbwvkjov.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163lweitdil.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163zgxpzxeq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163hotvpisg.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163grwmbwak.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ilxggqxr.html

================================================================================
来源：http://www.aibaodan.cn/163wescvdpr.html

P. 常用工具函数
来源：http://www.xuanzx.com/163kstpukia.html

================================================================================
来源：http://www.xuanzx.com/163exjbyexa.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163yvjspkif.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163mrrsqyel.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163djjfzlui.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tknjzunj.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163hdrfegde.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163lrpktjxz.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163gelvzbhz.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163fpecxtar.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163begckwjj.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163qgwaivde.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163tboksnwl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163cqcrynev.html


<!-- 参考信息 -->