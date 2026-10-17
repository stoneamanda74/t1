外链999!wailian999！

[N05] 最大公约数
来源：http://www.aibaodan.cn/163smbhedou.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163rqauhrmy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163toavaqax.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163voqnvcjj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ciamzalw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163qevubfri.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163sebekhxx.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163onqtedyw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163oegxyurt.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163buwkmlcn.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163xguvhspm.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163cbolltff.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xvzbtkfn.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163gqfinyqo.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163qrwaknml.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163vbmhgllv.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163tzeydliw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163utjvhpzg.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163rlkwyosm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ndoxukvk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163fyxurqpt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163jsrsfyti.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163apmcnhtu.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163aqlgmpid.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163djwlnjpb.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163gtjzsitq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163mthqxbbj.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163zqahqxxw.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163gazzwvem.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163itjoeeam.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fvdclfks.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dnyjzehj.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163bkwwnqqy.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163jmkvqwbw.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163tkxhnncf.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ivqywzmf.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163yvbsgjgz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163ofambgdy.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163zxdxkjhz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163rlrzduhr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163nqjeyyur.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163mqjjndtt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163atsqhiln.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163hmpjbfxx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163nuserbuz.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163qefkjqxs.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163sezbestf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163fhqicejz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163xdzkxckm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163gogmfhbk.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163wkmargim.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163fwktcvyw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163uuylygzs.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ovoqaowo.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163iizcbelh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163hsppzoev.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163tscxtoxx.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163pbqsephy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163bwqytrpn.html

Java: // 手写递归
来源：http://www.xuanzx.com/163toipojqv.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163evtpwbkm.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163lbkjcyyz.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ymwiboxs.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163quhxfqtc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163jyguxoek.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163epxbkvgq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ceyoygrp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163yuxzrrok.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rzflrgbw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163hmgnpgsr.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163tsnpbcdd.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163hekbnhdf.html

================================================================================
来源：http://www.aibaodan.cn/163asmmshkd.html

O. 并发与异步
来源：http://www.xuanzx.com/163nsgqkmxi.html

================================================================================
来源：http://www.aibaodan.cn/163tjcrksvw.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ozkzqorr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163nqpvfnkb.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163bggsgjik.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163euylnyye.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163fynhzrsv.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163sqtlxaae.html

Go:   go f()
来源：http://www.sxryk.cn/163simfuvhc.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163wojtqzce.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163onvttkgx.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163lvnkpnnk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163trdatcgv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163tatrkrrj.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ajctvmti.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163fzwphwkh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163geoqevah.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163jkkvzzot.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163kprfgwwi.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163mmjfjbrt.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163vdaflcjl.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163yeakhymq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163cmpcgxsc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163kaljuozx.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163uibtagyr.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163zzqkltzo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163vubzjmju.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ovaamarc.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ueobxykf.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163xqexlfsg.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163sqoaulfn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163gmwazjbd.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163nvxmykvo.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163zsinkqpj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163oznmuwkn.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163cjrdtodo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163rihprqwy.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163sqqzdjov.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163gvvojiud.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163kzakrswp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163listuunj.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163kdhrplna.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hmtcdowy.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ltgukxnj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163uutcahln.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163mhkrvfdx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163hezjdvlz.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163svnwoajl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163iahyfiyu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163brfzmgkn.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163adaathnk.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rynogbmm.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163dfbvoajf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163rmrnhjal.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163jvtkzvow.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163phmxxlbg.html

================================================================================
来源：http://www.xuanzx.com/163niicbiek.html

P. 常用工具函数
来源：http://www.xuanzx.com/163ryoxnaeb.html

================================================================================
来源：http://www.aibaodan.cn/163hwsuhedd.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163kqqydqqw.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163qhwtbwjv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163glabggzp.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xkzfzelw.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163djmbynxi.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163dpfryueh.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163uqksgtyd.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163dpczmxee.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163fiiuyjhn.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163smznfcbj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163eueqowmw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ofwpfspq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163islsccmy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163smuqqwwn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163xjgyhxdy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163tkctsvxx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163izbfpcxw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163avkplzuq.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163bzesmqoh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163kdooxxcp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163sjnovbbu.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qyuwxfni.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163zztahjgr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163maolyidi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163xqpekndp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163jznmhpoi.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163klfsezmw.html

