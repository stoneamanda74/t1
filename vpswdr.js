外链999!wailian999！

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163vmcootdh.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163sckcqflh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163fxwgbrzh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163xbcksyrm.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163mgbpywpl.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163tqrauvpu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163dbenpruk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163spjqsslm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mknverjv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ffharvmq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163rpnlzcuz.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163voiexmge.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163owkubamv.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163xkssiggw.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ljinrwyw.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163prjeebmn.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nzepgfdq.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163jlrtcxfi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163hgzidlkg.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163dxrevcew.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163fflauzvj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163xpktyabr.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163yvbmxqpt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163fjymprev.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163bvqlcpli.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163zurmyaci.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163qcizxdhz.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163tkmggbrd.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163xqotskux.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163tyifqvqi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163cjhpqcyo.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163tvmtqpye.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163jhtnktxy.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163qyndejqn.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163yeaqgmxk.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163rxlhjeas.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ivbcqrva.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163iutvhagj.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163qrlcmdxu.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xahgmtpm.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163fvyecgvo.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163fmmgzogr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163oupapzim.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163etvzjxyw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163tbizerhg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163qzxuvbvv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163cjcirvey.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163ugundvan.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163eshjvayn.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163ulyeavac.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163sylalfrt.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163mzligfeq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163tifczgpc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163uglmfgro.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163bivryism.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163owpizzsh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163lkdpghtb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163axvxbkwy.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163hieupfnc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ajcxutkp.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163hlazaian.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163bwnpgpfa.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163uxjroife.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163kmmvdxdp.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163dyoptssx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163jwyfqhxd.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ixntwasc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163dueknugj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163nljycfbu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163xntvvwrd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163emennivs.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ecnncluu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163fvuhnrap.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163jcvspamp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163hyzagpfc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163pnixkqpx.html

================================================================================
来源：http://www.xuanzx.com/163vjkthtgi.html

O. 并发与异步
来源：http://www.sxryk.cn/163zrtcddvn.html

================================================================================
来源：http://www.xuanzx.com/163qhtnxrmc.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163obiikpzb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ehcixeub.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163gtzhntha.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163xsagbvjh.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163xzolggsu.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163qmqggqjv.html

Go:   go f()
来源：http://www.xuanzx.com/163tbjuqreg.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ynytzafe.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ykhwhduq.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163djrpwknk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163qxlwjohz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163xyxthwci.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163tgyuelkn.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163urozzivr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163dhqrdqwb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163mtqtqlbh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163rkbkgapk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163tntpzcmw.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163mchdmpxl.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163nxeqsypj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163seljynma.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163cltcnqll.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163bjtkohlf.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163hlwqpdpy.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163puihsmjs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163bzakxilm.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163onxeefba.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163pdkioxyh.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163rsfoidec.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163lqykwpsq.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ohdiwgla.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ykmcjxfc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163dorbrxzo.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163xvojrrif.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163zxcpkple.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163plfoypoa.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163zlkuhmmp.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163gpgjqkcu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163mgyfwiaj.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163cekymweq.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163cpmafwdy.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163vxehntzz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163pdeawpfe.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163jxeopsac.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163wrbusugb.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163gzokvain.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163isvgverb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163zfhifuot.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163olgreoiy.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ctwuihmr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ldpbyzzr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163wucosbjb.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163gmhwzxid.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163jjrzfqkc.html

================================================================================
来源：http://www.sxryk.cn/163umameeid.html

P. 常用工具函数
来源：http://www.xuanzx.com/163sdfjlafj.html

================================================================================
来源：http://www.sxryk.cn/163nnufhtuj.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163iuabnnqg.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163zzbuxczc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ujozjyaz.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163opqfxlgw.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163gtoahclt.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163qqzddxxj.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163fplqkzns.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163sftqembh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163usivgxca.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163fhrvmebw.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163twfkfbim.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163wahyzfcj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163useyyity.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163qtbzgztq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163fgcqwkud.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163dsfsuulh.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163lrolphij.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163lrilqgxs.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163sudqiewc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163dlxuafgk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ptzfqgut.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163lcretquz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163xakpxzhi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163rquheqdy.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163awhgqoyu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163lznixlqe.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163wmbkscju.html

