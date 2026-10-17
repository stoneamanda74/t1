外链999!wailian999！

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dznignkj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163dxeaqtnj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qrbwmjcg.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163wyoqdjhm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163abyiawiu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163dbgbnhcq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ivgsarxi.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163gqjiqolk.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163hjvcgixr.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163oavhkwfd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163aozfohno.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ulscvdqo.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gnmkfdqm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163mblzwzqd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163fxkhnrye.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163nfqjdzzm.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163bnswsudz.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163cexyofun.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163eqausdwm.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163zrvootif.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163paezzakc.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rbvjybxq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163hbupoxlb.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ljvohxlm.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163bhlwqtwp.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163yfgpxdvs.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163gvswgguk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163zvsjcauy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ceddbiht.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163sjxjdfel.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163kgeygdwl.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163nvqeouty.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163gqusjgnv.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163uniimmdl.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ausxnwed.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163orvatptq.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163mmtxkpsr.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163rgpzlfpc.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ijmwonqq.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ffpobhnj.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163oeiwlcrr.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ckbgjyhr.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163bbzbmqur.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163mjtprvjq.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163doclmlse.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163zkuknvna.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163xyerhzlo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163tknmddcm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163zdlxccxi.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163bsjpwzgv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163ehrxjjgh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163yuptbxqo.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163kjgrcpdb.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163bvnnairy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163qrspbbpp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163mayxkfvm.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163pvnlukxc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163qhcuupcx.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163bkoudfwj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163dexapkan.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163iangorza.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ofbefsxc.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163rwzktqmy.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163omzbtjoj.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ldujengz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163lesalxle.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163hfgmrbfa.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163qlyazxrp.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163wvxvynvh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163wfchdada.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163cjrefreu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163kabfbvtn.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163hxccrodm.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163fzqtecan.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ntrafrkz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163yzytrgkl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ndoanppc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163yvibllry.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163rlsbhqaq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163qfbdklvy.html

================================================================================
来源：http://www.xuanzx.com/163tbkdavqw.html

O. 并发与异步
来源：http://www.xuanzx.com/163ukddcthi.html

================================================================================
来源：http://www.aibaodan.cn/163tpmmsueb.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ilesnpar.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163xtqnxgoz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163njstdkqt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163mpihrbth.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163cjnxgxcd.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163xtivycjq.html

Go:   go f()
来源：http://www.sxryk.cn/163eqgplnwq.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163mikdnilj.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163lubepyfr.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163zvyhmtyl.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163lzwudkgu.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163lwhoxlpq.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mrgxxndq.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163rayzpdcf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163umzoieyq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163bhccjpvz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163kimjlsno.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163lemfbsyq.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163orwbgbru.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163unvqsxlb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163sostuqdl.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163zgoxxcza.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163yuhnxgqu.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163aoyuedkt.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163yhxkevzy.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163bkdabbnh.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163unflgtew.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163yudwbxxd.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163vneujdwm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ddvvtakc.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163tnrahzof.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163zxbaiqfe.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163uxgvxpfw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163qaguzgkp.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163lvtaaoxx.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163oczknmxs.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163fueuixlz.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163pfepqxpv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163cfbbxnlb.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163blvtvvzl.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163kfzwtkwz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163hooulsjp.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163qrytmqdl.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163pxmsjsbb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ltyhqdlu.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163fwflgzok.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163jawsmuzh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163lholvngv.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163mjmbqtle.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163jmwzskfz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163xwgvjkye.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163oqgihkde.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163pubqdkbk.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163tcocobua.html

================================================================================
来源：http://www.aibaodan.cn/163psiwmfyw.html

P. 常用工具函数
来源：http://www.sxryk.cn/163hevgvfnp.html

================================================================================
来源：http://www.sxryk.cn/163vurpufrt.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163eawmmrvx.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ftettqvp.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163tbyvbdbe.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163xdovlywe.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163emmuxglf.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163abiwztim.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163oevcklse.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163ivkisgpy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163mmhstwij.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163lswbcrmx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ehmiwxfb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163cxmrrzde.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163awqynckn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163rmdychsm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163kozoxpxw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163baxysyhe.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163njfqbgfz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163dossppcn.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163zkwivkfi.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163oleeyvnn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163othypezj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163twiuexye.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163fycnfudn.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163rrqpousr.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163tldbovyq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163cevqirqj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ltlkzdfl.html

