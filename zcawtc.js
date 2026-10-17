外链999!wailian999！

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xrgwnpdm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nlemucqm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163spsuditv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163jnqfhihe.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163jzbjmgad.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163hprahnud.html

================================================================================
来源：http://www.aibaodan.cn/163rghgokio.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163qtsnkmts.html

================================================================================
来源：http://www.sxryk.cn/163tklzxdgg.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163sllpisbn.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163wufuvmqd.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163zowhhvsr.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vqvucudg.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163oihzlmnc.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ejcnibuq.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163eodbvffs.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ucvyvyke.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163knfguvks.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163asoxuhrb.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163cznxwfyp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163wpjnnhop.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163enbidoad.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163oyrpxhvr.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163srpgtgpw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163rucniivq.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163gcwztxsh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163aqwnlwxi.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163vefudkfp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163fvrfhxtj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163elqpitjo.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163qqrfbart.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163qdntzsfs.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163lpyfbdro.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163nomioqmx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163dzrrpthv.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163lhucpvku.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163xhkniylt.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163lbgigrhc.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163eisqrxwq.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163tpdbrqcq.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163yrrmcvel.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163lfqupnww.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ugwshugk.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163sbgmffar.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ktqaohao.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163bkgxigvh.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163zkuoyhbp.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163mjhurrfg.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ijlecigu.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163smlczmmh.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163uagdnmjc.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163bxvmpjcy.html

Ruby: exit 1
来源：http://www.sxryk.cn/163niyolely.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163krgqwwmo.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ihxddtnp.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163lcsamsxw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163dovnuiuf.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163nixdrezy.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163toxynyby.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163rhksmjmh.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163aeijckdh.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163mzenlcyq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163tisspvtm.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163upfpzvoz.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163hfznvhox.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163kxlokwhh.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163qzdnsduk.html

TS:   require.main === module
来源：http://www.xuanzx.com/163udhqfpfh.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163izqfimlx.html

Go:   func main()
来源：http://www.aibaodan.cn/163redupnun.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163xejywcnk.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163zbnjletx.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163jxvxfpmp.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ofmztrhj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163xejmniyt.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163pfqfxsfs.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163fpaodluq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163gqdljopy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163gmjdkiwz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163uopdxpjx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163xmiygnqh.html

================================================================================
来源：http://www.sxryk.cn/163hwnwisur.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163aqxyanhm.html

================================================================================
来源：http://www.sxryk.cn/163kqwzazax.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163guwlzybi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ruxgyedu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163tolexfvz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163kzsbdohl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163lpoltdjx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163hblynuhl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163sfevmpcn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163kcfmpeny.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163exgsoxad.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ruagipxv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163otmlziwp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163wvvffaee.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lwkdxvua.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tvyreery.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163lnodulcx.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163nzkeuylj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163hykyqihw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ryxuxfcy.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163wlgvuqvl.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163qjunehyc.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163dntguzxq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ifaitrzi.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163chxtpubz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163rtbldluq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163pnirmsoa.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163sdqmcspm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163oyxzrzii.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163izjnluug.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kshbwjqf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163kzeneikh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163jgghmyjs.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163zkcsdlqj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163rycgpapg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163arnwipht.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163sbhvnejm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163iitbzkym.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163caujjetx.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163endcnlhj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163kxulkqsj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163sqzzaizz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jiafejpo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163hbheibvn.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163eeyexyhq.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163mnzgwwdf.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163kmclxhhb.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163beomjfic.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163rqkoslye.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163etudjejd.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nksiqtvp.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bbprgwnu.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163zdcruzgk.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163qjsdsuvi.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163onpbcoel.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163fbqddbcs.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163oyfqvqmq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163bjyghfqa.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163pmrwhvsn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163youblhfh.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163jacfeiuw.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163pfvarqja.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163dfsjkstc.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ectuaqod.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163sseaenvu.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163pxerlthd.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163egnmwhgl.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163avlausdl.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163afibxbpd.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ygdrnmjj.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163uqddcgcr.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163tmgiceqv.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163syqbdqob.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163gxnskfvp.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163hifxrvdm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163gvnnxznv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ozmyaqjk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ojkyicbj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163hbcsikkf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163zzbseqac.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163glbmihco.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163uvldlfrk.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163vzpzyxaw.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163lgwphwhx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ifqhvmmh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163bcaioxtk.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163tnlvgvbu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163wnitgcxs.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163sfglyacx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ksjaiems.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163boxntwng.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163brzehyzs.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163jthacula.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ldxcxxmg.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163nffuggxc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163scslfmrq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163cwjhrnno.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ubukfrfz.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163lzwgmlev.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163hwuqlbfb.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163zdovpjbd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163eszteosw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163jeazhrok.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163tmbdojnm.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163betwpzaz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163thewfahy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163afdebmik.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163pwdoruoq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ehplupwp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163cmgfzjpb.html

