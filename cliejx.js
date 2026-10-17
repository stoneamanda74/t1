外链999!wailian999！

Ruby: arr.sort
来源：http://www.xuanzx.com/163oerhbuau.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163oarhmykx.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163uzlclgpt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163gtralejv.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163hwoxkenm.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ydaeqqjp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163kjlsxmqy.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163wstpfaxk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163awnbelet.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163bovcnupk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163awkvvfoi.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163cerbbiij.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163qbxjnzlh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163qjvwrijf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hzallaul.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163aqtwskft.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163yijsksnr.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163sudodjzx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163isfyqzys.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ajytdrii.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163jcszxxzb.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163gbrwvfcd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163yirswzua.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gyfxfmss.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wlsvvwhd.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163hmpifmcr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163wphsemzt.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ijkqvyzo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163voklmnzh.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163aymhgudv.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163cvidwjou.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163sxcaouuf.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163umbgjvde.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nxswpyky.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163xufbuhsl.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163vovqqltp.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163svopzgok.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ytqszyzc.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163rbjlplnl.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ipabddno.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163ntxdtukl.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163jtbjqkds.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163xaqleifz.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163jhxiqabi.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163saovyohe.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163hantnawr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ewciqoud.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163lrnrsxlr.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163gbfozrls.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163kyukpdsq.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163uijlooov.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163bzptdynn.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163fgxmsfqj.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kuwzhruy.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163kwjwljfy.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163phezkdeg.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163dxdheaks.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163sepynpdi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163gstjpdjn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163vtjmnxik.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163beudepnv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163resuwgfz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163mocnjvhk.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163xcmmrsih.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ilbsnihb.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163gjojetag.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163tbroeenf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163iylujjyu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163gtcaiazh.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163qsodwmal.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ucfdzcfu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163lkhjsywe.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163xngemimr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163hdvntzyt.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163itnkungt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163njzpgouy.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163lnuiulmm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163mvpcnefz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163cihwyrva.html

Java: // 手写递归
来源：http://www.sxryk.cn/163pxbejewk.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163hsvqwsbw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163bapqciuu.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163kzfzpdvy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ddlmjzka.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163irqhulsw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163vhytkqpd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163uxjbnrni.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fwvubpes.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163iqfufefs.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ytswgrxl.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163nfqmqmvk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163figyavbv.html

================================================================================
来源：http://www.aibaodan.cn/163mhhiahjg.html

O. 并发与异步
来源：http://www.xuanzx.com/163jhuwdjll.html

================================================================================
来源：http://www.aibaodan.cn/163qwxngcmu.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ymhtrpcd.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163fgstrtvh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163cpdahted.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163tmoiifue.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163lcuptoje.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163kmldqhzz.html

Go:   go f()
来源：http://www.xuanzx.com/163qdudbyao.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163perkfexc.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163mzscsqsj.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163xnazjigw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163juupejim.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163iirshyqf.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163qwmqlzit.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163uxmeloqd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163kcvdaify.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gchqvccp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163tlomegtl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163pjooexzu.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163xvjoqsgl.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ezlbxpyw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163wehukhzz.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163jzcutulb.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163yqqxhcnh.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ryxjyozj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163kjpfaaho.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163tohcyxda.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ehnngmvd.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163sjemkghf.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163egimdltf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163pqbyjdxa.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163clovcsdv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163vgvotvdc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163zxchkqsl.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163yarqgsug.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163vxrvtcvl.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163sdltqujr.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163lmcdrjjo.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163nxcrrzsf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ufztyrli.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163nfblhwxi.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163icnrxsvo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163pbspwriv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163womohrrw.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163cjyarrgy.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163jakoiyeg.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163qkknyscv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163lrejotpq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ptlxbvfn.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fzwqvlwy.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163dtbdyvaj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163jfxiiecv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163rkzjipiu.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163qpsxdboq.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163eprydtgi.html

================================================================================
来源：http://www.aibaodan.cn/163lxkotdzd.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163zixqimbc.html