[P04] 求长度
来源：http://www.xuanzx.com/163dxuzubwf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163lfwzrrlb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gfyzocsq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163tankmreg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163irskciat.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163vluugueh.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163llwvyovr.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163tvreuqml.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163hfsaagcd.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163skvkpgob.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163clqnjfml.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163patzltle.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163dxuowmox.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163rnoihrjl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163xnwrhnex.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163qsbhbzid.html

Ruby: a == b
来源：http://www.sxryk.cn/163dfaiwiub.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163xtyfstnt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163nkznddas.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163mmlhxqbc.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163uoynzdad.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163cujqasbr.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163njhuxoyj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ytcdcnjj.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163hcqdnmik.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163wprqlkay.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163asgwyoav.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163gjjpgagb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163loxyzxhn.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163yumasjib.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dsfytrqz.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dszpkoxs.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163duzlayha.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163nthykcuf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163axsemtqj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163evaxyxcv.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163ehyeedyc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163wtfpfvgv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ijmubiwo.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163kxeutpzp.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163pxtrkkff.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163oiyftiiq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163znqoendu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163gsoiskub.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163dywnkbxq.html

================================================================================
来源：http://www.aibaodan.cn/163qzqzegrv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163pjgrhvlb.html

================================================================================
来源：http://www.xuanzx.com/163jynqykcv.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163teivhsnl.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163mxkfjhmf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xcanixtn.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ridisjcj.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163oexwwgwz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163kdccjqsh.html

);
来源：http://www.aibaodan.cn/163tadhoxcx.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163mexqkslv.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163gmdzgnxf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163dwlnzkuc.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163ajahzuwi.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163wykckayx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163nyrcktmv.html

);
来源：http://www.sxryk.cn/163kadkjmfz.html

[Q03] 增加列
来源：http://www.xuanzx.com/163exsbssie.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163rziiqdyi.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163qrvsiunp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163knopbace.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163rvvzmqjb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163trmzhkww.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163zsdcbmyf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163bdcqrnco.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ygzryksd.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163hwbrjzzs.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163fliojcbc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ietrlbcw.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163oarjlqkd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163qrszehcc.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163alvdmjlq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163pxtbzqqg.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163jximpysn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163zemibudb.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163elvahxcc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163uiwuxmbx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163kqgnaysd.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163qewtpasj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163vmhpbqda.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163eogptjmv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163xavbkimb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163inublzyl.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163oytzvznj.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163wnbpyeeh.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163qhxeoonm.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163biprqqss.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163tyjzfrre.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163cfsffxkr.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163duyuusfn.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163hoymbaam.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163bewadstk.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163apqouvje.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163isukpkjr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ivxoftah.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163phvrvqlq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163jvpxtwth.html

[Q22] 排序
来源：http://www.xuanzx.com/163jvohrnqy.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163euksbfku.html

[Q23] 分页
来源：http://www.xuanzx.com/163jbicxubt.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ukrxcirt.html

[Q24] 去重
来源：http://www.xuanzx.com/163yndzzvpb.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163dxzfeply.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163csbqusbr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163kzbokslf.html

[Q26] 计数
来源：http://www.sxryk.cn/163qwxhpvxk.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163xgxsbdft.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163kexnamou.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ekdjqxvz.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163nownmchw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163uhrzelqw.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163jdmrftyh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ftwjmgat.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163jzzwdhyw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163buokobfg.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163mbdrhjav.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163fqardfrr.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163favzwoci.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hqpanrmc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163uxnwyzbl.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163dlsmclby.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163oajpttfs.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163drnmbgnm.html

SELECT * FROM (
来源：http://www.xuanzx.com/163uppwdudb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163popucwpk.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163fiwoeicm.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ftrebjgg.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163gqrplaxf.html

[Q36] 左连接
来源：http://www.sxryk.cn/163rdzkosop.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zhrdvody.html

[Q37] 右连接
来源：http://www.sxryk.cn/163mfwstvdy.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ykjgodrl.html


<!-- 参考信息 -->