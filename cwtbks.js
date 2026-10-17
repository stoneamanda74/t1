外链999!wailian999！

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cmmjbore.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163raikszgr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163wnkxzeob.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163lhsfovtd.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163ifjglqin.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163hlwrebax.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163hbavnbie.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163whfifxxw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ihmhvvia.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163hzchjmuu.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163tsfrcflx.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163jsfkaioz.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ttverfia.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163macyetcj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ogisvtfn.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163bxqwgweq.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163nhyisfar.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163iwnegnkd.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rvsnaiyt.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163pdrznetj.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163aqkfxzvd.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163wbymcydd.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163haefmcfl.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163wwskqbeg.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163auijsrju.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163vlooqzbo.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163pjuqmnis.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163jpyftbyo.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163pvwfpltg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163pxhxrzoi.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163bpfdssfl.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163jrzdjiie.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163helabsxl.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ipkhdqbj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163skprcpaq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163zijusiba.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ppvzpzad.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163bakqmgug.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163qjyrubbp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163kyybbhfe.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163mcgbtczh.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163cvstlomc.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163lycjyyur.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163fpziavrs.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163rcyfegyk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163dnmttdde.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163kfvefkqv.html

Java: // 手写递归
来源：http://www.xuanzx.com/163pjhdjwhd.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163xeyxsrnh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ikkfkqpq.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163osrmhbwx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163jqfcmkej.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163nsoitwea.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163lximvspu.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163hmvgwden.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163dywkscsx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163dgmicksk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163wwvjpvak.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163xmmyymac.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163jygufazz.html

================================================================================
来源：http://www.sxryk.cn/163ivchbpbi.html

O. 并发与异步
来源：http://www.aibaodan.cn/163dglhvgfz.html

================================================================================
来源：http://www.sxryk.cn/163sexecopq.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163quvapcwu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163cvyrmqud.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163zqweuclg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163occzrvgc.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163toqnoijk.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ycjbfrbq.html

Go:   go f()
来源：http://www.sxryk.cn/163xnihawds.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163xhaiundc.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163wyfbixjk.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163zscvslhw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163iuesuvnq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163hosgkfcp.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163cmsmolwq.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163kyidkrtx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163pjhywmmg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163xvjgshxg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163vvwotprp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163bsbfeqah.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163moouzxql.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163tevdmazp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163tuclprbi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163pgngfzpj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163xrjxfyjw.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163cfjyamja.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163kfyagheu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163mvpqtlka.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163noiieidu.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163nctwlper.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163dpaqcgja.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163okcjgbxq.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163grbuuytc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163jeliknpd.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163kbvrokrc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163yqmiibvv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163koojdveq.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163tkobkizt.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163zxckvhyi.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163dwvymujz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163xiawkgcf.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ahhppgab.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163qqitwjvf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163kqasthxi.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163cqvialkg.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163kvtyvbht.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163lcwyupvw.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163phwiixwa.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163rldplqam.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163mofkkowf.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163bpgvvfuu.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vckgsfbv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163kwsxctta.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163gnfljqqe.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163mpeouumq.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163hnhzmanh.html

================================================================================
来源：http://www.sxryk.cn/163jwpjvdnj.html

P. 常用工具函数
来源：http://www.xuanzx.com/163ybzsiyaj.html

================================================================================
来源：http://www.aibaodan.cn/163ssshclsh.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ydtgiuyd.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163aqlmypnl.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163plnfheii.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163zvogvnkr.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wiehbayg.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163yzvzpslt.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163rpataxzi.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ufpljgzt.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163qeyczyyk.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163oxtkmplg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163bohorkkk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163hfzqlpfn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163wgtfrton.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163dvchvfwz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163jcygfrsj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163fvswcvkv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163dpteyfig.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163vctuiqva.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ehvginkz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163gevolojv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ewjqitce.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qznmncul.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xkhaqrgo.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163rdzxiipu.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163qemonadr.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163uzmshhmd.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163qpujtmoi.html

