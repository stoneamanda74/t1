外链999!wailian999！

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163igzlgbry.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163tnazoiev.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163oekampwq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ohnskfyj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xnztuyie.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163bbnowost.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163bdazjzfy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163pejmlxmo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163kcifnozc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163cbsjtbxn.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163wsrhzjzh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163iofvckxu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163apvurnot.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ijciwfaq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163pumgtpcm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163cqpqqhke.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163jrisayzq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163yxsigezk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163fxpsmaze.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163tscbkfom.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ovpmhwcv.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163wcyhbogj.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163mqmsrsnt.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163jcvgwkwn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163trgfrssw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163kwzsqyeh.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163dmigggei.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163mtngexeo.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163pkvpxhkp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163cnnuqvpy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163sqgejwfq.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nahatilt.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163geiydmiq.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163jutnxzmn.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163aojesjre.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163obanqsyo.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163bxfihsom.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163hzjrlivn.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163auhyylmz.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ecvxomzu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hcamnkwl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kpqvhgix.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163oqokabyz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163vqelnwqe.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163meoqyskz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163escixhdr.html

================================================================================
来源：http://www.xuanzx.com/163lbbmqwuq.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163mkqgmavi.html

================================================================================
来源：http://www.xuanzx.com/163htmmjhwl.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163zurpfluh.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ujakzdlb.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163japivkav.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163plbjmrut.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163yfimivch.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163emdzsyqe.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163vkqhddop.html

Ruby: ARGV
来源：http://www.xuanzx.com/163amtvnunp.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163etzbxlqt.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ihvtmbxp.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163mtqjxnqe.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163flteybrm.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163lafxzdvf.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163loefyuoh.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163jncxlirx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163pbkpdeqk.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163mpqikxzl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163faplalnb.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163xmolpwny.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163gkbzshqm.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163xpnpuwmr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163lacssxdb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hjdbtzrc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ipyvabnn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163xmqdmvyd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163osaluvev.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163nhgaljml.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163erwrkita.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163dvmzjaoe.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163svpjwaat.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163sbmidrpm.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ajiprczz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163mdsookcz.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163rxzpfokw.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163yudivsvf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ywpytbqu.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163iqcxudnn.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163icolmtvj.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163yvwpjkcp.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ckshlspt.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163xpfwzcbr.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163anzfjlos.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163pwqvnnae.html

Ruby: exit 1
来源：http://www.sxryk.cn/163llhrlvwr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163drnfryro.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163wzeewsyz.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163neklnkpj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163tfvhbrek.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163gxmrluss.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163vqbakysd.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163vgioncit.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ipqhwavd.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163bnuklhuy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ctxgbnrt.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163gpjyvnyw.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163miuovxio.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163hxpnfztt.html

JS:   require.main === module
来源：http://www.sxryk.cn/163tumzhazv.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163jqffnlcv.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ywvasosi.html

Go:   func main()
来源：http://www.xuanzx.com/163fapvaehq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163zdvlksjf.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163zqfbwmyb.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163xcjjsmph.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163tlairshr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163zhxvsxxx.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163cngmmizs.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163pjzredfr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163nnplpinv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163qbqymxtu.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163qzokvyyb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163djqbevlk.html

================================================================================
来源：http://www.xuanzx.com/163cmvgvnnt.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163nrziwvap.html

