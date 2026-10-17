外链999!wailian999！

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163aaboqauy.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163biatvkwb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163wjyxglua.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163nzbnjbnt.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163mvekbtay.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163rruyntdk.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163hqxowhkc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163kfejaant.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163mkdvecbk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163jcdeoaan.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ciopvchy.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163cqyxihub.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163vvzgjrss.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163mcgfvyuk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163sylidofr.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163mxnwhsal.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163fgsuhrfd.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163nugiostl.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kpqkzkcl.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163zyxfsyds.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163qoxqjkiz.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zeuyrvkb.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163xemhqjht.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163bpypcvow.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163cjhfotwm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163fjblwspl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163itkgqovr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163ctdjuxtu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163fypqvnqk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163egkhrpfe.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163dvzyqchm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163vqteiiru.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163tkresxnz.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163cyqejnxp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163hidwsbgq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163parkdtvy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163jncoamsf.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163vtuxikuo.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163vctasdzj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163lvtsdglq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163umpkohnc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163qucfufao.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163stmaiaff.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ghrcvzwb.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163phyqdgjm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163lyrlosvk.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163cemmveeg.html

Java: // 手写递归
来源：http://www.sxryk.cn/163fuowrgbb.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163moesegyk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163iciifwmu.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163wibszayp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163tvrcbpdd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ctoycadk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163xitgwnhu.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163hupzvpkb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163uooczfce.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163rzrznbat.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163slvjertj.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163psjyygzo.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163vaxureek.html

================================================================================
来源：http://www.xuanzx.com/163ifxkdrwj.html

O. 并发与异步
来源：http://www.xuanzx.com/163zobkfblb.html

================================================================================
来源：http://www.aibaodan.cn/163qatzycyc.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163rsqfgkaz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ludrgfzd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163gxnppevx.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163cirpfryv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163zwwzndib.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163hmlfiiee.html

Go:   go f()
来源：http://www.sxryk.cn/163ihgkiiln.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ymsxwtvt.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163xegisoci.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163cydyfdqg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163tkriygnf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163brlxzneu.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163qfexratn.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163kvwglxah.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163eyxfnzij.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163uugggrmr.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163qzheoxnl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163gmhzbzix.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ddratxcf.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163kpbraoyl.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163mgymdrmf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163eussurad.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163flkscyvi.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163jtgejhrv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163jysaypou.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163yohrhodg.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ccjwlsoy.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163pcqixhkr.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163edyglxtg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ameflkvz.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163odugvxyq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163xnqepcps.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163nfngdkxs.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163asovzmdh.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163bzawqaub.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163cumfzrtn.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163jvpdvdwu.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163fzzzxzir.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163yuytebta.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163agcammrk.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163luqbjuzs.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163rncrsews.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163jousrihh.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163plndksjh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163eyyitgse.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ljlquqvb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163tjxqicqw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163eocogbjx.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163qifxqsti.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163nknylftz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163uokwxthh.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163tsihzgri.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ekjybryb.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163onnwmbgh.html

================================================================================
来源：http://www.xuanzx.com/163baypkvyc.html

P. 常用工具函数
来源：http://www.xuanzx.com/163tqmtbojr.html

================================================================================
来源：http://www.xuanzx.com/163kwtummjj.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163geipkoeg.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163uldyzecp.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163konlhwvu.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163opplbkpn.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163fwczbcsi.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ozaufmgo.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163jdyvlmzl.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163xixklumb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163oklrnqvj.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163awnhgvhu.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163ixdxozol.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163acxqleig.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ahsrbtta.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163qhnbzgic.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163uyycweqk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163olxlxyth.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163wmvazwpl.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ejsgtyck.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163dmlodczw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163lwjjfdgd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ubrgaxhp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163cejwhwzh.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163zhnrebbp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ndfzquzk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ougveron.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163idqegvce.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163tbckmvrn.html

[P04] 求长度
来源：http://www.aibaodan.cn/163krashmvd.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163sxdnesig.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jilvljjy.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163pkcesdrc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163kcnmjlus.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163iipkmjht.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163hrjwagdm.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163hirdfavp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163dprhoilg.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163yzwqtndt.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163lqfcskzz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163rauiyjho.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ugylyhna.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163svadqsxm.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163qwfqcyiq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163alvadbsz.html

