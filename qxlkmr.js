外链999!wailian999！

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163nawyokyy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163omvjofhm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163fblmsobs.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163iqhingwj.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163hizbwnkn.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163bsqexvez.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163eeqlzail.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163kynvtyxc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163bgcheeqf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ziluvcfo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163orvjoszx.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163pniiutie.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163jtcjxucb.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163tlhsjwyy.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ibtnjqmo.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ejburdig.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ycyvoejl.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163tvuvktyj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163evpihjwi.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163tconsrjw.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163omldzowu.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qszrcaqh.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163opldihtm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163gpnfddyf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163sbdwngfh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163thlynzjv.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163bgegprdc.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163takvzgwz.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163zozcccdh.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163nakcdrcy.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163wejzudrp.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163stwvakph.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163vfjjshrs.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163yzcwuevo.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163nqvyvsav.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163bectnylt.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163cqidplbk.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xdzcsiql.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163zvhdbxtp.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ouhnvdcq.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163kxzzbtmf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163qwkpdcem.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163uhnvqxky.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ztetqbkz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ttdrnzat.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163gskavman.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163bpdfvsxr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163qtkrxbzl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163rkccjqop.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163gesjdmvw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163lksxyuga.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163lcshablp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163qzeqesep.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163pkjaffag.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163zzpymyyn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163byyygwit.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163lnhjudir.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ofgkojmr.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163kyizctyd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163luvyrgxc.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163nxpbcpbj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163gxwkduwa.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163yrdzeaqy.html

Java: // 手写递归
来源：http://www.xuanzx.com/163fkldkbey.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163bqmurqqn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163kfdjuxdn.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163jrbrkpre.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163wppqlzkc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163kglbirxr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163pswwygks.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163aotggenu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163szowfcrt.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163vwxuyyzz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163xvxchrne.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163bqzhnakl.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163dlymgkhr.html

================================================================================
来源：http://www.xuanzx.com/163nzhqtshj.html

O. 并发与异步
来源：http://www.sxryk.cn/163lmseknmn.html

================================================================================
来源：http://www.xuanzx.com/163motxrwce.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163rcvxikir.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163zsorkddp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163exoicdqi.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163fuqvqqcr.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163kqtuxrco.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163znqmqmni.html

Go:   go f()
来源：http://www.xuanzx.com/163efgkttna.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ljgifvov.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163eusolvgh.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163wbxqpfut.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163rucwfgim.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163yxsrpphx.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gvtyemwy.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163zgkhlfxs.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163obohmtaa.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163gnpwdanf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163qylkfhrg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163cnxtabtg.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163uoztmrhg.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163mpapdrwo.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ttzixeoi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163kifocmkt.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163uedlvnam.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163kcpgdyyj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163nypruyvc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163hfuztlpi.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163qzeockqr.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163aqtsezeu.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163qzpqeapb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163neioyfwj.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163medowtee.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163yfzumgcx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163oowuilvf.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163ycqtzizk.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163bbeycqko.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163tkxuefox.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163pqndnmmt.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163xidrczaz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163zergzctr.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163pbuuxffe.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ooswlzvu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163hqipvfcf.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163rzawgdgw.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163mrmtftpv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163rtpvmudb.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163oojcsqoh.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163txzrkdgt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163opcbnaip.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163oygchpbg.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163tnfovtdj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163enkbpgzx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163gxtywxum.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ubrmcsoq.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163kpflfmov.html

================================================================================
来源：http://www.xuanzx.com/163cpewvuzr.html

P. 常用工具函数
来源：http://www.xuanzx.com/163haslncuc.html

================================================================================
来源：http://www.aibaodan.cn/163jgewqwff.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ettopcwd.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ghfxugcy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163vmpfmtfr.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163tgaogvzo.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wwcrlxwh.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163evpyyvez.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163tjkqpvqu.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163fetvodxx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163atxtgeaf.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163mbfwmyls.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ehsbqbvm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163tgrgcedl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163qckdfyfh.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163zgrfgvxe.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163zmxjvdkl.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163aijmztdc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163erpqxbxj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163pwogqwun.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163wcvlkukf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163cetpffdf.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163rsxvahma.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163vnhyicjl.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163wmnladyf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ahrjpvqx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163sstxlvqe.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163sdouzxsp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163wdjhvszl.html

