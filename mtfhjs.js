外链999!wailian999！

Ruby: arr.sort
来源：http://www.xuanzx.com/163qtmembeg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163pbwmmorf.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163jvjqqfna.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163luwhzqwe.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163rwlkvvly.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163bywgfqbv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gxbehomk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163zbsxlrpk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ofmfywkx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163jyslujsc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163elytxbex.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ktxzzcsv.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163mtmbcuex.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163wofxckao.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163sebxzfbw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163accfcgvy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163dvotwsas.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163pjvcfomq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163glspftmk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163znodioxw.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163revadskf.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163sshxipue.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163lstzjfhx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163cmzfears.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wllcbzuk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163zdonojoj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ohpyzxrq.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163zrtqzncp.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163xjirkxrj.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163puaokruk.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163yydrflfj.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163tbuotrcu.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163dgqdmfmh.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163offahkan.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163biouwxdr.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163knroglsq.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163tjpzfijc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163lnvbtfyb.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163dkfsplee.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163dbgsjlsm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163qpvtoobi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163xmppgqij.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163eafvgsyc.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ekuxmtjs.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163kkawawmd.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163wcnthhmj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ofosworn.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163wdzmmetp.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ndgbmbza.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163tircuciz.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163pdathqbg.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163kilricpm.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163pfxqerhl.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163vniujyjq.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163pmcxckoa.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163cwmrzqgc.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163nsygjryo.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163lmlmftel.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163ltvnyfdd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163qorvnxoc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163tazxsosx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163jkggbwjq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163fxtexkdu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163sdlaycan.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163dkhfdiii.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163bhymkznl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163mqrhymol.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163nbzlbgpx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163cjthjjou.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163qdqzlzjt.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163jxxaprot.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163vcqeaxrq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163jdrkwask.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163itnrihsn.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163memxefhq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163fhqalwyw.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ttnkfuhb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ohaabwuo.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163opexlbbn.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163vhltoyrt.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163dogoyrtz.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163tdyvbewd.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163cqfogxom.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163tigrhnnq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163sdalosrv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ngpatclo.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163nwnoqwvy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163yszsyhei.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163drusmnuj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163uqhwlpxp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163rvzcrylq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163suxtdkjb.html

================================================================================
来源：http://www.xuanzx.com/163fzdkxxca.html

O. 并发与异步
来源：http://www.sxryk.cn/163mqwalqfj.html

================================================================================
来源：http://www.xuanzx.com/163plppgizs.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163zklgsiyy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163vuuopjch.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163xcimxkol.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163atqojrho.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ehxrsbax.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163kkjewtkn.html

Go:   go f()
来源：http://www.aibaodan.cn/163zfsmivzy.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163toxgkxht.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163wmqrldeg.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163gqpmwsfi.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163iacdwice.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163skgtvmto.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163lxkvjgyn.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gvmjqfrg.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163iqwbbvcy.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163cdofpbqe.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163dwkzfamm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163txnolyec.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163yiiyihwe.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163wrqopmuq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163qbauhymt.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163njpxkhfd.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163mousstmg.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163bguetfet.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163utqrnrui.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163czxxbalu.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163lvdtenho.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163zeybongq.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163wufhbsgt.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163fvpibobs.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163jnsolbub.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163yqkypzzd.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163gnrqinuf.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163cjipsbiz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163pvfoqvcq.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163cuygfytb.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163lyqrkctf.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163wajdllwp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163aadsvwsc.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fyjyxzro.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163uiaztahl.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163nfokflqn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163mjymqqwz.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163pwhkxptv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163udwvodzg.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ycjskyiu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163efizqsyd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163laefhdsd.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163reeowmex.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163iqrwngfy.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163iivatrea.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163fhjhqmdk.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ahernbws.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163sjipiisr.html

================================================================================
来源：http://www.aibaodan.cn/163gmsdrhyz.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163cnrjxhor.html

