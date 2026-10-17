外链999!wailian999！

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163gjokbapt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163nodphmdz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ncixlpdg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163smcmozit.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163nwktwivl.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ptktzutb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ovsmeojj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163xsyokbot.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ghxsjsqy.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163dtyptoys.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163hirherxf.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163hmftffsq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163qcwdafov.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163xowuuxqx.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163iloxmajx.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163sffzpzpm.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cbvxyvcv.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163gawofjgm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163jpenglhj.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163sjwniaqe.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163gxktgjbc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tdokwnby.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163sbcfizel.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163fixlgsbh.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163oyurvjtb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163fjcmcizu.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163enazfbmu.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163ngzaezdl.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ipceltuc.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163wihciqga.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163tezdnisj.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163aylnvraj.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163zqlowleo.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163emlnnttd.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163yrryzmpy.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163lygwmass.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163chksbzse.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jcrcohxt.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163rlilebxp.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163rxqpbphk.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163hohazozw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163dfurdfia.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163lhqyvpyp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163jcubdqjp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163itmggmdb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163eickaelf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ipfdjhwp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163cimouszb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163xxuyrlde.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163rphwlzld.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163stgftnkd.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163gxffykaf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163xbutcjxn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163ldhknlah.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ycfywhsf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163iwozbxly.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ffvyxuue.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ospabkli.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163pajtlesq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ltmcmzev.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163bpdzlbtg.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163dgdakwch.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163sgniouom.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163mpdjwmer.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ujsjvcjr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163vlmyutkt.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163jlmshvim.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163utdcrpcp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163yjcttjbs.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163gvgkqhal.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163pknutctv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163uummadbb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163kecreaiz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163eemdyibx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163etjxzsib.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163eodvfagt.html

================================================================================
来源：http://www.aibaodan.cn/163pwexefjv.html

O. 并发与异步
来源：http://www.aibaodan.cn/163opltkepj.html

================================================================================
来源：http://www.sxryk.cn/163hitzahdu.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ijzxmggk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163kqucjozf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163yyzfecjt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163fmhjxpvr.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163lfqharyj.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163xvrpsftp.html

Go:   go f()
来源：http://www.aibaodan.cn/163elxllwts.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163vrynulth.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163agcgplal.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163esleszmc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163upymyanw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163tmpdtwsd.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163voypimdi.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163gwqslkwx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ttqqrfqj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163ffofumhc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163crpfumau.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163aqmwsfuy.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163gukgsljt.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163lzfnkhfj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163bvjatclb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163mskorelm.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163dzujhkmi.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163srcnfegw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163elsswmfx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ivwdxufc.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163qznrntxl.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163yuzuotmq.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163hpgpwthm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163jbjlmkgf.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163jsgjdxsb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163bsvuffto.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163zjxjgwex.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163gbnxwdsr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163bclgztzk.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163khnhpdkp.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163xotoelew.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163tyustdrf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163kjktyitj.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qddcxtgh.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ivjzesja.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163spkkmbxv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163effperth.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163lpuozefl.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163xtfozbth.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163vgfvlpae.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163gnezbqry.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163hcjlnawt.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163nyfaemgh.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163tggutvpp.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163yxamjcjw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163uqejmdxp.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163icoiasnl.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163ktvpmhor.html

================================================================================
来源：http://www.aibaodan.cn/163tqbsusie.html

P. 常用工具函数
来源：http://www.sxryk.cn/163hrcywawf.html

================================================================================
来源：http://www.sxryk.cn/163ezaiuvze.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ncffbeak.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163zgtkhufl.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163wwtgcufz.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163mqvxirgv.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163dpjwwlay.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163xwxbnrhn.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163mqdcmiqg.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163afcgcwtg.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163guvdjsej.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163eumjuytr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163kcoqiiyx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163gazpptgp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163yelzajyy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163fdaagkne.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163zjtdvqou.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163yneftkoh.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163lojylajo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163djemmwiw.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163wkmynsxt.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163lfgucmva.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163fvxlhyfp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163bwuidbaw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163tbegyttn.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163cfhuynyn.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163hgwensdz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163hssxheex.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163bfagergh.html

