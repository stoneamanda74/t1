外链999!wailian999！

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163mlxuqmll.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vikzznki.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163eautlksq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163auekuqxu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163grbtebvu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163jenpdvvh.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ahdapyzf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163qjdevohg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163afnenmgz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163iattcwdy.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163bmdsnorb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163yrzrsjuj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163kacrxvug.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163rbqolnqm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163walvgzar.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163hydusoxk.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163dhjoahvm.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163qbsgwazt.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ndksxchm.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163lhkzgvii.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163btxthmdy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163bcxveomc.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163bxxqfsle.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163fkcqdbdi.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163lvyatssj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163tcryyevk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163naicuhra.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163rsplwxof.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163owaalzjv.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163bcpwefsm.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163awmnmmru.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163fqvgdsui.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163imzodeai.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163enfhnyuf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163tjeyhcdp.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163enpgptiq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163yryxznhs.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ixyspsqr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163wzrglttq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163hcibnuoh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163jyqrxvwz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163xdapznwc.html

================================================================================
来源：http://www.aibaodan.cn/163sfgbreer.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ovhhhoqk.html

================================================================================
来源：http://www.xuanzx.com/163ptveeetj.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163yrffzjnp.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ygimawde.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163ucdismqr.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ltkqdvrl.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163crwuaeeu.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163fpscgajb.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ltefssjv.html

Ruby: ARGV
来源：http://www.xuanzx.com/163qmqpafqj.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163wsgywfsp.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ndvkbvqy.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ibgsfkjh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ociiyvty.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163sbetaxtd.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163oetmbrqb.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163unhhvump.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163oysoinpb.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163qdkpwype.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163thqkvinu.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163eqlljyzh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163zyyoqwcl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163zzeeuptm.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ornobduk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163xhtjfwru.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163imczvkka.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163frdebsyq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163egghnbtk.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163zufkfdll.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163oknqphok.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163vwpgciym.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163yjgwtvti.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ukonjhcs.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163atvmefae.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163yftkbbcp.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163umyzbijg.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163jldqsjdq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163zuonhkop.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163kwmzluxj.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163qwvrvzjk.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163flswwhsi.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163mjdelnma.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163hohkblix.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163hepepgak.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163hxijecpe.html

Ruby: exit 1
来源：http://www.sxryk.cn/163cfjfjdux.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163svrvpawe.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163qbgtkali.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163bjxeulsd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163pqwzeqrq.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163iseezkaa.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163uhzdstnf.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163kvbqgxxr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163bjgghgxr.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163mdwlppse.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163liqlrbdy.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163vxbqaiol.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163eqiwylby.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163lpaxtluu.html

JS:   require.main === module
来源：http://www.xuanzx.com/163nreuofdv.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163eitylnoh.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163tyhvukkh.html

Go:   func main()
来源：http://www.sxryk.cn/163djjbisgy.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163pgciejak.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163yvmtrfqa.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163fxcumtrq.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163gneompzs.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163ankrnnhc.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163hmvzwxnw.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163gipngbbx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163qbtqdbvq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163wsgkrybf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163bpujhwjh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ynwucvqv.html

================================================================================
来源：http://www.xuanzx.com/163xhpiabva.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163kmdlonht.html

