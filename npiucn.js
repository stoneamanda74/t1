外链999!wailian999！

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ezolmzes.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163irgqimvv.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163bkpyjloq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163bhdklvfj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163wnuhlilu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163sfiuufwf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vlqbczlj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163qaulbvhw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163obzikblk.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163pevrpcqo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163usrptcmb.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163gvskqrvd.html

Py:   resp.json()
来源：http://www.xuanzx.com/163isfinvta.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163aiskjloj.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163qqtrywzr.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163xnqkzqdk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163lomwekii.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163hkgdnrbd.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163tjvdmzad.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163zvtelxfs.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163pukevmcu.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163mnbuehhp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163cfobzzzs.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ygsyhcpp.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163qprgucpi.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163qaxbaiyr.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163chjpzgyx.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163avzdbfos.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ghpbrpgq.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163oybbenii.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163zmhknyqi.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163uhrdtgup.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gntqfvfv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163yqdmvrgu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163yrzgncej.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163httnzzsg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163wtrjkimb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163plsubzpw.html

================================================================================
来源：http://www.xuanzx.com/163qicrnaxf.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163uomrjeca.html

================================================================================
来源：http://www.xuanzx.com/163zxyfgkop.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163cewxhqbt.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ddktrtnp.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163eltrnafy.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ycqrnxgg.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163zlnpccrt.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163frsvnhyz.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ujmjkbvc.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163apmwgzjm.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163yjdffyoe.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163qfyajpci.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163tseccgna.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163urexypve.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163hqbxjohb.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163muiigfej.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163vsncpvym.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163mbdqqkhx.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163muqhccxo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163vryyuolp.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163pxecpxfj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163mmszuyjf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ojkhlaak.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zsfixtyz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xalksyjb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163pomohlxd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163szuhlxtq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163nsuhjjxc.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163pcdkyblr.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ixhhhcwh.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163gvhpogmg.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163pglawusk.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163tgrcbehb.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163cicoqyul.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163yldgaqsh.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163dtvphqod.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163kiwyouge.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163cioyxeco.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163rfnadizn.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163zxlcgruz.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163zpfamkwk.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163rxhywewq.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163wvgerdxo.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163sfrjvwpe.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163flcokysu.html

Ruby: exit 1
来源：http://www.sxryk.cn/163iaodvked.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163rksuofkc.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163hggcrvsp.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163sdtzcgpl.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163niynjwhe.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163rotncczs.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163nrdfosoe.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163jsydjxsr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163lmcinmnw.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163fgbgkiuu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163tlwjrulj.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163wdvdfqwd.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163cnfrejlq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163yzupcjaa.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163hqmhxdfo.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ywnjwbcn.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163kmfftqbe.html

Go:   func main()
来源：http://www.sxryk.cn/163wpalzrrh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163vnklwceq.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163gcuxfayv.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163juwhrsfn.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163umlppxju.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163jbdopvjl.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163odwfvbsu.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163cksrittf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163rfkjwlyd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163zdqtxfxi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163voxsrpac.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163jxgpwwgz.html

================================================================================
来源：http://www.sxryk.cn/163iskzylyi.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163orgofepw.html