================================================================================
来源：http://www.xuanzx.com/163fgvshlkl.html

O. 并发与异步
来源：http://www.xuanzx.com/163lybmiknj.html

================================================================================
来源：http://www.aibaodan.cn/163cytdzjha.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163kkypukiz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163dfrtryma.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163cnnvxyaw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163wkmgxvnk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163tnoqdlkp.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163fguojlwv.html

Go:   go f()
来源：http://www.aibaodan.cn/163arjqkhxc.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163rsplzpsi.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163yipqurlh.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163aavtugmv.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163shjquxpj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163gnthnfeg.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163smcqartp.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163waubymua.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163uftfyeur.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163gqzhrhly.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163tnzaishr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ivrsobfc.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163nusnttgp.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163vicjryih.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163uhxjixpv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163kpthpoqo.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163qigblaag.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163xvkmlrjv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163stkstrdh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163atwhlovx.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163fnqchlpm.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163nunxugig.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163hxqztpwg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163hoopsupd.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163znqoltlx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163hyvchpxf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163jqzpdcig.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163ugeoacqk.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163pgiknlyi.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163yatbefqa.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163vvdxdydk.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163jjythusa.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163jolxkcdl.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163iqslewqk.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163gwxeulwh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163hfhjumfy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163fukdcgmx.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163juykifhg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163utpsptvw.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163usqnpzkg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163dlqmbkrw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163rwqgdgtq.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ibcxhrfw.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163opccngps.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ezvifowi.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163zkpnxjma.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163hqkcxgmy.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ssilrxnl.html

================================================================================
来源：http://www.sxryk.cn/163rexauida.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163bdytdcsi.html

================================================================================
来源：http://www.xuanzx.com/163anzivclm.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ldznobkd.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163lkpktegq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163lmxccadi.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ycgaixos.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163exrpldiv.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ntlpukcd.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163outaytts.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163vvsluvvi.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163qagqalxz.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163wkhhfvfh.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163hcuphvng.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163tymieczb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163flrisahy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163cpbmtjkm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163fgnmhijr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163rmpuhqya.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163yckyfwzr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163dbtianqq.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163vheulmyp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163xtppjhwn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163jxxvfavy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163uyagkkav.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163nnxywgee.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163msecbmii.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163qipssyol.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163oviuhwel.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163pceopssp.html

[P04] 求长度
来源：http://www.xuanzx.com/163vrvaokdh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163uwscrjzd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163tvnqghzq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163inwqhskp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ejibbxrr.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163isuafllm.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163paoqusis.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163wtzxxtat.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163gwbkufvk.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163tpvttojw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163bxawckwv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163oqinfuwx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163caagisax.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163mghkgatu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163cqsixxxw.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163kitafqln.html

Ruby: a == b
来源：http://www.xuanzx.com/163tiqbndnq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163hrfhrwyf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163fivpjevv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163twejzfda.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163wzfhbdxe.html


<!-- 参考信息 -->