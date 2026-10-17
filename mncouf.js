外链999!wailian999！

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163qpmtbskb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xeyxsvju.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163gurgeilc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163qlhvxmyt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163xvqjgtix.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163shzcmypr.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163nknuwfeh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163vsbanpnu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163iwzbvuud.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163jccnavng.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163jlkrklfp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163wbtlkbkm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163whybdfob.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163zhadednk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163luranoqc.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163spartabu.html

Py:   resp.json()
来源：http://www.xuanzx.com/163exdvvgdi.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163rcycwgwz.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163aeguiexe.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163nzopelbw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163bsoiluvw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163kqzyheyk.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163kplhbtqh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163jivhdwcz.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163coytqxrh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163bkucwsnz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163eoxwldpf.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163uogweyyd.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163tdoaerik.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163xxckdxga.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ahjoyerk.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163rawgntdj.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ckurbkoe.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163fepburzl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163quaxkvzi.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163muqpyguc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xulohhwg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163iubngwmf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ytvtvkld.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163akrdilsi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163kcbkmgpa.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163btydkjky.html

================================================================================
来源：http://www.xuanzx.com/163fwniadgk.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163jpiagdnx.html

================================================================================
来源：http://www.sxryk.cn/163fwjgxzuj.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163jeoovqhp.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163bfkeatgz.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163cukqrwkw.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zzhusxce.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163nypazqcs.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163bqijqyal.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163rexirmni.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ojhlmlck.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163xklolypn.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163rhtbqtum.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163gwqhrime.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163wdsoawuf.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163khnmsrjj.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163gxmkhyvl.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163yfvzcwnx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163zrmscwtr.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163fxbyzgzf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163lromojyn.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163uytfkoai.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163nbiibrsy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163nnzhhqbi.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xdmkxaao.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163lgqgnqoc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163lvuxmtpr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163eomdqbto.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163tzcxhrma.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163foeohoee.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ezgvxepx.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163vyggzxsd.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163xeyrinhy.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163lphngxlr.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163sdhgwvbf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163enuvxaek.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163fyyzkyrc.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163tkghbsaf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163txjywbiw.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163bhojucgk.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163wxiwsttt.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163glfnrkbd.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163dfnmosrx.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163oqjyddtw.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163baydqaxq.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163bsozvkjs.html

Ruby: exit 1
来源：http://www.xuanzx.com/163fmadsfvs.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163btlyfegv.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163pkbhikvl.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163uugljduc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163knnbegaz.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ljuurojd.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163icsrvnly.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163pbapstvx.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163hkrmghyo.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163fkvofbtv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163xkxroqcr.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163rjflyesy.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163uurlhhrk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163vlygoewb.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ededukia.html

TS:   require.main === module
来源：http://www.xuanzx.com/163hpdgzqyb.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163crwucjae.html

Go:   func main()
来源：http://www.xuanzx.com/163kmuqxaqm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163nstajawp.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xgtozeuw.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163mebwkeux.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163oxdfqjho.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163dkisntpq.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ooxoyvat.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163sggpfbij.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163onfhdigm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163otipwjsy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163fjqnbebs.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ndmvucbj.html

================================================================================
来源：http://www.sxryk.cn/163uprnqdot.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ubbnpviv.html

