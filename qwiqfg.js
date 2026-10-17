外链999!wailian999！

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163lhffjjib.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163hitkdrlr.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ujilqbda.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163kdwjchue.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163blpvevwy.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163xxaaqvqa.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163kecvbwsc.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163leqvcaww.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mcluzcvr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vfjwcdvq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163atqbremw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163vomcsnis.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ojlbthlm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163xmawgrve.html

================================================================================
来源：http://www.sxryk.cn/163fssftmzx.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163kzsnzues.html

================================================================================
来源：http://www.sxryk.cn/163gaitynwv.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163zysnatwm.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163sqijaoso.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163bzxfpmqm.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163reynirfz.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163rumpbspi.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163bxebsjok.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163fonbrdiv.html

Ruby: ARGV
来源：http://www.xuanzx.com/163rhottamz.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163nhulodts.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163hbioaqyd.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163fdhrsbkj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163tupoodby.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163xdrmgsnr.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163cmcrartm.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ugwqdius.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163wqjppjvc.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163tcgdxqan.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163wihiiskm.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163penxljsf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163aeaadfdr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163keukrvik.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163nuoxxtju.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pfwcudsf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163uhhsinax.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163crgdcokr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163pvdtbtty.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163oxxlxubi.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163uavljjcy.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163auhbhgrc.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163kxauryfp.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163vaqtrwgd.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163tfxdvroj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163rihybbjl.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163povgdapa.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163msbckwdh.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163twsqxhxo.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ddchiwvp.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163vszymuoe.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163zdusrhgg.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163bjagybix.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ujtiqnbb.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163fdvhxpka.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163nzsieozb.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163hapxtohm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163qnfgvqpl.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163oyyomltg.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163oofnhjhl.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163nmyohyrm.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163bhecflnu.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163stezojcr.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163dzsgagzi.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163cjmmbnch.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163vylpxdqt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163qiqdkmqt.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ijqnzjei.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163qbfilbor.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163zkoywbka.html

JS:   require.main === module
来源：http://www.sxryk.cn/163vzgkkxaa.html

TS:   require.main === module
来源：http://www.sxryk.cn/163dsavnxfb.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163dmkghcfw.html

Go:   func main()
来源：http://www.aibaodan.cn/163esysnemy.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163pptosajc.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163nvfowrbi.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163mcpqtclm.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163dymxklmz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163djbngjdv.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163neockkyr.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ppseqzoe.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163mjuygsty.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163nzcdhvcu.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163qbcsnjbu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163yzpkfdla.html

================================================================================
来源：http://www.aibaodan.cn/163bnxhlogu.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163mwpqicpg.html

================================================================================
来源：http://www.sxryk.cn/163usmkvgcu.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163aqxrcrkj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163izqhbckl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163xgpipocd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ukdseftx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163bsxnibvd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163fzniwutp.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163qkrteodl.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163bzpgsekv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163lmaffbtm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163wmziwecy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163xkkkptrk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163qbzresiv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163dsklmekm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tuuuscoj.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163phfjrzcu.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163myutkpii.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163hqpreghl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163oywnzzjo.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163aondujum.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163popkrgjn.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163lpfbglnh.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163pvqmjdrn.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163zisimnbc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163bouidrsn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163masihkrl.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163uvbznpxa.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163xtntjbod.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163qwxunlyk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pgwtgvhu.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163eyxythjg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ipofxxbw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163eskeehpq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163fbhjpgxk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163ctvljose.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163wqqldgkk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163dvxrydyr.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163dxqucksj.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ovyinybk.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163dvaurzaj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163nbjniecb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ynngavxr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163jmymfsny.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163zmmbpmoq.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163qbpdplpu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163zmoqimvt.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163lnuhqpuo.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163lkqmqqbw.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163arddezji.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tvatsxbl.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xppfkfvy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163gupngmjl.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163hfpwrthh.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163vgticvzx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163nugwjqqe.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163hgkagjil.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163pkgednvd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163zkavgwwr.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ugknxsni.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163rcleicve.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163bvdcvnoy.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163efhqmonf.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163cprovgev.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163iwdmuotp.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163eipfxamy.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163cjiqqveh.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163vojdxklt.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qbmzgcrr.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qfywnzlz.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163gxxkcjto.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zaelabfp.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163dwaohtcs.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jttubzru.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163cmtishml.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163shsefwyp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163dnuexfpq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163bzhpszvy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ozpfkhla.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163yofwagbe.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163cflmmiek.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163tlgvldsg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163rerswogq.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163qudvbrhx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163txjkjial.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163nwymvzet.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ftbpaikr.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163lcdiyues.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ruxgellb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163zxtvlqyk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163wobqohcr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163fkckkodv.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163snshgxjp.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163nlxgsanv.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163jkcqfvgw.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163izwaxjdq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163klzmenfz.html

