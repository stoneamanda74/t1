外链999!wailian999！

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163xaxawsuq.html

[L04] 设置超时
来源：http://www.xuanzx.com/163nlznouyd.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163skfiiqtf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163dajhtite.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wnqifyvg.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163mcrcrlkb.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163cwhlgcgu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ehbwofwi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163weeakzvo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163bsiymkoa.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163puwbabel.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ixugmtyx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163giurkowa.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163fczpwfuj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zvybeoaj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163minseqfe.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163xdvprkzc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163jewwrqyq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163fvhncnli.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163olwpvyop.html

Py:   resp.json()
来源：http://www.sxryk.cn/163torgfasu.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163oqhccmax.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ouqklnrh.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163qdccxwrd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163rfntejwq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163zvxtflil.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163weuudxgw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163kiyytmsq.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163imjqjuqs.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163oaikugwq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163gzseuhdy.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ucdhymbd.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163fgdaincj.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ihbauyap.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163dgfrcotz.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163gryhlwqn.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163yggcjjak.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163yogmqzgt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163gnqvxony.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163unbxdyzx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163wugwqdvh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hwtrckjh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163vgmsxqzs.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ugpggknc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163hwyztitf.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163qalcyqyy.html

================================================================================
来源：http://www.aibaodan.cn/163vgqeenqp.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163jlupognl.html

================================================================================
来源：http://www.xuanzx.com/163ibqknmit.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163gqwufufy.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163yynskjrh.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163aecxdahd.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xpukieah.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ilqcvngr.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163kdbrifpu.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163yybbkkky.html

Ruby: ARGV
来源：http://www.xuanzx.com/163tbjwxzef.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163npivwhwn.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163kpwlnqix.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163henarnes.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ynzfcnij.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163kjupvarn.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163pcmihubr.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163fnnocuyo.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ckhemhng.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163gvciltpz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163rqjakglu.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163lafyrwid.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163jdpologj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163dlsygvtl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bnukhyvh.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mlofqxgf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163rjeipdon.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ixkffvvt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163hkbsopwt.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163uaqgmmte.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163dsetzrkj.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163amzpyoht.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163cvhrfpuf.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163vbuqmdyj.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163lohchrrm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163cazdrwgd.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163gmpzducl.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163tahgrojl.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163zfgpwdgc.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163cqnnjslc.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163hvophwjj.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ouwktgmx.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163xmpvvlij.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163divyjzfc.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163gfcieyuw.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163nuqftyuu.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163zyyxdvtz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163bnezxhnf.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163pkhbqyer.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163dmrxqpge.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163xmbaqdaz.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163qhodxafa.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163caxxfksj.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163naxvxrsg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163pynycgmb.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163hbvhtxyi.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163nizcaqfu.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163skathxff.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163eeorscqt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163tshdkhyb.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ocrlbyuq.html

TS:   require.main === module
来源：http://www.sxryk.cn/163gnznuyax.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163obbleycs.html

Go:   func main()
来源：http://www.aibaodan.cn/163qyhsqtkf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163jrcjrhie.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ewlhcdwh.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163zjzjtdes.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163fndqjtsz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163gcedobzi.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ztirbtni.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163okjyqjqe.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163qsagnofe.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163sroyudti.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163xverdsac.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163tadptxdl.html

================================================================================
来源：http://www.sxryk.cn/163yabkjhxm.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ccycqeyg.html