================================================================================
来源：http://www.aibaodan.cn/163wgdeddkj.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163qlmjeujl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163wbggfbwb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163pelztkvh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163pfslpweb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ehmmikrx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163moxastdk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163bffmmtcr.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163nokgdfwv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163bmjjvhyr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163nbqpaohb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163pkbqmdmp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163qmbnhvvb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fpwvmhub.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wlfzswez.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163wdeifubf.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163jaslcitl.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kwwethrk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163jhxjbpow.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163ynxygdde.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hjuxpche.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163acnfmevn.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163niqcwolm.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mzrmxmis.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163necdnkgp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163tsfuqycs.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163rigymdjh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163trkgzlvq.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163abrimkme.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163xsxupfcl.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163lvwgjqwb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163jnfvpbmf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163mjnrdmzm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ywkvfwye.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163twsiftne.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163pswewwph.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163dvmzaibk.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163sbofrfyu.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163wsrefizy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163grqwslhb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163umrelfua.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ikkvoude.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163gdpcunuz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163jihaggjn.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163qrfsjzwj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163wvvqgvnf.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163ixflurri.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163zksjhuik.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ojmyczbu.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rfiyvnnh.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ucggqgqb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163lzxztath.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ztavikdy.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163rdjexlgh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163akrfsqpl.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163uqpdilik.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163umvwzpay.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163mtmdgjih.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163apkjnnaz.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ausjmqzw.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163zgdcpekc.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ljpedsli.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163okmogthk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163tevknpdq.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163nepxxoqu.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163uwmsfyie.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163wvqxryea.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wpaauxtp.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163htyfgykx.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163anvjoout.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163zynzqjdh.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163lvyvilme.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xnsgxvpu.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163hbulreke.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163yyxgjutc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163dywyvrxc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163gdpowrdh.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ntrukgzw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163rkyspmjq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163gogvrqmg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163slcvovsf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163wthvidmo.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163duhcjmla.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163wulbctwc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163dnuyqilp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163cnjcwrhb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163yhurcsal.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163htfsoguc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163pdhclmae.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163wgaybtne.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163nzeqxarz.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163kxhsssxz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163qgxragjq.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163byyynyuq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163mojmqvoq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163iqanwolx.html

Java: // 手写递归
来源：http://www.xuanzx.com/163zgyeldfl.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163gwksemzr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ohqatrsi.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163vsdpbexs.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163xzshngae.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163vmhezwil.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163kerlqzyo.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163klpdrsgz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163pdkdsuod.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163oyexygec.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ihvrgoym.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163wojwnmbx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163xfmnmtsz.html

================================================================================
来源：http://www.aibaodan.cn/163yqqlhpvu.html

O. 并发与异步
来源：http://www.xuanzx.com/163aejnqsak.html

================================================================================
来源：http://www.aibaodan.cn/163rnxjuojz.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163fcearvls.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163mjetxkxi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163nvfgcvxa.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163yqtoxdxi.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163orguivkm.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163dcjdkkiz.html

Go:   go f()
来源：http://www.aibaodan.cn/163ussbxtpo.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163dnudguzt.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163fngjmwps.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163acjeneuy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ywgxbbjd.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163jgxuzzkw.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163qtmhfbwt.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mncnebzg.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163kknnefdj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163xehgzplh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163gussjgds.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163iminzxbm.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163cqarnowr.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163nlkusbdx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163ivqyoqpv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163slswddwh.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163qeyudwyd.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163lctngcwy.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163bixqdhcy.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163uridlkrs.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163xpnwqyzh.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163krmcncmw.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163rxgisooa.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163axtocelz.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163zzvazbjv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163enudreub.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163chnsqkbv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163eltkplnv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163yynmvjbw.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163wwqjaiut.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163lsessksw.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163zwqbvwgg.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163mmmhoayd.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163eyocygjd.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163lisklfxh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163twzatkrj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163mhojknsj.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163dgzvrdcm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163lcvjmwic.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163qveqdwrd.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163wownifqo.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ixwzhciy.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163niitoqqw.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kwjinyjn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163lebrgbna.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163dyzkyega.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163vbtarhgt.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163dsadlqhu.html

================================================================================
来源：http://www.sxryk.cn/163dadzanju.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163vfshdnob.html

================================================================================
来源：http://www.aibaodan.cn/163ncmtubxg.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163zrlxorrt.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163fggjmazv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163vlnibfip.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163mxcwqqxj.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163aqmjpkfv.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163csrnibjg.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163xhyasulb.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163gykrscxg.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163oidjkwqd.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163cnvlwrip.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ohnquluu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ljpgziso.html


<!-- 参考信息 -->