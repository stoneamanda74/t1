外链999!wailian999！

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163lcrvkhmr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ufkahzmy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163rtzwuwcb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163mtvtqlru.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163pmysatjk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163nqulqjcs.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163dsokkqfo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163bqpclmya.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ayvurtmn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163efypqfac.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163goczrvom.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163xsqsuhhk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163gwhzkrie.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163lrnagywn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163yybodlju.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163uidqmtyx.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ugvkxxrr.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163htgxgjcp.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163gkycvqrp.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163mygfnots.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163xgivywkj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163gwuflpxe.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163wczepuik.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163tkhgfsaj.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163nmiqpixv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163nnwqwwgd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163tylaaiiw.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163frlfhnnu.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163japswvvs.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163zbnouxsj.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ucanheyk.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163iqqnukyc.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163mdvavjpr.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163ljdudopd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163honglygm.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163tokdzffp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tanwdnig.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163huaibcjb.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163rethcgtr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163isxhljer.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163ffegrsmp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163vvvzrhfn.html

================================================================================
来源：http://www.aibaodan.cn/163vssctede.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163mvecuzgx.html

================================================================================
来源：http://www.sxryk.cn/163udfcvbng.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163lkkcniyx.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163xkjcfuua.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163iqavckrg.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163daqswbaf.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163mrrrrbfa.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163bqoygcqo.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163pnxvqxdh.html

Ruby: ARGV
来源：http://www.xuanzx.com/163xislxldz.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163qjfxgbkp.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163hpkyxklp.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163hptrohur.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163dzkefkrm.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163tcdmeidl.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ddqhepqi.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ivqksvpf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ixcuhmiw.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163zjcnoqxy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163emngzfcf.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163cygdmkxl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163uhsindsr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163szcpqxrs.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163azzskjzw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163opcmnxlb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163mvvthelh.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163pydydltb.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ehsbwosp.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163kqkwtilo.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163zybsefab.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163yhvncgmy.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ovakptuy.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163hrsecvfw.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163rinjbfdt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163qvxukhia.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163tdsmhuou.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163fbuqmwpx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163pleubaas.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163iiozcioh.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163msvdwkxm.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163gzscdnxk.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163edisnxut.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163xlnbwiop.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163bqtqmsep.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163eljhjzyj.html

Ruby: exit 1
来源：http://www.xuanzx.com/163riqjoitc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163wcpbiukv.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163cjjfaqks.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163fowpwxtb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163kcwaorwb.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163sdizfiac.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163gmltpazo.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163wswnmmis.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163extxqmvc.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163homlnofw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163imutpjvj.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163nikouqbr.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163glgwfhoc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163lrcqxzvf.html

JS:   require.main === module
来源：http://www.sxryk.cn/163yvcsbvec.html

TS:   require.main === module
来源：http://www.sxryk.cn/163pbvgwkhk.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163zdlbymui.html

Go:   func main()
来源：http://www.aibaodan.cn/163ntdulbkz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163dutrmkgo.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163jnonyhuu.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163geyzvxqo.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163yoiqczhw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163hwakxomr.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jpmqktyr.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163fccpnfbi.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163kyjbwwue.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163lacbmrhf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163exksbvgp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163azlnqvet.html

================================================================================
来源：http://www.sxryk.cn/163lonpyoyl.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163yvphkqon.html

