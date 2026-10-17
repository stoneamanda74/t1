外链999!wailian999！

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163rzyklgfr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163lxguppzx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163isnhkynb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163wiaqywzw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bgzwxgrr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wlncprvp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ybdoogea.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163kqpszwqd.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ohbpxxox.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163yanwtfkc.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163rkpqjkzm.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ckmoozhs.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163vbloyypg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163elmfemyx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wiuzymxi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ttxudpqx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163pzmdqorb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163wvphapia.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ajalljhz.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163egbvmegm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163utzqyeyr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ohnfljft.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163grdjwruu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ptbvfala.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163eqgjmvmt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163clxhyggf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163yvhppyiz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163naewffss.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163edsnwnoj.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163nmyqiwta.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163iwbeeymc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163duhoylod.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163umziwict.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163vrkpnhxw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ipnislwy.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163nsamchxi.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ijzyuwrm.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163syoesutm.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163glinwutj.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163oduydbta.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163milneyjn.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163fupaepwn.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163gpfzkwcb.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163qbtcxvhq.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163oqallnvp.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163cpswgwzc.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ducqwppq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163beeoyccm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163suyiljsq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163srczfzil.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ujedipkn.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163npxdqyri.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ilvcfwun.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163wretbioc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163khqclakw.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163cjsithaz.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163zstreolr.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163siugkibz.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163iebwcson.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xukbhaus.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163dcexiyis.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163jkqpiyqs.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163nyadesiw.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163smjnizxj.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163wsywgeab.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ikhmswlj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163omrvzqcc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163sumznzgs.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163mptagabv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163kgsaewrv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163rdowqjoi.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163hzgspwna.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163kwdocikp.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163adyrtxov.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163rbygftoj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163lrqekuje.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163uowrrqcx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163coaaypdn.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163kmfxlkcg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163daytjpcj.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163zkyipevt.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163lxdyreza.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ffrewdbj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163lyzibtxk.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163tpxhnkha.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163pwlrgbau.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163igykyzdk.html

Java: // 手写递归
来源：http://www.sxryk.cn/163kzwcsfud.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163dkrppjnt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ihhcohkd.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163lizihenh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163numcbuon.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163iylhjvyd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163jkfaqlml.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163pujezmei.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163chdtncvk.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163sohzvwlx.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163dpumzmle.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163xhaoimax.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163fqomkrmv.html

================================================================================
来源：http://www.xuanzx.com/163zcfguiof.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ucfkmaca.html

================================================================================
来源：http://www.xuanzx.com/163aakplitw.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163teanmzzy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163kxdlnsnp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163alexnhms.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163jjnjfipk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ihkywmso.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163qedkycvq.html

Go:   go f()
来源：http://www.aibaodan.cn/163fyizloqe.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163kripyfqd.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163achcjegg.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163nyekthgo.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163eezyiigz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163vsprxlks.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163chksvavv.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163dyeoaptp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ylftwbmm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163rdufznaa.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163obbqjajv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163edfwpahk.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163gfafiyus.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163dphiutnt.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163vsmcidxp.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163uvhkdkgc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163bgibfiho.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163qalrvusc.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163mtwqsbwo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163fwnymshj.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ijqkcrzk.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163fnrgyvdk.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163rifhgyfh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163vsvkxbst.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163zhofgrhd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163frulfrfs.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163qlupvybe.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163iysohwxg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163twsjackx.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163kzymyjin.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163kuhrnsmw.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163pomjmjms.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163edawryjd.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xitxstyu.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163bbggvrta.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163xgxxrluk.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ztqnbprr.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ujxnbill.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163kbznksou.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163aoidfhxs.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ubtfoghc.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163gyrslqzd.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163zqbumfew.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163bqkjmfsw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163abmvaksm.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163cwnjqzbo.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163balgpaow.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ivxktinw.html

================================================================================
来源：http://www.sxryk.cn/163mxcvckhe.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163zyxwuaui.html

