外链999!wailian999！

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163kntiincb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163nwclpaus.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163raklmvoj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163jfhjccpu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163gcjbqzbg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163sblxqbyy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163moshflud.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163wgdrdjnc.html

Py:   resp.json()
来源：http://www.sxryk.cn/163wnwtkths.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ffuolhbs.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163usxxpzib.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ncmtnfli.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163zgnxtdmr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163glcycfkd.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163vinfkzvy.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ntgouztf.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163thqlifom.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163tnqdficj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ovewmyie.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163qguovdwl.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163kfcllxyy.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163txebjvph.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163lgiitvks.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163uwgqwxvk.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163fvhbgcbh.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163rexsfdrc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163tswvkxgm.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163czhxrlek.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xbqfxwun.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vhhtctpv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163blngxryl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163wwvrgdld.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163vwustonw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163pmufudqp.html

================================================================================
来源：http://www.xuanzx.com/163wllfkxef.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163mxcbzkrq.html

================================================================================
来源：http://www.xuanzx.com/163qsaliddo.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163rihivoqa.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ylhodkpw.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163bmfkwkbn.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fxpwrlat.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zyzouwck.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163ulmguokb.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163xrvpclbc.html

Ruby: ARGV
来源：http://www.xuanzx.com/163pirsabxw.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163bufszpgk.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163leitiexq.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163owobganl.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163cnqrzglx.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163xwsfyifl.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163lsdpvpgh.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163setlngvx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163vrgwccix.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163zqtijjdo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163dqyjfhro.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163cgeajjfp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163fpraunms.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ekhbqdtm.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163lvbrtwxi.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163oukxtqxd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ualmvauj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163brklyjmd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ezulcoux.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163qtuwokgw.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163wsjkolfe.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163bkqafpcm.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163eqiodkgy.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ddmilutq.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163pyfovfae.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163rpfwfbde.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163sqqmnjth.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163yoavnjls.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163waghulmx.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163fnyznbxv.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163xfrrynfd.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163qkmajzrn.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163zcxtmjda.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163rybehamx.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163xagasxqr.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163hlksxmlt.html

Ruby: exit 1
来源：http://www.sxryk.cn/163oeurwvci.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163liqbhyun.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163onbupcgd.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163owlyrcgb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163enhwoqgx.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163caekwxej.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163jbgvcsji.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ozpncefq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163clfsfsry.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163qlsylene.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163egtjolds.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163vdanpsqc.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163itaiwcsn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163mwevsypn.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ismnrhfc.html

TS:   require.main === module
来源：http://www.sxryk.cn/163fsgqnovg.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ozyvfeuz.html

Go:   func main()
来源：http://www.sxryk.cn/163jowjnqvr.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163fupvrmer.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163yllhghle.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163qujqrauo.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163obyjprch.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163jqbqkxud.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163rncziiej.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163vcdfxtsd.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163eaepwzgu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163itvbkxuq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163rweplhig.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163bkaghtmk.html

================================================================================
来源：http://www.xuanzx.com/163fjiscibv.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163jggtaovz.html

