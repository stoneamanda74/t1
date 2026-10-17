外链999!wailian999！

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fgthkimu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qmwdftqu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163luzlamly.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ogvnvhqv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163govnpwpn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163mzlfgafc.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163clqfsqef.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163djusynbj.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163tdyvueib.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163fbgdhdox.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ohzvindl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163rexbhsvy.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163lsgyuicd.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163rjqnciet.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163mcxtwrcx.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ivdsohzl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ulvufswp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163uoswaafu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163noyvmtws.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163atzatumm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163fjwtgzen.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163bmnwsemc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163kmjarjza.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163cdtqplze.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163wftcglfg.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163cmyjblix.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163uwlnskwz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163oyzdyvlo.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163rtgunbvw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163izrsvtnn.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163lmohelrq.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163svvcfxqe.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163dtjjfpxb.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163natafwhe.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163vfcanmvh.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163uvtjldxi.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163kzohcyri.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163qoudulqf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163bepvqiee.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163fztrbtvx.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163sstqojii.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163qckvcfik.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163fyilizbi.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163nfgfpama.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163lbpfzhtc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163zbcgxmfz.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ybrriuhs.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163tqfsvadb.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163noxoaxtm.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163hzkqnmqz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163witzuyug.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163sflybcoo.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163avjhtczw.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163rpohmznc.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163phwoxsxh.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163vepvyksj.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163gbzizgay.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163uqevcfaa.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163qssywtbs.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ddogzlii.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163vxdgwnsq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163ojrkbwjg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163akvrndtv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ggbtyoha.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163olrlsstt.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163mkeauzrk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163womsosyv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163rumwbflv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163kktscvcw.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163jonzmfhk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163kplldhof.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163dvhcogst.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163xgbkzayv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163atqvumcc.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163mnsfpuzv.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163jtgdqrmt.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ebusrlrk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163fcnzrlul.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163krdcprof.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163ahshwctv.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ztkllggh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163pvtpgfzi.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163kgtnnuyj.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ueewmxmp.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163atjrevxb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163zuuomzsf.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163dukcplfb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163hifvecix.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163sktxzozm.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163qwvrhzbq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163cxjwhjha.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163usmifzsi.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163gyvfzkxf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163jnwepiov.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163mriplkce.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163chxwbesy.html

================================================================================
来源：http://www.aibaodan.cn/163aaroswze.html

O. 并发与异步
来源：http://www.aibaodan.cn/163apbnsncd.html

================================================================================
来源：http://www.sxryk.cn/163utwoynlr.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163jnuombpl.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163vwgpczlc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163trhtrpjp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ltuasyxj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163bhknezwr.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163fkfsihac.html

Go:   go f()
来源：http://www.xuanzx.com/163pgmbdpam.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163hjhgstlr.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163oimiolip.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163shtcgnxc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163knuojdjn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163kynltwmr.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ukiqtont.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tbcdkwmr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163xdiwnouc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ofuqbarl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163etazyptn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163vauivdqp.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163bmngutmy.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163rlntrnvj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163uvkcdmia.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163pzrexhdo.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163gzpbwjhw.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163umopxnlt.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163yqanpogc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163dqqdlqpn.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163igufaqyh.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163mvgtaemb.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163nhcqycrd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163wpsmcerj.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ceswwbaq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163gqnlrany.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163pxfuufpx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163wdimxbtt.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163iareuunb.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163tebegxff.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163azucefgp.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163qvtpltul.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163dnosevku.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163idududtg.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163pcfhctcz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163lxhdmpuq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163wgucimkc.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163imzwkrnc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163pskuccoo.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163aoeqtonm.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163fmqcpckr.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ldvcoxoq.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ninmagol.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vvtpigck.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163cpdrgvqp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163ahfusffa.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ndiagtek.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163xpbdgler.html

================================================================================
来源：http://www.sxryk.cn/163cdytqmzs.html

P. 常用工具函数
来源：http://www.sxryk.cn/163zanvbwhs.html

