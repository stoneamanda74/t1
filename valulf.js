外链999!wailian999！

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163mkuczqjm.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163reoyyupu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163lnjuelfo.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ilxtxzmn.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163wolswkew.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163xwldfpci.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163jslxjdbo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qgcmnhdy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163bpdvgmis.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163eqwvyigz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163zmlbuwxp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ywzffpal.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163gbcnjjcd.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163qqvhwifl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163rvbwcyoq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gpgzofsk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163naagtjby.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163wxvdgpxo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163rlonunkn.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ndemuhgj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163xxijepaf.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163gowxukwy.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163lioejlvl.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163razdbjia.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cloxvmhu.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jabaepmn.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ujoyhxyd.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163eqaertwg.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163vrqrvjeu.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zkjjzgxd.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163onngwbpj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163mwvqliur.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163vtjodjpo.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163mwsvxqan.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163tuzhscek.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163zljkbkgk.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ehyszgqp.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163lwxsqzdz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163jhusspjh.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163sbmlzftj.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163pgzdnmdr.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163jenggiao.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163iihjoaek.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ydieiwlm.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163xzynjsxl.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163oxqgfqyz.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ircoxift.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163vtxpjtrc.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163enibyrek.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163nxyqhkjg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163hndwxzyv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ejphkrfj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163vmrpsluu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ovfelmds.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163khmpwpcb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163hmixywyz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163tufgxdcf.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163xmfffwle.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163wxhociim.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163nkcxkioa.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163tbgblgrl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163fpsfonnn.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163xkewdjtt.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163hsblgrki.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ggzwgiic.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163agnfrxgh.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163wbeclalt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163mzswzbdf.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163rjzxqeqi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jfuxaeak.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ezsrqdps.html

Java: // 手写递归
来源：http://www.xuanzx.com/163fmxvcdai.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163vijklqdy.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163fhgkxosn.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163bbkwyddg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163kmaitmbs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163dfcwxhja.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163zblhihpo.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fdammupd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163vehrrkot.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rgyaxyvh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163dfqrmrkv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ybkszhqt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163nutawyvl.html

================================================================================
来源：http://www.xuanzx.com/163bwsvlrcz.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ybsuemjb.html

================================================================================
来源：http://www.sxryk.cn/163zhvihlbt.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163lviscynt.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163tooetllx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163oadzilmq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163uqjxbpfn.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ximbntyt.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163knlwxzsx.html

Go:   go f()
来源：http://www.xuanzx.com/163qxxdylhw.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163xchxyrqo.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163vysawwxw.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163gjtjslly.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163dqazfapj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163dykrlmrg.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163srefsqit.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163rlojgbbs.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ubpworea.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163qgtrxjgi.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163lcsasyth.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163qffbmmqs.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163vbdundnl.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ebtgidwd.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163upcebvbn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163vlujcasm.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163tzawhchw.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163wdwokyyd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163hywvflbq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163zhoehpnc.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163vigcdwlk.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163fgahfyhr.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ilbfplqd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163lymkocoh.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163fiekozwg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163dsujtqlg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163konofxgk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163zjgvfmoa.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163eptgncvw.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163evpngeny.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163xnbamgtx.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163rjtgshvj.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163itzwjyul.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163vurhgmjw.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163cfdofzws.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163lxxxrruq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163euhrntvz.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163yxvwrcun.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163pndetidr.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163snmbwprc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163xagyntgr.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163rlsckjsl.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ewshqevu.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jgwtewmy.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163sninygho.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163qydzrrlz.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163nhjgsejn.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163rqktvcsa.html

================================================================================
来源：http://www.sxryk.cn/163cggddvei.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163muummmyh.html

================================================================================
来源：http://www.xuanzx.com/163egdckgsu.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163wckcczrz.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163xhynfiek.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ywtwuiwo.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wfhyexrc.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wmdlmwak.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163dxnnumnn.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163clyyfcci.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163anftuvhq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163xavvofcj.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163rvkbkabf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163kurnbxxy.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163wgckotuy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163arhrdrwx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163pompgtcw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163anfmvaov.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163coydvzmk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163fooleclf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ypoigxtc.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163nzxwinii.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163almpyhhx.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163bjwlibqu.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163jgectgcl.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163bxvslwjd.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163xbhdudgp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163spjquknm.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163jywhhnsn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163goklavqq.html

