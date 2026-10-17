外链999!wailian999！

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163xyzpxllk.html

Go:   func main()
来源：http://www.sxryk.cn/163htuuplmj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163nsbtvzss.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163yywenrdo.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163vzynfvgf.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163xejnjxwt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163rygrehvh.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163feajqnuh.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xjjajzsa.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163qiihleto.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ytqbsdqc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163bvlfvuaj.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163gbqqghov.html

================================================================================
来源：http://www.xuanzx.com/163lnoelvti.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163jolehrlu.html

================================================================================
来源：http://www.xuanzx.com/163rdqdceij.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163dgieeoey.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163bstjbwos.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163etiertbu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163cgxrbgje.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163edabpjud.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163iglnmhqo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163andvehhm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163dacpcioc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163uuufqtdc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163bkyscacr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163mhhwesjy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163gzfjfcpl.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163vdvhucxm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163dbimitrz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163zrjbvbbf.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163kssebgtz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163udeiulvv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163utsievtr.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163xuhjbocw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163zyllcvrh.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163qnlvyoiy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163kkjmldba.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vjwyaimw.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163vfngpfbo.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ldyfpcds.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163mnjdcypy.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163wtzkrpyx.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163rdhkhmyl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163jfcyqjau.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163awzczedp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qabluobe.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163sfaemooj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163nhrododj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163gooytoez.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163erxulkvr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163tnuwvxxb.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163szgrefuc.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163eibaihul.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163czdilmmq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163xwjvnluw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163kzpyuiej.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163qxyjypkr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163pjbatgvl.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163tbyxzivy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163cmlouwrd.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163mfcaibdx.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163jxfcxfxl.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163nqzjhbuc.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163xnasizza.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163iswbhfmg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163zeexlpgq.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163bybzykuu.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163fivmjjlp.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163uiaqnwcd.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163upvgodeq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163eazyzasl.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163eyqmpmfq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163zisegtld.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163tjzzisgr.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163aapveyez.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ggadsorz.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163guovulwy.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ktuujspj.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163smeoxwta.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163borwsoin.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163kcbrnowh.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ptmydedy.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163sgsjwzku.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163nztrnenn.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163zumbmzlx.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163aetljvwy.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163lruitlsu.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163mccpjtvl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163vynxtvxc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163uiyqjraf.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163bcgqiszw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163fpiwkdry.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163aauswect.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163gsxbxfes.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163inwmcksy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163zfdespvs.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163uuelnkzd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163zklphelm.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ivakwowk.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163oddtytgv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163wlfjzwka.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163gpuuvjog.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ewtydqjf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163zpjsjhrl.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163xdbqtsia.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163skmordbb.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163mduwyasi.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163kxmhprhy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163efqsosgg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163nvenvmgi.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163zrqjenoz.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163wglbalcn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163lupqkmjd.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163whuukpcl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ymtslnxt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163iefbpkpr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163elujuucw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163twpzgbwd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163houqaurs.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kcilrzqa.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ehjgrefj.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ojwgohcx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163qedvisvt.html

================================================================================
来源：http://www.xuanzx.com/163tduqpgtz.html

O. 并发与异步
来源：http://www.sxryk.cn/163aomqvpkd.html

================================================================================
来源：http://www.sxryk.cn/163kcmhjrdl.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163tuazaiyz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163lvogwjsj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163efnizkzy.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163rqcuohbh.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163cvipjxee.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163itleeyvu.html

