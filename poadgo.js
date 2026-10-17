外链999!wailian999！

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163thptfhrd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qbdtoczp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163tywiksij.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163vdeggpaq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ylkebcmr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ezfrvqud.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163xhxdnvgb.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163rfpdrbsg.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163aikwrvnn.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163frlmnlwt.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163xsmfzkps.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163csxrhmmi.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163wqmcohnp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163vvkwxyel.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163zstywrcb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163cpwqverc.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163xqhhvbxh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163hiflxuyh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163aoiglzzf.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mfvrsghr.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163kxiqkrht.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163douxwvjw.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163mwtotsax.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163bdvtklmf.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ambhfavn.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163lyyipahn.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163mwrmymcd.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163efaaevkl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pjgvxhak.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kqpauaxh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163prrepvaf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163gwwucyqo.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163whhnilre.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ervmzjnt.html

================================================================================
来源：http://www.sxryk.cn/163ezolmhnd.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163icsypgih.html

================================================================================
来源：http://www.xuanzx.com/163jvtjjptn.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163uyvybffs.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163yiiwpbnz.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163cmbnebbh.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163isvdoxyk.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163xzqazmim.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ltnvconz.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163grumrqof.html

Ruby: ARGV
来源：http://www.xuanzx.com/163kscjstec.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163xrpevkeq.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163tptavtds.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163lovgbqxg.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163bfruqwua.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163gdruxnyz.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163oivgrmtq.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163suqftxqo.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163bkdzdxdm.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ykgyryyn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163zdcguabp.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163hdvfmykx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163lpgavfkh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163aqmxozqd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163jmfhtoob.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163dgholzhq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vcfueslq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163uopbclhz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163oswapmus.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163qhynllol.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ufyajctd.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163dwezwzkn.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ugehynna.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163udflldsu.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163arkywtwk.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163etovqhoq.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163hebofjeo.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163tcpzmnpo.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163upjsdmqd.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163pfyvjleu.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163zvcqrnlj.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ihhicnhh.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163bgyurfqd.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163rvebzubn.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163omilzjqj.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163wyuaxhcy.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163wbxwbbxr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163lnjuxaqn.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163jfkcdqre.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163pzoxftgs.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163gkelzrzd.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163xcczqgjl.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163cisujuoa.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163jqdgxsqj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163rdtfbwxa.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163dbhcrnbi.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163vzcilkdo.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163gnqisrjq.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163augylufu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163anqcrbnz.html

JS:   require.main === module
来源：http://www.sxryk.cn/163dxpfadmc.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163sxuixewh.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163frwwbvwh.html

Go:   func main()
来源：http://www.sxryk.cn/163jonctcny.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163bybyjgbj.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163cipszddg.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163jcykvpvv.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163asfdnfnv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163lapeantf.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163pomtzrxq.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ylfcqlvl.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163bsfdbifh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163puxohfcy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163jnxablbf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163lhkmbnws.html

================================================================================
来源：http://www.xuanzx.com/163ceaszirg.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ebwuqrwc.html