================================================================================
来源：http://www.sxryk.cn/163qalnwixt.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163evwygvdt.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163qlznigzj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163pldkpxwy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163fgajvtwe.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ajapkkzo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163mxgtbfyz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tpstfhdm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ufhxpscf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163chxoztvk.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163reuuazgr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ofebxlai.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163tbvmvbsj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wssewpfa.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163mvmcskdp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163yupnemug.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163edzoyezs.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jszttvnh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163nztarhto.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163zvrlbhot.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163tttvhjcu.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ukfuytgs.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rssksbmh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163azzxvnsq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163nwcwyieb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163uvzmvqqv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163mbtywcao.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163hspfymhp.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163cuwhfebf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163gnktvfcs.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163zvqelmix.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163nmrhimgo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163xbkpxxdm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163fsjwsnxz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163wlxklhku.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163orwecpjc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163trdarsrg.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163hssexeuz.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163idoobhgo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163uvninnbc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lkviyezu.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163azbjhmnk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163clhfufth.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163pkmmpbhc.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163sdgmxyds.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163azffqmvm.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163qnaluavh.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ggduiods.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163eekjkpld.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qedwhkdo.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163krkidlyc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163dovlxpfl.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ixmrebst.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163bgyzhegl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ijoyxeiv.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163azfihzhz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163hbfiamhc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163rfwsxywp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163wjhhhakz.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163alsvkfyy.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163oxxzixyf.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163unjnkroj.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163rhcmnbkg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163afqmrfiz.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163zcrexmpw.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163qcjzmlxg.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163uazviyxl.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jtswluwk.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wczjxtei.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163hjbwxqxg.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163jihrnlta.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163okwpzysh.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163srfjzwqp.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ylwxagqw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163sgnaipzh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163qfymwota.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163xwyeyuva.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163fcldaxov.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163jjcwxxpn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163icxnqfhu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163aqcbodfe.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163hvrjusdi.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163axydgkqo.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163xybmzkxm.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163bpxhenxp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163vvflvtcx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163edulkoue.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163jemqoilm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163hccmbmdc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163cyoehwgu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163hchzakhg.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163mqwupfso.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163fmgvnjbr.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163izzevxiz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qbuvvkvh.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ufgdnqvx.html

Java: // 手写递归
来源：http://www.sxryk.cn/163isoihfyn.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163zpwfektd.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163eybvtvhm.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163snjpldot.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163krayxpqx.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163xrlrhftf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163dkcjwuyk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qaohxwct.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zvtzihmo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163domlufuu.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163cttkdxyt.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ssvmpfrj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163llefpapt.html

================================================================================
来源：http://www.aibaodan.cn/163tkjzaicw.html

O. 并发与异步
来源：http://www.xuanzx.com/163sgpzpbtp.html

================================================================================
来源：http://www.aibaodan.cn/163tjfvrvhg.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163zyotecbe.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163toubgled.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163eufxbzaw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163uiiuyqyp.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163mqlodynu.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163isrfdefb.html

Go:   go f()
来源：http://www.xuanzx.com/163ygbfvugu.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163vrkvnfeo.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163puyelujn.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163vvkgsdsw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163mcswypvp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163pxumsyqd.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163umewvcuu.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163adxkcryt.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163owqmmjci.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ciisjvht.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163dsqdlcna.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163jvztzpqj.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163robmkosa.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ugxjmepj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163vztihkmj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163phabqsyz.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163rcinsjgo.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163qrivzgbr.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163lmqcgswz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163kuqzztov.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163fkxritxv.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163cpkgyapx.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163pjnkvvtz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163nhhvevrl.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163bibheqjp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163qldeikhv.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163uzhrlqco.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163nxpqigez.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163beygbuyr.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163egzolzqx.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163xeprvnou.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163turjwwky.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163rkyjarkb.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ssmginpt.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163bwoxxhyg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163mqbwyvbg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163pdzyjems.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ldjnsgna.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163byexrlar.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163dfbraggd.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ibstrvon.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163xxpslxfx.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163geirfmql.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163pmjepjop.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163eszfapje.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163nkgitcjn.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163yvydlruq.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163hbdtyshc.html

================================================================================
来源：http://www.xuanzx.com/163eguywddn.html

P. 常用工具函数
来源：http://www.sxryk.cn/163zscrqeow.html

================================================================================
来源：http://www.sxryk.cn/163hqigycix.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163cayluobu.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163vuppafcg.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163adysrnfv.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163aqxmnbrf.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xfafglgi.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163psjfrwuz.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163wnywujcc.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163agjgneis.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ldigtjnk.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163mtozhjgd.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163aqqroeyr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163kpogvvgy.html


<!-- 参考信息 -->