外链999!wailian999！

Ruby: arr.sort
来源：http://www.sxryk.cn/163uplqidqk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163nhwkdnba.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163edprezhz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163kpuqglhx.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163hgggjttw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mtdlccra.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gjvoixel.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163euiqygud.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ebbpavnv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163dgllmgnh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163lnopbjgl.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163tsikdsvp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163rkyqexgh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163bcpnkbsl.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163snbujnol.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163yugkxval.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163uubczrzx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163cnmwouky.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163wcwzrqqv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163aqndvitp.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163wsagghhe.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163iscdkklp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163jktzghqg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wirlybat.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lxppbjyt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163iuomioys.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163yupnszlz.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163pyclyipu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163rxugqils.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163evarwsnk.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163evjlavcx.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163otnbntva.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tdvudcqc.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163bdgoiazr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163cxrzybnh.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163pszhjllj.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163yxhfivwe.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163gunoizgp.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163zbfnsmuj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ojexlodk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163mtyusmbz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163jcobomms.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163zsdptihh.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163qjftmnqp.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163bxmtwotk.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163wkkhhygd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163xeodukxp.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163swtykzgp.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163srhaqpsv.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163uyalqjjz.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163cueidpvd.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163djqhwjzu.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163lsfhdruj.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163viqlerir.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ppriumzk.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163faxxvkyn.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163fkcsivgw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163fpnxijpq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163cdavuyre.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163nelulwcw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163zwqqdoso.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163gxmwmcxy.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163onuqxlhe.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163bukouxwk.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163jclzkxfd.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163vuidasko.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163jaavyqff.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163fmyuvvpx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163upchvein.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163wkhbikzy.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163fvrvzwvs.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163hfevqqzg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163yufvckpd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163qythptco.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163edfzrlzk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163jzfirdxg.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163kmfnwovz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163qirzdatc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163vpfpyyur.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163rebukayk.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163jffbxfky.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163jksurjiy.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163hhetrnys.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163mykisbmo.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163kmvqufaw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163xousqdya.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zfozfbom.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ctcckuab.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163lnlhoirk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163unbubptc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163aqwkcfts.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163tywnmeci.html

================================================================================
来源：http://www.aibaodan.cn/163ubjqtxka.html

O. 并发与异步
来源：http://www.xuanzx.com/163hdazmyei.html

================================================================================
来源：http://www.xuanzx.com/163gjxlylvl.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163lvnijvyf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163friodvbb.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163iqglfykm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ehgekxot.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163rspxzsqs.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163styiafnt.html

Go:   go f()
来源：http://www.aibaodan.cn/163myijpbrv.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163gdmktuoi.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163bcxxyyku.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163rucuyfhm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163vqpgiwsv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163jjzvgavc.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163esqlhupy.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163wplqltpq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163svorebqp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163yngxwdep.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163ozzyglfp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163nrfebiqp.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163fnxcghti.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163lioqotzl.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163uqjzjlzw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163dlrdxehb.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fzbtongq.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163wwunetsa.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163xibkooxk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163xhkmyodh.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163bbxbkiug.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163tqllkfsn.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163atipfecv.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163vrllsrfy.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163eiuxpuhn.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163wkigvkiq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163zxfmzzdb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163xfaclayk.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163eztkfqap.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163jweupcrd.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163urxuqdeu.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ewmmjzeq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163vsmhtejx.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163kronmblg.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163hdqqzmax.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163gmvoknpm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163sdsqhijn.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163kjtxyoll.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163lqpvnhak.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163rnmpxpkl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163mzhovgrs.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163zpawqunc.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163klficuxt.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163tywfefcq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163jmxosjdx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ccdsknty.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163uqbesruw.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163jbsdhtaf.html

================================================================================
来源：http://www.sxryk.cn/163rkpsewlu.html

P. 常用工具函数
来源：http://www.sxryk.cn/163xkznolqb.html

