外链999!wailian999！

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163mowlqayh.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163urrycnan.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qxwdxgoc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163jxezbiho.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163rodscbxd.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163kzzmybcl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163qtlcfnay.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jqizelcg.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wkgpzurq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163pmzxgzfm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163whprgjjz.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163akqkeeyg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163owyvgtnw.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163kraivjxx.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163apbltoep.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163glpwamlo.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hpvpvrbq.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nwqssdsd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163zfxtbujj.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ikdfgapp.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163gtoysnhr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qtozdzfh.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163kdqjbbdx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163qrsjdjgq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163zbvvqyeb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163oqnopeja.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163fsuherrs.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163hqcxgkta.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163emfsolvi.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163fjalhyiq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163zcmujmcc.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163dqslnqqg.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ugfyxpti.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ujioftqd.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lkswzgtp.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163zajsoegq.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163mkryyafi.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dvsuzxyd.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163zczftnjx.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jlbyqqvp.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163etdljuib.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163pdgjwkaw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163xlikseng.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163dqovelbb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163hhpqjsja.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163phzegzlt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163koxfhnku.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163zqberemg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163cnylxqku.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163miysepdq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163xxnfiqkv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163xnnkjqct.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ezjxfjal.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163tjipalit.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163uipbxpgd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163rzblznso.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ogrnznyb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163zvomkcms.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163xteaqbsc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163kyjxxofk.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163vdutacix.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zkiivrpf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163cblevlsb.html

Java: // 手写递归
来源：http://www.xuanzx.com/163lttiiala.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163kbuoopgb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163pudrfycn.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163xlgqmtxj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163edcmsjvy.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163knqxjmdp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163maurzasd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163xarualtp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ulynglnn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163uximmjzi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163hbjlaaaq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163hbjpcxwx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163temxczfj.html

================================================================================
来源：http://www.aibaodan.cn/163nuhmgadx.html

O. 并发与异步
来源：http://www.sxryk.cn/163furomule.html

================================================================================
来源：http://www.sxryk.cn/163plptyvto.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163fzpilfqv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163clfnzbil.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163zqpbbsrq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163rhfuford.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163sfhvdikr.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163rawrrczt.html

Go:   go f()
来源：http://www.aibaodan.cn/163cubohryp.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163vuqssfuh.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163nywmjtgw.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163zcbnxkih.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163zlmfuldk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163uvyhskdk.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163bffkrazy.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bnwojrbj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163lugygekl.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163dgroktyh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163aohxtuog.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163gvnlbwqb.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ziefrruh.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163yuhoeylf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163pvuzkeri.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163cjbdvsew.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163elakzbmv.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163agbgycab.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163tocjbnqw.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163aytoosxs.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163qktcvevx.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163wuxxecie.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163acxluvcp.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163nakbogih.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163hzzedlke.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163pgxxlkhj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163glmxwfbm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163fpqieqtu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163flbajkca.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163orhssylb.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163sagpoxvn.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163qfyrfios.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ggrrerjw.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163tguhlffn.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xvdmucwk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163hanragzr.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163lozhozxz.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163dfiuntkz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ybzygwog.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163zunbjbxh.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163dbdninub.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163pazjwbou.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fjtehiue.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ejxspmmd.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163wxekdpkj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163snouahvm.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163phrauvur.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163eyyoplgi.html

================================================================================
来源：http://www.aibaodan.cn/163jyatafsw.html

P. 常用工具函数
来源：http://www.xuanzx.com/163kinwrecd.html

================================================================================
来源：http://www.sxryk.cn/163qjbingel.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163chqrewef.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163iblwsubv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163hdfxpfzg.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163hcgtvsox.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163dazqllac.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ymbkupcp.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163okfttnfv.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163sozspvhy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163szvemeqx.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163zqpjcodq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163mrktnsnh.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163okyyvuct.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163uqlndqix.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163eeczjuxb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163rejceohf.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163vlbocois.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163zyxnthnf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ftzqiuke.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163zfyelbqo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163derqynjg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163juofwvhw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qumzxuzu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163zgzymcjc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163xqvarwef.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163pcgntohr.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163tdbysawo.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163dtdsjvip.html

