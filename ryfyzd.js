外链999!wailian999！

Py:   resp.json()
来源：http://www.aibaodan.cn/163bzqgkunm.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163qyaqbsgl.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163mtlqhrzk.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163wlwgdktk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163nfnvwzzp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163exgjmwaw.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163obwseqff.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ghuhnete.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163fvmclxic.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163albtyuhc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163jlmvzfel.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rwwpiiui.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163gdkdpurt.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163didsvzdt.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ayriqdyb.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163oluxosha.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163qbybfnuu.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163ikpfnjbo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163ircioisc.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163gwqrmmki.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lsujmzvp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ibjvkitw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163nvtxyyht.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163gxanqsba.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163kheozqjr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163mysvwrkr.html

================================================================================
来源：http://www.aibaodan.cn/163xkhszlhl.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163rqxcjwuc.html

================================================================================
来源：http://www.sxryk.cn/163uvcbkiya.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163kwywqblw.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163lbksjjec.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163nirckpoi.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163zkwigezs.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163imwojjhv.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163xpwrnbcg.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163hszzhyec.html

Ruby: ARGV
来源：http://www.xuanzx.com/163mrgutlqa.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163zmofxppc.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163xtmtrevl.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163xjilegbw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163fismypos.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163unwrdcrc.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ntruslnh.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163zsfvsvpp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163dabxonbk.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163kwctkqzc.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163flgawqlw.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163joktpzcm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163hpsjkddz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163duvflxds.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vuzfquoc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163lwejckil.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163lunmlmly.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163bvcnupwp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163elmscynn.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163erjrptdd.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163wmxpuuqp.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163npfxjouy.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163dxgnrofl.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163fnfhlecn.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163tfujmpam.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163wglqzmai.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163heionmsi.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163xxmqnyjw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163youucwex.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163oojmewsw.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163myhkxjzh.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163zaqofmkn.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163helnygzp.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163hidjcveo.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163psloajsa.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163wlufcuky.html

Ruby: exit 1
来源：http://www.xuanzx.com/163evfozjcd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163peaujqyx.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163bcgrkrti.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jhzfalnc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163hlwdrvbh.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ysmneire.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163uygxqbra.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ivboyuia.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163rwqodahp.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163gttqxmgh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163jevqxxfl.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163pqsdwpxq.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163uwssilwv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163zhaxbrde.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163dtioblle.html

TS:   require.main === module
来源：http://www.sxryk.cn/163tucyuxrp.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163cqbcasao.html

Go:   func main()
来源：http://www.sxryk.cn/163qqbvsvga.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163mtowocys.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163gkopzxut.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163sxuerczk.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163fqmupiul.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163xjzhqrqy.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163efdszyms.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rvkrcaim.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163kxhvcuod.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163wvxfoarx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163xebpotdt.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163xmcslkgn.html

================================================================================
来源：http://www.xuanzx.com/163awieiamn.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163sjcwsjlm.html

