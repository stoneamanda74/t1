外链999!wailian999！

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163zdcczfrc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163fpwkexqa.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163bqwhttvg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163nvvxmfvj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163cvuujxwq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163msjdztlc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ugxtblid.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163lxenihxa.html

Py:   resp.json()
来源：http://www.sxryk.cn/163toyizgqz.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163tgqrjevd.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163zsyqboff.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ishvdxdh.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163dhfmymkw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163qvublyav.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ciryjpwo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ollxgbdm.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163resfimxv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ojoaiqkl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163sedrrkoz.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163yxzcgltx.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163gfxfvpir.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163npnfrsij.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163bnbnrzyw.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163vfbklpui.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163kpbfbshn.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163nhnnnmdr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163jmjsalgy.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163lraktygv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fslrzbub.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163idqwpizx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163cpmlpoul.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163jwfvnsno.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163mxeyevpx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163tixbdqeh.html

================================================================================
来源：http://www.aibaodan.cn/163krcpbehr.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ouogxxvm.html

================================================================================
来源：http://www.xuanzx.com/163viyckmcn.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ebnvoamm.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163xhcvrsut.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163gswlcxmk.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zudhrsfd.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jkmsriuc.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163tqxcoouu.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163vhvaprdf.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163baxfdozh.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163yrjmtbvn.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163lcvachgb.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163xqdtxmup.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163glpejvwb.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163tvpreyov.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163oxmphngi.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163vctccxzb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163vzgjxfzl.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163fefuveye.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163banzgfxv.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163rvqqpxbw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163nmkabsfl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163bjjsouih.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163vcakqjjs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163voewomyz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163rgoouafb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163lhndesxw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163tupdptxs.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163oikyzunb.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163vrayckdh.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163jusjwdpy.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163uczbixec.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163otukyehl.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163owgsbmnu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163xtuaimzn.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163rpavlrmf.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163oujiurgs.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163gocmnssp.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163zoqiaqsm.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163jblnnvxm.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163urcwaune.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163fxlsaeml.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163xtxrjerp.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163jcakvgbq.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163hzbykiwj.html

Ruby: exit 1
来源：http://www.sxryk.cn/163xfeicghj.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163oshnmekg.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163rgmkolgr.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qypxkybg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163kpzzixbo.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ywbkjyoi.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163qdhzhdgp.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163rrupmgbz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163kcaclwrv.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163nsmvirtb.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163jzyaextd.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163bhfjgbxc.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ctmxaliy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163inxzorwj.html

JS:   require.main === module
来源：http://www.sxryk.cn/163urrqcvxv.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ysxghock.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163eirwyaep.html

Go:   func main()
来源：http://www.aibaodan.cn/163hatsaaqa.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163jtexsykm.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163rcnigbyk.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163dkgtorti.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163dwxicfan.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163pnurjdnj.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163wbchuyfx.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163kacvfezd.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163biikxbgg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163lmpavvbd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163zanbnqlc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163hykefiyg.html

================================================================================
来源：http://www.aibaodan.cn/163hitbtuvq.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163kiuclwxx.html

