外链999!wailian999！

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163gunhmzuf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ojbhqeww.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kiegxdta.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163gxehyioc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163mflvzsob.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163magnroun.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ywwwzfvz.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163rbeicgpl.html

Py:   resp.json()
来源：http://www.xuanzx.com/163hlhpwifl.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163qnblpiyc.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163muzsdmso.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163rhjazagm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163keqaawqm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163kijxgjsv.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163mwxefrio.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163jhzsksvz.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163mhcelwjb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163dvvwonod.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163vkjcjpaz.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163qlkwrdoh.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163hbqqlqar.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163xdhuwlxe.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ecoznqtv.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163iwkcdhxl.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163wpfcsytu.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163lezmfslc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163yrskxqiv.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163dgmbahqx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163omjawxor.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qyzcdsun.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163kuehyrbc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ivzmvwci.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163rjbwstpe.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163gzttqnrw.html

================================================================================
来源：http://www.xuanzx.com/163nfmqablx.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163obfdcwks.html

================================================================================
来源：http://www.aibaodan.cn/163nonmhknl.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ahmuwidu.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163cursqdir.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163bagrnvnp.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163wxysrdcb.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ajuxqcnt.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163zycjimbo.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163qacdjbdu.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ttnzkgdk.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163xqemozfo.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163nyvhkjoz.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163dlvfsqiu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163siddfirm.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163nvffjrnt.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163zfbgrenv.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163znwnsbgl.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ztganekn.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163wfewakei.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ujfrmluu.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163xupkfmyy.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163tfjznbrt.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163pzdhhbsa.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163hwnpnhfs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163yynafggv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163wyrvsdea.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163kydvajow.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ydvhpxss.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163zaksqfoh.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163xbailyda.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163tspsssnt.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163fbqvflks.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ztpovmnw.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163hfpmkyks.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ksudsqer.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163zoioutls.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163ivqonphp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163icjspkes.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163euiykhcr.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163cpbhishz.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163dmwxciqr.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163sbthcjad.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163lroindwx.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163hhdeqxaf.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163wagtgrup.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163icvhtakl.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163mhmjmwvy.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163yxrkykma.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163dlibqffm.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163oqssgvoc.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163xvfatcir.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163itntzabr.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163rfnbrvvl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163bmafptpj.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163xexwrbka.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163wdmwdama.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163zyymnjdx.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163meuoxxht.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163enbnyipv.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ojhwqfaq.html

TS:   require.main === module
来源：http://www.xuanzx.com/163erzxnmzv.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163nnzdbaes.html

Go:   func main()
来源：http://www.sxryk.cn/163wpnkjtec.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163fybxsdat.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163xvbhvaot.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163nyidgrda.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163vjjkeshq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163jygsjphq.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qskxmokt.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163qlczhbin.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163jcglzxxw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163rbdkqpmz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163gbscvvbk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163toliegmw.html

================================================================================
来源：http://www.sxryk.cn/163nfqqncxb.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163pvlxaepo.html