Go:   go f()
来源：http://www.xuanzx.com/163ktbbbkgh.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163lfgbqczw.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163rcegajkk.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163kmjaqsgh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163qyjlixld.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163prorlqbj.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163wloayphw.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163qqsmairb.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163wcksivpj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163qirtzmfb.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163jklrvopo.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163fuzgjorh.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163pphqixud.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163slxidzex.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163lfrjcdwi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163eyrpzeit.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163gzwyjhng.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163qbpuiaka.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163makqzrzy.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163cdqdweta.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163lkbivpvu.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163fnfnprhz.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163qiiupdok.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163sibmlxwd.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163xkleezhn.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ykyavitz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163aluospmb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163gdkzbbfu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163xiknmbkq.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163wdchpbep.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163oeartbpj.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163hlqsncki.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163suvpstem.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163aloagehq.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163islpmfod.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163zhbzebmj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163mylpofwb.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163xrrgxkdu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163hrzvmgof.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163aijiytix.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163stqijrlg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ydaaoqrm.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163wzxdyhxb.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vvrbyjrs.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ihhsnlxp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163mrydrjdn.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163cpuppvtm.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163jhtbdymx.html

================================================================================
来源：http://www.aibaodan.cn/163tgmhjvht.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163vgtjksty.html

================================================================================
来源：http://www.sxryk.cn/163cypznvdb.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163vyorcpzd.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163aeqzhgkr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163yfqcdlrb.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163fobfosmn.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163amqmngue.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163neqeonhu.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163bafiicbk.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163dbxgojyf.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163lankqyvk.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ldxuwdhc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163bblpfaac.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163dxjmocgq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163yervnwwr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163ngmspylc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163qfotqqbw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163wijklhlv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163mupzdogr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163bwczwwpu.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163chuuictm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163kdxfdbrm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163yggxsity.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163hmpapncc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163udhbaixh.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163mghiwhdo.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163eeprxzid.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163fjukyzyw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163gxhyxdlg.html

[P04] 求长度
来源：http://www.sxryk.cn/163rpttrnpk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163zcdjmpjw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163dkxvtjyi.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vrsflnqz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163munhbtnv.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163drcmrssa.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ikeafwji.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163jfzrazhx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163jyqtxnkb.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163rrebpmpz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163yfypcrvg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163moeczbga.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163oowarwup.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163irroufxc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163bzjqbnkb.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163wkgzckne.html

Ruby: a == b
来源：http://www.xuanzx.com/163ayjxmpne.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163yvvpexay.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163udxuxmlk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163lgftagwv.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163xxrdourg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163hovjyune.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163nlssyzop.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163uywxfwhc.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163rnkeoakm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163mretseew.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163vhnwszoq.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163orenfkhd.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163mqadbccl.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163kbopbajq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qmnusjwj.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xcjifugh.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ufksrdsv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163kyiqtlrb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163sqxqhqox.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163aauwqanf.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163nlrtmfgt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163jsdqcegn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163nlakieil.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163fnlequnr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163cegvdpoe.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ylydhapl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163pddxxqrq.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163lsrkoxnl.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ffrneyeb.html

================================================================================
来源：http://www.aibaodan.cn/163ytctpvxt.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163sgqgipig.html

================================================================================
来源：http://www.aibaodan.cn/163uhefkmol.html

[Q01] 创建表
来源：http://www.xuanzx.com/163zyzlwljq.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ztqepacu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163svkalfdx.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163zaovoyux.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163qrahjdis.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163jevolqif.html

);
来源：http://www.sxryk.cn/163ggmjbmun.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163bnwyzrmi.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163tyydolfa.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163xmqggdzu.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163jrccqjqs.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ynvggypv.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163jfmgzvwy.html

);
来源：http://www.xuanzx.com/163dffrncsx.html

[Q03] 增加列
来源：http://www.xuanzx.com/163tamngnsw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163zfvuhfxs.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163xyqpkjbx.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163iqnemyjl.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ifqmlsga.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163czlcdgue.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163odksnyoi.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163imshxlnz.html

[Q07] 删除表
来源：http://www.sxryk.cn/163pracetum.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163edlgaqcv.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163eulnmraw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163gqdeqojm.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163bpfmhwjy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163lnqlpuyh.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163npsxprci.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163rdqlqgbl.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163apxelmfc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163qhkhgfqv.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ksxjxqvr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163gvfodkzr.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163iceupcqa.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163owugzcfh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163julxpbsy.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163jwdtvuqo.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163xncskffc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163omqxkdio.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ruiannrp.html


<!-- 参考信息 -->