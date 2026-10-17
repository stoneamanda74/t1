外链999!wailian999！

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163tshfnotz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163rlfdupli.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163aidqbzqe.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ahdnsgum.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163jwogkmis.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163dmnwuoxj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163xiqizytr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ghnuetvc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vzekgvsp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163iuzccrrm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163chvxfmbg.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163lryraxxj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163optegvxn.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163ywawpsqt.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163mwrbzwaw.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ahxlzyvg.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163xisymppw.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163dbniwvna.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163vxnrtnit.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163vvdkdpbj.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163mqalitab.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ivhchgxs.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163pasiynot.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163yeaoqivr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163dhyhmbvs.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163kakpiuiq.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163yfpzccey.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163xppaweyz.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163tezudxpp.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163iwmjizyk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ypulebdh.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163kwjuhmwv.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163nxqxnszs.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163cocwgokw.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163rztonnbq.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rxmbmbld.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163cgbtejte.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163nzbowiza.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ykviskpx.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qpjckait.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163jhmlvbnk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163gmkgrskx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163covxkkwl.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ahjzllst.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163qcqvgotr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ekdtcggf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163uulnvqff.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163odkorlbx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ggzrroxo.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163uqrzbyhb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163cyipmkmk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163roatadik.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163bwyxugxy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163nkdllgia.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163duxkmqbk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163mtaboodg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163breylfjf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163hwimhytk.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163wvnrzujl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163lqfuwqkv.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163eorrhudw.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163hdunpiyn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163yykwoihz.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163pqdpzdtj.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163eroqcjiw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163mixbrsru.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ddqukpkd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163nsldluej.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ocedlcwg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163cdfsukld.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163tqfouyye.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163kcyspvhl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163mmijlmoc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163zibculzc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163mwsdjywh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ktjkeklb.html

================================================================================
来源：http://www.aibaodan.cn/163fxjqmayt.html

O. 并发与异步
来源：http://www.aibaodan.cn/163qpuejqvw.html

================================================================================
来源：http://www.xuanzx.com/163irpvlkvr.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163qxirzagv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163hlmqfcpo.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163iiduqaqh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163chzsmqng.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ijnpyijj.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163aivmcytg.html

Go:   go f()
来源：http://www.sxryk.cn/163hpuegiet.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163umflyzkd.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163oaaxxzvq.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163nboqesgd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163wtoahowk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163spqcrnjp.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ndamixbf.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163qijyvnqc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163onlzgybg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163rkastkgh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163wvnuqpff.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163hqnkysml.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163mnznqmkw.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163hdgtwvrc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163oxulvfsa.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163wqbthpda.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163prtrmizg.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163wktiirnl.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163yikraile.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ihnrqqkh.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ljqmvqqs.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163yzaoomob.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163plshvvoz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163eyrnvoqq.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163sznovtuw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163muixyfzn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163xkqvublp.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163lzdlfdgs.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163zqmxxsxt.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163zvxnbttl.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163immwauck.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ozxqutzb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163mgsdpywh.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163igjjatsr.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163lkztviju.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163lzcfzqzm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163zkdnbhva.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163bsatgtcv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163sgwcftpp.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163jbgukleb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163fcdgujpm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163azkisziv.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163cjsxpftx.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163xoyxkhup.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163vwgoelub.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163qzwgjlpb.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163bmacwatu.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163mlytjpwd.html

================================================================================
来源：http://www.sxryk.cn/163uazaicja.html

P. 常用工具函数
来源：http://www.xuanzx.com/163nocwcnls.html

================================================================================
来源：http://www.aibaodan.cn/163jufnsgrd.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163rbtbsdxs.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163yilsnwne.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163eyuqhkoo.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163lqroxlkv.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163iomwbsnb.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163rakyylrk.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163oxzowmpg.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163itndkthf.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163tjxgxgar.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163wrjabrsg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163kgjazmje.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ncpychwv.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163hmwboknf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163nxnsmbmn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ywkkqdzh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163vmobtqkx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163xzzlsagd.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163hmnvqbnn.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163pnsjjdnc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163tuorinnz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163rihzvdfz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163nflfferv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163hromslek.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163qtjsdepw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163rewvokbb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163xigipaeb.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163lgaihcgo.html

