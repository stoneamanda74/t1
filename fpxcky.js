外链999!wailian999！

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163dvystorr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163iitkrwxt.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rlgpvisg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163nxamdkcs.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163owtmloyx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163rgbqkzqm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163feuzwatc.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163wzpjsumm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163xfhueqpk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163wlcohakd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163redbzcvw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163mctfnxwo.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163sxmcxldz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163xgztvgnu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163tknwddtt.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163gctwyypo.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163wbcmvpqg.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163osjyxfrt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163bmyfdmdd.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163gougurxy.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lztxcbhu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ryiuxefy.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163phcqzveo.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163mxmwhbra.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163vlolzxri.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163okritjjt.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163jziggbqy.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163dsiczjoc.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vtdfpmcb.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bzukojbb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ucginygw.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163xzxhsezj.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163hheovwfj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163luxxuplo.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163gvjmicsx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163olcrmvej.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163uvgfreod.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163qwnhtfdd.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163vmdelrpa.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163discmubw.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163zvjgprcq.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163uazcftnj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163iqvxbcen.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163vykvqlls.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163mbahrnak.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163ffcnwfig.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ldzxuiie.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lekxumgz.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163nivyzarq.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163hjbnfqqt.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163qnheqyxn.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163oqkflhzn.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163fukcmpra.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163xnnlsoyx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163vsjxhuuc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163isgxsyge.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ytulladt.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163urgtpvln.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163oxwduglj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163phvsbqug.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ullhmsst.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163bdctlwqv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163rkacffrx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163gbwayznj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163qwuwkeno.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163hlaggjhx.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163aswtbchg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163isujarqw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163bohyykki.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163nuowpiqk.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163corpikag.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163vzmvdsnp.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163jjfsgewz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163rdxuylct.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163cybryswo.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ztzwddoo.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163qaofbmvp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163jkkoyhgv.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163tmoopbdk.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163txjtqgmi.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163kkowaigt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163kwvokwwm.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163fqnpjzog.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fnoybtwv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163zevjfmbv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163shttlpjj.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163tabgckfs.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rqsqukxt.html

================================================================================
来源：http://www.aibaodan.cn/163flhaudzw.html

O. 并发与异步
来源：http://www.xuanzx.com/163xqskpehd.html

================================================================================
来源：http://www.sxryk.cn/163txbncjnm.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163upkrqewj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163veyfryua.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163yiipskmy.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163zxxhqhnc.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163kdgyhvqp.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163lntgkega.html

Go:   go f()
来源：http://www.sxryk.cn/163iyjsnpbt.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163qggnvimj.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163eeyqnerj.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163atqehbpb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ovcjxzmy.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163pvqpolll.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163zojmxfje.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163lcnvoamb.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163aanqzkag.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163yostzguk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163yxqtiguw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163skbvvpgn.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163iheddxsv.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163twdlshcl.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163gnnlahmh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163cpyvglsw.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163hjyrcqsl.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163jehwpsbf.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163lxbmvbxy.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163unskaooy.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ndrjbjnv.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163dgsjpsvh.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163plwavior.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ueyljikb.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163yuyerdoe.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163oywjaehn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163chapncfm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163plgrpira.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163qockcdpf.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163bjwysxuu.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163mtsqodbp.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163nhbammvc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163rkbbzmms.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163fzzqdstl.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ylpoivup.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ivnjxiyk.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163iahdpddb.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163puqlcqbm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163lpouiucm.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ohfxsydx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163cwkiloso.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163nrhgggcw.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kscbsddg.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163pdnhlglg.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163gfmoklvf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163jfiudita.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163yoianrfz.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163rjbuhsng.html

================================================================================
来源：http://www.xuanzx.com/163jtowtoza.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163unjwyuiy.html