[P04] 求长度
来源：http://www.aibaodan.cn/163unvywcei.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163shhwveol.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163wvmelsls.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163kyqnonqs.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zerfvyvi.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ewuicwlz.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163vjpafmru.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163etghrgnn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163zfujaiaa.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163gkfjkxie.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163wdgjklfb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163mahjacyy.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163kmwkhxdx.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163sszltpgw.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163qatvibrw.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163bcapygsi.html

Ruby: a == b
来源：http://www.sxryk.cn/163uqstdyfs.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163jqrniwev.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163tyqgmkhh.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163nvcosxya.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163dsalheyr.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163lnvcevyy.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163qwdxafbh.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163cfqolavk.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163xbceqbzm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163nfmlaehk.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163zzxomzmx.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163pdwxcbqm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163szacqjbb.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163xqyghtwe.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kihsksor.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ejplhdgd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163hybfnjzl.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163udmmmgyd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163sjaixeub.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163jjcwscnz.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163neqvkedu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163tkmcmhgl.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163xfagxjtl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163grrldtka.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163xprheeri.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163suxgstkq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163wdqcopdo.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163mhkamgop.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163talmkgtg.html

================================================================================
来源：http://www.sxryk.cn/163equiifzl.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ksoyyrpk.html

================================================================================
来源：http://www.xuanzx.com/163pshwxdgh.html

[Q01] 创建表
来源：http://www.sxryk.cn/163xocyvsjw.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163cwbylgvr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163drxnfajo.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163rcapghhb.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163kzmgcnum.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ygpvmste.html

);
来源：http://www.sxryk.cn/163naonraad.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163mndlglni.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163hsokeynw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ybfwxrga.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ecncdpqa.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163qjypvdol.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163svlquegw.html

);
来源：http://www.xuanzx.com/163gvnbdwjs.html

[Q03] 增加列
来源：http://www.xuanzx.com/163qjggjgmy.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163zaskplkw.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163wxloruwl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163cxhvlrqd.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163xldrrpnf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163bakixfaa.html

[Q06] 删除列
来源：http://www.sxryk.cn/163bzmdmsav.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163aydewbns.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ctmecvur.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163levqfewq.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163zrqlzenf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163rqprtxzn.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163tlppuxlb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163niyxkubt.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163qxzfkdsq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163gbwptvwf.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163eqtddzah.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163uevkcujr.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163dksgtftn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163qshyscdw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163qjvneyre.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163hmruhdfq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163wpnhdnec.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163astwfwru.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163qwzjplxe.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ngniwzfx.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163yzmsvfio.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ojrzruxg.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163iumczyau.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163fcudjqyn.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163hyfasuot.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163hfnkbdne.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163pcdyrfnk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163rhkxmswa.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163rulbqbqz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163hvpssjzk.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163vqxgvnqe.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163rjvfledh.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163xoylfvmq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163tpdmeejd.html

[Q22] 排序
来源：http://www.xuanzx.com/163xdrrqxja.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163jcirulce.html

[Q23] 分页
来源：http://www.aibaodan.cn/163uejgipwm.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163yrvvwawt.html

[Q24] 去重
来源：http://www.aibaodan.cn/163qubndzpl.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163lokozoai.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163fcprgtfr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163eqhoyoqp.html

[Q26] 计数
来源：http://www.aibaodan.cn/163pdlyxnfd.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163cczsgevs.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163vcgvhflj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163rzitjszx.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163qoznavbn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163zmdcnhxk.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163lgukqqan.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ifrvzzck.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163izunotwi.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lvkyioqc.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163qnktadvr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163wyprzobk.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ppntohwb.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ujjaopan.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163xtshysll.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163kdvchluh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163jersjavb.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163lqzwsdji.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163jaqlsoah.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163aljcajly.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163rellwmrj.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163hooiwzjl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qnmlpeyt.html

[Q36] 左连接
来源：http://www.sxryk.cn/163jnllwphm.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163lnygschv.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ixkdmtpp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163oxhkbvyx.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163eqoeffqd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163hvgjmtnk.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163wlqjcxzc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163mgbdjvrc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163aymkdrey.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163bhnunruw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163aiazzspe.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163pvimdzrm.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163hghqptcr.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163ixskpbfv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ostvqtuk.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163ijcgwobj.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163nawblocc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163uajuixce.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163owfgiubf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163gbqswtkk.html


<!-- 参考信息 -->