================================================================================
来源：http://www.aibaodan.cn/163fylealoh.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163yhsoennk.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163abkqxzbx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163pzpczsej.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163umyvofux.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163cblioahk.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163mftragaq.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163omlmsene.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163thxrbmzy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163izbrakga.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163mgqspgov.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163xkbuhdki.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163hxcxjhon.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163cptzzxfv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163irjunjlf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163jlvjedrd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163iierdmvt.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163ymoayyje.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163jtemzuow.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163gsrmuwhx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ofumfrss.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163igivjlul.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163pmmanmgt.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gcikzrev.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163iktfhjzx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ofioeuut.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163rsxauxpu.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163fnuhdgfc.html

[P04] 求长度
来源：http://www.aibaodan.cn/163rrxfkjwl.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ductyjpl.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163vtvgjdne.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163kmyctzvl.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163oxwrmvjv.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163aawxzzbd.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163mzfkkhhq.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163wnvzqrnh.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163ycghokgs.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163uefhoowx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163uidsnnzi.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163mnjicwfm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ggbzwpfh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163daqhzkhz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ezquablq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163gsloconr.html

Ruby: a == b
来源：http://www.sxryk.cn/163alrxxorv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163tiyvarnh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163uuexxuoq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163dcrvfmje.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163builkyro.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163hfmhiuxo.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163hmdpjfoc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163tyruqsda.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163taiwyugu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163yetsxpuj.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163emvntnny.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163hlwgwile.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163rdwxwqdu.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163tkxvwdhi.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ilzvcuyc.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gggmwrsl.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163dzlflamv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163gjxsaors.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163neffjdtx.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163cdtvghkr.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163cblifzbi.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163xkzvmdzv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163bwlbupzm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163xyemadpk.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163bxcrdwuj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163shnjcnza.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163psjemvxs.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163dogumwzo.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163zjrbmkbm.html

================================================================================
来源：http://www.xuanzx.com/163yxatrclv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163tdgnwrel.html

================================================================================
来源：http://www.aibaodan.cn/163lnlzzhzz.html

[Q01] 创建表
来源：http://www.xuanzx.com/163mwspjjty.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163xlrsaili.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163xypocgff.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163hwfzawnn.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163dknvcpmn.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163qldcexgs.html

);
来源：http://www.sxryk.cn/163jkxyrswy.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163dhwkeica.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163ebffxywq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163inopronc.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163srzquduv.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163wiazjihl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163itokdwgg.html

);
来源：http://www.aibaodan.cn/163vhagffup.html

[Q03] 增加列
来源：http://www.xuanzx.com/163jpooripd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ljgunamp.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163dymwgddn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163twalrqyj.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163rntbrovc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163mxihelkg.html

[Q06] 删除列
来源：http://www.sxryk.cn/163loastqfv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163lmizyibh.html

[Q07] 删除表
来源：http://www.sxryk.cn/163tdmavfhi.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163vqnwwtfz.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163mycjxdpa.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163pranlkxm.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163dijfelpc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163mwhnsxbb.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163uailfbhz.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163buenapja.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163yflyhdvd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163koosxfdb.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163efsmirze.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163qhfybumt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163lwoungui.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ngydvwhn.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163lvqdtqni.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163xnhqsdav.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163gsyexmfs.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163diigsfrn.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163tmkyrina.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163spfwxfcg.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163xzncrtmi.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ebwjinzl.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163awanswqw.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163akojrbxe.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163tudrodsw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163kwckckgl.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163medjalay.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163qcbshtqt.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163wsdbvzwv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163rbbxxnmk.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163mishxjop.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163lepnrsct.html

[Q22] 排序
来源：http://www.sxryk.cn/163gibgslmu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163hqfblwzd.html

[Q23] 分页
来源：http://www.sxryk.cn/163vjalifie.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163fpsomqiz.html

[Q24] 去重
来源：http://www.xuanzx.com/163occjoojd.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163cnkcsklu.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163tnivzeza.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163pehrvwyj.html

[Q26] 计数
来源：http://www.aibaodan.cn/163iznlwllz.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163przxdeys.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163jyeahafu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163bwpimxwj.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163ozrwzgyn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163qevodfdw.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163raeqheek.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163cqmwpmdj.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163wlpiypgh.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ymknbati.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163sjdssljw.html


<!-- 参考信息 -->