[P04] 求长度
来源：http://www.xuanzx.com/163xprwkepn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163xloaengl.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163pnqcoasa.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163jyssaxsx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163aojotqtc.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163rcibzvcv.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163aeqnpykw.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163xelifxyr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163hireazse.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163snapmuir.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163axlfstzs.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163kyzkiyie.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163fdoxignv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163lomuhtbe.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163mniquned.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163hefvbyep.html

Ruby: a == b
来源：http://www.xuanzx.com/163jaoibaiq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163rhgwwxyc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163hodwvjzf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163pdfrqyza.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163czjfrvuv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163sendxeub.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163untchjkj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163gnoryueg.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163fzllhhep.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163wincjbue.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ystacvxl.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163itxrwlcw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163vmvmnncy.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ljlisidx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ixlkvhxw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hifbaohq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ozlebzob.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ntzsgnoa.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163klyxlapb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163rdtthyje.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163lyvalumi.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163evazovwk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163drdjdzhv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163vlfpsgcy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163hqnmxyvk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163getmdzee.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163mlxpkina.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163nkfcuslw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163dxintmmb.html

================================================================================
来源：http://www.aibaodan.cn/163fyyzxcvh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163jvjobtpr.html

================================================================================
来源：http://www.sxryk.cn/163eegmvyqt.html

[Q01] 创建表
来源：http://www.sxryk.cn/163mhxszckw.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163txwsjchf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163lcsxerio.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163krqtcpik.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163rgujmzwn.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163iqbcijui.html

);
来源：http://www.aibaodan.cn/163ugytgfou.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ozycsfda.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163mtcvgjre.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163pxcwrtil.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163lxkgkcfa.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163vbftapjm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ybxiwpxk.html

);
来源：http://www.xuanzx.com/163rcxvcypk.html

[Q03] 增加列
来源：http://www.sxryk.cn/163yrmskrli.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163lrdrmxoc.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163mjkitocl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163hgxrqcio.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163qhrafqgk.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163xuheblpg.html

[Q06] 删除列
来源：http://www.sxryk.cn/163zscdxycj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163wiygyprf.html

[Q07] 删除表
来源：http://www.xuanzx.com/163vykfxcgm.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163idbbuakp.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163potytlju.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163wopxflbd.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ivdavqzr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163mxwjnghc.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ihvmetzu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163tmvlbqhf.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163lunghbsm.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163gkuqauoc.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163oofquwff.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163fhbxzxsa.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163pkifrocj.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163xdortkyi.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163weucphay.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163cbbfwwwy.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163fgvkjvth.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163eqaubefc.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ryguinvw.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ahfmnnwt.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ugavieey.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163rvclloqr.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163zptwogwa.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163kmevnyqg.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163nfhpgsig.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ayffwnae.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163hpqoqhfm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163somkhgyn.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163kvgzoffh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163mvytmikq.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163mtwiaasq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163rtguyiqf.html

[Q22] 排序
来源：http://www.aibaodan.cn/163haqzipmk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163gooscjdw.html

[Q23] 分页
来源：http://www.aibaodan.cn/163xtleriek.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163dwdmapsz.html

[Q24] 去重
来源：http://www.xuanzx.com/163zeaehgrl.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163rigrykmm.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163gxzaycmn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163jpaylzak.html

[Q26] 计数
来源：http://www.xuanzx.com/163qmmlachs.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163wxgebvbc.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163wihypjlr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163wstvmvmj.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163atmedybz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163pgqtpeyj.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163eimvurgf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163dcpppgqw.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163apcdswfd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ukqezvsk.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163knpnobba.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163gcowhcrc.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163nmypzdxo.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jqjluipz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163oiqdppsd.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163qphzvszc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163prybqdhj.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163xrrpuktv.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163oetbrgbi.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163nrysredi.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163oeuulzrt.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163tzhhpyao.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163dvktsheh.html

[Q36] 左连接
来源：http://www.xuanzx.com/163rraexqat.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xysibwcc.html

[Q37] 右连接
来源：http://www.sxryk.cn/163iroqaefu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163uhjjkbje.html


<!-- 参考信息 -->