Ruby: a == b
来源：http://www.aibaodan.cn/163gzotjhqo.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163tqtvzybk.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163boxthsej.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ocrplcbc.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163tpfumswm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163xvozmbmj.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163kchmmvkd.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ukxlqjje.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163guwbzwsu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163umycfrtt.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163xidhhtpq.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163yobzikgk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163davkljkv.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163qodobojl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fimulclg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163srykpeaa.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163vemlrrfh.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163pslsyoml.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ucluigrv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163nwbbyltr.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163lxespbrq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163xonteall.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163samfqdhj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163guxotjlh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163islapvid.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163venrqurf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163prrozlon.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163vmgqhsws.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ksymrzao.html

================================================================================
来源：http://www.sxryk.cn/163cnlpoxde.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163zmkoefxw.html

================================================================================
来源：http://www.xuanzx.com/163shyajhdv.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163rnnwxure.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163mexcurrw.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xckrieud.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163eaozbdjr.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163jfyqdimr.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ncjpkder.html

);
来源：http://www.sxryk.cn/163shdnfmpb.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163tsdinmbz.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163zkcdybqd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vvoyxwkf.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163hhpbqqyj.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163sdoikswv.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163vpuzmkhw.html

);
来源：http://www.sxryk.cn/163wbkbjeec.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163bhxyvtbv.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163yyfdqxlb.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163pqsptuok.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163vwsjvpis.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163emzghpts.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163sltdegwq.html

[Q06] 删除列
来源：http://www.sxryk.cn/163cqyvqoab.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163moxmkmmb.html

[Q07] 删除表
来源：http://www.sxryk.cn/163lgyrzrhp.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163voywssaq.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163fjpyvola.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163egbhwuxn.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163bklrfuid.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163nbnukbop.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163iifboqmq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ycgqzdpi.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163tpaudcyr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ugvpeiyh.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163mngwegpx.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ufaunwtw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163uqnzhefb.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163wiajzhky.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163kpjnjuod.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163eqhyngtj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163emnmizlc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163tdtlfyta.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163fjkrknve.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163cbqgpxqv.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163oelzswiu.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163mpvhkxbl.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163foncdluh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ltliopqc.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163vysbxjgk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163pktgqysx.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163sclvsuhf.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163mnwsmmte.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163bafplxti.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163phjxcvps.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163dnbevvzd.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ekrduama.html

[Q22] 排序
来源：http://www.aibaodan.cn/163rqacvebh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ndfxwtfs.html

[Q23] 分页
来源：http://www.aibaodan.cn/163phlwaovn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163sqkuqzeo.html

[Q24] 去重
来源：http://www.sxryk.cn/163yhzyabxz.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163ezustpfh.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163zizgamum.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163vokthxlh.html

[Q26] 计数
来源：http://www.xuanzx.com/163fzmgovkt.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163qvgltrvq.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163hjwvnqhr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163gxdssocm.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163sxpyqrzh.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163lpqyagqe.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163nenewssh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163iehrzjkb.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163syyobpum.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ktecukfa.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163holctaku.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163wqidmllt.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163hsyivgov.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163yqpjctvu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163qmdrzlcm.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163gbutztzl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163sogfpixc.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163hjqkhfax.html

SELECT * FROM (
来源：http://www.xuanzx.com/163gwjzhcjh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163rgjiqxfo.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163lnnyiwdd.html

[Q35] 内连接
来源：http://www.xuanzx.com/163fvlylhwl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163vrzdwuxy.html

[Q36] 左连接
来源：http://www.xuanzx.com/163zhenaylt.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ddkgxmdr.html

[Q37] 右连接
来源：http://www.xuanzx.com/163kyijnbpt.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163qsaftxyv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ajrhxbsg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163iotkqlov.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ecteszbr.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163owewcxmk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163qzuvuqbb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163jihbmmwd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163qpjdazia.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163fcecvjas.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163dndhhiwn.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163yhnjjvoz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163vooblqpm.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163koncbhlf.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163bbsvcara.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163fdipkxbd.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163yitdogbz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163wqfsomjf.html


<!-- 参考信息 -->