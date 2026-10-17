外链999!wailian999！

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163vqncorgt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ygqimzkm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163uyoeiemv.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163cqcxipib.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163swizkhdk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163iipfdxse.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163fdvcuurf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163lefznqqr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163atderoad.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163huigprfj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qphczmvf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163besdnjng.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ndiotmav.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163xpwwctwy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163rymwmmha.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163kxjorlzb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vywijmse.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ysbrqusf.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163sjnbmddz.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163bshxzqum.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163psqtfovw.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163yadtplvn.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163sggjaree.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163gprpkzif.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163igsxsecr.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wggtwnqv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163urfszmog.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163zllncnyj.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163olsnjhbp.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163cplvfkvc.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163mugfarvi.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163qsuillak.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163hggjdfoj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ponjcvqh.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163lkfcgysf.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163vaymthdx.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163kcqkkxxm.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163fwbgalei.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163abomlfhw.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163kngwiocc.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163gbpcqlvm.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163swytknnz.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ikpahtaw.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163efdbvugk.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163gsbmhhuq.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163iyvekjdi.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163rlxfuuck.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163hobtcbgz.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163qrpvherr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163tdewbrbn.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163uctuvedu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163iocahzbw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163egedyzul.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163sjhmnngi.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163kuwzkqls.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163xuvcyadj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163epcrviay.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163yxbmjbtf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163abxdphnk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163xkeegmfi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163tjbhcdmr.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163napyzfdd.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163fojvaxjo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ilsiileu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163rlxdthtg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163mvheqsno.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163bwgufkyp.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163xaxhtqpg.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163zvqnpsvn.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ifneaoek.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163rjiuffdy.html

Java: // 手写递归
来源：http://www.xuanzx.com/163wzrebpel.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163tpnvnalg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163bnplobmo.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163uozrcbsf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163snuahhwg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ebizhxzi.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163hnumxnqa.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163tlgeprwx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163xgwjwdbw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xcvylooq.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163wiznjjnv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ycnmmjwr.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163qryqxfnk.html

================================================================================
来源：http://www.xuanzx.com/163bxqurfhv.html

O. 并发与异步
来源：http://www.sxryk.cn/163gkndaphb.html

================================================================================
来源：http://www.aibaodan.cn/163zfaymzeb.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163cnzjbbhp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ptvtcnga.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163peivyupa.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163azvfictf.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ieeandsq.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163paxtgrqe.html

Go:   go f()
来源：http://www.aibaodan.cn/163esgfgisw.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163wfbhnzti.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163daxwwpsy.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163mwxnafhy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163erbarfbc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ptcxekrx.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163uhxaexsf.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ofbheyor.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163mmggwgyf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163nubzagis.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163cnhhdboj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163jawfdoga.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163zuiiujfv.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163yeksycqz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163qknfjrgk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163rebqdyjx.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qefnbfmc.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163mmpsobic.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163cgfsvjze.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163lqjxrisa.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163nslrpcbr.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163viwucchv.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163bzamsyvo.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163eevyhyfv.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163uukxtyhc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ffpioapx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ymjrjjcb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163bodzczjm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163tcevways.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163kqffbkgq.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163hnoupysk.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ffqolcxr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163xfpnywew.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163iynyfjna.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163bsfvjzmt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163xgpigzvn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163mfnxxxrg.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163scavpuvh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163zqnyyock.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163jrgxjnco.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163hyghayqm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163eijbcnni.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xtlbmqog.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fythuexf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163fkpabhei.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163kdwqbynu.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163svvqiifj.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163bjdludbo.html

================================================================================
来源：http://www.xuanzx.com/163dqngjios.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163sfaaxnsf.html

================================================================================
来源：http://www.sxryk.cn/163mwgynosx.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163yuskmuwy.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163hkilfevl.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163fvyffoff.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163alrsalwz.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163cmxdtqwd.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163grwtzlss.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163qhxtokeo.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163xtiqmvrf.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163gldluult.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163pqoumqyn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163zqnsxoso.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163thzrljqb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163roctfnjc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163dcaproko.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163xfgpephv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163eytsztpk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163epzzeakz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163zsxhmmtl.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163jypwluhk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163qpobmniw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163sngkcsuz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xzawmstz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163znmtrolf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163qygmimxv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163tyzxfhuj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163ytkxtlwa.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163xcddxkna.html

