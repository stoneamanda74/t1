外链999!wailian999！

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163gqbtrzlu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163bakvhzmo.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163kwcekgxm.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163xtsfczos.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ehplvjby.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163neohshjl.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pludlzeb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ynxcjzht.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163iirlynto.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163gnleuwlb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ehccwmnp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163biayndqy.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163mpaofmvy.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163lnqquwme.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ldcihkdw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ogkanexq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gfrgnocq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ubvqcrxa.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163zzawxoxc.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163araaxuuu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163clfdrsdu.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163pfsbfoco.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163upxlyeme.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163vnzrjbxg.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qutmeuyq.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uusmowpp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163fjguimam.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163iblimcoz.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163syaonwhb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163cdxkwllk.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163kinuxsft.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163pxmlyyur.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163sorwnlov.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163qjewqfpc.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163mvuicddc.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163qckkmrls.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163txozkmwt.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163zmjcemgx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163appgwkzz.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163lrmaivjv.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163xjhbkjph.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163mqwgtqqt.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163agpeiilv.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163walhyhty.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163sbqicspz.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ftkfmjkk.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163bbxqwawd.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gwuxezsh.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ucsokqga.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163esnmscli.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163abylxldi.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163qvpxdyyz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ojpmkeyw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163wecxxfvl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163vqolewvr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163vrxpeskb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163byxmariw.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163aioxusly.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163fhmngwzk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163nooajdmn.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163mifyiqqy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163zaweogpm.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163rfggmuoc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163aopymiwk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ailtousf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163rcygymzq.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163qyzeoqxi.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163xibbgtdb.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163xibrhggj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163iooakroo.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xbcsfxxs.html

Java: // 手写递归
来源：http://www.xuanzx.com/163jkvktder.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163uzandxbm.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ouvmhoef.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163bexpttta.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163dsdrktes.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163lcsmlqxt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163hhxneego.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163mfqlwkxj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wqdzlhsc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rkglyvlk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163inywhitz.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163oflstmxz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163cjfkygml.html

================================================================================
来源：http://www.sxryk.cn/163tsefpdms.html

O. 并发与异步
来源：http://www.sxryk.cn/163onewktzh.html

================================================================================
来源：http://www.aibaodan.cn/163ncktnbgk.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163vtrhzogd.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163dbfhaewi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163gxfczzph.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163pcaoywfc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163juvbcfrg.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163jsvmjrvm.html

Go:   go f()
来源：http://www.aibaodan.cn/163dlkmctlm.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163dzxqajak.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163tfkvomno.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163qzmpjnus.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163zuesfvxg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163jvqcqdzr.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163wjqgvtmt.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163frlbpiro.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ievnwvfo.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163onscrztk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163wfmscryq.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163uivkaotf.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163mibptsbh.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163lyudugfd.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163kpdwopxl.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163fhioetrb.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163jsyaftnm.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163voqkwmcv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163bvctvant.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163kbwfbzoc.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163frcljvuu.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163wieqjsut.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163msgvfuul.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163mbpextja.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163phnedecz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163vjglfcpg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163mosdlsao.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163xveufwbd.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ysdknzxd.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163zzyjllwe.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163czphmqgr.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163vntxdogh.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163myiscfaq.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163apyclcou.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163awfsidvr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163vjsxeitv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163mjvrtkpc.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ogzrlksa.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163oxqxiuox.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ufvlltcx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163hzajevzo.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163rlnxjpoe.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163pzjvcxzt.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163sdwixvhu.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163rlthdxoz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163bsqjnmfl.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163rofoqonb.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163dprrhibr.html

================================================================================
来源：http://www.xuanzx.com/163rlhfzcdu.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163cudmwszc.html

================================================================================
来源：http://www.xuanzx.com/163lfxgrjpm.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163tvupmtcv.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163dgzgqnla.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163fbwmqvxm.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163gilntpyj.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163xbbrbdbu.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163brqznuxu.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163qdusnqrm.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163vbgocmxg.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163uzrrilry.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163rgsaunqe.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163emozpzkh.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163vfdodauk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ikwjykeg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163jnocselr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163titeltfw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ulejxpmn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163kdypwcpc.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163lafcudqb.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163bbmfhjhh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163jsmlmdco.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163rhnzqjas.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163fjhutdhk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wzrznwgv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163xpkoflbd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163wjnkuixn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163idtjeysi.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163cbbghrxt.html

