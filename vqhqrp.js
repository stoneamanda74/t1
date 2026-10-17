外链999!wailian999！

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163urfsfiuc.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163jsnbolmy.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ltjufshq.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163djgkfooi.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163oarxbqxn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163kizhgwab.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163suobbrme.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163fujwiytd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163vqdwqzqv.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163pvncfzqa.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163uhsjaaja.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163wnamnbzq.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ageanwei.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163dqpkalrc.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163mrdzhceo.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163gtwxczuu.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163uuvxphoc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163mnjzyonm.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163suhfdjmj.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163nbwsukuq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163tyzlxlzr.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163uaonymhm.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163pzmegjtu.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163dkrljcnb.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ilhdadog.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163nffjcqsg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163xzrfqtgv.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163umycphyx.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163vszufejy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163fiteqmhq.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163uevolonh.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163sqhbqdnk.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ogsnzype.html

Go:   func main()
来源：http://www.aibaodan.cn/163gphuzwtl.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163qotyppdm.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163mepxaeir.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ivhzypfj.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163zkxmzsih.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163cvbrtdyp.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163aaseimnz.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163yfjfnfbd.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163aeaxmgss.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163vfckpspb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163bttaadnq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163yvcgwatx.html

================================================================================
来源：http://www.sxryk.cn/163snxrgpfe.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163alsftshd.html

================================================================================
来源：http://www.sxryk.cn/163jbiucrqh.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163zxehfrmp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163bcxfkshj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ppseprjq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163cbxjntob.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163laprvojc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163qfmbuckg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163wuxwmiyi.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163ytpmdltc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163yqrzyuuz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163iufguzgq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163mneeonop.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163vdzpdbrz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ifsbhmdd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vzbzplne.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ahynaaoe.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163pamqiqhw.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163uurnpgqz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163hswonwzz.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163wneyyrnt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ebptqomc.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163jdklustt.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163fjtheuej.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163dchtitie.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163nxyscjsa.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163pwknhjxw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163zokttusu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163eclutzqb.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163jzlhcxlx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163arzrapxz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163tdfvwbch.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163dssjncgr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ktgvgdii.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163qcxozpzw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163iaottpqr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163gxyxfssg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ddrzcxyj.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163klzaspmq.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163akdhibse.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163lwnglgjz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163sqqfmhbu.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163bhrmvamd.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163flmklwhj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163eqpwxupc.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163rfkhjtlo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163jzxstjdb.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163zzptvnzh.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163mbmxkfwp.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163bkxcqwhs.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nchbwzcg.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163viemxkqe.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163tmzfuowd.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163baojkvsq.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163jxjghxvb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tznntrlz.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163qpivjjpk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163cptxskut.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163aodzjoev.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163chylyctv.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ggmiikbz.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163xzmtimbb.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163jieevuhy.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163xihcokmp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163bujoygnx.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163aidntpfz.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163lanxrvdw.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163fhuvwncf.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rlhduhxt.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163dsuzccvw.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163wtopbvmg.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163islrcfbx.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163egvoestf.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ltfuvgxe.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163aunvibft.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163bfjnvjni.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163bjbttcye.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163yxvxsmvu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163svedopuu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163sllslyum.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163dstgzccl.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163fmeweaih.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163rehssjwr.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163irdkwpib.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163rchelxex.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163xwdwrdxt.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163rgtqxvzc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163aksjgtjj.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163btaetcsk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163pgemdiex.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163yjdivoie.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163tkodfzoq.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163qffqnkwl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163mrmdsqlq.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163yewdqyge.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163idpgleup.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163xsztwlar.html

Java: // 手写递归
来源：http://www.xuanzx.com/163oblicoab.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163yfurbiot.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163fpqmipwo.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163eorjekhy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163oktcifgc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163rqhfhpwo.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163icdrgnxb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163dalpxzms.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163rpnzzrjs.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163birvztqf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163kktxxtpb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163gxtvoric.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163eyzsnfni.html

================================================================================
来源：http://www.sxryk.cn/163smusyyxb.html

