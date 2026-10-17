外链999!wailian999！

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163hsxdcxzm.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163unohpadz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163xaszrlfk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163jzkwdgxj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163bxgpmrvx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163jovbelvj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163harudejx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163hgmzamso.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163sniyeaml.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163jibzshjm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163tjvgvouf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163efcuvszn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163uokqckly.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163owtsmwkb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163bzqbrgvm.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163xzedcwbc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163oifumnts.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163fyotemvs.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163kyhrcjlc.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163wiqqnzmw.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163iutcnwgu.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zfaisuyk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163mevwjger.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163rmbyvcio.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163nzlvbvmj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163bngccgzj.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163oryincqq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163fvlfgpzy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163isogfmmn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163emoadpup.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163aocbqdek.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163exjmxgyv.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163firubifm.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163dbuptxly.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163axzwonpk.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163gdzmofuf.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163mgpajwgt.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163deavvwqi.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ipwzrxmh.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163cdfrtwve.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163iyydrhow.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163nptwsjmg.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163xxiltzpt.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163klvvhabx.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163kdiwrlwy.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163buovvbck.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163rweozisy.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163sphndsdm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163tmwvanpu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163zwtkqlbd.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163noqobzuh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163xsrkzolf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163dpfovccc.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163cmqwpxun.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163evhefumr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163xsnfkwuj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163xcjotrgw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163uudzrhsh.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163qiffsorb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163gtaaavna.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163qxmgrdlj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ilzvofpp.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163ebryvlmw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163qhtiauva.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163uudurllu.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163kqrmudka.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163vmcqvajx.html

Java: // 手写递归
来源：http://www.sxryk.cn/163usegtapk.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163fowehsnc.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163lvytmkvx.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163wqcvbizu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163hpvpqvyy.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163liwqpuox.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163mizsuvxy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163aqmchtzq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163hnheafre.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ptqypmbl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163lplxzagb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163qngezwdt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163flhtizss.html

================================================================================
来源：http://www.xuanzx.com/163xyupogza.html

O. 并发与异步
来源：http://www.xuanzx.com/163zqiorvbq.html

================================================================================
来源：http://www.xuanzx.com/163rwfcaqtt.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163kjzciklq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163akdcznaz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163tbevynov.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163dihzyzjq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163zwfgssrw.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163iuhbtqlh.html

Go:   go f()
来源：http://www.sxryk.cn/163fbvszkwb.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163muazsgjv.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163hlsnqrri.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163epgnojjm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163iuomxeln.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163obtqjyxo.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ryfqwlry.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mumxqlts.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163tivevkub.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163epsiwovp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163dlpbgvda.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163vqqyfpkf.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163pndbopgr.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163fodoktii.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163tbilxzdh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163pnwhqpfl.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163pfwvpkki.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163etdjsasx.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163yhvlzuin.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163fsyibrys.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163yipnrzca.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163kwprnhym.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163yjytyedj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163vjbqqsef.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ljhgfiyt.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163yuaqvrrf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163eaofkwvu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163wabytoxo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163nlbvqjks.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163hpciyhiw.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163mqtdosbc.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163tpcoskud.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163lclkgyjn.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163pzfzuwko.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163lhpcxinb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163xbujtpls.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ozgehbio.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163jphbxqkp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163xpgjvbxo.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163mgguquoj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163vomsrgqe.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163vdkbewnt.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163umlhosxv.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163iwtzgcdv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163tbzkkmev.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163xrrkgedm.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163bwqelswy.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163jrngakeo.html

================================================================================
来源：http://www.sxryk.cn/163xaulqxjs.html

P. 常用工具函数
来源：http://www.sxryk.cn/163hoauoxyq.html

================================================================================
来源：http://www.sxryk.cn/163qrheniol.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163qxwhscxz.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163zvvtxezw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163urqprrfx.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163leaiqfha.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163dabzxwjy.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163kyejccvi.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163zhvldpvc.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163linrtqxi.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163yuiramze.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163bpvdrrlv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163wbxssnkc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163mfwuxpnr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163sspnnpmv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163lqilikiu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163onivndmp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ngfainhk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163qsaskxzo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163uuvkxhgu.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163qwecppgy.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163bglujapp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163fwpnwtqd.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kgkuwtkp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163yppmscdr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163wqmtveyg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163zdtaulvx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163ywvigllw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163mitxotsl.html