================================================================================
来源：http://www.sxryk.cn/163chukyzzp.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163mnnykbpt.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163tmkscfnj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163tutnbyyk.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163okwxfkva.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163hyzhdtrq.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163yeuljnmy.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163wdjjgrhf.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163wwymgacz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163jghmvill.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163frwnvzqo.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163mfqxxpxc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163gpcmgppq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163eaoukdxy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163phoaxfak.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163ovzruocm.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163pdcqeoaw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163wxmppndj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163twijiwvr.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163gkgqugzg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163gxttfgja.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163atjjpbsp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163gljlgilt.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gupevygk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163mgxmekip.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163dwxccjqb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163qlolsjst.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163sikbzdgv.html

[P04] 求长度
来源：http://www.aibaodan.cn/163dhtagkih.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ukepzaog.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mrkpdybi.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ofgctpwn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163doldzlrp.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ibujbusy.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163vzgzixhj.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163fpdtorcf.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163pdoolgaq.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163lypufnhu.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163emtslboa.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163rnytqbbo.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163mgnrftfm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163qoidfhhz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163cyajzgwd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163vgwplspu.html

Ruby: a == b
来源：http://www.aibaodan.cn/163lxhwtjbf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163xmsyqodd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163kbuuwkil.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163koouvjwq.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163wwgadjsz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163kecwwkao.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163afgbejpm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ymsupiab.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163huvsdpam.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163yhstwodz.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163bftxjebd.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163bynpdpsv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163hhrewced.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163bcbcmbup.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ymglmwgq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163otnztocn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163nfgizzdn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163gmwjbvtd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ylyeviao.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163mffokvmw.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163hzgimwvc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163yvakyhkj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163dttetlok.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163xmtdpwph.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163pefkbbfs.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163asvmrgsr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ufbqwifd.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163vkzxwusb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163kbxjyjlo.html

================================================================================
来源：http://www.sxryk.cn/163dswruyyc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163lolzdhal.html

================================================================================
来源：http://www.aibaodan.cn/163mqjqdcqx.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163pohbcwiz.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163jzhmxlpc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163kembmpft.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163jdmnbvkc.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ietgydgx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163vvdamsdt.html

);
来源：http://www.xuanzx.com/163inzbvjho.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163qfolmmjy.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163hrseebpk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163yqqpudnh.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163utujzuoq.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163wfjznfhx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163uuyxyzbt.html

);
来源：http://www.xuanzx.com/163wqbevuom.html

[Q03] 增加列
来源：http://www.xuanzx.com/163vwygsanq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163cyvuvxzr.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163xdqujxfk.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163sihufyzk.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163wruwcesz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163hrkculkg.html

[Q06] 删除列
来源：http://www.sxryk.cn/163xcpauetk.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ovyfxlcv.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163irdavuny.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163xvxgopdj.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163pjiwivsa.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ioofrdjh.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163uwhqhsjp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163dyrusxvp.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163wdgifsty.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163bzzigbxi.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163spzgmcjj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163hljowczd.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163vzsclogg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163kvbmhxvw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ttrggnzd.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163jiiohrtl.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163vqpnampc.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163jydupoho.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163syltgdgr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163tbtwdsqg.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163oeefxeot.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163tzxhrmuo.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163bmeyuske.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163wmepixki.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163vlyxoaze.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163ehwtudnz.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163gisutotm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163xdfocvth.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163aficamzu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163qasjizrq.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163qklwarov.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163txtryxzt.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163iezcyfxv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163nfcibdfg.html

[Q22] 排序
来源：http://www.sxryk.cn/163kkbpjwyi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163hvgdmvim.html

[Q23] 分页
来源：http://www.sxryk.cn/163ccmcqohn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163eciqtwsz.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ldixgjqt.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163xpxicotd.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163zmlwhznq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163bqeewibq.html

[Q26] 计数
来源：http://www.xuanzx.com/163yhfaajsw.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163aznrelnb.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163kbucpsqe.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163brueepuz.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163tsfiqijn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163rupltsbq.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ziabmaqf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163hatmlvxh.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163niaqjasu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kbdthczq.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163kmpjibxa.html


<!-- 参考信息 -->