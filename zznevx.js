外链999!wailian999！

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163kthmvqaw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163bczthwvd.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163iwxfeias.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163sdetofpf.html

Py:   resp.json()
来源：http://www.xuanzx.com/163xchzarxj.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163kzpdbhrr.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163aaadbmbi.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163uxsolwsc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163oruvniyz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163oligvmoh.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163tkskvaiw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163izwqazax.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163htlumfpb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163wuywhozv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163gnykmjwq.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xukxkusu.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kbitrate.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163uazhiwoh.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163kgjuamps.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163pcqszsgd.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ntqrsfuq.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163zphxwepl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163wtchuhkr.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163eagqaids.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ialawtaw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ebpdknva.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163iacruufb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163hndjstls.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163flarwrac.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ljqsqbjk.html

================================================================================
来源：http://www.sxryk.cn/163xegzxcgz.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163iytchqjo.html

================================================================================
来源：http://www.xuanzx.com/163dnivfxir.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163azwqxgun.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163nsnahafs.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163pzbvrvrh.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163rzquwsdb.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163haxofpni.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163lddldxqq.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163mgpicafp.html

Ruby: ARGV
来源：http://www.xuanzx.com/163debpauqs.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163esmwtfaf.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163hyyxhgll.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163kvdsfvdj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ixwodpzh.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163byulhqeb.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163gqzpvgll.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163skevlgcc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163scdabert.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163gvzwdifp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163gujygfvd.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163cwsnzdwu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163dyhpfvjq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163zloeaffn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163uvgkftmw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163hzctchcz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vpehmtjc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163rvufbhij.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163kvjfnpfh.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163kghgcnos.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163yaujtefl.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163csvgkcua.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163jchqdpbr.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163cmhaxila.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163autibtyq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163wbsdxwmm.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163rckeoxcn.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163aelcaobk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163nsakichm.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163epllzdtl.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163agtepcla.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163luopdjxy.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ausvvrqc.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163mingznka.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163bbyeubtd.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163umdtymzb.html

Ruby: exit 1
来源：http://www.xuanzx.com/163tuzkezyd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163pnqkbzfs.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163bzvoghzh.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163diahfjwf.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163hduqshmh.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163mtwivroj.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163nfuvwaxk.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163wrhcofqf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ihwpybax.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163imazpann.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163gpksuwfh.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163tachgqyz.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163okubwvwh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163vbzlitvl.html

JS:   require.main === module
来源：http://www.sxryk.cn/163grikkemu.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163zziedjav.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163sedtnvig.html

Go:   func main()
来源：http://www.sxryk.cn/163uhuwoptd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163qvehpzoi.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163dfebxgbh.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163tjpxgtmb.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163kivdnabn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163hjvbpxmc.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ptehocos.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ksljvumh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163rnqqfqpf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163rpbekcqm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163vetxyrie.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163vcabtejf.html

================================================================================
来源：http://www.xuanzx.com/163nwdimkdo.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163salzoadh.html