[P04] 求长度
来源：http://www.xuanzx.com/163tbjpbqtg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ndkuuppq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ltpimgia.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163urobjnzt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163mdrkabio.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163zaidzliz.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163fahervkl.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ihqebyda.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163gurungsb.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163qdsewmqh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163werghezo.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163xslwrlpw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163yevnjtcr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163yogfnvmm.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ptnsqmea.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163fffuipki.html

Ruby: a == b
来源：http://www.sxryk.cn/163tcadtkma.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ytjkpaoy.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163pnbaeylt.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163xaejvyll.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163lpnsymix.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163wiotgssq.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ooclntza.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163pvkzzxlx.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163pkyqomaq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163mmodegjp.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163mbanpvul.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163hdbragoe.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163rrztaflv.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ultynwbb.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163oxbopqqf.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jjqmaojz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163qeugsdup.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163qjftggzt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163nzfmhmlf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163kxcufnve.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163rqtjhfuw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163vjfreqpb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163whfsorqo.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163coidkpxn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ojtxktgt.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ujnsqcnr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163mnciwmgo.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163htvdhdsj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163nxthsovs.html

================================================================================
来源：http://www.sxryk.cn/163insrftiw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163gtsbkwib.html

================================================================================
来源：http://www.sxryk.cn/163tvwrqsmn.html

[Q01] 创建表
来源：http://www.sxryk.cn/163hmickyyu.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163qrplzvss.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163tcfnrlfx.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163nrvbfase.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163zdbalgzh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163mxbaradi.html

);
来源：http://www.xuanzx.com/163cvkktryy.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163llhbbaof.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163fqlfawvk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163jyglptes.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163mftckeid.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163qngzwwwi.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ewpwuvhh.html

);
来源：http://www.aibaodan.cn/163fmhhvgok.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163muicwmdp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163swmzczaf.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163avtuzcti.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163bemfwoaq.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163dtgwqkwz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163xpasahno.html

[Q06] 删除列
来源：http://www.sxryk.cn/163cvlkmusg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163dwkpfbzt.html

[Q07] 删除表
来源：http://www.xuanzx.com/163iyneluha.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163otxtwveo.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ibiritfq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163butdpspy.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163wadlbiol.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163tmcjhghs.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163vuhfswna.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163wriqkuok.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163tfwmigsj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ajlxsyap.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163okpkufqs.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163vkmjlzud.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163qpacbwyt.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163wovhasej.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163nsyawrdo.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163uqfxzwky.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163lcopnurw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163uvakvjay.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163qwgkewoq.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163qaakiwtz.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163cdbzwqft.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163gwjtynze.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ogjsgoar.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163qjljbysz.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163yeyqjovd.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163zrbvpncv.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163nrqsxbpf.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163mgmlqlrr.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163kgeoatzj.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163bkfzxljl.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163bzfklfhy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163blswornj.html

[Q22] 排序
来源：http://www.aibaodan.cn/163cksrzmfc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163dcslvgbg.html

[Q23] 分页
来源：http://www.sxryk.cn/163mwryoift.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163cdckyyua.html

[Q24] 去重
来源：http://www.sxryk.cn/163ghvxerdj.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163oeltpgzt.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163xwsvdaaj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163kemhbgab.html

[Q26] 计数
来源：http://www.aibaodan.cn/163zwaiblej.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163riykwged.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163bpougxbk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163sxwdirvs.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163sqzmkccn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163luksnhli.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163pbaydnjb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163laibeoje.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163svvgnbhf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xhixcifv.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ektntmqd.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163araxjjtm.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163rbcwgvmb.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163snhzptml.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163wcvxswbz.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163qpavudwv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163iqnquxjx.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163cqthshiy.html

SELECT * FROM (
来源：http://www.xuanzx.com/163lgiabjvb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163jdwxvqiw.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163bsycruxa.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163knvsjfii.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163bjexxzco.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163yteknquz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163qrcafyjr.html

[Q37] 右连接
来源：http://www.sxryk.cn/163lvxiongl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163cyreelfi.html


<!-- 参考信息 -->