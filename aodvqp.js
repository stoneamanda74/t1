外链999!wailian999！

Ruby: arr.sort
来源：http://www.xuanzx.com/163siegxwwx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163xhvberxc.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ljtornfs.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163oxdjttue.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163riysbkpk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163tlffgalo.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vobafvpl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163tekjltrt.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163qgmanopn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163wvjqcsxu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163nturwana.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ebtubmnw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163oiitqmqk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163tfzwzebx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163pbkebvbd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163woxipfje.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163xysrvuth.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163xsqvqjox.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163eznbyzrn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163perssbxt.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163rpiadcsw.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163zduhxbea.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163yxkwenoj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163skaujpnp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163hjeodkvk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163wkxwaybo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163unlgewzt.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163toahtlcq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163zfiijdkg.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163rdhipfvk.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163lebwrrcc.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163itgkyjph.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163kegylznq.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163szclijhj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163axtqgaat.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163iltuvhbs.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163vmbndxng.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gfrewyaj.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163gfukufoy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163crppovzx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163pepopgnh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ezwbrgcy.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163fifzrewb.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163yynsntcs.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163tsucwqop.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163arfvwupw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163pjpzatec.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163edfbkqer.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163nhuikeeb.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163wzvcqtum.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qqbxlqil.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ggklathb.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163uzvuzgll.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wjtewttj.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163jzghqjws.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gmgymnyp.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163vxogxyox.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163txrzlnhl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163sjpxcpqv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163haaohbdb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163dirmbvwc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ewcfflax.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163cesdokru.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163rrthcfdy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163mudcdodi.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163zfkydtof.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163uctyushg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163uwgukhbt.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163aidptvdf.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163ytpswyzz.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163mtbvacyq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163pjuntlbu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163gwoplogh.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163rwkjekvd.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ndxftbcf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163qpgxkrep.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163hxwtdlfc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163lynajwsg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163okvjagfb.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163fxlavzmj.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163gwkmanvi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163hrwcshnc.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163jkgfekit.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163mrsyrscm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163lqreciel.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163mjkpbnck.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163pzejdhth.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vvnoscrg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163tuavyzki.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163nlnxwexz.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163pdxabpbj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163kfaderoe.html

================================================================================
来源：http://www.xuanzx.com/163jzgnlagf.html

O. 并发与异步
来源：http://www.xuanzx.com/163icoccabf.html

================================================================================
来源：http://www.aibaodan.cn/163zvkryqkc.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163jyziwfey.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163qhwmhxkn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163wmyajcyi.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163udykbkfr.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163yxbpvier.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163lqvgiger.html

Go:   go f()
来源：http://www.sxryk.cn/163xaiiyyex.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163dncypbjc.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163offnfyjo.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163vypkuhmb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163twukkukr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163xlazyblg.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163osaevlmo.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163owrlblvz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163gkbecewn.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163nniecqzf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163fhiiqapy.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163swpclpbn.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163nffxtnvt.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ygulxaqu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163xkqtxwuv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163vmwgremr.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163pinebvpj.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163klfshvyb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163gtqrljtl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163dgghmolj.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163xepdibzc.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163oduhwbna.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163hqytofhr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163chjoxmqd.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163zqaoonah.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163wjhlhdzu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163zwpujqqd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163hqqockza.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163iwtcfumg.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163gsfghzbf.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163oavltvxx.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163suabajnc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163zkggtivu.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163nojibpqn.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163cemtqevl.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163cchybbdf.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163drzegxow.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163tpoygazm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163aepflbka.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163gdumfhri.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163cnwfluzm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ejueehcw.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163juynohzf.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163cwnputqk.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163jnsykois.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163cdchmwzu.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163cmqvabcw.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163lyaxnmfi.html

================================================================================
来源：http://www.aibaodan.cn/163kdydamsn.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163pnyumqcx.html

