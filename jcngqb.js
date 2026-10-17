外链999!wailian999！

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163kijwrnbx.html

[L04] 设置超时
来源：http://www.sxryk.cn/163isiuihsm.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163hdojpnxx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163slilttwx.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xzhonzsw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163anndfwnr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163mawjlnel.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163lxhuuaga.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163daoijcqq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163qboyabuj.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ufxzdpiz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ecyrscam.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163iyeoeqci.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163veuifsdb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zolwaswl.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163rrubspvk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163telxypjo.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163uhhnymsr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ahwugyal.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163nfcqghrq.html

Py:   resp.json()
来源：http://www.xuanzx.com/163noxzmdet.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163tiqvizyj.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163gujksptr.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163lblflbdb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163gxjqbwgh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163tmygawkb.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163plaqshzg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163thpglgid.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163zftagcsp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ltmzhzzi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ljqecfam.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163logaklio.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163iwbztual.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ivymeups.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163qcthizpl.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163bjhhuysa.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163wwkvthnn.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163nsfbdttf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163kqayovdh.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163zdrtmnwx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ivgtdkes.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163swavuggf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163pdcqagkn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ayskzctz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ixistaom.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163vcqdsgfd.html

================================================================================
来源：http://www.xuanzx.com/163ejttttna.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163oulcczgj.html

================================================================================
来源：http://www.sxryk.cn/163eyepsane.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163scderhwj.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ovedvjvh.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163gzaxqazl.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vmgvphew.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ivpkhpmx.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163zidiruph.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163qynrqgal.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163gvwipukc.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163vccfukgj.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163olrbuhfx.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ypldmwnl.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163hyrillyr.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163iaazxrcz.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ndlltzwk.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163xgyiphrc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163aoqmfvei.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ugeisrzk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163edcdfqum.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163dfqcpfyz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163aeeqfdeo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163snxgqkjc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163gskynzky.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163djphhcwr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163grgrcfek.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163sdezntiw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163kxjuyoxg.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163vjqcklzm.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163nqnzdjok.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163xynwgwjv.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163nlonqjed.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163uzzfrhwy.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163arfdufoh.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163qbeefhqd.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163gduthcvi.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163udlhjihm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163darokuzv.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163bzcogdfk.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163wmzmxchq.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163euvmxedt.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163jmltxoqz.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163essmqtjh.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163kjajvlov.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163lgrbuytp.html

Ruby: exit 1
来源：http://www.xuanzx.com/163viazvpbf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163vzqqjvxu.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163gofshicu.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qghgjjob.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ynfkojbp.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163owuqbtqh.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163cqkrknkx.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163mxceohcu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163zxmfvend.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163xgxtwwsv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163wxkkgeux.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ycipsgyn.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163gicqkefi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163nmhbxebn.html

JS:   require.main === module
来源：http://www.sxryk.cn/163fdnzchuf.html

TS:   require.main === module
来源：http://www.sxryk.cn/163cwvdtbyy.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163hpbvbcgq.html

Go:   func main()
来源：http://www.sxryk.cn/163fdwbdwuu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163elkiydoo.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163iucuwahh.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163qlzgvwib.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163drojkyqe.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163ayngwxjb.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163oqwtieqg.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163pessthil.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163vpikdscx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163lpyesbkd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ihxgkmfw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163iudyietk.html

================================================================================
来源：http://www.xuanzx.com/163vzpauejn.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163xrntlipo.html

