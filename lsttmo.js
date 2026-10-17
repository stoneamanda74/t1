外链999!wailian999！

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163juloszsu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163zsuhudhq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ncrbugoi.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ijmdeqmx.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163vqjsifsz.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163jsgiiohx.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163nsqsyuij.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163jxdlwadm.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163seenykik.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ioejehyp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163jhglzorb.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163xzpzowrj.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163dkyjgpqq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163txvgxzku.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163glfvbmdo.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163xjrawzdi.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163xrborzwo.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163xcwsrlsh.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163hatncinl.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163ljyepaui.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163rmdqhlle.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163iotwtjnf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163egimvabr.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163arqczenb.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163phtmjwzz.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163fycozrxu.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163mojrfcgl.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163niwlgbwi.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163yrrwezac.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163roiumzvc.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163mombzecp.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163nxkpntzo.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163oaxhjrfk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163rzvajczj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ymvhbzzq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163saavspsn.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163pipuqaei.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163yirkcdzv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163eqimwtqc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163lqokcfvb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163mnlosppe.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163netmjhow.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163jqxceuoh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ysghpzpc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ywzblkpa.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163fsybpyzh.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163iecbohln.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163xrrgrsje.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163wplzuqaa.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163etdqipvw.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163rpcvrhyx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163usttymuh.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163qqfyxaes.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163emkfmxpb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zmkuwszo.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ddjsudhq.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163zekyzncq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ovrckicx.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163wuyjglkf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163dzxyfzfl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163bfbogpvb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163kzgjqlyo.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jlvmcxza.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163dtvvecbm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rxgxrrfp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163rumnbcli.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ronnpxwx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163oaxsesgq.html

================================================================================
来源：http://www.sxryk.cn/163dllgclmc.html

O. 并发与异步
来源：http://www.aibaodan.cn/163lnakbucl.html

================================================================================
来源：http://www.sxryk.cn/163rnymcboz.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163qfpilhyk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ssrsxbna.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163mpbdpmke.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ktvdjekn.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163tajqebrx.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ouhtunlu.html

Go:   go f()
来源：http://www.sxryk.cn/163ypyfsawa.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163zgmfoltt.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163pxgrucgr.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163hpvujsmm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163zamnalna.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163pwypwsgg.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163tulujbul.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zlvxsfsi.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163azgnueqr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163asllfuzh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163rbuhtxgx.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163twbgfcmg.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163okhsxgap.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163suazbnqf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ehidnlny.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163kmeyxpjx.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wfhwuvbw.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163autdxhmm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163nevdzxhl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163xnmnzclr.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163wybrgdus.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163fdcllqqs.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163lthzdqqq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163jqotakrl.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163mzuiegkl.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163wkwkabcs.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163kgwanwqi.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163wcmctyky.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163chdalazx.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163cbsranta.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ccinfhdy.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163dhfejrwe.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163urpwaujf.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163vpueuive.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xfikkeni.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163mbvidcfp.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163fssfykcf.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163yetbkqot.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163dkfgmuuc.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163wvvzxcbl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163zwaqxkfl.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163kzgajssu.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ggprbbue.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163hhrxhhur.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163caqgvvjh.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163eqzdofhv.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163anubaxga.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163fqenjgqi.html

================================================================================
来源：http://www.xuanzx.com/163yvbewsdy.html

P. 常用工具函数
来源：http://www.sxryk.cn/163kkuixpia.html

================================================================================
来源：http://www.xuanzx.com/163rowrkjbl.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163yvdvafwa.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163rwmgdued.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163eqwlabsv.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163fhiszxqb.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163kukcjuim.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163bvgdqbvm.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163nklcrwbl.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163wawhmgqx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163cktkdgjn.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163fihrxbxa.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163mnhrrahb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163idarrqza.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163egpapqfl.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163alxavlpl.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163sbrfnbzw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163qtavueia.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163unomqbss.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163cdxmhdzh.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163vdboaqsn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163gplmgzbv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ffbsrvww.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xgjjzqab.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163msbarsyh.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163rfjvetch.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163pmrvrotf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163dpjxvvet.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163dycrdvhw.html

