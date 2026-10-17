外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163bjfjorkf.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163pohsfymx.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163sjjdbdfm.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163sbvvmlkf.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163zlgypori.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163cpkzmvvl.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ltrngpkg.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163pmxhaygy.html

Ruby: ARGV
来源：http://www.sxryk.cn/163zbxxmbjy.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163kcstyxpu.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163twspxgyf.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163yhnnkqen.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ggsllxgt.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163dclaydde.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163cujakega.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163bjyypykn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163nfitmczb.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163gjqjvehu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163cygpgbhp.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163udpkyiag.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163sezzqilb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163qpamxqts.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163cdwsgmgo.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bnuibdoo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163cezquqej.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163hsgsrsct.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163gjekzgzh.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163oerdgtnl.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163lzynatld.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163wwhsxrkp.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163fzqqucrs.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163sdaurzva.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163pteidcsm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163zchztldh.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163uhjsxumb.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163yaviiwpm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163zijurchl.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163pymomwpu.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163vwrgcffs.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163xixrqalm.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163xigrnftk.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163itbnmyrx.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163kwryfgbt.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163gokknywf.html

Ruby: exit 1
来源：http://www.sxryk.cn/163oremgvfe.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163plczffqy.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163yjubsaqg.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163sjygomvn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163uvzzhvnx.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ecfiwzpd.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163odbjssii.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163rwllfitu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163xuxognfb.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163julnlchc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163wqmxtbos.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ruktynst.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163yhtjlqrc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ehzsosgp.html

JS:   require.main === module
来源：http://www.sxryk.cn/163hoglomrd.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163fmuuixgi.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163qozxasmu.html

Go:   func main()
来源：http://www.xuanzx.com/163xmichkik.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163vodkffpu.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163qumzilnk.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163exaxxjyj.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163mqmrfkvd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163vmdumtch.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163muevkiac.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163uwopmydf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163tbaqmpti.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163glvcznnr.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163yeadodaw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163fcvsjyox.html

================================================================================
来源：http://www.xuanzx.com/163sawjjges.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163rhbmgmnc.html

================================================================================
来源：http://www.xuanzx.com/163gdgvmfng.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ggljakrx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ujhuoqrk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163dctedjap.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163biwnkxyc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163fiohudsg.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163xcsultfk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163ahhzcmpd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163xhnrnkhd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163suvyeszw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163uebhrohg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163jzvtqnsk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163pehnyblr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163txfvuqst.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163pbhrekpz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ywrabjao.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ijhrsjtm.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163yzkrqyac.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163oszipopy.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163xjnrdmya.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ydoxvfno.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163kjyzbjrx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jjwzgfvt.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163meunxbtz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163rqnmjrrp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163gbxgtrgi.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163bhsknwwh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163jtzujihn.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163oeukzrvh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163oeesgbiq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163vccqhlrg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163buehqtar.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163uhtrsvff.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163jvmveddl.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163tadagmvb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ionqvkud.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ytziueea.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163qhgxpies.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163ratphuns.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163fqlabtus.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zdwrvqoa.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163dvkewvwl.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163bnxlqdcz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163woryqnwo.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163gztqupbl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163lbjryijq.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163rjdzemnl.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163zovgxbvt.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163cqwcinlu.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163exsqejmi.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163twmobffh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163igrgaotl.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ylbqqfaz.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163vebjrhxz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163jhlqkfti.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163tsseahak.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163oznaefuj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163pfufezgo.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163bhqgjlfh.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163syqrpoeo.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163adwqcjpp.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163kzoecoyd.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163uoswhwsh.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163vrcqxgyc.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ssubnquh.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163cvqojpzw.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163rmqelgyy.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163nbidtryj.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163snguoedt.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163yzxrxymz.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163vzlipmyp.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163cxdfmsrd.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jbgdubbz.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163noddjmon.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163oshewljo.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163igquvwdr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163yykolfsk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163putokacr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163vyzppdsi.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163aitgmqsq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163nxinfmha.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163qufnwwhc.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163dcvcewql.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163mdbvbeke.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163clzkqnob.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163woplsyyk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163rfmadbjm.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163iluwvxli.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163yhwpmidv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163vgkhuhuo.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163bimpunyg.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163zbvunmsi.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163cycfaxhp.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163nfjfeyhc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163lfbwmpco.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ltfeaeeo.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163appjjuop.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163pbyysqcb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ntfdclcs.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163kyxzlusb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163cjzvsqmm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163qxpuvwzi.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163eugmuunw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163xuxdncir.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163euogkyck.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kdqusgmt.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163sbbqogbd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ukyraoix.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163rchrthjc.html