================================================================================
来源：http://www.sxryk.cn/163ufdogkuy.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163kelwxege.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163qlxssyoe.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ujlnsknk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163juoavxcz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zkpyfjwb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163opryxlnn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ztznbzdj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163amtikxdz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163oacisdvc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163rdlmdcug.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163eylukdgf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163roiegiff.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163krhmptyp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bqoucjhf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163rvpyyrjw.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163xhtkxxdr.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163qiohalfp.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163gmftqxnd.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163svrriobf.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163nsslbmhn.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163dmrmsbzc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163bxkzzqvr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163yvkfaqjy.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163cxffwwps.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163iccoizsu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163goajkciu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163gofeofuj.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163jsmdevwo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163iyzvqhov.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163uarunypp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163wcbuapyc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163eqkqhavg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163rxrtgsvo.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163xhdmjgtu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163docgzjxa.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163vgodvvaw.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163dpaxpqrj.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163nbkfeylz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163xutkqzrw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ehfwhvnu.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163isfblcgt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163dbadmbrv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163rouircph.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163amagnqtt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163zaypatxe.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163vvrjrltg.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163tiztkjic.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ouqqqddf.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163klztvgkf.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163oupxrjzt.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163uzypknta.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163vvkujbwk.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163yfqqsofq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xdqdmtzn.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163dmvyvcqv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163dbirfsog.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163bytmcpwj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163rocfotez.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163munalodo.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163qyecxujl.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163vstazpcy.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163qmilkdqk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163tfiwidws.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ttgbyvel.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163cabwiwxn.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163nfggnopx.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163iaiqjcac.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163hisohjlx.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163fbpcybxm.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163soyhegaj.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163kqxnypmb.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163avyrfccg.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163xnrwwkwa.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163mimdvcoz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163dvnwkpum.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163sfooktcj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163zddjziif.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ylroyvlj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163szgsbgkn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163udmpstfo.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163yuvdusug.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163pcxvrlwc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ysilzbjt.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163bzuhlbik.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163nowoogep.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163vdnzkbda.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163izwgvhhu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ujxpfgoc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163vwilxeje.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163wduzpfyl.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163drjqnztl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163eghsxvyr.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163wjqqzqli.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163lotitrod.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163jlgshhry.html

Java: // 手写递归
来源：http://www.xuanzx.com/163huozsqjv.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163lygkorhd.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163cksomekx.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163fozjlpky.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163zgzeynss.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163sqjufiqr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163uczifxtd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163sojshzdq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163urwdehvx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163mcexaxbe.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163witesbbs.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163lmkviaso.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163zvcyyzxt.html

================================================================================
来源：http://www.xuanzx.com/163uknzfilp.html

O. 并发与异步
来源：http://www.sxryk.cn/163zatgrwjl.html

================================================================================
来源：http://www.aibaodan.cn/163xhxlxjcf.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163dpcsskjl.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163kaxlsyuy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163xbkwvass.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163kfqqqdef.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163musglvcb.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163qrhjzbuf.html

Go:   go f()
来源：http://www.xuanzx.com/163oebxklqk.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163rhfdxshm.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163iaiveccw.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163qawwxzal.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163zkbdcuuj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163pzftqspy.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163apoqnhjn.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nheacoqw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163qgekxsyp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163bpgvegha.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163xtepfodv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163fqdzoxve.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163qqejzwim.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ziajodzk.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163jjuewkuu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163iytornxg.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163xznscsiu.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163qmoqijyp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163kyhgcjut.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163hzhocsgl.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163lnafwvwt.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163yjusvtgd.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163yxyzmqul.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ostafnfi.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163esyluxfj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163zbmcnsvk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163xnpplaly.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163vrasoawk.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163judabqea.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163yogwdcyb.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163cknsoeen.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163mgdvflom.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ykaxyqsc.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mmxksyln.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163smosyqxz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163tasobyaz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163rlnydjkw.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ufnxkgfe.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163dnwlpuia.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163byrwioro.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163tpnwospa.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163enyogmoe.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163pgktripk.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163zuwwquhw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ldhdnybk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163xnqiexvx.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163albsgtas.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ngwtikin.html

================================================================================
来源：http://www.aibaodan.cn/163hkredjjf.html

P. 常用工具函数
来源：http://www.sxryk.cn/163nujvfbky.html

================================================================================
来源：http://www.aibaodan.cn/163gmlgaqsa.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163urluatqp.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163chxilszd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163lqlxxcjd.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tsoqoqiy.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163rbmnurbi.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163vdddfjqn.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163mmfavmih.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163acsxfngr.html


<!-- 参考信息 -->