[P04] 求长度
来源：http://www.aibaodan.cn/163znsohcdf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163fjwgpule.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zofiksvd.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163nlqbscge.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163awywrzni.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163dzqdisyy.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163nlikpodf.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163iqjnednj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163hjngqbvw.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163bboekkph.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163wuhkksxx.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163mfcovjfd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163mdqzbana.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163xjyystds.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163zizrnbfu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163vcpbwdzv.html

Ruby: a == b
来源：http://www.sxryk.cn/163nzevotdw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163lmspxmho.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163xcbkeqyz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163dotdoqvt.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163avkgjqua.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163vpgglrkd.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163bdmajrmg.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163bdhrsvmy.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ioqampya.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ygxbtrdg.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163gchgvgdy.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163jfnwybpm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163spfyarwt.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163twonxnqs.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ioickyyy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ftpwfbql.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163wfnoevcc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ejxzkgrp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163cqniypim.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163oxtwsdwf.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163kngbuqys.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163skohamtg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163vjwkggsb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ieszekkp.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163pvevdxjt.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163dmbxhfur.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163frbcqfuy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ufgpumej.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163rodlgnyn.html

================================================================================
来源：http://www.sxryk.cn/163prbuydwg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ourshgzw.html

================================================================================
来源：http://www.aibaodan.cn/163izftyaus.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ljdpfzcp.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163rbeogltf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163lpxsblwa.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163huzhbept.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163rytigxmv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163jmeyxdpl.html

);
来源：http://www.sxryk.cn/163ffcnmaaf.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163jeacecvy.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163fyikjjkl.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163romzbpuy.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163dtadcetn.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163lyxuqrkx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163owfydazs.html

);
来源：http://www.xuanzx.com/163fnnzikgw.html

[Q03] 增加列
来源：http://www.xuanzx.com/163luqqwpmc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163xaywvhnq.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163qxhmbxqx.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163kmvkbzxa.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163qkfxlhit.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163emypsfoa.html

[Q06] 删除列
来源：http://www.sxryk.cn/163djterjxp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163mhofojzk.html

[Q07] 删除表
来源：http://www.xuanzx.com/163vekpymaz.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163qrmicnko.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ghvlcbrf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163qkplrspy.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163fygkbelp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ejwinpkw.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163cmfjobts.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163wrmpdltg.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ovvapeka.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163rpssfjyw.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163fumoiwxw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163hhdtttol.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163kxhzgakb.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163exjgspsi.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163qgrkzezz.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163mbbzftqo.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163rgfhtopi.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163cwlwhtnm.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163vdphyoam.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163nlqrxbxh.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163hulcrnyr.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163cqxedbxc.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163tlempnra.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163qgpeglmr.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163rlawhspv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163mvwbahpm.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163afwxtmit.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ltnxiffv.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163miqkraaj.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163rdfnlgjy.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163xkhfbulg.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163icqcfzaq.html

[Q22] 排序
来源：http://www.aibaodan.cn/163evctssvv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163zunwoowl.html

[Q23] 分页
来源：http://www.aibaodan.cn/163eebgwytu.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163dkervsla.html

[Q24] 去重
来源：http://www.sxryk.cn/163xwfckjib.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163zfemjogy.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ezncdkpf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163hfqbtpfv.html

[Q26] 计数
来源：http://www.xuanzx.com/163opgemufv.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163xrrgdvmq.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163nnmjwnlb.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163pnepaxry.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163youwopfo.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163qgfbsoiz.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163nrllksqh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ujggjdoo.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163lbfgdohz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rozgqaqz.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163anmcdxkf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163bmtnqbhv.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163ekpqzigb.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lilfraty.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163viligjnt.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163vofocbow.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ycdngjcm.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163xflgalyo.html

SELECT * FROM (
来源：http://www.sxryk.cn/163mxjwtvsk.html


<!-- 参考信息 -->