================================================================================
来源：http://www.aibaodan.cn/163fchgeiuz.html

O. 并发与异步
来源：http://www.sxryk.cn/163xuvxhrtq.html

================================================================================
来源：http://www.xuanzx.com/163tygdxwnz.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163kdgtfdli.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ywbfjgtg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163tvlvxjgk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163tsjmnjnw.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ugvrgqob.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163jtoqjzkp.html

Go:   go f()
来源：http://www.xuanzx.com/163wlhqaixv.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163lelehwkl.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163tkkacpjl.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163fgewtqbh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163wmejxcor.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163nykggusp.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163fguocyvv.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163tqnzrqze.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163yezzvplj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163qqpdhlre.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163fbtowbic.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163obulwvat.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ulupqfpm.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163fxntlhyu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163kdogxkrp.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163erwtfikd.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163kssoypvn.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163gcmysphx.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163xuuclphc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163cczmarvs.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163nsoeddch.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163cxgjdogx.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163mewykcvr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163dkknkdfs.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163xfkzqcrv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ermeskdu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163zzkzhmaq.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163ybhlcrsi.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163dslioqpm.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163wgtfzkac.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ifltedxv.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163rhvughgm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163vzuwjoaz.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163cusuybaj.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163odmihfcr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163hevxhaos.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163wwxmsyay.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163pvfsbeba.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163lhhifqje.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163chqanuxv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163owsgrbmh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163dffgzzun.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163rzqaefml.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163gxktysrv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163fizuwtdt.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163inmeaqbj.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ootymgio.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163xytnikfn.html

================================================================================
来源：http://www.aibaodan.cn/163yoqksagi.html

P. 常用工具函数
来源：http://www.sxryk.cn/163jhltdytb.html

================================================================================
来源：http://www.xuanzx.com/163ukhddecx.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163sexvcxdw.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163osmrtmqx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163rautpafl.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163nenflukx.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ivlpbqoy.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163znumstjs.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163awrctrrp.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163kajgszwp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163bhghbeey.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163cfyuqncb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163qeqbicia.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163dkdtostb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163cpvluabw.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163sbgwxmwo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163fvfuedwq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ncyypkjn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163tiluxkwu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163nrprvrmc.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163jsexmlsv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ikrabutg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163jpppxqrk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163gpgacpub.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163wuvqiwdw.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163tqekbxil.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163udvfrdkt.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163uayzfiae.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163beupdkav.html

[P04] 求长度
来源：http://www.sxryk.cn/163xfbmjaqp.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163hxdwwjky.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ibmebctv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163dltkrllt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163fwoviozq.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ehsdmipp.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163oefjdmtf.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163wpwhtahb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163pubzyabv.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163cfabarqr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163crpffxtq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163mfydihcl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163zkadvmrv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163dgyxklia.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163mcldkjcd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163argojfwc.html

Ruby: a == b
来源：http://www.xuanzx.com/163hpufyggb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163pctbsxug.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163eegckfsr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163nojgyscr.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163igkeytmk.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163xjqhjvzb.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163edwxakiu.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163fqfvzfjb.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163lwptqhva.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163nkuafncf.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163jteoniep.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163sqmxxqtq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163djfgkpud.html


<!-- 参考信息 -->