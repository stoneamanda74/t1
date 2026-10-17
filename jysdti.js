外链999!wailian999！

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163tmxwauvy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163hdbsydtn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163guoggyjg.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ahmeihjj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163okdtgzvl.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163gvfvavwe.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163rxcjofiz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163chtaqtem.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163pjncolqf.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163bxnxkjuy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163oipuylzp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163dbphtwmd.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163mezkwlbc.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163bbexkpnt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163zusfomoh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163pzjxplji.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wspncsis.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163blstyikw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ealjlgcl.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163dpqcjviy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163nemmnsub.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163neazvfxl.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163lhzhnqed.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163iaotthav.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163mkibskqc.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dloecwew.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163pngienzf.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163oesskkqe.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163zzatfnlv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163kyakrhru.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163acbebfdz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163aghkzlvh.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163vllrhrok.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163jnnfmlyd.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163pyrrjugv.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163bikrbmyp.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163lpyxkvxb.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163wvhixacq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163njgumycf.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163qcrdtmdu.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ricumvhi.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163qafpzeom.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163fxoakkvl.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163iagixsar.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163lcugiqie.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163djcloahv.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163aaxxsnlw.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163trrnndyq.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163twbxyswp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163xwifkwly.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163jcolsdef.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163rtseiptz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163kippepvk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163svcxsdsf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163irlcrqpe.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163pksxipje.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163cigtgvch.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163hhenrmbc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163mosqbilj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163tbjtbjpg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163gfleaixc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163gvakdmuu.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163pwfocvwi.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163oawvdyur.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163dluhzpea.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163qrnjvgdx.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ifgpnpht.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163rlorlkoy.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163douxricv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163buqtvpde.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163eudmpild.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163eofcuhqt.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163rctkgpug.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163betkjmve.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163pzlnzwnk.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163rssqnras.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163raicbcth.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163uxyueruk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163hbizpiws.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163dwwhoxzh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163uzjknfxz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163cwiylhfx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163raaeynod.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xuhrusvc.html

================================================================================
来源：http://www.xuanzx.com/163oguexzbs.html

O. 并发与异步
来源：http://www.xuanzx.com/163saaoruxh.html

================================================================================
来源：http://www.aibaodan.cn/163ifueacud.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163kwymopcc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163kkmtlqkm.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ltndnmcc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163affinbyw.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163aguqkfde.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ovirscgz.html

Go:   go f()
来源：http://www.aibaodan.cn/163atxwiaqb.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163gbfpnate.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163cyiwqqbg.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163hchwrljg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ggggmszw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163egwmdcmf.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163gvqhldsl.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163afzwriqr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163recxtynm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163zaepxbyy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163yzgsxtpv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ccqhqriv.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163jgqizgka.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163qnaruazz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163xmhciaao.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163fquxqqwg.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vfrnjchb.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163fjumufgt.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163wyqyirth.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163sjpvnmxh.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ljiiwhks.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163zdpfckei.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163epwwnthb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163tueydblx.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163ezoyqylp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163tawsxolv.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163eydljezf.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163nbukauxf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163dcpnigjy.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163flldlagg.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ujwinnfk.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163wtzgostf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ypglgudm.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xozoxnol.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163bcafuatc.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163omjbcqhm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163qsahizjx.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163pxpqsidj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163gxrehjxa.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163oadjcgjs.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163zokrolnv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163rzywwuaq.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163khimtzgu.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163mxtbibqq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163vxclzdht.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163jajwlcwm.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163uwucrchb.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163kscyyopl.html

================================================================================
来源：http://www.sxryk.cn/163bjpcijhi.html

P. 常用工具函数
来源：http://www.xuanzx.com/163mutcavue.html

================================================================================
来源：http://www.sxryk.cn/163hhellpap.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163kxhmocce.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163mdjgbjew.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163tgpjyxnm.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163nsflsxum.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163cfmrjggw.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163cihplwcc.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163mqecbayw.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ygmzggwv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163sewqknnz.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163dxxmelhv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163fcbjowpf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163mjfjboyk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163emedogtn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163yczkhvbo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163xbmpzylk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163wtioqugy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ligjmbyr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ioikixza.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163povszwsd.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163bdghroyv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163deikqejf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ovlbisti.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163jjpsukli.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163dpejgtut.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163pklmqpdx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163rvnlansd.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163dxfmwmht.html

