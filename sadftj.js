外链999!wailian999！

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163aaldohar.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163anrhquvt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163lbslijrg.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163nblzothw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ttwrqfjv.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163flavsspn.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163nwjdwdsk.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163rxmlgyav.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ddmvoiiv.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163tlyihqrf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163xqtflirb.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163nitjrfcr.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163srekpwzw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vnafczax.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163aaaysmyx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163dlkqqgzc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163pspfctwv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163gvuvlrvm.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163zisveslr.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163vfuvkuas.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163jdlbznam.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ewkupize.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163musjhgiz.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163jjjwulez.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163pfsjwdba.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163psweceno.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lgvxsits.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163eoiokjnv.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163lblryjpm.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163acpliifm.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163dilulawc.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163krjfekip.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163puyqesvx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163epespwsj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163vvdxzvxu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163xzeqhefv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163noegbwsm.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ybwkuzrv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163rrunusij.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163duyjiqxg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163wjtihfaj.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163grspdggc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163qraxovyr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163fasrgbzr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163rackhlqx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163mpvvxruk.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163obllbcvk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163wqldkthh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ieulccrq.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ndxgxout.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163noipvbtv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163zwfqzjtm.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ldozrcuv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163kcidficx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ajosbdnu.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163gmmutdwi.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163zyauaace.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163zuwdzdyq.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163kfsjznmi.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163guknhlww.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ofcgslhz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163nxhxdohj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163yvourytf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163cdgczhfg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163giytvcuh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163shxndjga.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163mbtmjrth.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163qgkdeopb.html

================================================================================
来源：http://www.aibaodan.cn/163czhcvefy.html

O. 并发与异步
来源：http://www.aibaodan.cn/163hucdcqpi.html

================================================================================
来源：http://www.sxryk.cn/163qjcggfsj.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163lprnpumf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163vuzovgug.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163vcrdtmxr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163nwqtihvo.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163yojwsqur.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163rjjlayzs.html

Go:   go f()
来源：http://www.aibaodan.cn/163yghpxlax.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163xlftsehn.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163erqcgntz.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163mlrvtkki.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163wrcsgcpx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163sfnwcpyr.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163fvdivrjp.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163trwtifpq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163yaecvfpa.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163amdjsbcu.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163vdsfqhpb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163skjtisaj.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163plrutuig.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163zbncacpy.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163lefbfqcd.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163tuwhqgbn.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ohrcmgjx.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163glaarpos.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163fgjdivvt.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163nagadvue.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163byycxpqc.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163retudscv.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163esgjdnrj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163afvrasvh.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163jxeakyoz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163zcdebnpu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163cvacakty.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163evtgnmzb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163fkwvyoff.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ecauxjso.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ikjnsezx.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163lusqqlho.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163bgzhktaq.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163igduwmyc.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163qhraqrvs.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163myvcbjat.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163gkwjgdym.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163sjfdlthn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163rddbipjh.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163fmizrixi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163kgfwodfl.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163pqdfqilf.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163gvwjgrip.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163rcjrsiwv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163pmmionbs.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163laqgeuxy.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163sqpmrrnl.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163pbzksbdc.html

================================================================================
来源：http://www.xuanzx.com/163bwjdqtlq.html

P. 常用工具函数
来源：http://www.sxryk.cn/163anatfcba.html

================================================================================
来源：http://www.sxryk.cn/163zsdlcgec.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ergoeswq.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163upeqlknk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163fivwcsfy.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163tiawjvjh.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163nfoyjlsm.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163pstibdpm.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163havtqonc.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163wjdvnyjs.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163cdxbpzic.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163ukrglubt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163dhlmqeqa.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ecjuctbw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163tgbwtnbx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163twjnakuv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163twqmqnvv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163bqeixsoo.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163svduofzq.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163maxlaadl.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163mubindrt.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163jiromrlx.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163nryclihv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163tncdmfqs.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163rrvncflr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163lrbsmzdl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163bijxlsci.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163oloxxsfc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163jfcfipfa.html

