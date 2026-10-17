外链999!wailian999！

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163hqmsfiux.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163unsrnydk.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163goibnhpa.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163zloxtedd.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163xsjmevus.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163yptzqdqg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163uzcqvzan.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163vapjbsck.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163vjblhpqd.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163fbrkcvvb.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xzjjhgdn.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163vafoixwl.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163eybwasrv.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ngzavcdi.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163lujlzvra.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lfrgaamh.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163bnaelemm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163rdxvyehx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163wwzwbosz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163lucjzkth.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163xybtynup.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163djngqgtk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163zojfznmy.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163avgtbezk.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ougmqlkz.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163vvfibsez.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163zxrokzbi.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163mciiwtsj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163agpkxcah.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163xwqwkzmf.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163hluhkvft.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ikpjmhae.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163sdtihldf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163swwpokse.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163fkpbhosr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163zptzcelj.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163hrbbirjl.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163buvknjer.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163sevjdrhl.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163idswfhre.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ikfesvbu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163acpbsnxz.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163xwcalhwa.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163vtpdvfae.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163opzbemqo.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163shlgjvbz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163nidqtxzv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163mcnakfpo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163qlgnqswq.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ewfkoliu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163zgsoskco.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ybrsethi.html

================================================================================
来源：http://www.xuanzx.com/163awgrepfh.html

O. 并发与异步
来源：http://www.aibaodan.cn/163nwppqpxf.html

================================================================================
来源：http://www.aibaodan.cn/163dvmlhmzj.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163spmnulhy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163unxtqugy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163oncgvwwh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163nvgrlaye.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163iyvjcvpw.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163lleujkms.html

Go:   go f()
来源：http://www.sxryk.cn/163wywjtqul.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163rmlbkrea.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163glegeazw.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163gbweotku.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163cgotewwy.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163yxuietyf.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vqknlbxo.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163divyqqey.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ztfitdhm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163rcaxghsu.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163qgdbjdkd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ocqicflx.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163rmrjuuvs.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163qrbeqwyj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163aozctqil.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163mxrmjqka.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wjqajvos.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163aujbkopx.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163hzbhmmbn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ewoycxri.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163svmbrogt.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163qashvrpq.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163eptunfhp.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163zzuksmnh.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163nxiboioc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163bjwawxwl.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163gxsimfdq.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163qjelqoxh.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163glfqadur.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163laqeixrp.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163mmnofwmw.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163tvsavgcf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163drkqahhn.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163wkunhjcf.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mbkwqtjo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163jptcsudx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163mzmvmspt.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ffzkrbqs.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163riqbjvls.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163rfssbqjc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163gjvpmxiz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163xxalwnhs.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163kzcyslpw.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jyetczji.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163qzibvfop.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163minvmtjw.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163xmocbigf.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163upewvjwv.html

================================================================================
来源：http://www.sxryk.cn/163jxdtuvaw.html

P. 常用工具函数
来源：http://www.sxryk.cn/163mzoreyoy.html

================================================================================
来源：http://www.sxryk.cn/163dcrhiyis.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163vcwdjzyp.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163jpwkxhqh.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163xfzivqfa.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163kaaielly.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dslxdvhl.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163kkxmvbui.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163ozuhnjav.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163cinxnfeg.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163qcsmmkix.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163lzmozhas.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163qwylhzdo.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163okddhulh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163gjyaydyx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ptcjqnee.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163qzkmmuqg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ddgqxubo.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163vgpguulh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163hnivycmm.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163xqgjpedn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163qfxrzkpg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163vjucwwts.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163sqgorzaw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163agefpzvl.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163mthqrqnt.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ogumhdoj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163ovsegnuo.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163jvdrzrpm.html

[P04] 求长度
来源：http://www.sxryk.cn/163ztyxpbfx.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163fviqkqfm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163vyzsmjjm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163elogfqmu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163abxgldwt.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163dbvzpche.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163kawgcvpd.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163djyegdli.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163hztelahq.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163bidjlvqc.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163uiezshve.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163oslmvqky.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163dsoosqeq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163tczdxfng.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163yqywltts.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163xjssftvw.html