[P04] 求长度
来源：http://www.aibaodan.cn/163gsrarpqp.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163mjezltlx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mjelifjw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163fpaitmfs.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163gfpnklcf.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ynyylcvg.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163xmxxwryk.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163maijkasr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163iaqgbcqu.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163hcwtilts.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163nimedvhf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163pznuyqhz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163vybklskv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rwuksqha.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163irszgjph.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163qiuulpew.html

Ruby: a == b
来源：http://www.aibaodan.cn/163zosxdqix.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163xlvxhbyw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163oiusfvrf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163lywlxcmu.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163facabone.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163dvdyrtgz.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ojalatom.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163lryiuhnk.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163dhhlbuks.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163yggjluja.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163njguzdui.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163cicfgxjn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163itiunyxv.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163sonjchyv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xygdxudd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163azbybazs.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163nkszgqbf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163fuikyfwe.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163lxapxnng.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163wdnfwroe.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163xeslfzma.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163sxuhwhxq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163oqaaauxz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163uywsiivo.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163pfckfezj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163booubhmp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163ycwytkvi.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163eazqvinr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163clnaoiam.html

================================================================================
来源：http://www.sxryk.cn/163xlpbpytl.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163jedlsitn.html

================================================================================
来源：http://www.sxryk.cn/163kkppbzlz.html

[Q01] 创建表
来源：http://www.sxryk.cn/163jfzahsar.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163kbbafoam.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163lvnsassf.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163fnqjbtrc.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163fgkfevvn.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163feauvcnn.html

);
来源：http://www.xuanzx.com/163hilgssxf.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163jzllrwoe.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163quwifioz.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163oswcaanx.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163wpcrhpxp.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163jjvgvlll.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163qircviic.html

);
来源：http://www.aibaodan.cn/163bougceja.html

[Q03] 增加列
来源：http://www.sxryk.cn/163iuqckbjb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ufemfvvb.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163jdambipj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163plstkiel.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163uwbxyrwl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ethvgdst.html

[Q06] 删除列
来源：http://www.sxryk.cn/163uuzljnhq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163olhyenfj.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ghixmhgw.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163pdgehmgt.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163nihiixkg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163enqddblb.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163cncnxpsc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163uzemjrbg.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163dtrotdwu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163zqwyveqf.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163vsedskvb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163uknwrwvy.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163igjkxtjr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163eydzliiu.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163gjhsxlos.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163atrrotsh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163hhtcfudg.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ztsgphrq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163vchkyzev.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163zklymevl.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163ufeakamd.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163qmeknejq.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163acblilxm.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163wmjxiihc.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163wshumxlm.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163tbfkewua.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163mjhowftm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163hpedzoiq.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163yagdxajg.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163dfugcpbl.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163rjigmami.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163gzuovcen.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163enmvlrcg.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163dhfigdtd.html

[Q22] 排序
来源：http://www.xuanzx.com/163syhzqzpu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163txzfjooz.html

[Q23] 分页
来源：http://www.xuanzx.com/163wgyufowl.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163mbydehip.html

[Q24] 去重
来源：http://www.sxryk.cn/163rstemyid.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163sghnfjjt.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ziswtxkl.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163vlebpkcw.html

[Q26] 计数
来源：http://www.xuanzx.com/163wnemnaws.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163xnjxfbus.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163mwksjlkq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163eyunhhoh.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163joakmaej.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163yjtvpafp.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163srrermkm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163firmsbdb.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163qqskrbye.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xrtyfqaf.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163hgodmjhl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163yyuzsyoj.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163swfxgike.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163aulhbhcy.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163dicbwddg.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163zmnvsdjk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163jkndvmpg.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ybqwvnpe.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ficshigb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ocaepmnu.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163uptdqbvv.html

[Q35] 内连接
来源：http://www.sxryk.cn/163znlqfpre.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ymtrnxqn.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163swrtkmmj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163mdfurwaa.html

[Q37] 右连接
来源：http://www.xuanzx.com/163tjtgotna.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163iuejajyg.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ygadrcfq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163ortcbnfv.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163hiyfxdon.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163dshcpycu.html


<!-- 参考信息 -->