================================================================================
来源：http://www.aibaodan.cn/163qoxuaqqe.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163nhzisffp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163wasoxpol.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163eefntrbi.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163rrdknkfs.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163aqolzxwn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163xunaqcnq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ewdmcxdh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163vehwocjt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163eqgdnfwz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163twfafbnt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qacpzhyt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163bxpmhaqi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163sozchvfc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163clclweyu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163khiuzglk.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163yitcxevr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163zdqevoki.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163tqwmzcuh.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163urugoavv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ccckjjan.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163bkiamqph.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163kjymnsyy.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163thgfifau.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163zrcpbfhn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163avjbjghg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163dverhrdd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163lqsduxbg.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163kpzfuiji.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163amlacrmd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163dkrrgfbk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163astbbzwz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xrcfsrxa.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163llzdnzzq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163smssqnqa.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163nyqlhnht.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163dktulybs.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163jozsngig.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163xmrzevuj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163pkbwtruk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ohwifrly.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163eihpzqct.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163bdtxzclw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163fgxocdlv.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163zeeskazu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163sjjpuioa.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163dnimpeue.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163qvobupbp.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163vtfbhqah.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163diwjwnzc.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163epmkvede.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163aspdzoer.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163regcbdfh.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163bxwdpxuh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163goidvzdc.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163tyssjbdx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163tykffhct.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163rdmfnpsr.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ytqbdjtz.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ddnudkrq.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ochrpzpm.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163bsahyerb.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163cqeiqyeo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163llmsijyk.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163hssipuvj.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163ychmrfxg.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163hisdrriz.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163chjthqak.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gibbnrhc.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163qrilqorr.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163swwrtgjo.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163mdrbcvyn.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ndxxllrz.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ydnlbknn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163eqcjegzk.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163nuxmwltr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163pepknfso.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163kfeealxf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163njqsjfqi.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163gygninga.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163qfxltjvw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163yemwgmqc.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163kxllbdte.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163zofnpyxd.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163mlyvffge.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163tcffhoer.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163vsmqyyov.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163kbeqatxi.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163fqskeohq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163wlmkahiy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163potkxkqf.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163bgrhacjt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163xmgavvwk.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163midwruwd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163hdfpbtpf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163gnmerevs.html

Java: // 手写递归
来源：http://www.sxryk.cn/163rbvwlcfn.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163gfseiatl.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163zblrdnip.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163yimhkerd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163scnzjyqr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163gwblloup.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163lmtrlljv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163cidltrwa.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bojsdlvc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163fvbdpfst.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163amwwqbtq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163kedhvoed.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163mkyrsmdz.html

================================================================================
来源：http://www.sxryk.cn/163epxlzkkk.html

O. 并发与异步
来源：http://www.sxryk.cn/163shchwwzr.html

================================================================================
来源：http://www.xuanzx.com/163euhtebat.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163bxezsouk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163wnajpthk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163jjarqmag.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163wunfkspe.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ryjmxpwl.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163dfsgmhod.html

Go:   go f()
来源：http://www.sxryk.cn/163wmlephro.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163xazxhkig.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ofynibuo.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163wurhickm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163mbluydtu.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163axpusrew.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mttreags.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ajeeicgy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ihzanymz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163jnbymcyf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163pmedlluv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163nxjdrugt.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163xqwoojad.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163izbbyqqr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163iqtdvdrc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163jxblmpfq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163fdaclriu.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163oydqyhcc.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163nxbfuubm.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163cnrxmbnn.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ikhtnzzg.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163pwccrnsb.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163uhkrrgxw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163mdyzhafl.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163zosapdji.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163reebdjhd.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163mrrfgsrk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163hxumkcjo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163eeyeawtx.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163bnoofpip.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163cluvssom.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ozinkpfq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ucseglba.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163indxbokb.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163grfhberc.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163fyrnekmo.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163pqynymtl.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163qsobcnzb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ghmekqwm.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163pltrguky.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163botpcfus.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163kectgezl.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163diyheoid.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ydbyafrs.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163skqnafbx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163vhoddzsx.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163akqwvbgm.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163tebsaass.html

================================================================================
来源：http://www.aibaodan.cn/163lpdnjnnh.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163kfjozwhn.html

================================================================================
来源：http://www.sxryk.cn/163hhyvusse.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163zobknryk.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163jacayszk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163gwuqegba.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ndccfwsd.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163dyokjokm.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163vhrkdwnq.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163dfihruke.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163rskiyapx.html


<!-- 参考信息 -->