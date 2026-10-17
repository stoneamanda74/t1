外链999!wailian999！

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ikcyksdd.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163tseltziy.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163mpqszheq.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163hrjolrwt.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163meqgtbzb.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163jmwysjce.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163iaxietmo.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163rqdqmajq.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163poamqebx.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163csyjwmfo.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vejeaflp.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163yuzdbsyq.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163pczddbdj.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ccxdyloo.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ldrzvfil.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lmhpbklf.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163anjvdcnd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163zimgnoko.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163tuepxinr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163szyvhffj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163qurzztww.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163eiadplrr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163qlmjvpam.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163pbtlmdhe.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163laqnoeqx.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163whhknjut.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163nyimljva.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ramndlun.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163liytdcea.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163wrillomn.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163adavviig.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163zrrrztkz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163whesgmza.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163qjoqkvcs.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163hrqhimlv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163lojofnjp.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163rrnfxmtt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qwhvdeyf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163fbqqejmz.html

Java: // 手写递归
来源：http://www.xuanzx.com/163xupdvpxx.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163fwvjvvsq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163tgopdjor.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163jwprlqus.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163txahtsor.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163hwrddbrj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163siqachep.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wwfilydf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163egcfgibo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163onqxsypg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163voxpmkuu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163jcxggqyw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163sksjxjdr.html

================================================================================
来源：http://www.xuanzx.com/163svbmygdr.html

O. 并发与异步
来源：http://www.xuanzx.com/163kzibequk.html

================================================================================
来源：http://www.aibaodan.cn/163smxaytvk.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163qbyrxrcz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163zfpskhvb.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163fhfmhztw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ulxnxbjf.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163kgtgkpko.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163eirvixdh.html

Go:   go f()
来源：http://www.aibaodan.cn/163nxlwdceb.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163uhnxkbnd.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163zddeskyv.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163ulaksgtb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163vypmlkqy.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163detkcmah.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163buvlkwnc.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163qwozurlq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163vceysnrl.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163hlswwoxu.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163qoymairp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163afmihkfb.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163xxqgbtrk.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ygarbrnx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163mcdzkupv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163rnooliku.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163joqhladz.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ruomiuep.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163dqpmctje.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163gvabxais.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163qhpmquxc.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163jmuqvqrn.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163twvmsroo.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163vszkttmv.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163pbtcogsd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163uohknwkr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163uvnvvsib.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163sdmizjqf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163fybtapst.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ltvbqdpg.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163axmxxknw.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163gdnkmmqw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163pvqxzize.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163tpksvkha.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qhuqxclg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163irabxgbn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ngntuegr.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ygbkgslm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163myozorzh.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163thtpoejl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ywzfqpia.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163pwlbzesj.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163hzqifnfn.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163zgrziwjv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163nrhbwhtp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163cwzpltss.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163eyeaiixu.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163gfopubng.html

================================================================================
来源：http://www.aibaodan.cn/163uvqcbxwq.html

P. 常用工具函数
来源：http://www.sxryk.cn/163uptliiff.html

================================================================================
来源：http://www.sxryk.cn/163efznwpgd.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163bicybpme.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163vfkdulxe.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ymipzlal.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163kqqxwudq.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163dipkxzhj.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ehsbzgec.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163mqnzdefr.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163yqwqgzrn.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163tadlmxib.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163mgbphwmt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163cjdrchvo.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163nokisrno.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163zfaheehq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163hvguaowh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163pphhmbjm.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163zdujsarv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163nlsuboco.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163cvffjaql.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163cqqyctpz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163wgynheyc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163fyaoddgb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163emfdtlyk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163yzfhkzdp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163wmafbazp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163clrbhing.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163admqvipf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163nygfysoc.html

[P04] 求长度
来源：http://www.sxryk.cn/163vwrpwxdw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163uzrddcre.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163yklqwazy.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163uzwuqvem.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zzlrldsf.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163etgkzovy.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163aduwjegq.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163kjoesxku.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ixeqctfb.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163frkzksgg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163opqadpde.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163eubnrqgv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163jgpwswux.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163pstsnczi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163lrkcyteu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163gzpypqih.html