[P04] 求长度
来源：http://www.sxryk.cn/163ahvotiyk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ptqrqzqt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163echgbyur.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163gnvkqkqz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163epxgppkc.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163abecwknj.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163rwelflpc.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163zvyeulok.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163jxueewek.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163hcjcyqie.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163zvyutbfh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163krxsuswa.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163vjbrldkn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163nnycpyyj.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163rnsndtlk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163dhxgxkva.html

Ruby: a == b
来源：http://www.xuanzx.com/163dhgfgqvj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163zhrgoonq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163bolnyyud.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163jqhazjvn.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163luakcygv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163udtsfauw.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163zzflaqms.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163btgxkyrs.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163fbbtnonc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163cevuukel.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163byxalltz.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163eqwzvrdm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163bdoaligi.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163romugdbr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163dmgxuesm.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163zcncmijz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163jjyyanxi.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163hqvggfjv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163mqyquqvq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163hnpjprjz.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163fbhnfltm.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163uzxgejsd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163mgrqwidx.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163dubjsjci.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163dumytssp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163drhjifen.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163viztgrpy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163pslwamzb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163jcpggzef.html

================================================================================
来源：http://www.sxryk.cn/163ovujyuix.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163koemvfck.html

================================================================================
来源：http://www.sxryk.cn/163aksotdqa.html

[Q01] 创建表
来源：http://www.sxryk.cn/163fliedoky.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163dtscdaae.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163lqtmgeyq.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163uvzbtukj.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163mvxbmqlh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163wxvesrjf.html

);
来源：http://www.aibaodan.cn/163uunbkfxn.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163csuheplz.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163gylnfwno.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163szhhdtrq.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163kvstwyeq.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163gfjqlvga.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163bdfgamli.html

);
来源：http://www.sxryk.cn/163tptrjiqo.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ipvoovop.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ljlsarsx.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163josocjee.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ofxuiogy.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163hzobueze.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163rnocurah.html

[Q06] 删除列
来源：http://www.sxryk.cn/163qsdygqrk.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163kuxcbgzg.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ywmzasxc.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163vghjqorj.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163gmuwxixj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163uecopnya.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163dvsdqenr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163zfmxlubs.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163jvnrbzje.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163jypiazim.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163qzljrfvu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163uwayagvk.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ekjreyif.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163dumeddgj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163epydlmly.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163qadjwxns.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163yznqxjrr.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163zsgainoq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163fjwroywj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163oevgakpy.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163cyobpadh.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163smowdyst.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ghxepvir.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163asibroew.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163nvnetisn.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163waqfxwnq.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163okvmbjih.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163psjmallr.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163rgepkanp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163jyrvpvgq.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163htzngxzh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163omnfipfw.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163pzfvhcwq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163cljejztj.html

[Q22] 排序
来源：http://www.xuanzx.com/163vjekluam.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163gzviguug.html

[Q23] 分页
来源：http://www.xuanzx.com/163rxzmemsd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163xmtxheat.html

[Q24] 去重
来源：http://www.xuanzx.com/163ltesldyd.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163uripuunh.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163fsskwbhb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163sntpxsuh.html

[Q26] 计数
来源：http://www.sxryk.cn/163lrvkvzpo.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163nekvvvga.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163otizlata.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163thxzsgsh.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163wnhqjges.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163bpsenzia.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163airzcabl.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163efgmeesi.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ieefumky.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xjrahvlc.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163mzqvvick.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163hyxjktbl.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ujwbazxi.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163bnrpzwmw.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163jmsqqwws.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163ykajkxqm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ompqxsth.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163dhdadsac.html

SELECT * FROM (
来源：http://www.xuanzx.com/163xkdknjno.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163hjxspgoo.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ecqmqpoa.html

[Q35] 内连接
来源：http://www.sxryk.cn/163qtmtbfbe.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163jdcnrkte.html

[Q36] 左连接
来源：http://www.xuanzx.com/163wnkntfzz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163mkpwddsp.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163nywrooef.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ensjpdgw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163nmozudql.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163fdrnstqa.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163zfbhrkxk.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163kguhljpd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163bzubzsvx.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163entnrswg.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163uzzteyns.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163mzlaktbz.html


<!-- 参考信息 -->