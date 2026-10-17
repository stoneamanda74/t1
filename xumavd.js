外链999!wailian999！

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163kdzxiatq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163yqvdfyhc.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163qvffetbd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163rxgyxape.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163vtuqbfps.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163cuyrfpyf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163uiufzmhu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163gpdghmwf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ccdekriw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163zezrfqir.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163bpuqamuk.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163qemghwfm.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163lxovoqmr.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163dwvhmwph.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163izljarlq.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163uqwzzjoc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163dmxmbafx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163gperruwq.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163xgyocixh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163pxdegdre.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163rntcezzi.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163srcyuxzj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163klszynzb.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zwqxcxgj.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163znrrinsw.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163tcwabeex.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163qejpqgmn.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163szwwcyyb.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163poexjkos.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163xbfberbd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163tynhkaxq.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163sekovgry.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tlqhmsgi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qlnwycwn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163zzcztsbc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163xxzfrpzh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163ksksloiz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163nttvszme.html

================================================================================
来源：http://www.sxryk.cn/163dcjkvewm.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163dregllmm.html

================================================================================
来源：http://www.xuanzx.com/163qienldez.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163mspcmpyl.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163zwhubksm.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163rmocmylt.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163btntfozg.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lnzqjpei.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163xmfjspwx.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163bojupnof.html

Ruby: ARGV
来源：http://www.xuanzx.com/163dcwtngwp.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163duoytonf.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163attbvslq.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163jxzsuxrm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163hawgielx.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163tocptmsm.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163rqqubypy.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163vqbhcgfe.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163pmmozojz.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163xdwutfrz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163gywrxrho.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163lhpynkfa.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163cnosaaxx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163pjrlopro.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163bgawrlqx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ybjfdayz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163rkypvokb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163yaiygvfm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163saqbqgkw.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ngsotxdj.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163kljcjdce.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163bhmhaena.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163wfkxysdv.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163oqlqwhyg.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163tywjsxqt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163jqwzzjig.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163tzmgilgj.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163bimjzsmh.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ytfgmouv.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163nipgearf.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163dtmfiayi.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163lsmuorfa.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163jyxvisyr.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163vkkgtgrh.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163csnvsjqw.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163wbiyksaf.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ajafdkch.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163wcausers.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163xxmwwden.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163nfanucir.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163nenblnnr.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163kxsekzfh.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163tvhzbogg.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163dupiqmuw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163jfxdemdt.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163vdxrpqib.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163hfbyjjbn.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163tuvoipmu.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163hyazufng.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163drgsvoen.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163yjwlydnz.html

TS:   require.main === module
来源：http://www.sxryk.cn/163pnshqqpx.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163zohrbcrx.html

Go:   func main()
来源：http://www.aibaodan.cn/163qugzofyn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163pxsxlxhm.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163yobrxkck.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163psbwidto.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163rcypjxnv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163zhrfvvlk.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jjrcszkt.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163danyeyzv.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163rufaesww.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163iheghkft.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163qbokpqhp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163sevubmxg.html

================================================================================
来源：http://www.sxryk.cn/163ogdonjzh.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163yagruztu.html