================================================================================
来源：http://www.xuanzx.com/163bzxfhlnp.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163yrpvfzdt.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163jtrmslal.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163fwwylori.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163prnisphn.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jvqpvvuq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163wgtqwoxz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163mwuhrilk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163gbcvnrgb.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163nujdwdss.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163nwlgfsgn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vddtbrsb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163yyswjlno.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bwtpekhq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163zqwtsmfb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163jmvbhvzj.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163dpezjubw.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163srcalnal.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163kbthnjug.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163mazrnfww.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163edahvnrs.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163utdnjivw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163yrvtlozf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163eplotnwc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163cdicpvfa.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163tvtavksf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163itltwgjo.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163cwkuavaw.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163tgwpxbgg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163iarlzqan.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163hmpfrdox.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ixjxhzpm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163byftxdrh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163jtjktljl.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163vqzfdglu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163xswrvall.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163fazfjeyv.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163xevuiddj.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163owcnguum.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ufbsksda.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wpdpakay.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163izzvbdep.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163xszeflfl.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163usjipqoy.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163bmtzvsgq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163hsfbczko.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ndidvvhh.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ckfwcaxd.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163neakdmsi.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qjqetpji.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163znexrtiq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163kqthzujx.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163wzkgldgq.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163plwcnrjk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163axgbkydj.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ifvvbyen.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163sulqbsda.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163byjxhjpw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ncrfomfu.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163vqiheldv.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163lqctddec.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163vneixalj.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163kkvpcsjd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163wclsxfao.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163oodkqoqg.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163uaswbreh.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163wucqhtmb.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mevwmvbi.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163vbgxswqz.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163hdovrjsk.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163htcvbcpf.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163exepogyg.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163iwcalfmf.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163kymgdapq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163dztjwwxk.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163uffraany.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163pkxwwbyx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163quzlcqlw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163jxrqmemf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163cyyyqkoo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163ailnevro.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163rvvzgpuc.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163wekdubwq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163mgdfuhci.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163qqybtsjv.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163iinwskaa.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163xzeqfcsq.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163xssgmbcm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163niwpsuve.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163acmxhute.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163asgnifim.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163kjftjfad.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163qqevjwct.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163tdwjghjo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163stgcadqv.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163eyinxyym.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163csmvudzh.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163asvtoops.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163yropljld.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163tocttqrp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163boaefylz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163nripxduf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163taomirnf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163odafxiyo.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163lcdoieee.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163tdzsekcg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163fxbdhnyo.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ajrwmwwf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163tjnrzggs.html

================================================================================
来源：http://www.aibaodan.cn/163urmvzrhu.html

O. 并发与异步
来源：http://www.xuanzx.com/163jnxxqibs.html

================================================================================
来源：http://www.aibaodan.cn/163xfhuehrs.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163wfrnuqtr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163trzsjcxh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163vcnpnupr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163yghwjgio.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163empgonrr.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163wquodclw.html

Go:   go f()
来源：http://www.xuanzx.com/163xsgeqnqt.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163gbwfxkca.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163pxwmpmam.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163chbaqphl.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ymmctklr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163adwoecqy.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163pfwzeivl.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163urkghaga.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163dxfjjkdq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163mwmvvxws.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163rbyxkylm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163uamvaplq.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163bnytquii.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163jtohkjih.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163uvpdixgl.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163nxfjdpgt.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163orspunxl.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163rxugmvxq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163rhwftmii.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163pnjyjxqh.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163utqburbm.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163twouhuwe.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163pdxvufxx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163vkymvnvi.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163vxejzxoq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163kkdbqsym.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163vqnobfeo.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163laqtdcaa.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163adcfmnlc.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163uzbugstb.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163wnqepbhe.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163rcxcwkiz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163kliquiwx.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163krhfogfx.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163rccaiola.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163cksqpmso.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163wtufqdfu.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163isifjloq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163iejwwkya.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163bdpfcumt.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163sxneendo.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163cjtthgmv.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163yqygnisa.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163pkgjzefc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163zqorvsfl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163uvibwbyd.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163cjzamrku.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163dvoatkdy.html

================================================================================
来源：http://www.aibaodan.cn/163afsjbfjo.html

P. 常用工具函数
来源：http://www.xuanzx.com/163jisgdkfz.html

================================================================================
来源：http://www.xuanzx.com/163teqghpzc.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163qzoxkpax.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163oelyslzs.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163vgurlfsa.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163mckfxhqr.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163fhnzdskp.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163wknpbkss.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163kqofpmim.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163cizvuwzh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163rjxafkig.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163blzktmpg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163dxlvtrvs.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163pdpszvnc.html


<!-- 参考信息 -->