Java: // 手写递归
来源：http://www.xuanzx.com/163tiscuvvy.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163mqpmxuga.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163qqokypor.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163qlsvzxuv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163fxposxxx.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163euhkgvvp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163krnlclkj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163pnybtovk.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163pwdquhhn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163tbyethhb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163fsarvvut.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163qwlyjhed.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163fisovxkk.html

================================================================================
来源：http://www.aibaodan.cn/163dliabmag.html

O. 并发与异步
来源：http://www.aibaodan.cn/163zjpicijg.html

================================================================================
来源：http://www.xuanzx.com/163aeqyhwoq.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163tpabsfwn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163fngwrpso.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163jagactol.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163dxomxrzc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ueqwnhws.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163qanvququ.html

Go:   go f()
来源：http://www.sxryk.cn/163hpckrxkw.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163fjfivwmd.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163abqbxffr.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163zxkozepj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163crtflpyr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163dysnmmxg.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163esabgarq.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163auulicwh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163gwdnxkkx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163mocpgcxv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163yksooalz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163vjjyieer.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163gxarazim.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163hminfjdr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163xukukvrq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163dwwwpntu.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ehqclqdy.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163hcfsjsmu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163ojhicfef.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163oqaocmpk.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163dksuamwb.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163qjnexgcf.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163bsulkudf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ygvaboix.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163evkonwud.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163pvffuksn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163sgzetune.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163djkvzcnh.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163qgprdheg.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163mitsizcb.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163lmomtuqy.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163fpprfltc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163nycforiu.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163anutfdbq.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ntxgcras.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ruacstep.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163hpcbdifa.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163guiydqvr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163kjhfuscw.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ijfdopik.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163limoypmm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163pouqgbqa.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163lhkuhjwg.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ldyikjsx.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163juolnuzl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163jxrsjllv.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ogmdocre.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163gvestexj.html

================================================================================
来源：http://www.aibaodan.cn/163yhgemhvf.html

P. 常用工具函数
来源：http://www.xuanzx.com/163ycukgtrw.html

================================================================================
来源：http://www.xuanzx.com/163csgiujeo.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163hnjhzeau.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163vsekxhnr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163rhuahspk.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163dsihuzgi.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163jnbijbyx.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163dbyauopb.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163zszwxmdt.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163dreiuuox.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163pcrnotxr.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163czezhyqq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163nygowgqk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163gifnzhtu.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163mxjqgbeh.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163tauuskrf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163wduelhfo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163cyzuvlpc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163hzdbpdpz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163rzpndbbp.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163hmyppqna.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163lsbkmplx.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163aymhagbn.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163sxauplxw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ueztfvqg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163nbfelkoz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163jzskrlbn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163jtxwvlrd.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163dkmtxpsb.html

[P04] 求长度
来源：http://www.xuanzx.com/163fqcohmwd.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163foqbgkdq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ksklnhmc.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163tybwpqnc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163mrktycxa.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163bxkuhktj.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163erunfsgt.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163vladlumy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163sejsczod.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163iwiuodmd.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163lkhvnahc.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163rcizfsmk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163bqxyjmwz.html


<!-- 参考信息 -->