================================================================================
来源：http://www.aibaodan.cn/163eulypsss.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163uobaljuc.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163qjpjqgby.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163cqfribsf.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zrmhazwn.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163vkkjzpro.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ztfpmvwn.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163vguqlkdr.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163dviepfmv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163mqlfjmge.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163zshlbgms.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163tiqjuixe.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163xmiqolld.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163cwryacai.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163gyagkwbf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163glulakpk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163azwztrag.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163fdwlgivp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163kgmohrwo.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163fldlplvi.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163qzgdeovd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163iwfejkrv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163vvrfhyuf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163mjojwqzp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163eeappzmb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163angrwqsr.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163szhpjbar.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163lgsozznn.html

[P04] 求长度
来源：http://www.aibaodan.cn/163nxfzjwwt.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163kkrxnsoq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163hwulfimj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163lzqxgiku.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kfkowhsj.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163vulhfyrl.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163cztgzejc.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163komnygar.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163pvojhtzs.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163quttaxng.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163oksybecb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163bpmnhzlv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163labusgat.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163xhuyjsyl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163onxdmozk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163rhgktkrc.html

Ruby: a == b
来源：http://www.xuanzx.com/163weuihyar.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163iylztgcg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163yjulgrdm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163hjngfcqd.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163jkzmolzm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163pcpizrxg.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163dubzfiew.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163tzpgfhnz.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163hghjdqol.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163sbdoycfx.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163uzcszmus.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163vocsopxn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163squrqnqh.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163vthrsmjy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163zefmdkkn.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163jarmzyke.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163bqxvhuar.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ilxfltda.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163mnzkiivz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163bflepyub.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163duqspkcg.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163dypdlnoe.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163fbdulwlc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163okiepdlu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163dkuufnuu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163xihkxain.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163nkpdfmwf.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163yjhqxkbt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163knzulnpb.html

================================================================================
来源：http://www.aibaodan.cn/163yblkvsed.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163frafpapy.html

================================================================================
来源：http://www.xuanzx.com/163kefantrx.html

[Q01] 创建表
来源：http://www.sxryk.cn/163rklvajlj.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163yfcgievh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163guqbhffd.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163gxsuohdy.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ralgwvus.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ahaclfjc.html

);
来源：http://www.sxryk.cn/163aaircqbf.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163jgfinsct.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163njkxzodg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163hvypbmix.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163xejltwdj.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ufnpocrm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163cywsvptg.html

);
来源：http://www.xuanzx.com/163lrsiziup.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163hynrpuhl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163jevrvnbe.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163uhkblsno.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163wvcmxwgb.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163hlojwwql.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163vhvcphrh.html

[Q06] 删除列
来源：http://www.sxryk.cn/163uagyafog.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163qipryjky.html

[Q07] 删除表
来源：http://www.xuanzx.com/163szgyhtny.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ziuhdepu.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163anevmhnw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163vafksayo.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163pogsgxjt.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163hktnsvgd.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163jjirrgrm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163tnztergf.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163hhfwghrg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163dmtohyai.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ezmuwpxm.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163wnkockxn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ubewnjlr.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163jwuenjse.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ajgnijzk.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163jtlkfgmp.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163rrzgsner.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163thlluqxu.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163dqrfsbyz.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163jgwozbyj.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163wnjwojef.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163pzotwjjx.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163bwebftus.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163gcakkesx.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163mvgjtsaa.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163fhljmgsm.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163cyhtaila.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163zorynisd.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163qrgfukee.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163dqekoiam.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163stkypywl.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163psmpntoy.html

[Q22] 排序
来源：http://www.sxryk.cn/163zcfcjzqc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163przgbrcs.html

[Q23] 分页
来源：http://www.aibaodan.cn/163tpycmshc.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163yqccaazw.html

[Q24] 去重
来源：http://www.xuanzx.com/163amfofgqk.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163jmnhnzbx.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163bnledyls.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163pngpsole.html

[Q26] 计数
来源：http://www.xuanzx.com/163qtqjrvzu.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163uhwfrode.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ldohnpzr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163zerxygcb.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163odfgnbwm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163zhiszdcv.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163pocwuqkm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163gcdtispp.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163cwztoyxg.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qfxdypfh.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163eciyqofs.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163rrkvlesx.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163bqtcexap.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kcatzemw.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163twenpaqn.html


<!-- 参考信息 -->