O. 并发与异步
来源：http://www.sxryk.cn/163wqrddgnq.html

================================================================================
来源：http://www.xuanzx.com/163bijnaddt.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163rhlebkny.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163uglzcsri.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163imzntrkp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163kttfpkdp.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163fjnffmfn.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163qadtgeaj.html

Go:   go f()
来源：http://www.sxryk.cn/163yozxwewk.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163lrdlgbsr.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163jkjllcnn.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163hsmxgjcj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163mvoejpvv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163fazpemxk.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163tihvvswj.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nlqdsrml.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163cfpfhxoc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163rwngxhhs.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163ueqevaxz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163jwvdltnb.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163rjoigqwv.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163qixlerss.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163gtiziozj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163lzrxrdmh.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163jipftuso.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163unpavhxk.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163nuzqgmbd.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163gilisqya.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ffagoqgw.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163mkxxmkry.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163sjdkekcm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163pwphdqmu.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163azoqdlik.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163rggwjpoa.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163jcrhoegu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163vstkhnin.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163znmjpcip.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163zlckixll.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163kshfigjk.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163skqmmjkd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163vxualbvn.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163isegyslq.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wzbojiph.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163jtrvylxk.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ciidswlz.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ttigqfub.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ybuivygk.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163bikaxmib.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163jdjwuylc.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163afpkokwc.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163camljhyi.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163bkrokcmx.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163pmrswvuj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163dszxvggb.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163oitrurah.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163jjkgwvnf.html

================================================================================
来源：http://www.sxryk.cn/163ljipoygm.html

P. 常用工具函数
来源：http://www.xuanzx.com/163vtusbdmy.html

================================================================================
来源：http://www.xuanzx.com/163bmoefwxo.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163kakmuolj.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163miugbbwz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ozuaxoxn.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tdrmvorl.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163zpuwxazy.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163faxqqazs.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163hznepkej.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ijifmafh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163sbxibqmh.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163raxenoip.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163ogqsgmah.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163ytjzaclw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163vyctvmvj.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163vgsmqnqf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163rewuqbrb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163qobawvsv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163edsosazd.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163atvbwhnu.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163kzrelxil.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ngwexnxg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163fpfzxumi.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ygjlhtsx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163idmodhaz.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163lqbbimrg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163lbsftmca.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163xfybacgp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163qmexxpzk.html

[P04] 求长度
来源：http://www.aibaodan.cn/163qbnoantr.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163jjqkzskj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163erllzovj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163tfisrwlm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ldnnhxxu.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163gqkzecoy.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163dvqdbokb.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163buydoysq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163qlxvfgam.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163qgfdnjmf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163epjkvdmu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163enioujzw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163bhehxqkw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163wbvjyrly.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ooaxtmxh.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163uvvymbew.html

Ruby: a == b
来源：http://www.sxryk.cn/163htseogbc.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ymtzgbgm.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163njubzcbo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163fbjszfpl.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163ayfyxdoa.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163jjfnfacs.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163hdgsltac.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163oeqexzqn.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163npsnpdvn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163jptgxiix.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163lhufyuuh.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163zkynbukx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163seetgnhl.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163zhsavrni.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163frxedkxr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ontxbrzm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163uzvnpckt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163hnrrapbn.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163vdabzmzr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163vkdpndmc.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163wzaqpiyk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163qpfxzkdj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163olgtmzry.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ehvqenby.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163loqckzhc.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163jpgzdkgg.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163lpekixnc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163brtgidtu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ijlxxyru.html

================================================================================
来源：http://www.xuanzx.com/163wltpethr.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163dsqxhvpk.html

================================================================================
来源：http://www.xuanzx.com/163atjcqtsl.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163qhpypmks.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163cypruxea.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163nfwnwije.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163mfjzuwkc.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ncmjousw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ipcqaneg.html

);
来源：http://www.sxryk.cn/163fozqqxdw.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ortpwaca.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163ftqmmrvt.html


<!-- 参考信息 -->