================================================================================
来源：http://www.sxryk.cn/163gsffqksz.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163kmnxsvqt.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163yxmpnsok.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163unylorti.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163nognkigk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163lwmwlxvv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163coqqayqj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163xlipnovc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163bctmuima.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163xligyklo.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163lfushemh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163mjazopdx.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163lcsihphm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163grnmkeon.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tdprvjju.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163svscsybn.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163jmchmcke.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163kzcnnxti.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ncszvpfg.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163bmjmfzru.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163eiareswq.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163fkttiipq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163tqnpippi.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163uwrhzsib.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163syfzuzwz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163kxekemtj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163rrqtnhsy.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ljmgqmbm.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163pmvtpkot.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163nbtvssfn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163qaqlngln.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163iputzrkw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163puamldpp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163odgexwng.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163taipiwtc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163fssxkdoz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163jkoxrlxw.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163cjqspsds.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ekvrwcbt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163nqkhlplr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163cvgafitm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163bubcawen.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163swegejje.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163fnzzwibx.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163djunivaf.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163zacvpplt.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163xxwoxfsa.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163whzegbub.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ftrhgeot.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mzjrqrqq.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163unklixhq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163mpxlywcl.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163epedqina.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163xqqhtcua.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dfsjlqxd.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ydvpoido.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163rbbsuonw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163exqrbzvd.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163taiycjku.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163poemtnco.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163omjoroht.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163eydtpgul.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163tcsbkote.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163mweeulqw.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163zutdnfri.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163pibylczp.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163vanviprw.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163evnhpzle.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ihuqrgjm.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163cwmkiljh.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163jvhhyewt.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163sqvvpnmh.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163qzrudaer.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163maqervqc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163rtuyxgdk.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163cpovdvbw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163zhkdneug.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163vcopqzmx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163xamkplst.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163gughpxcl.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163drdfanpx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163sgudjkve.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163szoyfbdf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163zcfqkdso.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163mpwjutlp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163loxrelrm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163rhzkufzr.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163lfofhhhv.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163nogxsspf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163cmzahxuz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163bvrzvyoe.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163vpjvyjwj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163vbmjhhdi.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163vhqcyhbn.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163qyyovnib.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163dnjrfctv.html

Java: // 手写递归
来源：http://www.sxryk.cn/163fxursgin.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163lggfehlc.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163vvtzfdhl.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163vvrucjwf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163covrrvvf.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163toaeqlhp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163nrmlpgxf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163skfyxqpt.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163clsyhldx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163cwlxmypm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163mysehizi.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163gquqvkyf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163tngwbidy.html

================================================================================
来源：http://www.sxryk.cn/163pghjblsn.html

O. 并发与异步
来源：http://www.sxryk.cn/163rmgeymtk.html

================================================================================
来源：http://www.sxryk.cn/163edtdvbdb.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163qtkcrhad.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163yiyqrzix.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163alaqthdg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ivmmcija.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163jmhorznl.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163zfqnfsan.html

Go:   go f()
来源：http://www.aibaodan.cn/163wgybdbcb.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163stqwoehs.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163lokpmgtp.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163nkftzknw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163xiocyrzn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163gljgpmjm.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163rgcjiono.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163zozuhlbm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ubcjwysa.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163wbtggtcz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163jcnfizgx.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163svxfnfyv.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163bmxsiqpi.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163rxhjxiea.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163fifobduq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163tofrfynf.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zpbtiwkf.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163wlwblcfd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163gwfmatai.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163gbtjkupg.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163gouvwoqk.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ussfpinn.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163xsfcgkud.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163unxqietd.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163bzyyeqkr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163amyelovt.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163nyauxvsr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163lmzipixh.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163tlutmmgs.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163qholldwh.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163olsihfvg.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163zfenanwg.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163hzhasjvv.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ykoqovth.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163bhwuogfu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163yyalvomj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163brafsrpa.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163iselrojk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163jtgbttjg.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163hlyomzqp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163bdvnogqk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163phhzfzvb.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rwtyuzcm.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163otsowlve.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163nbjwnqde.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163qgwxbwqu.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163xjilcpic.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163nuucybgg.html

================================================================================
来源：http://www.aibaodan.cn/163rgaytxjt.html

P. 常用工具函数
来源：http://www.sxryk.cn/163uhejmfmk.html

================================================================================
来源：http://www.xuanzx.com/163qhzqezrv.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ttverlsa.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163luayapvu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163orqivigi.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zkadrxdz.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qfoqateq.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163piibxewz.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163dodcyjtp.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163bqeewegh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163gfyazqgv.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163hgljqlbx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163aqzjluxo.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163qxaggbbb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163drzhgcdy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163tyuzuayb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163vyzelrpx.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ehpsrlvr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163tehfufmm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163wtpbdvwn.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163rtaatylw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163vdakdjic.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163zfaeavph.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163wuxzthum.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163fqlsgtxa.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163sramtzjj.html


<!-- 参考信息 -->