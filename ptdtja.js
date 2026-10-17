外链999!wailian999！

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163lyafvucc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163zdeakhyt.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163wtsolejo.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163pvwnuezm.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ppruukie.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163mingsmku.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163jyhjxszj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163nhvqhreh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wwxpcitz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163cgbnrmjb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163duiqfmat.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163yxduqkpc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163thgubzcb.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163fmenmcau.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163hvmnuuoq.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163kvbgpvbp.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163tjwwgdws.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163iehznmtj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163weiczmhr.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163czqndlcb.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163brtxtymg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163pesuosrv.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163kcarfzhw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163hojiawjf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163nxbsgveg.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163dufesqxu.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163iopyhbwx.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163wjqffekj.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163trvldsub.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163nnkolexa.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163fwqdhynw.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163tofzfmwd.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163lawmxyvu.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163logasnyg.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163uczfnyet.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163shximfvc.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163sffakbmc.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ynspohje.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163deebiwnk.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163qqwuskut.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163wmfzcggm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163zlfukksb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163juwesrvq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163odhmaryf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163pyexlooq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163mnntypdh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163lbkhiioa.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163uvfskoss.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163sawgufgy.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163vdvwcbny.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163zzjlzwpf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ozltnilg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163hjcshskb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163irnazvqv.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163fqqsqbvg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163tvyrgius.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163dfpafexs.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163acgrcjvt.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163azmwerah.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163diypenyk.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163skxwkcdx.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xuqsnhhr.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ulmewnoj.html

Java: // 手写递归
来源：http://www.sxryk.cn/163tlzowcfm.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163exavwzss.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163iczszrfr.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163cwbstams.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ztanfipe.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163oaacubyz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163wtopqjot.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163zfgpmxmm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ilaavyzm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rpaadsyb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ptkaskfh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163htnaebwe.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163waclnlhc.html

================================================================================
来源：http://www.aibaodan.cn/163fabachag.html

O. 并发与异步
来源：http://www.aibaodan.cn/163gxxxghoj.html

================================================================================
来源：http://www.sxryk.cn/163awcekisk.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163vlbbqdzd.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163dxfuxmca.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163blvtpoyn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163aidpzelf.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163sgjogvmr.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ejavehqo.html

Go:   go f()
来源：http://www.aibaodan.cn/163rphqghdv.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163itemjdhu.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ircpjgst.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163pyalwmgx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163khtqbmxy.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163yttmorzd.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ebkwrguc.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163tvftyrtn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163utwcikqp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163ppctbhxn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163vkwqvbbg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ewujgcha.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163iypgrvyo.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ilhlrldx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163ersjtmfy.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163bcxoqlnr.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163htoavtyj.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163skkzejmh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163nmopjrms.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ogacxtxd.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ayvrealu.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163zjcphjsg.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163svvgnptt.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163bktjqjpv.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163rfgpbllk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163bthopxwk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ojazvonl.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163yheghemi.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163oaihmext.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163toqpudyy.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ecewfvgc.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163mkusfgyw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163drsiwbug.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hmeycdiy.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ljsivejt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163dxzqzwuz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163vpoynwif.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163gljfrmnu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163osusrajz.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163fdejsfrs.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163xfmnssge.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163oiaqwekc.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163zqeegrkc.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163mfrfqzjz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163bgncmalz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163aocwykpu.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163dcjooufa.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163lghgoome.html

================================================================================
来源：http://www.sxryk.cn/163xjxgsvmk.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163tsoyjkze.html

================================================================================
来源：http://www.aibaodan.cn/163bsdeueya.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163nhmbjjag.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163fzkvfstm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163nocnohgt.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163dnqidqtr.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163rjczvxmz.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163zdxskedb.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163mjsoyzpy.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163qcptdeno.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163lfdwplzs.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163lvftntmt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163ptekouiu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163xjpdbbkk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163xaebktjb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163eoohxrwi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163bnslbbcj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163lgfpxghq.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ssyuipvc.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163mogyumbs.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163vhyytvoa.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163wvqdhviu.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163mqasyagr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163psdietcb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163emixwkjx.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163eyzqycst.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163lnwfjasn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163maoizvhr.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163pmguzbqo.html