[P04] 求长度
来源：http://www.sxryk.cn/163xmzpceae.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163kuhsegzf.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ttgsckqn.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163nkjkoxmd.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163cshnctee.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163hdddvufs.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163clgiojqi.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163udqurkof.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163zbpoaccq.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163xbpkmild.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163dypastrc.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ilknqrkx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ilupyskm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163gucwtpgo.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163pdswgopv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163jczmolri.html

Ruby: a == b
来源：http://www.aibaodan.cn/163oujiqosa.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163qoftlzap.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163rnsxszvl.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163afthtqym.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163bmenjthp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163qlgyhltk.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ahducshf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163nhujecgs.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163fvzwsrvo.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163fpmrkbtt.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163yesxqkrj.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ioipwhxi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163qxmlicbp.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163bgblgsfl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163sfoqoltr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rfqgsesl.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163jqntoxde.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163qnxwohtf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163tbrnbbqw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163wrnqwrbz.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163lvyvbaxo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163smucwsfs.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163wcuenyyl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163kxekcsfy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163huzfvbvm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163hyedzugp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163uqkvocxu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163kryltzcb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163fpdxjjfs.html

================================================================================
来源：http://www.sxryk.cn/163vigvstwu.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163bcwfysua.html

================================================================================
来源：http://www.aibaodan.cn/163jwfaqkjd.html

[Q01] 创建表
来源：http://www.sxryk.cn/163wltwtbeh.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163wkxkiiam.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163skptejny.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ohcvhvpq.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163gthszbaz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163tzknvhom.html

);
来源：http://www.xuanzx.com/163yulkuhgz.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163rdjnulzy.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163dljjfwrm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163tfcnuauf.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163aqhnmdfa.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163khpptvwp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ujssgjyj.html

);
来源：http://www.xuanzx.com/163mhvcyrew.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163xcmjvpbj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163kygljmoc.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163xmahiwjt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163yxlluysb.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163dvkltcfp.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163yyjplkee.html

[Q06] 删除列
来源：http://www.xuanzx.com/163clcyxgzn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163roavlqcz.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163tnsblagl.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163jgwwieao.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163devmukjw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163quiwzszk.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163ifllxjpc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163ccqelmzl.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163xjqbkghk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163telqqgwn.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163mcnhvzsd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163tonssoca.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163cmtlvfap.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163egbhjgxp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163damiutel.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163vqwgxoyj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163yparouze.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ioqxbabj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163yfokmctw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163igmzoxye.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163gjkquafh.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163vnnyajnk.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163hqsdpzsp.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163ccpyvzyo.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163nxhpvnee.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163vxzkutpr.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163vmywxemb.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163pfxolqgr.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163kbxbozzj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163jrszyvjy.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163cnbgdwiz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163apvgprfh.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163yeyawbrm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163serzochs.html

[Q22] 排序
来源：http://www.xuanzx.com/163dstzwnqz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163mhdirhqr.html

[Q23] 分页
来源：http://www.xuanzx.com/163ihnptitt.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163njjtaqym.html

[Q24] 去重
来源：http://www.aibaodan.cn/163rcqknmgq.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163xkjqpvje.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163aowyfqim.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163nhzunvev.html

[Q26] 计数
来源：http://www.sxryk.cn/163rzpohixk.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163porrzqpm.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163gjpfatdh.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163jnrfjhpn.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163pwdkzhlz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ruyedspi.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163opiajwdi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ecvtnvtl.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163qeyeopjk.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zgdlhcsm.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163cszuiunl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163mojmnyuo.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ewgdxrmz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163fbdumgmd.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163dfompqdd.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163ezlvxzdg.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163eabhbvqk.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163xowadpwa.html

SELECT * FROM (
来源：http://www.xuanzx.com/163jkbfnzhr.html


<!-- 参考信息 -->