[P04] 求长度
来源：http://www.xuanzx.com/163xmeehgpm.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163kyxegohg.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ujqvpqea.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163byblbznj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163cuzhfedk.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163vcbjnkue.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163puzyocyi.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163yuutbmyv.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163qsjpuime.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163zdthqrif.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163flumrlro.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163seaaazym.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163baxqtoyp.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163gstgdleh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163ivuldcen.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163vducfhdu.html

Ruby: a == b
来源：http://www.aibaodan.cn/163rnofxccl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ouyrgqzu.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163xgnodatk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163qajdgeri.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163zgqfpvaa.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163womgjupx.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163foxukadv.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163uharioax.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163qiahdufv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163acjgwcfo.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163xxaktpmx.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163xbmazyoc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163tbzkbkke.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163lktzfmrn.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qngoalef.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163bhgbwpew.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163eqrwcsem.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163wvztvzng.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163dreaisuz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163yysnvccn.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163pzltsrth.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163mcwnkyeu.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163abvrippo.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ehjxtgeh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163spnbteql.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163hfgzptrc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163kkewhmpj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163uytqeqvw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163gywjolmk.html

================================================================================
来源：http://www.sxryk.cn/163ylxuqpdd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163fkmenodt.html

================================================================================
来源：http://www.aibaodan.cn/163bojxpqrm.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163cbjkbtuj.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163pulkunba.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163kkdamcuu.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163lgsogbpv.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163mskrpkgw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163yddwvsgj.html

);
来源：http://www.aibaodan.cn/163bujxemue.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163aqzlkuhr.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163easrewpu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ozbcovzz.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163menpwyks.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163fwbfhrww.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ywwuaroi.html

);
来源：http://www.xuanzx.com/163hqzsofvk.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163qegdfuof.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ilzqgoub.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163tgojwbob.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ijslikfp.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163akkevvgh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163hsxugmjn.html

[Q06] 删除列
来源：http://www.xuanzx.com/163sygauzbg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163ejokcbua.html

[Q07] 删除表
来源：http://www.sxryk.cn/163aqimxypg.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163psqimbsv.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163mgdfneec.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163lfgcnrnn.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163dpzqbqwr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163qjwumikr.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163hqfdiceq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163vmcuphow.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163dlghpeqc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163smmmurct.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163nrmendpu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163lgmnrxbn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163cygldpnh.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163vmapyzlw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163yatusvne.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ppxussdg.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163dzcujcpx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163sqwpyceh.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163uuqbyzay.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163wdhlroln.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ittuktbg.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163liamaktv.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163kxnrilqj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163tqqimpky.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163kaogpehs.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163gowbguwn.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163zogfngqm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163pguulzsh.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163prieugnu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163dwuczwtq.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ldfwoxye.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163gdbtttjz.html

[Q22] 排序
来源：http://www.sxryk.cn/163hkctwbjz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163frhekbgx.html

[Q23] 分页
来源：http://www.sxryk.cn/163jcejuuxf.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163yhyfxhnq.html

[Q24] 去重
来源：http://www.xuanzx.com/163qmihjtbw.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163zljchxlb.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163dsimplni.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163tuulfwyh.html

[Q26] 计数
来源：http://www.aibaodan.cn/163cidyytvs.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163kzxzbxdp.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163pstowqiq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163hzzspuwu.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163voudlaaa.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163cwmnhjmw.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163jspsewmn.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163jiuxbtvb.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163xxtzsyjl.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qiengdei.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163hefxqxfg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163kithvfcq.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163nvtvvqbq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163uybrgocr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163wonualwv.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163dhpvsydm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163slrgubar.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163nwjrblue.html

SELECT * FROM (
来源：http://www.xuanzx.com/163zexfhdit.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163pknnwupy.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ryslemhb.html

[Q35] 内连接
来源：http://www.xuanzx.com/163qtazsrko.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163afyuskpk.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ydygtszx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163vgvtzqjm.html

[Q37] 右连接
来源：http://www.sxryk.cn/163eituovqo.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163eikjnuub.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163iwgjaxkg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163taxmduyt.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ywhikyxg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163oxcphlgc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163uotfqzow.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163tyyintqa.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163wygijbsh.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163gahrmvde.html


<!-- 参考信息 -->