================================================================================
来源：http://www.aibaodan.cn/163rabyvuod.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163fvahxxsi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163pwswjlry.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ovxsgpgc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163tpcrkrxg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163oabuwtbs.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ntwobjsu.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163nxlzsqyp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ksvvcnql.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163bidvxtqu.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163rgokbuui.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163aohaquyd.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163kuhlpvko.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bnurxirf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ajzsjadr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163vefvnoru.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163exdfqalf.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163sjffablo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163wzqfgfky.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163jsjdbjrm.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163tmpbkivp.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163qeeyyztr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163dbdvkvvw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163kvonvpur.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163mmqxwkqf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163bldiuqlc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163iezvmtwv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163vkdstnex.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163qpjekzsz.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163tkwrgiix.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163grbflymn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163npoykwsk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163cvsyakvp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163pejfoojn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163eaeyaewj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163hgmjkvsq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ohhxitpk.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163bbqasnqa.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163govinutd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163iqlkrmtr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163bmdlaxqu.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163zrwqaojf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163aovtpajo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163qodpxgwt.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163tyduvzhg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ppxyiboy.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163ezblcmlf.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163zatibmzq.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163whheotko.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163oktwzrho.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ffkccoss.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163wddnpdkr.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163iqtiqycl.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163vqntrctb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163krtudraq.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163jwciraqu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163hwhsholr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163hucfpczt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ipqywyqf.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163bodviseh.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163wobvbyre.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163nrdmkkzv.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ciujoqpw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163wzpyhrig.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163usdzgyge.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163aslcrooq.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163suivdxwm.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zotvfqdp.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vpcfibnh.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163irraavns.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163icxbbwvj.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163ayzclqhr.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163rnquvmbf.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163iqrqodyi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163ktagpdcl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163fwgriqvx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163qryrydbz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163wsdmgavf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163hjhghzcp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163ukfkqkmh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163vkimiylc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163yaygghsv.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163siueeiax.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163uqsxzzak.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163fyqayfts.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163knikeebh.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163qvtzsfkx.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163omokdgth.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163yxqljxix.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163zymzxvut.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163fklxaoai.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163djcmlrcq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163donxsihp.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163uiplvbxi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163fzuexshn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163qvabgjbd.html

Java: // 手写递归
来源：http://www.xuanzx.com/163orsdwmul.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163gvhxcbba.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163nbqbmjip.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163zuzvlnhp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163bwavhfjb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163isfoiemb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163hwvfanrw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zvlaqntn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163potcvgpy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163bfukctgz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163thwrmgie.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163usxyrdqg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ryiwubkx.html

================================================================================
来源：http://www.xuanzx.com/163srqshjkb.html

O. 并发与异步
来源：http://www.sxryk.cn/163itmwlnaw.html

================================================================================
来源：http://www.xuanzx.com/163hffwulra.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163fqowlqvq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163lntavqya.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163hcwhmygz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163gzrvvdwt.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163zwzjnlnu.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163iyxqjlif.html

Go:   go f()
来源：http://www.xuanzx.com/163jaiihpsd.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163fmtzuwdy.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163oaziscol.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163uaxruthq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163logremzf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163jhmqiysc.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163cqchrkaa.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163lxjjzdro.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163cwdcoohz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163qpsqgdlh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163vbozpsad.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163kpuflqvo.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163dfhnlmyu.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163wddatntb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ugciatje.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163deqmvwwf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163efookoee.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163eymkkzkh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163gvzoeron.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163hjeosxgq.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163vqbcltbl.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163igrhguhp.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163jcnfansk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163nwsogvqc.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163dtromxwf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163mejpbyya.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163iymmivcb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163imtotajr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163uaoykzum.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163qgkaqdpg.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163vpfwgnyh.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163nqpuplhx.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163kfzxobhe.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ndfvzixy.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ekwksbnx.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163fqarlmju.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163yocomiub.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163riktrbvf.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163bktrcpml.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163wuqbztql.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163nysfzbke.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163cgktextl.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vcsmljem.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kndentcz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163nnviyghp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163lvevvmsy.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163dvszuhqo.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163jhqyfeec.html

================================================================================
来源：http://www.sxryk.cn/163lnhbdude.html

P. 常用工具函数
来源：http://www.sxryk.cn/163yvujtfmd.html

================================================================================
来源：http://www.xuanzx.com/163ehrsfkbx.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163sgffmujj.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163voxtuhav.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163aptpmoeo.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163yabfagps.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163mdfpaaen.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163skmhbhks.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163qqkxqtsm.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163zzcgpcay.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163amzonkdv.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163gttiwgxl.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163vyqixkjg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163kgqhwngn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163shlsdntv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163adzjivye.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163lkkmckqo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163knjfcuyl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163tnydufgs.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163jzymjzhk.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163pmojoxah.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163tmrsnlov.html


<!-- 参考信息 -->