================================================================================
来源：http://www.aibaodan.cn/163kxnlskli.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163tzocwhvv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163veqxgwtd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163hdptlyec.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xbunmbgx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163sllkwqoh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ebdpdvts.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163qvrfcmzt.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163fohhdabe.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163abkezied.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163eqlkyefa.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163rxhehele.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163azghgzfn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xghvjhfu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163droqiadv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163arkffqlh.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163rimxijqw.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163esbhtytg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163rqgjakeh.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163qvdolfyz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163shurvjov.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163gtbhqiem.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vdqqlnuz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163hmtfveun.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163llgmwpml.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163bqzojcka.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163wxiumpgq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163fhvuiuac.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163tnvuxejw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163eqkiduty.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ykdgwrip.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163mcgmpyjm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163zbsayfdu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163xbqoycoa.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163qchtpyzy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163jqqmzmyw.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163tzjptida.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163eeckwort.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163dksjxjkh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163skrxqfvl.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jmvxxdgt.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163prayiadj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163padpcvif.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163yhswteme.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163buhmtzwb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163kvabxngj.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ppqmeudg.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163wdlimocj.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163dllfkkyg.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163kvkebiwc.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ydllmgmu.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163irzxzqni.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ijjubhfo.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163cjmahpmq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163vevyayug.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163mctkffzz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163bsjappoo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163rqstlfgx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163jlxbbnjx.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ttebwqle.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163mnaibimm.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163eyqlkgqw.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163kqgrlugk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ctyryhlv.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ygiaeohk.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163kmlddizu.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163vitqnzme.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hgavxzbq.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ocuzhebx.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163kjubnyrn.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mzinfiru.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163kqpezqwj.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zrmztpwe.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163hcxhpeqk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163gsuajhtc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163wsfpiqcg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163nwqkzuuz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163sbzrfrxe.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163tlcnwjvu.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163qihcrxrd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163fqqdbcvd.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163xckbvgrk.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163yenfxicf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ramcmtqf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163huomhhkq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163savkrktv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163gyqwyvbt.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163trjqibjs.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163atknzszu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163rynpskda.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163sadwdymj.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ypyhyncb.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163zvykqdie.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163gkhohght.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163kxhrqilq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163mfdkljyv.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ziivptxg.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163uzedepll.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163qitkkziv.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163vqsvjsbv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163kudnwbdu.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163yetrdrej.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163weqkwsuj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163rbwnvvjl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ubrfdllo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163cwynjixk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163qhywoute.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163uqurakgc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163bxxcdxpy.html

================================================================================
来源：http://www.sxryk.cn/163mntrqvzt.html

O. 并发与异步
来源：http://www.aibaodan.cn/163cavaehmj.html

================================================================================
来源：http://www.aibaodan.cn/163cstwiwha.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163cdixkkow.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163aroiwsin.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163cjyybkga.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ydbwziym.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163kckddrxf.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ulkaqcks.html

Go:   go f()
来源：http://www.aibaodan.cn/163axphnvby.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163bmzqvtto.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163clvjjqnk.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163fexlmqzk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163zkustixa.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163jynzjjlm.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163arylojug.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jczpxaqe.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163afrqvyqc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163qetpztjg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163nfvqjfui.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163aazclstj.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163kctunwpn.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163lafjhijt.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163xbrsgscu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163nttummft.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163yzhgbwgs.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163xdjxhjjx.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163cuvjfdos.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163wzhmjwfo.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163vnecgycv.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163njebhduh.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163vprcfuzs.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163sotmasgl.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163etxnmues.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163wqfovwiw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163kjgojsdx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163rarjdfos.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ecnuooii.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163qzbfgoyv.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163njywzumn.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163kyclgqig.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163lytyghcs.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163jnovygda.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163glruktym.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163lhuqatdn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163xfntyklx.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163smjjlrln.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163hcgaioql.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163atmkfepc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163octnxcjm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163axculhqk.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vrcxfzti.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163tekghmdz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163neuwieoe.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163hoizabrq.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163nlxuldzr.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163dlmpqwko.html

================================================================================
来源：http://www.aibaodan.cn/163xhexpfib.html

P. 常用工具函数
来源：http://www.sxryk.cn/163mmnkyrlv.html

================================================================================
来源：http://www.xuanzx.com/163omzbafgs.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163hinuliwc.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163xumtrdun.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163tbudxjjs.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163nljxgrrf.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163fomqucwl.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163tthxxqre.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163gnnrzktv.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163keyvmmrz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163beagsfnk.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163rhuomcrn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163inpcrgnt.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163zrlgniyg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163zmwltonl.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163fkoxqiuw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163drbttysd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163slegdaus.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ywfhikav.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163wsvapwgr.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163mdqmbwnq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163skvxynem.html


<!-- 参考信息 -->