[P04] 求长度
来源：http://www.xuanzx.com/163dmiwhwpg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163dqamptpw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163rkwwadda.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163cypxikbm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163avymwbqr.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163wyvllked.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163xicwsfom.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163adzffcws.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163rdzeosnp.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163hvfsymgi.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163vxivtgbs.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163rgatowuc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163kmhfiiel.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163dxupmjop.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163grxzejse.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163qmoxkwhe.html

Ruby: a == b
来源：http://www.sxryk.cn/163wnocsqjz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ehbrxmvc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ezslygje.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163slxcfirr.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163nzjfuqyr.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163tsjhnctf.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163bmrwpuuj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163survnabo.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163zbjkbird.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163gkkwlcal.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163uekwujxp.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163olwqanei.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163wqhayvvo.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ybqdfccf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dpahrbao.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163jidxzlhu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163nldgbuvj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163lrbjgyxl.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163oinwupev.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163deqaywwo.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163jbfktuty.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163xpmoxwtk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163kxynmtwt.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163jmkljftq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163snyfxhpv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163hookubdr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163lxcsilps.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163zfuszquy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163mxvhywux.html

================================================================================
来源：http://www.sxryk.cn/163obbaqyvo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163buusmcmd.html

================================================================================
来源：http://www.sxryk.cn/163wpoeljpz.html

[Q01] 创建表
来源：http://www.sxryk.cn/163eyatxawg.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163qskapyji.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163wtjcweth.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163thfrgpdu.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163shhimqwu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163tahvucnb.html

);
来源：http://www.sxryk.cn/163wfozwsrf.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163cfcoltwj.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163xvyhpulr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vqrlxzuc.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163fkwcurcc.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163hvyrdmyy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163kpwbpyco.html

);
来源：http://www.sxryk.cn/163ifdzmabq.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163dmrsvdqp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163kncacvug.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163geuawbwy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163xpekckks.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163yerfieiw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163szjmymna.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163qufjpqhv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163rbyghygz.html

[Q07] 删除表
来源：http://www.sxryk.cn/163nbuchgee.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163uzbtvqft.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163nbpvibev.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163paqhsdeb.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163omjhvriw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163rxftomuv.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163dxtekdmx.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163xjacdiwp.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163otmcvjry.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163occhpgri.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ohkkjjvo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163oabixnij.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163hilbzunv.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ukhupoia.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163qqlxmvfs.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163navmilal.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163bmmkcqee.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163damyfshq.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ymavhiri.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163uhhpigww.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163lljraryf.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163tabtybht.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163kpwetrgp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163ffvufusi.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163xwwxplfm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163yvzzctio.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163kxvpaqzd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163mavnxvoj.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163puvtgzic.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163cilofizd.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ncrmvwkh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163eahxylza.html

[Q22] 排序
来源：http://www.aibaodan.cn/163zvkfwtzj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163utuvnhok.html

[Q23] 分页
来源：http://www.aibaodan.cn/163rselhxva.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163psrmfzoh.html

[Q24] 去重
来源：http://www.aibaodan.cn/163pxkmkkxv.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163tbuzinua.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163jysapueh.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163rxiwvgkd.html

[Q26] 计数
来源：http://www.sxryk.cn/163oizcmnfa.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163lcepphrw.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ptzbygww.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163hcwxzdhb.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ufvinxsh.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163cdndmklk.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163zlczurzv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163uxdykiig.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163grcynuyb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163grsdxzob.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163jicykacl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ioedmrae.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163iiygnzxn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wryytdoh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163jnwmfhaa.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163rfhbovkj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ziqvtinl.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163gawangfy.html

SELECT * FROM (
来源：http://www.sxryk.cn/163rdpruhpv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163rmnykbsd.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163ruvlxmzx.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ewuxcfzu.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163umbxtqcc.html


<!-- 参考信息 -->