================================================================================
来源：http://www.sxryk.cn/163qvhhjeoa.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163lvyysiob.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163wjwyhnru.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163bzdodqhq.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163xrktnums.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ilaupbrr.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163bycuwihm.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163dfgmuviw.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163lezcmhat.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163zkaxknjf.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163vrgxprwq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163ukctsfae.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163zlhmreur.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163pidcwenn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163xeodfcyf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163cffhvvdo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163papnftjt.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163dscxkixu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163czwdaryy.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ydowlsql.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163xyocefxg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163igaiwaeb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163lneaqhci.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163tresnvcs.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163lxyxholm.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163zeijigln.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163kjdxwbry.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163vavqmiel.html

[P04] 求长度
来源：http://www.xuanzx.com/163flmqycjc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163fzbfoele.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gsutritj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ozmoptts.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163jugypqcc.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ovhujwej.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163fzqlykee.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163izkzffvd.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163thtxdsxd.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163efueceef.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163oxztpyue.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163kvqcuwow.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163dlgdvnue.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ccemqrqh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163jnnehswx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163yujzbkwi.html

Ruby: a == b
来源：http://www.aibaodan.cn/163bsumzxbn.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ybkwujge.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ujcwzyqg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163bpmwuaih.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163yypjyodq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163tmbysoql.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163xgbczorg.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163laakuvla.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163duutghki.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ysvutfud.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163uemjubgo.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163jjctgaoj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163fvptbaql.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163flmwwxle.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163uiiiexbr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xjndsnml.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163lpjicadn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163vppieesl.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163wfbwphds.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163rxlzqrji.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163gbnivtxt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163sxbtbvvt.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163nvspfluu.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163eqwnuzht.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163xeajtmnd.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163hbeiphxc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163uczcrjnp.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163xyvudmvg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163cfrofntp.html

================================================================================
来源：http://www.xuanzx.com/163yskshjud.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163fheecpgq.html

================================================================================
来源：http://www.aibaodan.cn/163hmujqaqj.html

[Q01] 创建表
来源：http://www.sxryk.cn/163liqpyiiw.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163agpfiqcy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163nehwyatq.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163soqloxqk.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163xgtufejb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163fnsjkfov.html

);
来源：http://www.xuanzx.com/163xxkzddzu.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163mllpbyfl.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163zxuiyghw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zkccdelt.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163gpkotonh.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163lxeeggdn.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163kurnjytv.html

);
来源：http://www.xuanzx.com/163mcnjtoxi.html

[Q03] 增加列
来源：http://www.xuanzx.com/163dlmtwoqm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163zhuagwdu.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163gogjvtyd.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163mfmrjlew.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163aaipobif.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163nrlhkvix.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163vmnyebkj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163xslotjyp.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ckoftzdy.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163viurrwcd.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ygwtuvlu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ykhiazdz.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163kcplllcg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163unpxnamr.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163dwbioipl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163lvmckxdl.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163fjvsfeov.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163dppbpqpc.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163lylnwxlt.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163pigyydqi.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163mghovave.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163hlvurnrd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163cnitltnw.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163hpdgfvss.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163tnlrpjkr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163djvhbjaw.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163pfauyrst.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163fxwjamhb.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163tkscrgdu.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163dzmmvjth.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ouhitluw.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163zuebiqua.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163szfazblh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163zkiixdbf.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163dnzeymwd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163okgujaty.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ifsbzwki.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163qltnoyat.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163nhkbypnj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ebhqzpnf.html

[Q22] 排序
来源：http://www.xuanzx.com/163atrwvbek.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163rbyeligx.html

[Q23] 分页
来源：http://www.sxryk.cn/163iyvsdvtw.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163xypmyohe.html

[Q24] 去重
来源：http://www.sxryk.cn/163gyzidcjo.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ayhdbivo.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163hfobbbuz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163uvdfmefl.html

[Q26] 计数
来源：http://www.xuanzx.com/163cujzfmrh.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163whkfluwg.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163geyiipov.html


<!-- 参考信息 -->