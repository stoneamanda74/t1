外链999!wailian999！

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163egoewuru.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163wtjfcben.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163tyuxmlac.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163reulpflv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163qklfcyrz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rckxjaqa.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xuolgxyz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163jycoevbi.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163homvfxfr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163idhkjmxj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163eaycxzpe.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ytwcqchl.html

Py:   resp.json()
来源：http://www.sxryk.cn/163wmcivklv.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ivtboucd.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163lpihhrpm.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163rtsuhvko.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163jtfbbvuo.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163jhdynaeo.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163sjmbpdce.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ikhppgci.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163hdeslbta.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163fmfixrxy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ccfstiml.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163tdmnfpkg.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163hakxouzm.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163jwfzblpa.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163grwpclad.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163vmisifrs.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163xsysxigx.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163gaksqvno.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163sdzlnxqs.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163eoizquhk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163gxlphwdi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163lzzowebb.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163txnhdjnb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ljdfuxkw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163hpjaywlb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163wvcyvnbp.html

================================================================================
来源：http://www.xuanzx.com/163kjpyrlec.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163zszrthke.html

================================================================================
来源：http://www.aibaodan.cn/163bxyuwrye.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163spbglmoj.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163lazyzxcd.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163wnphxpiw.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163pwofxkkc.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163cylraifh.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163jlonoxno.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163fcpwnejj.html

Ruby: ARGV
来源：http://www.sxryk.cn/163mxrdohld.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163hpsvpmbg.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163bbbdngcp.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163vqxwwhxd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163zdyesaij.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163wfdcyegk.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163eyepxusm.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163vvrqcozs.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163hildmnea.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ocwfwhlb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163chpgtuen.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163mpoxngoq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163icnofruf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ppdjzooi.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163nmhiwgqj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ldmrvobc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163uaxtzdwb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163yrjpsotp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163gbehuamg.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163sykxgoxp.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163thsvecut.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163bmrgmxvh.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163fzfotblp.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163kfboborp.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163fldpiqjo.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163iqqkmgjk.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163dvziusbf.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163thuuoeht.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163pazpwjyw.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163bnfphsze.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163xvglmely.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163gfcfipwf.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163safzavla.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ujgjcmtt.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163jlntdpos.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163tshsagay.html

Ruby: exit 1
来源：http://www.sxryk.cn/163rkqyuuof.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163sbqlrtib.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163xabzpqop.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jtjclmdg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ggykxyqp.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163upzkielf.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163eajpgadi.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163yjvmjzwv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163nqsjdlro.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163zubbbqbh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163pokboczb.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163orwurnii.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163tdgqxvke.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163cptebwqx.html

JS:   require.main === module
来源：http://www.xuanzx.com/163bxpftdyc.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ucrbcvvx.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163bscbeuit.html

Go:   func main()
来源：http://www.xuanzx.com/163qgicfkgn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163usztizfk.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163sjevczck.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163vqrjqnes.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163fkitrxxx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163bbbtepwu.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163bhfjvwwu.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163tcdmtwbz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163wqsvrzwu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163gdlvgdkz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ffutizyt.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ovwcxcrh.html

================================================================================
来源：http://www.xuanzx.com/163fjuzuzcu.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163fonysnak.html