Ruby: a == b
来源：http://www.sxryk.cn/163izbsqvgk.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ziijwauf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163txahdxxy.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163nqpnpoyk.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163cyjosszf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163tuamajjf.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163tbqigtuk.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163xnmhzclh.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163pqogeatz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163kamjpkfw.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163kuhxzmfp.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163yxwrygeo.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163qyaoywzp.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163rfllgbuj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tbsjwcch.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xvcqmlqn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163gsqaxhuq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163wyicezvi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163wuecjgeq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163yxigsmjy.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163cbjqlkve.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163whsxypdn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163mkqmgbtx.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163yykisjjp.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163eyusqjym.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163crqamkym.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163qnrzazte.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163jelzehzn.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163kkupvrlt.html

================================================================================
来源：http://www.xuanzx.com/163kfnntisa.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163qoaveelx.html

================================================================================
来源：http://www.aibaodan.cn/163oxtuwzcm.html

[Q01] 创建表
来源：http://www.xuanzx.com/163lvtqhvwk.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163xvizyhkx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163nfnwqmxl.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163qtdjpefa.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163jqrrbfac.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163rulodvky.html

);
来源：http://www.sxryk.cn/163vscesagk.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163wwmjajza.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163klmpgilr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163wqyrcjjo.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163kdpwllkl.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163gyorqtav.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163qlxoshhw.html

);
来源：http://www.xuanzx.com/163ftmgbfhd.html

[Q03] 增加列
来源：http://www.xuanzx.com/163yjfojahv.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ryxmljyc.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163wemrusxn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163endlqsbh.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163jhbszuzj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163plsajczt.html

[Q06] 删除列
来源：http://www.sxryk.cn/163meotqsfv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163mgnvqymb.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163pcdqnsqn.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163wbeytutv.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163bdsdupgc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163pngscber.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163rnrpmbkn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163spcalgnu.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163bmfetdur.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163lgahofmw.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163gejkgzcb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163xavuiowj.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163bfmxocwc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163xhenaexi.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163dxofdxcn.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163xhnqtsex.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163hfxgzzip.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163cntsakkn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ecmmrkbf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163cvueocdt.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163phjhpprd.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163kxwgixqh.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163aacubsbo.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163avzohauo.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163hgnulqlh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163cnqysizh.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163chktjnra.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163silqnayr.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163wldumnay.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ssmodcvw.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163uuhfdafe.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163kbagkswi.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163rstpfjyd.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jahavblq.html

[Q22] 排序
来源：http://www.sxryk.cn/163oodnvttj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163yshajruu.html

[Q23] 分页
来源：http://www.aibaodan.cn/163csdomwjb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163hujjdcdv.html

[Q24] 去重
来源：http://www.aibaodan.cn/163iekwckdn.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163srftjsar.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163xwwgeoxg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ykhzvmqc.html

[Q26] 计数
来源：http://www.xuanzx.com/163mhiakzva.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163nxwbinba.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163yuyepqxh.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163qlqfsbfz.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163zafnzizu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163uupthnmw.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163vwjhxbbp.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163tenyxjdd.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ezpxoxzt.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163babucvwh.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163mdtollvp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163bwsbdfwb.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163lfdnfxvk.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wumwmlwq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163uhniceba.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163ydiroeor.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163wsoqfkkk.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163gwwvawgh.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163zdwdgjid.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163hagorpku.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163acefgsqp.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163geeqvwct.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rbzxxuzh.html

[Q36] 左连接
来源：http://www.xuanzx.com/163kgjykngl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163apmhxrjb.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163jtcttige.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ygwtpkmp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163vnzbxaaw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163zdmefbhn.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163tzzriztz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163gyrwwvkz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163vsmejzzl.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163lxpkwwdh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163qxziwlcq.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163nwyxfpeb.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163zgtbpztr.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163xciwufoc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163qntatidc.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163kargibvd.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163osxsdylu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163drwvwwlt.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163kuvsdtxg.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163adkyqwvo.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163ibogczyy.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163vvdgqxid.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163lqrcntns.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163cwmozvgu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163qbjeiqvo.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xwkphqrb.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163fftdnpvw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163pnitoazn.html


<!-- 参考信息 -->