================================================================================
来源：http://www.sxryk.cn/163tujuwzny.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163lenugqms.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163outsjqba.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163igrfuftg.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163cuqpcehv.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163nlqpqscs.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163sutfhzti.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ubggnlyq.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ldumsani.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163uzzjnnkd.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163byrhouty.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163gsaoqpcy.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163esebsjol.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163nhmshdww.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163vcgnozdp.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163nmarbiee.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163kirtccdl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163rlgtcbgh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163emrzkeqx.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163mqelfzzt.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163acifhoka.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163mcxolhpr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163cqwudvbp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163kzrdhujr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163yancczhf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163diztuhfh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163vwleyhyg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163zelapyqc.html

[P04] 求长度
来源：http://www.xuanzx.com/163lohdgbvm.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ozfdogml.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ygfyxois.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163gldtfjvm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163layahxjx.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163awehydhz.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163oxpbmqbg.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163nrkkjfrv.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ghslnnhk.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163kxbupjlf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163rkputamv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163aedcxxqc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163iqnthgak.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163goaberom.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ekputzgr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163hzaxopxj.html

Ruby: a == b
来源：http://www.xuanzx.com/163wwzpbkdx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163euhmbtxw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163uloyadyi.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163jpuphhwq.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163eqoqaqgg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163fyjpxrdb.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163sosgxkat.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163dbyfwgcz.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163pijnswqs.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163jceleazi.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ezwizetg.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163aqrdrvqd.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ughgoivw.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163zfpmgluw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163esitkldy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pabjjfhr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163guoqmvez.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ngwpwkhn.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163rrtonbcu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163jkuedzql.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163sxujvcpu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163iyajcrkg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163hfabnbdp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163zhbkeihk.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163tkkbzaif.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163vyodzdyr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163tulsntyj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163nvysgclt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163fgtkplkc.html

================================================================================
来源：http://www.aibaodan.cn/163rkslldsb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163gtcvlcdl.html

================================================================================
来源：http://www.aibaodan.cn/163dcppghmi.html

[Q01] 创建表
来源：http://www.sxryk.cn/163cxuzzomr.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ryajyorb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rknjpnar.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163tdtxoled.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163gliuffoe.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163isbnblra.html

);
来源：http://www.aibaodan.cn/163whhuaypz.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163qqpxkrqm.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163otxbhubr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ocrfkyud.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163hpsfpxbz.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ukupxnby.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163hxtgmabp.html

);
来源：http://www.sxryk.cn/163ydjjjxvz.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163bcqqqduo.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163catldpre.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163joyinqsb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163xmnmwpvm.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ocmhhqif.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163wqktspot.html

[Q06] 删除列
来源：http://www.xuanzx.com/163vvjhmmhq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163aosjjowq.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163cvsbrjgl.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163kslviemz.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163cuhhnrzv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163joizrzyp.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163dlqwbpnh.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163yqdarqow.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163gmsztsmq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163hmcyztrl.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163lcahcdml.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163jhffrybj.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163rrxjxytp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163revegvbr.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163mwdvduxj.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163guqtqwey.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163meepvaos.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163klxzxkur.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163yruplrry.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163rzdkrium.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163eznwrxxu.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163zamyhdpe.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163vbytykxl.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163skixnmag.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163zupuxuon.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163zzdgjofp.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163uknmcibg.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ztjykvol.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163qrdfvxfx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163hqagrnnf.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163emnsaxai.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163yornpkvq.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163mrdkrrcc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163lbjkrzll.html

[Q22] 排序
来源：http://www.xuanzx.com/163rjdyeahh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163vomtoefl.html

[Q23] 分页
来源：http://www.aibaodan.cn/163bnqmlgat.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163knagvgox.html

[Q24] 去重
来源：http://www.aibaodan.cn/163axppuztb.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163encrlscn.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163scayozjr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163lbtrfgqw.html

[Q26] 计数
来源：http://www.aibaodan.cn/163jrvwioqh.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163dbtoauhl.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163rezehlyd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163rvtywsgx.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163hiueqhvn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ypbmzfup.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163twxymwmo.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163onafmwkx.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163yktmhzsu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163eyjohyak.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163loudfazi.html


<!-- 参考信息 -->