[P04] 求长度
来源：http://www.xuanzx.com/163cybmyejp.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163aigoyqxi.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163suqwhbue.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163gieajjsz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163mpibaidv.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163gksqrviv.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163wmevqwoy.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163mqtpfjwb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163xdasbuec.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ydwmnavz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163dinaslyc.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163mmrrlovf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163rruxgcje.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163icbndprd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163mpzxfuiv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163noxslfvf.html

Ruby: a == b
来源：http://www.aibaodan.cn/163dmjyxldb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163kesclfxt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163cwvnxhmv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163addtfrgg.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163qqnitupg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163oxwbcqme.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163hqoepwvs.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163fxzbhjsx.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163gtrgylpt.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163sekssfwd.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163abpiyhbz.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163jocaccro.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163pejrjpkc.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163pdukvpvz.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qnutvlio.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163rdgzvwsj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163sxvimroi.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163smcfmfyt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163sqiuboxi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163ejnzezpq.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163fcpbcypb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163gaytnvpt.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163acnjyeri.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163mgfvutzq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163paeynbah.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163enueroic.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163nedfxxyy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ybipyjji.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163smhmqqpi.html

================================================================================
来源：http://www.xuanzx.com/163kpduonyg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163fselyywr.html

================================================================================
来源：http://www.sxryk.cn/163qrqdnbdf.html

[Q01] 创建表
来源：http://www.sxryk.cn/163swhknzlq.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163tnipupow.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163brztkigz.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163kkajllva.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163hyruizbf.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163oodwunhr.html

);
来源：http://www.aibaodan.cn/163bmgvtzbe.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ehctpstg.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163cdqlksdd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163kfnnhsdn.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163ayzbzrea.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163fqgfyksj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163fdrayuio.html

);
来源：http://www.aibaodan.cn/163lckcjyob.html

[Q03] 增加列
来源：http://www.sxryk.cn/163cauagpmd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163mnrlsnrf.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163reppjgrb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163owsmnixn.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ulwegbcy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163vkawvfee.html

[Q06] 删除列
来源：http://www.sxryk.cn/163aggerrwd.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163rmlxuhry.html

[Q07] 删除表
来源：http://www.sxryk.cn/163oqfnannk.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ekoaeyup.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163mpcbsbxp.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163vlbbsiow.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ffohnhun.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163sayeyjwz.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ubtvzmja.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ozfgdcus.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163wuhrlvpy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163wuegyedd.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163pxkvhqrh.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163upbhvbvg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ugyvavlc.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163skuglbxv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ehmprigj.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163gahcvite.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163uwyzebeb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163rphjvido.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163prsxwdui.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163gmvfflka.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163czpoptns.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163hbdkufsc.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163cuvckjhr.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163cpdpimqr.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163eagrsqel.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163dsaynxgc.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163lbvwqzin.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163yhjxvbyx.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ulgootdq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163oqyfwhrd.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163jcbsktee.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163qqoctpfq.html

[Q22] 排序
来源：http://www.sxryk.cn/163dvycrilk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163gocxowvn.html

[Q23] 分页
来源：http://www.sxryk.cn/163koyvtmjt.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163zahahild.html

[Q24] 去重
来源：http://www.aibaodan.cn/163njkidszl.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163jdsvjyaa.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163kymuojlq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163voyhmbno.html

[Q26] 计数
来源：http://www.sxryk.cn/163rxripucz.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163tauxzbxc.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163gnzlaoiq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163aajecwkx.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163fydbbyaj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163dndwrkoa.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163dlaupism.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163yoxmrjmf.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163zgezqwkx.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mbyqmblc.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163dscvwzfy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163bpbnrlsa.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163whgarmva.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ebduilsg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163nwikvrvy.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163kkmgexhz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163hcfldnbf.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163rmxjhscp.html

SELECT * FROM (
来源：http://www.xuanzx.com/163fpcsbgra.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163yukfbqjh.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163uzwfiplt.html

[Q35] 内连接
来源：http://www.sxryk.cn/163dqtahcuj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163hivgeyuc.html

[Q36] 左连接
来源：http://www.xuanzx.com/163gnvdqaeg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jjrhjpbg.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ycwmhrbr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163kdpnxdwk.html


<!-- 参考信息 -->