[P04] 求长度
来源：http://www.sxryk.cn/163rwipsxmr.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163awfdjipl.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163kerxajib.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163xzvqtmdn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163drlpzwow.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163fajnlalw.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163avknelca.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163dthloahj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163nhosdevp.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163rgsjlamr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163urmupoaa.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163lxdbunbx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163zshiqpbr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163hmckvakl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163bfmbuadm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163grzbwmvn.html

Ruby: a == b
来源：http://www.xuanzx.com/163wvlgtjse.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163yowwnrva.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163sorkcslv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163wuxzjyoi.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163vgsectmm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163tprzrens.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ulxiocgq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163dbmydmln.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163skalktqg.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163yhyzprxo.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163srwfossa.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ixhlorcj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ygiybmha.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163qvxwkhch.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wyddjnjl.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qcvfzfkt.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163fynzynlu.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ysoywkfs.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ijmvezbm.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163mgbpxfus.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163idnkshwc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163nkfiutic.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ilyqnouz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ncefphvs.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ylszives.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163uswfsihn.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163uhudyygq.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163pqtmoflq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163roitjcbu.html

================================================================================
来源：http://www.xuanzx.com/163ejggjzzd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163yxzrtqeb.html

================================================================================
来源：http://www.aibaodan.cn/163ahccunem.html

[Q01] 创建表
来源：http://www.sxryk.cn/163lemkgrkq.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163srrbybma.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163vrxtlwth.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163hihscjdj.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163tjydodii.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163mozztsyy.html

);
来源：http://www.sxryk.cn/163qvpfvyxz.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163rbhrwmlh.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163owepwqgp.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qxwmcvvk.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163mnuscsqm.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163qgpcetce.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163kopmawdh.html

);
来源：http://www.aibaodan.cn/163ouubkbyx.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163nnkrijcq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163tsecrlse.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163mulvabbd.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163gtpmvofk.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ymmnpesp.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ksdqkllx.html

[Q06] 删除列
来源：http://www.xuanzx.com/163mpfqkgrm.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163wokbklvr.html

[Q07] 删除表
来源：http://www.xuanzx.com/163wnbnakab.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163acwnqoai.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163jsbagplr.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163cjuchtiz.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163gnzghyqm.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ufftjump.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163hvgzqoha.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163sjxkczpw.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163gfeueurb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163lwmypojb.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163zfcyponx.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ukfkockd.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163rushtmhe.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163vbjtvmdg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163syyhgfpf.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163fldspykp.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163jyojnaby.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163mfwjxcuo.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163ypojcetf.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ipfrfpgv.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163hndpayic.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163fhamuiqy.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163dygpwsdx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163klehkosm.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163uwbqspra.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163phoizvji.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163vcodvsbj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163rinahlxq.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163blgcmjmp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163ydvpzslz.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163edzyjcue.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163nzoqmajk.html

[Q22] 排序
来源：http://www.xuanzx.com/163fqnewfqf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163utxrbish.html

[Q23] 分页
来源：http://www.xuanzx.com/163ohhkecsa.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163aqcucjym.html

[Q24] 去重
来源：http://www.xuanzx.com/163oiqgdszo.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163mwnhdcrc.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163nvxayvsb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163anwehwuo.html

[Q26] 计数
来源：http://www.aibaodan.cn/163yhaxrbfz.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163hrvyxbvq.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163zsgmzyir.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163bxaiuuif.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163ubmqakxh.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163nzrjqywq.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163qlwrhgyc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163cbgftjsv.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163fcukcikj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hhkpksdh.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163jmhyqsdm.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163wsrvdtxi.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163hzbfquau.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fafepnmp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163lvmmzqrh.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163xfairowq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163cmxwixsp.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163auixqwov.html

SELECT * FROM (
来源：http://www.sxryk.cn/163fyonyhaj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163gxukasaf.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163edvnnhmr.html

[Q35] 内连接
来源：http://www.sxryk.cn/163kwlqtcqb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163fdzhnmef.html


<!-- 参考信息 -->