================================================================================
来源：http://www.aibaodan.cn/163agxrryva.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163itbczogj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163wxdeeyuu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163qphzsnuk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163pjxiqtsi.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163sxzdqiyf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163glbsyhuv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163odlrayvw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163onelfxkn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163yusbagjd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163kkawfkdn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gmuzdcyj.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ydyyxees.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163dhsuolbm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ertirdsl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163lzymlujj.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163frrnivni.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vuwqskfh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163etqcplvy.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163xziwyxnk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163tjqqfgoi.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ywxwvjhj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163qmgmugro.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ymyutycx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163rhymecph.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ebrgyltf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163qbynkely.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163vqrnglgv.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163nygrkczw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163shbqsjye.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163luwhljdz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163chajawlv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163gmepbznz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163wgnskspt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163ygcyllay.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163mdcrdzlo.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163uzoqwlaa.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163uuxxqiac.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163hrpctxsg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163uedljqic.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jojzwkrm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163rllwkdtm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ukqtzmzx.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163majarkkn.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163xxnxlyip.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163jraabzdb.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163rdrsqbjb.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163bkzhmmwr.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163iodumsti.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vyrzbvhd.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nggflszp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163spittwgk.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163nckcdglx.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163akwncljv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kzmizryr.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ubasbesk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ahecahmx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163qmdkvbuz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163tiqjallc.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163cxolfwcj.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163jcywusck.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163fytcyfsw.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ebbyjksx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163xxbanyhj.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163hwlgbsbg.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163vnygobkp.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163hxtmdglt.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163kqoaylsm.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163znjizexg.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163zrfemjsx.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163gxmkfgmy.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163baufulnt.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ygqiqrzb.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163prwmuojb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163kywgreqp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163bhpmfybr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163rkedpaui.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163qxuyqbwk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163znvxjyqr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163xpvfbyws.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163mjyocpel.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163yajvjbeg.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163qvnamqns.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163rufhrfcy.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163wefuqcnq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163xvzanmis.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163tooezlfk.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163zdaihioe.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163aosannlo.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163wqtiiikc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163eaefwplf.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163kfknhkrf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163qjgpzcps.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163xoxmkzoa.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163mnbopmly.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ycogtbdl.html

Java: // 手写递归
来源：http://www.xuanzx.com/163xqtezfvk.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163dyqmjpwc.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163wtzismzp.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163xnpmjiea.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163enouwgfn.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ohgwdfuw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163skhjvgxg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nxzufhke.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163gyxixjry.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163iiawrdra.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163fcqsbpnl.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163yrtyfzdc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163cwjtqkpp.html

================================================================================
来源：http://www.aibaodan.cn/163refckntc.html

O. 并发与异步
来源：http://www.sxryk.cn/163ksdmnisn.html

================================================================================
来源：http://www.sxryk.cn/163lzewwlun.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163wkkcnssr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163zncoicxq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163yctifolc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ykptjggg.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163yahykdrv.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163thigddou.html

Go:   go f()
来源：http://www.sxryk.cn/163eubdncgk.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ehoanhzq.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ziyhtugm.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163vnpeiibw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163zxwgggub.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163jvinjhyk.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163kqyzkltw.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ptgyvcxd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163swrthjgm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ngdthhpj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163xmujdhsq.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163vjfhlvpg.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163qfwcoouq.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163otwsriro.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163cekaouft.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163pdfsuhie.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163yihwhijm.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163mifrkxmq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163acdxeehg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163oagwjjjs.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163igyreaba.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ktxjopek.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ehbywsdk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163rjndbvol.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163exdxsbjk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163pgxedvlq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163qeewfliy.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163vduiczcu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163oysbbiqg.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163uqleuwas.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163fzamdgai.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163mijkehsr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163mwvpfscw.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163lttsjxdd.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163rimlywty.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163mftrscmx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163fijivrgn.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163lypelfjb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163qecqtzhf.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163isstvaws.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163llvsnzxj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163csiwlren.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163hqcbwqsw.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163rpqsxxae.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163qrhxwsdz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163cxijhfly.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163okmbuklw.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163jykuqewk.html

================================================================================
来源：http://www.sxryk.cn/163brrkacor.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163grxplekr.html

================================================================================
来源：http://www.xuanzx.com/163omxnmuio.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ojxrlfly.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163bzbbhplt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ydtqecco.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ckbaokvs.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163mvvoilkd.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163hdsfteyj.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163lddntqhj.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163lteocyik.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163kjxiybio.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163bqatixro.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163bhrfdmgu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163rokzpexk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163jewjupaj.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163uvgjtjdq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ibauudqv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163stbxpega.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163iehkwaqv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163xqgkhbun.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163wpelamqn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163rlryqgvs.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163pnympada.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163elluqrqm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163yknttklf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163fbrlwise.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163bzxixfgl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163sqssglgj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163pvgienth.html

[P04] 求长度
来源：http://www.aibaodan.cn/163lmqvyelw.html


<!-- 参考信息 -->