[P04] 求长度
来源：http://www.xuanzx.com/163hnfvzplx.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163ivbbmzny.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163pzxwkjcl.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163fsplberk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kjlqshwl.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163cfgbyqkk.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163drwkipvg.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163gpwfexjc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163onxvpago.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163gxgfwjoo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163owrktpnh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163nwhittga.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163bysgcraw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163jhzfmewl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163dlslpjir.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163bparamax.html

Ruby: a == b
来源：http://www.sxryk.cn/163aefmkefo.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163vzcalgft.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163cwnkzahb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163seqrgtpc.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163diuefonx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163mdhurxll.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163sywsynio.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ypzjtnig.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163lydantrv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ezvxxchx.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163govcxnkp.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163upljxnse.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163gtfhygkw.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163plsyphtc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ujvacptn.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163dljguaye.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ebdtdutc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163rdroubhz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163pbhqrzrc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163erbviqsi.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163mnjfnzyh.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ioomkhig.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163kwfrujkm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163wnwqdvqy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163ezyvmgzx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163kidwxyol.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163qgpskhem.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163cxcrceld.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163xceykrpr.html

================================================================================
来源：http://www.aibaodan.cn/163musqorch.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163ahrmyzno.html

================================================================================
来源：http://www.xuanzx.com/163bkwojllc.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163jsemlmvn.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163pkuwvegv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163finqdqfs.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163rhpbyisb.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163ubvgkznt.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163exscsgot.html

);
来源：http://www.aibaodan.cn/163vmtopzal.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163xckyjqkj.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163cqodtooi.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rhikmonp.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163utcfwfkv.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163shdlmbme.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163jqmskkir.html

);
来源：http://www.aibaodan.cn/163ovypxipi.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ejzhdsbj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163loysoxbb.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163tknsnshl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163jmdpgemu.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ivuqqxft.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163xvtxvaox.html

[Q06] 删除列
来源：http://www.sxryk.cn/163pmnqegew.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163xjltwyzm.html

[Q07] 删除表
来源：http://www.sxryk.cn/163jvxghokm.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163rpntlcti.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163qnpvhelc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ztivogud.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163bbhmffuu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163uctlpqcz.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163sgmlgxjm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163kabystog.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163nurpnapf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ucdshzyu.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163xtiksnyy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163xcyhbjnx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163zodljwai.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163hxfkveen.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163fwhasydz.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163bturygvy.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163wdkthnad.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163vhmivarr.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163bnopaskv.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163wsbtlfad.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163viyhxntk.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163issnjxlz.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163obwxqhzh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163xwtglxbl.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163iwylylkp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163mqdvfxmr.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163axtdgwcm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163vjywxoap.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163kiytoxju.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163xmpixias.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163xfbabpog.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163lpsmnqff.html

[Q22] 排序
来源：http://www.xuanzx.com/163csemkqkn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163cvmzuuwl.html

[Q23] 分页
来源：http://www.sxryk.cn/163vlqviixj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163umvrakto.html

[Q24] 去重
来源：http://www.sxryk.cn/163pflmikql.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163hhtikgva.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163vaqlaorq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163nhworkcx.html

[Q26] 计数
来源：http://www.sxryk.cn/163dumkzhsz.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163rtltbucd.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163lvjpycix.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ehqppgrc.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163zzyprkyc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163mfjrfduo.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163hihuusbo.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163wdeygsew.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163feceogre.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163kryjprdx.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163zvkyrenu.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ckozedft.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163gwyorwui.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163flmleksl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163jdgaycdm.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163slestfui.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163relcwsnd.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163ehwaykzj.html

SELECT * FROM (
来源：http://www.xuanzx.com/163shoypruq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163gtncigxr.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163cufkplfu.html

[Q35] 内连接
来源：http://www.sxryk.cn/163epcgwvrn.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163iwpngsim.html

[Q36] 左连接
来源：http://www.xuanzx.com/163puavtbgi.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xqaxukbq.html

[Q37] 右连接
来源：http://www.sxryk.cn/163zzxgxcyj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163bibzcilq.html


<!-- 参考信息 -->