================================================================================
来源：http://www.aibaodan.cn/163pkmpdcjc.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163znkhsttj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163wmdmpnol.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163kcszkohh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163xvedjatr.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163wimbyttn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163blsbrhfh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163kptghjxm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ejpmosfi.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163sjlyucof.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163osryslbr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ficfjfxf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163wdkpsrtv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163njfnbnni.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163uicztzub.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163iwgydrlr.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163khcagssn.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mhitebuk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163jlzwwpmz.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163zcfbnkjt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163fyrptkcm.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163gfngsviu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163akuoghjo.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163tdxxwgno.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163asixwall.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163otdygilx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163grammloh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163dkxchluv.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163akpnufgk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ukoqotcn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ntdzozla.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qzuwnjlw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ohmohbts.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ojyplanq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163ucifihta.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163bazigxtr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163eorpntlt.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163bhwgymjy.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163giyxbswa.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163flhbkggt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163faxergmp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163irycjmal.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163uapibiek.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163wojgkqcc.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163rheoosds.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163wusormnj.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163jutyltag.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163umuxthdk.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163qlqmtpkv.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wwbvofbj.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163uuxfxxrt.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163xanctkow.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163zatzyjgk.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163osdnmmmx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163pfwirtjl.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163llxpjwts.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163baukasdp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163jndlecgb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163oiaaapbd.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ddjwulps.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163udmwgtzn.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163nlchdnyh.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163hcedkunz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ptanazej.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163rdcexlei.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163uoupqvcx.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163pyasezju.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tjfnpxed.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163kxeqceks.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163hvnovjfz.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dkqvgubo.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163zjjgkrqc.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zgfeybzf.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163udjonewy.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163owymevvc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ywkaafgs.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163zalxlews.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163kbemoxzo.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163hrokauwp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163xephsgff.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163xppmmnxp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163kyjfabzx.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163enbjdvbj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163tzqvriio.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163cdkmhpxv.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163sdwubebm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163mearnjan.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163xnjjksgo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163levprjmz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163gyvmrrwi.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163eozbdeit.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163dazibpfn.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163npifhfmi.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ddwiqmbq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163hvrbduax.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163euuxpbth.html

Java: // 手写递归
来源：http://www.sxryk.cn/163cucvzjwg.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163lyyqdcyn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163avrfrxmq.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163uoplcfdm.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163quulhqkd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163srhaqmlr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ldejulnb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vaakvkml.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163dkonyktb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163zcmjhswj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163nmwmalve.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163qhrxaxdk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163acqbcewc.html

================================================================================
来源：http://www.aibaodan.cn/163cgynaano.html

O. 并发与异步
来源：http://www.sxryk.cn/163uzosyyut.html

================================================================================
来源：http://www.aibaodan.cn/163cucdypmb.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163xyjjlyzr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163cumghpya.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163bjnqjozv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ctgirbyo.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163nwigumoh.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163xdlrpqjn.html

Go:   go f()
来源：http://www.xuanzx.com/163faomcoqn.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163jctztjyh.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163wqdbumac.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163nofwbyrh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163qgrqepsg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163dfpyhhrj.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163rdtueaam.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163repxauqk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ddtmmebb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163usrrrjzp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163uagwjgci.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163tavzkjws.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163aiapbgrj.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163vjydmjhw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163xhbvvsit.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163htjehqtu.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163boednfua.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163byetdurf.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163vmoycewq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163vkducdfk.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163nwzhygbo.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163hhtafobo.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163rpdvncpu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163zydrjtdv.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163sccxkiqs.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ovvclzma.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163jckmakhj.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163pjcagqte.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163fgwbzhxi.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163fhubmfgy.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ugxkzyfg.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163wssgvbwv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ilkutjeq.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163prfgemih.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163hompduct.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163upgrujlf.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163yhihahep.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163dzablhkj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163nikvhqod.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163koclrzkw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163rjwxrneh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163nktceyov.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163awkrqrwa.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163nwzyreti.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163kwcrzwxq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163gvdakrfi.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163tzrncgck.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163olybhrlh.html

================================================================================
来源：http://www.aibaodan.cn/163kkpxppme.html

P. 常用工具函数
来源：http://www.xuanzx.com/163bvfubpfe.html

================================================================================
来源：http://www.aibaodan.cn/163mswjpngw.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163imqbgsac.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163psadmpcn.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163rmcsjgir.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163vgkrverv.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163byfqkxbw.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163iyubiwnr.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ieulanhr.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163vbahpvzy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163wesrsuzp.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163jssxrgfe.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ncqcpvxl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163hzoamucv.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163zkvsfyul.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163bcaxapwc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163salcalcw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163yfxcjvdl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163uiatxufu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163rebxkudc.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163jlbopvip.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163uhmwltoo.html


<!-- 参考信息 -->