================================================================================
来源：http://www.aibaodan.cn/163arbpekbq.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163vpfacwet.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163darvrhdm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163rgjdbwtk.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163abnsdnav.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163rszqhped.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ntaobeuy.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163hxnoybxo.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163hfkyqnku.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163cutewtws.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163ynczewdb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163vagjkwjt.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163wbaqwvvr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163vifeghpi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163vadqrtey.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ywxcwzpq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163zmdjmenq.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163szcrbnxi.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163xycdljrr.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163fwcrnunb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163fsgxcjqn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ofojerce.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xginkhbb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163hgtvgufr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163fnhnumcf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163tlmuhijs.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ltecnjfw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163zwmogsby.html

[P04] 求长度
来源：http://www.xuanzx.com/163etxboskw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ujabijdo.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163wmbwcgsp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163yfkfffnp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kxzumkui.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163tazgwjsr.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163qmrzogtb.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163gtzsgamf.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163vcltkadf.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163hstdxegp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163fxibqglq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163oxgvbusn.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163vkqcfthc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163bpkrfrku.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ksdivdqp.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163baydxhie.html

Ruby: a == b
来源：http://www.aibaodan.cn/163ahkyvyou.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ucigbsxp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163loqyiyar.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ndzgueop.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163cndcfoxw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ggybtqwd.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163wzjcvrna.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163tgceufqm.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163dsxaktwh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163phivxhhu.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163nrqvghma.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163bxxdtzbx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163mejtlpev.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163vdvtqerd.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ioxgkssk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cgeefvzu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163lweiomlb.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163sytebhfs.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163qjhvqcfq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163mbtxduix.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163uqmetqya.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163dtwxjhtu.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163mmdimqmo.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ktdvfgdq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163udqbncpt.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163gxjtkgfy.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ribbpzpf.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163sebqevcn.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163qpikjgqs.html

================================================================================
来源：http://www.aibaodan.cn/163itemshed.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163wwdewdac.html

================================================================================
来源：http://www.sxryk.cn/163kfltszib.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163yfsjupcm.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163nalrotjr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ummgwgwk.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163frcmspgm.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163ngpmzamf.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163mntvarsr.html

);
来源：http://www.aibaodan.cn/163llsckabq.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163hupzoapl.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163psymgfzm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163jpfvqdvi.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163naimksde.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163tuvfbowg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163jnakbbvw.html

);
来源：http://www.xuanzx.com/163vqaowrpj.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163wqobdava.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ajukcddf.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163kbsyzfzr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163pvffuont.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163qbssevsw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163klpsfmmp.html

[Q06] 删除列
来源：http://www.sxryk.cn/163enhzmzon.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163svipzmas.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163pwycwqvj.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163uqejghtv.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163vleogarx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163kjrbeqyo.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163peifghpj.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163udptqdvb.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163bagtdosk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ebqwyest.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163zlbchjum.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163dwrwqkij.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163rnjyofcr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163tobzjgpl.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163obchdlrp.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163llaxtbbj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163dkopjpyb.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163nxmoztbm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163awsihyto.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163dffrdupx.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ueoszqxl.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163hcbxlqzh.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163wvridjpe.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163qbqsfdha.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163tjtiogvy.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163pzewerzy.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163welsmkxx.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163rrshziiy.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163eiaaicaz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163dipjfwwt.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163jgvabnys.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163twmeruzp.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163dvrhtijt.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163fafazzrd.html

[Q22] 排序
来源：http://www.aibaodan.cn/163qpyvvryo.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163eyquyusw.html

[Q23] 分页
来源：http://www.aibaodan.cn/163xcpncenq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163oxqnrvpa.html

[Q24] 去重
来源：http://www.xuanzx.com/163robfsrdz.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163nbsjolvo.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163emabagkp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163iaozhpgd.html

[Q26] 计数
来源：http://www.sxryk.cn/163dardggtu.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163blykxoyh.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163yuwrjshx.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163pnixbock.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163tuwchget.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163guydjuby.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163hboqaick.html


<!-- 参考信息 -->