================================================================================
来源：http://www.xuanzx.com/163qfhflbic.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163mkcbmqpl.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163xlkppxuk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163cysrduwq.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163vevfmadn.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163nprcdyar.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163iwjlnkzf.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163luodumuo.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163qedtbtwn.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163knngxfxp.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163nqgnjicg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163frmlzsti.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163rdnnalzp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163tgifcvkr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163hkouvhjl.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163wzlhbibi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163olhvesjk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163plasqqdh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163xvqopxme.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163chierfqs.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163wntrrdbl.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163lzkfvneq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163osehgayu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163arhnsrup.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163nswxfezc.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163yrugbzfr.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163yefldtbv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163zhvpvlnh.html

[P04] 求长度
来源：http://www.aibaodan.cn/163vfircnsr.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163gbrhkzlc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163nlouwwcm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163bhpzsahl.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163odsolcbd.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ncnkjdum.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ammosntt.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ggtiydne.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163jaxmgpgu.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ycjrrbnw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163fwljeqlv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163vezgttxl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163wfvubvwh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163vdbqgckw.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163eglhqtae.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163fpyjubva.html

Ruby: a == b
来源：http://www.aibaodan.cn/163qrjaetcl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ppyscslf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163dfognhde.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163aosgojmd.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163wicexlih.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163jrcuxpgn.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163jsjpvqhl.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163qoqmweqj.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163nifpghvk.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ttrwaxbp.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163tpxtagym.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163wubcgjrz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163tgfztgyx.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163jdoyxglk.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163woufnuix.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163onutbzxi.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163sowfyinc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163uwulhjoy.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163uurftnrx.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163ctmwajjv.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163xelrzfcp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163oezekikw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163qruaiwvl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163qeisbfdy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163uiatyzvn.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163pjdsiyrq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163ndabnzqs.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163glqqropt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163trdnlcri.html

================================================================================
来源：http://www.sxryk.cn/163opbcaiwb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163bmhqeirn.html

================================================================================
来源：http://www.aibaodan.cn/163wvrkhmqv.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163udvocvgh.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163knohtycl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163sdxvmbnu.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163wwogxpok.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163xaeeiyfj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163znltjrjp.html

);
来源：http://www.aibaodan.cn/163vbtwjbas.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163hlvrbjww.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163wjfsezoj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163hcrqlrch.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163gmcejeas.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163brrsblgx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163adqquckb.html

);
来源：http://www.aibaodan.cn/163buxdtlmr.html

[Q03] 增加列
来源：http://www.sxryk.cn/163rxbxaenh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163zenhqyhf.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163rybtkohb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163jamzegrn.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163exvlsags.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163pmrladtt.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163iszeazzn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163xkevlgld.html

[Q07] 删除表
来源：http://www.xuanzx.com/163mzfgtalz.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163fjdnaqoy.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163vcnqldoj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163qxlqqwuk.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163zybhmuag.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163idctjvtd.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163petiuxxe.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163gdqeridy.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163wzvrzxpt.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163hjebyyxz.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163xaziehgu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163elvgloat.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163hsywbyxn.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163futdkrqb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163pmvytvop.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163hsdsfxlz.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163tjgjfslp.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163jvnlewmo.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163sexrlgke.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163igiswjui.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163hbjgqhwt.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163siphhcff.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163kkesaqae.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163vacmigqg.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163atjsvlbu.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163hckgqzyt.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163hfgcedzi.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163mivpqvff.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163voexkadm.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163okvxjngo.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163hccflnvi.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163quvgfddt.html

[Q22] 排序
来源：http://www.sxryk.cn/163stbzgifs.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163xaydhejh.html

[Q23] 分页
来源：http://www.aibaodan.cn/163dyioxqqx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163nuxbicev.html

[Q24] 去重
来源：http://www.sxryk.cn/163iipeylbj.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163xutgvyyi.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163acvwnmqg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ofhaxagw.html

[Q26] 计数
来源：http://www.xuanzx.com/163iubjzokw.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163dcoahwug.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163rvblgvfl.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163aooupopw.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163staaetsy.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163fofecdba.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163lqhgbfzg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ynzidonu.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163rtooyjpl.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163rufbyvyn.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163gpvwmhur.html


<!-- 参考信息 -->