================================================================================
来源：http://www.sxryk.cn/163lbtupfgd.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163zhglpshs.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163kguvaddv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163gcgevkfb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163pagmdlnx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jxskxwpf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ccadlhic.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163zdkovmlq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ivppkfrs.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163lvqyrqyz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163cqnvpryk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vwdutfip.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163rbcimjuf.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163swvamvec.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163kzjoxgim.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ylzgdnsy.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163kjmydawm.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163bivqntye.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ukxbohde.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163cxuxqqud.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163utyxqeif.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163jrxvbuqy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jasrhiot.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163sghntygm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ulwrldep.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163zihknvke.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163erxekren.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163gefbzvuo.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163tvutpeyj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163rlgpyrwo.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163voviqlak.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pxdvomlr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163silizxsw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163pblsgxfu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163rfkvmeug.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kowukaga.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163bqoglprg.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163jzuthyiz.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163lcmadyvk.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163gxgekmxa.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163fhveakul.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163pnmuqopf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163esapdhxa.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163wwkbjqia.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163aomzuxom.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163eewcbwnf.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ispydaeg.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163rpbsndvf.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163mmwrsigk.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ujrrhynq.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163uetlzdvr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163voamgspq.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163wkdbasvc.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163gxbvomlk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163dvlbfses.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163mazvlaqx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163wqtejyco.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163zzlneqcy.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163derpowrs.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163kbtvzetj.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ascqayfl.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163lyznxbfg.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163mrybufcs.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163qaoydvix.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ldxpbcnc.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163nmdxeofl.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163bpnvxctb.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ddnkqmwp.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ahedqifc.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163uhimhwoe.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163togqepet.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163cgszctij.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163txfdfrmu.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163stbpyekw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163gfglwfqi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163bqkvqbrz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163lrckbyom.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163icopcjtq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163jxmqdiob.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163comhfbzt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163demrdmol.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163thsmgozy.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163eijgbwtg.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163svqucjhz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ikqluhsr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163gbhsrmmk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163hgqnqqtd.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ezgdohei.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163vijwmtno.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163rwiobboy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163vlznggrv.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ktpirgpp.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163fzfsqhll.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163jdbqtybx.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163fvwzgcma.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163vqeenmmu.html

Java: // 手写递归
来源：http://www.sxryk.cn/163wqvqtrrf.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163pldrzgfy.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163orjgguyu.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163vzedpbat.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163vjhqmmvo.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163zasejjbb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163nbuzijhn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ygexnjnk.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jkvpliia.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163vbmgasxn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163emjknofi.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163neldssuz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163uybqnpsj.html

================================================================================
来源：http://www.sxryk.cn/163stvsqfug.html

O. 并发与异步
来源：http://www.aibaodan.cn/163clpzjisq.html

================================================================================
来源：http://www.sxryk.cn/163wkvvpkwv.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163grmtrrzz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163qaezvpjb.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ohvamutq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163uupesyst.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163eohfkcmr.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163eaowugvh.html

Go:   go f()
来源：http://www.sxryk.cn/163ddelgmwq.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163gyzezeaa.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ggbnswrq.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163xxyuitlz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163dsnpmgnt.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163oqccwwjc.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163phlkemuu.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zhxvcbtl.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163gifgssoy.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163eondxinw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163dtcmudqd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163toazxfjv.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163yawrhqhl.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163dywfabgg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163pkgitkgp.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163yuuxvwih.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163tqfdvedq.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163exdfaims.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163scpqajin.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163xlegaqcu.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163gzccxdng.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163yxkplaqt.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163zexequkn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163hjlprfda.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163fyerkaso.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163toryrdjm.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163lexdzmsw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163humzfoie.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ahrofpkz.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163iikcxusu.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ksbdvfdp.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163eacuajcj.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163uwpxqzlh.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163cxdwuvxv.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163cikdnzsg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163cuwqimyz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163knxmzimw.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163teobcznn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ujbzmqow.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163lllnfsne.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ffgldhse.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163xkjoxlvm.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163diuwyjak.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ozhiydqg.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163pynrshls.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ezomalot.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163djbxqkut.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163fdsnvpmu.html

================================================================================
来源：http://www.sxryk.cn/163okqwvsbc.html

P. 常用工具函数
来源：http://www.sxryk.cn/163oprnilpv.html

================================================================================
来源：http://www.aibaodan.cn/163ctsbtqyb.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163dszbwkmd.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163sbqoioxq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163btgqbwzu.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163edmkineg.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163esvwkzuv.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163stlxxwwc.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163tgjhldvd.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163dabpupuy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163aenlvqsf.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163sxwjigeq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163qeuazgka.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163fwlagczo.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163rvewrhxf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163hvhvwyfe.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163wvpbrsub.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163wztgsbqz.html


<!-- 参考信息 -->