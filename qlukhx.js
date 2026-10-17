外链999!wailian999！

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163gchzboal.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163owdzimoi.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163avayfbtm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163jftfapqa.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163upfmebtc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163dmgaspri.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163rbjcpwno.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163lwjwfnce.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163kegakutg.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163rnvefmul.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163fvdauqjp.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163elbzoqbv.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ikgnrksx.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163guvpngpl.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wglrcvsk.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qvchklzp.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163dowjjprl.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163sbxfwgin.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163rzrzijlm.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163lohllndf.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163kgggguhu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163zqiggsie.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163grpqjmgu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163sjiaefnt.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ototvhsb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163uogvpfcb.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163qieiaxfr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163uhuunymr.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163yqyxarjv.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ebablihv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163cqbztyur.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163jskkpnjg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163ffatgvzv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163teqtbjgo.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163tdhqvjdy.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163aspyladl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163fqovojiz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163vgsgbozk.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163lkpgvowm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163qontoakn.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163douapvqm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zmknxxdk.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163hkvnotnh.html

Java: // 手写递归
来源：http://www.sxryk.cn/163tpjuxipz.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163qrqmmryt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163yinyhvgg.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163pvyhmoqe.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163vystonwm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163wcodebey.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163jifgpcto.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163gijazgqm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163coklykjj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163vizfptog.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163aammsnnj.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163clkehmyt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163olimoybd.html

================================================================================
来源：http://www.sxryk.cn/163bzoctqii.html

O. 并发与异步
来源：http://www.xuanzx.com/163rsjtodnq.html

================================================================================
来源：http://www.xuanzx.com/163svshkslg.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163akwwcmww.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163zbrdfyii.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163tsfgetne.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163faqhnyyy.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ipurvmsd.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163cgdihjsp.html

Go:   go f()
来源：http://www.xuanzx.com/163yvruzazm.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163zeptjomx.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163thhaoezc.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163iaxbocyw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163enrbycxp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163oryxkqrg.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163tsnfaazy.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163sebirgyf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163zoamaiml.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163kbkbyxzg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163niejxbxv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163cnvmjbqb.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163iltvylcs.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163hpfomtko.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163gzhxyucp.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163bbuoutmu.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163afuptrfz.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163wqccjegf.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163teqimmma.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163emmmqhiq.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163zdimnwex.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163sroeleop.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163hgpyidfw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163dnceguao.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163vqmzpphc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163aabtxkvx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163aarlrqeh.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163ayqkbxzv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163raaicvwc.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163ulmythdv.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163cotusuwo.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163abblgkse.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163baatkljg.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ypllpmrh.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mqhcfpah.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163rkgnsbzz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163uefmlsab.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163vmbrtzpn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163fzxybona.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163jiddhjrb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163wjltztyb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163pjtcggrc.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163oyjxsyzm.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163wlqoikgf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ixbhdgea.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163fxugvyme.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163lsqaxykl.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163muezyztl.html

================================================================================
来源：http://www.aibaodan.cn/163reuflguk.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163skukouhi.html

================================================================================
来源：http://www.sxryk.cn/163mmwnwmsq.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163tgpsjntu.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163edgsvrws.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163dwjfhazi.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163teyjwetf.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ddvgtgvj.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163caabogoo.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163pfmmrhuf.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163fsternch.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163koekznuj.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163fpugblgb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163btmtumpk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163cqwvvefh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163lrutvkqv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163qmmqjmvl.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163mekpiori.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163osxekhdy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ngnwtgpi.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ohccacta.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163gfgjnqmp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163sezlnlxb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163dmvjhrfd.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163esmlwlvp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jptwbqmt.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163abzjxvxx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163glwhwvbf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163brpcebrz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163orttdarj.html

[P04] 求长度
来源：http://www.xuanzx.com/163xmohfsnz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163gtbqhkwz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163opgmvzpv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163nlwdrpcg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163yngutzsv.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163fukgzjrx.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163kjjwxity.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163mhufdcve.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163wglyjipz.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163lgpmfwum.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163fugrrqic.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163gqwtqrtc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163gfvgpzwd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ytokqeee.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163hypdpktz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163joikvrke.html

