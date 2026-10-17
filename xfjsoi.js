外链999!wailian999！

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163bpzfrxzt.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163raaumhbj.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163bkxbbskz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163cqkouwmp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163hjqyowdt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163getmcaqx.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163vichplbn.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163vbhhqncz.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163qumlqbsh.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163kbsscizs.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163qbjjhqxl.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163rvijrrut.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163yxpoyshv.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163otepgmqc.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zcshewsl.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ovknbatt.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163zyrkyivp.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163wrfswvpw.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163zhhqigvx.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163gbpength.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ygahzbzk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163txugiwuc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163bgexxxjy.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163chiqbhhk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163jjudqtvw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163eycnrdsj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163tjzkqfgp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163qpcrwkax.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163jdgmujnr.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163wzimvzzg.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163jmgstjid.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163xawuaqki.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163gqvkdngy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163pnwhpueh.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163xdnwxilt.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163lpguokrj.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163zzqnlzdn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163cjmnktdu.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163fgpxvtkb.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163syuexmyz.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163dohyrvca.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163opdosmzj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163pakfycut.html

Java: // 手写递归
来源：http://www.sxryk.cn/163xsqdwtju.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163zrbeywib.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163gxpfcokm.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163nosnkqdt.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163nxrmgpzj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163rqpfzjhs.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163hhxursai.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xttnuhts.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163bgusvwsu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163qozvdwfw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163cskizdrj.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163kovbpmqc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163epjzhzte.html

================================================================================
来源：http://www.sxryk.cn/163hycwwahg.html

O. 并发与异步
来源：http://www.xuanzx.com/163nrahojcb.html

================================================================================
来源：http://www.aibaodan.cn/163pthyoovw.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163wdxtqccp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163krgukpph.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163vfaixrin.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163uugcarep.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163aivtfowc.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163fcjalaph.html

Go:   go f()
来源：http://www.sxryk.cn/163rifjrrsw.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163oafmgouc.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163aibeokzu.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163mhweihei.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163igyoyuub.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163wvrkdttj.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hlnzpnqr.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mxaodqnd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163jbshydyn.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163dojuhqod.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163xjehxtsf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ercifqzs.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163igrrzrig.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163nmpdebtm.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163hslmtong.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ubwhmknl.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163xccjjxrz.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163khubwnqk.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163zokteufo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ogausbik.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163eyhegpid.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163aqjhzmyc.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163vebfbqly.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163bhtshsqo.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163zbkdgjwz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163wypqrfxw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ufjhehsj.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163hvqnqncd.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163jryznleu.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163ywvzixbd.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163esionhtn.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163dirhlnzv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ywjoyaxc.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163nvbkdzpy.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163mmzjxpil.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163lojattpn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163awiqgnuf.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163ixsoxngd.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163hohvjlcg.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163etcqagdy.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163dzunuetv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ilgeowun.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163mbubagwl.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163iorcnpbs.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163lrzcfgho.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163vdthnynm.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163wtwhsbvo.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ttiytsfp.html

================================================================================
来源：http://www.aibaodan.cn/163bnbmxocr.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163gykajdla.html

================================================================================
来源：http://www.sxryk.cn/163kwaefihe.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ucjepags.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ohbtjsnh.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163fjitzxdd.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163cplspefa.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zblesywq.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163qarhwqux.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163znqzejle.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163vnrinwyd.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163afzkrbih.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163lhihgpej.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163rxatdaue.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163pwtgdxye.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163pwdnbhbt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163itqyomwy.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163xijfolrj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163gkrlyduf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163opsgtgke.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ijttyvbq.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163vehltjxm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163hzgoxmzb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163mjajaufm.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kzlwhohz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xgsummmw.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ttxzjuop.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163zrcfgwvl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163yldvgvrv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163qgzuixur.html

[P04] 求长度
来源：http://www.aibaodan.cn/163uxosvfwm.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163yschpihe.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ssurjpoa.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163zzpndwod.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163hrsxdbsq.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163lhlxmqsy.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163yncsttva.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163qhrmmubi.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163oilsndzc.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163pnbwdjui.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163cypwideh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163cqglkkhl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163eukohqqj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ictcfnrp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163pquuzvtb.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163zvurwqwd.html