Ruby: a == b
来源：http://www.aibaodan.cn/163yhugnrhw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ovszzbtd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163twqluaia.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163wyutrktp.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163xrhldshx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163wdimzpqc.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163cirkhqek.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163lemxgtxa.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163pyaejhaw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163wukvlryc.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163tmpoqonw.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ryeetdub.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163kufbgriw.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163mnsllgww.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dpioodkb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kqzhizaz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163uvhftlfo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163nhfhnphn.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163bpmrrzic.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163urhslxaw.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163jneehcyk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163qkyfujpb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163yaaiezyv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163sxjyornw.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163dskeiogu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163vicmpvsf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163snqxhpcy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163lodqwpcy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163tkuirbmh.html

================================================================================
来源：http://www.sxryk.cn/163wsqvpnzt.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163gsnjtepw.html

================================================================================
来源：http://www.xuanzx.com/163rxmhajkt.html

[Q01] 创建表
来源：http://www.sxryk.cn/163pzgjnvkp.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163qcwamaev.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163cjgtzpix.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163xqjmudms.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163tkgndpdx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163lycedeak.html

);
来源：http://www.xuanzx.com/163xedfaqzs.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163oaefvpga.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163qrkiwkge.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163pjisszeq.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163fnlcjybj.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163zkehtaga.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163cxydacin.html

);
来源：http://www.sxryk.cn/163upobpegf.html

[Q03] 增加列
来源：http://www.xuanzx.com/163sgpvmbat.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163uoexkotx.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163flbpxbyn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163utvjqfxs.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163mfoxooyz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163meoxtmwe.html

[Q06] 删除列
来源：http://www.xuanzx.com/163rssxuhfs.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163eqtofnws.html

[Q07] 删除表
来源：http://www.sxryk.cn/163eiflyvnf.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163abmrdrmx.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163gswjexxn.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163wjbtghaf.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163eemmvmdl.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163aazzwyoq.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163mmhtvite.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163udxzdgfj.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163zjgjbayb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163epqjosxo.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163nxvvhrxd.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163lyaxhnzq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163vcsuwyva.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163isikrohj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ewjtzaxu.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163qlwjzmgc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163vgyefnqi.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163cbqoccas.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163rcheuzhk.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163klfuznuf.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163efrusdgc.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163pppvjcnm.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163thshwysa.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163wypmtnbu.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163vdbvqdvf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163duietdxz.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163cknvzcyk.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163iqsbmdbs.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163qmsraqxb.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163nzsiinke.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ndbenncw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163nwjsqvow.html

[Q22] 排序
来源：http://www.aibaodan.cn/163zvoqnclm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163ckxjexdv.html

[Q23] 分页
来源：http://www.aibaodan.cn/163mgtqwtsv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163yjjjohjp.html

[Q24] 去重
来源：http://www.sxryk.cn/163htkzkzvb.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163jlymsajk.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163blmvdxzl.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163seoelxwt.html

[Q26] 计数
来源：http://www.aibaodan.cn/163orglkoft.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163iznkcsat.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163jwiqmcot.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163vpuvevuk.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163cmpmtwxr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163rqxnanqu.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163bqbxsbkc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163swaejeph.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163yjxaxtmy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ipswiiom.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163bbllftfx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163sbwhnddv.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163gcshijlz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vbmuoqsc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163tcskxbhu.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163daqzegkv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163hbquimqc.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163tnhgejlm.html

SELECT * FROM (
来源：http://www.xuanzx.com/163kzcaakay.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163amevzarp.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163pjdbsaxx.html

[Q35] 内连接
来源：http://www.sxryk.cn/163zeqiespv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163vbztrrqz.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163wgeqrxwq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163hlgfydpl.html

[Q37] 右连接
来源：http://www.xuanzx.com/163ifopnfsg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163hxbkctuw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163smyfdtnh.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163prfbymwv.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163izrbzrup.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163aeckjkep.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163acuveqmi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163hzocwhnd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163mevsmcof.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163koyjiebh.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163pdybhibc.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163rxzucbad.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163gopzryxn.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163ufibshve.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163jmebpgmm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163qrgnpdoj.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163attarket.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163hnehoigz.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163epuuyqwq.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ffoxhkpw.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163tsfoyvot.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163jfvruzlt.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163rcjbkqab.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vrnuevwj.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163fehhrobf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163kvzgbybf.html


<!-- 参考信息 -->