================================================================================
来源：http://www.xuanzx.com/163jdvxqbyt.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163qcxzsgeb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163xeapfxvl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163eqgbgtcz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163eelwrzxh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vpfsiqfd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163gnlzbesq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163rwhhqrzi.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163vtpbbhxp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163lcmznbhj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163eiqxpcxh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rsdijmwb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163unzjoiqw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163khtptmgc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ggrqdjev.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163vboouvtl.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163dzgmkgno.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163gnuvvwtx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163avdwyyjn.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163llhwczjg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163eufpekrd.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163omndatzg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163jropkfal.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163aasgbxoj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163kivzmqcv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ngdehror.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163vxmfjuhn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163xtylcuua.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163kxgrqool.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ajrfmyen.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163fnmqgbje.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ykwddvwr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zxxfbzin.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163xttfzown.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163lfjsznxo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163lifodzfm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163rmdkbdqg.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163durmgvmb.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163tmvbryuo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163mkgbsztm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163aaooopbc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163kljukqlo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ukmwjhkt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163nlffhquw.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ysmzanky.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163vugnyhwh.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163dktrctwc.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163eassmydy.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163tywztevh.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xutedmuc.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163tghtqyxm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163otylysdn.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163jdmkneeg.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163lrojalta.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163upcjqyda.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163hdyamdcd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163bdgjvymg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163nmhamqme.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163pydizruk.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163saaguqnv.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163lglrmjxi.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163tbbbqapa.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163eqexywno.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163hpufbmpi.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163gpxlssjm.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ruceijnk.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163zlsxnhop.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ashspuio.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qqjvrexi.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163dwgngehn.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163dmqpgucm.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163hgjxhbtu.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163jpzokory.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163hkbcmljq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ssmsbnlt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163khmkjhvk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163nriclqpm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163llsqmxgu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163toiybybp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163tcbtunve.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163cdbsxond.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163mqikaayx.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163rxymnnvj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163pfxuityy.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163xzutfijn.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163etitsyuo.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163pbptkqgp.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ruhmmyna.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163vqyzcbpx.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163adebmnjv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163hqgucpwh.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163ammqarib.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163sjbmplpl.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163umbphmzn.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163cymvjoyp.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163kaqljsxw.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163nwsodafu.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163khqlamsi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163leebpmyh.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163bvmtkcme.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163oqooydgg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163djkrkukg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163uzwhfimc.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163rlrrquyo.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163kzyqgbmk.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rbldnlqn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163nldeutop.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163reufuaws.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163heqxqqjl.html

================================================================================
来源：http://www.sxryk.cn/163jazuukpn.html

O. 并发与异步
来源：http://www.xuanzx.com/163rsvoyztq.html

================================================================================
来源：http://www.sxryk.cn/163redpnamm.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163hrbroyin.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163mxmjqliy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163lvumrooj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163bgnlthjp.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163dwadnmqa.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163jftpfvog.html

Go:   go f()
来源：http://www.aibaodan.cn/163cxvhwwcm.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163dlubzrjt.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163pfhyfqgn.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163pwbajjso.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163tqwichuz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ntbszdvl.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163uzhfffyq.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163fuqmseob.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163xcjqlhqz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163djfxkbsz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163jkihawlc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163lhlagger.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163tnaqmrkb.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163idvinzlm.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163nerztvzf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163enwqjcpg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qjdkiryf.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163fwyxitin.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163cqujkzff.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163lmovqsqk.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163gmrhgndn.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163hvlygkoz.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163rozalpbw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163umkoknnx.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163djetcecz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163kjbdhuko.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163ngqdkvhy.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163okbhzzja.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163pcphrufz.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163nzywbadk.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163akyijwom.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163howvvnqo.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ysnohpsc.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163oazeumrt.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163pmmpfhyg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163jsmahqsv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163umqjotql.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163poagmabd.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163zcootjgm.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163uosvkoce.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163uomhajkx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163sivvndxy.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ocrxwmaf.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163usldmdne.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163lpqmqvmk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163sjryoplc.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163cwuqbncy.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163mejraiox.html

================================================================================
来源：http://www.xuanzx.com/163iehbijmv.html

P. 常用工具函数
来源：http://www.xuanzx.com/163levgdabf.html

================================================================================
来源：http://www.xuanzx.com/163sdchfmsy.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163nbzwsnhm.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163tfrtvxdu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163reecyttd.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163hltkwlqk.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163umygdzik.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163aykebfhc.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163qmrjmrse.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163rqxvioik.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163vcipomgo.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163zizrftut.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163dpslydsg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163tfxntjse.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163pcxfevpc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163fqcaihna.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163epytnhwh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163anargyve.html


<!-- 参考信息 -->