Ruby: a == b
来源：http://www.aibaodan.cn/163tiymvgcg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163hzdycppq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163eywhkmmj.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163kjrpewzq.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163whlyljyh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163iyotywif.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163jbhoextf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163cvdiqahc.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163lohppbjl.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163vpxuyyvx.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163abrnjumj.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ifftyifc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163vfixcjin.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163smomdlsb.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hmlyabfi.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bzampakd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163skokjoay.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163yjuqwdrt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163rvqtwtdk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163lxkgalen.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163cjgmcroq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163pjegkqvo.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163gzrgngin.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163kzcdwmvq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163zmwnvwsl.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163gndijywc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163mjgjoasr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163vwjlwhxz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163hwcjlnbe.html

================================================================================
来源：http://www.xuanzx.com/163jsdecykz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163kdcxlinx.html

================================================================================
来源：http://www.sxryk.cn/163qyyeniye.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163dnvrczen.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163rbecgrbv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163axmdecne.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163tzxepvvt.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163bjcaiyxo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ygkcvjpe.html

);
来源：http://www.aibaodan.cn/163nhdimtda.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163lznoipxm.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163fzrzinxi.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163htmliyfg.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163usvybyrr.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163vniwrnxu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163oghvsdzc.html

);
来源：http://www.xuanzx.com/163owhssdfm.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ccvocnpz.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163cjwpsnrd.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ncipxbpp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163knkimkqe.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163lfhfrhzj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163zpsdnqsl.html

[Q06] 删除列
来源：http://www.sxryk.cn/163zzwjmtwl.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163eukgbdam.html

[Q07] 删除表
来源：http://www.sxryk.cn/163hczomjsy.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163yuqlssux.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163iirxmeof.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163edpjhoxs.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163sczfmtgo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163cbbodahe.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163euvlsuuk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163xsdipzkr.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163iprvgkat.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163zmgbkwhi.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163fdpclsvv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163cwmsatox.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163qlvdyzop.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163noldcbdf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163bfotztnt.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163rkqyxpak.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163ypiseisg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ysxcntvu.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ydwqsdzp.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ylesmnzw.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163vgmoepxb.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163avurpiru.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163jlrwoaxj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163kcmlamdz.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163eweulbtj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163olooorxs.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163oifbresz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163bnqojctn.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163epoxqviz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163tuttwkmc.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163zyikdbfl.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163wvhiuatc.html

[Q22] 排序
来源：http://www.aibaodan.cn/163mdnwidpb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163umluvbmc.html

[Q23] 分页
来源：http://www.sxryk.cn/163zvhsthub.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163codbopvc.html

[Q24] 去重
来源：http://www.aibaodan.cn/163qwmamlii.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163dzecqchc.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163zelcteaw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163qqimbnvv.html

[Q26] 计数
来源：http://www.sxryk.cn/163miazqnui.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163nshmjcdc.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163wgjpxroo.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163kynqkagk.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163vttwsogy.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163fauhczro.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163xuxxalfc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163rzifnecz.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163karsxwjf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163hwqgbloc.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163ynokqrll.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163heidsopg.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163pkqszohi.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vgreuvdx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163xsxsxjks.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163danefdnw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163msvasmcb.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163lukbkkke.html

SELECT * FROM (
来源：http://www.xuanzx.com/163xrbbbiet.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163yreapuyp.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163xxzcekev.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163wjmjrttf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xcttsvgd.html

[Q36] 左连接
来源：http://www.xuanzx.com/163bojqgcpl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ryumhpex.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ixcilcuu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163fxdokvdq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163impisuux.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163wgnxsdvw.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163vcztkrpa.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163jtwdttvw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ezumzlpc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163qdlykoxi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163iibbbgfx.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ysvevqim.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163dsprfijo.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163tpoagwqu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163annceupb.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163jgsdmmzq.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163bgqymfdf.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163zifhguiq.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163sasaopfd.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163hxejtjbp.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163gesimtrz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163evjoyajd.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163mkcflcvt.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163bwdytxfp.html


<!-- 参考信息 -->