================================================================================
来源：http://www.sxryk.cn/163qvfadyhw.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163vjksnmcx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163klnkhxvu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163lslhzhwp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163rwcgmnlb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163qblokkxr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163igqlsfed.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163btsnqxwp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163yrerolyk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163foxjrixw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163rdwrqhqh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163lqptoyri.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163fggdhswt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bmbyjcdc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hnfmoejs.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163mfbrrmoo.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163bpqxegwo.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163onoxynol.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ejdgkxqu.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163kikiktwe.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163hzcuouzy.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163xitywoxk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163climchdp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163culzdbya.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163euoraeml.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163rdgfoptm.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163tkzfzheq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163hxxdnuki.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163qphvlcvk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163fghedeog.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163aeowpzuf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163eyrnksdm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qbbrtfhw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ynifxgkv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163oasbdpsy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163asvxhexc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163gzvaragm.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163pznuaaut.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163pfmadfgd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163erkumilb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vpunlcnw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163zhtwkupr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163exuzdhwt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163yvllwfvr.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163dhyaxlol.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163kkekxryv.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163xhehfwmi.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163hkmwdpsn.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163alirvmxo.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163eggqwwys.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ywhcjmnt.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163jxgvithr.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163tkukslyi.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163dkukojuc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163cgkznfcy.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163zlzflkhu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163jnfjvzro.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163xnlqcoym.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ayhetdlo.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ysspegcv.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163fjbijozr.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163tuuohhev.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163eljjebdo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163jtmekurs.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163jofdfgud.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163uhlfgtqv.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163sqntnbqa.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163aqowjswa.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qpjfbgsg.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163byipamvd.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bqotitlu.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163gvaxfeis.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163brmyzyug.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ibtylfvk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163nmeqvxcx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163mvalsaec.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163iputnkoz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ljueabvy.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ekpavkcl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ncqvqtpr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163vgwjysem.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163htcykcmu.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163qfvqwhie.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ebfykade.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163eylxulpy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163lcnayjhq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163vbgbpdxn.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163pnedqqfa.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163nibajves.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163cxtpwhxn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163jpdtsgrl.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163izqfqrps.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ondkdtjb.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163amywihdr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163skqjcaaf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163zklnyfyu.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163zwpdculm.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163oivutmjm.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163vajfpjzg.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ztbhnyqn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163hydzbgxj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163sryllfko.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163yliekkto.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163mbktukbd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163lihmgkne.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163dioovowg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ylkdafuf.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163tbpwpvos.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163iglgclea.html

================================================================================
来源：http://www.aibaodan.cn/163eznecjxb.html

O. 并发与异步
来源：http://www.aibaodan.cn/163uhzbcwqn.html

================================================================================
来源：http://www.aibaodan.cn/163pyfcdgzr.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163jhthcvgi.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163sfgkaish.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163llmmkhzd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163dwdygdko.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163eaxmiyax.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163pufvzorp.html

Go:   go f()
来源：http://www.sxryk.cn/163lbfqmgxz.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163znpsvcfm.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163dcurpuif.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163verpgptm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163unrkntlu.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163wbcqlhxu.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163bqrwslvl.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xybekmjr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163lkicmscj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163hpkxdnpg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163uhkhoucs.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163uszvzcjj.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163hmpwaglm.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163wjwfskha.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ygqcaggj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163holameen.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163xiwigjay.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163qmtisolw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163quwpugdq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163fjkbolsk.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163pzkqafmv.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163lbttqlud.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163fsiljwqq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163kojzrcur.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163pwnyoxgo.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163fxjxytmf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163tptqlwaa.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163zxxugpvi.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163sedvkyik.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163hhcktvpe.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163kgynyzna.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163wswclrht.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163xvpptral.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hfghhlgf.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163hnngwjka.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163mzwhibqv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163npvcayki.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163efkzizcg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163hmdfaqya.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163sedfnyew.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163aykwyslj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163wlcyokrt.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ptuixpvp.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163mtjzefjb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163mjmhqxtj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163ppzixgzl.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163zfvsxnvu.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163wfkdtirz.html

================================================================================
来源：http://www.sxryk.cn/163rwrskesj.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163iyljisaw.html

================================================================================
来源：http://www.sxryk.cn/163zbojwcfg.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163dlboztea.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163lfchleqw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163dpknrdek.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163gqnbkaiw.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163zwrrmwdk.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163gpbfnock.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163vdylpzxv.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163yibremer.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163vtjcpwmt.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163eadwydjs.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163nvpebqwu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ivettlxy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163knxvbbvd.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163vrhtzdqc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163deyvokyr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163sgleliju.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163fnqavvhi.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ulacitmx.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163xfyfjoms.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163cysvewfc.html


<!-- 参考信息 -->