================================================================================
来源：http://www.xuanzx.com/163heboyrrc.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163tqqmiwhb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163bagtcjuo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163bdnhsbef.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mjsjndqf.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163uaolaxvj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163szygaheh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163avnqwsmu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ycimvdip.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163lbnxbjym.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ekpcpyyd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163vsgzmfdx.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ehmsztiu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163cmmclvgt.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pmobogwn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163totjxyqv.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163rrnnujqv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163cmbktkew.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163brhwslum.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163qcsfufzz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163iasubjjn.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163xgvrixhf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163amvgqyww.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163sdeayzht.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163chlnwuex.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163mkygqshm.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ylfwoasm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163cdozubea.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163wylcyddv.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vfxbohah.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163mbluhffc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163jbdtjhnm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163rewmmjcr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163xillnkgp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ejzmzodr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163nafkzqsk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ndjizfqs.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163yjhghqzl.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163immdhonx.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ksetbnxp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163nasyafcg.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mnrkwojp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163tqvrfzeq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163givlylcs.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163joulpegd.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163gprcyvaq.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163htrnxlzg.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163geajgjvd.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163tlsiudrj.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wbxbnmvz.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163uetvkbqp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163vldmaxor.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ucynmedl.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163vnadgajl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qqhipidn.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163evqcuioh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163qltwqoye.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163uepkyedx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163rkpzuygy.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163fzqvkwbj.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163thhysfmq.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163qmjwvops.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163wfkcmxzw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163wtwbqcra.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163jjflwcdk.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163bbzpzjad.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163gcbcjytz.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163oxvndnhs.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163edekiymh.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163hrfasjck.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163kuwssblv.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163jeloboxo.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163uovojvjj.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163evudfwsf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163lqvdnfxz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163rgklbykd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163spalaffn.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163lesywnys.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163hibzvaxq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163kmqrgqku.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163kmjtthjg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163idxphidt.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163nuccysuk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163kbcnkwdi.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163botpcohg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163hgktpkdi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163xrwtdevf.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163aqkximlt.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163yfxfwmqv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163nmlgeqxm.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163gycllcrr.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163cmpqiigu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163bkjynpbs.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163obkvszsc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ysrlbopp.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163wrddnogv.html

Java: // 手写递归
来源：http://www.sxryk.cn/163kckgnkjg.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163setzewpk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ohvtzkgv.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163bbsakplv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163xxvhxggv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163nfwkluvh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163eswouhjs.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ktpvfvxu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qcolyltq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nskvcucc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163tvpdgdhh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163mkzhhvdf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163dpmpzuld.html

================================================================================
来源：http://www.aibaodan.cn/163lypmnjod.html

O. 并发与异步
来源：http://www.sxryk.cn/163pmqbmkcf.html

================================================================================
来源：http://www.xuanzx.com/163kccfjwea.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163qpjehsna.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163vvgbxbxy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163geaksheg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163rxybgeng.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163xklfsjcn.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163zdnrsyor.html

Go:   go f()
来源：http://www.aibaodan.cn/163evnpbelz.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163rbqccdjm.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163exondggn.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163nuqnuyqj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ggeruxow.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ipwxloxj.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163yqhftsuy.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163jgnkplrk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163qtzlarnb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163redqbtdm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163fcxcstxp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163zvcniikf.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163wxgfrkfv.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163mcpqqdki.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163nnrvlkdg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163slxwksec.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163hbphweqq.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ampexbfu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163qiwczzdh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ytkpkpor.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163wiuqggvx.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163oicqffjv.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163drmsvyhs.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163zkhmiakr.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163kkkwzdlj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163pqglxusr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163wcwopjyx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163otxqahmn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163hwyjdzep.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ftpzoesf.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163fztmsodx.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163vqztqvxw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163hqtinzue.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163lkkyvijf.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ewyelwhe.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163nahtdgrm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163cwbshwxa.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163wyubanmb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163eolcvhuc.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163lnynzsnq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ijpvdoix.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ydhrcmiz.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vnooqrho.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vemeamhm.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163wlhkqxnn.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163iviqraqh.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163shcjdhza.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163gxkovaci.html

================================================================================
来源：http://www.xuanzx.com/163zcpkgcmo.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163trcfvioq.html

================================================================================
来源：http://www.aibaodan.cn/163pnqtlwta.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163puorcvmt.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163xenxfekv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163pfdnnwsc.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qafnzzhp.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163sedhzkoz.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163polspbjn.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163onzuzorq.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163rpuphptn.html


<!-- 参考信息 -->