[P04] 求长度
来源：http://www.aibaodan.cn/163bohyftgn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163fdoidxpw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gdgmtnlt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xeibfmgb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163oukgfrwp.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163xtlsjcom.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ovmvyjqs.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163nnnpvzls.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163otvzdljz.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163kjchqmjk.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163hxcsltge.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163djqpcxyo.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163dcnppilp.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163yakiuasw.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163gjmmepnx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163krqjdnwb.html

Ruby: a == b
来源：http://www.sxryk.cn/163wqjgahpj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163nomdrmrk.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163ydmtrghw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163mszmjxxn.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163gqmevzhc.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163whmxnkwq.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163iltcvyau.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163qilahgtu.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163gnysqikp.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ymcbrupa.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163sveddlyf.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163nlmkvdpp.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163cakwwsom.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163pmvsqonz.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cmvdgfex.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163yssbpapf.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163amsupkth.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163gccbsvsw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163orfgsddt.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163cjnkkpmk.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163cyfujrbi.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163xlnynate.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163wtqxwktk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163aryxmpok.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163kxmycjxr.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163betmxibi.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163tjtzpohz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163jrmcobvz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ucuqmjht.html

================================================================================
来源：http://www.aibaodan.cn/163snaqncyy.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163nvrvqfdt.html

================================================================================
来源：http://www.sxryk.cn/163xmphgrvn.html

[Q01] 创建表
来源：http://www.sxryk.cn/163plfhkzuh.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163rdnwcedd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ydwhnmts.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ezrsuzgb.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163iunnaqkv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ryiidtmg.html

);
来源：http://www.aibaodan.cn/163zdelkjwr.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163nycmykku.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163litxepjs.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163osdtxtty.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163dosamtdy.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163utjhohlu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163suzpuqfi.html

);
来源：http://www.aibaodan.cn/163cuknjifa.html

[Q03] 增加列
来源：http://www.xuanzx.com/163nmhjadym.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163tqzbbypq.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163wdyaspmk.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163iglpfrlu.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163wkuhedif.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163serlskpl.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ywywoiur.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163bdkcnupy.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163dykbrxov.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163qtfswaaz.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ghtmrdui.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163dijmnczd.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163fbswbxmf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163qqsrueyj.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163mgzmrops.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ibviyeav.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163umvnawlg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163goozyvxd.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163qvbsbuqa.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ltgfkejn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163hmbhhaqr.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163iuzyunjq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163gptbivho.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163dcjbeoei.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163uectfnwh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ifvbfeox.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163frudkhmz.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163hqwvlthd.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163djgcxnpq.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163qidojgit.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163lpgwarvr.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163udftoaza.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163mlphebfj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163kwgpvknc.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163aytzhsnz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163fwfekjvj.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ortijelv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163nynzdiig.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163aqkvwxts.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163cahyvwis.html

[Q22] 排序
来源：http://www.xuanzx.com/163ncsuvvgf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163afprwxsn.html

[Q23] 分页
来源：http://www.xuanzx.com/163eomesjki.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163jzuuifpo.html

[Q24] 去重
来源：http://www.xuanzx.com/163cqdzsvhh.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163gqmbzzre.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163pifmwxec.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ewlbzlth.html

[Q26] 计数
来源：http://www.sxryk.cn/163dvzagizf.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163feflkyyb.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163unckrccr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163eitjtffv.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ewfjohha.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163pmhnsuvx.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ojtmbtvm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163yveurdzh.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163djedjwrm.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lqvasqok.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163orbfcbix.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163bxkvjwro.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163jizrzehl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163obdpkehf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ekhlrfsn.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ljlewyyg.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163eozrterc.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163zxvvrnbo.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163eoyfcjrc.html


<!-- 参考信息 -->