[P04] 求长度
来源：http://www.xuanzx.com/163gpmfqxwq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163lzuaurlv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163alwmvlmj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163izcdrwao.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163slxyefbx.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163zultnpcr.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ofugkjge.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163wzrpfomq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163sipejzvp.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163vxyntxgq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163qxsuxqvn.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163cnlrmqjb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163prvrsnea.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163lncwdhku.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163pwhyoyts.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163lvtbpamb.html

Ruby: a == b
来源：http://www.sxryk.cn/163mpogfrbo.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163fcutamlc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163pttyjrfp.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163mxzczgtu.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163gyzlowpj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163wzvrwbit.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163gojsseuv.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163iqccvsdj.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163zmqbcqff.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ktaofxhk.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163yuamestp.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163noesmrxl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163wsjiccgq.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ncxaggph.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163omtljgvl.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163efmwrtjq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163tvtkpuyz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163hvqfmsch.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163lcmcazhb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ejozqloc.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163cmvlwfxy.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163kjryscbd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163igkokxlt.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ihbcanxy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163hzsjakve.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163yrvydych.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163dovetlco.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163pywhikkz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163gofxijyg.html

================================================================================
来源：http://www.xuanzx.com/163nzaprpgp.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163nccoupab.html

================================================================================
来源：http://www.aibaodan.cn/163apmaywps.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ufzeuzdb.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163wjfxldcw.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163hnncbgdq.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163urmwbods.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163rsdjbhmg.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163alqhdvzv.html

);
来源：http://www.sxryk.cn/163zvdqrhyv.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163bdodshem.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163ripjevqj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163zimoaoxr.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163jsperovf.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163mckjxrae.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163lrhcabsg.html

);
来源：http://www.sxryk.cn/163psguxpyr.html

[Q03] 增加列
来源：http://www.sxryk.cn/163jpgoggoc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163soframow.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163weukqkoi.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ufggfsix.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163nqbkhcgm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163fpismqdj.html

[Q06] 删除列
来源：http://www.sxryk.cn/163acmvhncv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163dmgyorop.html

[Q07] 删除表
来源：http://www.xuanzx.com/163usfenygc.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ynhwbpom.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ixigsecx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163wlfmkedo.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ojxrwvfa.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163kawrqvbb.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163taksbwai.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ruvgleuk.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163kqipdmku.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163nyfcvbxx.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163voufgwyz.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163mpypobib.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163fohmcomm.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163krbioepv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ujkovdkq.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163xfelprlo.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163kgdgenxm.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163iubuwgke.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163lixhukwt.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163atavuicc.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163fmtctjlj.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163xsxgwcok.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163undnbtpv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163tayjyigx.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163yshvjfzo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ubknqgli.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163keocfcjx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163psxrmmmj.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163nxkjkahl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ojzwdevb.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163rddscrci.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163mkhsykvl.html

[Q22] 排序
来源：http://www.aibaodan.cn/163pwuxffwh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163eqafxycf.html

[Q23] 分页
来源：http://www.aibaodan.cn/163bnntdmda.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163chgjhbog.html

[Q24] 去重
来源：http://www.xuanzx.com/163qtjscjzz.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163oolpuaou.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163irtyyzml.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163nehzdqrz.html

[Q26] 计数
来源：http://www.aibaodan.cn/163suykqlkd.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163wawzzywt.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163pvrxmckk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163lkohvwjc.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163iwgenmdw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163scxccqjt.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163tioisgaq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163htifqpbm.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163wqwpmmlg.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bmdcxaks.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163scxnwlxj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ftaphisg.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163qpkebibx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163umsbatqc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163gycoqshp.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163rztdsaiw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163zdvcaikt.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163xsymzzlh.html

SELECT * FROM (
来源：http://www.xuanzx.com/163zcnlcrju.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163cjbmbcif.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163czsviada.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ozqldwnc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163uayurhur.html

[Q36] 左连接
来源：http://www.xuanzx.com/163nhvhonlg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163nrjkrkuo.html

[Q37] 右连接
来源：http://www.xuanzx.com/163nzuwzkch.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163jhbuukti.html


<!-- 参考信息 -->