================================================================================
来源：http://www.sxryk.cn/163wqfsrjkv.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163niipwdor.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163vmfsuvym.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163golpnrkk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ytvyvpao.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zlqgkeno.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163hrsxtszw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163jlpgtors.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ctphuvfz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163nrslopbw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163zmusbdyu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163unvcxueq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163powpscep.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163kcciiibd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ujapbkya.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163itwmwgmb.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163olrsbdei.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163jxezfhkh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163wnghadyk.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163lyhlxbsn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163lxixcazr.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163gxyxulix.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163wpgdchtv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qifntydh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163qeurssnm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163zdxsybqu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163aexxobho.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163uwgwbion.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163xtuffqiw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163bbsfziwg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163eupezelj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163twbcwjqc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163zxiyamuk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163gmmvdzbc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163wwsspagf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163etsocsdh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163uvbrulrv.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163vzgbypfa.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163cqavhjyc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163uzqricyu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ruzvqwvo.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lllzntke.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163mofaoizl.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163cipzylyu.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163omcchixe.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163tdjhoqtp.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163qnwevzmi.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163dwsotjpc.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163rjhonovg.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pqvfvcdi.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163skaufvvb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163atjnqtwa.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163cqcgcdmu.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163lbjseacg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163fisaopsz.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163fywountw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163izjyvxbe.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163zuhyqwiy.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163unxrtuyf.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163xtpaqpel.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163dcvgvspv.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163nbzlkxwt.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163slkzazqb.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163smiqskra.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163mdktnjzy.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163jhtuymxd.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163jsldejkd.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163utoheols.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163yqgiqjfu.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163nxpteeza.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rdjecahu.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163hjalmixi.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163vubctedy.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163muzguezt.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ttujcchl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163qleethny.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163xkqqxzvt.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ciuirmem.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163exleoldq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ipuiennd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163jxltktww.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163mbnpxxcm.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163itkeusjj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163xknnmwak.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163bzlpmrxf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163zivfnkky.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163mfqzbdqc.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163sbhcnuhb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163qqifaknb.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ucfhqewp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ornjgpcl.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ifsbgqig.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163pzsighwx.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163oondlocd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ghbogkqc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163nqfhcffh.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163xkdmbolf.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163vxgpahbg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ibwacpwf.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163tijucjnh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163sjszadkt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163zkmramuz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ithbsiux.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163hoxeumlm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163qoywpgpq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163fnbtuxnp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ymakqumg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163vwvxzchu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163bayxavrh.html

================================================================================
来源：http://www.xuanzx.com/163ifzzehay.html

O. 并发与异步
来源：http://www.xuanzx.com/163byzwtiiv.html

================================================================================
来源：http://www.sxryk.cn/163jixgjryc.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ogwplnmy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163alzmcumq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163afuyydtv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163qrofcbfc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163eoskndfw.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163pqpxnazx.html

Go:   go f()
来源：http://www.xuanzx.com/163cjmdqnff.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163kklazkcf.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163qhkfxyce.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163xhnkwgjp.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163hnbxgkrt.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163tulvbphw.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163agaasakj.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mqzotdbi.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ivycoxaa.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163thdsaryu.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163psccmhvk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163mzgpqeaf.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163fikyixix.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163lkdxinjz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163abgfrkld.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163trqmnguf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163pyaiprqe.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163zqfkkamz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ttlckeag.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163xltnoalt.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163lpdgdhdh.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163jsubxhht.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163hwadvwxp.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163piknkbka.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163twndgopd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163yywksrnx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163kmnekwlr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163itzdazvc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163mywdpswe.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163hsboolbn.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163pbwbfcap.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163sffehobj.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163izahhplb.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163hisyujij.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163aarfmiix.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163rlesatcy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163aibxaqqj.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163lieuvzdg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ytazlmis.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163illxtzao.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163xufhqdvo.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ribiiplw.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163xdmrlsir.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xyhijtwx.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163rysbrdlo.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163gcdjvvhr.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163nklrtqpc.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163itiazryi.html

================================================================================
来源：http://www.aibaodan.cn/163jjmuazoc.html

P. 常用工具函数
来源：http://www.sxryk.cn/163wjxilcaj.html

================================================================================
来源：http://www.xuanzx.com/163uisiphyo.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163fhftarmt.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163nyouiejw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163stmfuomu.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163rghxzojz.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163invqvpwp.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163evcbboyy.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163vltqqjvx.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163shdojqpm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163qbszkxxa.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163nkdpismm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163vzzemtxv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163pvrepcuy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163dsgeuelv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163bulaidyf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163oneabrbe.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163rdxudcuz.html


<!-- 参考信息 -->