Ruby: a == b
来源：http://www.sxryk.cn/163hvkdsslt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163hayvzeti.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163fagcacbm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163uhdcthnw.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163helqvrhw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163akuuoeut.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163egemzdno.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163gkhwgcfa.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163llreagxq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ibtrskxz.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163nqodkfvd.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163wmrhxuhm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163qofggtww.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163dkufrgsu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163auvpatie.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163aazgmjaw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163iruluyof.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163prarxejd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163hlmpumbg.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163jwvcswqw.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163pwxzwums.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163xppfrzwv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163vbpygljl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163qfvurlos.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163tpxjgswh.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163jvoweixa.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163eliomqdr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163pkwkaune.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ngtaqjqi.html

================================================================================
来源：http://www.xuanzx.com/163afqazcml.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163wszuqrba.html

================================================================================
来源：http://www.aibaodan.cn/163ogcqxmku.html

[Q01] 创建表
来源：http://www.sxryk.cn/163smdejyiv.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163bhhogcdm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163bwbehjmb.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163mfqjrgls.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163ckpjhahk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ciapqdfx.html

);
来源：http://www.aibaodan.cn/163stywohys.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163dwiapihf.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163kxjeqavt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163awneqfsp.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163zxogyqvu.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163zfakzwtj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163orwnmdty.html

);
来源：http://www.aibaodan.cn/163lxwowacn.html

[Q03] 增加列
来源：http://www.xuanzx.com/163fcuowrjr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163nsqjpwze.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163aufcbftm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163xdwxprjb.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163crnzdpxw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ethqkvvh.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163wccyvixu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163slnacrnm.html

[Q07] 删除表
来源：http://www.xuanzx.com/163gxcthnve.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163jtndaqfz.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163hishajtx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163jgdgylxu.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163bhhpquko.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163cmtyhwcw.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163dqdeqwom.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ojycjdlt.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163dndutokq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163eowrkmlx.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163xspscxog.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163btckhoks.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ggewiddl.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163dzzcifiv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163obqxaasv.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163eweoqhaz.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163wkuotabf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163nlhxhyea.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163agyerjxp.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163pzomkwfp.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163vjupsbkn.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163eidbayua.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ajbhvzvd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163nbdortwr.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163hutaykla.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163cgqfpfll.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ztparihv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163stxcmnuv.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163fozxetvz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163gzydmfpc.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163nqehiark.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163dnafesdg.html

[Q22] 排序
来源：http://www.xuanzx.com/163zlehpqug.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ojfvcnys.html

[Q23] 分页
来源：http://www.xuanzx.com/163chkcccme.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163jbsidzjg.html

[Q24] 去重
来源：http://www.sxryk.cn/163rjkthbwo.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163sqmhvwaw.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163sasecwxy.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163mppqomhn.html

[Q26] 计数
来源：http://www.sxryk.cn/163tvanzqrp.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163zfkuyfyi.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163orfkqoie.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163yxhrxohw.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163tymzyybu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163ryivggbh.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163znwobbgn.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163lxtisjeg.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163knijouhd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hsuwaucg.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163sjqmvpgx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163cbajhamf.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163obqqyejp.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jcgprfcv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163askoonxp.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163aocggils.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163fgaleabg.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163fbqlkegl.html

SELECT * FROM (
来源：http://www.xuanzx.com/163lifiyysu.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163xrwajyjc.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163dyvgmshr.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163nwnfsnjr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163xdaculpw.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163fbbsyqfs.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163wkztsebg.html

[Q37] 右连接
来源：http://www.xuanzx.com/163chrngavu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163lepornkz.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163tpvymxew.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163zombukty.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163dyjazkob.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163eeiptgdg.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163tiunurvn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163mrnuvtzy.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163zyaocxii.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163uplacsob.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163gceoxqet.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163lgmhwjfn.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ghhijglx.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163qcqhtyxw.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163khpswdze.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163lridymbn.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163bdnuwouc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163znfwmmwv.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163rlvprgeo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163jxjmlots.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163tzxaarfg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163alvomclj.html


<!-- 参考信息 -->