[P04] 求长度
来源：http://www.sxryk.cn/163jyaljjwz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163sjawytyg.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163tqhggzyw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ckscrdyk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163vhxuceuj.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163yuxqwrhs.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163dtmpbfde.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ihettkar.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163nujrqifw.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163mbespyaa.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163esqukskg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163zoqfrgam.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163avdcknza.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163gtryljie.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163tyuedinf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163lygxjzkv.html

Ruby: a == b
来源：http://www.xuanzx.com/163mamjwjwt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163qtjbumvz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163baqlsrdm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163tyzhwnzy.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163nkjgflyh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163zbezwdob.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163htjzhwbl.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163bxuvdsiy.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163antujkaq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ycgrgjlf.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163qtzuxlvs.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163seteagny.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163zlfxwkuh.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163stpzneqb.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pirbajfr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163yqsdpxbt.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163htctjlxc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163rghjxwfw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163krbvavcb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163mtavqglc.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163oqfphdxw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163qvjztuht.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163tengzbdg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163uobbonmo.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163lzwyzkiq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163nmwedael.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163mddkfhmj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ccjfffbg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163gztlnuhf.html

================================================================================
来源：http://www.aibaodan.cn/163odmxqswq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163uajdlcyl.html

================================================================================
来源：http://www.xuanzx.com/163zejhurha.html

[Q01] 创建表
来源：http://www.sxryk.cn/163tiqxjhhy.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163hmsietok.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163mzqrhbdh.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163qalavkqj.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163dvsqygbk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163wuztxocq.html

);
来源：http://www.sxryk.cn/163kauryazo.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163btyqzzpd.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163fchqodif.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ykwszakk.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163cxfckjmc.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163qrqezaiq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163iuiakmpd.html

);
来源：http://www.aibaodan.cn/163xcvmqdcm.html

[Q03] 增加列
来源：http://www.sxryk.cn/163moflgggf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163kvnjsvdf.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163tcpbzhdd.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163nyyumoat.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ulbuwlvh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163nmpkwffg.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163dfqcatwy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163zgwdxiea.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ffrxgnip.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163gumehyeb.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163dcsllhlw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163trjecwzl.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163tysgltga.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163rlkzrcuk.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163yfulofkp.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163vgpgubsk.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ldmxqdkc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163xrvyrnww.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ayttbdgk.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163wzgrwili.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ratfewve.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163syuuiymf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163anlbotzt.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163vcudvogi.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163jiyklaxy.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163zodvghxm.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163rlghnjav.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163sgxfqmpy.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ttshbcau.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163iwqereaa.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163crsoryxd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163vnodubuq.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163zrzbdtzy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163tnyrbaxl.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163qepxcnio.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163zcnuskwi.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163ncngshpf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163coqyebxa.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163zxwjhtug.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163mzpqbylq.html

[Q22] 排序
来源：http://www.xuanzx.com/163zqhjxddu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163lestjceo.html

[Q23] 分页
来源：http://www.sxryk.cn/163fhqxmisd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163maltpgbk.html

[Q24] 去重
来源：http://www.aibaodan.cn/163frqnehym.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163zamasogv.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163qtdtjadh.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163hqcdnruy.html

[Q26] 计数
来源：http://www.sxryk.cn/163jolvxkqb.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163hhlepahh.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163uewgvcnp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163jtdibeoj.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163hoeuqmkw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163atvwbuih.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163yubfsvoz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163tfbgkrgr.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163tpyijvqn.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hboqiyex.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163cngfscnd.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163oigburuw.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163nkkxnyjr.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163paoremqy.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163fkfdeiyg.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163avwxrwna.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163tumiqlwv.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163tlaxziou.html

SELECT * FROM (
来源：http://www.xuanzx.com/163zpaokupw.html


<!-- 参考信息 -->